# Collection Audit: EquineNFT Pioneer Horses

Per-collection audit output for schema validation against real Cardano NFT collections.

---

## Audit metadata

| Field | Value |
|-------|-------|
| `collection_id` | `equinenft-pioneer-horses` |
| `collection_name` | EquineNFT Pioneer Horses |
| `audit_phase` | 3A |
| `auditor` | Phase 3A metadata discovery (automated + review) |
| `audit_date` | 2026-06-09 |
| `audit_status` | complete |

## Input provided

### Policy IDs

```
30ed3d95db1d6bb2c12fc5228a2986eab4553f192a12a4607780e15b
```

### Sample assets

| Label | Asset unit | Notes |
|-------|------------|-------|
| asset-001 | `30ed3d95db1d6bb2c12fc5228a2986eab4553f192a12a4607780e15b457175696e6550696f6e656572486f7273653030303030` | Blockfrost raw |
| asset-002 | `30ed3d95db1d6bb2c12fc5228a2986eab4553f192a12a4607780e15b457175696e6550696f6e656572486f7273653030303031` | Blockfrost raw |
| asset-003 | `30ed3d95db1d6bb2c12fc5228a2986eab4553f192a12a4607780e15b457175696e6550696f6e656572486f7273653030303137` | Blockfrost raw |
| asset-004 | `30ed3d95db1d6bb2c12fc5228a2986eab4553f192a12a4607780e15b457175696e6550696f6e656572486f7273653030303335` | Blockfrost raw |
| asset-005 | `30ed3d95db1d6bb2c12fc5228a2986eab4553f192a12a4607780e15b457175696e6550696f6e656572486f7273653030303534` | Blockfrost raw |
| asset-006 | `30ed3d95db1d6bb2c12fc5228a2986eab4553f192a12a4607780e15b457175696e6550696f6e656572486f7273653030303732` | Blockfrost raw |
| asset-007 | `30ed3d95db1d6bb2c12fc5228a2986eab4553f192a12a4607780e15b457175696e6550696f6e656572486f7273653030303931` | Blockfrost raw |
| asset-008 | `30ed3d95db1d6bb2c12fc5228a2986eab4553f192a12a4607780e15b457175696e6550696f6e656572486f7273653030313039` | Blockfrost raw |
| asset-009 | `30ed3d95db1d6bb2c12fc5228a2986eab4553f192a12a4607780e15b457175696e6550696f6e656572486f7273653030313238` | Blockfrost raw |
| asset-010 | `30ed3d95db1d6bb2c12fc5228a2986eab4553f192a12a4607780e15b457175696e6550696f6e656572486f7273653030313436` | Blockfrost raw |

Raw samples directory: `research/raw-samples/equinenft-pioneer-horses/`

Files: `asset-001.json` … `asset-010.json` (Blockfrost raw, unmodified)

### Known problems (optional)

Phase 3A Top-100 include_now (TapTools rank 44). Type: gaming. Discovery only — no final definition in this pass.

---

## Metadata analysis

| Field | Finding |
|-------|---------|
| Metadata standard | CIP25v1 |
| Metadata root | `onchain_metadata` |
| Asset name encoding | hex (Blockfrost `asset_name` field) |
| CIP-25 layout notes | Flat trait-like keys at metadata root |
| CIP-68 layout notes | Not observed in samples |
| Custom conventions | ~DNA, ~Links, Markings |

---

## Media analysis

| Field | Path or value | Source | Notes |
|-------|---------------|--------|-------|
| Image | `$.image` | on-chain | `image` string; `files[]` multi-media; mediaType: image/jpeg |
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
| Age | `$.Age` | string | none | no |
| Color | `$.Color` | string | none | no |
| speed | `$.speed` | string | none | no |
| Gender | `$.Gender` | string | none | no |
| agility | `$.agility` | string | none | no |
| stamina | `$.stamina` | string | none | no |
| endurance | `$.endurance` | string | none | no |
| Collection | `$.Collection` | string | none | no |
| acceleration | `$.acceleration` | string | none | no |

---

## Socials

| Platform | Location or explicit value | Status |
|----------|----------------------------|--------|
| discord | `$.Discord` or nested | found |
| twitter | `$.Twitter` or nested | found |

---

## Links

| Link type | Location or explicit value | Status |
|-----------|----------------------------|--------|
| website | Website | found |
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
| 2 | License | No license metadata on asset | A |
| 3 | Royalties | No royalty metadata on asset | A |
| 4 | Custom | Collection-specific fields: ~DNA, ~Links, Markings | C |

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
| Raw samples | `research/raw-samples/equinenft-pioneer-horses/` |
| Audit report | `research/audits/equinenft-pioneer-horses.audit.md` |
| Generated definition | `registry/collections/equinenft-pioneer-horses.json` (prepare-phase placeholder only — **not finalized**) |
| Detailed finding | `research/findings/equinenft-pioneer-horses.md` |

---

## Notes

Detailed analysis: `research/findings/equinenft-pioneer-horses.md`. No schema, parser, or **final** definition changes in this pass.
