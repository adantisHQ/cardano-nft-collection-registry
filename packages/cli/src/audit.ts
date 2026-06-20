import { mkdir, readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import {
  COLLECTION_ID_PATTERN,
  isValidCollectionId,
  normalizeCollectionId,
  normalizeNetwork,
  resolveRegistryDefinitionWritePath,
  resolveRepoRoot,
  type RegistryNetwork,
} from "@cardano-nft-collection-registry/core";

export type FailureClassification = "A" | "B" | "C" | "D" | "E";
export type ConfidenceLevel = "low" | "medium" | "high";
export type SchemaFit =
  | "fits"
  | "fits_with_notes"
  | "requires_schema_change"
  | "not_representable";

export interface AuditPaths {
  repoRoot: string;
  auditFile: string;
  samplesDir: string;
  definitionFile: string;
  findingsFile: string;
}

export interface AuditReportSummary {
  collection_id: string;
  audit_file: string;
  audit_exists: boolean;
  audit_status: string | null;
  collection_name: string | null;
  audit_phase: string | null;
  parse_success_score: number | null;
  trait_mapping_confidence: ConfidenceLevel | null;
  media_mapping_confidence: ConfidenceLevel | null;
  social_mapping_confidence: ConfidenceLevel | null;
  schema_fit: SchemaFit | null;
  failure_count: number;
  failures_by_classification: Record<FailureClassification, number>;
  incomplete_fields: string[];
  raw_sample_files: string[];
  definition_exists: boolean;
  completeness_score: number;
}

export interface PhaseCollectionInput {
  name: string;
  collection_id: string;
  policy_ids: string[];
  sample_assets: string[];
  notes?: string;
}

const PLACEHOLDER_PATTERN = /_TBD_/g;

const SAMPLE_PLACEHOLDER = `{
  "_note": "Replace with unmodified raw metadata JSON for this asset",
  "_collection_id": "{{collection_id}}",
  "_sample_label": "{{sample_label}}"
}
`;

const SAMPLE_README = `# Raw samples: {{collection_id}}

Store unmodified per-asset metadata JSON in this directory.

| File | Asset name / ID | Source | Notes |
|------|-----------------|--------|-------|
| asset-001.json | _TBD_ | _TBD_ | |
| asset-002.json | _TBD_ | _TBD_ | |
| asset-003.json | _TBD_ | _TBD_ | |

See research/raw-samples/README.md for rules.
`;

export interface ResolveAuditPathsOptions {
  network?: RegistryNetwork;
}

export function resolveAuditPaths(
  collectionId: string,
  startDir: string = process.cwd(),
  options: ResolveAuditPathsOptions = {},
): AuditPaths {
  const repoRoot = resolveRepoRoot(startDir);
  const network = normalizeNetwork(options.network);
  return {
    repoRoot,
    auditFile: path.join(repoRoot, "research", "audits", `${collectionId}.audit.md`),
    samplesDir: path.join(repoRoot, "research", "raw-samples", collectionId),
    definitionFile: path.join(
      resolveRegistryDefinitionWritePath(repoRoot, network),
      `${collectionId}.json`,
    ),
    findingsFile: path.join(repoRoot, "research", "findings", `${collectionId}.md`),
  };
}

export function assertValidAuditCollectionId(collectionId: string): string {
  const normalized = normalizeCollectionId(collectionId);
  if (!isValidCollectionId(normalized)) {
    throw new Error(
      `Invalid collection_id: "${collectionId}". Expected lowercase kebab-case.`,
    );
  }
  return normalized;
}

function renderTemplate(
  template: string,
  collectionId: string,
  auditDate: string,
): string {
  return template
    .replaceAll("{{collection_id}}", collectionId)
    .replaceAll("{{collection_name}}", collectionId)
    .replaceAll("{{audit_date}}", auditDate);
}

export function sampleFileName(index: number): string {
  return `asset-${String(index + 1).padStart(3, "0")}.json`;
}

export function buildSamplePlaceholder(
  collectionId: string,
  sampleLabel: string,
  sampleAsset: string,
): string {
  return JSON.stringify(
    {
      _note: "Replace with unmodified raw metadata JSON for this asset",
      _collection_id: collectionId,
      _sample_label: sampleLabel,
      _sample_asset: sampleAsset,
    },
    null,
    2,
  );
}

export function buildSampleReadme(
  collectionId: string,
  sampleAssets: string[],
): string {
  const rows = sampleAssets
    .map(
      (asset, index) =>
        `| ${sampleFileName(index)} | ${asset} | _TBD_ | |`,
    )
    .join("\n");

  return `# Raw samples: ${collectionId}

Store unmodified per-asset metadata JSON in this directory.

| File | Asset name / ID | Source | Notes |
|------|-----------------|--------|-------|
${rows}

See research/raw-samples/README.md for rules.
`;
}

export function prefillAuditContent(
  template: string,
  input: PhaseCollectionInput,
  phaseNumber: number,
  auditDate: string,
): string {
  let content = template
    .replaceAll("{{collection_id}}", input.collection_id)
    .replaceAll("{{collection_name}}", input.name)
    .replaceAll("{{audit_date}}", auditDate);

  content = content.replace(
    /\|\s*`collection_name`\s*\|\s*_TBD_\s*\|/,
    `| \`collection_name\` | ${input.name} |`,
  );
  content = content.replace(
    /\|\s*`audit_phase`\s*\|\s*_TBD_\s*\(1 \\| 2 \\| 3 \\| 4 \\| 5\)\s*\|/,
    `| \`audit_phase\` | ${phaseNumber} |`,
  );

  const policyBlock = input.policy_ids.join("\n");
  content = content.replace(
    /### Policy IDs\s*\n\s*```\s*\n_TBD_\s*\n```/,
    `### Policy IDs\n\n\`\`\`\n${policyBlock}\n\`\`\``,
  );

  const sampleRows = input.sample_assets
    .map(
      (asset, index) =>
        `| ${sampleFileName(index).replace(".json", "")} | ${asset} | |`,
    )
    .join("\n");
  content = content.replace(
    /\| asset-001 \| _TBD_ \| \|\s*\n\| asset-002 \| _TBD_ \| \|\s*\n\| asset-003 \| _TBD_ \| \|/,
    sampleRows,
  );

  if (input.notes) {
    content = content.replace(
      /### Known problems \(optional\)\s*\n\s*_TBD_/,
      `### Known problems (optional)\n\n${input.notes}`,
    );
  }

  return content;
}

export async function createAuditTemplate(
  collectionId: string,
  startDir: string = process.cwd(),
  options: {
    force?: boolean;
    input?: PhaseCollectionInput;
    phase?: number;
    network?: RegistryNetwork;
  } = {},
): Promise<AuditPaths> {
  const id = assertValidAuditCollectionId(collectionId);
  const paths = resolveAuditPaths(
    id,
    startDir,
    options.network ? { network: options.network } : {},
  );
  const templatePath = path.join(paths.repoRoot, "research", "audit-template.md");

  if (existsSync(paths.auditFile) && !options.force) {
    throw new Error(
      `Audit already exists: ${paths.auditFile}. Use --force to overwrite.`,
    );
  }

  const template = await readFile(templatePath, "utf8");
  const auditDate = new Date().toISOString().slice(0, 10);
  const content = options.input
    ? prefillAuditContent(
        template,
        { ...options.input, collection_id: id },
        options.phase ?? 1,
        auditDate,
      )
    : renderTemplate(template, id, auditDate);

  await mkdir(path.dirname(paths.auditFile), { recursive: true });
  await mkdir(paths.samplesDir, { recursive: true });
  await writeFile(paths.auditFile, content, "utf8");

  const sampleAssets = options.input?.sample_assets ?? [];
  const sampleFiles =
    sampleAssets.length > 0
      ? sampleAssets.map((_, index) => sampleFileName(index))
      : ["asset-001.json", "asset-002.json", "asset-003.json"];

  for (let index = 0; index < sampleFiles.length; index += 1) {
    const sampleFile = sampleFiles[index];
    if (!sampleFile) {
      continue;
    }
    const samplePath = path.join(paths.samplesDir, sampleFile);
    if (!existsSync(samplePath) || options.force) {
      const sampleLabel = sampleFile.replace(".json", "");
      const sampleAsset = sampleAssets[index] ?? sampleLabel;
      const sampleContent = options.input
        ? `${buildSamplePlaceholder(id, sampleLabel, sampleAsset)}\n`
        : SAMPLE_PLACEHOLDER.replaceAll("{{collection_id}}", id).replaceAll(
            "{{sample_label}}",
            sampleLabel,
          );
      await writeFile(samplePath, sampleContent, "utf8");
    }
  }

  const readmePath = path.join(paths.samplesDir, "README.md");
  if (!existsSync(readmePath) || options.force) {
    await writeFile(
      readmePath,
      options.input
        ? buildSampleReadme(id, options.input.sample_assets)
        : SAMPLE_README.replaceAll("{{collection_id}}", id),
      "utf8",
    );
  }

  return paths;
}

function extractField(content: string, field: string): string | null {
  const patterns = [
    new RegExp(`^${field}:\\s*(.+)$`, "im"),
    new RegExp(`\\|\\s*\`${field}\`\\s*\\|\\s*(.+?)\\s*\\|`, "i"),
    new RegExp(`\\|\\s*${field}\\s*\\|\\s*(.+?)\\s*\\|`, "i"),
  ];

  for (const pattern of patterns) {
    const match = content.match(pattern);
    if (match?.[1]) {
      return match[1].trim();
    }
  }

  return null;
}

function parseScoreBlock(content: string): Partial<AuditReportSummary> {
  const scoreSection = content.match(/## Scoring[\s\S]*?```([\s\S]*?)```/i);
  const block = scoreSection?.[1] ?? content;

  const parseSuccess = extractField(block, "parse_success_score");
  const traitConfidence = extractField(block, "trait_mapping_confidence");
  const mediaConfidence = extractField(block, "media_mapping_confidence");
  const socialConfidence = extractField(block, "social_mapping_confidence");
  const schemaFit = extractField(block, "schema_fit");

  return {
    parse_success_score:
      parseSuccess && !parseSuccess.includes("_TBD_")
        ? Number.parseInt(parseSuccess, 10)
        : null,
    trait_mapping_confidence: parseConfidence(traitConfidence),
    media_mapping_confidence: parseConfidence(mediaConfidence),
    social_mapping_confidence: parseConfidence(socialConfidence),
    schema_fit: parseSchemaFit(schemaFit),
  };
}

function parseConfidence(value: string | null): ConfidenceLevel | null {
  if (!value || value.includes("_TBD_")) {
    return null;
  }
  if (value === "low" || value === "medium" || value === "high") {
    return value;
  }
  return null;
}

function parseSchemaFit(value: string | null): SchemaFit | null {
  if (!value || value.includes("_TBD_")) {
    return null;
  }
  if (
    value === "fits" ||
    value === "fits_with_notes" ||
    value === "requires_schema_change" ||
    value === "not_representable"
  ) {
    return value;
  }
  return null;
}

function parseFailures(content: string): {
  failure_count: number;
  failures_by_classification: Record<FailureClassification, number>;
} {
  const counts: Record<FailureClassification, number> = {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    E: 0,
  };

  const section = content.match(/## Failures[\s\S]*?(?=## Scoring|## Outputs|## Notes|$)/i);
  if (!section) {
    return { failure_count: 0, failures_by_classification: counts };
  }

  const rows = section[0].match(/^\|\s*[^|]+\|/gm) ?? [];
  for (const row of rows) {
    const match = row.match(/\|\s*([A-E])\s*\|/);
    if (match?.[1]) {
      counts[match[1] as FailureClassification] += 1;
    }
  }

  const failure_count = Object.values(counts).reduce((sum, count) => sum + count, 0);
  return { failure_count, failures_by_classification: counts };
}

function listIncompleteFields(content: string): string[] {
  const matches = content.match(/_TBD_/g);
  return matches ? [`${matches.length} placeholder(s) remaining (_TBD_)`] : [];
}

function computeCompleteness(summary: Partial<AuditReportSummary>, tbdCount: number): number {
  const fields = [
    summary.collection_name,
    summary.audit_phase,
    summary.parse_success_score,
    summary.trait_mapping_confidence,
    summary.media_mapping_confidence,
    summary.social_mapping_confidence,
    summary.schema_fit,
  ];
  const filled = fields.filter((field) => field !== null && field !== undefined).length;
  const base = Math.round((filled / fields.length) * 100);
  const penalty = Math.min(40, tbdCount * 2);
  return Math.max(0, base - penalty);
}

export async function parseAuditReport(
  collectionId: string,
  startDir: string = process.cwd(),
  options: ResolveAuditPathsOptions = {},
): Promise<AuditReportSummary> {
  const id = assertValidAuditCollectionId(collectionId);
  const paths = resolveAuditPaths(id, startDir, options);
  const auditExists = existsSync(paths.auditFile);

  if (!auditExists) {
    return {
      collection_id: id,
      audit_file: paths.auditFile,
      audit_exists: false,
      audit_status: null,
      collection_name: null,
      audit_phase: null,
      parse_success_score: null,
      trait_mapping_confidence: null,
      media_mapping_confidence: null,
      social_mapping_confidence: null,
      schema_fit: null,
      failure_count: 0,
      failures_by_classification: { A: 0, B: 0, C: 0, D: 0, E: 0 },
      incomplete_fields: ["audit file missing"],
      raw_sample_files: [],
      definition_exists: existsSync(paths.definitionFile),
      completeness_score: 0,
    };
  }

  const content = await readFile(paths.auditFile, "utf8");
  const scores = parseScoreBlock(content);
  const failures = parseFailures(content);
  const tbdMatches = content.match(PLACEHOLDER_PATTERN);
  const tbdCount = tbdMatches?.length ?? 0;

  let rawSampleFiles: string[] = [];
  if (existsSync(paths.samplesDir)) {
    const { readdir } = await import("node:fs/promises");
    rawSampleFiles = (await readdir(paths.samplesDir))
      .filter((name) => name.endsWith(".json"))
      .sort();
  }

  const summary: AuditReportSummary = {
    collection_id: id,
    audit_file: paths.auditFile,
    audit_exists: true,
    audit_status: extractField(content, "audit_status"),
    collection_name: extractField(content, "collection_name"),
    audit_phase: extractField(content, "audit_phase"),
    parse_success_score: scores.parse_success_score ?? null,
    trait_mapping_confidence: scores.trait_mapping_confidence ?? null,
    media_mapping_confidence: scores.media_mapping_confidence ?? null,
    social_mapping_confidence: scores.social_mapping_confidence ?? null,
    schema_fit: scores.schema_fit ?? null,
    failure_count: failures.failure_count,
    failures_by_classification: failures.failures_by_classification,
    incomplete_fields: listIncompleteFields(content),
    raw_sample_files: rawSampleFiles,
    definition_exists: existsSync(paths.definitionFile),
    completeness_score: 0,
  };

  summary.completeness_score = computeCompleteness(summary, tbdCount);
  return summary;
}

export { COLLECTION_ID_PATTERN };
