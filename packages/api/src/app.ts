import type { CollectionDefinition, RegistryNetwork } from "@cardano-nft-collection-registry/core";
import {
  buildPolicyIndex,
  findCollectionById,
  loadRegistry,
  normalizeNetwork,
  searchCollections,
  type LoadRegistryOptions,
} from "@cardano-nft-collection-registry/core";

export interface ApiRequest {
  method: string;
  pathname: string;
  searchParams: URLSearchParams;
}

export interface ApiResponse {
  status: number;
  body: unknown;
}

export interface RegistryApiContext {
  network: RegistryNetwork;
  resolvedPath: string;
  usedLegacyFallback: boolean;
}

export interface RegistryApi {
  handle(request: ApiRequest): ApiResponse;
  context: RegistryApiContext;
}

export function createRegistryApi(
  definitions: CollectionDefinition[],
  context: RegistryApiContext,
): RegistryApi {
  const policyIndex = buildPolicyIndex(definitions);

  return {
    context,
    handle(request: ApiRequest): ApiResponse {
      const { method, pathname, searchParams } = request;

      if (method !== "GET") {
        return { status: 405, body: { error: "Method not allowed" } };
      }

      if (pathname === "/collections") {
        return {
          status: 200,
          body: {
            network: context.network,
            count: definitions.length,
            collections: definitions.map((record) => ({
              collection_id: record.collection_id,
              name: record.name,
              definition_status: record.definition_status,
              policy_count: record.policy_ids.length,
              primary_standard:
                record.metadata_layout?.primary_standard ?? "unknown",
            })),
          },
        };
      }

      const collectionMatch = pathname.match(/^\/collections\/([^/]+)$/);
      if (collectionMatch) {
        const collectionId = decodeURIComponent(collectionMatch[1] ?? "");
        const record = findCollectionById(definitions, collectionId);
        if (!record) {
          return { status: 404, body: { error: "Collection not found" } };
        }
        return { status: 200, body: record };
      }

      const policyMatch = pathname.match(/^\/policies\/([^/]+)$/);
      if (policyMatch) {
        const policyId = decodeURIComponent(policyMatch[1] ?? "");
        const entry = policyIndex.get(policyId.toLowerCase());
        if (!entry) {
          return { status: 404, body: { error: "Policy not found" } };
        }
        return {
          status: 200,
          body: {
            policy_id: policyId,
            collection_id: entry.collection_id,
            collection: entry.record,
          },
        };
      }

      if (pathname === "/search") {
        const query = searchParams.get("q") ?? "";
        const results = searchCollections(definitions, query);
        return {
          status: 200,
          body: {
            network: context.network,
            query,
            count: results.length,
            collections: results,
          },
        };
      }

      if (pathname === "/health") {
        return {
          status: 200,
          body: {
            status: "ok",
            network: context.network,
            registry_path: context.resolvedPath,
          },
        };
      }

      return { status: 404, body: { error: "Not found" } };
    },
  };
}

export async function loadRegistryApi(
  options: LoadRegistryOptions = {},
): Promise<RegistryApi> {
  const { collections, errors, network, resolvedPath, usedLegacyFallback } =
    await loadRegistry(options);
  if (errors.length > 0) {
    throw new Error(
      errors.map((entry) => `${entry.file}: ${entry.errors.join(", ")}`).join("; "),
    );
  }
  return createRegistryApi(collections, {
    network,
    resolvedPath,
    usedLegacyFallback,
  });
}

export function resolveNetworkFromRequest(
  searchParams: URLSearchParams,
  defaultNetwork?: RegistryNetwork,
): RegistryNetwork {
  const queryNetwork = searchParams.get("network");
  if (queryNetwork) {
    return normalizeNetwork(queryNetwork);
  }
  return defaultNetwork ?? normalizeNetwork(process.env["REGISTRY_NETWORK"]);
}
