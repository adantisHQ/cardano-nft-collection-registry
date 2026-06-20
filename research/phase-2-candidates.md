# Phase 2 Candidate Selection

Recommended Phase 2 validation batch derived from the local TapTools CSV, [dataset-analysis.md](dataset-analysis.md), [phase-1-candidates.md](phase-1-candidates.md), and [findings/phase-1-summary.md](findings/phase-1-summary.md).

**This is not the registry.** Policy IDs come from the CSV export and must be verified before audits.

**Goal:** Discover **new metadata and layout patterns** — not maximize market cap.

**Batch size:** 20 collections (within the 15–20 target range).

**Confirmed selection:** [phase-2-selected.json](phase-2-selected.json)

**Do not:** fetch Blockfrost, run audits, change schemas, or create definitions until the batch is approved.

---

## Relationship to Phase 1

Phase 1 established baseline parsing for:

- Flat root traits (Clay Nation, Boss Cat, Jellycubes)
- `array_singleton_object` (Mallard Order, Pavia)
- `key_value_array` (DEADPXLZ `properties`)
- Identity namespace (ADA Handle)
- Minimal event badges (Cardano Summit 2021)
- CIP-68 encoded traits — **partial** (SpaceBudz, GAP-002)
- Rich land/game claims (Cornucopias zones 1–3 — partial ecosystem)

Phase 2 **must not** repeat Phase 1 policy IDs except where testing **multi-policy ecosystem** behavior (companion policies, sub-collections, seasonal lines).

### Phase 1 policies excluded from Phase 2

| Phase 1 collection | Policy (prefix) |
|--------------------|-----------------|
| SpaceBudz | `4523c5e2…` |
| Clay Nation (core) | `40fa2aa6…` |
| Pavia | `4bf184e0…` |
| ADA Handle | `f0ff48bb…` |
| DEADPXLZ | `1ec85dce…` |
| Boss Cat Rocket Club | `c364930b…` |
| Cornucopias Land zones 1–3 | `07b39a8e…` |
| Cardano Summit 2021 | `0ad7f7a3…` |
| The Mallard Order | `901ba6e9…` |
| Jellycubes | `3ee441f4…` |

---

## Selection criteria coverage

| # | Criterion | Phase 2 selections |
|---|-----------|-------------------|
| 1 | Additional CIP-68 patterns | Chilled Kongs Vox Avatar, Epoch Genesis v2 |
| 2 | Multi-policy ecosystems | Boss Cat Rocket Parts, Pitches at Clay Nation, Yummi Universe Naru, OREMOB CASES, Chilled Kongs + Vox |
| 3 | Gaming assets | OREMOB, OREMOB CASES, Cornucopias GTI Javelin 2022 |
| 4 | Land/assets from ecosystems | Boss Planet Real Estate, UnboundedEarth, Cabins by The Ape Society, Cornucopias GTI (game asset slice) |
| 5 | Book/media/document NFTs | Book.io Gutenberg Bible, Wizard Tim Audiobook, Whitepaper 2.0 |
| 6 | Membership/pass NFTs | Introverts Membership Card, cNFTcon Legacy Pass |
| 7 | Art/generative collections | Smart Places, Chilled Kongs (art/PFP hybrid) |
| 8 | Possible license/royalty metadata | Book.io Whitepaper 2.0 (primary candidate) |
| 9 | Broken or partial metadata | [DEPRECATED] Jungle Wenno Cat (controlled; not TapTools `Unknown`) |
| 10 | Unusual trait layouts | Chilled Kongs (non-flat vs Phase 1), Clay Nation x Good Charlotte collab fields |

---

## Excluded on purpose

| Exclusion | Reason |
|-----------|--------|
| TapTools `Unknown` rows (34 in CSV) | **Auto-excluded** from Phase 3 (`triage_status: exclude`, `reason_code: unknown_or_broken_collection`); one **named** deprecated row used in Phase 2 instead as controlled partial-metadata test |
| Obvious scam / absurd `mcap` rows | e.g. `404 - Page Not Found` — auto-excluded with unknown/broken triage; named suspicious rows use separate codes |
| Phase 1 duplicate policies | Cornucopias land zones, Summit 2021, core Clay/Boss/Jelly policies |
| Extra flat-root PFPs | Alley Katz, HOSKY, etc. — low marginal layout diversity after Phase 1 |
| Cardano Summit 2023 | Similar minimal badge pattern to Phase 1 Summit 2021; deferred unless Phase 2 batch edited |
| EarthNode | Extreme supply count in CSV; layout likely node/infra — optional Phase 2 add if batch expanded |

