# Collection Audit: Dead Rabbit Resurrection Society

Per-collection audit output for schema validation against real Cardano NFT collections.

---

## Audit metadata

| Field | Value |
|-------|-------|
| `collection_id` | `dead-rabbit-resurrection-society` |
| `collection_name` | Dead Rabbit Resurrection Society |
| `audit_phase` | 3A |
| `auditor` | Phase 3A metadata discovery (automated + review) |
| `audit_date` | 2026-06-09 |
| `audit_status` | complete |

## Input provided

### Policy IDs

```
de2340edc45629456bf695200e8ea32f948a653b21ada10bc6f0c554
```

### Sample assets

| Label | Asset unit | Notes |
|-------|------------|-------|
| asset-001 | `de2340edc45629456bf695200e8ea32f948a653b21ada10bc6f0c5544452525335383030` | Blockfrost raw |
| asset-002 | `de2340edc45629456bf695200e8ea32f948a653b21ada10bc6f0c5544452525336313536` | Blockfrost raw |
| asset-003 | `de2340edc45629456bf695200e8ea32f948a653b21ada10bc6f0c5544452525332383431` | Blockfrost raw |
| asset-004 | `de2340edc45629456bf695200e8ea32f948a653b21ada10bc6f0c5544452525333393933` | Blockfrost raw |
| asset-005 | `de2340edc45629456bf695200e8ea32f948a653b21ada10bc6f0c5544452525336363035` | Blockfrost raw |
| asset-006 | `de2340edc45629456bf695200e8ea32f948a653b21ada10bc6f0c5544452525332313638` | Blockfrost raw |
| asset-007 | `de2340edc45629456bf695200e8ea32f948a653b21ada10bc6f0c5544452525330333538` | Blockfrost raw |
| asset-008 | `de2340edc45629456bf695200e8ea32f948a653b21ada10bc6f0c5544452525330393232` | Blockfrost raw |
| asset-009 | `de2340edc45629456bf695200e8ea32f948a653b21ada10bc6f0c5544452525331373331` | Blockfrost raw |
| asset-010 | `de2340edc45629456bf695200e8ea32f948a653b21ada10bc6f0c5544452525332353636` | Blockfrost raw |

Raw samples directory: `research/raw-samples/dead-rabbit-resurrection-society/`

Files: `asset-001.json` … `asset-010.json` (Blockfrost raw, unmodified)

### Known problems (optional)

Phase 3A Top-100 include_now (TapTools rank 22). Type: gaming. Discovery only — no final definition in this pass.

---

## Metadata analysis

| Field | Finding |
|-------|---------|
| Metadata standard | CIP25v1 |
| Metadata root | `onchain_metadata` |
| Asset name encoding | hex (Blockfrost `asset_name` field) |
| CIP-25 layout notes | Minimal or custom layout |
| CIP-68 layout notes | Not observed in samples |
| Custom conventions | Attributes |

---

## Media analysis

| Field | Path or value | Source | Notes |
|-------|---------------|--------|-------|
| Image | `$.image` | on-chain | `image` string; mediaType: image/jpg |
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
| Twitter | `$.Twitter` | string | none | no |
| Publisher | `$.Publisher` | string | none | no |
| Attributes | `$.Attributes` | string | none | no |

---

## Socials

| Platform | Location or explicit value | Status |
|----------|----------------------------|--------|
| twitter | `$.Twitter` or nested | found |

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
| 1 | Links | No website/external links on asset metadata | A |
| 2 | License | No license metadata on asset | A |
| 3 | Royalties | No royalty metadata on asset | A |
| 4 | Custom | Collection-specific fields: Attributes | C |

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
| Raw samples | `research/raw-samples/dead-rabbit-resurrection-society/` |
| Audit report | `research/audits/dead-rabbit-resurrection-society.audit.md` |
| Generated definition | `registry/collections/dead-rabbit-resurrection-society.json` (prepare-phase placeholder only — **not finalized**) |
| Detailed finding | `research/findings/dead-rabbit-resurrection-society.md` |

---

## Notes

Detailed analysis: `research/findings/dead-rabbit-resurrection-society.md`. No schema, parser, or **final** definition changes in this pass.
