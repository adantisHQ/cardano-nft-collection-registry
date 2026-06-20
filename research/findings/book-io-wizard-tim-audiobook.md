# Findings: Book.io - The Wizard Tim Audiobook

Phase 2 metadata discovery — 2026-06-08

**Policy ID:** `e1d98823331929b449b037b212f275e15d9dba800caa6ebf42dbc627`  
**Samples:** 10 Blockfrost `GET /assets/{unit}` responses in `research/raw-samples/book-io-wizard-tim-audiobook/`  
**Metadata-bearing samples:** 100%

---

## Metadata summary

Phase 2 audiobook variant in Book.io cluster; tests audio mediaType, multi-file playback metadata, and title-specific fields.. Blockfrost standard signal: **CIP25v1**. Primary trait layout: **attributes_object** — `attributes` object map.

Top-level keys observed: `id`, `data`, `name`, `files`, `image`, `sha256`, `authors`, `website`, `mediaType`, `attributes`, `description`, `dataMediaType`, `extraAttributes`.

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
- mediaType: image/jpeg

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
| asset-001 | `e1d98823331929b449b037b212f275e15d9dba800caa6ebf42dbc62757697a61726454696d417564696f626f6f6b31393338` | `57697a61726454696d417564696f626f6f6b31393338` | yes |
| asset-002 | `e1d98823331929b449b037b212f275e15d9dba800caa6ebf42dbc62757697a61726454696d417564696f626f6f6b31393339` | `57697a61726454696d417564696f626f6f6b31393339` | yes |
| asset-003 | `e1d98823331929b449b037b212f275e15d9dba800caa6ebf42dbc62757697a61726454696d417564696f626f6f6b31393235` | `57697a61726454696d417564696f626f6f6b31393235` | yes |
| asset-004 | `e1d98823331929b449b037b212f275e15d9dba800caa6ebf42dbc62757697a61726454696d417564696f626f6f6b31393133` | `57697a61726454696d417564696f626f6f6b31393133` | yes |
| asset-005 | `e1d98823331929b449b037b212f275e15d9dba800caa6ebf42dbc62757697a61726454696d417564696f626f6f6b31393032` | `57697a61726454696d417564696f626f6f6b31393032` | yes |
| asset-006 | `e1d98823331929b449b037b212f275e15d9dba800caa6ebf42dbc62757697a61726454696d417564696f626f6f6b31383930` | `57697a61726454696d417564696f626f6f6b31383930` | yes |
| asset-007 | `e1d98823331929b449b037b212f275e15d9dba800caa6ebf42dbc62757697a61726454696d417564696f626f6f6b31383439` | `57697a61726454696d417564696f626f6f6b31383439` | yes |
| asset-008 | `e1d98823331929b449b037b212f275e15d9dba800caa6ebf42dbc62757697a61726454696d417564696f626f6f6b31383337` | `57697a61726454696d417564696f626f6f6b31383337` | yes |
| asset-009 | `e1d98823331929b449b037b212f275e15d9dba800caa6ebf42dbc62757697a61726454696d417564696f626f6f6b31383236` | `57697a61726454696d417564696f626f6f6b31383236` | yes |
| asset-010 | `e1d98823331929b449b037b212f275e15d9dba800caa6ebf42dbc62757697a61726454696d417564696f626f6f6b31383134` | `57697a61726454696d417564696f626f6f6b31383134` | yes |

---

## Schema classification preview

| Metric | Value |
|--------|-------|
| `schema_fit` | fits_with_notes |
| Failures logged | 4 (see audit) |

**Do not modify schema or definitions based on this document alone.** Cross-collection D-class review in `research/schema-gap-log.md`.
