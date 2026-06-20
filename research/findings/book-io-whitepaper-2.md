# Findings: Book.io - Whitepaper 2.0

Phase 2 metadata discovery — 2026-06-08

**Policy ID:** `b1f614be8ed0921f2d3fc4d013f2ab076fe62db43b5bdcce686c4377`  
**Samples:** 10 Blockfrost `GET /assets/{unit}` responses in `research/raw-samples/book-io-whitepaper-2/`  
**Metadata-bearing samples:** 100%

---

## Metadata summary

Phase 2 document/whitepaper NFT; candidate for on-chain license, terms, or rights fields absent in Phase 1 samples.. Blockfrost standard signal: **CIP25v1**. Primary trait layout: **attributes_object** — `attributes` object map.

Top-level keys observed: `id`, `data`, `name`, `files`, `image`, `sha256`, `authors`, `website`, `attributes`, `description`, `extraAttributes`.

---

## Metadata standard

| Signal | Finding |
|--------|---------|
| Blockfrost `onchain_metadata_standard` | CIP25v1 |
| Layout class | attributes_object |
| Metadata root | `onchain_metadata` (Blockfrost asset response) |

---

## Trait layout

`attributes` object map

- `Variation`
- `Cover Theme`

---

## Media layout

- `image` string
- `files[]` multi-media

---

## Socials and links

### Socials

| Field | Value |
|-------|-------|
| — | not present on-chain |

### Links

| Field | Value |
|-------|-------|
| website | `https://book.io` |

---

## License and royalties

| Area | Finding |
|------|---------|
| — | not present on-chain |

| Royalties | Not present in on-chain metadata samples |

---

## Custom fields

- `authors` (nested object or section)
- `attributes` (nested object or section)
- `extraAttributes` (nested object or section)

---

## Expected registry mappings

- Trait extraction: Use `direct_path` under `$.attributes.<key>`
- Media: `media_mappings.files` from `$.files[]`
- Identity: `$.name` where present

---

## Indexing caveats

- Raw samples are full Blockfrost asset responses; parsers must use `onchain_metadata` subtree

---

## Extraction strategy assessment

| Question | Answer |
|----------|--------|
| Are Phase 1 extraction strategies sufficient? | **Yes** — direct paths under `attributes` |
| Recommended strategy | Use `direct_path` under `$.attributes.<key>` |

---

## Sample inventory

| Label | Asset unit | Asset name (hex) | Metadata |
|-------|------------|------------------|----------|
| asset-001 | `b1f614be8ed0921f2d3fc4d013f2ab076fe62db43b5bdcce686c4377426f6f6b57686974653234363730` | `426f6f6b57686974653234363730` | yes |
| asset-002 | `b1f614be8ed0921f2d3fc4d013f2ab076fe62db43b5bdcce686c4377426f6f6b57686974653230323039` | `426f6f6b57686974653230323039` | yes |
| asset-003 | `b1f614be8ed0921f2d3fc4d013f2ab076fe62db43b5bdcce686c4377426f6f6b57686974653233363636` | `426f6f6b57686974653233363636` | yes |
| asset-004 | `b1f614be8ed0921f2d3fc4d013f2ab076fe62db43b5bdcce686c4377426f6f6b57686974653232313134` | `426f6f6b57686974653232313134` | yes |
| asset-005 | `b1f614be8ed0921f2d3fc4d013f2ab076fe62db43b5bdcce686c4377426f6f6b57686974653230363838` | `426f6f6b57686974653230363838` | yes |
| asset-006 | `b1f614be8ed0921f2d3fc4d013f2ab076fe62db43b5bdcce686c4377426f6f6b57686974653230373631` | `426f6f6b57686974653230373631` | yes |
| asset-007 | `b1f614be8ed0921f2d3fc4d013f2ab076fe62db43b5bdcce686c4377426f6f6b57686974653230373233` | `426f6f6b57686974653230373233` | yes |
| asset-008 | `b1f614be8ed0921f2d3fc4d013f2ab076fe62db43b5bdcce686c4377426f6f6b57686974653233363837` | `426f6f6b57686974653233363837` | yes |
| asset-009 | `b1f614be8ed0921f2d3fc4d013f2ab076fe62db43b5bdcce686c4377426f6f6b57686974653233333439` | `426f6f6b57686974653233333439` | yes |
| asset-010 | `b1f614be8ed0921f2d3fc4d013f2ab076fe62db43b5bdcce686c4377426f6f6b57686974653233363436` | `426f6f6b57686974653233363436` | yes |

---

## Schema classification preview

| Metric | Value |
|--------|-------|
| `schema_fit` | fits_with_notes |
| Failures logged | 4 (see audit) |

**Do not modify schema or definitions based on this document alone.** Cross-collection D-class review in `research/schema-gap-log.md`.