---

## Selected batch (20)

| # | Name | `collection_id` | CSV rank | Primary Phase 2 theme |
|---|------|-----------------|--------:|------------------------|
| 1 | Boss Cat Rocket Parts | `boss-cat-rocket-parts` | 9 | Multi-policy companion |
| 2 | Pitches at Clay Nation | `pitches-at-clay-nation` | 11 | Clay ecosystem sub-policy |
| 3 | Clay Nation x Good Charlotte | `clay-nation-good-charlotte` | 14 | Collab / unusual layout |
| 4 | Yummi Universe - Naru | `yummi-universe-naru` | 17 | Seasonal multi-policy line |
| 5 | Chilled Kongs Vox Avatar | `chilled-kongs-vox-avatar` | 270 | CIP-68 / avatar candidate |
| 6 | Epoch Genesis v2 | `epoch-genesis-v2` | 5245* | Genesis / encoding candidate |
| 7 | OREMOB | `oremob` | 12 | Gaming mech |
| 8 | OREMOB CASES by ENCASE.ART | `oremob-cases-encase-art` | 341 | Nested game policy |
| 9 | Cornucopias GTI Javelin 2022 | `cornucopias-gti-javelin-2022` | 43 | Cornucopias ecosystem (non-land) |
| 10 | Boss Planet Real Estate | `boss-planet-real-estate` | 16 | Land in Boss universe |
| 11 | UnboundedEarth | `unbounded-earth` | 153 | Standalone land |
| 12 | Cabins by The Ape Society | `cabins-ape-society` | 13 | Housing / society ecosystem |
| 13 | Book.io - Gutenberg Bible | `book-io-gutenberg-bible` | 24 | Media-linked document |
| 14 | Book.io - Wizard Tim Audiobook | `book-io-wizard-tim-audiobook` | 4035 | Audiobook media |
| 15 | Book.io - Whitepaper 2.0 | `book-io-whitepaper-2` | 923 | License/terms candidate |
| 16 | Introverts Membership Card | `introverts-membership-card` | 406 | Membership pass |
| 17 | cNFTcon Legacy Pass | `cnftcon-legacy-pass` | 229 | Event pass |
| 18 | Smart Places | `smart-places` | 578 | Art-first |
| 19 | Chilled Kongs | `chilled-kongs` | 7 | Alternate trait container + Vox pair |
| 20 | [DEPRECATED] Jungle Wenno Cat | `deprecated-jungle-wenno-cat` | 350 | Controlled partial/broken |

\*Epoch Genesis v2 rank is page-local in CSV; verify in TapTools before external citation.

---

## Policy IDs (from CSV — verify before use)

| collection_id | policy_id |
|---------------|-----------|
| boss-cat-rocket-parts | `761ed110b4040e153ffc20bd2203f2e7d57d610a0cf0eae6167e574d` |
| pitches-at-clay-nation | `13e3f9964fe386930ec178d12a43c96a7f5841270c2146fc509a9f3e` |
| clay-nation-good-charlotte | `94da605878403d07c144fe96cd50fe20c16186dd8d171c78ed6a8768` |
| yummi-universe-naru | `b1814c6d3b0f7a42c9ee990c06c9d504a42bb22bf0e34e7908ae21b2` |
| chilled-kongs-vox-avatar | `5d8bb1d5376bf641ff2c51c7744efa8969e0dbdb18011876a2a16188` |
| epoch-genesis-v2 | `123da5e4ef337161779c6729d2acd765f7a33a833b2a21a063ef65a5` |
| oremob | `062b1da3d344c1e6208ef908b2d308201e7ff6bcfddf0f606249817f` |
| oremob-cases-encase-art | `9e6b0cf53e26c14f03eaafb45072c2800ba053b7ffa319fa29d42f5c` |
| cornucopias-gti-javelin-2022 | `086849cd9f672e731e0d9590a2d28a6a690ffa2f73bae0e1970f0491` |
| boss-planet-real-estate | `5a2cdc6e3aa9612fe4676672f443e7efd39c309d45e7919a4bf27750` |
| unbounded-earth | `bb78d3b6638537d6df7ae43791ead3d50e75fdae82131eff2b7ae994` |
| cabins-ape-society | `d4e087164acf8314f1203f0b0996f14908e2a199a296d065f14b8b09` |
| book-io-gutenberg-bible | `477cec772adb1466b301fb8161f505aa66ed1ee8d69d3e7984256a43` |
| book-io-wizard-tim-audiobook | `e1d98823331929b449b037b212f275e15d9dba800caa6ebf42dbc627` |
| book-io-whitepaper-2 | `b1f614be8ed0921f2d3fc4d013f2ab076fe62db43b5bdcce686c4377` |
| introverts-membership-card | `9b542bc33521163a7ff3a05d1df1bcc0c0ec6a0638337e4b2870f6ea` |
| cnftcon-legacy-pass | `5fa72fbeecbe80a3e15de1cacab54ba5e310e2c36ae85351132ed4ad` |
| smart-places | `64036a8c21866b47d4597657151e1490a7c225caef4715b37b9eca38` |
| chilled-kongs | `c56d4cceb8a8550534968e1bf165137ca41e908d2d780cc1402079bd` |
| deprecated-jungle-wenno-cat | `3ca291585bbbd1deafab0495f8a7fda4753fbeae96c550492bcfd760` |

