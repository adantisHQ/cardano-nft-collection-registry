import type { TraitMapping } from "./schemas.js";
import { extractBySourcePath } from "./source-path.js";

export type TraitExtractionStrategy =
  | "direct_path"
  | "first_existing_path"
  | "array_singleton_object"
  | "key_value_array"
  | "root_flat_keys";

export interface ExtractTraitValueResult {
  value: unknown;
  warnings: string[];
}

function isPresent(value: unknown): boolean {
  return value !== undefined && value !== null;
}

function applyTraitNormalization(
  value: unknown,
  normalization: Record<string, unknown> | undefined,
): unknown {
  if (!normalization || !isPresent(value)) {
    return value;
  }

  if (typeof value === "string") {
    const mapped = normalization[value];
    if (mapped !== undefined) {
      return mapped;
    }
  }

  return value;
}

function extractDirectPath(
  rawMetadata: unknown,
  sourcePath: string | undefined,
): unknown {
  if (!sourcePath) {
    return undefined;
  }
  return extractBySourcePath(rawMetadata, sourcePath);
}

function extractFirstExistingPath(
  rawMetadata: unknown,
  sourcePaths: string[] | undefined,
): unknown {
  if (!sourcePaths || sourcePaths.length === 0) {
    return undefined;
  }

  for (const sourcePath of sourcePaths) {
    const value = extractBySourcePath(rawMetadata, sourcePath);
    if (isPresent(value)) {
      return value;
    }
  }

  return undefined;
}

function extractArraySingletonObject(
  rawMetadata: unknown,
  sourcePath: string | undefined,
  key: string | undefined,
): unknown {
  if (!sourcePath || !key) {
    return undefined;
  }

  const arrayValue = extractBySourcePath(rawMetadata, sourcePath);
  if (!Array.isArray(arrayValue)) {
    return undefined;
  }

  for (const item of arrayValue) {
    if (
      item !== null &&
      typeof item === "object" &&
      !Array.isArray(item) &&
      key in (item as Record<string, unknown>)
    ) {
      return (item as Record<string, unknown>)[key];
    }
  }

  return undefined;
}

function extractKeyValueArray(
  rawMetadata: unknown,
  sourcePath: string | undefined,
  key: string | undefined,
  keyField: string | undefined,
  valueField: string | undefined,
): unknown {
  if (!sourcePath || !key) {
    return undefined;
  }

  const arrayValue = extractBySourcePath(rawMetadata, sourcePath);
  if (!Array.isArray(arrayValue)) {
    return undefined;
  }

  const resolvedKeyField = keyField ?? "key";
  const resolvedValueField = valueField ?? "value";

  for (const item of arrayValue) {
    if (item === null || typeof item !== "object" || Array.isArray(item)) {
      continue;
    }

    const record = item as Record<string, unknown>;
    if (record[resolvedKeyField] === key) {
      return record[resolvedValueField];
    }
  }

  return undefined;
}

function extractRootFlatKey(
  rawMetadata: unknown,
  key: string | undefined,
): unknown {
  if (!key) {
    return undefined;
  }

  if (rawMetadata !== null && typeof rawMetadata === "object" && !Array.isArray(rawMetadata)) {
    const rootValue = (rawMetadata as Record<string, unknown>)[key];
    if (isPresent(rootValue)) {
      return rootValue;
    }
  }

  return extractBySourcePath(rawMetadata, `$.${key}`);
}

function extractRawTraitValue(
  rawMetadata: unknown,
  mapping: TraitMapping,
): unknown {
  const extraction = mapping.extraction;

  if (!extraction) {
    return extractFirstExistingPath(rawMetadata, mapping.source_paths);
  }

  switch (extraction.strategy) {
    case "direct_path":
      return extractDirectPath(rawMetadata, extraction.source_path);
    case "first_existing_path":
      return extractFirstExistingPath(rawMetadata, mapping.source_paths);
    case "array_singleton_object":
      return extractArraySingletonObject(
        rawMetadata,
        extraction.source_path,
        extraction.key,
      );
    case "key_value_array":
      return extractKeyValueArray(
        rawMetadata,
        extraction.source_path,
        extraction.key,
        extraction.key_field,
        extraction.value_field,
      );
    case "root_flat_keys":
      return extractRootFlatKey(rawMetadata, extraction.key);
    default:
      return extractFirstExistingPath(rawMetadata, mapping.source_paths);
  }
}

export function extractTraitValue(
  rawMetadata: unknown,
  traitMapping: TraitMapping,
): ExtractTraitValueResult {
  const warnings: string[] = [];
  const rawValue = extractRawTraitValue(rawMetadata, traitMapping);

  if (!isPresent(rawValue)) {
    if (traitMapping.required) {
      warnings.push(`Missing required trait: ${traitMapping.canonical_trait}`);
    } else {
      warnings.push(`Trait not found: ${traitMapping.canonical_trait}`);
    }
    return { value: undefined, warnings };
  }

  const normalized = applyTraitNormalization(rawValue, traitMapping.normalization);

  if (
    traitMapping.value_type === "enum" &&
    traitMapping.allowed_values &&
    traitMapping.allowed_values.length > 0 &&
    !traitMapping.allowed_values.includes(normalized)
  ) {
    warnings.push(
      `Trait ${traitMapping.canonical_trait} value ${String(normalized)} not in allowed_values`,
    );
  }

  return { value: normalized, warnings };
}
