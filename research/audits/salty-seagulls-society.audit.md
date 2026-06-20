# Collection Audit: Salty Seagulls Society

Per-collection audit output for schema validation against real Cardano NFT collections.

---

## Audit metadata

| Field | Value |
|-------|-------|
| `collection_id` | `salty-seagulls-society` |
| `collection_name` | Salty Seagulls Society |
| `audit_phase` | 3A |
| `auditor` | Phase 3A metadata discovery (automated + review) |
| `audit_date` | 2026-06-09 |
| `audit_status` | complete |

## Input provided

### Policy IDs

```
5329a9b87459e1df8e86ce56bae4b3770862c0969011e6faf474b65f
```

### Sample assets

| Label | Asset unit | Notes |
|-------|------------|-------|
| asset-001 | `5329a9b87459e1df8e86ce56bae4b3770862c0969011e6faf474b65f41646d6972616c42726164646f636b48756e74696e67746f6e` | Blockfrost raw |
| asset-002 | `5329a9b87459e1df8e86ce56bae4b3770862c0969011e6faf474b65f41646d6972616c47756c6c6448756e74696e67746f6e` | Blockfrost raw |
| asset-003 | `5329a9b87459e1df8e86ce56bae4b3770862c0969011e6faf474b65f4c6f7264486173746f64656e4d6176657269636b73` | Blockfrost raw |
| asset-004 | `5329a9b87459e1df8e86ce56bae4b3770862c0969011e6faf474b65f456e7465727461696e6572416e616c6973614e61766167696f` | Blockfrost raw |
| asset-005 | `5329a9b87459e1df8e86ce56bae4b3770862c0969011e6faf474b65f4c6f726444616e7362794d6176657269636b73` | Blockfrost raw |
| asset-006 | `5329a9b87459e1df8e86ce56bae4b3770862c0969011e6faf474b65f4361707461696e426f6a61636b48756e74696e67746f6e` | Blockfrost raw |
| asset-007 | `5329a9b87459e1df8e86ce56bae4b3770862c0969011e6faf474b65f456e7465727461696e65724368616e63656c6c6f724e617a617265` | Blockfrost raw |
| asset-008 | `5329a9b87459e1df8e86ce56bae4b3770862c0969011e6faf474b65f43656c65627269747947756c6c3137` | Blockfrost raw |
| asset-009 | `5329a9b87459e1df8e86ce56bae4b3770862c0969011e6faf474b65f456e7465727461696e65724275667942616e7a6169` | Blockfrost raw |
| asset-010 | `5329a9b87459e1df8e86ce56bae4b3770862c0969011e6faf474b65f4361707461696e4e696d726f64486f737365676f72` | Blockfrost raw |

Raw samples directory: `research/raw-samples/salty-seagulls-society/`

Files: `asset-001.json` … `asset-010.json` (Blockfrost raw, unmodified)

### Known problems (optional)

Phase 3A Top-100 include_now (TapTools rank 40). Type: gaming. Discovery only — no final definition in this pass.

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
| Hat | `$.Hat` | string | none | no |
| Beak | `$.Beak` | string | none | no |
| Eyes | `$.Eyes` | string | none | no |
| Role | `$.Role` | string | none | no |
| Level | `$.Level` | string | none | no |
| Shirt | `$.Shirt` | string | none | no |
| Tattoo | `$.Tattoo` | string | none | no |
| Glasses | `$.Glasses` | string | none | no |
| Earrings | `$.Earrings` | string | none | no |
| Feathers | `$.Feathers` | string | none | no |
| Homeland | `$.Homeland` | string | none | no |
| Background | `$.Background` | string | none | no |
| Mated Pair | `$.Mated Pair` | string | none | no |

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
| Raw samples | `research/raw-samples/salty-seagulls-society/` |
| Audit report | `research/audits/salty-seagulls-society.audit.md` |
| Generated definition | `registry/collections/salty-seagulls-society.json` (prepare-phase placeholder only — **not finalized**) |
| Detailed finding | `research/findings/salty-seagulls-society.md` |

---

## Notes

Detailed analysis: `research/findings/salty-seagulls-society.md`. No schema, parser, or **final** definition changes in this pass.
