# Findings: Cardano Warriors

Phase 3A metadata discovery — 2026-06-09

**Policy ID:** `8f80ebfaf62a8c33ae2adf047572604c74db8bc1daba2b43f9a65635`  
**Samples:** 10 Blockfrost `GET /assets/{unit}` responses in `research/raw-samples/cardano-warriors/`  
**Metadata-bearing samples:** 100%

---

## Metadata summary

Phase 3A Top-100 include_now (TapTools rank 75). Type: gaming. Discovery only — no final definition in this pass.. Blockfrost standard signal: **CIP25v1**. Primary trait layout: **traits_string_array** — `traits` string array with colon-separated labels (e.g. `Background: Purple`).

Top-level keys observed: `id`, `name`, `type`, `image`, `items`, `rarity`, `traits`, `imagealpha`.

---

## Metadata standard

| Signal | Finding |
|--------|---------|
| Blockfrost `onchain_metadata_standard` | CIP25v1 |
| Layout class | traits_string_array |
| Metadata root | `onchain_metadata` (Blockfrost asset response) |

---

## Trait layout

`traits` string array with colon-separated labels (e.g. `Background: Purple`)

- `Green Eyes`
- `Angry`
- `White Skin`
- `Black Hair`

---

## Media layout

- `image` string

---

## Socials and links

### Socials

| Field | Value |
|-------|-------|
| — | not present on-chain |

### Links

| Field | Value |
|-------|-------|
| — | not present on-chain |

---

## License and royalties

| Area | Finding |
|------|---------|
| — | not present on-chain |

| Royalties | Not present in on-chain metadata samples |

---

## Custom fields

- `items` (nested object or section)
- `traits` (nested object or section)

---

## Expected registry mappings

- Trait extraction: Parse `traits[]` strings by splitting on first colon; no dedicated strategy yet (single-collection pattern)
- Media: `$.image` standard mapping
- Identity: `$.name` where present

---

## Indexing caveats

- Raw samples are full Blockfrost asset responses; parsers must use `onchain_metadata` subtree

---

## Extraction strategy assessment

| Question | Answer |
|----------|--------|
| Are Phase 1 extraction strategies sufficient? | **Mostly** — direct paths; see custom fields |
| Recommended strategy | Parse `traits[]` strings by splitting on first colon; no dedicated strategy yet |

---

## Sample inventory

| Label | Asset unit | Asset name (hex) | Metadata |
|-------|------------|------------------|----------|
| asset-001 | `8f80ebfaf62a8c33ae2adf047572604c74db8bc1daba2b43f9a6563543617264616e6f57617272696f7238303131` | `43617264616e6f57617272696f7238303131` | yes |
| asset-002 | `8f80ebfaf62a8c33ae2adf047572604c74db8bc1daba2b43f9a6563543617264616e6f57617272696f7239363432` | `43617264616e6f57617272696f7239363432` | yes |
| asset-003 | `8f80ebfaf62a8c33ae2adf047572604c74db8bc1daba2b43f9a6563543617264616e6f57617272696f7237323637` | `43617264616e6f57617272696f7237323637` | yes |
| asset-004 | `8f80ebfaf62a8c33ae2adf047572604c74db8bc1daba2b43f9a6563543617264616e6f57617272696f7236343831` | `43617264616e6f57617272696f7236343831` | yes |
| asset-005 | `8f80ebfaf62a8c33ae2adf047572604c74db8bc1daba2b43f9a6563543617264616e6f57617272696f7234393939` | `43617264616e6f57617272696f7234393939` | yes |
| asset-006 | `8f80ebfaf62a8c33ae2adf047572604c74db8bc1daba2b43f9a6563543617264616e6f57617272696f7238353036` | `43617264616e6f57617272696f7238353036` | yes |
| asset-007 | `8f80ebfaf62a8c33ae2adf047572604c74db8bc1daba2b43f9a6563543617264616e6f57617272696f7237333037` | `43617264616e6f57617272696f7237333037` | yes |
| asset-008 | `8f80ebfaf62a8c33ae2adf047572604c74db8bc1daba2b43f9a6563543617264616e6f57617272696f7233373439` | `43617264616e6f57617272696f7233373439` | yes |
| asset-009 | `8f80ebfaf62a8c33ae2adf047572604c74db8bc1daba2b43f9a6563543617264616e6f57617272696f7232303535` | `43617264616e6f57617272696f7232303535` | yes |
| asset-010 | `8f80ebfaf62a8c33ae2adf047572604c74db8bc1daba2b43f9a6563543617264616e6f57617272696f7232373633` | `43617264616e6f57617272696f7232373633` | yes |

---

## Schema classification preview

| Metric | Value |
|--------|-------|
| `schema_fit` | fits_with_notes |
| Failures logged | 6 (see audit) |

**Do not modify schema or definitions based on this document alone.** Cross-collection D-class review in `research/schema-gap-log.md`.
