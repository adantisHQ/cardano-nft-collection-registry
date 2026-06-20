# Collection Audit: KWIC - Keyboard Warriors Internet Cafe

Per-collection audit output for schema validation against real Cardano NFT collections.

---

## Audit metadata

| Field | Value |
|-------|-------|
| `collection_id` | `kwic-keyboard-warriors-internet-cafe` |
| `collection_name` | KWIC - Keyboard Warriors Internet Cafe |
| `audit_phase` | 3A |
| `auditor` | Phase 3A metadata discovery (automated + review) |
| `audit_date` | 2026-06-09 |
| `audit_status` | complete |

## Input provided

### Policy IDs

```
c72d0438330ed1346f4437fcc1c263ea38e933c1124c8d0f2abc6312
```

### Sample assets

| Label | Asset unit | Notes |
|-------|------------|-------|
| asset-001 | `c72d0438330ed1346f4437fcc1c263ea38e933c1124c8d0f2abc63124b57494330333931` | Blockfrost raw |
| asset-002 | `c72d0438330ed1346f4437fcc1c263ea38e933c1124c8d0f2abc63124b57494330393331` | Blockfrost raw |
| asset-003 | `c72d0438330ed1346f4437fcc1c263ea38e933c1124c8d0f2abc63124b57494337343131` | Blockfrost raw |
| asset-004 | `c72d0438330ed1346f4437fcc1c263ea38e933c1124c8d0f2abc63124b57494335343735` | Blockfrost raw |
| asset-005 | `c72d0438330ed1346f4437fcc1c263ea38e933c1124c8d0f2abc63124b57494337363333` | Blockfrost raw |
| asset-006 | `c72d0438330ed1346f4437fcc1c263ea38e933c1124c8d0f2abc63124b57494337333437` | Blockfrost raw |
| asset-007 | `c72d0438330ed1346f4437fcc1c263ea38e933c1124c8d0f2abc63124b57494336393635` | Blockfrost raw |
| asset-008 | `c72d0438330ed1346f4437fcc1c263ea38e933c1124c8d0f2abc63124b57494334323831` | Blockfrost raw |
| asset-009 | `c72d0438330ed1346f4437fcc1c263ea38e933c1124c8d0f2abc63124b57494334343339` | Blockfrost raw |
| asset-010 | `c72d0438330ed1346f4437fcc1c263ea38e933c1124c8d0f2abc63124b57494332363131` | Blockfrost raw |

Raw samples directory: `research/raw-samples/kwic-keyboard-warriors-internet-cafe/`

Files: `asset-001.json` … `asset-010.json` (Blockfrost raw, unmodified)

### Known problems (optional)

Phase 3A Top-100 include_now (TapTools rank 50). Type: gaming. Discovery only — no final definition in this pass.

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
| Body | `$.Body` | string | none | no |
| Head | `$.Head` | string | none | no |
| Side | `$.Side` | string | none | no |
| Bling | `$.Bling` | string | none | no |
| Faction | `$.Faction` | string | none | no |
| Background | `$.Background` | string | none | no |
| Foreground | `$.Foreground` | string | none | no |
| Back Attachment | `$.Back Attachment` | string | none | no |
| Head Attachment | `$.Head Attachment` | string | none | no |

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
| Raw samples | `research/raw-samples/kwic-keyboard-warriors-internet-cafe/` |
| Audit report | `research/audits/kwic-keyboard-warriors-internet-cafe.audit.md` |
| Generated definition | `registry/collections/kwic-keyboard-warriors-internet-cafe.json` (prepare-phase placeholder only — **not finalized**) |
| Detailed finding | `research/findings/kwic-keyboard-warriors-internet-cafe.md` |

---

## Notes

Detailed analysis: `research/findings/kwic-keyboard-warriors-internet-cafe.md`. No schema, parser, or **final** definition changes in this pass.
