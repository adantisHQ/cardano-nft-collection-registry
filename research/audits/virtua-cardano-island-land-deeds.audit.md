# Collection Audit: Virtua - Cardano Island Land Deeds

Per-collection audit output for schema validation against real Cardano NFT collections.

---

## Audit metadata

| Field | Value |
|-------|-------|
| `collection_id` | `virtua-cardano-island-land-deeds` |
| `collection_name` | Virtua - Cardano Island Land Deeds |
| `audit_phase` | 3A |
| `auditor` | Phase 3A metadata discovery (automated + review) |
| `audit_date` | 2026-06-09 |
| `audit_status` | complete |

## Input provided

### Policy IDs

```
347f991d4b306919e3e7b01f1cdececa06c2e493a21a0da0931d033b
```

### Sample assets

| Label | Asset unit | Notes |
|-------|------------|-------|
| asset-001 | `347f991d4b306919e3e7b01f1cdececa06c2e493a21a0da0931d033b3130393632` | Blockfrost raw |
| asset-002 | `347f991d4b306919e3e7b01f1cdececa06c2e493a21a0da0931d033b3131303131` | Blockfrost raw |
| asset-003 | `347f991d4b306919e3e7b01f1cdececa06c2e493a21a0da0931d033b39373838` | Blockfrost raw |
| asset-004 | `347f991d4b306919e3e7b01f1cdececa06c2e493a21a0da0931d033b39373533` | Blockfrost raw |
| asset-005 | `347f991d4b306919e3e7b01f1cdececa06c2e493a21a0da0931d033b34313032` | Blockfrost raw |
| asset-006 | `347f991d4b306919e3e7b01f1cdececa06c2e493a21a0da0931d033b39303739` | Blockfrost raw |
| asset-007 | `347f991d4b306919e3e7b01f1cdececa06c2e493a21a0da0931d033b34353331` | Blockfrost raw |
| asset-008 | `347f991d4b306919e3e7b01f1cdececa06c2e493a21a0da0931d033b3132363538` | Blockfrost raw |
| asset-009 | `347f991d4b306919e3e7b01f1cdececa06c2e493a21a0da0931d033b3132353634` | Blockfrost raw |
| asset-010 | `347f991d4b306919e3e7b01f1cdececa06c2e493a21a0da0931d033b34313235` | Blockfrost raw |

Raw samples directory: `research/raw-samples/virtua-cardano-island-land-deeds/`

Files: `asset-001.json` … `asset-010.json` (Blockfrost raw, unmodified)

### Known problems (optional)

Phase 3A Top-100 include_now (TapTools rank 61). Type: land. Discovery only — no final definition in this pass.

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
| Trait grouping style | attributes_object |
| Primary trait root path | `attributes` object map |
| Canonical trait names | See inventory |
| Value types observed | string, number, array (collection-dependent) |
| Normalization requirements | Mostly none |
| Dynamic traits | no |

### Trait path inventory

| Canonical trait | Source path(s) | Value type | Normalization | Required |
|-----------------|----------------|------------|---------------|----------|
| Size | `$.attributes.Size` | string | none | no |
| Rarity | `$.attributes.Rarity` | string | none | no |
| Geometry | `$.attributes.Geometry` | string | none | no |
| NPC Slots | `$.attributes.NPC Slots` | string | none | no |
| Resources | `$.attributes.Resources` | string | none | no |
| Robot Slots | `$.attributes.Robot Slots` | string | none | no |
| Summit Slots | `$.attributes.Summit Slots` | string | none | no |

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
| 3 | License | No license metadata on asset | A |
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
| Raw samples | `research/raw-samples/virtua-cardano-island-land-deeds/` |
| Audit report | `research/audits/virtua-cardano-island-land-deeds.audit.md` |
| Generated definition | `registry/collections/virtua-cardano-island-land-deeds.json` (prepare-phase placeholder only — **not finalized**) |
| Detailed finding | `research/findings/virtua-cardano-island-land-deeds.md` |

---

## Notes

Detailed analysis: `research/findings/virtua-cardano-island-land-deeds.md`. No schema, parser, or **final** definition changes in this pass.
