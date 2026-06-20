import { mkdtempSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { describe, expect, it } from "vitest";
import {
  normalizeNetwork,
  resolveRegistryCollectionsPath,
  resolveRegistryDefinitionWritePath,
} from "./registry-network.js";

function makeRepo(): string {
  const dir = mkdtempSync(path.join(tmpdir(), "registry-network-test-"));
  writeFileSync(path.join(dir, "pnpm-workspace.yaml"), "", "utf8");
  return dir;
}

describe("normalizeNetwork", () => {
  it("defaults to mainnet", () => {
    expect(normalizeNetwork()).toBe("mainnet");
    expect(normalizeNetwork(undefined)).toBe("mainnet");
  });

  it("accepts valid networks", () => {
    expect(normalizeNetwork("preprod")).toBe("preprod");
    expect(normalizeNetwork("PREVIEW")).toBe("preview");
  });

  it("throws on invalid network", () => {
    expect(() => normalizeNetwork("testnet")).toThrow(/Invalid registry network/);
  });
});

describe("resolveRegistryCollectionsPath", () => {
  it("prefers registry/mainnet/collections when present", () => {
    const repo = makeRepo();
    const canonical = resolveRegistryDefinitionWritePath(repo, "mainnet");
    const legacy = path.join(repo, "registry", "collections");
    mkdirSync(canonical, { recursive: true });
    mkdirSync(legacy, { recursive: true });
    writeFileSync(path.join(canonical, "canonical.json"), "{}", "utf8");

    const resolved = resolveRegistryCollectionsPath(repo, { network: "mainnet" });
    expect(resolved.path).toBe(canonical);
    expect(resolved.usedLegacyFallback).toBe(false);

    rmSync(repo, { recursive: true, force: true });
  });

  it("falls back to legacy when canonical directory exists but is empty", () => {
    const repo = makeRepo();
    const canonical = resolveRegistryDefinitionWritePath(repo, "mainnet");
    const legacy = path.join(repo, "registry", "collections");
    mkdirSync(canonical, { recursive: true });
    mkdirSync(legacy, { recursive: true });
    writeFileSync(path.join(legacy, "legacy.json"), "{}", "utf8");

    const resolved = resolveRegistryCollectionsPath(repo, {
      network: "mainnet",
      allowLegacyFallback: true,
    });
    expect(resolved.path).toBe(legacy);
    expect(resolved.usedLegacyFallback).toBe(true);

    rmSync(repo, { recursive: true, force: true });
  });

  it("falls back to legacy registry/collections for mainnet when canonical missing", () => {
    const repo = makeRepo();
    const legacy = path.join(repo, "registry", "collections");
    mkdirSync(legacy, { recursive: true });
    writeFileSync(path.join(legacy, "legacy.json"), "{}", "utf8");

    const resolved = resolveRegistryCollectionsPath(repo, {
      network: "mainnet",
      allowLegacyFallback: true,
    });
    expect(resolved.path).toBe(legacy);
    expect(resolved.usedLegacyFallback).toBe(true);

    rmSync(repo, { recursive: true, force: true });
  });

  it("emits legacy warning only when warnLegacyFallback is true", () => {
    const repo = makeRepo();
    const legacy = path.join(repo, "registry", "collections");
    mkdirSync(legacy, { recursive: true });
    writeFileSync(path.join(legacy, "legacy.json"), "{}", "utf8");

    const silent = resolveRegistryCollectionsPath(repo, { network: "mainnet" });
    expect(silent.legacyFallbackWarning).toBeUndefined();

    const warned = resolveRegistryCollectionsPath(repo, {
      network: "mainnet",
      warnLegacyFallback: true,
    });
    expect(warned.legacyFallbackWarning).toContain("deprecated registry/collections");

    rmSync(repo, { recursive: true, force: true });
  });

  it("does not fall back to legacy for preprod", () => {
    const repo = makeRepo();
    mkdirSync(path.join(repo, "registry", "collections"), { recursive: true });

    const resolved = resolveRegistryCollectionsPath(repo, {
      network: "preprod",
      allowLegacyFallback: true,
    });
    expect(resolved.path).toBe(resolveRegistryDefinitionWritePath(repo, "preprod"));
    expect(resolved.usedLegacyFallback).toBe(false);

    rmSync(repo, { recursive: true, force: true });
  });

  it("does not fall back to legacy for preview", () => {
    const repo = makeRepo();
    mkdirSync(path.join(repo, "registry", "collections"), { recursive: true });

    const resolved = resolveRegistryCollectionsPath(repo, {
      network: "preview",
      allowLegacyFallback: true,
    });
    expect(resolved.path).toBe(resolveRegistryDefinitionWritePath(repo, "preview"));
    expect(resolved.usedLegacyFallback).toBe(false);

    rmSync(repo, { recursive: true, force: true });
  });
});
