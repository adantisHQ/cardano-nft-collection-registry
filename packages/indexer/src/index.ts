import type { CollectionDefinition, RegistryNetwork } from "@cardano-nft-collection-registry/core";
import {
  buildPolicyIndex,
  DEFAULT_REGISTRY_NETWORK,
  getTraitMappings,
  loadRegistry,
  normalizeCollectionMetadata,
  type LoadRegistryOptions,
} from "@cardano-nft-collection-registry/core";

export type {
  CollectionDefinition,
  NormalizedCollectionMetadata,
  RegistryNetwork,
} from "@cardano-nft-collection-registry/core";

export {
  extractBySourcePath,
  normalizeCollectionMetadata,
} from "@cardano-nft-collection-registry/core";

export interface RegistryIndexer {
  resolveCollectionByPolicy(policyId: string): CollectionDefinition | undefined;
  getTraitSchema(collectionId: string): ReturnType<typeof getTraitMappings>;
  normalizeCollectionMetadata(
    rawMetadata: unknown,
    collectionDefinition: CollectionDefinition,
  ): ReturnType<typeof normalizeCollectionMetadata>;
}

export interface LoadRegistryIndexerOptions extends LoadRegistryOptions {
  network?: RegistryNetwork;
}

export function createRegistryIndexer(
  definitions: CollectionDefinition[],
): RegistryIndexer {
  const policyIndex = buildPolicyIndex(definitions);
  const byId = new Map(definitions.map((record) => [record.collection_id, record]));

  return {
    resolveCollectionByPolicy(policyId: string): CollectionDefinition | undefined {
      return policyIndex.get(policyId.toLowerCase())?.record;
    },

    getTraitSchema(collectionId: string) {
      const record = byId.get(collectionId);
      return record ? getTraitMappings(record) : [];
    },

    normalizeCollectionMetadata(rawMetadata, collectionDefinition) {
      return normalizeCollectionMetadata(rawMetadata, collectionDefinition);
    },
  };
}

export async function loadRegistryIndexer(
  options: LoadRegistryIndexerOptions | string = {},
): Promise<RegistryIndexer> {
  const loadOptions: LoadRegistryOptions =
    typeof options === "string"
      ? { directory: options, network: DEFAULT_REGISTRY_NETWORK }
      : {
          network: DEFAULT_REGISTRY_NETWORK,
          allowLegacyFallback: true,
          ...options,
        };

  const network = loadOptions.network ?? DEFAULT_REGISTRY_NETWORK;
  if (loadOptions.allowLegacyFallback === undefined) {
    loadOptions.allowLegacyFallback = network === DEFAULT_REGISTRY_NETWORK;
  }

  const { collections, errors } = await loadRegistry(loadOptions);
  if (errors.length > 0) {
    const message = errors
      .map((entry) => `${entry.file}: ${entry.errors.join(", ")}`)
      .join("; ");
    throw new Error(`Failed to load registry: ${message}`);
  }
  return createRegistryIndexer(collections);
}

export function resolveCollectionByPolicy(
  definitions: CollectionDefinition[],
  policyId: string,
): CollectionDefinition | undefined {
  return createRegistryIndexer(definitions).resolveCollectionByPolicy(policyId);
}

export function getTraitSchema(
  definitions: CollectionDefinition[],
  collectionId: string,
) {
  return createRegistryIndexer(definitions).getTraitSchema(collectionId);
}

/** @deprecated Use normalizeCollectionMetadata */
export function normalizeTraits(
  rawMetadata: unknown,
  collectionDefinition: CollectionDefinition,
) {
  const normalized = normalizeCollectionMetadata(rawMetadata, collectionDefinition);
  return {
    traits: Object.entries(normalized.traits).map(([trait_type, value]) => ({
      trait_type,
      display_name: trait_type,
      value,
      value_type: "unknown" as const,
      source: "custom" as const,
    })),
    warnings: normalized.warnings,
  };
}

/** @deprecated Collection-level media is resolved via normalizeCollectionMetadata */
export function getMediaHints(collectionDefinition: CollectionDefinition) {
  return {
    collection_media: collectionDefinition.media_mappings ?? {},
  };
}
