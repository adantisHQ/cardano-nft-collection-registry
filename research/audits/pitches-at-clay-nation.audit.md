# Collection Audit: Pitches at Clay Nation

Per-collection audit output for schema validation against real Cardano NFT collections.

---

## Audit metadata

| Field | Value |
|-------|-------|
| `collection_id` | `pitches-at-clay-nation` |
| `collection_name` | Pitches at Clay Nation |
| `audit_phase` | 2 |
| `auditor` | Phase 2 metadata discovery (automated + review) |
| `audit_date` | 2026-06-08 |
| `audit_status` | complete |

## Input provided

### Policy IDs

```
13e3f9964fe386930ec178d12a43c96a7f5841270c2146fc509a9f3e
```

### Sample assets

| Label | Asset unit | Notes |
|-------|------------|-------|
| asset-001 | `13e3f9964fe386930ec178d12a43c96a7f5841270c2146fc509a9f3e436c61794e6174696f6e506974636831` | Blockfrost raw |
| asset-002 | `13e3f9964fe386930ec178d12a43c96a7f5841270c2146fc509a9f3e436c61794e6174696f6e506974636832` | Blockfrost raw |
| asset-003 | `13e3f9964fe386930ec178d12a43c96a7f5841270c2146fc509a9f3e436c61794e6174696f6e50697463683138` | Blockfrost raw |
| asset-004 | `13e3f9964fe386930ec178d12a43c96a7f5841270c2146fc509a9f3e436c61794e6174696f6e50697463683336` | Blockfrost raw |
| asset-005 | `13e3f9964fe386930ec178d12a43c96a7f5841270c2146fc509a9f3e436c61794e6174696f6e50697463683535` | Blockfrost raw |
| asset-006 | `13e3f9964fe386930ec178d12a43c96a7f5841270c2146fc509a9f3e436c61794e6174696f6e50697463683733` | Blockfrost raw |
| asset-007 | `13e3f9964fe386930ec178d12a43c96a7f5841270c2146fc509a9f3e436c61794e6174696f6e50697463683932` | Blockfrost raw |
| asset-008 | `13e3f9964fe386930ec178d12a43c96a7f5841270c2146fc509a9f3e436c61794e6174696f6e5069746368313130` | Blockfrost raw |
| asset-009 | `13e3f9964fe386930ec178d12a43c96a7f5841270c2146fc509a9f3e436c61794e6174696f6e5069746368313239` | Blockfrost raw |
| asset-010 | `13e3f9964fe386930ec178d12a43c96a7f5841270c2146fc509a9f3e436c61794e6174696f6e5069746368313437` | Blockfrost raw |

Raw samples directory: `research/raw-samples/pitches-at-clay-nation/`

Files: `asset-001.json` … `asset-010.json` (Blockfrost raw, unmodified)

### Known problems (optional)

Phase 2 multi-policy: Clay Nation sub-collection (land/pitch assets); tests ecosystem policy boundaries and layout drift from core Clay Nation.

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
| Trait grouping style | root_flat_keys |
| Primary trait root path | Flat trait-like keys at metadata root |
| Canonical trait names | See inventory |
| Value types observed | string, number, array (collection-dependent) |
| Normalization requirements | Mostly none |
| Dynamic traits | no |

### Trait path inventory

| Canonical trait | Source path(s) | Value type | Normalization | Required |
|-----------------|----------------|------------|---------------|----------|
| X | `$.X` | string | none | no |
| Y | `$.Y` | string | none | no |
| Size | `$.Size` | string | none | no |
| Zone | `$.Zone` | string | none | no |
| Serial # | `$.Serial #` | string | none | no |

---

## Socials

| Platform | Location or explicit value | Status |
|----------|----------------------------|--------|
| x | `$.X` or nested | found |

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
| 2 | Links | No website/external links on asset metadata | A |
| 3 | License | No license metadata on asset | A |
| 4 | Royalties | No royalty metadata on asset | A |

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
| Raw samples | `research/raw-samples/pitches-at-clay-nation/` |
| Audit report | `research/audits/pitches-at-clay-nation.audit.md` |
| Generated definition | `registry/collections/pitches-at-clay-nation.json` (placeholder only; not finalized) |
| Detailed finding | `research/findings/pitches-at-clay-nation.md` |

---

## Notes

Detailed analysis: `research/findings/pitches-at-clay-nation.md`. No schema, parser, or final definition changes in this pass.
