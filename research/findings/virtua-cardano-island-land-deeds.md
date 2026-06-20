# Findings: Virtua - Cardano Island Land Deeds

Phase 3A metadata discovery — 2026-06-09

**Policy ID:** `347f991d4b306919e3e7b01f1cdececa06c2e493a21a0da0931d033b`  
**Samples:** 10 Blockfrost `GET /assets/{unit}` responses in `research/raw-samples/virtua-cardano-island-land-deeds/`  
**Metadata-bearing samples:** 100%

---

## Metadata summary

Phase 3A Top-100 include_now (TapTools rank 61). Type: land. Discovery only — no final definition in this pass.. Blockfrost standard signal: **CIP25v1**. Primary trait layout: **attributes_object** — `attributes` object map.

Top-level keys observed: `id`, `name`, `image`, `description`, `attributes`.

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

- `Size`
- `Rarity`
- `Geometry`
- `NPC Slots`
- `Resources`
- `Robot Slots`
- `Summit Slots`

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
| asset-001 | `347f991d4b306919e3e7b01f1cdececa06c2e493a21a0da0931d033b3130393632` | `3130393632` | yes |
| asset-002 | `347f991d4b306919e3e7b01f1cdececa06c2e493a21a0da0931d033b3131303131` | `3131303131` | yes |
| asset-003 | `347f991d4b306919e3e7b01f1cdececa06c2e493a21a0da0931d033b39373838` | `39373838` | yes |
| asset-004 | `347f991d4b306919e3e7b01f1cdececa06c2e493a21a0da0931d033b39373533` | `39373533` | yes |
| asset-005 | `347f991d4b306919e3e7b01f1cdececa06c2e493a21a0da0931d033b34313032` | `34313032` | yes |
| asset-006 | `347f991d4b306919e3e7b01f1cdececa06c2e493a21a0da0931d033b39303739` | `39303739` | yes |
| asset-007 | `347f991d4b306919e3e7b01f1cdececa06c2e493a21a0da0931d033b34353331` | `34353331` | yes |
| asset-008 | `347f991d4b306919e3e7b01f1cdececa06c2e493a21a0da0931d033b3132363538` | `3132363538` | yes |
| asset-009 | `347f991d4b306919e3e7b01f1cdececa06c2e493a21a0da0931d033b3132353634` | `3132353634` | yes |
| asset-010 | `347f991d4b306919e3e7b01f1cdececa06c2e493a21a0da0931d033b34313235` | `34313235` | yes |

---

## Schema classification preview

| Metric | Value |
|--------|-------|
| `schema_fit` | fits_with_notes |
| Failures logged | 5 (see audit) |

**Do not modify schema or definitions based on this document alone.** Cross-collection D-class review in `research/schema-gap-log.md`.
