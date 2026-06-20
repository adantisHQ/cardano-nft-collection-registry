# Collection Audit: UnboundedEarth

Per-collection audit output for schema validation against real Cardano NFT collections.

---

## Audit metadata

| Field | Value |
|-------|-------|
| `collection_id` | `unbounded-earth` |
| `collection_name` | UnboundedEarth |
| `audit_phase` | 2 |
| `auditor` | Phase 2 metadata discovery (automated + review) |
| `audit_date` | 2026-06-08 |
| `audit_status` | complete |

## Input provided

### Policy IDs

```
bb78d3b6638537d6df7ae43791ead3d50e75fdae82131eff2b7ae994
```

### Sample assets

| Label | Asset unit | Notes |
|-------|------------|-------|
| asset-001 | `bb78d3b6638537d6df7ae43791ead3d50e75fdae82131eff2b7ae994556e626f756e6465644561727468506c75733236506c75733834` | Blockfrost raw |
| asset-002 | `bb78d3b6638537d6df7ae43791ead3d50e75fdae82131eff2b7ae994556e626f756e6465644561727468506c75733337506c75733430` | Blockfrost raw |
| asset-003 | `bb78d3b6638537d6df7ae43791ead3d50e75fdae82131eff2b7ae994556e626f756e64656445617274684d696e75733335506c7573313033` | Blockfrost raw |
| asset-004 | `bb78d3b6638537d6df7ae43791ead3d50e75fdae82131eff2b7ae994556e626f756e6465644561727468506c7573313131506c75733430` | Blockfrost raw |
| asset-005 | `bb78d3b6638537d6df7ae43791ead3d50e75fdae82131eff2b7ae994556e626f756e6465644561727468506c757336344d696e75733831` | Blockfrost raw |
| asset-006 | `bb78d3b6638537d6df7ae43791ead3d50e75fdae82131eff2b7ae994556e626f756e6465644561727468506c757336334d696e757331` | Blockfrost raw |
| asset-007 | `bb78d3b6638537d6df7ae43791ead3d50e75fdae82131eff2b7ae994556e626f756e64656445617274684d696e7573313036506c75733537` | Blockfrost raw |
| asset-008 | `bb78d3b6638537d6df7ae43791ead3d50e75fdae82131eff2b7ae994556e626f756e6465644561727468506c757331354d696e75733136` | Blockfrost raw |
| asset-009 | `bb78d3b6638537d6df7ae43791ead3d50e75fdae82131eff2b7ae994556e626f756e6465644561727468506c75733233506c75733437` | Blockfrost raw |
| asset-010 | `bb78d3b6638537d6df7ae43791ead3d50e75fdae82131eff2b7ae994556e626f756e64656445617274684d696e75733131334d696e75733933` | Blockfrost raw |

Raw samples directory: `research/raw-samples/unbounded-earth/`

Files: `asset-001.json` … `asset-010.json` (Blockfrost raw, unmodified)

### Known problems (optional)

Phase 2 standalone land/metaverse branding; tests alternate land parcel metadata without Phase 1 ecosystem overlap.

---

## Metadata analysis

| Field | Finding |
|-------|---------|
| Metadata standard | CIP25v1 |
| Metadata root | `onchain_metadata` |
| Asset name encoding | hex (Blockfrost `asset_name` field) |
| CIP-25 layout notes | Flat trait-like keys at metadata root |
| CIP-68 layout notes | Not observed in samples |
| Custom conventions | ---INFO--- |

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
| ---X--- | `$.---X---` | string | none | no |
| ---Y--- | `$.---Y---` | string | none | no |
| ---LINK--- | `$.---LINK---` | string | none | no |
| ---TYPE--- | `$.---TYPE---` | string | none | no |
| ---SEASON--- | `$.---SEASON---` | string | none | no |

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
| 6 | Custom | Collection-specific fields: ---INFO--- | C |

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
| Raw samples | `research/raw-samples/unbounded-earth/` |
| Audit report | `research/audits/unbounded-earth.audit.md` |
| Generated definition | `registry/collections/unbounded-earth.json` (placeholder only; not finalized) |
| Detailed finding | `research/findings/unbounded-earth.md` |

---

## Notes

Detailed analysis: `research/findings/unbounded-earth.md`. No schema, parser, or final definition changes in this pass.
