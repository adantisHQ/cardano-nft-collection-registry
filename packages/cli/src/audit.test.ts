import { existsSync } from "node:fs";
import { readFile, rm } from "node:fs/promises";
import path from "node:path";
import { describe, expect, it, afterEach } from "vitest";
import { resolveRepoRoot } from "@cardano-nft-collection-registry/core";
import {
  createAuditTemplate,
  parseAuditReport,
  resolveAuditPaths,
} from "./audit.js";

const TEST_COLLECTION_ID = "audit-test-collection";

afterEach(async () => {
  const paths = resolveAuditPaths(TEST_COLLECTION_ID);
  if (existsSync(paths.auditFile)) {
    await rm(paths.auditFile, { force: true });
  }
  if (existsSync(paths.samplesDir)) {
    await rm(paths.samplesDir, { recursive: true, force: true });
  }
});

describe("audit workflow", () => {
  it("creates audit scaffold and sample placeholders", async () => {
    const paths = await createAuditTemplate(TEST_COLLECTION_ID);
    expect(existsSync(paths.auditFile)).toBe(true);
    expect(existsSync(path.join(paths.samplesDir, "asset-001.json"))).toBe(true);
    expect(existsSync(path.join(paths.samplesDir, "asset-002.json"))).toBe(true);
    expect(existsSync(path.join(paths.samplesDir, "asset-003.json"))).toBe(true);

    const audit = await readFile(paths.auditFile, "utf8");
    expect(audit).toContain(TEST_COLLECTION_ID);
    expect(audit).toContain("parse_success_score: _TBD_");
  });

  it("parses scoring block from audit file", async () => {
    const paths = await createAuditTemplate(TEST_COLLECTION_ID);
    let audit = await readFile(paths.auditFile, "utf8");
    audit = audit.replace("parse_success_score: _TBD_", "parse_success_score: 85");
    audit = audit.replace(
      "trait_mapping_confidence: _TBD_",
      "trait_mapping_confidence: high",
    );
    audit = audit.replace("schema_fit: _TBD_", "schema_fit: fits_with_notes");
    const { writeFile } = await import("node:fs/promises");
    await writeFile(paths.auditFile, audit, "utf8");

    const report = await parseAuditReport(TEST_COLLECTION_ID);
    expect(report.parse_success_score).toBe(85);
    expect(report.trait_mapping_confidence).toBe("high");
    expect(report.schema_fit).toBe("fits_with_notes");
    expect(report.raw_sample_files).toContain("asset-001.json");
  });

  it("resolves repo research paths from workspace root", () => {
    const repoRoot = resolveRepoRoot(path.join(process.cwd(), "../.."));
    const paths = resolveAuditPaths(TEST_COLLECTION_ID, path.join(process.cwd(), "../.."));
    expect(paths.repoRoot).toBe(repoRoot);
    expect(paths.auditFile).toContain(path.join("research", "audits"));
    expect(paths.definitionFile).toContain(
      path.join("registry", "mainnet", "collections", `${TEST_COLLECTION_ID}.json`),
    );
  });
});
