# Collection Audit: Smart Places

Per-collection audit output for schema validation against real Cardano NFT collections.

---

## Audit metadata

| Field | Value |
|-------|-------|
| `collection_id` | `smart-places` |
| `collection_name` | Smart Places |
| `audit_phase` | 2 |
| `auditor` | Phase 2 metadata discovery (automated + review) |
| `audit_date` | 2026-06-08 |
| `audit_status` | complete |

## Input provided

### Policy IDs

```
64036a8c21866b47d4597657151e1490a7c225caef4715b37b9eca38
```

### Sample assets

| Label | Asset unit | Notes |
|-------|------------|-------|
| asset-001 | `64036a8c21866b47d4597657151e1490a7c225caef4715b37b9eca3830373634` | Blockfrost raw |
| asset-002 | `64036a8c21866b47d4597657151e1490a7c225caef4715b37b9eca3830373333` | Blockfrost raw |
| asset-003 | `64036a8c21866b47d4597657151e1490a7c225caef4715b37b9eca3831333334` | Blockfrost raw |
| asset-004 | `64036a8c21866b47d4597657151e1490a7c225caef4715b37b9eca3831353932` | Blockfrost raw |
| asset-005 | `64036a8c21866b47d4597657151e1490a7c225caef4715b37b9eca3831373334` | Blockfrost raw |
| asset-006 | `64036a8c21866b47d4597657151e1490a7c225caef4715b37b9eca3831393135` | Blockfrost raw |
| asset-007 | `64036a8c21866b47d4597657151e1490a7c225caef4715b37b9eca3831393739` | Blockfrost raw |
| asset-008 | `64036a8c21866b47d4597657151e1490a7c225caef4715b37b9eca3832303533` | Blockfrost raw |
| asset-009 | `64036a8c21866b47d4597657151e1490a7c225caef4715b37b9eca3832323933` | Blockfrost raw |
| asset-010 | `64036a8c21866b47d4597657151e1490a7c225caef4715b37b9eca3832343031` | Blockfrost raw |

Raw samples directory: `research/raw-samples/smart-places/`

Files: `asset-001.json` … `asset-010.json` (Blockfrost raw, unmodified)

### Known problems (optional)

Phase 2 art-first collection; tests generative/art metadata layouts without gaming or land parcel conventions.

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
| Image | `$.image` | on-chain | `image` string; `files[]` multi-media; mediaType: image/png |
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
| lat | `$.lat` | string | none | no |
| lng | `$.lng` | string | none | no |
| hexId | `$.hexId` | string | none | no |
| place | `$.place` | string | none | no |
| country | `$.country` | string | none | no |
| publisher | `$.publisher` | string | none | no |

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
| website | url | found |
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
| 2 | Socials | No social fields on asset metadata | A |
| 3 | License | No license metadata on asset | A |
| 4 | Royalties | No royalty metadata on asset | A |

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
| Raw samples | `research/raw-samples/smart-places/` |
| Audit report | `research/audits/smart-places.audit.md` |
| Generated definition | `registry/collections/smart-places.json` (placeholder only; not finalized) |
| Detailed finding | `research/findings/smart-places.md` |

---

## Notes

Detailed analysis: `research/findings/smart-places.md`. No schema, parser, or final definition changes in this pass.
