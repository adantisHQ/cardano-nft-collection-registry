import { z } from "zod";

export const POLICY_ID_PATTERN = /^[0-9a-fA-F]{56}$/;
export const COLLECTION_ID_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
export const REGISTRY_VERSION_PATTERN = /^\d+\.\d+\.\d+$/;

export const definitionStatusSchema = z.enum([
  "minimal",
  "partial",
  "complete",
  "inferred",
  "broken",
  "unknown",
]);

export const fieldSourceSchema = z.enum([
  "registry",
  "cip25",
  "cip68",
  "custom",
  "external",
]);

export const primaryStandardSchema = z.enum([
  "cip25",
  "cip68",
  "custom",
  "mixed",
  "unknown",
]);

export const assetNameEncodingSchema = z.enum([
  "utf8",
  "hex",
  "mixed",
  "unknown",
]);

export const traitValueTypeSchema = z.enum([
  "string",
  "enum",
  "integer",
  "number",
  "boolean",
  "date",
  "datetime",
  "percentage",
  "score",
  "rank",
  "object",
  "array",
  "unknown",
]);

export const traitMappingSourceSchema = z.enum([
  "cip25",
  "cip68",
  "custom",
  "external",
  "registry",
]);

export const traitExtractionStrategySchema = z.enum([
  "direct_path",
  "first_existing_path",
  "array_singleton_object",
  "key_value_array",
  "root_flat_keys",
]);

export const traitExtractionSchema = z.object({
  strategy: traitExtractionStrategySchema,
  source_path: z.string().optional(),
  key: z.string().optional(),
  key_field: z.string().optional(),
  value_field: z.string().optional(),
});

export const socialPlatformSchema = z.enum([
  "x",
  "discord",
  "telegram",
  "github",
  "youtube",
  "instagram",
  "tiktok",
  "medium",
  "reddit",
  "linkedin",
  "other",
]);

export const linkTypeSchema = z.enum([
  "website",
  "mint",
  "documentation",
  "whitepaper",
  "game",
  "app",
  "explorer",
  "marketplace",
  "terms",
  "support",
  "metadata",
  "other",
]);

export const externalResourceTypeSchema = z.enum([
  "metadata_manifest",
  "trait_manifest",
  "rarity_manifest",
  "media_archive",
  "license",
  "other",
]);

export const royaltySourceSchema = z.enum([
  "cip27",
  "royalty_token",
  "marketplace",
  "registry",
  "unknown",
]);

export const normalizationRuleTypeSchema = z.enum([
  "trait_name",
  "trait_value",
  "media_uri",
  "asset_name",
  "metadata_field",
]);

export const normalizationRuleScopeSchema = z.enum([
  "collection",
  "trait",
  "media",
  "global",
]);

export const indexingNoteSeveritySchema = z.enum([
  "info",
  "warning",
  "critical",
]);

export const sourcedValueSchema = z.object({
  value: z.unknown().optional().nullable(),
  source_path: z.string().optional(),
  source: fieldSourceSchema.optional(),
  notes: z.string().optional(),
});

export const identitySchema = z.object({
  display_name: sourcedValueSchema.optional(),
  description: sourcedValueSchema.optional(),
  category: sourcedValueSchema.optional(),
  tags: z.array(z.string()).optional(),
});

export const cip25LayoutSchema = z.object({
  label: z.string().optional(),
  policy_path: z.string().optional(),
  asset_metadata_path: z.string().optional(),
});

export const cip68LayoutSchema = z.object({
  enabled: z.boolean().optional(),
  datum_path: z.string().nullable().optional(),
  reference_token_pattern: z.string().nullable().optional(),
});

export const customLayoutSchema = z.object({
  description: z.string().optional(),
});

export const metadataLayoutSchema = z.object({
  primary_standard: primaryStandardSchema.optional(),
  metadata_root: z.string().optional(),
  asset_name_encoding: assetNameEncodingSchema.optional(),
  cip25: cip25LayoutSchema.optional(),
  cip68: cip68LayoutSchema.optional(),
  custom: customLayoutSchema.optional(),
});

export const traitMappingSchema = z.object({
  canonical_trait: z.string().min(1),
  display_name: z.string().optional(),
  value_type: traitValueTypeSchema,
  category: z.string().optional(),
  required: z.boolean().optional(),
  dynamic: z.boolean().optional(),
  source: traitMappingSourceSchema.optional(),
  source_paths: z.array(z.string()).optional(),
  extraction: traitExtractionSchema.optional(),
  normalization: z.record(z.unknown()).optional(),
  allowed_values: z.array(z.unknown()).optional(),
  notes: z.string().optional(),
});

export const mediaFileMappingSchema = z.object({
  label: z.string().optional(),
  source_path: z.string().optional(),
  media_type_path: z.string().optional(),
  value: z.unknown().optional().nullable(),
  source: fieldSourceSchema.optional(),
  notes: z.string().optional(),
});

export const mediaMappingsSchema = z.object({
  image: sourcedValueSchema.optional(),
  thumbnail: sourcedValueSchema.optional(),
  banner: sourcedValueSchema.optional(),
  logo: sourcedValueSchema.optional(),
  animation: sourcedValueSchema.optional(),
  files: z.array(mediaFileMappingSchema).optional(),
});

export const socialMappingsSchema = z.record(z.string(), sourcedValueSchema);

export const linkMappingsSchema = z.record(z.string(), sourcedValueSchema);

export const externalResourceSchema = z.object({
  type: externalResourceTypeSchema,
  label: z.string().optional(),
  uri: z.string().min(1),
  hash: z.string().nullable().optional(),
  notes: z.string().optional(),
});

