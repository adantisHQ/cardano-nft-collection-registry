# Collection Audit: Platypus Cyberpunks

Per-collection audit output for schema validation against real Cardano NFT collections.

---

## Audit metadata

| Field | Value |
|-------|-------|
| `collection_id` | `platypus-cyberpunks` |
| `collection_name` | Platypus Cyberpunks |
| `audit_phase` | 3A |
| `auditor` | Phase 3A metadata discovery (automated + review) |
| `audit_date` | 2026-06-09 |
| `audit_status` | complete |

## Input provided

### Policy IDs

```
787a6798527b21ad0e0f62c021b4ce036513a2d3342b5cb519d2ca19
```

### Sample assets

| Label | Asset unit | Notes |
|-------|------------|-------|
| asset-001 | `787a6798527b21ad0e0f62c021b4ce036513a2d3342b5cb519d2ca19000de140506c61747970757320437962657270756e6b73202331373933` | Blockfrost raw |
| asset-002 | `787a6798527b21ad0e0f62c021b4ce036513a2d3342b5cb519d2ca19000de140506c61747970757320437962657250756e6b732023393739` | Blockfrost raw |
| asset-003 | `787a6798527b21ad0e0f62c021b4ce036513a2d3342b5cb519d2ca19000de140506c61747970757320437962657250756e6b732023393236` | Blockfrost raw |
| asset-004 | `787a6798527b21ad0e0f62c021b4ce036513a2d3342b5cb519d2ca19000de140506c61747970757320437962657270756e6b73202331313734` | Blockfrost raw |
| asset-005 | `787a6798527b21ad0e0f62c021b4ce036513a2d3342b5cb519d2ca19000de140506c61747970757320437962657250756e6b732023373839` | Blockfrost raw |
| asset-006 | `787a6798527b21ad0e0f62c021b4ce036513a2d3342b5cb519d2ca19000643b0506c61747970757320437962657250756e6b732023383635` | Blockfrost raw |
| asset-007 | `787a6798527b21ad0e0f62c021b4ce036513a2d3342b5cb519d2ca19000de140506c61747970757320437962657270756e6b73202334393534` | Blockfrost raw |
| asset-008 | `787a6798527b21ad0e0f62c021b4ce036513a2d3342b5cb519d2ca19000de140506c61747970757320437962657270756e6b73202333313433` | Blockfrost raw |
| asset-009 | `787a6798527b21ad0e0f62c021b4ce036513a2d3342b5cb519d2ca19000643b0506c61747970757320437962657250756e6b732023393331` | Blockfrost raw |
| asset-010 | `787a6798527b21ad0e0f62c021b4ce036513a2d3342b5cb519d2ca19000de140506c61747970757320437962657250756e6b732023343238` | Blockfrost raw |

Raw samples directory: `research/raw-samples/platypus-cyberpunks/`

Files: `asset-001.json` … `asset-010.json` (Blockfrost raw, unmodified)

### Known problems (optional)

Phase 3A Top-100 include_now (TapTools rank 81). Type: gaming. Discovery only — no final definition in this pass.

---

## Metadata analysis

| Field | Finding |
|-------|---------|
| Metadata standard | CIP68v1, CIP25v1 |
| Metadata root | `onchain_metadata` |
| Asset name encoding | hex (Blockfrost `asset_name` field) |
| CIP-25 layout notes | Flat trait-like keys at metadata root |
| CIP-68 layout notes | Flat trait-like keys at metadata root |
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
| hat | `$.hat` | string | none | no |
| back | `$.back` | string | none | no |
| body | `$.body` | string | none | no |
| eyes | `$.eyes` | string | none | no |
| hair | `$.hair` | string | none | no |
| head | `$.head` | string | none | no |
| mouth | `$.mouth` | string | none | no |
| clothes | `$.clothes` | string | none | no |
| eyewear | `$.eyewear` | string | none | no |
| special | `$.special` | string | none | no |
| background | `$.background` | string | none | no |

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
| warning | Policy listing includes null-metadata assets |
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
| 1 | Metadata | Policy listings include assets without on-chain metadata (20% skipped in fetch) | A |
| 2 | Traits | Traits at metadata root, not under attributes object | C |
| 3 | Socials | No social fields on asset metadata | A |
| 4 | Links | No website/external links on asset metadata | A |
| 5 | License | No license metadata on asset | A |
| 6 | Royalties | No royalty metadata on asset | A |

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
| Raw samples | `research/raw-samples/platypus-cyberpunks/` |
| Audit report | `research/audits/platypus-cyberpunks.audit.md` |
| Generated definition | `registry/collections/platypus-cyberpunks.json` (prepare-phase placeholder only — **not finalized**) |
| Detailed finding | `research/findings/platypus-cyberpunks.md` |

---

## Notes

Detailed analysis: `research/findings/platypus-cyberpunks.md`. No schema, parser, or **final** definition changes in this pass.
