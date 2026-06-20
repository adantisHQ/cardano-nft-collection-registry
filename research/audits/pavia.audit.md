# Collection Audit: Pavia

Per-collection audit output for schema validation against real Cardano NFT collections.

---

## Audit metadata

| Field | Value |
|-------|-------|
| `collection_id` | `pavia` |
| `collection_name` | Pavia |
| `audit_phase` | 1 |
| `auditor` | Phase 1 metadata discovery (automated + review) |
| `audit_date` | 2026-06-08 |
| `audit_status` | complete |

## Input provided

### Policy IDs

```
4bf184e01e0f163296ab253edd60774e2d34367d0e7b6cbc689b567d
```

### Sample assets

| Label | Asset unit | Notes |
|-------|------------|-------|
| asset-001 | `4bf184e01e0f163296ab253edd60774e2d34367d0e7b6cbc689b567d50617669614d696e757337314d696e75733832` | Blockfrost raw |
| asset-002 | `4bf184e01e0f163296ab253edd60774e2d34367d0e7b6cbc689b567d50617669614d696e75733131344d696e75733131` | Blockfrost raw |
| asset-003 | `4bf184e01e0f163296ab253edd60774e2d34367d0e7b6cbc689b567d50617669614d696e757331344d696e75733236` | Blockfrost raw |
| asset-004 | `4bf184e01e0f163296ab253edd60774e2d34367d0e7b6cbc689b567d50617669614d696e7573313036506c75733736` | Blockfrost raw |
| asset-005 | `4bf184e01e0f163296ab253edd60774e2d34367d0e7b6cbc689b567d50617669614d696e7573313135506c75733830` | Blockfrost raw |
| asset-006 | `4bf184e01e0f163296ab253edd60774e2d34367d0e7b6cbc689b567d50617669614d696e757333506c75733537` | Blockfrost raw |
| asset-007 | `4bf184e01e0f163296ab253edd60774e2d34367d0e7b6cbc689b567d5061766961506c75733130506c75733630` | Blockfrost raw |
| asset-008 | `4bf184e01e0f163296ab253edd60774e2d34367d0e7b6cbc689b567d5061766961506c757334304d696e7573313233` | Blockfrost raw |
| asset-009 | `4bf184e01e0f163296ab253edd60774e2d34367d0e7b6cbc689b567d5061766961506c757332304d696e75733436` | Blockfrost raw |
| asset-010 | `4bf184e01e0f163296ab253edd60774e2d34367d0e7b6cbc689b567d5061766961506c75733336506c75733637` | Blockfrost raw |

Raw samples directory: `research/raw-samples/pavia/`

Files: `asset-001.json` … `asset-010.json` (Blockfrost raw, unmodified)

### Known problems (optional)

Phase 1 metadata discovery via Blockfrost. See `research/findings/pavia.md`.

---

## Metadata analysis

| Field | Finding |
|-------|---------|
| Metadata standard | CIP25v1 |
| Metadata root | `onchain_metadata` |
| Asset name encoding | hex (Blockfrost `asset_name` field) |
| CIP-25 layout notes | Flat or custom layouts observed |
| CIP-68 layout notes | Not observed in samples |
| Custom conventions | Banner-style section keys |

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
| Trait grouping style | Land `type`, `x`, `y` at `-----Land Sale 1-----[0 |
| Primary trait root path | metadata root (flat keys) |
| Canonical trait names | See inventory |
| Value types observed | string, array, number (collection-dependent) |
| Normalization requirements | Optional ipfs:// prefix on image |
| Dynamic traits | no |

### Trait path inventory

| Canonical trait | Source path(s) | Value type | Normalization | Required |
|-----------------|----------------|------------|---------------|----------|
| land type | `$.-----Land Sale 1-----[0].type` | string | none | yes |
| x | `$.-----Land Sale 1-----[1].x` | string | none | yes |
| y | `$.-----Land Sale 1-----[2].y` | string | none | yes |

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
| website | nested in Product Information | found |
| mint | — | missing |
| documentation | — | missing |
| other | — | missing |

---

## License

| Field | Location or value | Status |
|-------|-------------------|--------|
| License text | Copyright in Product Information | found |
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
| 1 | Traits | Land fields in array-of-single-key-object section | D |
| 2 | Media | Image sometimes missing ipfs:// prefix | C |
| 3 | Socials | Website only inside nested Product Information array | A |
| 4 | License | Copyright text present but non-standard location | C |
| 5 | Royalties | No royalty metadata | A |

---

## Scoring

```
parse_success_score: 85
trait_mapping_confidence: high
media_mapping_confidence: medium
social_mapping_confidence: high
schema_fit: fits_with_notes
```

---

## Outputs

| Artifact | Path |
|----------|------|
| Raw samples | `research/raw-samples/pavia/` |
| Audit report | `research/audits/pavia.audit.md` |
| Generated definition | `registry/collections/pavia.json` (placeholder; not modified) |
| Detailed finding | `research/findings/pavia.md` |

---

## Notes

Detailed analysis: `research/findings/pavia.md`. No schema or definition changes performed in this pass.
