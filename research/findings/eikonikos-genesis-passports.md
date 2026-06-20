# Findings: EIKONIKOS - Genesis Passports

Phase 3A metadata discovery — 2026-06-09

**Policy ID:** `d1b21921e3cc1b7559c2691365ab3b9b1e495e1b0391213b71577430`  
**Samples:** 10 Blockfrost `GET /assets/{unit}` responses in `research/raw-samples/eikonikos-genesis-passports/`  
**Metadata-bearing samples:** 100%

---

## Metadata summary

Phase 3A Top-100 include_now (TapTools rank 71). Type: event. Discovery only — no final definition in this pass.. Blockfrost standard signal: **CIP25v1**. Primary trait layout: **root_flat_keys** — Flat trait-like keys at metadata root.

Top-level keys observed: `NFT`, `Tier`, `name`, `Class`, `files`, `image`, `mediaType`, `Colour Code`, `Crystal Perk`, `Tiered Whitelist`.

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

- `NFT`
- `Tier`
- `Class`
- `Colour Code`
- `Crystal Perk`
- `Tiered Whitelist`

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
| asset-001 | `d1b21921e3cc1b7559c2691365ab3b9b1e495e1b0391213b7157743047656e6573697342726f6e7a6550617373706f727433313337` | `47656e6573697342726f6e7a6550617373706f727433313337` | yes |
| asset-002 | `d1b21921e3cc1b7559c2691365ab3b9b1e495e1b0391213b7157743047656e6573697342726f6e7a6550617373706f727433363938` | `47656e6573697342726f6e7a6550617373706f727433363938` | yes |
| asset-003 | `d1b21921e3cc1b7559c2691365ab3b9b1e495e1b0391213b7157743047656e6573697353696c76657250617373706f727432313235` | `47656e6573697353696c76657250617373706f727432313235` | yes |
| asset-004 | `d1b21921e3cc1b7559c2691365ab3b9b1e495e1b0391213b7157743047656e6573697342726f6e7a6550617373706f7274353037` | `47656e6573697342726f6e7a6550617373706f7274353037` | yes |
| asset-005 | `d1b21921e3cc1b7559c2691365ab3b9b1e495e1b0391213b7157743047656e6573697342726f6e7a6550617373706f727433303432` | `47656e6573697342726f6e7a6550617373706f727433303432` | yes |
| asset-006 | `d1b21921e3cc1b7559c2691365ab3b9b1e495e1b0391213b7157743047656e6573697342726f6e7a6550617373706f727431323233` | `47656e6573697342726f6e7a6550617373706f727431323233` | yes |
| asset-007 | `d1b21921e3cc1b7559c2691365ab3b9b1e495e1b0391213b7157743047656e6573697342726f6e7a6550617373706f727432303533` | `47656e6573697342726f6e7a6550617373706f727432303533` | yes |
| asset-008 | `d1b21921e3cc1b7559c2691365ab3b9b1e495e1b0391213b7157743047656e6573697342726f6e7a6550617373706f727432343035` | `47656e6573697342726f6e7a6550617373706f727432343035` | yes |
| asset-009 | `d1b21921e3cc1b7559c2691365ab3b9b1e495e1b0391213b7157743047656e65736973476f6c6450617373706f7274363638` | `47656e65736973476f6c6450617373706f7274363638` | yes |
| asset-010 | `d1b21921e3cc1b7559c2691365ab3b9b1e495e1b0391213b7157743047656e6573697353696c76657250617373706f7274333837` | `47656e6573697353696c76657250617373706f7274333837` | yes |

---

## Schema classification preview

| Metric | Value |
|--------|-------|
| `schema_fit` | fits_with_notes |
| Failures logged | 5 (see audit) |

**Do not modify schema or definitions based on this document alone.** Cross-collection D-class review in `research/schema-gap-log.md`.
