import { describe, expect, it } from "vitest";
import path from "node:path";
import { run } from "./cli.js";
import { resolveRepoRoot } from "@cardano-nft-collection-registry/core";

describe("CLI", () => {
  it("prints help", async () => {
    const code = await run(["help"]);
    expect(code).toBe(0);
  });

  it("validates an example file", async () => {
    const file = "../../examples/collection.basic.json";
    const code = await run(["validate", file]);
    expect(code).toBe(0);
  });

  it("lists registry collections", async () => {
    const code = await run(["list", "--network", "mainnet"]);
    expect(code).toBe(0);
  });

  it("accepts --network for registry commands", async () => {
    const repoRoot = resolveRepoRoot(path.join(process.cwd(), "../.."));
    const mainnetRoot = path.join(repoRoot, "registry", "mainnet", "collections");
    const code = await run(["list", "--network", "mainnet", "--root", mainnetRoot]);
    expect(code).toBe(0);
  });

  it("rejects invalid --network", async () => {
    const code = await run(["list", "--network", "testnet"]);
    expect(code).toBe(1);
  });

  it("creates an audit template scaffold", async () => {
    const collectionId = "cli-audit-test";
    const code = await run(["audit-template", collectionId, "--force"]);
    expect(code).toBe(0);

    const reportCode = await run(["audit-report", collectionId]);
    expect(reportCode).toBe(0);

    const { rm } = await import("node:fs/promises");
    const { resolveAuditPaths } = await import("./audit.js");
    const paths = resolveAuditPaths(collectionId, path.join(process.cwd(), "../.."));
    expect(paths.definitionFile).toContain(
      path.join("registry", "mainnet", "collections", `${collectionId}.json`),
    );
    await rm(paths.auditFile, { force: true });
    await rm(paths.samplesDir, { recursive: true, force: true });
    await rm(paths.definitionFile, { force: true });
  });
});
