import { mkdtempSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { validateCollectionDefinition } from "@cardano-nft-collection-registry/core";
import {
  createRegistryIndexer,
  loadRegistryIndexer,
  normalizeCollectionMetadata,
} from "./index.js";

const definition = validateCollectionDefinition({
  registry_version: "1.0.0",
  collection_id: "pixel-pals",
  name: "Pixel Pals",
  definition_status: "complete",
  policy_ids: [
    "deadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef",
  ],
  trait_mappings: [
    {
      canonical_trait: "Background",
      value_type: "enum",
      source_paths: ["$.attributes.Background"],
      normalization: { blue: "Blue" },
    },
  ],
  media_mappings: {
    image: { source_path: "$.image", source: "cip25" },
    logo: { value: "https://example.com/logo.png", source: "registry" },
  },
});

if (!definition.success) {
  throw new Error("fixture invalid");
}

const record = definition.data;

describe("loadRegistryIndexer", () => {
  it("loads from legacy mainnet path by default", async () => {
    const repo = mkdtempSync(path.join(tmpdir(), "indexer-network-test-"));
    writeFileSync(path.join(repo, "pnpm-workspace.yaml"), "", "utf8");
    const legacyDir = path.join(repo, "registry", "collections");
    mkdirSync(legacyDir, { recursive: true });
    writeFileSync(
      path.join(legacyDir, "pixel-pals.json"),
      JSON.stringify({
        registry_version: "1.0.0",
        collection_id: "pixel-pals",
        name: "Pixel Pals",
        definition_status: "complete",
        policy_ids: ["deadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef"],
        trait_mappings: [
          {
            canonical_trait: "Background",
            value_type: "enum",
            source_paths: ["$.attributes.Background"],
            normalization: { blue: "Blue" },
          },
        ],
        media_mappings: {
          image: { source_path: "$.image", source: "cip25" },
          logo: { value: "https://example.com/logo.png", source: "registry" },
        },
      }),
      "utf8",
    );

    const indexer = await loadRegistryIndexer({ startDir: repo, network: "mainnet" });
    const resolved = indexer.resolveCollectionByPolicy(
      "deadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef",
    );
    expect(resolved?.collection_id).toBe("pixel-pals");
    rmSync(repo, { recursive: true, force: true });
  });
});

describe("createRegistryIndexer", () => {
  it("resolves collection by policy", () => {
    const indexer = createRegistryIndexer([record]);
    const resolved = indexer.resolveCollectionByPolicy(
      "deadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef",
    );
    expect(resolved?.collection_id).toBe("pixel-pals");
  });
});

describe("normalizeCollectionMetadata", () => {
  it("normalizes metadata using collection definition", () => {
    const indexer = createRegistryIndexer([record]);
    const result = indexer.normalizeCollectionMetadata(
      {
        attributes: { Background: "blue" },
        image: "ipfs://asset",
      },
      record,
    );

    expect(result.traits["Background"]).toBe("Blue");
    expect(result.media["image"]).toBe("ipfs://asset");
    expect(result.media["logo"]).toBe("https://example.com/logo.png");
  });
});

describe("module export", () => {
  it("re-exports normalizeCollectionMetadata", () => {
    const result = normalizeCollectionMetadata(
      { attributes: { Background: "blue" } },
      record,
    );
    expect(result.traits["Background"]).toBe("Blue");
  });
});
