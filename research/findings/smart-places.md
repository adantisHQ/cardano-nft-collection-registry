# Findings: Smart Places

Phase 2 metadata discovery — 2026-06-08

**Policy ID:** `64036a8c21866b47d4597657151e1490a7c225caef4715b37b9eca38`  
**Samples:** 10 Blockfrost `GET /assets/{unit}` responses in `research/raw-samples/smart-places/`  
**Metadata-bearing samples:** 100%

---

## Metadata summary

Phase 2 art-first collection; tests generative/art metadata layouts without gaming or land parcel conventions.. Blockfrost standard signal: **CIP25v1**. Primary trait layout: **root_flat_keys** — Flat trait-like keys at metadata root.

Top-level keys observed: `lat`, `lng`, `url`, `name`, `files`, `hexId`, `image`, `place`, `country`, `mediaType`, `publisher`, `description`.

---

## Metadata standard

| Signal | Finding |
|--------|---------|
| Blockfrost `onchain_metadata_standard` | CIP25v1 |
| Layout class | root_flat_keys |
| Metadata root | `onchain_metadata` (Blockfrost asset response) |

---

## Trait layout

Flat trait-like keys at metadata root

- `lat`
- `lng`
- `hexId`
- `place`
- `country`
- `publisher`

---

## Media layout

- `image` string
- `files[]` multi-media
- mediaType: image/png

---

## Socials and links

### Socials

| Field | Value |
|-------|-------|
| — | not present on-chain |

### Links

| Field | Value |
|-------|-------|
| url | `https://smart-places.io/landplots/891f15ae257ffff` |

---

## License and royalties

| Area | Finding |
|------|---------|
| — | not present on-chain |

| Royalties | Not present in on-chain metadata samples |

---

## Custom fields

_No notable nested sections beyond standard fields_

---

## Expected registry mappings

- Trait extraction: Use `extraction.strategy: root_flat_keys` or per-key `direct_path`
- Media: `media_mappings.files` from `$.files[]`
- Identity: `$.name` where present

---

## Indexing caveats

- Raw samples are full Blockfrost asset responses; parsers must use `onchain_metadata` subtree

---

## Extraction strategy assessment

| Question | Answer |
|----------|--------|
| Are Phase 1 extraction strategies sufficient? | **Yes** — use `root_flat_keys` or direct paths |
| Recommended strategy | Use `extraction.strategy: root_flat_keys` or per-key `direct_path` |

---

## Sample inventory

| Label | Asset unit | Asset name (hex) | Metadata |
|-------|------------|------------------|----------|
| asset-001 | `64036a8c21866b47d4597657151e1490a7c225caef4715b37b9eca3830373634` | `30373634` | yes |
| asset-002 | `64036a8c21866b47d4597657151e1490a7c225caef4715b37b9eca3830373333` | `30373333` | yes |
| asset-003 | `64036a8c21866b47d4597657151e1490a7c225caef4715b37b9eca3831333334` | `31333334` | yes |
| asset-004 | `64036a8c21866b47d4597657151e1490a7c225caef4715b37b9eca3831353932` | `31353932` | yes |
| asset-005 | `64036a8c21866b47d4597657151e1490a7c225caef4715b37b9eca3831373334` | `31373334` | yes |
| asset-006 | `64036a8c21866b47d4597657151e1490a7c225caef4715b37b9eca3831393135` | `31393135` | yes |
| asset-007 | `64036a8c21866b47d4597657151e1490a7c225caef4715b37b9eca3831393739` | `31393739` | yes |
| asset-008 | `64036a8c21866b47d4597657151e1490a7c225caef4715b37b9eca3832303533` | `32303533` | yes |
| asset-009 | `64036a8c21866b47d4597657151e1490a7c225caef4715b37b9eca3832323933` | `32323933` | yes |
| asset-010 | `64036a8c21866b47d4597657151e1490a7c225caef4715b37b9eca3832343031` | `32343031` | yes |

---

## Schema classification preview

| Metric | Value |
|--------|-------|
| `schema_fit` | fits_with_notes |
| Failures logged | 4 (see audit) |

**Do not modify schema or definitions based on this document alone.** Cross-collection D-class review in `research/schema-gap-log.md`.
