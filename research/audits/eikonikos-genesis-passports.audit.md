# Collection Audit: EIKONIKOS - Genesis Passports

Per-collection audit output for schema validation against real Cardano NFT collections.

---

## Audit metadata

| Field | Value |
|-------|-------|
| `collection_id` | `eikonikos-genesis-passports` |
| `collection_name` | EIKONIKOS - Genesis Passports |
| `audit_phase` | 3A |
| `auditor` | Phase 3A metadata discovery (automated + review) |
| `audit_date` | 2026-06-09 |
| `audit_status` | complete |

## Input provided

### Policy IDs

```
d1b21921e3cc1b7559c2691365ab3b9b1e495e1b0391213b71577430
```

### Sample assets

| Label | Asset unit | Notes |
|-------|------------|-------|
| asset-001 | `d1b21921e3cc1b7559c2691365ab3b9b1e495e1b0391213b7157743047656e6573697342726f6e7a6550617373706f727433313337` | Blockfrost raw |
| asset-002 | `d1b21921e3cc1b7559c2691365ab3b9b1e495e1b0391213b7157743047656e6573697342726f6e7a6550617373706f727433363938` | Blockfrost raw |
| asset-003 | `d1b21921e3cc1b7559c2691365ab3b9b1e495e1b0391213b7157743047656e6573697353696c76657250617373706f727432313235` | Blockfrost raw |
| asset-004 | `d1b21921e3cc1b7559c2691365ab3b9b1e495e1b0391213b7157743047656e6573697342726f6e7a6550617373706f7274353037` | Blockfrost raw |
| asset-005 | `d1b21921e3cc1b7559c2691365ab3b9b1e495e1b0391213b7157743047656e6573697342726f6e7a6550617373706f727433303432` | Blockfrost raw |
| asset-006 | `d1b21921e3cc1b7559c2691365ab3b9b1e495e1b0391213b7157743047656e6573697342726f6e7a6550617373706f727431323233` | Blockfrost raw |
| asset-007 | `d1b21921e3cc1b7559c2691365ab3b9b1e495e1b0391213b7157743047656e6573697342726f6e7a6550617373706f727432303533` | Blockfrost raw |
| asset-008 | `d1b21921e3cc1b7559c2691365ab3b9b1e495e1b0391213b7157743047656e6573697342726f6e7a6550617373706f727432343035` | Blockfrost raw |
| asset-009 | `d1b21921e3cc1b7559c2691365ab3b9b1e495e1b0391213b7157743047656e65736973476f6c6450617373706f7274363638` | Blockfrost raw |
| asset-010 | `d1b21921e3cc1b7559c2691365ab3b9b1e495e1b0391213b7157743047656e6573697353696c76657250617373706f7274333837` | Blockfrost raw |

Raw samples directory: `research/raw-samples/eikonikos-genesis-passports/`

Files: `asset-001.json` … `asset-010.json` (Blockfrost raw, unmodified)

### Known problems (optional)

Phase 3A Top-100 include_now (TapTools rank 71). Type: event. Discovery only — no final definition in this pass.

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
| Image | `$.image` | on-chain | `image` string; `files[]` multi-media; mediaType: image/gif |
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
| NFT | `$.NFT` | string | none | no |
| Tier | `$.Tier` | string | none | no |
| Class | `$.Class` | string | none | no |
| Colour Code | `$.Colour Code` | string | none | no |
| Crystal Perk | `$.Crystal Perk` | string | none | no |
| Tiered Whitelist | `$.Tiered Whitelist` | string | none | no |

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
| Raw samples | `research/raw-samples/eikonikos-genesis-passports/` |
| Audit report | `research/audits/eikonikos-genesis-passports.audit.md` |
| Generated definition | `registry/collections/eikonikos-genesis-passports.json` (prepare-phase placeholder only — **not finalized**) |
| Detailed finding | `research/findings/eikonikos-genesis-passports.md` |

---

## Notes

Detailed analysis: `research/findings/eikonikos-genesis-passports.md`. No schema, parser, or **final** definition changes in this pass.
