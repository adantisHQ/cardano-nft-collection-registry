# Findings: Jellycubes

Phase 1 metadata discovery — 2026-06-08

**Policy ID:** `3ee441f40fe395a2e98eea1df7cf8816b0fca3d5d164893596ce306d`  
**Samples:** 10 Blockfrost `GET /assets/{unit}` responses in `research/raw-samples/jellycubes/`

---

## Metadata summary

Jellycubes CIP-25v1 3D object/RPG metadata: many flat root stats (`Class`, combat attributes), `image` as single-element array, `Description` as string array, plus `Twitter`/`Website`.

---

## Detected standards

| Signal | Finding |
|--------|---------|
| Blockfrost standard | CIP25v1 |
| Metadata root | `onchain_metadata` (Blockfrost asset response field) |
| Sample source | Blockfrost mainnet, unmodified JSON |

---

## Trait layout

Flat root keys (Class, Face, stats, cube parts); numeric and string values

---

## Media layout

`image[0]` IPFS; `Description[]` prose

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

`project`, combat scores, cube assembly part keys

---

## Expected registry mappings

Per-root-key trait mappings; image via `$.image[0]`; join Description array for display

---

## Potential indexing issues

Image as array; description as string array; flat root traits

---

## Sample inventory

| Label | Asset unit | Asset name (hex) |
|-------|------------|------------------|
| asset-001 | `3ee441f40fe395a2e98eea1df7cf8816b0fca3d5d164893596ce306d` | — |
| asset-002 | `3ee441f40fe395a2e98eea1df7cf8816b0fca3d5d164893596ce306d4a656c6c79637562652023323931` | `4a656c6c79637562652023323931` |
| asset-003 | `3ee441f40fe395a2e98eea1df7cf8816b0fca3d5d164893596ce306d4a656c6c79637562652023313035` | `4a656c6c79637562652023313035` |
| asset-004 | `3ee441f40fe395a2e98eea1df7cf8816b0fca3d5d164893596ce306d4a656c6c796375626520233930` | `4a656c6c796375626520233930` |
| asset-005 | `3ee441f40fe395a2e98eea1df7cf8816b0fca3d5d164893596ce306d4a656c6c7963756265202331303831` | `4a656c6c7963756265202331303831` |
| asset-006 | `3ee441f40fe395a2e98eea1df7cf8816b0fca3d5d164893596ce306d4a656c6c79637562652023323132` | `4a656c6c79637562652023323132` |
| asset-007 | `3ee441f40fe395a2e98eea1df7cf8816b0fca3d5d164893596ce306d4a656c6c7963756265202331303733` | `4a656c6c7963756265202331303733` |
| asset-008 | `3ee441f40fe395a2e98eea1df7cf8816b0fca3d5d164893596ce306d4a656c6c79637562652023393435` | `4a656c6c79637562652023393435` |
| asset-009 | `3ee441f40fe395a2e98eea1df7cf8816b0fca3d5d164893596ce306d4a656c6c7963756265202331313133` | `4a656c6c7963756265202331313133` |
| asset-010 | `3ee441f40fe395a2e98eea1df7cf8816b0fca3d5d164893596ce306d4a656c6c796375626520233237` | `4a656c6c796375626520233237` |

---

## Schema classification preview

| Metric | Value |
|--------|-------|
| `schema_fit` | fits_with_notes |
| Failures logged | 5 (see audit) |

**Do not modify schema or definitions based on this document alone.** Cross-collection D-class review in `research/schema-gap-log.md`.
