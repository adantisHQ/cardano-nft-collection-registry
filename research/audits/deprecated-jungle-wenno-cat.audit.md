# Collection Audit: [DEPRECATED] Jungle Wenno Cat

Per-collection audit output for schema validation against real Cardano NFT collections.

---

## Audit metadata

| Field | Value |
|-------|-------|
| `collection_id` | `deprecated-jungle-wenno-cat` |
| `collection_name` | [DEPRECATED] Jungle Wenno Cat |
| `audit_phase` | 2 |
| `auditor` | Phase 2 metadata discovery (automated + review) |
| `audit_date` | 2026-06-08 |
| `audit_status` | complete |

## Input provided

### Policy IDs

```
3ca291585bbbd1deafab0495f8a7fda4753fbeae96c550492bcfd760
```

### Sample assets

| Label | Asset unit | Notes |
|-------|------------|-------|
| asset-001 | `3ca291585bbbd1deafab0495f8a7fda4753fbeae96c550492bcfd76057454e4e4f31303839` | Blockfrost raw |
| asset-002 | `3ca291585bbbd1deafab0495f8a7fda4753fbeae96c550492bcfd76057454e4e4f31323933` | Blockfrost raw |
| asset-003 | `3ca291585bbbd1deafab0495f8a7fda4753fbeae96c550492bcfd76057454e4e4f31333335` | Blockfrost raw |
| asset-004 | `3ca291585bbbd1deafab0495f8a7fda4753fbeae96c550492bcfd76057454e4e4f333036` | Blockfrost raw |
| asset-005 | `3ca291585bbbd1deafab0495f8a7fda4753fbeae96c550492bcfd76057454e4e4f313130` | Blockfrost raw |
| asset-006 | `3ca291585bbbd1deafab0495f8a7fda4753fbeae96c550492bcfd76057454e4e4f313033` | Blockfrost raw |
| asset-007 | `3ca291585bbbd1deafab0495f8a7fda4753fbeae96c550492bcfd76057454e4e4f333137` | Blockfrost raw |
| asset-008 | `3ca291585bbbd1deafab0495f8a7fda4753fbeae96c550492bcfd76057454e4e4f31323031` | Blockfrost raw |
| asset-009 | `3ca291585bbbd1deafab0495f8a7fda4753fbeae96c550492bcfd76057454e4e4f343630` | Blockfrost raw |
| asset-010 | `3ca291585bbbd1deafab0495f8a7fda4753fbeae96c550492bcfd76057454e4e4f31343438` | Blockfrost raw |

Raw samples directory: `research/raw-samples/deprecated-jungle-wenno-cat/`

Files: `asset-001.json` … `asset-010.json` (Blockfrost raw, unmodified)

### Known problems (optional)

Phase 2 controlled broken/partial metadata test: deprecated naming in TapTools; expect sparse or inconsistent on-chain fields (not an Unknown row).

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
| Image | `$.image[0]` | on-chain | `image` array |
| Animation | — |  | |
| Files / multi-media | — |  | |
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
| hats | `$.hats` | string | none | no |
| skin | `$.skin` | string | none | no |
| bottom | `$.bottom` | string | none | no |
| family | `$.family` | string | none | no |
| glasses | `$.glasses` | string | none | no |
| backgrounds | `$.backgrounds` | string | none | no |
| mysterious number | `$.mysterious number` | string | none | no |

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
| 2 | Media | image is array not string | C |
| 3 | Socials | No social fields on asset metadata | A |
| 4 | License | No license metadata on asset | A |
| 5 | Royalties | No royalty metadata on asset | A |

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
| Raw samples | `research/raw-samples/deprecated-jungle-wenno-cat/` |
| Audit report | `research/audits/deprecated-jungle-wenno-cat.audit.md` |
| Generated definition | `registry/collections/deprecated-jungle-wenno-cat.json` (placeholder only; not finalized) |
| Detailed finding | `research/findings/deprecated-jungle-wenno-cat.md` |

---

## Notes

Detailed analysis: `research/findings/deprecated-jungle-wenno-cat.md`. No schema, parser, or final definition changes in this pass.
