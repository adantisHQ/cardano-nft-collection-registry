# Collection Audit: Book.io - Whitepaper 2.0

Per-collection audit output for schema validation against real Cardano NFT collections.

---

## Audit metadata

| Field | Value |
|-------|-------|
| `collection_id` | `book-io-whitepaper-2` |
| `collection_name` | Book.io - Whitepaper 2.0 |
| `audit_phase` | 2 |
| `auditor` | Phase 2 metadata discovery (automated + review) |
| `audit_date` | 2026-06-08 |
| `audit_status` | complete |

## Input provided

### Policy IDs

```
b1f614be8ed0921f2d3fc4d013f2ab076fe62db43b5bdcce686c4377
```

### Sample assets

| Label | Asset unit | Notes |
|-------|------------|-------|
| asset-001 | `b1f614be8ed0921f2d3fc4d013f2ab076fe62db43b5bdcce686c4377426f6f6b57686974653234363730` | Blockfrost raw |
| asset-002 | `b1f614be8ed0921f2d3fc4d013f2ab076fe62db43b5bdcce686c4377426f6f6b57686974653230323039` | Blockfrost raw |
| asset-003 | `b1f614be8ed0921f2d3fc4d013f2ab076fe62db43b5bdcce686c4377426f6f6b57686974653233363636` | Blockfrost raw |
| asset-004 | `b1f614be8ed0921f2d3fc4d013f2ab076fe62db43b5bdcce686c4377426f6f6b57686974653232313134` | Blockfrost raw |
| asset-005 | `b1f614be8ed0921f2d3fc4d013f2ab076fe62db43b5bdcce686c4377426f6f6b57686974653230363838` | Blockfrost raw |
| asset-006 | `b1f614be8ed0921f2d3fc4d013f2ab076fe62db43b5bdcce686c4377426f6f6b57686974653230373631` | Blockfrost raw |
| asset-007 | `b1f614be8ed0921f2d3fc4d013f2ab076fe62db43b5bdcce686c4377426f6f6b57686974653230373233` | Blockfrost raw |
| asset-008 | `b1f614be8ed0921f2d3fc4d013f2ab076fe62db43b5bdcce686c4377426f6f6b57686974653233363837` | Blockfrost raw |
| asset-009 | `b1f614be8ed0921f2d3fc4d013f2ab076fe62db43b5bdcce686c4377426f6f6b57686974653233333439` | Blockfrost raw |
| asset-010 | `b1f614be8ed0921f2d3fc4d013f2ab076fe62db43b5bdcce686c4377426f6f6b57686974653233363436` | Blockfrost raw |

Raw samples directory: `research/raw-samples/book-io-whitepaper-2/`

Files: `asset-001.json` … `asset-010.json` (Blockfrost raw, unmodified)

### Known problems (optional)

Phase 2 document/whitepaper NFT; candidate for on-chain license, terms, or rights fields absent in Phase 1 samples.

---

## Metadata analysis

| Field | Finding |
|-------|---------|
| Metadata standard | CIP25v1 |
| Metadata root | `onchain_metadata` |
| Asset name encoding | hex (Blockfrost `asset_name` field) |
| CIP-25 layout notes | `attributes` object map |
| CIP-68 layout notes | Not observed in samples |
| Custom conventions | authors, attributes, extraAttributes |

---

## Media analysis

| Field | Path or value | Source | Notes |
|-------|---------------|--------|-------|
| Image | `$.image` | on-chain | `image` string; `files[]` multi-media |
| Animation | — |  | |
| Files / multi-media | `$.files[]` | on-chain | |
| Thumbnail | — | | |
| Collection logo | — | registry-only | |
| Collection banner | — | registry-only | |

---

## Trait analysis

| Field | Finding |
|-------|---------|
| Trait grouping style | attributes_object |
| Primary trait root path | `attributes` object map |
| Canonical trait names | See inventory |
| Value types observed | string, number, array (collection-dependent) |
| Normalization requirements | Mostly none |
| Dynamic traits | no |

### Trait path inventory

| Canonical trait | Source path(s) | Value type | Normalization | Required |
|-----------------|----------------|------------|---------------|----------|
| Variation | `$.attributes.Variation` | string | none | no |
| Cover Theme | `$.attributes.Cover Theme` | string | none | no |

---

## Socials

| Platform | Location or explicit value | Status |
|----------|----------------------------|--------|
| x | — | missing |
| discord | — | missing |
| telegram | — | missing |

---

## Links

| Link type | Location or explicit value | Status |
|-----------|----------------------------|--------|
| website | website | found |
| mint | — | missing |
| documentation | — | missing |
| other | — | see findings |

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
| Notes | Royalties may exist at marketplace/CIP-27 level; not always in asset metadata |

---

## Indexing caveats

| Severity | Message |
|----------|---------|
| info | Raw samples are Blockfrost asset responses; extract `onchain_metadata` for parsing |
| info | All fetched samples have on-chain metadata |
| info | Use `direct_path` under `$.attributes.<key>` |

---

## Schema fit assessment

| Question | Answer |
|----------|--------|
| Can current schema represent this collection? | yes — with explicit mappings and indexing notes |
| `schema_fit` | fits_with_notes |
| Proposed definition status | discovery complete; definition deferred |
| Blockers | None requiring schema change in isolation |

---

## Failures

| # | Area | Description | Classification |
|---|------|-------------|----------------|
| 1 | Socials | No social fields on asset metadata | A |
| 2 | License | No license metadata on asset | A |
| 3 | Royalties | No royalty metadata on asset | A |
| 4 | Custom | Collection-specific fields: authors, attributes, extraAttributes | C |

---

## Scoring

```
parse_success_score: 85
trait_mapping_confidence: high
media_mapping_confidence: high
social_mapping_confidence: medium
schema_fit: fits_with_notes
```

---

## Outputs

| Artifact | Path |
|----------|------|
| Raw samples | `research/raw-samples/book-io-whitepaper-2/` |
| Audit report | `research/audits/book-io-whitepaper-2.audit.md` |
| Generated definition | `registry/collections/book-io-whitepaper-2.json` (placeholder only; not finalized) |
| Detailed finding | `research/findings/book-io-whitepaper-2.md` |

---

## Notes

Detailed analysis: `research/findings/book-io-whitepaper-2.md`. No schema, parser, or final definition changes in this pass.
