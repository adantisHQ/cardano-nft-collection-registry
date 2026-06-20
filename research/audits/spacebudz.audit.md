# Collection Audit: SpaceBudz

Per-collection audit output for schema validation against real Cardano NFT collections.

---

## Audit metadata

| Field | Value |
|-------|-------|
| `collection_id` | `spacebudz` |
| `collection_name` | SpaceBudz |
| `audit_phase` | 1 |
| `auditor` | Phase 1 metadata discovery (automated + review) |
| `audit_date` | 2026-06-08 |
| `audit_status` | complete |

## Input provided

### Policy IDs

```
4523c5e21d409b81c95b45b0aea275b8ea1406e6cafea5583b9f8a5f
```

### Sample assets

| Label | Asset unit | Notes |
|-------|------------|-------|
| asset-001 | `4523c5e21d409b81c95b45b0aea275b8ea1406e6cafea5583b9f8a5f000de14042756431373830` | Blockfrost raw |
| asset-002 | `4523c5e21d409b81c95b45b0aea275b8ea1406e6cafea5583b9f8a5f000de14042756439393632` | Blockfrost raw |
| asset-003 | `4523c5e21d409b81c95b45b0aea275b8ea1406e6cafea5583b9f8a5f000de140427564313230` | Blockfrost raw |
| asset-004 | `4523c5e21d409b81c95b45b0aea275b8ea1406e6cafea5583b9f8a5f000de14042756434393338` | Blockfrost raw |
| asset-005 | `4523c5e21d409b81c95b45b0aea275b8ea1406e6cafea5583b9f8a5f000de140427564363530` | Blockfrost raw |
| asset-006 | `4523c5e21d409b81c95b45b0aea275b8ea1406e6cafea5583b9f8a5f000de14042756433313831` | Blockfrost raw |
| asset-007 | `4523c5e21d409b81c95b45b0aea275b8ea1406e6cafea5583b9f8a5f000de14042756433383039` | Blockfrost raw |
| asset-008 | `4523c5e21d409b81c95b45b0aea275b8ea1406e6cafea5583b9f8a5f000de14042756431353533` | Blockfrost raw |
| asset-009 | `4523c5e21d409b81c95b45b0aea275b8ea1406e6cafea5583b9f8a5f000de140427564323238` | Blockfrost raw |
| asset-010 | `4523c5e21d409b81c95b45b0aea275b8ea1406e6cafea5583b9f8a5f000de14042756432353334` | Blockfrost raw |

Raw samples directory: `research/raw-samples/spacebudz/`

Files: `asset-001.json` … `asset-010.json` (Blockfrost raw, unmodified)

### Known problems (optional)

Phase 1 metadata discovery via Blockfrost. See `research/findings/spacebudz.md`.

---

## Metadata analysis

| Field | Finding |
|-------|---------|
| Metadata standard | CIP-68v1 (100% of metadata-bearing samples) |
| Metadata root | `onchain_metadata` |
| Asset name encoding | hex (Blockfrost `asset_name` field) |
| CIP-25 layout notes | Not used for trait grid in sampled assets |
| CIP-68 layout notes | Reference token metadata with encoded traits/type |
| Custom conventions | CIP-68 extra datum |

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
| Trait grouping style | Single `traits` field holds hex-encoded trait payload (not a JSON object) |
| Primary trait root path | `$.traits` (encoded) |
| Canonical trait names | See inventory |
| Value types observed | string, array, number (collection-dependent) |
| Normalization requirements | Hex decode traits/type |
| Dynamic traits | no |

### Trait path inventory

| Canonical trait | Source path(s) | Value type | Normalization | Required |
|-----------------|----------------|------------|---------------|----------|
| traits (encoded) | `$.traits` | string | hex decode | yes |
| type (encoded) | `$.type` | string | hex decode | yes |
| sha256 | `$.sha256` | string | hex decode | yes |

---

## Socials

| Platform | Location or explicit value | Status |
|----------|----------------------------|--------|
| x | — | missing |
| discord | — | missing |
| telegram | — | missing |
| github | — | missing |
| other | — | missing |

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
| Notes | Royalties may exist at marketplace/CIP-27 level; not in sampled asset metadata |

---

## Indexing caveats

| Severity | Message |
|----------|---------|
| info | Raw samples are Blockfrost asset responses; extract `onchain_metadata` for parsing |
| warning | Many policy assets have null on-chain metadata; filter to CIP-68 reference tokens |
| info | See findings for collection-specific notes |

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
| 1 | Metadata | Many policy assets have null on-chain metadata in Blockfrost | A |
| 2 | Traits | Traits stored as hex blob, not object/array | E |
| 3 | Traits | No CIP-25 attributes object | A |
| 4 | Socials | No social fields in on-chain metadata | A |
| 5 | License | No license fields in on-chain metadata | A |
| 6 | Royalties | No royalty fields in on-chain metadata | A |

---

## Scoring

```
parse_success_score: 70
trait_mapping_confidence: medium
media_mapping_confidence: high
social_mapping_confidence: high
schema_fit: fits_with_notes
```

---

## Outputs

| Artifact | Path |
|----------|------|
| Raw samples | `research/raw-samples/spacebudz/` |
| Audit report | `research/audits/spacebudz.audit.md` |
| Generated definition | `registry/collections/spacebudz.json` (placeholder; not modified) |
| Detailed finding | `research/findings/spacebudz.md` |

---

## Notes

Detailed analysis: `research/findings/spacebudz.md`. No schema or definition changes performed in this pass.
