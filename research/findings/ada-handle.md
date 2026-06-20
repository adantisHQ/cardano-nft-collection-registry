# Findings: ADA Handle

Phase 1 metadata discovery — 2026-06-08

**Policy ID:** `f0ff48bbb7bbe9d59a40f1ce90e9e9d0ff5002ec48f232b49ca0fb9a`  
**Samples:** 10 Blockfrost `GET /assets/{unit}` responses in `research/raw-samples/ada-handle/`

---

## Metadata summary

ADA Handle metadata is identity-oriented CIP-25v1: `$handle`-style `name`, `core` namespace (prefix, version, og flag, terms URL, encoding), `website`, `description`, empty `augmentations` array.

---

## Detected standards

| Signal | Finding |
|--------|---------|
| Blockfrost standard | CIP25v1 |
| Metadata root | `onchain_metadata` (Blockfrost asset response field) |
| Sample source | Blockfrost mainnet, unmodified JSON |

---

## Trait layout

Not trait-grid oriented; identity fields under `core.*` and handle `name`

---

## Media layout

`image` → IPFS avatar

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

`core.termsofuse`, `core.handleEncoding`, `core.prefix` ($)

---

## Expected registry mappings

Identity via `identity.display_name` → `$.name`; links via `$.website`; terms via `$.core.termsofuse`

---

## Potential indexing issues

Policy-level asset (null asset_name) may appear in policy listings without metadata

---

## Sample inventory

| Label | Asset unit | Asset name (hex) |
|-------|------------|------------------|
| asset-001 | `f0ff48bbb7bbe9d59a40f1ce90e9e9d0ff5002ec48f232b49ca0fb9a` | — |
| asset-002 | `f0ff48bbb7bbe9d59a40f1ce90e9e9d0ff5002ec48f232b49ca0fb9a6477686974652e616461` | `6477686974652e616461` |
| asset-003 | `f0ff48bbb7bbe9d59a40f1ce90e9e9d0ff5002ec48f232b49ca0fb9a68616e646c652e616461` | `68616e646c652e616461` |
| asset-004 | `f0ff48bbb7bbe9d59a40f1ce90e9e9d0ff5002ec48f232b49ca0fb9a6767` | `6767` |
| asset-005 | `f0ff48bbb7bbe9d59a40f1ce90e9e9d0ff5002ec48f232b49ca0fb9a657879` | `657879` |
| asset-006 | `f0ff48bbb7bbe9d59a40f1ce90e9e9d0ff5002ec48f232b49ca0fb9a636f6e7472696275746f7273` | `636f6e7472696275746f7273` |
| asset-007 | `f0ff48bbb7bbe9d59a40f1ce90e9e9d0ff5002ec48f232b49ca0fb9a7573` | `7573` |
| asset-008 | `f0ff48bbb7bbe9d59a40f1ce90e9e9d0ff5002ec48f232b49ca0fb9a6576696c` | `6576696c` |
| asset-009 | `f0ff48bbb7bbe9d59a40f1ce90e9e9d0ff5002ec48f232b49ca0fb9a6c75636173` | `6c75636173` |
| asset-010 | `f0ff48bbb7bbe9d59a40f1ce90e9e9d0ff5002ec48f232b49ca0fb9a6769726c` | `6769726c` |

---

## Schema classification preview

| Metric | Value |
|--------|-------|
| `schema_fit` | fits |
| Failures logged | 4 (see audit) |

**Do not modify schema or definitions based on this document alone.** Cross-collection D-class review in `research/schema-gap-log.md`.
