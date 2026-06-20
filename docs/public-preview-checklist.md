# Public preview checklist

This document classifies repository paths for a **public preview** release of the Cardano NFT Collection Definition Registry. It is the source of truth for what belongs in an open repository versus what stays local to ADAntis operators.

## Summary

| Classification | Meaning |
|----------------|---------|
| **public** | Safe to publish; intended for external adopters |
| **internal** | May publish with the preview; ADAntis workflow context, not operator secrets |
| **private** | Must not publish; ADAntis operational onboarding |
| **generated** | Build artifacts and local output; never commit |
| **excluded** | Gitignored; may exist on disk but must not appear in the public tree |

## Public preview scope

**Include:**

- Normative specification (`spec/`)
- JSON Schema (`schemas/`)
- Implementation packages (`packages/`)
- Published collection definitions (`registry/mainnet/collections/`, testnet trees)
- Registry documentation (`docs/` except items moved to `ops/docs/`)
- Legacy examples (`examples/`)
- Validation research summaries (`research/` except `raw-samples/`)
- Root project files (`README.md`, `LICENSE`, `package.json`, workspace config)

**Exclude:**

- ADAntis API keys and `.env` files
- Bulk import scripts and tests (`tools/adantis-private/`)
- Batch manifests and enrichment outputs (`ops/onboarding/`)
- Dry-run logs and scratch output (`tmp/`)
- TapTools CSV workspace (`taptools-local/`, `csv/`, `data/`, `exports/`, `output/`)
- Raw Blockfrost metadata dumps (`research/raw-samples/`)
- Operational onboarding reports (`ops/docs/`, `ops/research/`)

---

## Path classification

### Root

| Path | Classification | Notes |
|------|----------------|-------|
| `README.md` | public | Entry point; links to `spec/` and registry docs |
| `LICENSE` | public | Apache-2.0 |
| `package.json` | public | No ADAntis import script references |
| `pnpm-lock.yaml` | public | Lockfile |
| `pnpm-workspace.yaml` | public | Workspace config |
| `tsconfig.base.json` | public | Shared TS config |
| `.npmrc` | public | Package manager settings |
| `.gitignore` | public | Enforces exclusions below |
| `.env` / `.env.*` | excluded | Secrets — gitignored |
| `collections-mainnet.*` | excluded | Safety-net gitignore if recreated at root |

### Specification and schema

| Path | Classification | Notes |
|------|----------------|-------|
| `spec/` | public | Normative registry specification + validated examples |
| `schemas/` | public | JSON Schema for collection definitions |

### Registry data

| Path | Classification | Notes |
|------|----------------|-------|
| `registry/mainnet/collections/` | public | 54 canonical mainnet definitions |
| `registry/preprod/collections/` | public | Testnet definitions (if present) |
| `registry/preview/collections/` | public | Preview testnet definitions (if present) |
| `registry/collections/` | internal | Legacy path; loader fallback only |

### Packages

| Path | Classification | Notes |
|------|----------------|-------|
| `packages/core/` | public | Types, validation, normalization |
| `packages/cli/` | public | Validate, inspect, list, search, prepare-phase |
| `packages/api/` | public | Minimal REST API |
| `packages/indexer/` | public | Indexer-facing utilities |

### Documentation

| Path | Classification | Notes |
|------|----------------|-------|
| `docs/vision.md` | public | Goals and scope |
| `docs/registry-model.md` | public | Collection Definition Record structure |
| `docs/trait-mappings.md` | public | Extraction strategies (registry doc) |
| `docs/trait-schema.md` | public | Trait value types |
| `docs/source-paths.md` | public | Source path syntax |
| `docs/cip25-indexing.md` | public | CIP-25 guidance |
| `docs/cip68-indexing.md` | public | CIP-68 guidance |
| `docs/submission-guide.md` | public | How to submit a definition |
| `docs/multi-network-migration.md` | public | Network layout |
| `docs/roadmap.md` | public | Forward plan |
| `docs/future-cip.md` | public | Possible standardization |
| `docs/spec-readiness-review.md` | public | Spec readiness assessment |
| `docs/public-preview-checklist.md` | public | This file |
| `docs/internal-baseline.md` | internal | Validated baseline summary (30 collections) |
| `docs/mainnet-bulk-onboarding.md` | private | Moved to `ops/docs/` |
| `docs/mainnet-enrichment-roadmap.md` | private | Moved to `ops/docs/` |
| `docs/adantis-integration.md` | private | Moved to `ops/docs/` |

