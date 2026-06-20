# End-to-End Registry Validation

Generated: 2026-06-08

Normalization of Blockfrost raw samples using **registry definitions only** (`registry/collections/*.json`). No collection-specific parser code beyond the shared core normalizer and declared extraction strategies.

## Scope

- **30 audited collections** (Phase 1 + Phase 2)
- Excludes `example-collection.json` (schema demo only)

## Aggregate results

| Metric | Value |
|--------|------:|
| Collections tested | 30 |
| Collections with 0 failures | 30 |
| Collections with 0 extraction warnings (parsed samples) | 27 |
| Total samples processed | 300 |
| Samples with metadata parsed | 296 |
| Skipped (null metadata) | 4 |
| Total traits extracted | 1780 |
| Total media fields extracted | 456 |
| Total socials extracted | 53 |
| Total links extracted | 216 |
| Extraction warnings (aggregate) | 59 |
| Failures | 0 |

## Can a third-party indexer use these definitions without custom collection code?

**Mostly yes, with documented exceptions.**

A third-party indexer can load a Collection Definition Record, call the shared normalizer (`normalizeCollectionMetadata`), and obtain traits, media, socials, and links for **27 of 30** audited collections with **zero extraction warnings** on parsed samples.

**Three collections need post-processing or accept extraction warnings:**

| Collection | Issue |
|------------|-------|
| spacebudz | GAP-002 hex blobs; encoded fields stored, not decoded traits (20 warnings) |
| clay-nation-good-charlotte | traits[] colon strings not split into per-trait map |
| deprecated-jungle-wenno-cat | split IPFS image array; partial image URI |

**Additional note:** `book-io-gutenberg-bible` and `deadpxlz` produce **optional-trait-not-found warnings** on some samples (variable attribute keys / parallel tag paths) but **zero failures** — expected for sparse optional mappings.

## Summary table

| Collection | Def status | Samples | Parsed | Skipped | Traits | Media | Socials | Links | Ext warnings | Failures |
|------------|------------|--------:|-------:|--------:|-------:|------:|--------:|------:|-------------:|---------:|
| SpaceBudz | partial | 10 | 10 | 0 | 40 | 10 | 0 | 0 | 20 | 0 |
| Clay Nation | complete | 10 | 10 | 0 | 90 | 10 | 0 | 0 | 0 | 0 |
| Pavia | complete | 10 | 10 | 0 | 30 | 10 | 0 | 10 | 0 | 0 |
| ADA Handle | partial | 10 | 9 | 1 | 36 | 9 | 0 | 18 | 0 | 0 |
| DEADPXLZ | complete | 10 | 10 | 0 | 20 | 20 | 0 | 0 | 10 | 0 |
| Boss Cat Rocket Club | complete | 10 | 9 | 1 | 45 | 9 | 0 | 0 | 0 | 0 |
| Cornucopias Land Sale - Zones 1-3 | partial | 10 | 10 | 0 | 60 | 20 | 0 | 20 | 0 | 0 |
| Cardano Summit 2021 | complete | 10 | 10 | 0 | 0 | 10 | 0 | 0 | 0 | 0 |
| The Mallard Order | complete | 10 | 9 | 1 | 126 | 9 | 9 | 9 | 0 | 0 |
| Jellycubes | complete | 10 | 9 | 1 | 162 | 9 | 9 | 9 | 0 | 0 |
| Boss Cat Rocket Parts | complete | 10 | 10 | 0 | 30 | 10 | 0 | 0 | 0 | 0 |
| Pitches at Clay Nation | complete | 10 | 10 | 0 | 50 | 10 | 0 | 0 | 0 | 0 |
| Clay Nation x Good Charlotte by Clay Mates | partial | 10 | 10 | 0 | 20 | 10 | 0 | 0 | 0 | 0 |
| Yummi Universe - Naru | complete | 10 | 10 | 0 | 40 | 10 | 0 | 0 | 0 | 0 |
| Chilled Kongs Vox Avatar | complete | 10 | 10 | 0 | 70 | 20 | 10 | 20 | 0 | 0 |
| Epoch Genesis v2 | partial | 10 | 10 | 0 | 60 | 20 | 5 | 0 | 0 | 0 |
| OREMOB | complete | 10 | 10 | 0 | 210 | 20 | 0 | 0 | 0 | 0 |
| OREMOB CASES by ENCASE.ART | complete | 10 | 10 | 0 | 80 | 20 | 0 | 0 | 0 | 0 |
| Cornucopias GTI Javelin 2022 | partial | 10 | 10 | 0 | 130 | 20 | 0 | 20 | 0 | 0 |
| Boss Planet Real Estate | complete | 10 | 10 | 0 | 30 | 10 | 0 | 0 | 0 | 0 |
| UnboundedEarth | complete | 10 | 10 | 0 | 40 | 20 | 0 | 10 | 0 | 0 |
| Cabins by The Ape Society | complete | 10 | 10 | 0 | 70 | 20 | 0 | 0 | 0 | 0 |
| Book.io - Gutenberg Bible Collection | partial | 10 | 10 | 0 | 21 | 20 | 0 | 20 | 29 | 0 |
| Book.io - The Wizard Tim Audiobook | partial | 10 | 10 | 0 | 20 | 20 | 0 | 10 | 0 | 0 |
| Book.io - Whitepaper 2.0 | partial | 10 | 10 | 0 | 30 | 20 | 0 | 20 | 0 | 0 |
| Introverts Membership Card | complete | 10 | 10 | 0 | 40 | 10 | 20 | 10 | 0 | 0 |
| cNFTcon Legacy Pass | partial | 10 | 10 | 0 | 20 | 30 | 0 | 20 | 0 | 0 |
| Smart Places | complete | 10 | 10 | 0 | 60 | 20 | 0 | 10 | 0 | 0 |
| Chilled Kongs | complete | 10 | 10 | 0 | 80 | 20 | 0 | 0 | 0 | 0 |
| [DEPRECATED] Jungle Wenno Cat | partial | 10 | 10 | 0 | 70 | 10 | 0 | 10 | 0 | 0 |

## Collections requiring custom logic

| Collection | Reason |
|------------|--------|
| spacebudz | GAP-002 hex trait/type decoding beyond registry extraction strategies |
| clay-nation-good-charlotte | traits[] `"Key: Value"` strings not decomposed into per-trait map |
| deprecated-jungle-wenno-cat | split IPFS image array join not handled by media_mappings |

## Onboarding readiness recommendation

Based on 30 audited real collections and end-to-end normalization:

| Scale | Ready? | Rationale |
|-------|--------|-----------|
| **A. ~100 collections** | **Yes** | Phase 1+2 cover dominant CIP-25 layouts (flat root, attributes object, array_singleton_object, key_value_array, files[], minimal badges). Expect ~5–10% needing `partial` status or indexing notes. |
| **B. ~500 collections** | **Yes, with ops process** | Same schema sufficient; requires batch audit pipeline, definition authoring workflow, and creator input for license/ecosystem grouping. Manual review for edge cases at scale. |
| **C. 1000+ collections** | **Conditional** | Schema and strategies scale; operational capacity (audits, creator confirmation, null-metadata filtering) becomes the bottleneck—not the registry model. GAP-002 (CIP-68 hex traits) and unknown TapTools rows need a defined defer/block policy before fully automated onboarding. |

## Reporting semantics

Same as Phase 1 normalization report: `definition_notes` from indexing_notes are not multiplied per sample; null metadata samples are skipped not failed unless explicitly required.

Raw metrics JSON: `tmp/e2e-normalization-report.json`

