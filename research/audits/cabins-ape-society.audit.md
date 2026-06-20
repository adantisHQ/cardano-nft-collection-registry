# Collection Audit: Cabins by The Ape Society

Per-collection audit output for schema validation against real Cardano NFT collections.

---

## Audit metadata

| Field | Value |
|-------|-------|
| `collection_id` | `cabins-ape-society` |
| `collection_name` | Cabins by The Ape Society |
| `audit_phase` | 2 |
| `auditor` | Phase 2 metadata discovery (automated + review) |
| `audit_date` | 2026-06-08 |
| `audit_status` | complete |

## Input provided

### Policy IDs

```
d4e087164acf8314f1203f0b0996f14908e2a199a296d065f14b8b09
```

### Sample assets

| Label | Asset unit | Notes |
|-------|------------|-------|
| asset-001 | `d4e087164acf8314f1203f0b0996f14908e2a199a296d065f14b8b09636162696e36384d61796153747265657447453232493238` | Blockfrost raw |
| asset-002 | `d4e087164acf8314f1203f0b0996f14908e2a199a296d065f14b8b09636162696e31383744756e6261724176656e756542443734423532` | Blockfrost raw |
| asset-003 | `d4e087164acf8314f1203f0b0996f14908e2a199a296d065f14b8b09636162696e35314f6e736c6f77506c61636547523235423637` | Blockfrost raw |
| asset-004 | `d4e087164acf8314f1203f0b0996f14908e2a199a296d065f14b8b09636162696e313734526973746f76526f61645a453131483637` | Blockfrost raw |
| asset-005 | `d4e087164acf8314f1203f0b0996f14908e2a199a296d065f14b8b09636162696e39486f6c6c7948696c6c4176656e756544453839543830` | Blockfrost raw |
| asset-006 | `d4e087164acf8314f1203f0b0996f14908e2a199a296d065f14b8b09636162696e3236436f6e737469747574696f6e48696c6c454239384735` | Blockfrost raw |
| asset-007 | `d4e087164acf8314f1203f0b0996f14908e2a199a296d065f14b8b09636162696e31373148696c6c6372657374447269766557483637423135` | Blockfrost raw |
| asset-008 | `d4e087164acf8314f1203f0b0996f14908e2a199a296d065f14b8b09636162696e3138416e697461576179464f3431463436` | Blockfrost raw |
| asset-009 | `d4e087164acf8314f1203f0b0996f14908e2a199a296d065f14b8b09636162696e3735456c4c6f626f57617942523933533837` | Blockfrost raw |
| asset-010 | `d4e087164acf8314f1203f0b0996f14908e2a199a296d065f14b8b09636162696e33395374416e6e4c616e65534e3233513534` | Blockfrost raw |

Raw samples directory: `research/raw-samples/cabins-ape-society/`

Files: `asset-001.json` … `asset-010.json` (Blockfrost raw, unmodified)

### Known problems (optional)

Phase 2 housing/land hybrid in Ape Society ecosystem; tests building/parcel metadata and multi-policy society structure.

---

## Metadata analysis

| Field | Finding |
|-------|---------|
| Metadata standard | CIP25v1 |
| Metadata root | `onchain_metadata` |
| Asset name encoding | hex (Blockfrost `asset_name` field) |
| CIP-25 layout notes | Flat trait-like keys at metadata root |
| CIP-68 layout notes | Not observed in samples |
| Custom conventions | See findings |

---

## Media analysis

| Field | Path or value | Source | Notes |
|-------|---------------|--------|-------|
| Image | `$.image` | on-chain | `image` string; `files[]` multi-media; mediaType: image/gif |
| Animation | — |  | |
| Files / multi-media | `$.files[]` | on-chain | |
| Thumbnail | — | | |
| Collection logo | — | registry-only | |
| Collection banner | — | registry-only | |

---

## Trait analysis

| Field | Finding |
|-------|---------|
| Trait grouping style | root_flat_keys |
| Primary trait root path | Flat trait-like keys at metadata root |
| Canonical trait names | See inventory |
| Value types observed | string, number, array (collection-dependent) |
| Normalization requirements | Mostly none |
| Dynamic traits | no |

### Trait path inventory

| Canonical trait | Source path(s) | Value type | Normalization | Required |
|-----------------|----------------|------------|---------------|----------|
| rate | `$.rate` | string | none | no |
| Street | `$.Street` | string | none | no |
| District | `$.District` | string | none | no |
| Cabin Size | `$.Cabin Size` | string | none | no |
| SLVD Rating | `$.SLVD Rating` | string | none | no |
| X Coordinate | `$.X Coordinate` | string | none | no |
| Y Coordinate | `$.Y Coordinate` | string | none | no |

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
| Notes | Royalties may exist at marketplace/CIP-27 level; not always in asset metadata |

---

## Indexing caveats

| Severity | Message |
|----------|---------|
| info | Raw samples are Blockfrost asset responses; extract `onchain_metadata` for parsing |
| info | All fetched samples have on-chain metadata |
| info | Use `extraction.strategy: root_flat_keys` or per-key `direct_path` |

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
| 1 | Traits | Traits at metadata root, not under attributes object | C |
| 2 | Socials | No social fields on asset metadata | A |
| 3 | Links | No website/external links on asset metadata | A |
| 4 | License | No license metadata on asset | A |
| 5 | Royalties | No royalty metadata on asset | A |

---

## Scoring

```
parse_success_score: 85
trait_mapping_confidence: high
media_mapping_confidence: high
social_mapping_confidence: high
schema_fit: fits_with_notes
```

---

## Outputs

| Artifact | Path |
|----------|------|
| Raw samples | `research/raw-samples/cabins-ape-society/` |
| Audit report | `research/audits/cabins-ape-society.audit.md` |
| Generated definition | `registry/collections/cabins-ape-society.json` (placeholder only; not finalized) |
| Detailed finding | `research/findings/cabins-ape-society.md` |

---

## Notes

Detailed analysis: `research/findings/cabins-ape-society.md`. No schema, parser, or final definition changes in this pass.
