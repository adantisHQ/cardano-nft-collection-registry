import type {
  CollectionDefinition,
  IndexingNote,
  LicenseInfo,
  LinkMappings,
  MediaMappings,
  NormalizationRule,
  RoyaltyInfo,
  SocialMappings,
  SourcedValue,
  TraitMapping,
} from "./schemas.js";
import { extractTraitValue } from "./trait-extraction.js";
import { extractBySourcePath } from "./source-path.js";

export interface NormalizedCollectionMetadata {
  collection_id: string;
  name: string;
  traits: Record<string, unknown>;
  media: Record<string, unknown>;
  socials: Record<string, unknown>;
  links: Record<string, unknown>;
  license: Record<string, unknown>;
  royalties: Record<string, unknown>;
  warnings: string[];
}

function isPresent(value: unknown): boolean {
  return value !== undefined && value !== null;
}

function resolveSourcedValue(
  field: SourcedValue | undefined,
  rawMetadata: unknown,
): unknown {
  if (!field) {
    return undefined;
  }

  if (isPresent(field.value)) {
    return field.value;
  }

  if (field.source_path) {
    return extractBySourcePath(rawMetadata, field.source_path);
  }

  return undefined;
}

function resolveFromSourcePaths(
  rawMetadata: unknown,
  sourcePaths: string[] | undefined,
): { value: unknown; path?: string } {
  if (!sourcePaths || sourcePaths.length === 0) {
    return { value: undefined };
  }

  for (const sourcePath of sourcePaths) {
    const value = extractBySourcePath(rawMetadata, sourcePath);
    if (isPresent(value)) {
      return { value, path: sourcePath };
    }
  }

  return { value: undefined };
}

function resolveTraitMapping(
  mapping: TraitMapping,
  rawMetadata: unknown,
  warnings: string[],
): unknown {
  const { value, warnings: extractionWarnings } = extractTraitValue(
    rawMetadata,
    mapping,
  );
  warnings.push(...extractionWarnings);

  if (!isPresent(value)) {
    return undefined;
  }

  if (mapping.notes && mapping.extraction?.strategy) {
    warnings.push(
      `Trait ${mapping.canonical_trait} resolved via ${mapping.extraction.strategy}`,
    );
  } else if (mapping.notes) {
    const { path } = resolveFromSourcePaths(rawMetadata, mapping.source_paths);
    if (path) {
      warnings.push(`Trait ${mapping.canonical_trait} resolved via ${path}`);
    }
  }

  return value;
}

function resolveMappingRecord(
  mappings: Record<string, SourcedValue> | undefined,
  rawMetadata: unknown,
): Record<string, unknown> {
  const result: Record<string, unknown> = {};
  if (!mappings) {
    return result;
  }

  for (const [key, field] of Object.entries(mappings)) {
    const value = resolveSourcedValue(field, rawMetadata);
    if (isPresent(value)) {
      result[key] = value;
    }
  }

  return result;
}

function resolveLicenseInfo(
  licenseInfo: LicenseInfo | undefined,
  rawMetadata: unknown,
): Record<string, unknown> {
  if (!licenseInfo) {
    return {};
  }

  return {
    ...(isPresent(resolveSourcedValue(licenseInfo.license, rawMetadata))
      ? { license: resolveSourcedValue(licenseInfo.license, rawMetadata) }
      : {}),
    ...(isPresent(resolveSourcedValue(licenseInfo.license_url, rawMetadata))
      ? { license_url: resolveSourcedValue(licenseInfo.license_url, rawMetadata) }
      : {}),
    ...(isPresent(resolveSourcedValue(licenseInfo.commercial_use, rawMetadata))
      ? {
          commercial_use: resolveSourcedValue(
            licenseInfo.commercial_use,
            rawMetadata,
          ),
        }
      : {}),
    ...(isPresent(resolveSourcedValue(licenseInfo.derivative_use, rawMetadata))
      ? {
          derivative_use: resolveSourcedValue(
            licenseInfo.derivative_use,
            rawMetadata,
          ),
        }
      : {}),
  };
}

