# Phase 1 Summary

Phase 1 validated the Collection Definition Record model against 10 high-signal Cardano NFT collections using Blockfrost samples, audits, and registry definitions.

**Date:** 2026-06-08  
**Samples:** 10 assets per collection (`research/raw-samples/<collection_id>/`)  
**Definitions:** `registry/collections/`  
**Normalization report:** [phase-1-normalization-report.md](phase-1-normalization-report.md)

---

## Definition status (Phase 1)

| Collection | `collection_id` | Status | Rationale |
|------------|-----------------|--------|-----------|
| SpaceBudz | `spacebudz` | **partial** | CIP-68 hex-encoded `traits` not decoded (GAP-002) |
| Clay Nation | `clay-nation` | **complete** | Flat root traits fully mapped |
| Pavia | `pavia` | **complete** | Land parcel fields mapped via `array_singleton_object` |
| ADA Handle | `ada-handle` | **partial** | Identity layout mapped; null-metadata policy samples; handle variants |
| DEADPXLZ | `deadpxlz` | **complete** | `key_value_array` + tags array; HTML media mapped |
| Boss Cat Rocket Club | `boss-cat-rocket-club` | **complete** | Flat root PFP traits mapped |
| Cornucopias Land | `cornucopias-land-zones-1-3` | **partial** | This policy is one land slice; broader Cornucopias ecosystem unresolved |
| Cardano Summit 2021 | `cardano-summit-2021` | **complete** | Valid name + image only layout (no traits) |
| The Mallard Order | `the-mallard-order` | **complete** | 14 traits via `array_singleton_object` on `Attributes` |
| Jellycubes | `jellycubes` | **complete** | Flat root RPG/cube traits + array image |

Absent on-chain socials, license, and royalties did **not** drive `partial` status.

---

## What the registry model handled successfully

| Capability | Phase 1 evidence |
|------------|------------------|
| **Flat root traits** | Clay Nation, Boss Cat, Jellycubes — `root_flat_keys` |
| **Standard CIP-25 image** | All collections with on-chain metadata |
| **Minimal event badges** | Cardano Summit 2021 — empty `trait_mappings` is valid |
| **Identity namespace** | ADA Handle — `core.*`, handle name, terms URL |
| **On-chain socials/links** | Mallard Order, Jellycubes — root `Twitter`/`Website`; Cornucopias — nested `media.*` |
| **Multi-file media** | Cornucopias — `files[]` via `media_mappings.files` |
| **HTML / dual media** | DEADPXLZ — `image` + `animation` from `src` |
| **Sourced values** | Registry-level website (Pavia), explicit royalty absence |
| **Collection-level caveats** | `indexing_notes` separated from per-sample extraction warnings in normalization reporting |

**Normalization (parsed samples):** 7 of 10 collections reached **0 failures** and **0 extraction warnings** on all parsed samples. Three collections had **1 skipped null-metadata sample** each (policy/reference assets), classified as `skipped_null_metadata`, not failures.

---

## Extraction strategies required

| Strategy | Collections | Use case |
|----------|-------------|----------|
| `root_flat_keys` | Clay Nation, Boss Cat, Jellycubes | Traits as top-level metadata fields |
| `array_singleton_object` | The Mallard Order, Pavia | `Attributes[]` and `-----Land Sale 1-----[]` layouts (GAP-001) |
| `key_value_array` | DEADPXLZ | `properties[{key,value}]` |
| `direct_path` | ADA Handle, Cornucopias, SpaceBudz | Nested paths, scalars, encoded blobs |
| *(none — image only)* | Cardano Summit 2021 | No traits |

GAP-001 (array-of-single-key-object groups) is **resolved** in schema/parser via `array_singleton_object`.

---

## What remains unresolved

| Item | Status | Collections |
|------|--------|-------------|
| **GAP-002: CIP-68 hex-encoded traits** | Observed (1 collection) | SpaceBudz — raw `traits`/`type` strings stored, not decoded to PFP traits |
| **DEADPXLZ `tags[]`** | Documented limitation | Visual tags kept as single array trait; not split per tag without extra conventions |
| **Pavia bare IPFS CIDs** | Indexing note | Some `image` values lack `ipfs://` prefix |
| **Cornucopias ecosystem scope** | Partial definition | Land zones 1–3 only; vehicles, domes, weapons use other policies |
| **Null-metadata reference assets** | Expected | ADA Handle, Boss Cat, Mallard, Jellycubes — skip, do not fail |
| **Creator confirmation** | Not done | All definitions derived from on-chain samples and public knowledge |

No new **D-class** schema gaps were identified beyond GAP-002 (single collection, edge case).

---

## Schema readiness for Phase 2

**Ready to proceed.** Phase 1 confirmed:

1. The Collection Definition Record can represent diverse real layouts without schema changes.
2. Extraction strategies cover the main Phase 1 patterns; GAP-001 is closed.
3. `definition_status` semantics distinguish **layout completeness** from **optional field absence**.
4. Normalization reporting separates definition notes, extraction warnings, skipped null metadata, and true failures.

Phase 2 should stress **variations** not covered by Phase 1 baseline collections.

---

## Recommended Phase 2 selection strategy

Use Phase 2 to surface patterns Phase 1 did not fully exercise. Prioritize **metadata structure diversity** over market rank.

| Priority | Target variation | Example from Phase 1 candidates doc |
|----------|------------------|-------------------------------------|
| 1 | Companion / multi-policy | Boss Cat Rocket Parts |
| 2 | Sub-collection / ecosystem | Pitches at Clay Nation |
| 3 | Collab drops | Clay Nation x Good Charlotte |
| 4 | Alternate trait containers | Chilled Kongs, more `properties[]` / array layouts |
| 5 | Media-heavy / linked content | Book.io Gutenberg |
| 6 | Membership / non-PFP | UnboundedEarth, membership passes |
| 7 | Broken or sparse metadata | Collections flagged `unknown` in dataset analysis |
| 8 | CIP-68 beyond SpaceBudz | Seek second collection with encoded traits to confirm or close GAP-002 |

**Selection rules for Phase 2:**

- Include at least **2 multi-policy** or companion-policy collections.
- Include at least **1** collection with sparse or missing on-chain metadata.
- Include at least **1** media-linked or non-image-primary collection.
- Re-use Phase 1 normalization reporting semantics; do not treat skipped null metadata as failures.
- Log new **D-class** gaps only when the same insufficiency appears in **2+** audited collections.

Do not add Phase 2 collection definitions until the Phase 2 batch is confirmed.

---

## Related artifacts

| Artifact | Path |
|----------|------|
| Normalization report | [phase-1-normalization-report.md](phase-1-normalization-report.md) |
| Schema gap log | [../schema-gap-log.md](../schema-gap-log.md) |
| Per-collection findings | `research/findings/<collection_id>.md` |
| Per-collection audits | `research/audits/<collection_id>.audit.md` |
| Definition status docs | [../../docs/registry-model.md](../../docs/registry-model.md) |
