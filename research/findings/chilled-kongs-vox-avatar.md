# Findings: Chilled Kongs Vox Avatar

Phase 2 metadata discovery — 2026-06-08

**Policy ID:** `5d8bb1d5376bf641ff2c51c7744efa8969e0dbdb18011876a2a16188`  
**Samples:** 10 Blockfrost `GET /assets/{unit}` responses in `research/raw-samples/chilled-kongs-vox-avatar/`  
**Metadata-bearing samples:** 100%

---

## Metadata summary

Companion 3D vox/avatar policy paired with base Chilled Kongs. **Not CIP-68** — Blockfrost reports CIP25v1; no hex-encoded trait blobs. **GAP-002 not confirmed** by this collection. Primary layout: flat PFP-style trait keys plus `files[]` with `model/gltf-binary` 3D asset.

Top-level keys observed: `eye`, `hat`, `body`, `name`, `files`, `image`, `mouth`, `earring`, `twitter`, `website`, `clothing`, `mediaType`, `metaverse`, `background`, `bcrcdiscord`, `bcrctwitter`.

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

- `eye`
- `hat`
- `body`
- `mouth`
- `earring`
- `clothing`
- `metaverse`
- `background`

Social/link fields at root (not traits): `twitter`, `website`, `bcrcdiscord`, `bcrctwitter`, `metaverse`.

---

## Media layout

- `image` → PNG preview (IPFS)
- `files[]` → primary `model/gltf-binary` GLTF avatar (`mediaType` on file entry)
- Root `mediaType`: `image/png`

---

## Socials and links

### Socials

| Field | Value |
|-------|-------|
| twitter | `@Chilledkongs` |

### Links

| Field | Value |
|-------|-------|
| website | `Chilledkongs.com` |

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
| asset-001 | `5d8bb1d5376bf641ff2c51c7744efa8969e0dbdb18011876a2a161884368696c6c65644b6f6e6773566f7841766174617230303032` | `4368696c6c65644b6f6e6773566f7841766174617230303032` | yes |
| asset-002 | `5d8bb1d5376bf641ff2c51c7744efa8969e0dbdb18011876a2a161884368696c6c65644b6f6e6773566f7841766174617230363139` | `4368696c6c65644b6f6e6773566f7841766174617230363139` | yes |
| asset-003 | `5d8bb1d5376bf641ff2c51c7744efa8969e0dbdb18011876a2a161884368696c6c65644b6f6e6773566f7841766174617232383435` | `4368696c6c65644b6f6e6773566f7841766174617232383435` | yes |
| asset-004 | `5d8bb1d5376bf641ff2c51c7744efa8969e0dbdb18011876a2a161884368696c6c65644b6f6e6773566f7841766174617230363736` | `4368696c6c65644b6f6e6773566f7841766174617230363736` | yes |
| asset-005 | `5d8bb1d5376bf641ff2c51c7744efa8969e0dbdb18011876a2a161884368696c6c65644b6f6e6773566f7841766174617230343935` | `4368696c6c65644b6f6e6773566f7841766174617230343935` | yes |
| asset-006 | `5d8bb1d5376bf641ff2c51c7744efa8969e0dbdb18011876a2a161884368696c6c65644b6f6e6773566f7841766174617232373030` | `4368696c6c65644b6f6e6773566f7841766174617232373030` | yes |
| asset-007 | `5d8bb1d5376bf641ff2c51c7744efa8969e0dbdb18011876a2a161884368696c6c65644b6f6e6773566f7841766174617232363839` | `4368696c6c65644b6f6e6773566f7841766174617232363839` | yes |
| asset-008 | `5d8bb1d5376bf641ff2c51c7744efa8969e0dbdb18011876a2a161884368696c6c65644b6f6e6773566f7841766174617231333230` | `4368696c6c65644b6f6e6773566f7841766174617231333230` | yes |
| asset-009 | `5d8bb1d5376bf641ff2c51c7744efa8969e0dbdb18011876a2a161884368696c6c65644b6f6e6773566f7841766174617231393238` | `4368696c6c65644b6f6e6773566f7841766174617231393238` | yes |
| asset-010 | `5d8bb1d5376bf641ff2c51c7744efa8969e0dbdb18011876a2a161884368696c6c65644b6f6e6773566f7841766174617233333034` | `4368696c6c65644b6f6e6773566f7841766174617233333034` | yes |

---

## Schema classification preview

| Metric | Value |
|--------|-------|
| `schema_fit` | fits_with_notes |
| Failures logged | 3 (see audit) |

**Do not modify schema or definitions based on this document alone.** Cross-collection D-class review in `research/schema-gap-log.md`.
