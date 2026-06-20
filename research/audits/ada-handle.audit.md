# Collection Audit: ADA Handle

Per-collection audit output for schema validation against real Cardano NFT collections.

---

## Audit metadata

| Field | Value |
|-------|-------|
| `collection_id` | `ada-handle` |
| `collection_name` | ADA Handle |
| `audit_phase` | 1 |
| `auditor` | Phase 1 metadata discovery (automated + review) |
| `audit_date` | 2026-06-08 |
| `audit_status` | complete |

## Input provided

### Policy IDs

```
f0ff48bbb7bbe9d59a40f1ce90e9e9d0ff5002ec48f232b49ca0fb9a
```

### Sample assets

| Label | Asset unit | Notes |
|-------|------------|-------|
| asset-001 | `f0ff48bbb7bbe9d59a40f1ce90e9e9d0ff5002ec48f232b49ca0fb9a` | Blockfrost raw |
| asset-002 | `f0ff48bbb7bbe9d59a40f1ce90e9e9d0ff5002ec48f232b49ca0fb9a6477686974652e616461` | Blockfrost raw |
| asset-003 | `f0ff48bbb7bbe9d59a40f1ce90e9e9d0ff5002ec48f232b49ca0fb9a68616e646c652e616461` | Blockfrost raw |
| asset-004 | `f0ff48bbb7bbe9d59a40f1ce90e9e9d0ff5002ec48f232b49ca0fb9a6767` | Blockfrost raw |
| asset-005 | `f0ff48bbb7bbe9d59a40f1ce90e9e9d0ff5002ec48f232b49ca0fb9a657879` | Blockfrost raw |
| asset-006 | `f0ff48bbb7bbe9d59a40f1ce90e9e9d0ff5002ec48f232b49ca0fb9a636f6e7472696275746f7273` | Blockfrost raw |
| asset-007 | `f0ff48bbb7bbe9d59a40f1ce90e9e9d0ff5002ec48f232b49ca0fb9a7573` | Blockfrost raw |
| asset-008 | `f0ff48bbb7bbe9d59a40f1ce90e9e9d0ff5002ec48f232b49ca0fb9a6576696c` | Blockfrost raw |
| asset-009 | `f0ff48bbb7bbe9d59a40f1ce90e9e9d0ff5002ec48f232b49ca0fb9a6c75636173` | Blockfrost raw |
| asset-010 | `f0ff48bbb7bbe9d59a40f1ce90e9e9d0ff5002ec48f232b49ca0fb9a6769726c` | Blockfrost raw |

Raw samples directory: `research/raw-samples/ada-handle/`

Files: `asset-001.json` … `asset-010.json` (Blockfrost raw, unmodified)

### Known problems (optional)

Phase 1 metadata discovery via Blockfrost. See `research/findings/ada-handle.md`.

---

## Metadata analysis

| Field | Finding |
|-------|---------|
| Metadata standard | CIP25v1 |
| Metadata root | `onchain_metadata` |
| Asset name encoding | hex (Blockfrost `asset_name` field) |
| CIP-25 layout notes | Flat or custom layouts observed |
| CIP-68 layout notes | Not observed in samples |
| Custom conventions | `core.termsofuse`, `core.handleEncoding`, `core.prefix` ($) |

---

## Media analysis

| Field | Path or value | Source | Notes |
|-------|---------------|--------|-------|
| Image | `$.image` | on-chain | IPFS in samples |
| Animation | — |  | |
| Files / multi-media | — |  | |
| Thumbnail | — | | |
| Collection logo | — | registry-only | |
| Collection banner | — | registry-only | |

---

## Trait analysis

| Field | Finding |
|-------|---------|
| Trait grouping style | Not trait-grid oriented; identity fields under `core |
| Primary trait root path | metadata root (flat keys) |
| Canonical trait names | See inventory |
| Value types observed | string, array, number (collection-dependent) |
| Normalization requirements | Mostly none |
| Dynamic traits | no |

### Trait path inventory

| Canonical trait | Source path(s) | Value type | Normalization | Required |
|-----------------|----------------|------------|---------------|----------|
| handle | `$.name` | string | none | yes |
| prefix | `$.core.prefix` | string | none | yes |
| og | `$.core.og` | integer | none | yes |

---

## Socials

| Platform | Location or explicit value | Status |
|----------|----------------------------|--------|
| x | — | missing |
| discord | — | missing |
| website | `$.website` | found |

---

## Links

| Link type | Location or explicit value | Status |
|-----------|----------------------------|--------|
| website | `$.website` found | found |
| mint | — | missing |
| documentation | — | missing |
| other | — | missing |

---

## License

| Field | Location or value | Status |
|-------|-------------------|--------|
| License text | — | missing |
| License URL | `$.core.termsofuse` | found |
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
| `schema_fit` | fits |
| Proposed definition status | partial (discovery complete; definition not updated in this phase) |
| Blockers | None requiring schema change in isolation |

---

## Failures

| # | Area | Description | Classification |
|---|------|-------------|----------------|
| 1 | Traits | No PFP trait grid (expected for identity collection) | A |
| 2 | Socials | No twitter/discord on asset metadata | A |
| 3 | License | Terms of use URL in core namespace | C |
| 4 | Royalties | No royalty metadata | A |

---

## Scoring

```
parse_success_score: 95
trait_mapping_confidence: high
media_mapping_confidence: high
social_mapping_confidence: medium
schema_fit: fits
```

---

## Outputs

| Artifact | Path |
|----------|------|
| Raw samples | `research/raw-samples/ada-handle/` |
| Audit report | `research/audits/ada-handle.audit.md` |
| Generated definition | `registry/collections/ada-handle.json` (placeholder; not modified) |
| Detailed finding | `research/findings/ada-handle.md` |

---

## Notes

Detailed analysis: `research/findings/ada-handle.md`. No schema or definition changes performed in this pass.
