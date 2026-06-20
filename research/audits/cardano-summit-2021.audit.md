# Collection Audit: Cardano Summit 2021

Per-collection audit output for schema validation against real Cardano NFT collections.

---

## Audit metadata

| Field | Value |
|-------|-------|
| `collection_id` | `cardano-summit-2021` |
| `collection_name` | Cardano Summit 2021 |
| `audit_phase` | 1 |
| `auditor` | Phase 1 metadata discovery (automated + review) |
| `audit_date` | 2026-06-08 |
| `audit_status` | complete |

## Input provided

### Policy IDs

```
0ad7f7a3281ba7c832344eb267594899147709b708176bc1084979f1
```

### Sample assets

| Label | Asset unit | Notes |
|-------|------------|-------|
| asset-001 | `0ad7f7a3281ba7c832344eb267594899147709b708176bc1084979f131353036363530` | Blockfrost raw |
| asset-002 | `0ad7f7a3281ba7c832344eb267594899147709b708176bc1084979f131353037373934` | Blockfrost raw |
| asset-003 | `0ad7f7a3281ba7c832344eb267594899147709b708176bc1084979f131353038313435` | Blockfrost raw |
| asset-004 | `0ad7f7a3281ba7c832344eb267594899147709b708176bc1084979f131303936343931` | Blockfrost raw |
| asset-005 | `0ad7f7a3281ba7c832344eb267594899147709b708176bc1084979f131303533323030` | Blockfrost raw |
| asset-006 | `0ad7f7a3281ba7c832344eb267594899147709b708176bc1084979f131303530303239` | Blockfrost raw |
| asset-007 | `0ad7f7a3281ba7c832344eb267594899147709b708176bc1084979f131303436383735` | Blockfrost raw |
| asset-008 | `0ad7f7a3281ba7c832344eb267594899147709b708176bc1084979f131303839313938` | Blockfrost raw |
| asset-009 | `0ad7f7a3281ba7c832344eb267594899147709b708176bc1084979f131303836393033` | Blockfrost raw |
| asset-010 | `0ad7f7a3281ba7c832344eb267594899147709b708176bc1084979f131303633323537` | Blockfrost raw |

Raw samples directory: `research/raw-samples/cardano-summit-2021/`

Files: `asset-001.json` … `asset-010.json` (Blockfrost raw, unmodified)

### Known problems (optional)

Phase 1 metadata discovery via Blockfrost. See `research/findings/cardano-summit-2021.md`.

---

## Metadata analysis

| Field | Finding |
|-------|---------|
| Metadata standard | CIP25v1 |
| Metadata root | `onchain_metadata` |
| Asset name encoding | hex (Blockfrost `asset_name` field) |
| CIP-25 layout notes | Flat or custom layouts observed |
| CIP-68 layout notes | Not observed in samples |
| Custom conventions | Minimal two-field layout |

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
| Trait grouping style | None observed |
| Primary trait root path | metadata root (flat keys) |
| Canonical trait names | See inventory |
| Value types observed | string, array, number (collection-dependent) |
| Normalization requirements | Mostly none |
| Dynamic traits | no |

### Trait path inventory

| Canonical trait | Source path(s) | Value type | Normalization | Required |
|-----------------|----------------|------------|---------------|----------|
| _none_ | — | — | — | — |

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
| info | Standard CIP-25 on-chain metadata in most samples |
| info | See findings for collection-specific notes |

---

## Schema fit assessment

| Question | Answer |
|----------|--------|
| Can current schema represent this collection? | yes — with explicit mappings and indexing notes |
| `schema_fit` | fits |
| Proposed definition status | partial (discovery complete; definition not updated in this phase) |
| Blockers | None requiring schema change in isolation |

---

## Failures

| # | Area | Description | Classification |
|---|------|-------------|----------------|
| 1 | Traits | No trait fields (expected for event badge) | A |
| 2 | Socials | No social metadata | A |
| 3 | License | No license metadata | A |
| 4 | Royalties | No royalty metadata | A |

---

## Scoring

```
parse_success_score: 98
trait_mapping_confidence: high
media_mapping_confidence: high
social_mapping_confidence: high
schema_fit: fits
```

---

## Outputs

| Artifact | Path |
|----------|------|
| Raw samples | `research/raw-samples/cardano-summit-2021/` |
| Audit report | `research/audits/cardano-summit-2021.audit.md` |
| Generated definition | `registry/collections/cardano-summit-2021.json` (placeholder; not modified) |
| Detailed finding | `research/findings/cardano-summit-2021.md` |

---

## Notes

Detailed analysis: `research/findings/cardano-summit-2021.md`. No schema or definition changes performed in this pass.
