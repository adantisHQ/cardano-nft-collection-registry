# Findings: Artifct Moon

Phase 3A metadata discovery — 2026-06-09

**Policy ID:** `e5a2bcc51466942a9db1da62471a1b682bde3abcebafee2c7fb1e378`  
**Samples:** 10 Blockfrost `GET /assets/{unit}` responses in `research/raw-samples/artifct-moon/`  
**Metadata-bearing samples:** 100%

---

## Metadata summary

Phase 3A Top-100 include_now (TapTools rank 103). Type: art. Discovery only — no final definition in this pass.. Blockfrost standard signal: **CIP25v1**. Primary trait layout: **minimal_or_custom** — Minimal or custom layout.

Top-level keys observed: `name`, `image`, `detail`, `website`, `location`, `mediaType`, `collection`.

---

## Metadata standard

| Signal | Finding |
|--------|---------|
| Blockfrost `onchain_metadata_standard` | CIP25v1 |
| Layout class | minimal_or_custom |
| Metadata root | `onchain_metadata` (Blockfrost asset response) |

---

## Trait layout

Minimal or custom layout

- `detail`
- `location`
- `collection`

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
| website | `https://artifct.space` |

---

## License and royalties

| Area | Finding |
|------|---------|
| — | not present on-chain |

| Royalties | Not present in on-chain metadata samples |

---

## Custom fields

- `location` (nested object or section)

---

## Expected registry mappings

- Trait extraction: Direct paths only; may need manual mapping
- Media: `$.image` standard mapping
- Identity: `$.name` where present

---

## Indexing caveats

- Raw samples are full Blockfrost asset responses; parsers must use `onchain_metadata` subtree

---

## Extraction strategy assessment

| Question | Answer |
|----------|--------|
| Are Phase 1 extraction strategies sufficient? | **Mostly** — direct paths; see custom fields |
| Recommended strategy | Direct paths only; may need manual mapping |

---

## Sample inventory

| Label | Asset unit | Asset name (hex) | Metadata |
|-------|------------|------------------|----------|
| asset-001 | `e5a2bcc51466942a9db1da62471a1b682bde3abcebafee2c7fb1e378415254494643544d4f4f4e30313031` | `415254494643544d4f4f4e30313031` | yes |
| asset-002 | `e5a2bcc51466942a9db1da62471a1b682bde3abcebafee2c7fb1e378415254494643544d4f4f4e30313032` | `415254494643544d4f4f4e30313032` | yes |
| asset-003 | `e5a2bcc51466942a9db1da62471a1b682bde3abcebafee2c7fb1e378415254494643544d4f4f4e30313138` | `415254494643544d4f4f4e30313138` | yes |
| asset-004 | `e5a2bcc51466942a9db1da62471a1b682bde3abcebafee2c7fb1e378415254494643544d4f4f4e30313336` | `415254494643544d4f4f4e30313336` | yes |
| asset-005 | `e5a2bcc51466942a9db1da62471a1b682bde3abcebafee2c7fb1e378415254494643544d4f4f4e30323035` | `415254494643544d4f4f4e30323035` | yes |
| asset-006 | `e5a2bcc51466942a9db1da62471a1b682bde3abcebafee2c7fb1e378415254494643544d4f4f4e30323233` | `415254494643544d4f4f4e30323233` | yes |
| asset-007 | `e5a2bcc51466942a9db1da62471a1b682bde3abcebafee2c7fb1e378415254494643544d4f4f4e30323432` | `415254494643544d4f4f4e30323432` | yes |
| asset-008 | `e5a2bcc51466942a9db1da62471a1b682bde3abcebafee2c7fb1e378415254494643544d4f4f4e30333130` | `415254494643544d4f4f4e30333130` | yes |
| asset-009 | `e5a2bcc51466942a9db1da62471a1b682bde3abcebafee2c7fb1e378415254494643544d4f4f4e30333239` | `415254494643544d4f4f4e30333239` | yes |
| asset-010 | `e5a2bcc51466942a9db1da62471a1b682bde3abcebafee2c7fb1e378415254494643544d4f4f4e30333437` | `415254494643544d4f4f4e30333437` | yes |

---

## Schema classification preview

| Metric | Value |
|--------|-------|
| `schema_fit` | fits_with_notes |
| Failures logged | 4 (see audit) |

**Do not modify schema or definitions based on this document alone.** Cross-collection D-class review in `research/schema-gap-log.md`.
