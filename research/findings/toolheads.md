# Findings: Toolheads

Phase 3A metadata discovery — 2026-06-09

**Policy ID:** `285c0b8e91ba323da4ca083c9db837e111dafbf3143ece4d03eba8f4`  
**Samples:** 10 Blockfrost `GET /assets/{unit}` responses in `research/raw-samples/toolheads/`  
**Metadata-bearing samples:** 100%

---

## Metadata summary

Phase 3A Top-100 include_now (TapTools rank 19). Type: gaming. Discovery only — no final definition in this pass.. Blockfrost standard signal: **CIP25v1**. Primary trait layout: **attributes_object** — `attributes` object map.

Top-level keys observed: `name`, `files`, `image`, `minter`, `mediaType`, `attributes`.

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

- `body`
- `head`
- `role`
- `strap`
- `outfit`
- `accessory`
- `background`

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
| — | not present on-chain |

---

## License and royalties

| Area | Finding |
|------|---------|
| — | not present on-chain |

| Royalties | Not present in on-chain metadata samples |

---

## Custom fields

- `attributes` (nested object or section)

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
| asset-001 | `285c0b8e91ba323da4ca083c9db837e111dafbf3143ece4d03eba8f4546f6f6c6865616432313830` | `546f6f6c6865616432313830` | yes |
| asset-002 | `285c0b8e91ba323da4ca083c9db837e111dafbf3143ece4d03eba8f4546f6f6c6865616436333437` | `546f6f6c6865616436333437` | yes |
| asset-003 | `285c0b8e91ba323da4ca083c9db837e111dafbf3143ece4d03eba8f4546f6f6c6865616435363338` | `546f6f6c6865616435363338` | yes |
| asset-004 | `285c0b8e91ba323da4ca083c9db837e111dafbf3143ece4d03eba8f4546f6f6c6865616431393638` | `546f6f6c6865616431393638` | yes |
| asset-005 | `285c0b8e91ba323da4ca083c9db837e111dafbf3143ece4d03eba8f4546f6f6c6865616434333936` | `546f6f6c6865616434333936` | yes |
| asset-006 | `285c0b8e91ba323da4ca083c9db837e111dafbf3143ece4d03eba8f4546f6f6c6865616433363837` | `546f6f6c6865616433363837` | yes |
| asset-007 | `285c0b8e91ba323da4ca083c9db837e111dafbf3143ece4d03eba8f4546f6f6c6865616432373739` | `546f6f6c6865616432373739` | yes |
| asset-008 | `285c0b8e91ba323da4ca083c9db837e111dafbf3143ece4d03eba8f4546f6f6c6865616430323034` | `546f6f6c6865616430323034` | yes |
| asset-009 | `285c0b8e91ba323da4ca083c9db837e111dafbf3143ece4d03eba8f4546f6f6c6865616436343632` | `546f6f6c6865616436343632` | yes |
| asset-010 | `285c0b8e91ba323da4ca083c9db837e111dafbf3143ece4d03eba8f4546f6f6c6865616436343238` | `546f6f6c6865616436343238` | yes |

---

## Schema classification preview

| Metric | Value |
|--------|-------|
| `schema_fit` | fits_with_notes |
| Failures logged | 5 (see audit) |

**Do not modify schema or definitions based on this document alone.** Cross-collection D-class review in `research/schema-gap-log.md`.