export const licenseInfoSchema = z.object({
  license: sourcedValueSchema.optional(),
  license_url: sourcedValueSchema.optional(),
  commercial_use: sourcedValueSchema.optional(),
  derivative_use: sourcedValueSchema.optional(),
});

export const royaltyTokenSchema = z.object({
  policy_id: z.string().regex(POLICY_ID_PATTERN).optional(),
  asset_name: z.string().optional(),
});

export const royaltyInfoSchema = z.object({
  has_royalties: z.boolean().optional(),
  source: royaltySourceSchema.optional(),
  royalty_percentage: sourcedValueSchema.optional(),
  royalty_address: sourcedValueSchema.optional(),
  royalty_token: royaltyTokenSchema.optional(),
  notes: z.string().optional(),
});

export const normalizationRuleSchema = z.object({
  type: normalizationRuleTypeSchema,
  from: z.string().min(1),
  to: z.string().min(1),
  scope: normalizationRuleScopeSchema.optional(),
  notes: z.string().optional(),
});

export const indexingNoteSchema = z.object({
  severity: indexingNoteSeveritySchema,
  message: z.string().min(1),
});

export const collectionDefinitionSchema = z.object({
  registry_version: z.string().regex(REGISTRY_VERSION_PATTERN),
  collection_id: z.string().regex(COLLECTION_ID_PATTERN),
  name: z.string().min(1),
  definition_status: definitionStatusSchema,
  policy_ids: z
    .array(z.string().regex(POLICY_ID_PATTERN))
    .min(1, "policy_ids must contain at least one policy ID"),
  identity: identitySchema.optional(),
  metadata_layout: metadataLayoutSchema.optional(),
  trait_mappings: z.array(traitMappingSchema).optional(),
  media_mappings: mediaMappingsSchema.optional(),
  social_mappings: socialMappingsSchema.optional(),
  link_mappings: linkMappingsSchema.optional(),
  external_resources: z.array(externalResourceSchema).optional(),
  license_info: licenseInfoSchema.optional(),
  royalty_info: royaltyInfoSchema.optional(),
  normalization_rules: z.array(normalizationRuleSchema).optional(),
  indexing_notes: z.array(indexingNoteSchema).optional(),
});

export type DefinitionStatus = z.infer<typeof definitionStatusSchema>;
export type FieldSource = z.infer<typeof fieldSourceSchema>;
export type PrimaryStandard = z.infer<typeof primaryStandardSchema>;
export type AssetNameEncoding = z.infer<typeof assetNameEncodingSchema>;
export type TraitValueType = z.infer<typeof traitValueTypeSchema>;
export type TraitExtractionStrategy = z.infer<typeof traitExtractionStrategySchema>;
export type TraitExtraction = z.infer<typeof traitExtractionSchema>;
export type TraitMappingSource = z.infer<typeof traitMappingSourceSchema>;
export type SocialPlatform = z.infer<typeof socialPlatformSchema>;
export type LinkType = z.infer<typeof linkTypeSchema>;
export type ExternalResourceType = z.infer<typeof externalResourceTypeSchema>;
export type RoyaltySource = z.infer<typeof royaltySourceSchema>;
export type NormalizationRuleType = z.infer<typeof normalizationRuleTypeSchema>;
export type NormalizationRuleScope = z.infer<typeof normalizationRuleScopeSchema>;
export type IndexingNoteSeverity = z.infer<typeof indexingNoteSeveritySchema>;
export type SourcedValue = z.infer<typeof sourcedValueSchema>;
export type Identity = z.infer<typeof identitySchema>;
export type MetadataLayout = z.infer<typeof metadataLayoutSchema>;
export type TraitMapping = z.infer<typeof traitMappingSchema>;
export type MediaMappings = z.infer<typeof mediaMappingsSchema>;
export type SocialMappings = z.infer<typeof socialMappingsSchema>;
export type LinkMappings = z.infer<typeof linkMappingsSchema>;
export type ExternalResource = z.infer<typeof externalResourceSchema>;
export type LicenseInfo = z.infer<typeof licenseInfoSchema>;
export type RoyaltyInfo = z.infer<typeof royaltyInfoSchema>;
export type NormalizationRule = z.infer<typeof normalizationRuleSchema>;
export type IndexingNote = z.infer<typeof indexingNoteSchema>;
export type CollectionDefinition = z.infer<typeof collectionDefinitionSchema>;

/** @deprecated Use CollectionDefinition */
export type CollectionRecord = CollectionDefinition;

export type ValidationResult =
  | { success: true; data: CollectionDefinition }
  | { success: false; errors: string[] };

export function validateCollectionDefinition(input: unknown): ValidationResult {
  const result = collectionDefinitionSchema.safeParse(input);

  if (result.success) {
    return { success: true, data: result.data };
  }

  const errors = result.error.issues.map(
    (issue) => `${issue.path.join(".") || "root"}: ${issue.message}`,
  );

  return { success: false, errors };
}

/** @deprecated Use validateCollectionDefinition */
export function validateCollectionRecord(input: unknown): ValidationResult {
  return validateCollectionDefinition(input);
}

export function normalizeCollectionId(input: string): string {
  return input
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}

export function getPoliciesForCollection(definition: CollectionDefinition): string[] {
  return [...definition.policy_ids];
}

export function getTraitMappings(definition: CollectionDefinition): TraitMapping[] {
  return definition.trait_mappings ?? [];
}

/** @deprecated Use getTraitMappings */
export function getTraitDefinitions(definition: CollectionDefinition): TraitMapping[] {
  return getTraitMappings(definition);
}

export function isValidPolicyId(policyId: string): boolean {
  return POLICY_ID_PATTERN.test(policyId);
}

export function isValidCollectionId(collectionId: string): boolean {
  return COLLECTION_ID_PATTERN.test(collectionId);
}
