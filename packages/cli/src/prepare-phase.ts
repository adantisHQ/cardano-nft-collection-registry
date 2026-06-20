import { mkdir, readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import {
  isValidCollectionId,
  isValidPolicyId,
  normalizeCollectionId,
  type RegistryNetwork,
} from "@cardano-nft-collection-registry/core";
import {
  assertValidAuditCollectionId,
  createAuditTemplate,
  resolveAuditPaths,
  type PhaseCollectionInput,
} from "./audit.js";

export type { PhaseCollectionInput };

export interface PreparePhaseOptions {
  force?: boolean;
  phase?: number;
  startDir?: string;
  network?: RegistryNetwork;
}

export interface PreparedCollectionResult {
  collection_id: string;
  name: string;
  audit_file: string;
  samples_dir: string;
  definition_file: string | null;
  definition_created: boolean;
  audit_created: boolean;
  sample_files: string[];
  warnings: string[];
}

export interface PreparePhaseResult {
  phase_file: string;
  phase_number: number;
  blockfrost_configured: boolean;
  metadata_fetch: "skipped_not_configured" | "skipped_not_implemented";
  collections: PreparedCollectionResult[];
}

function inferPhaseFromFilename(filename: string): number | undefined {
  const match = filename.match(/phase-(\d+)/i);
  if (!match?.[1]) {
    return undefined;
  }
  return Number.parseInt(match[1], 10);
}

export function validatePhaseCollectionInput(
  input: unknown,
  index: number,
): PhaseCollectionInput {
  if (typeof input !== "object" || input === null) {
    throw new Error(`Entry ${index}: expected an object`);
  }

  const record = input as Record<string, unknown>;
  const name = record["name"];
  const collectionId = record["collection_id"];
  const policyIds = record["policy_ids"];
  const sampleAssets = record["sample_assets"];
  const notes = record["notes"];

  if (typeof name !== "string" || name.trim().length === 0) {
    throw new Error(`Entry ${index}: "name" is required`);
  }

  if (typeof collectionId !== "string") {
    throw new Error(`Entry ${index}: "collection_id" is required`);
  }

  const normalizedId = normalizeCollectionId(collectionId);
  if (!isValidCollectionId(normalizedId)) {
    throw new Error(`Entry ${index}: invalid collection_id "${collectionId}"`);
  }

  if (!Array.isArray(policyIds) || policyIds.length === 0) {
    throw new Error(`Entry ${index}: "policy_ids" must be a non-empty array`);
  }

  for (const policyId of policyIds) {
    if (typeof policyId !== "string" || !isValidPolicyId(policyId)) {
      throw new Error(
        `Entry ${index}: invalid policy_id "${String(policyId)}" (expected 56-char hex)`,
      );
    }
  }

  if (!Array.isArray(sampleAssets)) {
    throw new Error(`Entry ${index}: "sample_assets" must be an array`);
  }

  for (const asset of sampleAssets) {
    if (typeof asset !== "string" || asset.trim().length === 0) {
      throw new Error(`Entry ${index}: sample_assets must be non-empty strings`);
    }
  }

  return {
    name: name.trim(),
    collection_id: normalizedId,
    policy_ids: policyIds.map((id) => id.toLowerCase()),
    sample_assets: sampleAssets.map((asset) => asset.trim()),
    ...(typeof notes === "string" && notes.trim().length > 0
      ? { notes: notes.trim() }
      : {}),
  };
}

export async function parsePhaseFile(filePath: string): Promise<PhaseCollectionInput[]> {
  const absolutePath = path.resolve(filePath);
  const raw = await readFile(absolutePath, "utf8");
  const parsed = JSON.parse(raw) as unknown;

  if (!Array.isArray(parsed)) {
    throw new Error("Phase file must be a JSON array");
  }

  return parsed.map((entry, index) => validatePhaseCollectionInput(entry, index));
}

function buildPlaceholderDefinition(input: PhaseCollectionInput): object {
  const indexingNotes = input.notes
    ? [{ severity: "info", message: input.notes }]
    : [];

  return {
    registry_version: "1.0.0",
    collection_id: input.collection_id,
    name: input.name,
    definition_status: "partial",
    policy_ids: input.policy_ids,
    identity: {
      display_name: { value: input.name },
      description: { value: "" },
    },
    metadata_layout: {
      primary_standard: "unknown",
      metadata_root: "$",
      asset_name_encoding: "unknown",
    },
    trait_mappings: [],
    media_mappings: {},
    social_mappings: {},
    link_mappings: {},
    external_resources: [],
    license_info: {},
    royalty_info: {},
    normalization_rules: [],
    indexing_notes: indexingNotes,
  };
}

async function createPlaceholderDefinitionFile(
  input: PhaseCollectionInput,
  startDir: string,
  force: boolean,
  network?: RegistryNetwork,
): Promise<{ created: boolean; path: string | null }> {
  const paths = resolveAuditPaths(
    input.collection_id,
    startDir,
    network ? { network } : {},
  );
  if (existsSync(paths.definitionFile) && !force) {
    return { created: false, path: paths.definitionFile };
  }

  await mkdir(path.dirname(paths.definitionFile), { recursive: true });
  const definition = buildPlaceholderDefinition(input);
  await writeFile(paths.definitionFile, `${JSON.stringify(definition, null, 2)}\n`, "utf8");
  return { created: true, path: paths.definitionFile };
}

function isBlockfrostConfigured(): boolean {
  return Boolean(
    process.env["BLOCKFROST_PROJECT_ID"] ??
      process.env["BLOCKFROST_API_KEY"] ??
      process.env["BLOCKFROST_API_BASE_URL"],
  );
}

export async function preparePhaseCollection(
  input: PhaseCollectionInput,
  options: PreparePhaseOptions = {},
): Promise<PreparedCollectionResult> {
  const startDir = options.startDir ?? process.cwd();
  const force = options.force ?? false;
  const phaseNumber = options.phase ?? 1;
  const warnings: string[] = [];

  assertValidAuditCollectionId(input.collection_id);
  const paths = resolveAuditPaths(
    input.collection_id,
    startDir,
    options.network ? { network: options.network } : {},
  );

  let auditCreated = false;
  if (!existsSync(paths.auditFile) || force) {
    await createAuditTemplate(input.collection_id, startDir, {
      force,
      input,
      phase: phaseNumber,
      ...(options.network ? { network: options.network } : {}),
    });
    auditCreated = true;
  } else {
    warnings.push("Audit file already exists; skipped (use --force to overwrite)");
  }

  const { readdir } = await import("node:fs/promises");
  const sampleFiles = (await readdir(paths.samplesDir))
    .filter((name) => name.endsWith(".json"))
    .sort();

  const definitionResult = await createPlaceholderDefinitionFile(
    input,
    startDir,
    force,
    options.network,
  );
  if (!definitionResult.created && existsSync(paths.definitionFile)) {
    warnings.push("Definition file already exists; skipped (use --force to overwrite)");
  }

  return {
    collection_id: input.collection_id,
    name: input.name,
    audit_file: paths.auditFile,
    samples_dir: paths.samplesDir,
    definition_file: definitionResult.path,
    definition_created: definitionResult.created,
    audit_created: auditCreated,
    sample_files: sampleFiles,
    warnings,
  };
}

export async function preparePhase(
  phaseFilePath: string,
  options: PreparePhaseOptions = {},
): Promise<PreparePhaseResult> {
  const startDir = options.startDir ?? process.cwd();
  const absolutePhaseFile = path.resolve(phaseFilePath);
  const collections = await parsePhaseFile(absolutePhaseFile);
  const phaseNumber =
    options.phase ?? inferPhaseFromFilename(path.basename(absolutePhaseFile)) ?? 1;

  if (collections.length === 0) {
    throw new Error(
      "Phase file is empty. Add collections before running prepare-phase.",
    );
  }

  const blockfrostConfigured = isBlockfrostConfigured();
  const results: PreparedCollectionResult[] = [];

  for (const input of collections) {
    results.push(
      await preparePhaseCollection(input, {
        ...options,
        startDir,
        phase: phaseNumber,
      }),
    );
  }

  return {
    phase_file: absolutePhaseFile,
    phase_number: phaseNumber,
    blockfrost_configured: blockfrostConfigured,
    metadata_fetch: blockfrostConfigured
      ? "skipped_not_implemented"
      : "skipped_not_configured",
    collections: results,
  };
}
