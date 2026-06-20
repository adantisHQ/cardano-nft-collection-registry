# Collection Audit: Jellycubes

Per-collection audit output for schema validation against real Cardano NFT collections.

---

## Audit metadata

| Field | Value |
|-------|-------|
| `collection_id` | `jellycubes` |
| `collection_name` | Jellycubes |
| `audit_phase` | 1 |
| `auditor` | Phase 1 metadata discovery (automated + review) |
| `audit_date` | 2026-06-08 |
| `audit_status` | complete |

## Input provided

### Policy IDs

```
3ee441f40fe395a2e98eea1df7cf8816b0fca3d5d164893596ce306d
```

### Sample assets

| Label | Asset unit | Notes |
|-------|------------|-------|
| asset-001 | `3ee441f40fe395a2e98eea1df7cf8816b0fca3d5d164893596ce306d` | Blockfrost raw |
| asset-002 | `3ee441f40fe395a2e98eea1df7cf8816b0fca3d5d164893596ce306d4a656c6c79637562652023323931` | Blockfrost raw |
| asset-003 | `3ee441f40fe395a2e98eea1df7cf8816b0fca3d5d164893596ce306d4a656c6c79637562652023313035` | Blockfrost raw |
| asset-004 | `3ee441f40fe395a2e98eea1df7cf8816b0fca3d5d164893596ce306d4a656c6c796375626520233930` | Blockfrost raw |
| asset-005 | `3ee441f40fe395a2e98eea1df7cf8816b0fca3d5d164893596ce306d4a656c6c7963756265202331303831` | Blockfrost raw |
| asset-006 | `3ee441f40fe395a2e98eea1df7cf8816b0fca3d5d164893596ce306d4a656c6c79637562652023323132` | Blockfrost raw |
| asset-007 | `3ee441f40fe395a2e98eea1df7cf8816b0fca3d5d164893596ce306d4a656c6c7963756265202331303733` | Blockfrost raw |
| asset-008 | `3ee441f40fe395a2e98eea1df7cf8816b0fca3d5d164893596ce306d4a656c6c79637562652023393435` | Blockfrost raw |
| asset-009 | `3ee441f40fe395a2e98eea1df7cf8816b0fca3d5d164893596ce306d4a656c6c7963756265202331313133` | Blockfrost raw |
| asset-010 | `3ee441f40fe395a2e98eea1df7cf8816b0fca3d5d164893596ce306d4a656c6c796375626520233237` | Blockfrost raw |

Raw samples directory: `research/raw-samples/jellycubes/`

Files: `asset-001.json` … `asset-010.json` (Blockfrost raw, unmodified)

### Known problems (optional)

Phase 1 metadata discovery via Blockfrost. See `research/findings/jellycubes.md`.

---

## Metadata analysis

| Field | Finding |
|-------|---------|
| Metadata standard | CIP25v1 |
| Metadata root | `onchain_metadata` |
| Asset name encoding | hex (Blockfrost `asset_name` field) |
| CIP-25 layout notes | Flat or custom layouts observed |
| CIP-68 layout notes | Not observed in samples |
| Custom conventions | `project`, combat scores, cube assembly part keys |

---

## Media analysis

| Field | Path or value | Source | Notes |
|-------|---------------|--------|-------|
| Image | `$.image[0]` | on-chain | IPFS in samples |
| Animation | — |  | |
| Files / multi-media | — |  | |
| Thumbnail | — | | |
| Collection logo | — | registry-only | |
| Collection banner | — | registry-only | |

---

## Trait analysis

| Field | Finding |
|-------|---------|
| Trait grouping style | Flat root keys (Class, Face, stats, cube parts); numeric and string values |
| Primary trait root path | metadata root (flat keys) |
| Canonical trait names | See inventory |
| Value types observed | string, array, number (collection-dependent) |
| Normalization requirements | Mostly none |
| Dynamic traits | no |

### Trait path inventory

| Canonical trait | Source path(s) | Value type | Normalization | Required |
|-----------------|----------------|------------|---------------|----------|
| Class | `$.Class` | string/number | none | no |
| Face | `$.Face` | string/number | none | no |
| Block | `$.Block` | string/number | none | no |
| Main | `$.Main` | string/number | none | no |
| Secondary | `$.Secondary` | string/number | none | no |
| Backgrounds | `$.Backgrounds` | string/number | none | no |
| Combat Score | `$.Combat Score` | string/number | none | no |

---

## Socials

| Platform | Location or explicit value | Status |
|----------|----------------------------|--------|
| x | `$.Twitter` | found |
| discord | — | missing |
| website | `$.Website` | found |

---

## Links

| Link type | Location or explicit value | Status |
|-----------|----------------------------|--------|
| website | `$.Website` found | found |
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
| `schema_fit` | fits_with_notes |
| Proposed definition status | partial (discovery complete; definition not updated in this phase) |
| Blockers | None requiring schema change in isolation |

---

## Failures

| # | Area | Description | Classification |
|---|------|-------------|----------------|
| 1 | Traits | Traits at metadata root, not attributes object | C |
| 2 | Media | image is array not string | C |
| 3 | Identity | Description split across string array | C |
| 4 | License | No license metadata | A |
| 5 | Royalties | No royalty metadata | A |

---

## Scoring

```
parse_success_score: 91
trait_mapping_confidence: high
media_mapping_confidence: medium
social_mapping_confidence: high
schema_fit: fits_with_notes
```

---

## Outputs

| Artifact | Path |
|----------|------|
| Raw samples | `research/raw-samples/jellycubes/` |
| Audit report | `research/audits/jellycubes.audit.md` |
| Generated definition | `registry/collections/jellycubes.json` (placeholder; not modified) |
| Detailed finding | `research/findings/jellycubes.md` |

---

## Notes

Detailed analysis: `research/findings/jellycubes.md`. No schema or definition changes performed in this pass.
