# Collection Audit: Boss Planet Real Estate

Per-collection audit output for schema validation against real Cardano NFT collections.

---

## Audit metadata

| Field | Value |
|-------|-------|
| `collection_id` | `boss-planet-real-estate` |
| `collection_name` | Boss Planet Real Estate |
| `audit_phase` | 2 |
| `auditor` | Phase 2 metadata discovery (automated + review) |
| `audit_date` | 2026-06-08 |
| `audit_status` | complete |

## Input provided

### Policy IDs

```
5a2cdc6e3aa9612fe4676672f443e7efd39c309d45e7919a4bf27750
```

### Sample assets

| Label | Asset unit | Notes |
|-------|------------|-------|
| asset-001 | `5a2cdc6e3aa9612fe4676672f443e7efd39c309d45e7919a4bf27750426f7373506c616e657444697374726963744f6e6537323331` | Blockfrost raw |
| asset-002 | `5a2cdc6e3aa9612fe4676672f443e7efd39c309d45e7919a4bf27750426f7373506c616e657444697374726963744f6e6537323835` | Blockfrost raw |
| asset-003 | `5a2cdc6e3aa9612fe4676672f443e7efd39c309d45e7919a4bf27750426f7373506c616e657444697374726963744f6e6537333031` | Blockfrost raw |
| asset-004 | `5a2cdc6e3aa9612fe4676672f443e7efd39c309d45e7919a4bf27750426f7373506c616e657444697374726963744f6e6537333432` | Blockfrost raw |
| asset-005 | `5a2cdc6e3aa9612fe4676672f443e7efd39c309d45e7919a4bf27750426f7373506c616e657444697374726963744f6e6537343138` | Blockfrost raw |
| asset-006 | `5a2cdc6e3aa9612fe4676672f443e7efd39c309d45e7919a4bf27750426f7373506c616e657444697374726963744f6e6537343534` | Blockfrost raw |
| asset-007 | `5a2cdc6e3aa9612fe4676672f443e7efd39c309d45e7919a4bf27750426f7373506c616e657444697374726963744f6e6537353335` | Blockfrost raw |
| asset-008 | `5a2cdc6e3aa9612fe4676672f443e7efd39c309d45e7919a4bf27750426f7373506c616e657444697374726963744f6e6537353634` | Blockfrost raw |
| asset-009 | `5a2cdc6e3aa9612fe4676672f443e7efd39c309d45e7919a4bf27750426f7373506c616e657444697374726963744f6e6537353834` | Blockfrost raw |
| asset-010 | `5a2cdc6e3aa9612fe4676672f443e7efd39c309d45e7919a4bf27750426f7373506c616e657444697374726963744f6e6537363630` | Blockfrost raw |

Raw samples directory: `research/raw-samples/boss-planet-real-estate/`

Files: `asset-001.json` … `asset-010.json` (Blockfrost raw, unmodified)

### Known problems (optional)

Phase 2 land/real-estate variant in Boss Cat universe; tests parcel-style fields distinct from Pavia/Cornucopias land claims.

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
| Image | `$.image` | on-chain | `image` string |
| Animation | — |  | |
| Files / multi-media | — |  | |
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
| District | `$.District` | string | none | no |
| XCoordinate | `$.XCoordinate` | string | none | no |
| YCoordinate | `$.YCoordinate` | string | none | no |

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
| Raw samples | `research/raw-samples/boss-planet-real-estate/` |
| Audit report | `research/audits/boss-planet-real-estate.audit.md` |
| Generated definition | `registry/collections/boss-planet-real-estate.json` (placeholder only; not finalized) |
| Detailed finding | `research/findings/boss-planet-real-estate.md` |

---

## Notes

Detailed analysis: `research/findings/boss-planet-real-estate.md`. No schema, parser, or final definition changes in this pass.
