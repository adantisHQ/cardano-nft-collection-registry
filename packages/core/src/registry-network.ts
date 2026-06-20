import { existsSync, readdirSync } from "node:fs";
import path from "node:path";
export type RegistryNetwork = "mainnet" | "preprod" | "preview";

export const REGISTRY_NETWORKS: readonly RegistryNetwork[] = [
  "mainnet",
  "preprod",
  "preview",
] as const;

export const DEFAULT_REGISTRY_NETWORK: RegistryNetwork = "mainnet";

export interface ResolveRegistryCollectionsPathOptions {
  network?: RegistryNetwork;
  allowLegacyFallback?: boolean;
  warnLegacyFallback?: boolean;
}

export interface ResolvedRegistryCollectionsPath {
  path: string;
  network: RegistryNetwork;
  usedLegacyFallback: boolean;
  legacyFallbackWarning?: string;
}

const LEGACY_FALLBACK_WARNING =
  "Using deprecated registry/collections/; migrate definitions to registry/mainnet/collections/.";

export function normalizeNetwork(input?: string): RegistryNetwork {
  const value = (input ?? DEFAULT_REGISTRY_NETWORK).trim().toLowerCase();
  if (value === "mainnet" || value === "preprod" || value === "preview") {
    return value;
  }
  throw new Error(
    `Invalid registry network "${input}". Expected one of: ${REGISTRY_NETWORKS.join(", ")}.`,
  );
}

function isExistingDirectory(directory: string): boolean {
  return existsSync(directory);
}

function hasCollectionDefinitions(directory: string): boolean {
  if (!isExistingDirectory(directory)) {
    return false;
  }

  try {
    return readdirSync(directory).some((name) => name.endsWith(".json"));
  } catch {
    return false;
  }
}

export function resolveRegistryDefinitionWritePath(
  repoRoot: string,
  network: RegistryNetwork = DEFAULT_REGISTRY_NETWORK,
): string {
  return path.join(repoRoot, "registry", network, "collections");
}

export function resolveRegistryCollectionsPath(
  repoRoot: string,
  options: ResolveRegistryCollectionsPathOptions = {},
): ResolvedRegistryCollectionsPath {
  const network = options.network ?? DEFAULT_REGISTRY_NETWORK;
  const allowLegacyFallback =
    options.allowLegacyFallback ?? network === DEFAULT_REGISTRY_NETWORK;
  const warnLegacyFallback = options.warnLegacyFallback ?? false;

  const canonicalPath = resolveRegistryDefinitionWritePath(repoRoot, network);
  const legacyPath = path.join(repoRoot, "registry", "collections");

  if (hasCollectionDefinitions(canonicalPath)) {
    return {
      path: canonicalPath,
      network,
      usedLegacyFallback: false,
    };
  }

  if (
    network === DEFAULT_REGISTRY_NETWORK &&
    allowLegacyFallback &&
    hasCollectionDefinitions(legacyPath)
  ) {
    return {
      path: legacyPath,
      network,
      usedLegacyFallback: true,
      ...(warnLegacyFallback ? { legacyFallbackWarning: LEGACY_FALLBACK_WARNING } : {}),
    };
  }

  return {
    path: canonicalPath,
    network,
    usedLegacyFallback: false,
  };
}
