# Collection Audit: OREMOB CASES by ENCASE.ART

Per-collection audit output for schema validation against real Cardano NFT collections.

---

## Audit metadata

| Field | Value |
|-------|-------|
| `collection_id` | `oremob-cases-encase-art` |
| `collection_name` | OREMOB CASES by ENCASE.ART |
| `audit_phase` | 2 |
| `auditor` | Phase 2 metadata discovery (automated + review) |
| `audit_date` | 2026-06-08 |
| `audit_status` | complete |

## Input provided

### Policy IDs

```
9e6b0cf53e26c14f03eaafb45072c2800ba053b7ffa319fa29d42f5c
```

### Sample assets

| Label | Asset unit | Notes |
|-------|------------|-------|
| asset-001 | `9e6b0cf53e26c14f03eaafb45072c2800ba053b7ffa319fa29d42f5c464c4f4154455220434c454152202332373437` | Blockfrost raw |
| asset-002 | `9e6b0cf53e26c14f03eaafb45072c2800ba053b7ffa319fa29d42f5c424f4c545a20415343454e44414e43452023303638` | Blockfrost raw |
| asset-003 | `9e6b0cf53e26c14f03eaafb45072c2800ba053b7ffa319fa29d42f5c464c4f4154455220434c454152202331343030` | Blockfrost raw |
| asset-004 | `9e6b0cf53e26c14f03eaafb45072c2800ba053b7ffa319fa29d42f5c464c4f4154455220434c454152202331313733` | Blockfrost raw |
| asset-005 | `9e6b0cf53e26c14f03eaafb45072c2800ba053b7ffa319fa29d42f5c464c4f4154455220434c454152202333343436` | Blockfrost raw |
| asset-006 | `9e6b0cf53e26c14f03eaafb45072c2800ba053b7ffa319fa29d42f5c464c4f4154455220434c454152202330363936` | Blockfrost raw |
| asset-007 | `9e6b0cf53e26c14f03eaafb45072c2800ba053b7ffa319fa29d42f5c534c4545504552205245442023303130` | Blockfrost raw |
| asset-008 | `9e6b0cf53e26c14f03eaafb45072c2800ba053b7ffa319fa29d42f5c53554d49524520424c55455320233232` | Blockfrost raw |
| asset-009 | `9e6b0cf53e26c14f03eaafb45072c2800ba053b7ffa319fa29d42f5c464c4f415445522053554e5345542023303734` | Blockfrost raw |
| asset-010 | `9e6b0cf53e26c14f03eaafb45072c2800ba053b7ffa319fa29d42f5c464c4f41544552205245442053545245414d2023323937` | Blockfrost raw |

Raw samples directory: `research/raw-samples/oremob-cases-encase-art/`

Files: `asset-001.json` … `asset-010.json` (Blockfrost raw, unmodified)

### Known problems (optional)

Phase 2 multi-policy: nested case/airdrop policy in OREMOB ecosystem; tests component inventory metadata.

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
| Mob | `$.Mob` | string | none | no |
| Rank | `$.Rank` | string | none | no |
| Frame | `$.Frame` | string | none | no |
| Level | `$.Level` | string | none | no |
| Gemstone | `$.Gemstone` | string | none | no |
| Core Essence | `$.Core Essence` | string | none | no |
| Manufacturer | `$.Manufacturer` | string | none | no |
| Rarity Score | `$.Rarity Score` | string | none | no |
| Amyg Symbiosis | `$.Amyg Symbiosis` | string | none | no |
| Graft Affinity | `$.Graft Affinity` | string | none | no |
| Rarity Description | `$.Rarity Description` | string | none | no |
| Signature Components | `$.Signature Components` | string | none | no |

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
| Raw samples | `research/raw-samples/oremob-cases-encase-art/` |
| Audit report | `research/audits/oremob-cases-encase-art.audit.md` |
| Generated definition | `registry/collections/oremob-cases-encase-art.json` (placeholder only; not finalized) |
| Detailed finding | `research/findings/oremob-cases-encase-art.md` |

---

## Notes

Detailed analysis: `research/findings/oremob-cases-encase-art.md`. No schema, parser, or final definition changes in this pass.
