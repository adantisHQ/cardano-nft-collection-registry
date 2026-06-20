# Validation Methodology

How we validate the Cardano NFT Collection Definition Registry schema against real collections **without changing the schema** during active audit phases.

## Goal

Determine whether the current Collection Definition Record can accurately describe how indexers, marketplaces, wallets, and analytics tools should interpret real collections.

## Progressive approach

Start with **known, high-signal collections**. Increase complexity and volume only after the base schema stabilizes.

| Phase | Scope | Goal |
|-------|-------|------|
| **1** | Top 10 known collections | Confirm schema represents normal collections |
| **2** | Next 10–20 collections | Find common variations |
| **3** | 50–100 collections | Broad registry robustness |
| **4** | Random sampling (~12,800+ universe) | Estimate coverage |

Do **not** start with pathological collections.

## Non-goals (current phase)

- Blockfrost or chain crawling (auto-fetch not implemented; skipped even if configured)
- Automated bulk ingestion
- Schema changes during active audits
- Proposing schema changes from a single collection observation

## Handling difficult collections

A collection that cannot be parsed automatically **does not invalidate the registry**.

Represent it with:

- `definition_status: "partial"` — core parsing rules incomplete or unresolved (not merely missing optional socials/license/royalties)
- `definition_status: "complete"` — known metadata layout is mappable from the definition
- `definition_status: "broken"` — metadata too inconsistent for automatic rules
- `indexing_notes` — explain what is missing or inconsistent

The registry supports:

1. Collections with clear parse rules
2. Collections requiring creator-provided definitions

## Phase input file

For Phase 1, populate `research/phase-1-top-10.json`:

```json
[
  {
    "name": "Example Collection",
    "collection_id": "example-collection",
    "policy_ids": ["..."],
    "sample_assets": ["..."],
    "notes": ""
  }
]
```

Prepare all scaffolds:

```bash
pnpm --filter @cardano-nft-collection-registry/cli start prepare-phase research/phase-1-top-10.json
```

## Audit workflow

### 1. Prepare phase scaffolds

`prepare-phase` creates per collection:

- Audit markdown (prefilled with name, policies, samples, phase)
- Raw sample directories with `asset-00N.json` placeholders
- Placeholder definition at `registry/collections/<collection_id>.json`

Or initialize a single collection:

```bash
pnpm --filter @cardano-nft-collection-registry/cli start audit-template <collection_id>
```

### 2. Collect raw samples

Manually gather per-asset metadata JSON. Replace placeholders in `research/raw-samples/<collection_id>/` without normalizing content.

### 3. Complete audit markdown

Fill every section in `research/audits/<collection_id>.audit.md`. See [audit-template.md](audit-template.md).

### 4. Refine Collection Definition Record

Update the placeholder definition. Validate:

```bash
pnpm --filter @cardano-nft-collection-registry/cli start validate registry/collections/<collection_id>.json
```

Test parsing with `normalizeCollectionMetadata` against each raw sample.

### 5. Score and summarize

```bash
pnpm --filter @cardano-nft-collection-registry/cli start audit-report <collection_id>
```

## Scoring model

```
parse_success_score: 0-100
trait_mapping_confidence: low | medium | high
media_mapping_confidence: low | medium | high
social_mapping_confidence: low | medium | high
schema_fit: fits | fits_with_notes | requires_schema_change | not_representable
```

## Failure classification

| Code | Meaning |
|------|---------|
| **A** | Missing data in collection |
| **B** | Parser bug |
| **C** | Incorrect mapping |
| **D** | Schema insufficient (log after 2+ collections) |
| **E** | Rare edge case; notes/manual handling |

## Schema change policy

1. Do not modify schemas during validation phases
2. Record D-class failures in audits
3. Add to [schema-gap-log.md](schema-gap-log.md) only when **2+ collections** share the same gap
4. Implement schema changes only after stabilization sign-off

## Related documents

- [collection-selection.md](collection-selection.md)
- [phase-input.md](phase-input.md)
- [audit-template.md](audit-template.md)
- [schema-gap-log.md](schema-gap-log.md)
