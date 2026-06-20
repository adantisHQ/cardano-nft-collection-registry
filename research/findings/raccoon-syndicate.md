# Findings: Raccoon Syndicate

Phase 3A metadata discovery — 2026-06-09

**Policy ID:** `59142df7dfea56a5b76b842c206fc7bd844b43a2d10f5eb05f695dcb`  
**Samples:** 10 Blockfrost `GET /assets/{unit}` responses in `research/raw-samples/raccoon-syndicate/`  
**Metadata-bearing samples:** 100%

---

## Metadata summary

Phase 3A Top-100 include_now (TapTools rank 39). Type: pfp. Discovery only — no final definition in this pass.. Blockfrost standard signal: **CIP25v1**. Primary trait layout: **attributes_object** — `attributes` object map.

Top-level keys observed: `name`, `Index`, `image`, `Twitter`, `Website`, `copyright`, `mediaType`, `attributes`.

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

- `Eyes`
- `Head`
- `Ring`
- `Genus`
- `Mouth`
- `Nails`
- `Eyewear`
- `Wardrobe`
- `Left Hand`
- `Syndicate`
- `Profession`
- `Right Hand`
- `Base Point Multiplier`

---

## Media layout

- `image` string
- mediaType: image/png

---

## Socials and links

### Socials

| Field | Value |
|-------|-------|
| Twitter | `@RaccoonSyndicat` |

### Links

| Field | Value |
|-------|-------|
| Website | `https://raccoonsyndicate.com/` |

---

## License and royalties

| Area | Finding |
|------|---------|
| copyright | Raccoon Syndicate 2025 |

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
| asset-001 | `59142df7dfea56a5b76b842c206fc7bd844b43a2d10f5eb05f695dcb526163636f6f6e2031313933` | `526163636f6f6e2031313933` | yes |
| asset-002 | `59142df7dfea56a5b76b842c206fc7bd844b43a2d10f5eb05f695dcb526163636f6f6e2031353533` | `526163636f6f6e2031353533` | yes |
| asset-003 | `59142df7dfea56a5b76b842c206fc7bd844b43a2d10f5eb05f695dcb526163636f6f6e203831` | `526163636f6f6e203831` | yes |
| asset-004 | `59142df7dfea56a5b76b842c206fc7bd844b43a2d10f5eb05f695dcb526163636f6f6e2031343336` | `526163636f6f6e2031343336` | yes |
| asset-005 | `59142df7dfea56a5b76b842c206fc7bd844b43a2d10f5eb05f695dcb526163636f6f6e2034383630` | `526163636f6f6e2034383630` | yes |
| asset-006 | `59142df7dfea56a5b76b842c206fc7bd844b43a2d10f5eb05f695dcb526163636f6f6e2031393332` | `526163636f6f6e2031393332` | yes |
| asset-007 | `59142df7dfea56a5b76b842c206fc7bd844b43a2d10f5eb05f695dcb526163636f6f6e2034393633` | `526163636f6f6e2034393633` | yes |
| asset-008 | `59142df7dfea56a5b76b842c206fc7bd844b43a2d10f5eb05f695dcb526163636f6f6e2032343539` | `526163636f6f6e2032343539` | yes |
| asset-009 | `59142df7dfea56a5b76b842c206fc7bd844b43a2d10f5eb05f695dcb526163636f6f6e2032373530` | `526163636f6f6e2032373530` | yes |
| asset-010 | `59142df7dfea56a5b76b842c206fc7bd844b43a2d10f5eb05f695dcb526163636f6f6e2031373539` | `526163636f6f6e2031373539` | yes |

---

## Schema classification preview

| Metric | Value |
|--------|-------|
| `schema_fit` | fits_with_notes |
| Failures logged | 3 (see audit) |

**Do not modify schema or definitions based on this document alone.** Cross-collection D-class review in `research/schema-gap-log.md`.
