# Collection Audit: Cornucopias GTI Javelin 2022

Per-collection audit output for schema validation against real Cardano NFT collections.

---

## Audit metadata

| Field | Value |
|-------|-------|
| `collection_id` | `cornucopias-gti-javelin-2022` |
| `collection_name` | Cornucopias GTI Javelin 2022 |
| `audit_phase` | 2 |
| `auditor` | Phase 2 metadata discovery (automated + review) |
| `audit_date` | 2026-06-08 |
| `audit_status` | complete |

## Input provided

### Policy IDs

```
086849cd9f672e731e0d9590a2d28a6a690ffa2f73bae0e1970f0491
```

### Sample assets

| Label | Asset unit | Notes |
|-------|------------|-------|
| asset-001 | `086849cd9f672e731e0d9590a2d28a6a690ffa2f73bae0e1970f04914754494a3030313236` | Blockfrost raw |
| asset-002 | `086849cd9f672e731e0d9590a2d28a6a690ffa2f73bae0e1970f04914754494a3030313431` | Blockfrost raw |
| asset-003 | `086849cd9f672e731e0d9590a2d28a6a690ffa2f73bae0e1970f04914754494a3132333835` | Blockfrost raw |
| asset-004 | `086849cd9f672e731e0d9590a2d28a6a690ffa2f73bae0e1970f04914754494a3132333133` | Blockfrost raw |
| asset-005 | `086849cd9f672e731e0d9590a2d28a6a690ffa2f73bae0e1970f04914754494a3132333437` | Blockfrost raw |
| asset-006 | `086849cd9f672e731e0d9590a2d28a6a690ffa2f73bae0e1970f04914754494a3132333832` | Blockfrost raw |
| asset-007 | `086849cd9f672e731e0d9590a2d28a6a690ffa2f73bae0e1970f04914754494a3132333130` | Blockfrost raw |
| asset-008 | `086849cd9f672e731e0d9590a2d28a6a690ffa2f73bae0e1970f04914754494a3132323635` | Blockfrost raw |
| asset-009 | `086849cd9f672e731e0d9590a2d28a6a690ffa2f73bae0e1970f04914754494a3132323534` | Blockfrost raw |
| asset-010 | `086849cd9f672e731e0d9590a2d28a6a690ffa2f73bae0e1970f04914754494a3132323134` | Blockfrost raw |

Raw samples directory: `research/raw-samples/cornucopias-gti-javelin-2022/`

Files: `asset-001.json` … `asset-010.json` (Blockfrost raw, unmodified)

### Known problems (optional)

Phase 2 Cornucopias ecosystem (vehicle policy, not Phase 1 land zones); tests shared brand metadata across game asset types.

---

## Metadata analysis

| Field | Finding |
|-------|---------|
| Metadata standard | CIP25v1 |
| Metadata root | `onchain_metadata` |
| Asset name encoding | hex (Blockfrost `asset_name` field) |
| CIP-25 layout notes | `attributes` object map |
| CIP-68 layout notes | Not observed in samples |
| Custom conventions | media, attributes |

---

## Media analysis

| Field | Path or value | Source | Notes |
|-------|---------------|--------|-------|
| Image | `$.image` | on-chain | `image` string; `files[]` multi-media; mediaType: image/png; nested `media` object |
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
| Trim | `$.attributes.Trim` | string | none | no |
| Year | `$.attributes.Year` | string | none | no |
| Color | `$.attributes.Color` | string | none | no |
| Model | `$.attributes.Model` | string | none | no |
| Paint | `$.attributes.Paint` | string | none | no |
| Seats | `$.attributes.Seats` | string | none | no |
| Interior | `$.attributes.Interior` | string | none | no |
| Derivative | `$.attributes.Derivative` | string | none | no |
| Manufacturer | `$.attributes.Manufacturer` | string | none | no |

---

## Socials

| Platform | Location or explicit value | Status |
|----------|----------------------------|--------|
| discord | `$.Discord` or nested | found |

---

## Links

| Link type | Location or explicit value | Status |
|-----------|----------------------------|--------|
| website | Website, Link Tree | found |
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
| 1 | License | No license metadata on asset | A |
| 2 | Royalties | No royalty metadata on asset | A |
| 3 | Custom | Collection-specific fields: media, attributes | C |

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
| Raw samples | `research/raw-samples/cornucopias-gti-javelin-2022/` |
| Audit report | `research/audits/cornucopias-gti-javelin-2022.audit.md` |
| Generated definition | `registry/collections/cornucopias-gti-javelin-2022.json` (placeholder only; not finalized) |
| Detailed finding | `research/findings/cornucopias-gti-javelin-2022.md` |

---

## Notes

Detailed analysis: `research/findings/cornucopias-gti-javelin-2022.md`. No schema, parser, or final definition changes in this pass.
