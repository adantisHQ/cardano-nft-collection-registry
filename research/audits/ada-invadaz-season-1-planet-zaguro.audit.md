# Collection Audit: ADA Invadaz Season 1 - Planet Zaguro

Per-collection audit output for schema validation against real Cardano NFT collections.

---

## Audit metadata

| Field | Value |
|-------|-------|
| `collection_id` | `ada-invadaz-season-1-planet-zaguro` |
| `collection_name` | ADA Invadaz Season 1 - Planet Zaguro |
| `audit_phase` | 3A |
| `auditor` | Phase 3A metadata discovery (automated + review) |
| `audit_date` | 2026-06-09 |
| `audit_status` | complete |

## Input provided

### Policy IDs

```
2d503a06893ced6641243f987403b2e094d41dc46153286c9f49b2e5
```

### Sample assets

| Label | Asset unit | Notes |
|-------|------------|-------|
| asset-001 | `2d503a06893ced6641243f987403b2e094d41dc46153286c9f49b2e5414441496e766164617a313231` | Blockfrost raw |
| asset-002 | `2d503a06893ced6641243f987403b2e094d41dc46153286c9f49b2e5414441496e766164617a31323136` | Blockfrost raw |
| asset-003 | `2d503a06893ced6641243f987403b2e094d41dc46153286c9f49b2e5414441496e766164617a32393733` | Blockfrost raw |
| asset-004 | `2d503a06893ced6641243f987403b2e094d41dc46153286c9f49b2e5414441496e766164617a32363131` | Blockfrost raw |
| asset-005 | `2d503a06893ced6641243f987403b2e094d41dc46153286c9f49b2e5414441496e766164617a343536` | Blockfrost raw |
| asset-006 | `2d503a06893ced6641243f987403b2e094d41dc46153286c9f49b2e5414441496e766164617a32333937` | Blockfrost raw |
| asset-007 | `2d503a06893ced6641243f987403b2e094d41dc46153286c9f49b2e5414441496e766164617a32373633` | Blockfrost raw |
| asset-008 | `2d503a06893ced6641243f987403b2e094d41dc46153286c9f49b2e5414441496e766164617a333233` | Blockfrost raw |
| asset-009 | `2d503a06893ced6641243f987403b2e094d41dc46153286c9f49b2e5414441496e766164617a32323135` | Blockfrost raw |
| asset-010 | `2d503a06893ced6641243f987403b2e094d41dc46153286c9f49b2e5414441496e766164617a32373035` | Blockfrost raw |

Raw samples directory: `research/raw-samples/ada-invadaz-season-1-planet-zaguro/`

Files: `asset-001.json` … `asset-010.json` (Blockfrost raw, unmodified)

### Known problems (optional)

Phase 3A Top-100 include_now (TapTools rank 60). Type: land. Discovery only — no final definition in this pass.

---

## Metadata analysis

| Field | Finding |
|-------|---------|
| Metadata standard | CIP25v1 |
| Metadata root | `onchain_metadata` |
| Asset name encoding | hex (Blockfrost `asset_name` field) |
| CIP-25 layout notes | Flat trait-like keys at metadata root |
| CIP-68 layout notes | Not observed in samples |
| Custom conventions | publisher |

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
| Trait grouping style | root_flat_keys |
| Primary trait root path | Flat trait-like keys at metadata root |
| Canonical trait names | See inventory |
| Value types observed | string, number, array (collection-dependent) |
| Normalization requirements | Mostly none |
| Dynamic traits | no |

### Trait path inventory

| Canonical trait | Source path(s) | Value type | Normalization | Required |
|-----------------|----------------|------------|---------------|----------|
| Eyes | `$.Eyes` | string | none | no |
| Face | `$.Face` | string | none | no |
| Head | `$.Head` | string | none | no |
| Skin | `$.Skin` | string | none | no |
| Armour | `$.Armour` | string | none | no |
| Weapon | `$.Weapon` | string | none | no |
| Insignia | `$.Insignia` | string | none | no |
| Background | `$.Background` | string | none | no |

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
| 6 | Custom | Collection-specific fields: publisher | C |

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
| Raw samples | `research/raw-samples/ada-invadaz-season-1-planet-zaguro/` |
| Audit report | `research/audits/ada-invadaz-season-1-planet-zaguro.audit.md` |
| Generated definition | `registry/collections/ada-invadaz-season-1-planet-zaguro.json` (prepare-phase placeholder only — **not finalized**) |
| Detailed finding | `research/findings/ada-invadaz-season-1-planet-zaguro.md` |

---

## Notes

Detailed analysis: `research/findings/ada-invadaz-season-1-planet-zaguro.md`. No schema, parser, or **final** definition changes in this pass.
