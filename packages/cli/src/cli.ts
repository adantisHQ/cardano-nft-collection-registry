#!/usr/bin/env node
import { readFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import {
  DEFAULT_REGISTRY_NETWORK,
  findCollectionById,
  loadRegistry,
  normalizeNetwork,
  resolveRegistryCollectionsPath,
  resolveRepoRoot,
  searchCollections,
  validateCollectionDefinition,
  type RegistryNetwork,
} from "@cardano-nft-collection-registry/core";

import {
  createAuditTemplate,
  parseAuditReport,
} from "./audit.js";
import { preparePhase } from "./prepare-phase.js";

const HELP = `
Cardano NFT Collection Definition Registry CLI

Usage:
  nft-collection-registry validate <file>
  nft-collection-registry validate-all [--network <network>] [--root <path>]
  nft-collection-registry inspect <collection_id> [--network <network>] [--root <path>]
  nft-collection-registry list [--network <network>] [--root <path>]
  nft-collection-registry search <query> [--network <network>] [--root <path>]
  nft-collection-registry audit-template <collection_id> [--network <network>] [--force]
  nft-collection-registry audit-report <collection_id> [--network <network>]
  nft-collection-registry prepare-phase <phase-file.json> [--network <network>] [--phase <n>] [--force]

Options:
  --network <mainnet|preprod|preview>  Registry network (default: mainnet)
  --root <path>   Registry collections directory (overrides --network resolution)
  --json          Output JSON where applicable
  --force         Overwrite existing scaffolds (audit-template, prepare-phase)
  --phase <n>     Validation phase number (prepare-phase only)
`.trim();

interface CliOptions {
  root?: string;
  rootExplicit: boolean;
  network: RegistryNetwork;
  json: boolean;
  force: boolean;
  phase?: number;
}

function resolveCliRegistryPath(options: CliOptions): {
  path: string;
  legacyFallbackWarning?: string;
} {
  if (options.rootExplicit && options.root) {
    return { path: options.root };
  }

  const resolved = resolveRegistryCollectionsPath(resolveRepoRoot(), {
    network: options.network,
    allowLegacyFallback: options.network === DEFAULT_REGISTRY_NETWORK,
    warnLegacyFallback: true,
  });

  return {
    path: resolved.path,
    ...(resolved.legacyFallbackWarning
      ? { legacyFallbackWarning: resolved.legacyFallbackWarning }
      : {}),
  };
}

function emitLegacyWarning(warning: string | undefined, json: boolean): void {
  if (warning && !json) {
    console.warn(`Warning: ${warning}`);
  }
}

function parseArgs(argv: string[]): {
  command: string;
  args: string[];
  options: CliOptions;
} {
  const options: CliOptions = {
    rootExplicit: false,
    network: DEFAULT_REGISTRY_NETWORK,
    json: false,
    force: false,
  };

  const positional: string[] = [];

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === undefined) {
      continue;
    }
    if (arg === "--root") {
      const value = argv[i + 1];
      if (!value) {
        throw new Error("--root requires a path");
      }
      options.root = path.resolve(value);
      options.rootExplicit = true;
      i += 1;
      continue;
    }
    if (arg === "--network") {
      const value = argv[i + 1];
      if (!value) {
        throw new Error("--network requires mainnet, preprod, or preview");
      }
      options.network = normalizeNetwork(value);
      i += 1;
      continue;
    }
    if (arg === "--json") {
      options.json = true;
      continue;
    }
    if (arg === "--force") {
      options.force = true;
      continue;
    }
    if (arg === "--phase") {
      const value = argv[i + 1];
      if (!value) {
        throw new Error("--phase requires a number");
      }
      options.phase = Number.parseInt(value, 10);
      if (!Number.isFinite(options.phase)) {
        throw new Error("--phase must be a number");
      }
      i += 1;
      continue;
    }
    if (arg.startsWith("-")) {
      throw new Error(`Unknown option: ${arg}`);
    }
    positional.push(arg);
  }

  const [command = "help", ...args] = positional;
  return { command, args, options };
}

async function loadRegistryForCli(options: CliOptions) {
  const { path: root, legacyFallbackWarning } = resolveCliRegistryPath(options);
  emitLegacyWarning(legacyFallbackWarning, options.json);
  return loadRegistry({
    directory: root,
    network: options.network,
  });
}

