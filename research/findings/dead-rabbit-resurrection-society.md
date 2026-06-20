# Findings: Dead Rabbit Resurrection Society

Phase 3A metadata discovery — 2026-06-09

**Policy ID:** `de2340edc45629456bf695200e8ea32f948a653b21ada10bc6f0c554`  
**Samples:** 10 Blockfrost `GET /assets/{unit}` responses in `research/raw-samples/dead-rabbit-resurrection-society/`  
**Metadata-bearing samples:** 100%

---

## Metadata summary

Phase 3A Top-100 include_now (TapTools rank 22). Type: gaming. Discovery only — no final definition in this pass.. Blockfrost standard signal: **CIP25v1**. Primary trait layout: **minimal_or_custom** — Minimal or custom layout.

Top-level keys observed: `name`, `image`, `Twitter`, `Publisher`, `mediaType`, `Attributes`, `description`.

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

- `Twitter`
- `Publisher`
- `Attributes`

---

## Media layout

- `image` string
- mediaType: image/jpg

---

## Socials and links

### Socials

| Field | Value |
|-------|-------|
| Twitter | `@DeadRabbitRS` |

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

- `Attributes` (nested object or section)

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
| asset-001 | `de2340edc45629456bf695200e8ea32f948a653b21ada10bc6f0c5544452525335383030` | `4452525335383030` | yes |
| asset-002 | `de2340edc45629456bf695200e8ea32f948a653b21ada10bc6f0c5544452525336313536` | `4452525336313536` | yes |
| asset-003 | `de2340edc45629456bf695200e8ea32f948a653b21ada10bc6f0c5544452525332383431` | `4452525332383431` | yes |
| asset-004 | `de2340edc45629456bf695200e8ea32f948a653b21ada10bc6f0c5544452525333393933` | `4452525333393933` | yes |
| asset-005 | `de2340edc45629456bf695200e8ea32f948a653b21ada10bc6f0c5544452525336363035` | `4452525336363035` | yes |
| asset-006 | `de2340edc45629456bf695200e8ea32f948a653b21ada10bc6f0c5544452525332313638` | `4452525332313638` | yes |
| asset-007 | `de2340edc45629456bf695200e8ea32f948a653b21ada10bc6f0c5544452525330333538` | `4452525330333538` | yes |
| asset-008 | `de2340edc45629456bf695200e8ea32f948a653b21ada10bc6f0c5544452525330393232` | `4452525330393232` | yes |
| asset-009 | `de2340edc45629456bf695200e8ea32f948a653b21ada10bc6f0c5544452525331373331` | `4452525331373331` | yes |
| asset-010 | `de2340edc45629456bf695200e8ea32f948a653b21ada10bc6f0c5544452525332353636` | `4452525332353636` | yes |

---

## Schema classification preview

| Metric | Value |
|--------|-------|
| `schema_fit` | fits_with_notes |
| Failures logged | 4 (see audit) |

**Do not modify schema or definitions based on this document alone.** Cross-collection D-class review in `research/schema-gap-log.md`.
