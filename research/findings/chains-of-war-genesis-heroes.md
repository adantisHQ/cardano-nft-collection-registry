# Findings: Chains of War - Genesis Heroes

Phase 3A metadata discovery — 2026-06-09

**Policy ID:** `a587ce7893ec56fa6136e483499d2a8210e29c34b7dc673446128875`  
**Samples:** 10 Blockfrost `GET /assets/{unit}` responses in `research/raw-samples/chains-of-war-genesis-heroes/`  
**Metadata-bearing samples:** 100%

---

## Metadata summary

Phase 3A Top-100 include_now (TapTools rank 96). Type: gaming. Discovery only — no final definition in this pass.. Blockfrost standard signal: **CIP25v1**. Primary trait layout: **minimal_or_custom** — Minimal or custom layout.

Top-level keys observed: `name`, `Stats`, `image`, `Twitter`, `Website`, `Attributes`.

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

- `Stats`
- `Twitter`
- `Website`
- `Attributes`

---

## Media layout

- `image` string

---

## Socials and links

### Socials

| Field | Value |
|-------|-------|
| Twitter | `https://twitter.com/ChainsofWarNFT` |

### Links

| Field | Value |
|-------|-------|
| Website | `https://chainsofwar.io/` |

---

## License and royalties

| Area | Finding |
|------|---------|
| — | not present on-chain |

| Royalties | Not present in on-chain metadata samples |

---

## Custom fields

- `Stats` (nested object or section)
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
| asset-001 | `a587ce7893ec56fa6136e483499d2a8210e29c34b7dc673446128875436861696e734f665761723030313838` | `436861696e734f665761723030313838` | yes |
| asset-002 | `a587ce7893ec56fa6136e483499d2a8210e29c34b7dc673446128875436861696e734f665761723030363136` | `436861696e734f665761723030363136` | yes |
| asset-003 | `a587ce7893ec56fa6136e483499d2a8210e29c34b7dc673446128875436861696e734f665761723039303234` | `436861696e734f665761723039303234` | yes |
| asset-004 | `a587ce7893ec56fa6136e483499d2a8210e29c34b7dc673446128875436861696e734f665761723039393330` | `436861696e734f665761723039393330` | yes |
| asset-005 | `a587ce7893ec56fa6136e483499d2a8210e29c34b7dc673446128875436861696e734f665761723031383730` | `436861696e734f665761723031383730` | yes |
| asset-006 | `a587ce7893ec56fa6136e483499d2a8210e29c34b7dc673446128875436861696e734f665761723035373537` | `436861696e734f665761723035373537` | yes |
| asset-007 | `a587ce7893ec56fa6136e483499d2a8210e29c34b7dc673446128875436861696e734f665761723032373730` | `436861696e734f665761723032373730` | yes |
| asset-008 | `a587ce7893ec56fa6136e483499d2a8210e29c34b7dc673446128875436861696e734f665761723033303934` | `436861696e734f665761723033303934` | yes |
| asset-009 | `a587ce7893ec56fa6136e483499d2a8210e29c34b7dc673446128875436861696e734f665761723033333138` | `436861696e734f665761723033333138` | yes |
| asset-010 | `a587ce7893ec56fa6136e483499d2a8210e29c34b7dc673446128875436861696e734f665761723034303734` | `436861696e734f665761723034303734` | yes |

---

## Schema classification preview

| Metric | Value |
|--------|-------|
| `schema_fit` | fits_with_notes |
| Failures logged | 3 (see audit) |

**Do not modify schema or definitions based on this document alone.** Cross-collection D-class review in `research/schema-gap-log.md`.
