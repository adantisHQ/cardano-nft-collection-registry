# Collection Audit: DEADPXLZ

Per-collection audit output for schema validation against real Cardano NFT collections.

---

## Audit metadata

| Field | Value |
|-------|-------|
| `collection_id` | `deadpxlz` |
| `collection_name` | DEADPXLZ |
| `audit_phase` | 1 |
| `auditor` | Phase 1 metadata discovery (automated + review) |
| `audit_date` | 2026-06-08 |
| `audit_status` | complete |

## Input provided

### Policy IDs

```
1ec85dcee27f2d90ec1f9a1e4ce74a667dc9be8b184463223f9c9601
```

### Sample assets

| Label | Asset unit | Notes |
|-------|------------|-------|
| asset-001 | `1ec85dcee27f2d90ec1f9a1e4ce74a667dc9be8b184463223f9c960150584c31` | Blockfrost raw |
| asset-002 | `1ec85dcee27f2d90ec1f9a1e4ce74a667dc9be8b184463223f9c960150584c3130` | Blockfrost raw |
| asset-003 | `1ec85dcee27f2d90ec1f9a1e4ce74a667dc9be8b184463223f9c960150584c3131` | Blockfrost raw |
| asset-004 | `1ec85dcee27f2d90ec1f9a1e4ce74a667dc9be8b184463223f9c960150584c3232` | Blockfrost raw |
| asset-005 | `1ec85dcee27f2d90ec1f9a1e4ce74a667dc9be8b184463223f9c960150584c3335` | Blockfrost raw |
| asset-006 | `1ec85dcee27f2d90ec1f9a1e4ce74a667dc9be8b184463223f9c960150584c3438` | Blockfrost raw |
| asset-007 | `1ec85dcee27f2d90ec1f9a1e4ce74a667dc9be8b184463223f9c960150584c3536` | Blockfrost raw |
| asset-008 | `1ec85dcee27f2d90ec1f9a1e4ce74a667dc9be8b184463223f9c960150584c3730` | Blockfrost raw |
| asset-009 | `1ec85dcee27f2d90ec1f9a1e4ce74a667dc9be8b184463223f9c960150584c3834` | Blockfrost raw |
| asset-010 | `1ec85dcee27f2d90ec1f9a1e4ce74a667dc9be8b184463223f9c960150584c3939` | Blockfrost raw |

Raw samples directory: `research/raw-samples/deadpxlz/`

Files: `asset-001.json` … `asset-010.json` (Blockfrost raw, unmodified)

### Known problems (optional)

Phase 1 metadata discovery via Blockfrost. See `research/findings/deadpxlz.md`.

---

## Metadata analysis

| Field | Finding |
|-------|---------|
| Metadata standard | CIP25v1 |
| Metadata root | `onchain_metadata` |
| Asset name encoding | hex (Blockfrost `asset_name` field) |
| CIP-25 layout notes | Flat or custom layouts observed |
| CIP-68 layout notes | Not observed in samples |
| Custom conventions | Dual media (`src` HTML + `image`) |

---

## Media analysis

| Field | Path or value | Source | Notes |
|-------|---------------|--------|-------|
| Image | `$.image` | on-chain | IPFS in samples |
| Animation | `$.src` (text/html) | on-chain | |
| Files / multi-media | — |  | |
| Thumbnail | — | | |
| Collection logo | — | registry-only | |
| Collection banner | — | registry-only | |

---

## Trait analysis

| Field | Finding |
|-------|---------|
| Trait grouping style | `tags[]` visual tags; `properties[]` structured key/value (e |
| Primary trait root path | metadata root (flat keys) |
| Canonical trait names | See inventory |
| Value types observed | string, array, number (collection-dependent) |
| Normalization requirements | Mostly none |
| Dynamic traits | no |

### Trait path inventory

| Canonical trait | Source path(s) | Value type | Normalization | Required |
|-----------------|----------------|------------|---------------|----------|
| tags | `$.tags` | array | none | no |
| type (properties) | `$.properties[0].value` | string | none | no |

---

## Socials

| Platform | Location or explicit value | Status |
|----------|----------------------------|--------|
| x | — | missing |
| discord | — | missing |
| telegram | — | missing |
| github | — | missing |
| other | — | missing |

---

## Links

| Link type | Location or explicit value | Status |
|-----------|----------------------------|--------|
| website | missing | missing |
| mint | — | missing |
| documentation | — | missing |
| other | — | missing |

---

## License

| Field | Location or value | Status |
|-------|-------------------|--------|
| License text | — | missing |
| License URL | — | missing |
| Commercial use | — | missing |
| Derivative use | — | missing |

---

## Royalties

| Field | Finding |
|-------|---------|
| Discoverable | no (in on-chain metadata samples) |
| Source | unknown |
| Percentage | — |
| Address | — |
| Notes | Royalties may exist at marketplace/CIP-27 level; not in sampled asset metadata |

---

## Indexing caveats

| Severity | Message |
|----------|---------|
| info | Raw samples are Blockfrost asset responses; extract `onchain_metadata` for parsing |
| info | Standard CIP-25 on-chain metadata in most samples |
| info | See findings for collection-specific notes |

---

## Schema fit assessment

| Question | Answer |
|----------|--------|
| Can current schema represent this collection? | yes — with explicit mappings and indexing notes |
| `schema_fit` | fits_with_notes |
| Proposed definition status | partial (discovery complete; definition not updated in this phase) |
| Blockers | None requiring schema change in isolation |

---

## Failures

| # | Area | Description | Classification |
|---|------|-------------|----------------|
| 1 | Traits | properties uses [{key,value}] array not attributes object | E |
| 2 | Traits | tags array provides parallel trait-like data | C |
| 3 | Socials | No social fields on asset metadata | A |
| 4 | License | No license metadata | A |
| 5 | Royalties | No royalty metadata | A |

---

## Scoring

```
parse_success_score: 88
trait_mapping_confidence: medium
media_mapping_confidence: high
social_mapping_confidence: high
schema_fit: fits_with_notes
```

---

## Outputs

| Artifact | Path |
|----------|------|
| Raw samples | `research/raw-samples/deadpxlz/` |
| Audit report | `research/audits/deadpxlz.audit.md` |
| Generated definition | `registry/collections/deadpxlz.json` (placeholder; not modified) |
| Detailed finding | `research/findings/deadpxlz.md` |

---

## Notes

Detailed analysis: `research/findings/deadpxlz.md`. No schema or definition changes performed in this pass.
