# Collection Audit: Yummi Universe - Naru

Per-collection audit output for schema validation against real Cardano NFT collections.

---

## Audit metadata

| Field | Value |
|-------|-------|
| `collection_id` | `yummi-universe-naru` |
| `collection_name` | Yummi Universe - Naru |
| `audit_phase` | 2 |
| `auditor` | Phase 2 metadata discovery (automated + review) |
| `audit_date` | 2026-06-08 |
| `audit_status` | complete |

## Input provided

### Policy IDs

```
b1814c6d3b0f7a42c9ee990c06c9d504a42bb22bf0e34e7908ae21b2
```

### Sample assets

| Label | Asset unit | Notes |
|-------|------------|-------|
| asset-001 | `b1814c6d3b0f7a42c9ee990c06c9d504a42bb22bf0e34e7908ae21b24e6172753031313536` | Blockfrost raw |
| asset-002 | `b1814c6d3b0f7a42c9ee990c06c9d504a42bb22bf0e34e7908ae21b24e6172753032333633` | Blockfrost raw |
| asset-003 | `b1814c6d3b0f7a42c9ee990c06c9d504a42bb22bf0e34e7908ae21b24e6172753039333230` | Blockfrost raw |
| asset-004 | `b1814c6d3b0f7a42c9ee990c06c9d504a42bb22bf0e34e7908ae21b24e6172753034313830` | Blockfrost raw |
| asset-005 | `b1814c6d3b0f7a42c9ee990c06c9d504a42bb22bf0e34e7908ae21b24e6172753030363139` | Blockfrost raw |
| asset-006 | `b1814c6d3b0f7a42c9ee990c06c9d504a42bb22bf0e34e7908ae21b24e6172753032383234` | Blockfrost raw |
| asset-007 | `b1814c6d3b0f7a42c9ee990c06c9d504a42bb22bf0e34e7908ae21b24e6172753030313838` | Blockfrost raw |
| asset-008 | `b1814c6d3b0f7a42c9ee990c06c9d504a42bb22bf0e34e7908ae21b24e6172753035383234` | Blockfrost raw |
| asset-009 | `b1814c6d3b0f7a42c9ee990c06c9d504a42bb22bf0e34e7908ae21b24e6172753038383938` | Blockfrost raw |
| asset-010 | `b1814c6d3b0f7a42c9ee990c06c9d504a42bb22bf0e34e7908ae21b24e6172753030363330` | Blockfrost raw |

Raw samples directory: `research/raw-samples/yummi-universe-naru/`

Files: `asset-001.json` … `asset-010.json` (Blockfrost raw, unmodified)

### Known problems (optional)

Phase 2 multi-policy ecosystem: seasonal character line (sibling policies for Spoopy/Winter/Spring/Summer Naru); tests repeated layout across related policies.

---

## Metadata analysis

| Field | Finding |
|-------|---------|
| Metadata standard | CIP25v1 |
| Metadata root | `onchain_metadata` |
| Asset name encoding | hex (Blockfrost `asset_name` field) |
| CIP-25 layout notes | `attributes` object map |
| CIP-68 layout notes | Not observed in samples |
| Custom conventions | attributes |

---

## Media analysis

| Field | Path or value | Source | Notes |
|-------|---------------|--------|-------|
| Image | `$.image` | on-chain | `image` string; mediaType: image/png |
| Animation | — |  | |
| Files / multi-media | — |  | |
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
| Body | `$.attributes.Body` | string | none | no |
| Face | `$.attributes.Face` | string | none | no |
| Headwear | `$.attributes.Headwear` | string | none | no |
| Background | `$.attributes.Background` | string | none | no |

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
| License text | copyright | found |
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
| 2 | Links | No website/external links on asset metadata | A |
| 3 | License | License/terms present in non-standard location | C |
| 4 | Royalties | No royalty metadata on asset | A |
| 5 | Custom | Collection-specific fields: attributes | C |

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
| Raw samples | `research/raw-samples/yummi-universe-naru/` |
| Audit report | `research/audits/yummi-universe-naru.audit.md` |
| Generated definition | `registry/collections/yummi-universe-naru.json` (placeholder only; not finalized) |
| Detailed finding | `research/findings/yummi-universe-naru.md` |

---

## Notes

Detailed analysis: `research/findings/yummi-universe-naru.md`. No schema, parser, or final definition changes in this pass.
