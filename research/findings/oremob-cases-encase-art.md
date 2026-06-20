# Findings: OREMOB CASES by ENCASE.ART

Phase 2 metadata discovery — 2026-06-08

**Policy ID:** `9e6b0cf53e26c14f03eaafb45072c2800ba053b7ffa319fa29d42f5c`  
**Samples:** 10 Blockfrost `GET /assets/{unit}` responses in `research/raw-samples/oremob-cases-encase-art/`  
**Metadata-bearing samples:** 100%

---

## Metadata summary

Phase 2 multi-policy: nested case/airdrop policy in OREMOB ecosystem; tests component inventory metadata.. Blockfrost standard signal: **CIP25v1**. Primary trait layout: **root_flat_keys** — Flat trait-like keys at metadata root.

Top-level keys observed: `Mob`, `Rank`, `name`, `Frame`, `Level`, `files`, `image`, `website`, `Gemstone`, `mediaType`, `description`, `Core Essence`, `Manufacturer`, `Rarity Score`, `Amyg Symbiosis`, `Graft Affinity`, `Rarity Description`, `Signature Components`.

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

- `Mob`
- `Rank`
- `Frame`
- `Level`
- `Gemstone`
- `Core Essence`
- `Manufacturer`
- `Rarity Score`
- `Amyg Symbiosis`
- `Graft Affinity`
- `Rarity Description`
- `Signature Components`

---

## Media layout

- `image` string
- `files[]` multi-media
- mediaType: image/gif

---

## Socials and links

### Socials

| Field | Value |
|-------|-------|
| — | not present on-chain |

### Links

| Field | Value |
|-------|-------|
| website | `https://encase.art` |

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
| asset-001 | `9e6b0cf53e26c14f03eaafb45072c2800ba053b7ffa319fa29d42f5c464c4f4154455220434c454152202332373437` | `464c4f4154455220434c454152202332373437` | yes |
| asset-002 | `9e6b0cf53e26c14f03eaafb45072c2800ba053b7ffa319fa29d42f5c424f4c545a20415343454e44414e43452023303638` | `424f4c545a20415343454e44414e43452023303638` | yes |
| asset-003 | `9e6b0cf53e26c14f03eaafb45072c2800ba053b7ffa319fa29d42f5c464c4f4154455220434c454152202331343030` | `464c4f4154455220434c454152202331343030` | yes |
| asset-004 | `9e6b0cf53e26c14f03eaafb45072c2800ba053b7ffa319fa29d42f5c464c4f4154455220434c454152202331313733` | `464c4f4154455220434c454152202331313733` | yes |
| asset-005 | `9e6b0cf53e26c14f03eaafb45072c2800ba053b7ffa319fa29d42f5c464c4f4154455220434c454152202333343436` | `464c4f4154455220434c454152202333343436` | yes |
| asset-006 | `9e6b0cf53e26c14f03eaafb45072c2800ba053b7ffa319fa29d42f5c464c4f4154455220434c454152202330363936` | `464c4f4154455220434c454152202330363936` | yes |
| asset-007 | `9e6b0cf53e26c14f03eaafb45072c2800ba053b7ffa319fa29d42f5c534c4545504552205245442023303130` | `534c4545504552205245442023303130` | yes |
| asset-008 | `9e6b0cf53e26c14f03eaafb45072c2800ba053b7ffa319fa29d42f5c53554d49524520424c55455320233232` | `53554d49524520424c55455320233232` | yes |
| asset-009 | `9e6b0cf53e26c14f03eaafb45072c2800ba053b7ffa319fa29d42f5c464c4f415445522053554e5345542023303734` | `464c4f415445522053554e5345542023303734` | yes |
| asset-010 | `9e6b0cf53e26c14f03eaafb45072c2800ba053b7ffa319fa29d42f5c464c4f41544552205245442053545245414d2023323937` | `464c4f41544552205245442053545245414d2023323937` | yes |

---

## Schema classification preview

| Metric | Value |
|--------|-------|
| `schema_fit` | fits_with_notes |
| Failures logged | 4 (see audit) |

**Do not modify schema or definitions based on this document alone.** Cross-collection D-class review in `research/schema-gap-log.md`.
