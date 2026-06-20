# Collection Audit: Introverts Membership Card

Per-collection audit output for schema validation against real Cardano NFT collections.

---

## Audit metadata

| Field | Value |
|-------|-------|
| `collection_id` | `introverts-membership-card` |
| `collection_name` | Introverts Membership Card |
| `audit_phase` | 2 |
| `auditor` | Phase 2 metadata discovery (automated + review) |
| `audit_date` | 2026-06-08 |
| `audit_status` | complete |

## Input provided

### Policy IDs

```
9b542bc33521163a7ff3a05d1df1bcc0c0ec6a0638337e4b2870f6ea
```

### Sample assets

| Label | Asset unit | Notes |
|-------|------------|-------|
| asset-001 | `9b542bc33521163a7ff3a05d1df1bcc0c0ec6a0638337e4b2870f6ea496e74726f76657274736d6361726430323133` | Blockfrost raw |
| asset-002 | `9b542bc33521163a7ff3a05d1df1bcc0c0ec6a0638337e4b2870f6ea496e74726f76657274736d6361726430303637` | Blockfrost raw |
| asset-003 | `9b542bc33521163a7ff3a05d1df1bcc0c0ec6a0638337e4b2870f6ea496e74726f76657274736d6361726431343536` | Blockfrost raw |
| asset-004 | `9b542bc33521163a7ff3a05d1df1bcc0c0ec6a0638337e4b2870f6ea496e74726f76657274736d6361726430393837` | Blockfrost raw |
| asset-005 | `9b542bc33521163a7ff3a05d1df1bcc0c0ec6a0638337e4b2870f6ea496e74726f76657274736d6361726431313539` | Blockfrost raw |
| asset-006 | `9b542bc33521163a7ff3a05d1df1bcc0c0ec6a0638337e4b2870f6ea496e74726f76657274736d6361726430393435` | Blockfrost raw |
| asset-007 | `9b542bc33521163a7ff3a05d1df1bcc0c0ec6a0638337e4b2870f6ea496e74726f76657274736d6361726430343830` | Blockfrost raw |
| asset-008 | `9b542bc33521163a7ff3a05d1df1bcc0c0ec6a0638337e4b2870f6ea496e74726f76657274736d6361726431333932` | Blockfrost raw |
| asset-009 | `9b542bc33521163a7ff3a05d1df1bcc0c0ec6a0638337e4b2870f6ea496e74726f76657274736d6361726430393331` | Blockfrost raw |
| asset-010 | `9b542bc33521163a7ff3a05d1df1bcc0c0ec6a0638337e4b2870f6ea496e74726f76657274736d6361726430393439` | Blockfrost raw |

Raw samples directory: `research/raw-samples/introverts-membership-card/`

Files: `asset-001.json` … `asset-010.json` (Blockfrost raw, unmodified)

### Known problems (optional)

Phase 2 membership pass pattern; tests access/tier/card fields rather than trait-grid PFP metadata.

---

## Metadata analysis

| Field | Finding |
|-------|---------|
| Metadata standard | CIP25v1 |
| Metadata root | `onchain_metadata` |
| Asset name encoding | hex (Blockfrost `asset_name` field) |
| CIP-25 layout notes | `Official Links` array of single-key objects |
| CIP-68 layout notes | Not observed in samples |
| Custom conventions | Official Links |

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
| Trait grouping style | array_singleton_object |
| Primary trait root path | `Official Links` array of single-key objects |
| Canonical trait names | See inventory |
| Value types observed | string, number, array (collection-dependent) |
| Normalization requirements | Mostly none |
| Dynamic traits | no |

### Trait path inventory

| Canonical trait | Source path(s) | Value type | Normalization | Required |
|-----------------|----------------|------------|---------------|----------|
| Website | `$.<section>[n].Website` | string | none | no |
| Twitter | `$.<section>[n].Twitter` | string | none | no |
| Discord | `$.<section>[n].Discord` | string | none | no |

---

## Socials

| Platform | Location or explicit value | Status |
|----------|----------------------------|--------|
| twitter | `$.Twitter` or nested | found |
| discord | `$.Discord` or nested | found |

---

## Links

| Link type | Location or explicit value | Status |
|-----------|----------------------------|--------|
| website | Website | found |
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
| warning | Use `extraction.strategy: array_singleton_object` (GAP-001 resolved in Phase 1) |

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
| 1 | Traits | Trait fields in array-of-single-key-object sections | D |
| 2 | License | No license metadata on asset | A |
| 3 | Royalties | No royalty metadata on asset | A |
| 4 | Custom | Collection-specific fields: Official Links | C |

---

## Scoring

```
parse_success_score: 85
trait_mapping_confidence: high
media_mapping_confidence: high
social_mapping_confidence: medium
schema_fit: fits_with_notes
```

---

## Outputs

| Artifact | Path |
|----------|------|
| Raw samples | `research/raw-samples/introverts-membership-card/` |
| Audit report | `research/audits/introverts-membership-card.audit.md` |
| Generated definition | `registry/collections/introverts-membership-card.json` (placeholder only; not finalized) |
| Detailed finding | `research/findings/introverts-membership-card.md` |

---

## Notes

Detailed analysis: `research/findings/introverts-membership-card.md`. No schema, parser, or final definition changes in this pass.
