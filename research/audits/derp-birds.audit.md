# Collection Audit: Derp Birds

Per-collection audit output for schema validation against real Cardano NFT collections.

---

## Audit metadata

| Field | Value |
|-------|-------|
| `collection_id` | `derp-birds` |
| `collection_name` | Derp Birds |
| `audit_phase` | 3A |
| `auditor` | Phase 3A metadata discovery (automated + review) |
| `audit_date` | 2026-06-09 |
| `audit_status` | complete |

## Input provided

### Policy IDs

```
e74862a09d17a9cb03174a6bd5fa305b8684475c4c36021591c606e0
```

### Sample assets

| Label | Asset unit | Notes |
|-------|------------|-------|
| asset-001 | `e74862a09d17a9cb03174a6bd5fa305b8684475c4c36021591c606e044503037363736` | Blockfrost raw |
| asset-002 | `e74862a09d17a9cb03174a6bd5fa305b8684475c4c36021591c606e044503039323435` | Blockfrost raw |
| asset-003 | `e74862a09d17a9cb03174a6bd5fa305b8684475c4c36021591c606e044503033373731` | Blockfrost raw |
| asset-004 | `e74862a09d17a9cb03174a6bd5fa305b8684475c4c36021591c606e044503034343530` | Blockfrost raw |
| asset-005 | `e74862a09d17a9cb03174a6bd5fa305b8684475c4c36021591c606e044503039333139` | Blockfrost raw |
| asset-006 | `e74862a09d17a9cb03174a6bd5fa305b8684475c4c36021591c606e044503030383431` | Blockfrost raw |
| asset-007 | `e74862a09d17a9cb03174a6bd5fa305b8684475c4c36021591c606e044503030363137` | Blockfrost raw |
| asset-008 | `e74862a09d17a9cb03174a6bd5fa305b8684475c4c36021591c606e044503033373137` | Blockfrost raw |
| asset-009 | `e74862a09d17a9cb03174a6bd5fa305b8684475c4c36021591c606e044503035383631` | Blockfrost raw |
| asset-010 | `e74862a09d17a9cb03174a6bd5fa305b8684475c4c36021591c606e044503032313035` | Blockfrost raw |

Raw samples directory: `research/raw-samples/derp-birds/`

Files: `asset-001.json` … `asset-010.json` (Blockfrost raw, unmodified)

### Known problems (optional)

Phase 3A Top-100 include_now (TapTools rank 25). Type: pfp. Discovery only — no final definition in this pass.

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
| Trait grouping style | attributes_object |
| Primary trait root path | `attributes` object map |
| Canonical trait names | See inventory |
| Value types observed | string, number, array (collection-dependent) |
| Normalization requirements | Mostly none |
| Dynamic traits | no |

### Trait path inventory

| Canonical trait | Source path(s) | Value type | Normalization | Required |
|-----------------|----------------|------------|---------------|----------|
| Back | `$.attributes.Back` | string | none | no |
| Beak | `$.attributes.Beak` | string | none | no |
| Body | `$.attributes.Body` | string | none | no |
| Ears | `$.attributes.Ears` | string | none | no |
| Eyes | `$.attributes.Eyes` | string | none | no |
| Head | `$.attributes.Head` | string | none | no |
| Tail | `$.attributes.Tail` | string | none | no |
| Color | `$.attributes.Color` | string | none | no |
| Rarity | `$.attributes.Rarity` | string | none | no |
| Background | `$.attributes.Background` | string | none | no |
| Power Level | `$.attributes.Power Level` | string | none | no |
| Perfect Specimen | `$.attributes.Perfect Specimen` | string | none | no |

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
| 4 | Custom | Collection-specific fields: attributes | C |

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
| Raw samples | `research/raw-samples/derp-birds/` |
| Audit report | `research/audits/derp-birds.audit.md` |
| Generated definition | `registry/collections/derp-birds.json` (prepare-phase placeholder only — **not finalized**) |
| Detailed finding | `research/findings/derp-birds.md` |

---

## Notes

Detailed analysis: `research/findings/derp-birds.md`. No schema, parser, or **final** definition changes in this pass.
