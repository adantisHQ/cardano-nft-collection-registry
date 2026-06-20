# Collection Audit: Snekkies

Per-collection audit output for schema validation against real Cardano NFT collections.

---

## Audit metadata

| Field | Value |
|-------|-------|
| `collection_id` | `snekkies` |
| `collection_name` | Snekkies |
| `audit_phase` | 3A |
| `auditor` | Phase 3A metadata discovery (automated + review) |
| `audit_date` | 2026-06-09 |
| `audit_status` | complete |

## Input provided

### Policy IDs

```
b558ea5ecfa2a6e9701dab150248e94104402f789c090426eb60eb60
```

### Sample assets

| Label | Asset unit | Notes |
|-------|------------|-------|
| asset-001 | `b558ea5ecfa2a6e9701dab150248e94104402f789c090426eb60eb60536e656b6b696531353031` | Blockfrost raw |
| asset-002 | `b558ea5ecfa2a6e9701dab150248e94104402f789c090426eb60eb60536e656b6b696532323131` | Blockfrost raw |
| asset-003 | `b558ea5ecfa2a6e9701dab150248e94104402f789c090426eb60eb60536e656b6b696533393137` | Blockfrost raw |
| asset-004 | `b558ea5ecfa2a6e9701dab150248e94104402f789c090426eb60eb60536e656b6b696531393735` | Blockfrost raw |
| asset-005 | `b558ea5ecfa2a6e9701dab150248e94104402f789c090426eb60eb60536e656b6b696533313134` | Blockfrost raw |
| asset-006 | `b558ea5ecfa2a6e9701dab150248e94104402f789c090426eb60eb60536e656b6b696534393034` | Blockfrost raw |
| asset-007 | `b558ea5ecfa2a6e9701dab150248e94104402f789c090426eb60eb60536e656b6b696532313738` | Blockfrost raw |
| asset-008 | `b558ea5ecfa2a6e9701dab150248e94104402f789c090426eb60eb60536e656b6b696536383439` | Blockfrost raw |
| asset-009 | `b558ea5ecfa2a6e9701dab150248e94104402f789c090426eb60eb60536e656b6b696531313935` | Blockfrost raw |
| asset-010 | `b558ea5ecfa2a6e9701dab150248e94104402f789c090426eb60eb60536e656b6b696536333630` | Blockfrost raw |

Raw samples directory: `research/raw-samples/snekkies/`

Files: `asset-001.json` … `asset-010.json` (Blockfrost raw, unmodified)

### Known problems (optional)

Phase 3A Top-100 include_now (TapTools rank 32). Type: pfp. Discovery only — no final definition in this pass.

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
| Dome | `$.attributes.Dome` | string | none | no |
| Eyes | `$.attributes.Eyes` | string | none | no |
| Face | `$.attributes.Face` | string | none | no |
| Skin | `$.attributes.Skin` | string | none | no |
| Type | `$.attributes.Type` | string | none | no |
| Style | `$.attributes.Style` | string | none | no |
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
| Raw samples | `research/raw-samples/snekkies/` |
| Audit report | `research/audits/snekkies.audit.md` |
| Generated definition | `registry/collections/snekkies.json` (prepare-phase placeholder only — **not finalized**) |
| Detailed finding | `research/findings/snekkies.md` |

---

## Notes

Detailed analysis: `research/findings/snekkies.md`. No schema, parser, or **final** definition changes in this pass.