---

## Ecosystem groupings (for audit planning)

| Ecosystem | Policies in Phase 2 batch |
|-----------|---------------------------|
| Boss Cat / Boss Planet | Rocket Parts, Boss Planet Real Estate |
| Clay Nation / Clay Mates | Pitches, Good Charlotte collab |
| Yummi Universe | Naru (+ seasonal siblings not in batch) |
| Chilled Kongs | Base + Vox Avatar |
| OREMOB | Core + CASES |
| Cornucopias | GTI Javelin 2022 (extends Phase 1 land partial) |
| Book.io | Gutenberg, Wizard Tim Audiobook, Whitepaper |
| Ape Society | Cabins |
| Event / pass | cNFTcon Legacy Pass, Introverts card |
| Standalone | OREMOB-adjacent land/gaming, UnboundedEarth, Smart Places, Epoch Genesis v2, Deprecated Wenno |

---

## Expected Phase 2 outcomes

| Outcome | Collections |
|---------|-------------|
| Confirm or close **GAP-002** (CIP-68 hex traits) | Chilled Kongs Vox Avatar, Epoch Genesis v2 |
| Multi-policy **registry grouping** notes | Boss Cat, Clay, Yummi, OREMOB, Ape Society |
| **`media_mappings.files`** stress | Book.io cluster, audiobook |
| **`definition_status: partial/broken`** | Deprecated Jungle Wenno Cat |
| **Membership / pass** layouts | Introverts, cNFTcon |
| **License/royalty discovery** | Book.io Whitepaper 2.0 (primary) |

---

## Next steps (when approved)

1. Review/edit `phase-2-selected.json`
2. Run `prepare-phase research/phase-2-selected.json` (scaffold only)
3. Blockfrost sample fetch (10 assets per collection)
4. Audits + findings using Phase 1 normalization reporting semantics
5. Definitions only after metadata discovery

```bash
# After confirmation — scaffold only
node packages/cli/dist/cli.js prepare-phase research/phase-2-selected.json
```

---

## Alternate candidates (swap list)

If any selected row is rejected, replace from this list without changing Phase 2 themes:

| Name | `collection_id` | Theme |
|------|-----------------|-------|
| NFT-Link: Clay Nation x Good Charlotte | `nft-link-clay-nation-good-charlotte` | Linked companion policy |
| Toolheads | `toolheads` | Tooling / ecosystem NFT |
| Goofy Gophers Mining Club | `goofy-gophers-mining-club` | Gaming / mining metaphor |
| Cardano Summit 2023 | `cardano-summit-2023` | Event badge variant |
| Equine Pioneer Skins | `equine-pioneer-skins` | Game skins only |
| Demon Hit Squad | `demon-hit-squad` | Gaming squad (whitelist policy separate) |
| EarthNode | `earthnode` | Land/infra node pattern |
| Book.io - Foundations of Decentralized Identity | `book-io-foundations-decentralized-identity` | Identity/media crossover |
