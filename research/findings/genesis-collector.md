# Findings: Genesis Collector

Phase 3A metadata discovery — 2026-06-09

**Policy ID:** `8e0556c569082f195b406737647765ed6b05d27dcb2c65319b7ce391`  
**Samples:** 10 Blockfrost `GET /assets/{unit}` responses in `research/raw-samples/genesis-collector/`  
**Metadata-bearing samples:** 100%

---

## Metadata summary

Phase 3A Top-100 include_now (TapTools rank 72). Type: event. Discovery only — no final definition in this pass.. Blockfrost standard signal: **CIP25v1**. Primary trait layout: **attributes_object** — `attributes` object map.

Top-level keys observed: `name`, `files`, `image`, `attributes`.

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

- `Base`
- `Eyes`
- `Head`
- `Mouth`
- `Outfit`
- `Species`
- `Accessory`
- `Background`
- `Drawn Weapon`
- `Sheathed Weapon`

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
| asset-001 | `8e0556c569082f195b406737647765ed6b05d27dcb2c65319b7ce39154434331303334` | `54434331303334` | yes |
| asset-002 | `8e0556c569082f195b406737647765ed6b05d27dcb2c65319b7ce39154434335303436` | `54434335303436` | yes |
| asset-003 | `8e0556c569082f195b406737647765ed6b05d27dcb2c65319b7ce39154434339303339` | `54434339303339` | yes |
| asset-004 | `8e0556c569082f195b406737647765ed6b05d27dcb2c65319b7ce39154434335383634` | `54434335383634` | yes |
| asset-005 | `8e0556c569082f195b406737647765ed6b05d27dcb2c65319b7ce39154434332363937` | `54434332363937` | yes |
| asset-006 | `8e0556c569082f195b406737647765ed6b05d27dcb2c65319b7ce39154434336323530` | `54434336323530` | yes |
| asset-007 | `8e0556c569082f195b406737647765ed6b05d27dcb2c65319b7ce39154434337363934` | `54434337363934` | yes |
| asset-008 | `8e0556c569082f195b406737647765ed6b05d27dcb2c65319b7ce39154434333313237` | `54434333313237` | yes |
| asset-009 | `8e0556c569082f195b406737647765ed6b05d27dcb2c65319b7ce391544343333036` | `544343333036` | yes |
| asset-010 | `8e0556c569082f195b406737647765ed6b05d27dcb2c65319b7ce39154434335303433` | `54434335303433` | yes |

---

## Schema classification preview

| Metric | Value |
|--------|-------|
| `schema_fit` | fits_with_notes |
| Failures logged | 5 (see audit) |

**Do not modify schema or definitions based on this document alone.** Cross-collection D-class review in `research/schema-gap-log.md`.
