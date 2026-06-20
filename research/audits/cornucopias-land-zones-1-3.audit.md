# Collection Audit: Cornucopias Land

Per-collection audit output for schema validation against real Cardano NFT collections.

---

## Audit metadata

| Field | Value |
|-------|-------|
| `collection_id` | `cornucopias-land-zones-1-3` |
| `collection_name` | Cornucopias Land |
| `audit_phase` | 1 |
| `auditor` | Phase 1 metadata discovery (automated + review) |
| `audit_date` | 2026-06-08 |
| `audit_status` | complete |

## Input provided

### Policy IDs

```
07b39a8ead0ef1e3054e816a3b6910060beaf2210fded63fb90ce137
```

### Sample assets

| Label | Asset unit | Notes |
|-------|------------|-------|
| asset-001 | `07b39a8ead0ef1e3054e816a3b6910060beaf2210fded63fb90ce137434c504331534d3030303233` | Blockfrost raw |
| asset-002 | `07b39a8ead0ef1e3054e816a3b6910060beaf2210fded63fb90ce137434c504331534d3030303033` | Blockfrost raw |
| asset-003 | `07b39a8ead0ef1e3054e816a3b6910060beaf2210fded63fb90ce137434c504331534d3030303134` | Blockfrost raw |
| asset-004 | `07b39a8ead0ef1e3054e816a3b6910060beaf2210fded63fb90ce137434c504331534d3030303230` | Blockfrost raw |
| asset-005 | `07b39a8ead0ef1e3054e816a3b6910060beaf2210fded63fb90ce137434c504331534d3030303036` | Blockfrost raw |
| asset-006 | `07b39a8ead0ef1e3054e816a3b6910060beaf2210fded63fb90ce137434c504331534d3030303330` | Blockfrost raw |
| asset-007 | `07b39a8ead0ef1e3054e816a3b6910060beaf2210fded63fb90ce137434c504331534d3030303639` | Blockfrost raw |
| asset-008 | `07b39a8ead0ef1e3054e816a3b6910060beaf2210fded63fb90ce137434c504331534d3030303731` | Blockfrost raw |
| asset-009 | `07b39a8ead0ef1e3054e816a3b6910060beaf2210fded63fb90ce137434c504331534d3030303930` | Blockfrost raw |
| asset-010 | `07b39a8ead0ef1e3054e816a3b6910060beaf2210fded63fb90ce137434c504331534d3030313134` | Blockfrost raw |

Raw samples directory: `research/raw-samples/cornucopias-land-zones-1-3/`

Files: `asset-001.json` … `asset-010.json` (Blockfrost raw, unmodified)

### Known problems (optional)

Phase 1 metadata discovery via Blockfrost. See `research/findings/cornucopias-land-zones-1-3.md`.

---

## Metadata analysis

| Field | Finding |
|-------|---------|
| Metadata standard | CIP25v1 |
| Metadata root | `onchain_metadata` |
| Asset name encoding | hex (Blockfrost `asset_name` field) |
| CIP-25 layout notes | Flat or custom layouts observed |
| CIP-68 layout notes | Not observed in samples |
| Custom conventions | Land-claim specific IDs (`tag`, `gameid`, `fullName`) |

---

## Media analysis

| Field | Path or value | Source | Notes |
|-------|---------------|--------|-------|
| Image | `$.image` | on-chain | IPFS in samples |
| Animation | — |  | |
| Files / multi-media | `$.files[]` | on-chain | |
| Thumbnail | — | | |
| Collection logo | — | registry-only | |
| Collection banner | — | registry-only | |

---

## Trait analysis

| Field | Finding |
|-------|---------|
| Trait grouping style | `attributes |
| Primary trait root path | `$.attributes` + root scalars |
| Canonical trait names | See inventory |
| Value types observed | string, array, number (collection-dependent) |
| Normalization requirements | Mostly none |
| Dynamic traits | no |

### Trait path inventory

| Canonical trait | Source path(s) | Value type | Normalization | Required |
|-----------------|----------------|------------|---------------|----------|
| zoneChoices | `$.attributes.zoneChoices` | array | none | no |
| rarity | `$.rarity` | string | none | no |
| season | `$.season` | string | none | no |
| typeClass | `$.typeClass` | string | none | no |
| gameid | `$.gameid` | string | none | no |

---

## Socials

| Platform | Location or explicit value | Status |
|----------|----------------------------|--------|
| x | — | missing |
| discord | — | missing |
| other | `$.media.Website`, `$.media.Link Tree` | found |

---

## Links

| Link type | Location or explicit value | Status |
|-----------|----------------------------|--------|
| website | `$.media.Website` found | found |
| mint | — | missing |
| documentation | — | missing |
| other | — | Link Tree in media object |

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
| `schema_fit` | fits_with_notes |
| Proposed definition status | partial (discovery complete; definition not updated in this phase) |
| Blockers | None requiring schema change in isolation |

---

## Failures

| # | Area | Description | Classification |
|---|------|-------------|----------------|
| 1 | Socials | Website/link tree under media object, not standard social keys | C |
| 2 | License | No license metadata on asset | A |
| 3 | Royalties | No royalty metadata | A |

---

## Scoring

```
parse_success_score: 93
trait_mapping_confidence: high
media_mapping_confidence: high
social_mapping_confidence: medium
schema_fit: fits_with_notes
```

---

## Outputs

| Artifact | Path |
|----------|------|
| Raw samples | `research/raw-samples/cornucopias-land-zones-1-3/` |
| Audit report | `research/audits/cornucopias-land-zones-1-3.audit.md` |
| Generated definition | `registry/collections/cornucopias-land-zones-1-3.json` (placeholder; not modified) |
| Detailed finding | `research/findings/cornucopias-land-zones-1-3.md` |

---

## Notes

Detailed analysis: `research/findings/cornucopias-land-zones-1-3.md`. No schema or definition changes performed in this pass.
