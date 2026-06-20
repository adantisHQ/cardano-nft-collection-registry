# Collection Audit: OREMOB

Per-collection audit output for schema validation against real Cardano NFT collections.

---

## Audit metadata

| Field | Value |
|-------|-------|
| `collection_id` | `oremob` |
| `collection_name` | OREMOB |
| `audit_phase` | 2 |
| `auditor` | Phase 2 metadata discovery (automated + review) |
| `audit_date` | 2026-06-08 |
| `audit_status` | complete |

## Input provided

### Policy IDs

```
062b1da3d344c1e6208ef908b2d308201e7ff6bcfddf0f606249817f
```

### Sample assets

| Label | Asset unit | Notes |
|-------|------------|-------|
| asset-001 | `062b1da3d344c1e6208ef908b2d308201e7ff6bcfddf0f606249817f4f52454d4f4231353034` | Blockfrost raw |
| asset-002 | `062b1da3d344c1e6208ef908b2d308201e7ff6bcfddf0f606249817f4f52454d4f4232313533` | Blockfrost raw |
| asset-003 | `062b1da3d344c1e6208ef908b2d308201e7ff6bcfddf0f606249817f4f52454d4f4231323730` | Blockfrost raw |
| asset-004 | `062b1da3d344c1e6208ef908b2d308201e7ff6bcfddf0f606249817f4f52454d4f4230363837` | Blockfrost raw |
| asset-005 | `062b1da3d344c1e6208ef908b2d308201e7ff6bcfddf0f606249817f4f52454d4f4230393135` | Blockfrost raw |
| asset-006 | `062b1da3d344c1e6208ef908b2d308201e7ff6bcfddf0f606249817f4f52454d4f4230363930` | Blockfrost raw |
| asset-007 | `062b1da3d344c1e6208ef908b2d308201e7ff6bcfddf0f606249817f4f52454d4f4232303733` | Blockfrost raw |
| asset-008 | `062b1da3d344c1e6208ef908b2d308201e7ff6bcfddf0f606249817f4f52454d4f4232393137` | Blockfrost raw |
| asset-009 | `062b1da3d344c1e6208ef908b2d308201e7ff6bcfddf0f606249817f4f52454d4f4232333930` | Blockfrost raw |
| asset-010 | `062b1da3d344c1e6208ef908b2d308201e7ff6bcfddf0f606249817f4f52454d4f4230373736` | Blockfrost raw |

Raw samples directory: `research/raw-samples/oremob/`

Files: `asset-001.json` … `asset-010.json` (Blockfrost raw, unmodified)

### Known problems (optional)

Phase 2 gaming mech collection; tests game-asset trait grids and media distinct from Phase 1 DEADPXLZ HTML pattern.

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
| EAR | `$.EAR` | string | none | no |
| MOB | `$.MOB` | string | none | no |
| BACK | `$.BACK` | string | none | no |
| BODY | `$.BODY` | string | none | no |
| EYES | `$.EYES` | string | none | no |
| NECK | `$.NECK` | string | none | no |
| NOSE | `$.NOSE` | string | none | no |
| RANK | `$.RANK` | string | none | no |
| MASKS | `$.MASKS` | string | none | no |
| EYEWEAR | `$.EYEWEAR` | string | none | no |
| EYEBROWS | `$.EYEBROWS` | string | none | no |
| HEADWEAR | `$.HEADWEAR` | string | none | no |
| AUTOGRAPH | `$.AUTOGRAPH` | string | none | no |
| HAIRSTYLE | `$.HAIRSTYLE` | string | none | no |
| BACKGROUND | `$.BACKGROUND` | string | none | no |

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
| Raw samples | `research/raw-samples/oremob/` |
| Audit report | `research/audits/oremob.audit.md` |
| Generated definition | `registry/collections/oremob.json` (placeholder only; not finalized) |
| Detailed finding | `research/findings/oremob.md` |

---

## Notes

Detailed analysis: `research/findings/oremob.md`. No schema, parser, or final definition changes in this pass.
