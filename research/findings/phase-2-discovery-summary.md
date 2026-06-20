# Phase 2 Discovery Summary

Phase 2 metadata discovery closure — 2026-06-08

**Batch:** 20 collections from [phase-2-selected.json](../phase-2-selected.json)  
**Samples:** 10 Blockfrost `GET /assets/{unit}` responses per collection under `research/raw-samples/<collection_id>/`  
**Artifacts:** 20 findings, 20 audits, placeholder definitions (not finalized)

**Constraints honored:** No schema changes, no parser changes, no final registry definitions, GAP-002 not addressed.

---

## Executive summary

Phase 2 successfully expanded layout coverage beyond Phase 1. **All 20 collections returned parseable CIP-25v1 on-chain metadata** in fetched samples (after skipping policy-index null-metadata assets). **No second CIP-68 hex-encoded trait collection was found** — Chilled Kongs Vox Avatar and Epoch Genesis v2 are CIP25v1, not GAP-002 confirmations.

The current schema and Phase 1 extraction strategies (`root_flat_keys`, `array_singleton_object`, `key_value_array`, `first_existing_path`, direct paths) are **sufficient to draft definitions for 18/20 collections**. Two collections need **extra normalization notes** before definitions: Epoch Genesis v2 (dual music-metadata versions) and deprecated Jungle Wenno Cat (split IPFS image array).

**Recommendation:** **Proceed with definitions now** for the straightforward majority. Defer Epoch Genesis v2 and Book.io cluster to a focused definition pass with explicit media/trait normalization rules. **Do not open new schema gaps** — no D-class issue appeared in 2+ Phase 2 collections that is not already covered by resolved GAP-001.

---

## New metadata patterns found

| Pattern | Collection(s) | Schema impact |
|---------|---------------|---------------|
| **Component/part metadata** (Type, Color, Model) | boss-cat-rocket-parts | Maps with `root_flat_keys` |
| **Land parcel coordinates** (X, Y, Zone, Serial) | pitches-at-clay-nation, boss-planet-real-estate, unbounded-earth | Maps with `root_flat_keys` |
| **Traits as string array** (`"Key: Value"`) | clay-nation-good-charlotte | Edge case (E); parse by splitting strings |
| **3D GLTF in `files[]`** | chilled-kongs-vox-avatar | Existing `media_mappings.files` |
| **Dual music metadata v1/v2** (flat vs `release` nest) | epoch-genesis-v2 | `first_existing_path`; no new schema |
| **Game vehicle + Cornucopias media nest** | cornucopias-gti-javelin-2022 | Same family as Phase 1 Cornucopias land |
| **Book.io document stack** (`data`, `sha256`, `files[]`, `extraAttributes`) | book-io-* (3 policies) | Direct paths + files mapping |
| **Membership pass + Official Links array** | introverts-membership-card | `array_singleton_object` (GAP-001) |
| **Event pass with nested link objects** | cnftcon-legacy-pass | Direct paths on nested objects |
| **Split IPFS image array** | deprecated-jungle-wenno-cat | Normalization rule (C), not schema gap |
| **Socials on asset metadata** (unusual for Cardano) | chilled-kongs-vox-avatar, epoch-genesis-v2 | `social_mappings` / link paths |

---

## Patterns already covered by Phase 1

| Phase 1 pattern | Phase 2 collections reusing it |
|-----------------|--------------------------------|
| Flat root PFP traits | boss-cat-rocket-parts, chilled-kongs, chilled-kongs-vox-avatar, smart-places, oremob, oremob-cases, cabins-ape-society, deprecated-jungle-wenno-cat |
| `attributes` object map | yummi-universe-naru, cornucopias-gti-javelin-2022, book-io-* |
| `files[]` multi-media | cornucopias-gti, book-io-*, epoch-genesis-v2, cnftcon-legacy-pass, chilled-kongs-vox-avatar |
| Socials under non-root paths | cornucopias-gti (`media` object — same as Phase 1 Cornucopias land) |
| Minimal pass/badge (name + image) | cnftcon-legacy-pass (extended with files/links) |
| Land/game scalar fields | boss-planet-real-estate, pitches-at-clay-nation, unbounded-earth |
| Array-of-single-key-object | introverts-membership-card (`Official Links`) — GAP-001 strategy applies |

---

## CIP-68 / GAP-002 status

| Collection | Expected | Observed |
|------------|----------|----------|
| chilled-kongs-vox-avatar | CIP-68 candidate | **CIP25v1** — flat traits + GLTF files |
| epoch-genesis-v2 | Encoding candidate | **CIP25v1** — music metadata |

**GAP-002 remains observed-only (SpaceBudz).** Phase 2 did not confirm a second hex-encoded trait blob collection. Do not implement CIP-68 trait decoding preemptively.

---

## Candidate schema gaps

| Candidate | Status | Reason |
|-----------|--------|--------|
| GAP-002 CIP-68 hex traits | **Still observed-only** | No Phase 2 confirmation |
| Traits string array (`"Key: Value"`) | **Not logged** | Single collection (clay-nation-good-charlotte) |
| Dual music metadata v1/v2 | **Not logged** | Single policy (epoch-genesis-v2); solvable with `first_existing_path` |
| Book.io `extraAttributes` | **Not logged** | Book.io cluster shares layout; maps as nested object |
| Split IPFS image array | **Not logged** | Single collection; normalization issue (C) |

