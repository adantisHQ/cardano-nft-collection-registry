# Findings: DEADPXLZ

Phase 1 metadata discovery — 2026-06-08

**Policy ID:** `1ec85dcee27f2d90ec1f9a1e4ce74a667dc9be8b184463223f9c9601`  
**Samples:** 10 Blockfrost `GET /assets/{unit}` responses in `research/raw-samples/deadpxlz/`

---

## Metadata summary

DEADPXLZ uses CIP-25v1 with HTML-forward media: `src` (interactive), `image` (preview), `type: text/html`. Traits split across `tags` string array and `properties` as `[{key,value}]` pairs.

---

## Detected standards

| Signal | Finding |
|--------|---------|
| Blockfrost standard | CIP25v1 |
| Metadata root | `onchain_metadata` (Blockfrost asset response field) |
| Sample source | Blockfrost mainnet, unmodified JSON |

---

## Trait layout

`tags[]` visual tags; `properties[]` structured key/value (e.g. type=dead)

---

## Media layout

`src` + `image` IPFS; `type` MIME

---

## Socials, links, license, royalties

| Area | Finding |
|------|---------|
| Socials | See audit — mostly absent on-chain except where noted in findings |
| Links | Collection-specific; see audit |
| License | Generally absent on-chain (class A) |
| Royalties | Not present in on-chain metadata samples (class A) |

---

## Notable customizations

Dual media (`src` HTML + `image`); non-object trait encoding

---

## Expected registry mappings

Map tags as traits; map properties entries individually; animation from `$.src`

---

## Potential indexing issues

Properties array pattern differs from attributes object; requires per-key extraction

---

## Sample inventory

| Label | Asset unit | Asset name (hex) |
|-------|------------|------------------|
| asset-001 | `1ec85dcee27f2d90ec1f9a1e4ce74a667dc9be8b184463223f9c960150584c31` | `50584c31` |
| asset-002 | `1ec85dcee27f2d90ec1f9a1e4ce74a667dc9be8b184463223f9c960150584c3130` | `50584c3130` |
| asset-003 | `1ec85dcee27f2d90ec1f9a1e4ce74a667dc9be8b184463223f9c960150584c3131` | `50584c3131` |
| asset-004 | `1ec85dcee27f2d90ec1f9a1e4ce74a667dc9be8b184463223f9c960150584c3232` | `50584c3232` |
| asset-005 | `1ec85dcee27f2d90ec1f9a1e4ce74a667dc9be8b184463223f9c960150584c3335` | `50584c3335` |
| asset-006 | `1ec85dcee27f2d90ec1f9a1e4ce74a667dc9be8b184463223f9c960150584c3438` | `50584c3438` |
| asset-007 | `1ec85dcee27f2d90ec1f9a1e4ce74a667dc9be8b184463223f9c960150584c3536` | `50584c3536` |
| asset-008 | `1ec85dcee27f2d90ec1f9a1e4ce74a667dc9be8b184463223f9c960150584c3730` | `50584c3730` |
| asset-009 | `1ec85dcee27f2d90ec1f9a1e4ce74a667dc9be8b184463223f9c960150584c3834` | `50584c3834` |
| asset-010 | `1ec85dcee27f2d90ec1f9a1e4ce74a667dc9be8b184463223f9c960150584c3939` | `50584c3939` |

---

## Schema classification preview

| Metric | Value |
|--------|-------|
| `schema_fit` | fits_with_notes |
| Failures logged | 5 (see audit) |

**Do not modify schema or definitions based on this document alone.** Cross-collection D-class review in `research/schema-gap-log.md`.
