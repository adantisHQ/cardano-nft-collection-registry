import { readdir, readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import {
  type CollectionDefinition,
  validateCollectionDefinition,
} from "./schemas.js";
import {
  DEFAULT_REGISTRY_NETWORK,
  type RegistryNetwork,
  type ResolveRegistryCollectionsPathOptions,
  resolveRegistryCollectionsPath,
} from "./registry-network.js";

export type {
  RegistryNetwork,
  ResolveRegistryCollectionsPathOptions,
  ResolvedRegistryCollectionsPath,
} from "./registry-network.js";
export {
  DEFAULT_REGISTRY_NETWORK,
  normalizeNetwork,
  REGISTRY_NETWORKS,
  resolveRegistryCollectionsPath,
  resolveRegistryDefinitionWritePath,
} from "./registry-network.js";

export interface RegistryLoadResult {
  collections: CollectionDefinition[];
  errors: Array<{ file: string; errors: string[] }>;
}

export interface PolicyIndexEntry {
  collection_id: string;
  record: CollectionDefinition;
}

export interface LoadRegistryOptions extends ResolveRegistryCollectionsPathOptions {
  startDir?: string;
  /** Load from this directory instead of resolving by network. */
  directory?: string;
}

export interface LoadRegistryResult extends RegistryLoadResult {
  network: RegistryNetwork;
  resolvedPath: string;
  usedLegacyFallback: boolean;
  legacyFallbackWarning?: string;
}

export async function loadRegistry(
  options: LoadRegistryOptions = {},
): Promise<LoadRegistryResult> {
  const repoRoot = resolveRepoRoot(options.startDir ?? process.cwd());
  const resolved = options.directory
    ? {
        path: path.resolve(options.directory),
        network: options.network ?? DEFAULT_REGISTRY_NETWORK,
        usedLegacyFallback: false,
        legacyFallbackWarning: undefined as string | undefined,
      }
    : resolveRegistryCollectionsPath(repoRoot, options);

  const loadResult = await loadCollectionsFromDirectory(resolved.path);
  return {
    ...loadResult,
    network: resolved.network,
    resolvedPath: resolved.path,
    usedLegacyFallback: resolved.usedLegacyFallback,
    ...(resolved.legacyFallbackWarning
      ? { legacyFallbackWarning: resolved.legacyFallbackWarning }
      : {}),
  };
}

export async function loadCollectionsFromDirectory(
  directory: string,
): Promise<RegistryLoadResult> {
  const collections: CollectionDefinition[] = [];
  const errors: RegistryLoadResult["errors"] = [];

  let entries: string[];
  try {
    entries = await readdir(directory);
  } catch {
    return { collections, errors: [{ file: directory, errors: ["Directory not found"] }] };
  }

  const jsonFiles = entries.filter((name) => name.endsWith(".json")).sort();

  for (const file of jsonFiles) {
    const filePath = path.join(directory, file);
    const raw = await readFile(filePath, "utf8");
    let parsed: unknown;

    try {
      parsed = JSON.parse(raw) as unknown;
    } catch {
      errors.push({ file: filePath, errors: ["Invalid JSON"] });
      continue;
    }

    const result = validateCollectionDefinition(parsed);
    if (!result.success) {
      errors.push({ file: filePath, errors: result.errors });
      continue;
    }

    collections.push(result.data);
  }

  return { collections, errors };
}

export function buildPolicyIndex(
  collections: CollectionDefinition[],
): Map<string, PolicyIndexEntry> {
  const index = new Map<string, PolicyIndexEntry>();

  for (const record of collections) {
    for (const policyId of record.policy_ids) {
      const normalized = policyId.toLowerCase();
      index.set(normalized, { collection_id: record.collection_id, record });
    }
  }

  return index;
}

export function findCollectionById(
  collections: CollectionDefinition[],
  collectionId: string,
): CollectionDefinition | undefined {
  return collections.find((record) => record.collection_id === collectionId);
}

export function searchCollections(
  collections: CollectionDefinition[],
  query: string,
): CollectionDefinition[] {
  const normalizedQuery = query.trim().toLowerCase();
  if (!normalizedQuery) {
    return [];
  }

  return collections.filter((record) => {
    const description =
      record.identity?.description?.value ??
      (typeof record.identity?.description?.source_path === "string"
        ? record.identity.description.source_path
        : "");

    const haystack = [
      record.collection_id,
      record.name,
      String(description),
      record.definition_status,
      ...record.policy_ids,
      ...(record.indexing_notes?.map((note) => note.message) ?? []),
    ]
      .join(" ")
      .toLowerCase();

    return haystack.includes(normalizedQuery);
  });
}

export function resolveRegistryRoot(
  startDir: string = process.cwd(),
  network: RegistryNetwork = DEFAULT_REGISTRY_NETWORK,
): string {
  return resolveRegistryCollectionsPath(resolveRepoRoot(startDir), {
    network,
    allowLegacyFallback: network === DEFAULT_REGISTRY_NETWORK,
  }).path;
}

export function resolveRepoRoot(startDir: string = process.cwd()): string {
  let current = path.resolve(startDir);

  for (let depth = 0; depth < 8; depth += 1) {
    const marker = path.join(current, "pnpm-workspace.yaml");
    if (existsSync(marker)) {
      return current;
    }

    const parent = path.dirname(current);
    if (parent === current) {
      break;
    }
    current = parent;
  }

  return path.resolve(startDir);
}

export async function resolveRegistryRootAsync(
  startDir: string = process.cwd(),
  network: RegistryNetwork = DEFAULT_REGISTRY_NETWORK,
): Promise<string> {
  return resolveRegistryRoot(startDir, network);
}