function resolveRoyaltyInfo(
  royaltyInfo: RoyaltyInfo | undefined,
  rawMetadata: unknown,
): Record<string, unknown> {
  if (!royaltyInfo) {
    return {};
  }

  const result: Record<string, unknown> = {};

  if (royaltyInfo.has_royalties !== undefined) {
    result["has_royalties"] = royaltyInfo.has_royalties;
  }
  if (royaltyInfo.source) {
    result["source"] = royaltyInfo.source;
  }
  if (royaltyInfo.notes) {
    result["notes"] = royaltyInfo.notes;
  }
  if (royaltyInfo.royalty_token) {
    result["royalty_token"] = royaltyInfo.royalty_token;
  }

  const percentage = resolveSourcedValue(royaltyInfo.royalty_percentage, rawMetadata);
  if (isPresent(percentage)) {
    result["royalty_percentage"] = percentage;
  }

  const address = resolveSourcedValue(royaltyInfo.royalty_address, rawMetadata);
  if (isPresent(address)) {
    result["royalty_address"] = address;
  }

  return result;
}

function resolveMediaMappings(
  mediaMappings: MediaMappings | undefined,
  rawMetadata: unknown,
): Record<string, unknown> {
  if (!mediaMappings) {
    return {};
  }

  const result: Record<string, unknown> = {};
  const scalarKeys = [
    "image",
    "thumbnail",
    "banner",
    "logo",
    "animation",
  ] as const;

  for (const key of scalarKeys) {
    const value = resolveSourcedValue(mediaMappings[key], rawMetadata);
    if (isPresent(value)) {
      result[key] = value;
    }
  }

  if (mediaMappings.files && mediaMappings.files.length > 0) {
    const files = mediaMappings.files
      .map((fileMapping) => {
        const src =
          fileMapping.value ??
          (fileMapping.source_path
            ? extractBySourcePath(rawMetadata, fileMapping.source_path)
            : undefined);
        const mediaType = fileMapping.media_type_path
          ? extractBySourcePath(rawMetadata, fileMapping.media_type_path)
          : undefined;

        if (!isPresent(src)) {
          return null;
        }

        return {
          ...(fileMapping.label ? { label: fileMapping.label } : {}),
          src,
          ...(isPresent(mediaType) ? { mediaType } : {}),
        };
      })
      .filter((entry) => entry !== null);

    if (files.length > 0) {
      result["files"] = files;
    }
  }

  return result;
}

function applyNormalizationRules(
  output: NormalizedCollectionMetadata,
  rules: NormalizationRule[] | undefined,
): NormalizedCollectionMetadata {
  if (!rules || rules.length === 0) {
    return output;
  }

  const traits = { ...output.traits };

  for (const rule of rules) {
    if (rule.type === "trait_name" && rule.scope !== "media") {
      if (rule.from in traits) {
        traits[rule.to] = traits[rule.from];
        delete traits[rule.from];
      }
      continue;
    }

    if (rule.type === "trait_value" && rule.scope !== "media") {
      for (const [traitName, traitValue] of Object.entries(traits)) {
        if (traitValue === rule.from) {
          traits[traitName] = rule.to;
        }
      }
    }
  }

  return {
    ...output,
    traits,
  };
}

function appendIndexingNotes(
  warnings: string[],
  notes: IndexingNote[] | undefined,
): string[] {
  if (!notes || notes.length === 0) {
    return warnings;
  }

  return [
    ...warnings,
    ...notes.map((note) => `[${note.severity}] ${note.message}`),
  ];
}

export function normalizeCollectionMetadata(
  rawMetadata: unknown,
  collectionDefinition: CollectionDefinition,
): NormalizedCollectionMetadata {
  const warnings: string[] = [];
  const traits: Record<string, unknown> = {};

  for (const mapping of collectionDefinition.trait_mappings ?? []) {
    const value = resolveTraitMapping(mapping, rawMetadata, warnings);
    if (isPresent(value)) {
      traits[mapping.canonical_trait] = value;
    }
  }

  const base: NormalizedCollectionMetadata = {
    collection_id: collectionDefinition.collection_id,
    name: collectionDefinition.name,
    traits,
    media: resolveMediaMappings(collectionDefinition.media_mappings, rawMetadata),
    socials: resolveMappingRecord(
      collectionDefinition.social_mappings as SocialMappings | undefined,
      rawMetadata,
    ),
    links: resolveMappingRecord(
      collectionDefinition.link_mappings as LinkMappings | undefined,
      rawMetadata,
    ),
    license: resolveLicenseInfo(collectionDefinition.license_info, rawMetadata),
    royalties: resolveRoyaltyInfo(collectionDefinition.royalty_info, rawMetadata),
    warnings: appendIndexingNotes(warnings, collectionDefinition.indexing_notes),
  };

  return applyNormalizationRules(
    base,
    collectionDefinition.normalization_rules,
  );
}
