# Findings: OREMOB

Phase 2 metadata discovery — 2026-06-08

**Policy ID:** `062b1da3d344c1e6208ef908b2d308201e7ff6bcfddf0f606249817f`  
**Samples:** 10 Blockfrost `GET /assets/{unit}` responses in `research/raw-samples/oremob/`  
**Metadata-bearing samples:** 100%

---

## Metadata summary

Phase 2 gaming mech collection; tests game-asset trait grids and media distinct from Phase 1 DEADPXLZ HTML pattern.. Blockfrost standard signal: **CIP25v1**. Primary trait layout: **root_flat_keys** — Flat trait-like keys at metadata root.

Top-level keys observed: `EAR`, `MOB`, `BACK`, `BODY`, `EYES`, `NECK`, `NOSE`, `RANK`, `name`, `MASKS`, `files`, `image`, `EYEWEAR`, `EYEBROWS`, `HEADWEAR`, `AUTOGRAPH`, `HAIRSTYLE`, `mediaType`, `BACKGROUND`, `description`, `RARITY SCORE`, `MOUTH AND TEETH`, `CLOTHING LAYER 1`, `CLOTHING LAYER 2`, `RARITY DESCRIPTION`, `SCARS, WOUNDS AND BODYART`.

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

- `EAR`
- `MOB`
- `BACK`
- `BODY`
- `EYES`
- `NECK`
- `NOSE`
- `RANK`
- `MASKS`
- `EYEWEAR`
- `EYEBROWS`
- `HEADWEAR`
- `AUTOGRAPH`
- `HAIRSTYLE`
- `BACKGROUND`
- `RARITY SCORE`
- `MOUTH AND TEETH`
- `CLOTHING LAYER 1`
- `CLOTHING LAYER 2`
- `RARITY DESCRIPTION`

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
| asset-001 | `062b1da3d344c1e6208ef908b2d308201e7ff6bcfddf0f606249817f4f52454d4f4231353034` | `4f52454d4f4231353034` | yes |
| asset-002 | `062b1da3d344c1e6208ef908b2d308201e7ff6bcfddf0f606249817f4f52454d4f4232313533` | `4f52454d4f4232313533` | yes |
| asset-003 | `062b1da3d344c1e6208ef908b2d308201e7ff6bcfddf0f606249817f4f52454d4f4231323730` | `4f52454d4f4231323730` | yes |
| asset-004 | `062b1da3d344c1e6208ef908b2d308201e7ff6bcfddf0f606249817f4f52454d4f4230363837` | `4f52454d4f4230363837` | yes |
| asset-005 | `062b1da3d344c1e6208ef908b2d308201e7ff6bcfddf0f606249817f4f52454d4f4230393135` | `4f52454d4f4230393135` | yes |
| asset-006 | `062b1da3d344c1e6208ef908b2d308201e7ff6bcfddf0f606249817f4f52454d4f4230363930` | `4f52454d4f4230363930` | yes |
| asset-007 | `062b1da3d344c1e6208ef908b2d308201e7ff6bcfddf0f606249817f4f52454d4f4232303733` | `4f52454d4f4232303733` | yes |
| asset-008 | `062b1da3d344c1e6208ef908b2d308201e7ff6bcfddf0f606249817f4f52454d4f4232393137` | `4f52454d4f4232393137` | yes |
| asset-009 | `062b1da3d344c1e6208ef908b2d308201e7ff6bcfddf0f606249817f4f52454d4f4232333930` | `4f52454d4f4232333930` | yes |
| asset-010 | `062b1da3d344c1e6208ef908b2d308201e7ff6bcfddf0f606249817f4f52454d4f4230373736` | `4f52454d4f4230373736` | yes |

---

## Schema classification preview

| Metric | Value |
|--------|-------|
| `schema_fit` | fits_with_notes |
| Failures logged | 5 (see audit) |

**Do not modify schema or definitions based on this document alone.** Cross-collection D-class review in `research/schema-gap-log.md`.
