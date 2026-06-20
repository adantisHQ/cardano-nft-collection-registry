# Cardano NFT Collection Definition Registry

**Cardano NFT Collection Definition Registry** — a collection-level registry that defines how to interpret, normalize, and present Cardano NFT metadata across inconsistent CIP-25, CIP-68, custom, legacy, and broken collection layouts.

> **This registry does not store every NFT's metadata or traits.**  
> It stores **collection-level interpretation rules** — one definition per collection (or policy group), not one record per asset.

Given a policy ID, indexers, marketplaces, wallets, and analytics tools load a **Collection Definition Record** and know how that collection's metadata works without maintaining parallel per-project heuristics.

**Validated baseline:** 30 audited collections · 300 Blockfrost samples · 0 normalization failures · see [docs/internal-baseline.md](docs/internal-baseline.md)

**Public preview:** see [docs/public-preview-checklist.md](docs/public-preview-checklist.md) for publish scope. Normative specification: [spec/README.md](spec/README.md).

---

## What this registry answers

> Given a Cardano NFT policy ID, how should an application interpret this collection?

The registry defines:

1. Collection identity
2. Policy IDs
3. Metadata layout
4. Trait extraction rules
5. Trait normalization rules
6. Media extraction rules
7. Social link extraction or explicit declaration
8. Official link extraction or explicit declaration
9. Collection image/logo/banner extraction or explicit declaration
10. External files/resources
11. License information
12. Royalty information
13. CIP-25 compatibility
14. CIP-68 compatibility
15. Custom metadata conventions
16. Indexing caveats

---

## Core principle: sourced values

Every field supports either an **explicit registry value** or **metadata path extraction**:

```json
{
  "value": "https://example.com",
  "source_path": "$.project.website",
  "source": "registry",
  "notes": "..."
}
```

If a value is not in NFT metadata, define it explicitly. If it lives under a custom key, define the path.

---

## Collection Definition Record

```json
{
  "registry_version": "1.0.0",
  "collection_id": "example-collection",
  "name": "Example Collection",
  "definition_status": "complete",
  "policy_ids": ["..."],
  "identity": {},
  "metadata_layout": {},
  "trait_mappings": [],
  "media_mappings": {},
  "social_mappings": {},
  "link_mappings": {},
  "external_resources": [],
  "license_info": {},
  "royalty_info": {},
  "normalization_rules": [],
  "indexing_notes": []
}
```

This is **collection-level only**. A collection may have 1 NFT or 200,000 NFTs.

---

## Repository layout

```
/spec              Normative registry specification (start here)
/schemas           JSON Schema definitions
/registry          Published collection definitions (network-scoped)
  mainnet/collections/   Canonical mainnet definitions (54 files)
  preprod/collections/
  preview/collections/
/docs              Registry documentation
/research          Audits, findings, open issues, validation reports
/examples          Example definition records
/packages/core     Types, Zod validation, parser utilities
/packages/cli      Command-line tooling
/packages/api      Minimal REST API
/packages/indexer  Indexer-facing utilities
```

---

## Quick start

```bash
pnpm install
pnpm build
pnpm test
pnpm validate-all
```

### Parse metadata with a definition

```typescript
import { normalizeCollectionMetadata } from "@cardano-nft-collection-registry/core";

const result = normalizeCollectionMetadata(rawMetadata, collectionDefinition);
// { collection_id, name, traits, media, socials, links, license, royalties, warnings }
```

### Validate definitions

```bash
pnpm validate-all
pnpm --filter @cardano-nft-collection-registry/cli start validate-all --network mainnet
pnpm --filter @cardano-nft-collection-registry/cli start validate registry/mainnet/collections/clay-nation.json
```

Mainnet definitions live in `registry/mainnet/collections/`. Legacy fallback to `registry/collections/` remains in code until Phase 3 but is not used after Phase 2 migration. Use `--network preprod` or `--network preview` for testnet datasets. See [docs/multi-network-migration.md](docs/multi-network-migration.md).

---

## Design principles

- **Definition, not directory** — rules for parsing and normalization, not a trait database
- **Does not replace CIP-25 or CIP-68** — explains how to interpret them per collection
- **Explicit or extracted** — registry value or `source_path` for every mappable field
- **Legacy-friendly** — supports broken, mixed, and non-standard metadata
- **Honest completeness** — `definition_status` reflects coverage, not market importance
- **No fake verification** — no governance theater or blockchain signing in v1

---

## Documentation

| Document | Description |
|----------|-------------|
| [spec/README.md](spec/README.md) | Normative specification for adopters |
| [public-preview-checklist.md](docs/public-preview-checklist.md) | Publish scope and path classification |
| [internal-baseline.md](docs/internal-baseline.md) | Validated baseline summary (30 collections) |
| [roadmap.md](docs/roadmap.md) | Forward plan by workstream |
| [open-issues.md](research/open-issues.md) | GAPs, edge cases, ops policies |
| [end-to-end-validation.md](research/end-to-end-validation.md) | Normalization proof across 30 collections |
| [vision.md](docs/vision.md) | Goals and scope |
| [registry-model.md](docs/registry-model.md) | Collection Definition Record structure |
| [trait-mappings.md](docs/trait-mappings.md) | Extraction strategies |
| [trait-schema.md](docs/trait-schema.md) | Trait mappings and value types |
| [source-paths.md](docs/source-paths.md) | Source path syntax and limitations |
| [cip25-indexing.md](docs/cip25-indexing.md) | CIP-25 layout and extraction |
| [cip68-indexing.md](docs/cip68-indexing.md) | CIP-68 layout and extraction |
| [submission-guide.md](docs/submission-guide.md) | How to submit a definition |
| [future-cip.md](docs/future-cip.md) | Possible future standardization |
| [multi-network-migration.md](docs/multi-network-migration.md) | Network layout, Phase 1 loader behavior |

---

## Packages

| Package | Purpose |
|---------|---------|
| `@cardano-nft-collection-registry/core` | Schemas, `extractBySourcePath`, `normalizeCollectionMetadata` |
| `@cardano-nft-collection-registry/cli` | Validate, inspect, list, search, prepare-phase |
| `@cardano-nft-collection-registry/api` | REST API over registry definitions |
| `@cardano-nft-collection-registry/indexer` | Policy lookup and metadata normalization utilities |

---

## Validation status

| Phase | Collections | Status |
|-------|-------------|--------|
| Phase 1 | 10 | Complete — definitions + e2e validated |
| Phase 2 | 20 | Complete — definitions + e2e validated |
| Phase 3 | ~100 | **Not started** |

Phase scaffolding:

```bash
node packages/cli/dist/cli.js prepare-phase research/phase-2-selected.json --phase 2
```

See [research/validation-methodology.md](research/validation-methodology.md) and [research/collection-selection.md](research/collection-selection.md).

---

## License

Apache-2.0
