# Collection Audit: Toolheads

Per-collection audit output for schema validation against real Cardano NFT collections.

---

## Audit metadata

| Field | Value |
|-------|-------|
| `collection_id` | `toolheads` |
| `collection_name` | Toolheads |
| `audit_phase` | 3A |
| `auditor` | Phase 3A metadata discovery (automated + review) |
| `audit_date` | 2026-06-09 |
| `audit_status` | complete |

## Input provided

### Policy IDs

```
285c0b8e91ba323da4ca083c9db837e111dafbf3143ece4d03eba8f4
```

### Sample assets

| Label | Asset unit | Notes |
|-------|------------|-------|
| asset-001 | `285c0b8e91ba323da4ca083c9db837e111dafbf3143ece4d03eba8f4546f6f6c6865616432313830` | Blockfrost raw |
| asset-002 | `285c0b8e91ba323da4ca083c9db837e111dafbf3143ece4d03eba8f4546f6f6c6865616436333437` | Blockfrost raw |
| asset-003 | `285c0b8e91ba323da4ca083c9db837e111dafbf3143ece4d03eba8f4546f6f6c6865616435363338` | Blockfrost raw |
| asset-004 | `285c0b8e91ba323da4ca083c9db837e111dafbf3143ece4d03eba8f4546f6f6c6865616431393638` | Blockfrost raw |
| asset-005 | `285c0b8e91ba323da4ca083c9db837e111dafbf3143ece4d03eba8f4546f6f6c6865616434333936` | Blockfrost raw |
| asset-006 | `285c0b8e91ba323da4ca083c9db837e111dafbf3143ece4d03eba8f4546f6f6c6865616433363837` | Blockfrost raw |
| asset-007 | `285c0b8e91ba323da4ca083c9db837e111dafbf3143ece4d03eba8f4546f6f6c6865616432373739` | Blockfrost raw |
| asset-008 | `285c0b8e91ba323da4ca083c9db837e111dafbf3143ece4d03eba8f4546f6f6c6865616430323034` | Blockfrost raw |
| asset-009 | `285c0b8e91ba323da4ca083c9db837e111dafbf3143ece4d03eba8f4546f6f6c6865616436343632` | Blockfrost raw |
| asset-010 | `285c0b8e91ba323da4ca083c9db837e111dafbf3143ece4d03eba8f4546f6f6c6865616436343238` | Blockfrost raw |

Raw samples directory: `research/raw-samples/toolheads/`

Files: `asset-001.json` … `asset-010.json` (Blockfrost raw, unmodified)

### Known problems (optional)

Phase 3A Top-100 include_now (TapTools rank 19). Type: gaming. Discovery only — no final definition in this pass.

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
| body | `$.attributes.body` | string | none | no |
| head | `$.attributes.head` | string | none | no |
| role | `$.attributes.role` | string | none | no |
| strap | `$.attributes.strap` | string | none | no |
| outfit | `$.attributes.outfit` | string | none | no |
| accessory | `$.attributes.accessory` | string | none | no |
| background | `$.attributes.background` | string | none | no |

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
| Raw samples | `research/raw-samples/toolheads/` |
| Audit report | `research/audits/toolheads.audit.md` |
| Generated definition | `registry/collections/toolheads.json` (prepare-phase placeholder only — **not finalized**) |
| Detailed finding | `research/findings/toolheads.md` |

---

## Notes

Detailed analysis: `research/findings/toolheads.md`. No schema, parser, or **final** definition changes in this pass.
