# Definition Readiness

Classification of all **30 audited collections** (Phase 1 + Phase 2) for registry definition authoring and end-to-end validation.

**Date:** 2026-06-08  
**Sources:** completed audits, findings, Phase 1/2 discovery summaries, `research/schema-gap-log.md`

**Excluded:** `example-collection.json` (schema demonstration only, not audited)

---

## Classification key

| Status | Meaning |
|--------|---------|
| **ready** | Full definition can be authored; normalization expected to succeed on parsed samples without schema changes |
| **ready_with_notes** | Representable with current schema; requires `indexing_notes`, `partial` status, or documented normalization caveats |
| **deferred** | Audit complete but definition authoring deferred pending creator input or batch policy |
| **blocked** | Unresolved schema/parser gap prevents complete trait normalization |

---

## Phase 1 (10 collections)

| Collection | `collection_id` | Status | Rationale |
|------------|-----------------|--------|-----------|
| Clay Nation | `clay-nation` | **ready** | Flat root traits; Phase 1 definition complete |
| Pavia | `pavia` | **ready** | `array_singleton_object` land sections; definition complete |
| DEADPXLZ | `deadpxlz` | **ready** | `key_value_array` + tags; definition complete |
| Boss Cat Rocket Club | `boss-cat-rocket-club` | **ready** | Flat root PFP; definition complete |
| Cardano Summit 2021 | `cardano-summit-2021` | **ready** | Minimal name + image; no traits |
| The Mallard Order | `the-mallard-order` | **ready** | `array_singleton_object` on Attributes; definition complete |
| Jellycubes | `jellycubes` | **ready** | Flat root + array image; definition complete |
| ADA Handle | `ada-handle` | **ready_with_notes** | Identity layout mapped; null-metadata policy samples expected |
| Cornucopias Land zones 1–3 | `cornucopias-land-zones-1-3` | **ready_with_notes** | Definition complete for this policy; broader Cornucopias ecosystem is partial scope |
| SpaceBudz | `spacebudz` | **blocked** | GAP-002: hex-encoded CIP-68 trait blobs not decodable via registry strategies |

---

## Phase 2 (20 collections)

| Collection | `collection_id` | Status | Rationale |
|------------|-----------------|--------|-----------|
| Boss Cat Rocket Parts | `boss-cat-rocket-parts` | **ready** | Component flat traits (Type, Color, Model) |
| Pitches at Clay Nation | `pitches-at-clay-nation` | **ready** | Land parcel flat traits |
| Yummi Universe - Naru | `yummi-universe-naru` | **ready** | Standard `attributes` object |
| OREMOB | `oremob` | **ready** | Flat root gaming traits + files[] |
| OREMOB CASES | `oremob-cases-encase-art` | **ready** | Component flat traits |
| Boss Planet Real Estate | `boss-planet-real-estate` | **ready** | Coordinate/ district flat traits |
| UnboundedEarth | `unbounded-earth` | **ready** | Section-prefixed land keys + link |
| Cabins by The Ape Society | `cabins-ape-society` | **ready** | Parcel/address flat traits + files[] |
| Introverts Membership Card | `introverts-membership-card` | **ready** | Pass + Official Links (`array_singleton_object`) |
| Smart Places | `smart-places` | **ready** | Geo land traits + files[] |
| Chilled Kongs | `chilled-kongs` | **ready** | Flat root PFP + files[] |
| Chilled Kongs Vox Avatar | `chilled-kongs-vox-avatar` | **ready** | Flat traits + GLTF files[] + on-chain socials |
| Cornucopias GTI Javelin 2022 | `cornucopias-gti-javelin-2022` | **ready_with_notes** | Cornucopias ecosystem slice; nested `media` socials |
| Clay Nation x Good Charlotte | `clay-nation-good-charlotte` | **ready_with_notes** | traits[] as colon-separated strings; array mapped, split deferred |
| Book.io Gutenberg Bible | `book-io-gutenberg-bible` | **ready_with_notes** | Document stack: data URI, sha256, array attributes |
| Book.io Wizard Tim Audiobook | `book-io-wizard-tim-audiobook` | **ready_with_notes** | Audiobook files[] + attributes |
| Book.io Whitepaper 2.0 | `book-io-whitepaper-2` | **ready_with_notes** | extraAttributes; no on-chain license text |
| cNFTcon Legacy Pass | `cnftcon-legacy-pass` | **ready_with_notes** | Nested Website/publisher objects |
| Epoch Genesis v2 | `epoch-genesis-v2` | **ready_with_notes** | Dual music_metadata v1/v2; `first_existing_path` mappings |
| [DEPRECATED] Jungle Wenno Cat | `deprecated-jungle-wenno-cat` | **ready_with_notes** | Split IPFS image array; trait key with space |

---

## Counts

| Status | Count |
|--------|------:|
| ready | 19 |
| ready_with_notes | 10 |
| deferred | 0 |
| blocked | 1 |

**Definitions authored:** 29 of 30 audited collections (all except blocked SpaceBudz retains existing partial definition from Phase 1).

---

## Blocked detail

### spacebudz

- **Gap:** GAP-002 (observed, single collection)
- **Issue:** `traits` and `type` are hex-encoded blobs on CIP-68 reference metadata
- **Workaround:** Definition maps raw encoded fields; decoded PFP traits require external decoder or future schema work after second confirming collection
- **Action:** Do not block other collections; keep `definition_status: partial`

---

## Deferred

None. All non-blocked audited collections received definitions in this pass.

---

## Definition authoring notes

1. Phase 1 complete definitions were **not modified** (stable per project policy).
2. Phase 2 placeholders from `prepare-phase` were replaced with full definitions for all ready / ready_with_notes collections.
3. `definition_status: partial` used where scope or normalization caveats remain (Book.io cluster, Cornucopias GTI, epoch-genesis-v2, clay-nation-good-charlotte, deprecated-jungle-wenno-cat, cnftcon-legacy-pass).
4. No schema or extraction strategy changes were made.

---

## Next validation step

Run end-to-end normalization: `node tmp/e2e-normalization-report.mjs`  
See [end-to-end-validation.md](end-to-end-validation.md).
