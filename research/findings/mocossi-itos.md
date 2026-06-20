# Findings: Mocossi - ITOs

Phase 3A metadata discovery — 2026-06-09

**Policy ID:** `5d5b205252b9f5016422d0eace869d7fd45074a4ea4b6c1dc78d1705`  
**Samples:** 10 Blockfrost `GET /assets/{unit}` responses in `research/raw-samples/mocossi-itos/`  
**Metadata-bearing samples:** 100%

---

## Metadata summary

Phase 3A Top-100 include_now (TapTools rank 30). Type: mixed. Discovery only — no final definition in this pass.. Blockfrost standard signal: **CIP25v1**. Primary trait layout: **attributes_object** — `attributes` object map.

Top-level keys observed: `id`, `name`, `image`, `copyright`, `mediaType`, `attributes`, `description`.

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

- `Body`
- `Face`
- `Species`
- `Headwear`
- `Background`

---

## Media layout

- `image` string
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
| copyright | 2021 Mocossi |

| Royalties | Not present in on-chain metadata samples |

---

## Custom fields

- `attributes` (nested object or section)

---

## Expected registry mappings

- Trait extraction: Use `direct_path` under `$.attributes.<key>`
- Media: `$.image` standard mapping
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
| asset-001 | `5d5b205252b9f5016422d0eace869d7fd45074a4ea4b6c1dc78d17054d6f636f73736949746f30303030` | `4d6f636f73736949746f30303030` | yes |
| asset-002 | `5d5b205252b9f5016422d0eace869d7fd45074a4ea4b6c1dc78d17054d6f636f73736949746f39393835` | `4d6f636f73736949746f39393835` | yes |
| asset-003 | `5d5b205252b9f5016422d0eace869d7fd45074a4ea4b6c1dc78d17054d6f636f73736949746f39393735` | `4d6f636f73736949746f39393735` | yes |
| asset-004 | `5d5b205252b9f5016422d0eace869d7fd45074a4ea4b6c1dc78d17054d6f636f73736949746f34333134` | `4d6f636f73736949746f34333134` | yes |
| asset-005 | `5d5b205252b9f5016422d0eace869d7fd45074a4ea4b6c1dc78d17054d6f636f73736949746f33303530` | `4d6f636f73736949746f33303530` | yes |
| asset-006 | `5d5b205252b9f5016422d0eace869d7fd45074a4ea4b6c1dc78d17054d6f636f73736949746f38363331` | `4d6f636f73736949746f38363331` | yes |
| asset-007 | `5d5b205252b9f5016422d0eace869d7fd45074a4ea4b6c1dc78d17054d6f636f73736949746f37373434` | `4d6f636f73736949746f37373434` | yes |
| asset-008 | `5d5b205252b9f5016422d0eace869d7fd45074a4ea4b6c1dc78d17054d6f636f73736949746f32373832` | `4d6f636f73736949746f32373832` | yes |
| asset-009 | `5d5b205252b9f5016422d0eace869d7fd45074a4ea4b6c1dc78d17054d6f636f73736949746f30353337` | `4d6f636f73736949746f30353337` | yes |
| asset-010 | `5d5b205252b9f5016422d0eace869d7fd45074a4ea4b6c1dc78d17054d6f636f73736949746f33313231` | `4d6f636f73736949746f33313231` | yes |

---

## Schema classification preview

| Metric | Value |
|--------|-------|
| `schema_fit` | fits_with_notes |
| Failures logged | 5 (see audit) |

**Do not modify schema or definitions based on this document alone.** Cross-collection D-class review in `research/schema-gap-log.md`.
