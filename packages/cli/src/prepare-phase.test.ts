import { existsSync } from "node:fs";
import { readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { describe, expect, it, afterEach } from "vitest";
import {
  resolveRegistryDefinitionWritePath,
  resolveRepoRoot,
} from "@cardano-nft-collection-registry/core";
import { resolveAuditPaths } from "./audit.js";
import {
  parsePhaseFile,
  preparePhase,
  validatePhaseCollectionInput,
} from "./prepare-phase.js";

const TEST_ID = "phase-test-collection";
const POLICY = "a1b2c3d4e5f678901234567890123456789012345678901234567890";

afterEach(async () => {
  const paths = resolveAuditPaths(TEST_ID);
  if (existsSync(paths.auditFile)) {
    await rm(paths.auditFile, { force: true });
  }
  if (existsSync(paths.samplesDir)) {
    await rm(paths.samplesDir, { recursive: true, force: true });
  }
  if (existsSync(paths.definitionFile)) {
    await rm(paths.definitionFile, { force: true });
  }
});

describe("validatePhaseCollectionInput", () => {
  it("validates a phase collection entry", () => {
    const entry = validatePhaseCollectionInput(
      {
        name: "Phase Test",
        collection_id: TEST_ID,
        policy_ids: [POLICY],
        sample_assets: ["asset-a", "asset-b"],
        notes: "Test notes",
      },
      0,
    );
    expect(entry.collection_id).toBe(TEST_ID);
    expect(entry.policy_ids[0]).toBe(POLICY);
  });
});

describe("preparePhase", () => {
  it("creates scaffolds from a phase file", async () => {
    const repoRoot = resolveRepoRoot(path.join(process.cwd(), "../.."));
    const phaseFile = path.join(repoRoot, "research", ".test-phase.json");
    const payload = [
      {
        name: "Phase Test Collection",
        collection_id: TEST_ID,
        policy_ids: [POLICY],
        sample_assets: ["sample-a", "sample-b"],
        notes: "Phase 1 test entry",
      },
    ];

    await writeFile(phaseFile, `${JSON.stringify(payload, null, 2)}\n`, "utf8");

    try {
      const result = await preparePhase(phaseFile, {
        startDir: repoRoot,
        force: true,
        phase: 1,
      });

      expect(result.phase_number).toBe(1);
      expect(result.collections).toHaveLength(1);
      expect(result.metadata_fetch).toBe(
        result.blockfrost_configured
          ? "skipped_not_implemented"
          : "skipped_not_configured",
      );

      const paths = resolveAuditPaths(TEST_ID, repoRoot);
      expect(paths.definitionFile).toBe(
        path.join(resolveRegistryDefinitionWritePath(repoRoot, "mainnet"), `${TEST_ID}.json`),
      );
      expect(existsSync(paths.auditFile)).toBe(true);
      expect(existsSync(paths.definitionFile)).toBe(true);

      const audit = await readFile(paths.auditFile, "utf8");
      expect(audit).toContain("Phase Test Collection");
      expect(audit).toContain(POLICY);
      expect(audit).toContain("sample-a");

      const definition = JSON.parse(await readFile(paths.definitionFile, "utf8")) as {
        definition_status: string;
        collection_id: string;
      };
      expect(definition.collection_id).toBe(TEST_ID);
      expect(definition.definition_status).toBe("partial");
    } finally {
      await rm(phaseFile, { force: true });
    }
  });

  it("writes definitions to registry/<network>/collections for preprod", async () => {
    const repoRoot = resolveRepoRoot(path.join(process.cwd(), "../.."));
    const phaseFile = path.join(repoRoot, "research", ".test-preprod-phase.json");
    const testId = "phase-preprod-test";
    const payload = [
      {
        name: "Preprod Test Collection",
        collection_id: testId,
        policy_ids: [POLICY],
        sample_assets: ["sample-a"],
      },
    ];

    await writeFile(phaseFile, `${JSON.stringify(payload, null, 2)}\n`, "utf8");

    try {
      await preparePhase(phaseFile, {
        startDir: repoRoot,
        force: true,
        phase: 1,
        network: "preprod",
      });

      const paths = resolveAuditPaths(testId, repoRoot, { network: "preprod" });
      expect(paths.definitionFile).toBe(
        path.join(resolveRegistryDefinitionWritePath(repoRoot, "preprod"), `${testId}.json`),
      );
      expect(existsSync(paths.definitionFile)).toBe(true);

      await rm(paths.auditFile, { force: true });
      await rm(paths.samplesDir, { recursive: true, force: true });
      await rm(paths.definitionFile, { force: true });
    } finally {
      await rm(phaseFile, { force: true });
    }
  });

  it("rejects empty phase files", async () => {
    const repoRoot = resolveRepoRoot(path.join(process.cwd(), "../.."));
    const phaseFile = path.join(repoRoot, "research", ".test-empty-phase.json");
    await writeFile(phaseFile, "[]\n", "utf8");

    try {
      await expect(parsePhaseFile(phaseFile)).resolves.toEqual([]);
      await expect(
        preparePhase(phaseFile, { startDir: repoRoot }),
      ).rejects.toThrow("Phase file is empty");
    } finally {
      await rm(phaseFile, { force: true });
    }
  });
});
