# Collection Audit: Goofy Gophers Mining Club

Per-collection audit output for schema validation against real Cardano NFT collections.

---

## Audit metadata

| Field | Value |
|-------|-------|
| `collection_id` | `goofy-gophers-mining-club` |
| `collection_name` | Goofy Gophers Mining Club |
| `audit_phase` | 3A |
| `auditor` | Phase 3A metadata discovery (automated + review) |
| `audit_date` | 2026-06-09 |
| `audit_status` | complete |

## Input provided

### Policy IDs

```
075bc45055274a362eb5d0d86090f39ca269b5bd22abbce99d3e4a81
```

### Sample assets

| Label | Asset unit | Notes |
|-------|------------|-------|
| asset-001 | `075bc45055274a362eb5d0d86090f39ca269b5bd22abbce99d3e4a81526f68616e204a6f686e736f6e` | Blockfrost raw |
| asset-002 | `075bc45055274a362eb5d0d86090f39ca269b5bd22abbce99d3e4a814865747269636b204b6f626f6c6467726970` | Blockfrost raw |
| asset-003 | `075bc45055274a362eb5d0d86090f39ca269b5bd22abbce99d3e4a81526f736172696f207468652057656c6c2052656164` | Blockfrost raw |
| asset-004 | `075bc45055274a362eb5d0d86090f39ca269b5bd22abbce99d3e4a8152757675722042726973746c6561726d6f7572` | Blockfrost raw |
| asset-005 | `075bc45055274a362eb5d0d86090f39ca269b5bd22abbce99d3e4a81526f6e6e69652053746f726d636c6f616b` | Blockfrost raw |
| asset-006 | `075bc45055274a362eb5d0d86090f39ca269b5bd22abbce99d3e4a814775686f6e6520536c7567686f726e` | Blockfrost raw |
| asset-007 | `075bc45055274a362eb5d0d86090f39ca269b5bd22abbce99d3e4a8147696c766f72204772656d6461696e` | Blockfrost raw |
| asset-008 | `075bc45055274a362eb5d0d86090f39ca269b5bd22abbce99d3e4a8147726f6c6575732057656c6c616279` | Blockfrost raw |
| asset-009 | `075bc45055274a362eb5d0d86090f39ca269b5bd22abbce99d3e4a815370656e6365722042726f6d77656c6c` | Blockfrost raw |
| asset-010 | `075bc45055274a362eb5d0d86090f39ca269b5bd22abbce99d3e4a8152616e696f6e2044756e6772617468` | Blockfrost raw |

Raw samples directory: `research/raw-samples/goofy-gophers-mining-club/`

Files: `asset-001.json` … `asset-010.json` (Blockfrost raw, unmodified)

### Known problems (optional)

Phase 3A Top-100 include_now (TapTools rank 21). Type: gaming. Discovery only — no final definition in this pass.

---

## Metadata analysis

| Field | Finding |
|-------|---------|
| Metadata standard | CIP25v1 |
| Metadata root | `onchain_metadata` |
| Asset name encoding | hex (Blockfrost `asset_name` field) |
| CIP-25 layout notes | Minimal or custom layout |
| CIP-68 layout notes | Not observed in samples |
| Custom conventions | traits |

---

## Media analysis

| Field | Path or value | Source | Notes |
|-------|---------------|--------|-------|
| Image | `$.image[0]` | on-chain | `image` array; mediaType: image/png |
| Animation | — |  | |
| Files / multi-media | — |  | |
| Thumbnail | — | | |
| Collection logo | — | registry-only | |
| Collection banner | — | registry-only | |

---

## Trait analysis

| Field | Finding |
|-------|---------|
| Trait grouping style | minimal_or_custom |
| Primary trait root path | Minimal or custom layout |
| Canonical trait names | See inventory |
| Value types observed | string, number, array (collection-dependent) |
| Normalization requirements | Mostly none |
| Dynamic traits | no |

### Trait path inventory

| Canonical trait | Source path(s) | Value type | Normalization | Required |
|-----------------|----------------|------------|---------------|----------|
| traits | `$.traits` | string | none | no |
| collection | `$.collection` | string | none | no |

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
| info | Direct paths only; may need manual mapping |

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
| 1 | Media | image is array not string | C |
| 2 | License | No license metadata on asset | A |
| 3 | Royalties | No royalty metadata on asset | A |
| 4 | Custom | Collection-specific fields: traits | C |

---

## Scoring

```
parse_success_score: 85
trait_mapping_confidence: medium
media_mapping_confidence: high
social_mapping_confidence: medium
schema_fit: fits_with_notes
```

---

## Outputs

| Artifact | Path |
|----------|------|
| Raw samples | `research/raw-samples/goofy-gophers-mining-club/` |
| Audit report | `research/audits/goofy-gophers-mining-club.audit.md` |
| Generated definition | `registry/collections/goofy-gophers-mining-club.json` (prepare-phase placeholder only — **not finalized**) |
| Detailed finding | `research/findings/goofy-gophers-mining-club.md` |

---

## Notes

Detailed analysis: `research/findings/goofy-gophers-mining-club.md`. No schema, parser, or **final** definition changes in this pass.