async function commandValidate(filePath: string, json: boolean): Promise<number> {
  const absolutePath = path.resolve(filePath);
  const raw = await readFile(absolutePath, "utf8");
  const parsed = JSON.parse(raw) as unknown;
  const result = validateCollectionDefinition(parsed);

  if (result.success) {
    if (json) {
      console.log(JSON.stringify({ valid: true, file: absolutePath, data: result.data }, null, 2));
    } else {
      console.log(`Valid: ${absolutePath}`);
    }
    return 0;
  }

  if (json) {
    console.log(JSON.stringify({ valid: false, file: absolutePath, errors: result.errors }, null, 2));
  } else {
    console.error(`Invalid: ${absolutePath}`);
    for (const error of result.errors) {
      console.error(`  - ${error}`);
    }
  }
  return 1;
}

async function commandValidateAll(options: CliOptions): Promise<number> {
  const { collections, errors, resolvedPath, network, usedLegacyFallback } =
    await loadRegistryForCli(options);
  const valid = errors.length === 0;

  if (jsonOutput(options)) {
    console.log(
      JSON.stringify(
        {
          valid,
          network,
          root: resolvedPath,
          usedLegacyFallback,
          count: collections.length,
          errors,
        },
        null,
        2,
      ),
    );
  } else {
    console.log(`Validated ${collections.length} collection(s) in ${resolvedPath} (${network})`);
    if (errors.length > 0) {
      for (const entry of errors) {
        console.error(`Invalid: ${entry.file}`);
        for (const error of entry.errors) {
          console.error(`  - ${error}`);
        }
      }
    } else {
      console.log("All collection records are valid.");
    }
  }

  return valid ? 0 : 1;
}

function jsonOutput(options: CliOptions): boolean {
  return options.json;
}

async function commandInspect(collectionId: string, options: CliOptions): Promise<number> {
  const { collections } = await loadRegistryForCli(options);
  const record = findCollectionById(collections, collectionId);

  if (!record) {
    console.error(`Collection not found: ${collectionId}`);
    return 1;
  }

  if (jsonOutput(options)) {
    console.log(JSON.stringify(record, null, 2));
    return 0;
  }

  console.log(`${record.name} (${record.collection_id})`);
  console.log(`Definition status: ${record.definition_status}`);
  console.log(`Policies: ${record.policy_ids.length}`);
  for (const policyId of record.policy_ids) {
    console.log(`  - ${policyId}`);
  }
  console.log(`Trait mappings: ${record.trait_mappings?.length ?? 0}`);
  console.log(`Primary standard: ${record.metadata_layout?.primary_standard ?? "unknown"}`);
  const description = record.identity?.description?.value;
  if (description) {
    console.log(`Description: ${description}`);
  }
  return 0;
}

async function commandList(options: CliOptions): Promise<number> {
  const { collections } = await loadRegistryForCli(options);

  if (jsonOutput(options)) {
    console.log(JSON.stringify(collections, null, 2));
    return 0;
  }

  for (const record of collections) {
    console.log(`${record.collection_id}\t${record.name}\t${record.definition_status}`);
  }
  return 0;
}

async function commandSearch(query: string, options: CliOptions): Promise<number> {
  const { collections } = await loadRegistryForCli(options);
  const results = searchCollections(collections, query);

  if (jsonOutput(options)) {
    console.log(JSON.stringify(results, null, 2));
    return 0;
  }

  if (results.length === 0) {
    console.log(`No collections matched: ${query}`);
    return 0;
  }

  for (const record of results) {
    console.log(`${record.collection_id}\t${record.name}`);
  }
  return 0;
}

async function commandAuditTemplate(
  collectionId: string,
  options: CliOptions,
): Promise<number> {
  const paths = await createAuditTemplate(collectionId, process.cwd(), {
    force: options.force,
    ...(options.network ? { network: options.network } : {}),
  });

  if (jsonOutput(options)) {
    console.log(JSON.stringify(paths, null, 2));
  } else {
    console.log(`Created audit scaffold: ${collectionId}`);
    console.log(`Audit: ${paths.auditFile}`);
    console.log(`Samples: ${paths.samplesDir}`);
    console.log(`Definition target: ${paths.definitionFile}`);
  }

  return 0;
}

