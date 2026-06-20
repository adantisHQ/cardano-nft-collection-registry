# Collection Audit: The Mallard Order

Per-collection audit output for schema validation against real Cardano NFT collections.

---

## Audit metadata

| Field | Value |
|-------|-------|
| `collection_id` | `the-mallard-order` |
| `collection_name` | The Mallard Order |
| `audit_phase` | 1 |
| `auditor` | Phase 1 metadata discovery (automated + review) |
| `audit_date` | 2026-06-08 |
| `audit_status` | complete |

## Input provided

### Policy IDs

```
901ba6e9831b078e131a1cc403d6139af21bda255cea6c9f770f4834
```

### Sample assets

| Label | Asset unit | Notes |
|-------|------------|-------|
| asset-001 | `901ba6e9831b078e131a1cc403d6139af21bda255cea6c9f770f4834` | Blockfrost raw |
| asset-002 | `901ba6e9831b078e131a1cc403d6139af21bda255cea6c9f770f48344d616c6c6172644f7264657232363136` | Blockfrost raw |
| asset-003 | `901ba6e9831b078e131a1cc403d6139af21bda255cea6c9f770f48344d616c6c6172644f7264657231313536` | Blockfrost raw |
| asset-004 | `901ba6e9831b078e131a1cc403d6139af21bda255cea6c9f770f48344d616c6c6172644f7264657231373131` | Blockfrost raw |
| asset-005 | `901ba6e9831b078e131a1cc403d6139af21bda255cea6c9f770f48344d616c6c6172644f7264657234353336` | Blockfrost raw |
| asset-006 | `901ba6e9831b078e131a1cc403d6139af21bda255cea6c9f770f48344d616c6c6172644f7264657232373635` | Blockfrost raw |
| asset-007 | `901ba6e9831b078e131a1cc403d6139af21bda255cea6c9f770f48344d616c6c6172644f7264657233393738` | Blockfrost raw |
| asset-008 | `901ba6e9831b078e131a1cc403d6139af21bda255cea6c9f770f48344d616c6c6172644f7264657236343739` | Blockfrost raw |
| asset-009 | `901ba6e9831b078e131a1cc403d6139af21bda255cea6c9f770f48344d616c6c6172644f7264657234343339` | Blockfrost raw |
| asset-010 | `901ba6e9831b078e131a1cc403d6139af21bda255cea6c9f770f48344d616c6c6172644f7264657232343137` | Blockfrost raw |

Raw samples directory: `research/raw-samples/the-mallard-order/`

Files: `asset-001.json` … `asset-010.json` (Blockfrost raw, unmodified)

### Known problems (optional)

Phase 1 metadata discovery via Blockfrost. See `research/findings/the-mallard-order.md`.

---

## Metadata analysis

| Field | Finding |
|-------|---------|
| Metadata standard | CIP25v1 |
| Metadata root | `onchain_metadata` |
| Asset name encoding | hex (Blockfrost `asset_name` field) |
| CIP-25 layout notes | Flat or custom layouts observed |
| CIP-68 layout notes | Not observed in samples |
| Custom conventions | Capitalized `Attributes` key |

---

## Media analysis

| Field | Path or value | Source | Notes |
|-------|---------------|--------|-------|
| Image | `$.image` | on-chain | IPFS in samples |
| Animation | — |  | |
| Files / multi-media | — |  | |
| Thumbnail | — | | |
| Collection logo | — | registry-only | |
| Collection banner | — | registry-only | |

---

## Trait analysis

| Field | Finding |
|-------|---------|
| Trait grouping style | `Attributes[n] |
| Primary trait root path | `$.Attributes` |
| Canonical trait names | See inventory |
| Value types observed | string, array, number (collection-dependent) |
| Normalization requirements | Mostly none |
| Dynamic traits | no |

### Trait path inventory

| Canonical trait | Source path(s) | Value type | Normalization | Required |
|-----------------|----------------|------------|---------------|----------|
| Accessories | `$.Attributes[0].Accessories` | string | capitalize | no |
| Head | `$.Attributes[1].Head` | string | capitalize | no |
| Mask | `$.Attributes[2].Mask` | string | capitalize | no |
| Beak | `$.Attributes[3].Beak` | string | capitalize | no |
| Eyewear | `$.Attributes[4].Eyewear` | string | capitalize | no |
| Eyes | `$.Attributes[5].Eyes` | string | capitalize | no |
| Face | `$.Attributes[6].Face` | string | capitalize | no |
| Neckwear | `$.Attributes[7].Neckwear` | string | capitalize | no |
| Clothes | `$.Attributes[8].Clothes` | string | capitalize | no |
| Skin | `$.Attributes[9].Skin` | string | capitalize | no |
| Feathers | `$.Attributes[10].Feathers` | string | capitalize | no |
| Back | `$.Attributes[11].Back` | string | capitalize | no |
| Background | `$.Attributes[12].Background` | string | capitalize | no |
| School of Thought | `$.Attributes[13].School of Thought` | string | capitalize | no |

---

## Socials

| Platform | Location or explicit value | Status |
|----------|----------------------------|--------|
| x | `$.Twitter` | found |
| discord | — | missing |
| website | `$.Website` | found |

---

## Links

| Link type | Location or explicit value | Status |
|-----------|----------------------------|--------|
| website | `$.Website` found | found |
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
| Notes | Royalties may exist at marketplace/CIP-27 level; not in sampled asset metadata |

---

## Indexing caveats

| Severity | Message |
|----------|---------|
| info | Raw samples are Blockfrost asset responses; extract `onchain_metadata` for parsing |
| info | Standard CIP-25 on-chain metadata in most samples |
| warning | Array-of-single-key-object field groups require index-stable paths |

---

## Schema fit assessment

| Question | Answer |
|----------|--------|
| Can current schema represent this collection? | yes — with explicit mappings and indexing notes |
| `schema_fit` | fits_with_notes |
| Proposed definition status | partial (discovery complete; definition not updated in this phase) |
| Blockers | None requiring schema change in isolation |

---

## Failures

| # | Area | Description | Classification |
|---|------|-------------|----------------|
| 1 | Traits | Attributes array of single-key objects, not attributes map | D |
| 2 | License | No license metadata | A |
| 3 | Royalties | No royalty metadata | A |

---

## Scoring

```
parse_success_score: 90
trait_mapping_confidence: high
media_mapping_confidence: high
social_mapping_confidence: high
schema_fit: fits_with_notes
```

---

## Outputs

| Artifact | Path |
|----------|------|
| Raw samples | `research/raw-samples/the-mallard-order/` |
| Audit report | `research/audits/the-mallard-order.audit.md` |
| Generated definition | `registry/collections/the-mallard-order.json` (placeholder; not modified) |
| Detailed finding | `research/findings/the-mallard-order.md` |

---

## Notes

Detailed analysis: `research/findings/the-mallard-order.md`. No schema or definition changes performed in this pass.
