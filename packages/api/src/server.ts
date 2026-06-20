import { createServer } from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  DEFAULT_REGISTRY_NETWORK,
  normalizeNetwork,
  type RegistryNetwork,
} from "@cardano-nft-collection-registry/core";
import { loadRegistryApi, resolveNetworkFromRequest } from "./app.js";

const DEFAULT_PORT = 3000;

function getDefaultNetwork(): RegistryNetwork {
  return normalizeNetwork(process.env["REGISTRY_NETWORK"] ?? DEFAULT_REGISTRY_NETWORK);
}

function getRegistryLoadOptions(network: RegistryNetwork) {
  if (process.env["REGISTRY_ROOT"]) {
    return {
      directory: path.resolve(process.env["REGISTRY_ROOT"]),
      network,
    };
  }

  const moduleDir = path.dirname(fileURLToPath(import.meta.url));
  const repoRoot = path.resolve(moduleDir, "../../..");
  return {
    startDir: repoRoot,
    network,
    allowLegacyFallback: network === DEFAULT_REGISTRY_NETWORK,
  };
}

export async function startServer(port: number = DEFAULT_PORT): Promise<void> {
  const defaultNetwork = getDefaultNetwork();
  const defaultApi = await loadRegistryApi(getRegistryLoadOptions(defaultNetwork));
  const apiCache = new Map<RegistryNetwork, Awaited<ReturnType<typeof loadRegistryApi>>>([
    [defaultNetwork, defaultApi],
  ]);

  async function getApiForNetwork(network: RegistryNetwork) {
    const cached = apiCache.get(network);
    if (cached) {
      return cached;
    }
    const api = await loadRegistryApi(getRegistryLoadOptions(network));
    apiCache.set(network, api);
    return api;
  }

  const server = createServer(async (req, res) => {
    try {
      const url = new URL(req.url ?? "/", `http://${req.headers.host ?? "localhost"}`);
      const network = resolveNetworkFromRequest(url.searchParams, defaultNetwork);
      const api = await getApiForNetwork(network);
      const response = api.handle({
        method: req.method ?? "GET",
        pathname: url.pathname,
        searchParams: url.searchParams,
      });

      res.statusCode = response.status;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(response.body));
    } catch (error) {
      res.statusCode = 400;
      res.setHeader("Content-Type", "application/json");
      res.end(
        JSON.stringify({
          error: error instanceof Error ? error.message : String(error),
        }),
      );
    }
  });

  await new Promise<void>((resolve) => {
    server.listen(port, () => {
      console.log(`Registry API listening on http://localhost:${port}`);
      console.log(`Default network: ${defaultNetwork}`);
      console.log(`Registry path: ${defaultApi.context.resolvedPath}`);
      resolve();
    });
  });
}

const isDirectRun = process.argv[1]?.endsWith("server.js") ?? false;

if (isDirectRun) {
  const port = Number(process.env["PORT"] ?? DEFAULT_PORT);
  startServer(Number.isFinite(port) ? port : DEFAULT_PORT).catch((error) => {
    console.error(error);
    process.exit(1);
  });
}
