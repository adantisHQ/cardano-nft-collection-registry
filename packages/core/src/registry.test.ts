import { mkdtempSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { describe, expect, it } from "vitest";
import type { CollectionDefinition } from "./schemas.js";
import {
  buildPolicyIndex,
  loadRegistry,
  searchCollections,
} from "./registry.js";
import { validateCollectionDefinition } from "./schemas.js";

function makeRepoWithLegacyCollection(): string {
  const dir = mkdtempSync(path.join(tmpdir(), "registry-load-test-"));
  writeFileSync(path.join(dir, "pnpm-workspace.yaml"), "", "utf8");
  const legacyDir = path.join(dir, "registry", "collections");
  mkdirSync(legacyDir, { recursive: true });
  writeFileSync(
    path.join(legacyDir, "sample.json"),
    JSON.stringify({
      registry_version: "1.0.0",
      collection_id: "sample",
      name: "Sample",
      definition_status: "minimal",
      policy_ids: ["aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"],
    }),
    "utf8",
  );
  return dir;
}

describe("loadRegistry", () => {
  it("uses legacy fallback for mainnet when canonical path is missing", async () => {
    const repo = makeRepoWithLegacyCollection();
    const result = await loadRegistry({ startDir: repo, network: "mainnet" });
    expect(result.usedLegacyFallback).toBe(true);
    expect(result.collections).toHaveLength(1);
    expect(result.collections[0]?.collection_id).toBe("sample");
    rmSync(repo, { recursive: true, force: true });
  });

  it("prefers canonical mainnet path when present", async () => {
    const repo = makeRepoWithLegacyCollection();
    const canonicalDir = path.join(repo, "registry", "mainnet", "collections");
    mkdirSync(canonicalDir, { recursive: true });
    writeFileSync(
      path.join(canonicalDir, "canonical.json"),
      JSON.stringify({
        registry_version: "1.0.0",
        collection_id: "canonical",
        name: "Canonical",
        definition_status: "minimal",
        policy_ids: ["bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"],
      }),
      "utf8",
    );

    const result = await loadRegistry({ startDir: repo, network: "mainnet" });
    expect(result.usedLegacyFallback).toBe(false);
    expect(result.collections).toHaveLength(1);
    expect(result.collections[0]?.collection_id).toBe("canonical");
    rmSync(repo, { recursive: true, force: true });
  });
});

function assertValid(input: unknown): CollectionDefinition {
  const result = validateCollectionDefinition(input);
  if (!result.success) {
    throw new Error(result.errors.join(", "));
  }
  return result.data;
}

const recordA = assertValid({
  registry_version: "1.0.0",
  collection_id: "alpha-punks",
  name: "Alpha Punks",
  definition_status: "partial",
  policy_ids: [
    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  ],
  identity: {
    description: { value: "Pixel art collectibles" },
  },
});

const recordB = assertValid({
  registry_version: "1.0.0",
  collection_id: "beta-beasts",
  name: "Beta Beasts",
  definition_status: "minimal",
  policy_ids: [
    "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
  ],
});

describe("buildPolicyIndex", () => {
  it("maps policy ids to collection definitions", () => {
    const index = buildPolicyIndex([recordA, recordB]);
    expect(
      index.get("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
        ?.collection_id,
    ).toBe("alpha-punks");
  });
});

describe("searchCollections", () => {
  it("finds collections by identity description", () => {
    const results = searchCollections([recordA, recordB], "pixel");
    expect(results).toHaveLength(1);
    expect(results[0]?.collection_id).toBe("alpha-punks");
  });
});
