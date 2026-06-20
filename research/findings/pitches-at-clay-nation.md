# Findings: Pitches at Clay Nation

Phase 2 metadata discovery — 2026-06-08

**Policy ID:** `13e3f9964fe386930ec178d12a43c96a7f5841270c2146fc509a9f3e`  
**Samples:** 10 Blockfrost `GET /assets/{unit}` responses in `research/raw-samples/pitches-at-clay-nation/`  
**Metadata-bearing samples:** 100%

---

## Metadata summary

Phase 2 multi-policy: Clay Nation sub-collection (land/pitch assets); tests ecosystem policy boundaries and layout drift from core Clay Nation.. Blockfrost standard signal: **CIP25v1**. Primary trait layout: **root_flat_keys** — Flat trait-like keys at metadata root.

Top-level keys observed: `X`, `Y`, `Size`, `Zone`, `name`, `image`, `Serial #`, `mediaType`.

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

- `X`
- `Y`
- `Size`
- `Zone`
- `Serial #`

---

## Media layout

- `image` string
- mediaType: image/png

---

## Socials and links

### Socials

| Field | Value |
|-------|-------|
| X | `-78` |

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
| asset-001 | `13e3f9964fe386930ec178d12a43c96a7f5841270c2146fc509a9f3e436c61794e6174696f6e506974636831` | `436c61794e6174696f6e506974636831` | yes |
| asset-002 | `13e3f9964fe386930ec178d12a43c96a7f5841270c2146fc509a9f3e436c61794e6174696f6e506974636832` | `436c61794e6174696f6e506974636832` | yes |
| asset-003 | `13e3f9964fe386930ec178d12a43c96a7f5841270c2146fc509a9f3e436c61794e6174696f6e50697463683138` | `436c61794e6174696f6e50697463683138` | yes |
| asset-004 | `13e3f9964fe386930ec178d12a43c96a7f5841270c2146fc509a9f3e436c61794e6174696f6e50697463683336` | `436c61794e6174696f6e50697463683336` | yes |
| asset-005 | `13e3f9964fe386930ec178d12a43c96a7f5841270c2146fc509a9f3e436c61794e6174696f6e50697463683535` | `436c61794e6174696f6e50697463683535` | yes |
| asset-006 | `13e3f9964fe386930ec178d12a43c96a7f5841270c2146fc509a9f3e436c61794e6174696f6e50697463683733` | `436c61794e6174696f6e50697463683733` | yes |
| asset-007 | `13e3f9964fe386930ec178d12a43c96a7f5841270c2146fc509a9f3e436c61794e6174696f6e50697463683932` | `436c61794e6174696f6e50697463683932` | yes |
| asset-008 | `13e3f9964fe386930ec178d12a43c96a7f5841270c2146fc509a9f3e436c61794e6174696f6e5069746368313130` | `436c61794e6174696f6e5069746368313130` | yes |
| asset-009 | `13e3f9964fe386930ec178d12a43c96a7f5841270c2146fc509a9f3e436c61794e6174696f6e5069746368313239` | `436c61794e6174696f6e5069746368313239` | yes |
| asset-010 | `13e3f9964fe386930ec178d12a43c96a7f5841270c2146fc509a9f3e436c61794e6174696f6e5069746368313437` | `436c61794e6174696f6e5069746368313437` | yes |

---

## Schema classification preview

| Metric | Value |
|--------|-------|
| `schema_fit` | fits_with_notes |
| Failures logged | 4 (see audit) |

**Do not modify schema or definitions based on this document alone.** Cross-collection D-class review in `research/schema-gap-log.md`.
