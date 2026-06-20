# Findings: Snekkies

Phase 3A metadata discovery — 2026-06-09

**Policy ID:** `b558ea5ecfa2a6e9701dab150248e94104402f789c090426eb60eb60`  
**Samples:** 10 Blockfrost `GET /assets/{unit}` responses in `research/raw-samples/snekkies/`  
**Metadata-bearing samples:** 100%

---

## Metadata summary

Phase 3A Top-100 include_now (TapTools rank 32). Type: pfp. Discovery only — no final definition in this pass.. Blockfrost standard signal: **CIP25v1**. Primary trait layout: **attributes_object** — `attributes` object map.

Top-level keys observed: `name`, `files`, `image`, `Website`, `mediaType`, `attributes`.

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

- `Dome`
- `Eyes`
- `Face`
- `Skin`
- `Type`
- `Style`
- `Background`

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
| Website | `https://snekkies.com/` |

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
| asset-001 | `b558ea5ecfa2a6e9701dab150248e94104402f789c090426eb60eb60536e656b6b696531353031` | `536e656b6b696531353031` | yes |
| asset-002 | `b558ea5ecfa2a6e9701dab150248e94104402f789c090426eb60eb60536e656b6b696532323131` | `536e656b6b696532323131` | yes |
| asset-003 | `b558ea5ecfa2a6e9701dab150248e94104402f789c090426eb60eb60536e656b6b696533393137` | `536e656b6b696533393137` | yes |
| asset-004 | `b558ea5ecfa2a6e9701dab150248e94104402f789c090426eb60eb60536e656b6b696531393735` | `536e656b6b696531393735` | yes |
| asset-005 | `b558ea5ecfa2a6e9701dab150248e94104402f789c090426eb60eb60536e656b6b696533313134` | `536e656b6b696533313134` | yes |
| asset-006 | `b558ea5ecfa2a6e9701dab150248e94104402f789c090426eb60eb60536e656b6b696534393034` | `536e656b6b696534393034` | yes |
| asset-007 | `b558ea5ecfa2a6e9701dab150248e94104402f789c090426eb60eb60536e656b6b696532313738` | `536e656b6b696532313738` | yes |
| asset-008 | `b558ea5ecfa2a6e9701dab150248e94104402f789c090426eb60eb60536e656b6b696536383439` | `536e656b6b696536383439` | yes |
| asset-009 | `b558ea5ecfa2a6e9701dab150248e94104402f789c090426eb60eb60536e656b6b696531313935` | `536e656b6b696531313935` | yes |
| asset-010 | `b558ea5ecfa2a6e9701dab150248e94104402f789c090426eb60eb60536e656b6b696536333630` | `536e656b6b696536333630` | yes |

---

## Schema classification preview

| Metric | Value |
|--------|-------|
| `schema_fit` | fits_with_notes |
| Failures logged | 4 (see audit) |

**Do not modify schema or definitions based on this document alone.** Cross-collection D-class review in `research/schema-gap-log.md`.