async function commandAuditReport(
  collectionId: string,
  options: CliOptions,
): Promise<number> {
  const report = await parseAuditReport(
    collectionId,
    process.cwd(),
    options.network ? { network: options.network } : {},
  );

  if (jsonOutput(options)) {
    console.log(JSON.stringify(report, null, 2));
    return report.audit_exists ? 0 : 1;
  }

  if (!report.audit_exists) {
    console.error(`Audit not found: ${report.audit_file}`);
    console.error(`Run: nft-collection-registry audit-template ${collectionId}`);
    return 1;
  }

  console.log(`Audit report: ${report.collection_id}`);
  console.log(`File: ${report.audit_file}`);
  console.log(`Status: ${report.audit_status ?? "unknown"}`);
  console.log(`Completeness: ${report.completeness_score}%`);
  console.log(`Schema fit: ${report.schema_fit ?? "not scored"}`);
  console.log(`Parse success: ${report.parse_success_score ?? "not scored"}`);
  console.log(
    `Confidence: trait=${report.trait_mapping_confidence ?? "-"}, media=${report.media_mapping_confidence ?? "-"}, social=${report.social_mapping_confidence ?? "-"}`,
  );
  console.log(`Failures: ${report.failure_count}`);
  console.log(`Raw samples: ${report.raw_sample_files.join(", ") || "none"}`);
  console.log(`Definition exists: ${report.definition_exists ? "yes" : "no"}`);

  if (report.incomplete_fields.length > 0) {
    console.log(`Incomplete: ${report.incomplete_fields.join("; ")}`);
  }

  return 0;
}

async function commandPreparePhase(
  phaseFile: string,
  options: CliOptions,
): Promise<number> {
  const result = await preparePhase(phaseFile, {
    force: options.force,
    ...(options.network ? { network: options.network } : {}),
    ...(options.phase ? { phase: options.phase } : {}),
  });

  if (jsonOutput(options)) {
    console.log(JSON.stringify(result, null, 2));
    return 0;
  }

  console.log(`Prepared phase ${result.phase_number} from ${result.phase_file}`);
  console.log(`Metadata fetch: ${result.metadata_fetch}`);
  if (result.blockfrost_configured) {
    console.log("Blockfrost config detected; automatic fetch is not implemented yet.");
  }

  for (const collection of result.collections) {
    console.log(`- ${collection.collection_id} (${collection.name})`);
    console.log(`  audit: ${collection.audit_created ? "created" : "existing"}`);
    console.log(`  definition: ${collection.definition_created ? "created" : "existing"}`);
    console.log(`  samples: ${collection.sample_files.join(", ") || "none"}`);
    for (const warning of collection.warnings) {
      console.log(`  warning: ${warning}`);
    }
  }

  return 0;
}

export async function run(argv: string[]): Promise<number> {
  try {
    const { command, args, options } = parseArgs(argv);

    switch (command) {
      case "validate": {
        const file = args[0];
        if (!file) {
          console.error("Missing file path");
          console.log(HELP);
          return 1;
        }
        return commandValidate(file, options.json);
      }
      case "validate-all":
        return commandValidateAll(options);
      case "inspect": {
        const collectionId = args[0];
        if (!collectionId) {
          console.error("Missing collection_id");
          console.log(HELP);
          return 1;
        }
        return commandInspect(collectionId, options);
      }
      case "list":
        return commandList(options);
      case "search": {
        const query = args.join(" ");
        if (!query) {
          console.error("Missing search query");
          console.log(HELP);
          return 1;
        }
        return commandSearch(query, options);
      }
      case "audit-template": {
        const collectionId = args[0];
        if (!collectionId) {
          console.error("Missing collection_id");
          console.log(HELP);
          return 1;
        }
        return commandAuditTemplate(collectionId, options);
      }
      case "audit-report": {
        const collectionId = args[0];
        if (!collectionId) {
          console.error("Missing collection_id");
          console.log(HELP);
          return 1;
        }
        return commandAuditReport(collectionId, options);
      }
      case "prepare-phase": {
        const phaseFile = args[0];
        if (!phaseFile) {
          console.error("Missing phase file path");
          console.log(HELP);
          return 1;
        }
        return commandPreparePhase(phaseFile, options);
      }
      case "help":
      case "--help":
      case "-h":
        console.log(HELP);
        return 0;
      default:
        console.error(`Unknown command: ${command}`);
        console.log(HELP);
        return 1;
    }
  } catch (error) {
    console.error(error instanceof Error ? error.message : String(error));
    return 1;
  }
}

const isDirectRun =
  process.argv[1] !== undefined &&
  import.meta.url === pathToFileURL(process.argv[1]).href;

if (isDirectRun) {
  const code = await run(process.argv.slice(2));
  process.exit(code);
}
