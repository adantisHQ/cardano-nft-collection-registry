# Collection Audit: Chilled Kongs Vox Avatar

Per-collection audit output for schema validation against real Cardano NFT collections.

---

## Audit metadata

| Field | Value |
|-------|-------|
| `collection_id` | `chilled-kongs-vox-avatar` |
| `collection_name` | Chilled Kongs Vox Avatar |
| `audit_phase` | 2 |
| `auditor` | Phase 2 metadata discovery (automated + review) |
| `audit_date` | 2026-06-08 |
| `audit_status` | complete |

## Input provided

### Policy IDs

```
5d8bb1d5376bf641ff2c51c7744efa8969e0dbdb18011876a2a16188
```

### Sample assets

| Label | Asset unit | Notes |
|-------|------------|-------|
| asset-001 | `5d8bb1d5376bf641ff2c51c7744efa8969e0dbdb18011876a2a161884368696c6c65644b6f6e6773566f7841766174617230303032` | Blockfrost raw |
| asset-002 | `5d8bb1d5376bf641ff2c51c7744efa8969e0dbdb18011876a2a161884368696c6c65644b6f6e6773566f7841766174617230363139` | Blockfrost raw |
| asset-003 | `5d8bb1d5376bf641ff2c51c7744efa8969e0dbdb18011876a2a161884368696c6c65644b6f6e6773566f7841766174617232383435` | Blockfrost raw |
| asset-004 | `5d8bb1d5376bf641ff2c51c7744efa8969e0dbdb18011876a2a161884368696c6c65644b6f6e6773566f7841766174617230363736` | Blockfrost raw |
| asset-005 | `5d8bb1d5376bf641ff2c51c7744efa8969e0dbdb18011876a2a161884368696c6c65644b6f6e6773566f7841766174617230343935` | Blockfrost raw |
| asset-006 | `5d8bb1d5376bf641ff2c51c7744efa8969e0dbdb18011876a2a161884368696c6c65644b6f6e6773566f7841766174617232373030` | Blockfrost raw |
| asset-007 | `5d8bb1d5376bf641ff2c51c7744efa8969e0dbdb18011876a2a161884368696c6c65644b6f6e6773566f7841766174617232363839` | Blockfrost raw |
| asset-008 | `5d8bb1d5376bf641ff2c51c7744efa8969e0dbdb18011876a2a161884368696c6c65644b6f6e6773566f7841766174617231333230` | Blockfrost raw |
| asset-009 | `5d8bb1d5376bf641ff2c51c7744efa8969e0dbdb18011876a2a161884368696c6c65644b6f6e6773566f7841766174617231393238` | Blockfrost raw |
| asset-010 | `5d8bb1d5376bf641ff2c51c7744efa8969e0dbdb18011876a2a161884368696c6c65644b6f6e6773566f7841766174617233333034` | Blockfrost raw |

Raw samples directory: `research/raw-samples/chilled-kongs-vox-avatar/`

Files: `asset-001.json` … `asset-010.json` (Blockfrost raw, unmodified)

### Known problems (optional)

Phase 2 CIP-68 candidate: companion vox/avatar policy distinct from base Chilled Kongs; may expose reference-token or alternate encoding patterns (GAP-002 follow-up).

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
| eye | `$.eye` | string | none | no |
| hat | `$.hat` | string | none | no |
| body | `$.body` | string | none | no |
| mouth | `$.mouth` | string | none | no |
| earring | `$.earring` | string | none | no |
| clothing | `$.clothing` | string | none | no |
| metaverse | `$.metaverse` | string | none | no |
| background | `$.background` | string | none | no |
| bcrcdiscord | `$.bcrcdiscord` | string | none | no |
| bcrctwitter | `$.bcrctwitter` | string | none | no |

---

## Socials

| Platform | Location or explicit value | Status |
|----------|----------------------------|--------|
| twitter | `$.twitter` or nested | found |

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
| 2 | License | No license metadata on asset | A |
| 3 | Royalties | No royalty metadata on asset | A |

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
| Raw samples | `research/raw-samples/chilled-kongs-vox-avatar/` |
| Audit report | `research/audits/chilled-kongs-vox-avatar.audit.md` |
| Generated definition | `registry/collections/chilled-kongs-vox-avatar.json` (placeholder only; not finalized) |
| Detailed finding | `research/findings/chilled-kongs-vox-avatar.md` |

---

## Notes

Detailed analysis: `research/findings/chilled-kongs-vox-avatar.md`. No schema, parser, or final definition changes in this pass.
