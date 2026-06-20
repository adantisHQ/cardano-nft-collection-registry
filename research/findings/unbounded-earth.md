# Findings: UnboundedEarth

Phase 2 metadata discovery — 2026-06-08

**Policy ID:** `bb78d3b6638537d6df7ae43791ead3d50e75fdae82131eff2b7ae994`  
**Samples:** 10 Blockfrost `GET /assets/{unit}` responses in `research/raw-samples/unbounded-earth/`  
**Metadata-bearing samples:** 100%

---

## Metadata summary

Phase 2 standalone land/metaverse branding; tests alternate land parcel metadata without Phase 1 ecosystem overlap.. Blockfrost standard signal: **CIP25v1**. Primary trait layout: **root_flat_keys** — Flat trait-like keys at metadata root.

Top-level keys observed: `name`, `files`, `image`, `---X---`, `---Y---`, `mediaType`, `---INFO---`, `---LINK---`, `---TYPE---`, `---SEASON---`.

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

- `---X---`
- `---Y---`
- `---LINK---`
- `---TYPE---`
- `---SEASON---`

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

- `---INFO---` (nested object or section)

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
| asset-001 | `bb78d3b6638537d6df7ae43791ead3d50e75fdae82131eff2b7ae994556e626f756e6465644561727468506c75733236506c75733834` | `556e626f756e6465644561727468506c75733236506c75733834` | yes |
| asset-002 | `bb78d3b6638537d6df7ae43791ead3d50e75fdae82131eff2b7ae994556e626f756e6465644561727468506c75733337506c75733430` | `556e626f756e6465644561727468506c75733337506c75733430` | yes |
| asset-003 | `bb78d3b6638537d6df7ae43791ead3d50e75fdae82131eff2b7ae994556e626f756e64656445617274684d696e75733335506c7573313033` | `556e626f756e64656445617274684d696e75733335506c7573313033` | yes |
| asset-004 | `bb78d3b6638537d6df7ae43791ead3d50e75fdae82131eff2b7ae994556e626f756e6465644561727468506c7573313131506c75733430` | `556e626f756e6465644561727468506c7573313131506c75733430` | yes |
| asset-005 | `bb78d3b6638537d6df7ae43791ead3d50e75fdae82131eff2b7ae994556e626f756e6465644561727468506c757336344d696e75733831` | `556e626f756e6465644561727468506c757336344d696e75733831` | yes |
| asset-006 | `bb78d3b6638537d6df7ae43791ead3d50e75fdae82131eff2b7ae994556e626f756e6465644561727468506c757336334d696e757331` | `556e626f756e6465644561727468506c757336334d696e757331` | yes |
| asset-007 | `bb78d3b6638537d6df7ae43791ead3d50e75fdae82131eff2b7ae994556e626f756e64656445617274684d696e7573313036506c75733537` | `556e626f756e64656445617274684d696e7573313036506c75733537` | yes |
| asset-008 | `bb78d3b6638537d6df7ae43791ead3d50e75fdae82131eff2b7ae994556e626f756e6465644561727468506c757331354d696e75733136` | `556e626f756e6465644561727468506c757331354d696e75733136` | yes |
| asset-009 | `bb78d3b6638537d6df7ae43791ead3d50e75fdae82131eff2b7ae994556e626f756e6465644561727468506c75733233506c75733437` | `556e626f756e6465644561727468506c75733233506c75733437` | yes |
| asset-010 | `bb78d3b6638537d6df7ae43791ead3d50e75fdae82131eff2b7ae994556e626f756e64656445617274684d696e75733131334d696e75733933` | `556e626f756e64656445617274684d696e75733131334d696e75733933` | yes |

---

## Schema classification preview

| Metric | Value |
|--------|-------|
| `schema_fit` | fits_with_notes |
| Failures logged | 6 (see audit) |

**Do not modify schema or definitions based on this document alone.** Cross-collection D-class review in `research/schema-gap-log.md`.