**No new D-class schema insufficiencies** met the 2-collection threshold.

---

## Layout distribution (20 collections)

| Layout | Count | Collections |
|--------|------:|-------------|
| root_flat_keys | 12 | boss-cat-rocket-parts, pitches-at-clay-nation, chilled-kongs-vox-avatar, epoch-genesis-v2*, oremob, oremob-cases, boss-planet-real-estate, unbounded-earth, cabins-ape-society, smart-places, chilled-kongs, deprecated-jungle-wenno-cat |
| attributes_object | 5 | yummi-universe-naru, cornucopias-gti-javelin-2022, book-io-gutenberg-bible, book-io-wizard-tim-audiobook, book-io-whitepaper-2 |
| traits_string_array | 1 | clay-nation-good-charlotte |
| array_singleton_object | 1 | introverts-membership-card |
| minimal_or_custom | 1 | cnftcon-legacy-pass |

\*epoch-genesis-v2 auto-classified as root_flat_keys; manual review documents dual v1/v2 music layout (see findings).

---

## Collections representable with current schema

Ready for definition drafting (high confidence):

1. boss-cat-rocket-parts
2. pitches-at-clay-nation
3. yummi-universe-naru
4. oremob
5. oremob-cases-encase-art
6. cornucopias-gti-javelin-2022
7. boss-planet-real-estate
8. unbounded-earth
9. cabins-ape-society
10. introverts-membership-card
11. cnftcon-legacy-pass
12. smart-places
13. chilled-kongs
14. chilled-kongs-vox-avatar

Representable with notes / edge-case handling:

15. clay-nation-good-charlotte — traits string-array parsing  
16. book-io-gutenberg-bible — `data`, array-valued attributes  
17. book-io-wizard-tim-audiobook — audiobook files[]  
18. book-io-whitepaper-2 — `extraAttributes`; no on-chain license text found  
19. deprecated-jungle-wenno-cat — split image normalization  

Needs version-aware mapping pass:

20. epoch-genesis-v2 — dual music_metadata v1/v2 layouts in one policy  

---

## Collections needing manual creator input

| Collection | Gap type | Suggested input |
|------------|----------|-----------------|
| book-io-whitepaper-2 | No on-chain license/terms text | Off-chain rights / Book.io terms URL for registry `license_mappings` |
| epoch-genesis-v2 | Dual metadata versions in one policy | Confirm canonical field paths per version |
| clay-nation-good-charlotte | Trait labels embedded in strings | Confirm canonical trait names after split |
| cnftcon-legacy-pass | Nested link objects (`Website`, `publisher`) | Confirm primary project website |
| cornucopias-gti-javelin-2022 | Ecosystem grouping with Phase 1 Cornucopias land | Confirm shared `collection_group` metadata |

---

## Failure classification summary (Phase 2)

| Class | Approx. count | Notes |
|-------|---------------|-------|
| **A** — Missing data | Dominant | License/royalty still rare on-chain |
| **B** — Parser | 0 | No parser changes |
| **C** — Mapping | ~40+ | Flat root traits, nested socials, media quirks |
| **D** — Schema | 1 audit flag | introverts-membership-card — covered by GAP-001 resolution |
| **E** — Edge case | 1 | clay-nation-good-charlotte traits string array |

---

## Multi-policy ecosystem notes

| Ecosystem | Phase 2 policies | Relationship to Phase 1 |
|-----------|------------------|-------------------------|
| Boss Cat / Boss Planet | rocket-parts, boss-planet-real-estate | Extends Phase 1 Boss Cat Rocket Club |
| Clay Nation | pitches, good-charlotte collab | Extends Phase 1 Clay Nation |
| Chilled Kongs | base + vox avatar | New; paired policies |
| OREMOB | core + cases | New gaming ecosystem |
| Cornucopias | GTI Javelin 2022 | Extends Phase 1 land zones (partial) |
| Book.io | 3 document/media policies | New cluster |
| Yummi Universe | Naru | New seasonal line |

Registry definitions should document **ecosystem grouping in `definition_notes`**, not duplicate Phase 1 policy IDs.

---

## Recommendation

| Question | Answer |
|----------|--------|
| Address schema gaps first? | **No** — no new confirmed gaps |
| Address GAP-002? | **No** — not confirmed in Phase 2 |
| Create definitions now? | **Yes, in batches** |
| Suggested order | (1) Flat PFP / land / gaming batch (14 collections) → (2) Book.io cluster → (3) Epoch Genesis v2 + edge cases |

Placeholder definitions from `prepare-phase` exist under `registry/collections/` but were **not finalized** in this pass. Next step: author real definitions using findings + audits, reusing Phase 1 extraction patterns.

---

## Artifact index

| Artifact | Path |
|----------|------|
| Phase input | `research/phase-2-selected.json` |
| Raw samples | `research/raw-samples/<collection_id>/` |
| Findings | `research/findings/<collection_id>.md` |
| Audits | `research/audits/<collection_id>.audit.md` |
| Schema gaps | `research/schema-gap-log.md` |
| Fetch summary | `tmp/phase2-fetch-summary.json` |
| Analysis JSON | `tmp/phase2-analysis.json` |