### Examples

| Path | Classification | Notes |
|------|----------------|-------|
| `examples/` | public | Legacy example definition records |

### Research

| Path | Classification | Notes |
|------|----------------|-------|
| `research/validation-methodology.md` | public | How definitions are validated |
| `research/collection-selection.md` | public | Selection criteria |
| `research/end-to-end-validation.md` | public | Normalization proof |
| `research/open-issues.md` | public | GAPs and edge cases |
| `research/schema-gap-log.md` | internal | Schema evolution log |
| `research/audits/` | internal | Per-collection audit write-ups |
| `research/findings/` | internal | Per-collection discovery notes |
| `research/phase-*.json` | internal | Phase selection manifests |
| `research/raw-samples/` | excluded | Raw Blockfrost metadata dumps — gitignored |

### ADAntis private (local operators)

| Path | Classification | Notes |
|------|----------------|-------|
| `tools/adantis-private/import-collections-mainnet.sh` | private | Bulk POST importer; requires `ADMIN_API_KEY` |
| `tools/adantis-private/test-import-collections-mainnet.sh` | private | Static validation for importer |
| `tools/adantis-private/phase2-migrate-mainnet.mjs` | private | One-off migration helper |
| `ops/onboarding/` | private | Batch manifests, enriched top-100, review reports |
| `ops/docs/` | private | Bulk onboarding and ADAntis integration docs |
| `ops/research/` | private | TapTools inventory, top-100 review, migration reports |
| `ops/scripts/` | private | Batch builders, enrichment scripts |

### Generated / local output

| Path | Classification | Notes |
|------|----------------|-------|
| `node_modules/` | generated | Dependencies |
| `dist/` | generated | Build output |
| `coverage/` | generated | Test coverage |
| `*.tsbuildinfo` | generated | TypeScript incremental build |
| `tmp/` | excluded | Dry-run logs, phase scripts, scratch JSON |
| `output/` | excluded | Local output |
| `csv/` | excluded | TapTools / CSV imports |
| `data/` | excluded | Local data dumps |
| `exports/` | excluded | Export artifacts |
| `taptools-local/` | excluded | TapTools scrape workspace (CSVs, cache, venv) |

---

## Pre-publish verification

Run before tagging or publishing:

```bash
pnpm install
pnpm build
pnpm test
pnpm validate-all --network mainnet
```

Confirm git status shows **no** tracked files under:

- `ops/`
- `tools/adantis-private/`
- `tmp/`
- `taptools-local/`
- `research/raw-samples/`
- `collections-mainnet.*` at repository root

Confirm no secrets:

```bash
# Should return nothing
git grep -i 'ADMIN_API_KEY\|api_key\|sk_live' -- ':!ops/' ':!tools/'
```

---

## Local operator layout (not published)

ADAntis operators keep onboarding artifacts under:

```
ops/
  onboarding/     # collections-mainnet.* manifests and reviews
  docs/           # bulk onboarding, enrichment roadmap, integration design
  research/       # TapTools inventory, migration reports
  scripts/        # batch builders, enrichment scripts

tools/adantis-private/
  import-collections-mainnet.sh
  test-import-collections-mainnet.sh
  phase2-migrate-mainnet.mjs
```

These paths are gitignored. Restore them from internal backups or regenerate from TapTools/Blockfrost workflows — they are not part of the public registry.

---

## Related documents

- [spec/README.md](../spec/README.md) — normative specification for external adopters
- [docs/spec-readiness-review.md](spec-readiness-review.md) — readiness assessment
- [docs/submission-guide.md](submission-guide.md) — how to contribute a definition
