# Collection Audit: Cardano Warriors

Per-collection audit output for schema validation against real Cardano NFT collections.

---

## Audit metadata

| Field | Value |
|-------|-------|
| `collection_id` | `cardano-warriors` |
| `collection_name` | Cardano Warriors |
| `audit_phase` | 3A |
| `auditor` | Phase 3A metadata discovery (automated + review) |
| `audit_date` | 2026-06-09 |
| `audit_status` | complete |

## Input provided

### Policy IDs

```
8f80ebfaf62a8c33ae2adf047572604c74db8bc1daba2b43f9a65635
```

### Sample assets

| Label | Asset unit | Notes |
|-------|------------|-------|
| asset-001 | `8f80ebfaf62a8c33ae2adf047572604c74db8bc1daba2b43f9a6563543617264616e6f57617272696f7238303131` | Blockfrost raw |
| asset-002 | `8f80ebfaf62a8c33ae2adf047572604c74db8bc1daba2b43f9a6563543617264616e6f57617272696f7239363432` | Blockfrost raw |
| asset-003 | `8f80ebfaf62a8c33ae2adf047572604c74db8bc1daba2b43f9a6563543617264616e6f57617272696f7237323637` | Blockfrost raw |
| asset-004 | `8f80ebfaf62a8c33ae2adf047572604c74db8bc1daba2b43f9a6563543617264616e6f57617272696f7236343831` | Blockfrost raw |
| asset-005 | `8f80ebfaf62a8c33ae2adf047572604c74db8bc1daba2b43f9a6563543617264616e6f57617272696f7234393939` | Blockfrost raw |
| asset-006 | `8f80ebfaf62a8c33ae2adf047572604c74db8bc1daba2b43f9a6563543617264616e6f57617272696f7238353036` | Blockfrost raw |
| asset-007 | `8f80ebfaf62a8c33ae2adf047572604c74db8bc1daba2b43f9a6563543617264616e6f57617272696f7237333037` | Blockfrost raw |
| asset-008 | `8f80ebfaf62a8c33ae2adf047572604c74db8bc1daba2b43f9a6563543617264616e6f57617272696f7233373439` | Blockfrost raw |
| asset-009 | `8f80ebfaf62a8c33ae2adf047572604c74db8bc1daba2b43f9a6563543617264616e6f57617272696f7232303535` | Blockfrost raw |
| asset-010 | `8f80ebfaf62a8c33ae2adf047572604c74db8bc1daba2b43f9a6563543617264616e6f57617272696f7232373633` | Blockfrost raw |

Raw samples directory: `research/raw-samples/cardano-warriors/`

Files: `asset-001.json` … `asset-010.json` (Blockfrost raw, unmodified)

### Known problems (optional)

Phase 3A Top-100 include_now (TapTools rank 75). Type: gaming. Discovery only — no final definition in this pass.

---

## Metadata analysis

| Field | Finding |
|-------|---------|
| Metadata standard | CIP25v1 |
| Metadata root | `onchain_metadata` |
| Asset name encoding | hex (Blockfrost `asset_name` field) |
| CIP-25 layout notes | `traits` string array with colon-separated labels (e.g. `Background: Purple`) |
| CIP-68 layout notes | Not observed in samples |
| Custom conventions | items, traits |

---

## Media analysis

| Field | Path or value | Source | Notes |
|-------|---------------|--------|-------|
| Image | `$.image` | on-chain | `image` string |
| Animation | — |  | |
| Files / multi-media | — |  | |
| Thumbnail | — | | |
| Collection logo | — | registry-only | |
| Collection banner | — | registry-only | |

---

## Trait analysis

| Field | Finding |
|-------|---------|
| Trait grouping style | traits_string_array |
| Primary trait root path | `traits` string array with colon-separated labels (e.g. `Background: Purple`) |
| Canonical trait names | See inventory |
| Value types observed | string, number, array (collection-dependent) |
| Normalization requirements | Mostly none |
| Dynamic traits | no |

### Trait path inventory

| Canonical trait | Source path(s) | Value type | Normalization | Required |
|-----------------|----------------|------------|---------------|----------|
| Green Eyes | `$.Green Eyes` | string | none | no |
| Angry | `$.Angry` | string | none | no |
| White Skin | `$.White Skin` | string | none | no |
| Black Hair | `$.Black Hair` | string | none | no |

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
| info | Parse `traits[]` strings by splitting on first colon; no dedicated strategy yet (single-collection pattern) |

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
| 1 | Traits | traits uses string array with embedded key:value labels, not attributes object | E |
| 2 | Socials | No social fields on asset metadata | A |
| 3 | Links | No website/external links on asset metadata | A |
| 4 | License | No license metadata on asset | A |
| 5 | Royalties | No royalty metadata on asset | A |
| 6 | Custom | Collection-specific fields: items, traits | C |

---

## Scoring

```
parse_success_score: 85
trait_mapping_confidence: low
media_mapping_confidence: high
social_mapping_confidence: high
schema_fit: fits_with_notes
```

---

## Outputs

| Artifact | Path |
|----------|------|
| Raw samples | `research/raw-samples/cardano-warriors/` |
| Audit report | `research/audits/cardano-warriors.audit.md` |
| Generated definition | `registry/collections/cardano-warriors.json` (prepare-phase placeholder only — **not finalized**) |
| Detailed finding | `research/findings/cardano-warriors.md` |

---

## Notes

Detailed analysis: `research/findings/cardano-warriors.md`. No schema, parser, or **final** definition changes in this pass.
