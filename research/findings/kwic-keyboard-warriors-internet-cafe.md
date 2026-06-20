# Findings: KWIC - Keyboard Warriors Internet Cafe

Phase 3A metadata discovery — 2026-06-09

**Policy ID:** `c72d0438330ed1346f4437fcc1c263ea38e933c1124c8d0f2abc6312`  
**Samples:** 10 Blockfrost `GET /assets/{unit}` responses in `research/raw-samples/kwic-keyboard-warriors-internet-cafe/`  
**Metadata-bearing samples:** 100%

---

## Metadata summary

Phase 3A Top-100 include_now (TapTools rank 50). Type: gaming. Discovery only — no final definition in this pass.. Blockfrost standard signal: **CIP25v1**. Primary trait layout: **root_flat_keys** — Flat trait-like keys at metadata root.

Top-level keys observed: `Body`, `Head`, `Side`, `name`, `Bling`, `image`, `Faction`, `project`, `Background`, `Foreground`, `Back Attachment`, `Head Attachment`.

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

- `Body`
- `Head`
- `Side`
- `Bling`
- `Faction`
- `Background`
- `Foreground`
- `Back Attachment`
- `Head Attachment`

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

_No notable nested sections beyond standard fields_

---

## Expected registry mappings

- Trait extraction: Use `extraction.strategy: root_flat_keys` or per-key `direct_path`
- Media: `$.image` standard mapping
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
| asset-001 | `c72d0438330ed1346f4437fcc1c263ea38e933c1124c8d0f2abc63124b57494330333931` | `4b57494330333931` | yes |
| asset-002 | `c72d0438330ed1346f4437fcc1c263ea38e933c1124c8d0f2abc63124b57494330393331` | `4b57494330393331` | yes |
| asset-003 | `c72d0438330ed1346f4437fcc1c263ea38e933c1124c8d0f2abc63124b57494337343131` | `4b57494337343131` | yes |
| asset-004 | `c72d0438330ed1346f4437fcc1c263ea38e933c1124c8d0f2abc63124b57494335343735` | `4b57494335343735` | yes |
| asset-005 | `c72d0438330ed1346f4437fcc1c263ea38e933c1124c8d0f2abc63124b57494337363333` | `4b57494337363333` | yes |
| asset-006 | `c72d0438330ed1346f4437fcc1c263ea38e933c1124c8d0f2abc63124b57494337333437` | `4b57494337333437` | yes |
| asset-007 | `c72d0438330ed1346f4437fcc1c263ea38e933c1124c8d0f2abc63124b57494336393635` | `4b57494336393635` | yes |
| asset-008 | `c72d0438330ed1346f4437fcc1c263ea38e933c1124c8d0f2abc63124b57494334323831` | `4b57494334323831` | yes |
| asset-009 | `c72d0438330ed1346f4437fcc1c263ea38e933c1124c8d0f2abc63124b57494334343339` | `4b57494334343339` | yes |
| asset-010 | `c72d0438330ed1346f4437fcc1c263ea38e933c1124c8d0f2abc63124b57494332363131` | `4b57494332363131` | yes |

---

## Schema classification preview

| Metric | Value |
|--------|-------|
| `schema_fit` | fits_with_notes |
| Failures logged | 5 (see audit) |

**Do not modify schema or definitions based on this document alone.** Cross-collection D-class review in `research/schema-gap-log.md`.
