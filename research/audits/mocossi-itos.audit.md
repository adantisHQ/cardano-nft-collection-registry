# Collection Audit: Mocossi - ITOs

Per-collection audit output for schema validation against real Cardano NFT collections.

---

## Audit metadata

| Field | Value |
|-------|-------|
| `collection_id` | `mocossi-itos` |
| `collection_name` | Mocossi - ITOs |
| `audit_phase` | 3A |
| `auditor` | Phase 3A metadata discovery (automated + review) |
| `audit_date` | 2026-06-09 |
| `audit_status` | complete |

## Input provided

### Policy IDs

```
5d5b205252b9f5016422d0eace869d7fd45074a4ea4b6c1dc78d1705
```

### Sample assets

| Label | Asset unit | Notes |
|-------|------------|-------|
| asset-001 | `5d5b205252b9f5016422d0eace869d7fd45074a4ea4b6c1dc78d17054d6f636f73736949746f30303030` | Blockfrost raw |
| asset-002 | `5d5b205252b9f5016422d0eace869d7fd45074a4ea4b6c1dc78d17054d6f636f73736949746f39393835` | Blockfrost raw |
| asset-003 | `5d5b205252b9f5016422d0eace869d7fd45074a4ea4b6c1dc78d17054d6f636f73736949746f39393735` | Blockfrost raw |
| asset-004 | `5d5b205252b9f5016422d0eace869d7fd45074a4ea4b6c1dc78d17054d6f636f73736949746f34333134` | Blockfrost raw |
| asset-005 | `5d5b205252b9f5016422d0eace869d7fd45074a4ea4b6c1dc78d17054d6f636f73736949746f33303530` | Blockfrost raw |
| asset-006 | `5d5b205252b9f5016422d0eace869d7fd45074a4ea4b6c1dc78d17054d6f636f73736949746f38363331` | Blockfrost raw |
| asset-007 | `5d5b205252b9f5016422d0eace869d7fd45074a4ea4b6c1dc78d17054d6f636f73736949746f37373434` | Blockfrost raw |
| asset-008 | `5d5b205252b9f5016422d0eace869d7fd45074a4ea4b6c1dc78d17054d6f636f73736949746f32373832` | Blockfrost raw |
| asset-009 | `5d5b205252b9f5016422d0eace869d7fd45074a4ea4b6c1dc78d17054d6f636f73736949746f30353337` | Blockfrost raw |
| asset-010 | `5d5b205252b9f5016422d0eace869d7fd45074a4ea4b6c1dc78d17054d6f636f73736949746f33313231` | Blockfrost raw |

Raw samples directory: `research/raw-samples/mocossi-itos/`

Files: `asset-001.json` … `asset-010.json` (Blockfrost raw, unmodified)

### Known problems (optional)

Phase 3A Top-100 include_now (TapTools rank 30). Type: mixed. Discovery only — no final definition in this pass.

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
| Image | `$.image` | on-chain | `image` string; mediaType: image/png |
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
| Body | `$.attributes.Body` | string | none | no |
| Face | `$.attributes.Face` | string | none | no |
| Species | `$.attributes.Species` | string | none | no |
| Headwear | `$.attributes.Headwear` | string | none | no |
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
| website | missing | missing |
| mint | — | missing |
| documentation | — | missing |
| other | — | missing |

---

## License

| Field | Location or value | Status |
|-------|-------------------|--------|
| License text | copyright | found |
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
| 3 | License | License/terms present in non-standard location | C |
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
| Raw samples | `research/raw-samples/mocossi-itos/` |
| Audit report | `research/audits/mocossi-itos.audit.md` |
| Generated definition | `registry/collections/mocossi-itos.json` (prepare-phase placeholder only — **not finalized**) |
| Detailed finding | `research/findings/mocossi-itos.md` |

---

## Notes

Detailed analysis: `research/findings/mocossi-itos.md`. No schema, parser, or **final** definition changes in this pass.
