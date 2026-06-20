# Collection Audit: Genesis Collector

Per-collection audit output for schema validation against real Cardano NFT collections.

---

## Audit metadata

| Field | Value |
|-------|-------|
| `collection_id` | `genesis-collector` |
| `collection_name` | Genesis Collector |
| `audit_phase` | 3A |
| `auditor` | Phase 3A metadata discovery (automated + review) |
| `audit_date` | 2026-06-09 |
| `audit_status` | complete |

## Input provided

### Policy IDs

```
8e0556c569082f195b406737647765ed6b05d27dcb2c65319b7ce391
```

### Sample assets

| Label | Asset unit | Notes |
|-------|------------|-------|
| asset-001 | `8e0556c569082f195b406737647765ed6b05d27dcb2c65319b7ce39154434331303334` | Blockfrost raw |
| asset-002 | `8e0556c569082f195b406737647765ed6b05d27dcb2c65319b7ce39154434335303436` | Blockfrost raw |
| asset-003 | `8e0556c569082f195b406737647765ed6b05d27dcb2c65319b7ce39154434339303339` | Blockfrost raw |
| asset-004 | `8e0556c569082f195b406737647765ed6b05d27dcb2c65319b7ce39154434335383634` | Blockfrost raw |
| asset-005 | `8e0556c569082f195b406737647765ed6b05d27dcb2c65319b7ce39154434332363937` | Blockfrost raw |
| asset-006 | `8e0556c569082f195b406737647765ed6b05d27dcb2c65319b7ce39154434336323530` | Blockfrost raw |
| asset-007 | `8e0556c569082f195b406737647765ed6b05d27dcb2c65319b7ce39154434337363934` | Blockfrost raw |
| asset-008 | `8e0556c569082f195b406737647765ed6b05d27dcb2c65319b7ce39154434333313237` | Blockfrost raw |
| asset-009 | `8e0556c569082f195b406737647765ed6b05d27dcb2c65319b7ce391544343333036` | Blockfrost raw |
| asset-010 | `8e0556c569082f195b406737647765ed6b05d27dcb2c65319b7ce39154434335303433` | Blockfrost raw |

Raw samples directory: `research/raw-samples/genesis-collector/`

Files: `asset-001.json` … `asset-010.json` (Blockfrost raw, unmodified)

### Known problems (optional)

Phase 3A Top-100 include_now (TapTools rank 72). Type: event. Discovery only — no final definition in this pass.

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
| Image | `$.image` | on-chain | `image` string; `files[]` multi-media |
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
| Base | `$.attributes.Base` | string | none | no |
| Eyes | `$.attributes.Eyes` | string | none | no |
| Head | `$.attributes.Head` | string | none | no |
| Mouth | `$.attributes.Mouth` | string | none | no |
| Outfit | `$.attributes.Outfit` | string | none | no |
| Species | `$.attributes.Species` | string | none | no |
| Accessory | `$.attributes.Accessory` | string | none | no |
| Background | `$.attributes.Background` | string | none | no |
| Drawn Weapon | `$.attributes.Drawn Weapon` | string | none | no |
| Sheathed Weapon | `$.attributes.Sheathed Weapon` | string | none | no |

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
| Raw samples | `research/raw-samples/genesis-collector/` |
| Audit report | `research/audits/genesis-collector.audit.md` |
| Generated definition | `registry/collections/genesis-collector.json` (prepare-phase placeholder only — **not finalized**) |
| Detailed finding | `research/findings/genesis-collector.md` |

---

## Notes

Detailed analysis: `research/findings/genesis-collector.md`. No schema, parser, or **final** definition changes in this pass.
