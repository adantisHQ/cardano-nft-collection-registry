# Phase 1–3 Candidate Shortlist

Recommended validation candidates derived from analysis of the local TapTools CSV (`csv/collections_top1000_filter_owners425_sales10.csv`).

**This is not the registry.** These are research recommendations only. Policy IDs come from the CSV export and must be verified before audits.

**Selection goal:** maximize **metadata structure diversity**, not market cap.

See [dataset-analysis.md](dataset-analysis.md) for universe statistics.

---

## How to use this document

1. Review and edit candidates with domain knowledge
2. Copy confirmed Phase 1 entries into `research/phase-1-top-10.json`
3. Run `prepare-phase` when ready to scaffold audits (no Blockfrost, no definitions finalized)
4. Do **not** commit the CSV or raw samples

Suggested `collection_id` values are kebab-case proposals for registry files — adjust if a canonical slug already exists.

---

## Phase 1 — Top 10 (high quality, recognizable, representative)

**Goal:** Confirm the schema represents normal, high-signal collections before edge cases.

| # | Name | Proposed `collection_id` | Rank | Taxonomy | Metadata profile | Why Phase 1 |
|---|------|--------------------------|-----:|----------|------------------|-------------|
| 1 | SpaceBudz | `spacebudz` | 1 | pfp | trait_based_pfp | Canonical CIP-25 PFP; baseline trait attributes |
| 2 | Clay Nation | `clay-nation` | 4 | gaming | game_asset | Major 3D avatar collection; rich metadata ecosystem |
| 3 | Pavia | `pavia` | 3 | land | land_parcel | Flagship Cardano metaverse land; parcel-style fields |
| 4 | ADA Handle | `ada-handle` | 33 | identity | identity_namespace | On-chain identity; not trait-grid oriented |
| 5 | DEADPXLZ | `deadpxlz` | 10 | gaming | game_asset | Established gaming collection; portal/lore patterns |
| 6 | Boss Cat Rocket Club | `boss-cat-rocket-club` | 6 | pfp | trait_based_pfp | Recognizable PFP + modular parts ecosystem |
| 7 | Cardano Summit | `cardano-summit` | 287 | event | event_commemorative | Event badge / commemorative metadata pattern |
| 8 | Book.io - Gutenberg Bible Collection | `book-io-gutenberg-bible` | 24 | art | media_linked | Media-heavy; linked book/IPFS metadata |
| 9 | The Mallard Order | `the-mallard-order` | 15 | pfp | trait_based_pfp | Lore-driven community PFP |
| 10 | Jellycubes | `jellycubes` | 23 | mixed | general_nft | Distinct 3D object art; non-standard layout likely |

### Phase 1 metadata coverage

| Profile | Covered by |
|---------|------------|
| trait_based_pfp | SpaceBudz, Boss Cat, Mallard Order |
| land_parcel | Pavia |
| identity_namespace | ADA Handle |
| game_asset | Clay Nation, DEADPXLZ |
| event_commemorative | Cardano Summit |
| media_linked | Book.io Gutenberg |
| general_nft / art-like | Jellycubes |

### Phase 1 policy IDs (from CSV — verify before use)

| collection_id | policy_id |
|---------------|-----------|
| spacebudz | `4523c5e21d409b81c95b45b0aea275b8ea1406e6cafea5583b9f8a5f` |
| clay-nation | `40fa2aa67258b4ce7b5782f74831d46a84c59a0ff0c28262fab21728` |
| pavia | `4bf184e01e0f163296ab253edd60774e2d34367d0e7b6cbc689b567d` |
| ada-handle | `f0ff48bbb7bbe9d59a40f1ce90e9e9d0ff5002ec48f232b49ca0fb9a` |
| deadpxlz | `1ec85dcee27f2d90ec1f9a1e4ce74a667dc9be8b184463223f9c9601` |
| boss-cat-rocket-club | `c364930bd612f42e14d156e1c5410511e77f64cab8f2367a9df544d1` |
| cardano-summit | `d436d9f6b754582f798fe33f4bed12133d47493f78b944b9cc55fd18` |
| book-io-gutenberg-bible | `477cec772adb1466b301fb8161f505aa66ed1ee8d69d3e7984256a43` |
| the-mallard-order | `901ba6e9831b078e131a1cc403d6139af21bda255cea6c9f770f4834` |
| jellycubes | `3ee441f40fe395a2e98eea1df7cf8816b0fca3d5d164893596ce306d` |

---

## Phase 2 — Next 20 (common variations)

**Goal:** Surface multi-policy layouts, collabs, events, membership, missing socials/license patterns, and alternate media structures.

| # | Name | Proposed `collection_id` | Rank | Variation tested |
|---|------|--------------------------|-----:|------------------|
| 1 | Boss Cat Rocket Parts | `boss-cat-rocket-parts` | 9 | Companion / component policy |
| 2 | Cornucopias Land Sale - Zones 1-3 | `cornucopias-land-zones-1-3` | 8 | Zoned land mint |
| 3 | Pitches at Clay Nation | `pitches-at-clay-nation` | 11 | Sub-collection under ecosystem |
| 4 | Clay Nation x Good Charlotte by Clay Mates | `clay-nation-good-charlotte` | 14 | Collab + linked drop |
| 5 | Chilled Kongs | `chilled-kongs` | 7 | Major PFP variant metadata |
| 6 | Cardano Summit 2021 | `cardano-summit-2021` | 108 | Multi-year event series |
| 7 | Epoch Genesis v2 | `epoch-genesis-v2` | 5245* | Genesis / epoch naming |
| 8 | Alley Katz | `alley-katz` | 27 | General PFP |
| 9 | Yummi Universe - Naru | `yummi-universe-naru` | 17 | Seasonal character line |
| 10 | OREMOB | `oremob` | 12 | Gaming mech collection |
| 11 | Cabins by The Ape Society | `cabins-ape-society` | 13 | Housing/land hybrid |
| 12 | cNFTcon 2021 Airdrop | `cnftcon-2021-airdrop` | 519 | Event airdrop |
| 13 | Introverts Membership Card | `introverts-membership-card` | 406 | Membership pass |
| 14 | HOSKY C(ash grab)NFT | `hosky-cash-grab` | 20 | Meme / utility-adjacent |
| 15 | UnboundedEarth | `unbounded-earth` | 153 | Land branding variant |
| 16 | Smart Places | `smart-places` | 578 | Art-first |
| 17 | EarthNode | `earthnode` | 5 | Land + infra node pattern |
| 18 | Toolheads | `toolheads` | 19 | Ecosystem/tooling NFT |
| 19 | Goofy Gophers Mining Club | `goofy-gophers-mining-club` | 21 | Gaming / mining metaphor |
| 20 | Boss Planet Real Estate | `boss-planet-real-estate` | 16 | Real-estate land variant |

\*Epoch Genesis v2 rank shown as page-local in CSV row; verify rank in TapTools before citing externally.

### Phase 2 themes deliberately included

- **Multi-policy ecosystems** (Boss Cat parts, Clay pitches, Yummi seasons)
- **Collabs** (Good Charlotte, NFT-Link-style drops in later phases)
- **Events** (Summit 2021, cNFTcon)
- **Membership** (Introverts card)
- **Utility-adjacent naming** (HOSKY cash grab)
- **Land variants** (Cornucopias, UnboundedEarth, Boss Planet, Cabins)

---

## Phase 3 — 50 (problematic, unusual, or ambiguous)

**Goal:** Stress-test `definition_status: partial/broken`, indexing notes, and creator-provided definitions on **named** collections.

**Triage:** Apply [top-100-triage-policy.md](top-100-triage-policy.md) before selection. Rows named `Unknown`, blank, `404 - Page Not Found`, `Page Not Found`, `invalid`, or with invalid `policy_id` are **automatically excluded** (`triage_status: "exclude"`, `reason_code: "unknown_or_broken_collection"`) — not Phase 3, not `include_later`.

Includes suspicious metrics, utility/token-like entries, **named** deprecated titles, and lower-signal collections with identifiable names.

### Auto-excluded reference (do not onboard automatically)

TapTools `Unknown` and broken-label rows (~36 in CSV). Example:

| # | Name | Rank | Primary issue | Triage |
|---|------|-----:|---------------|--------|
| 1 | 404 - Page Not Found | 3957 | Broken TapTools label / invalid policy length | `exclude` / `unknown_or_broken_collection` |
| 2 | Unknown | 4231 | Unresolved name; odd mcap | `exclude` / `unknown_or_broken_collection` |
| 3 | Unknown | 6302 | Unresolved; mcap ~36B | `exclude` / `unknown_or_broken_collection` |

*(Full list: all CSV rows where name is `Unknown`, blank, 404, or invalid — see triage policy.)*

### Named Phase 3 candidates (eligible after triage)

| # | Name | Rank | Primary issue | Expected definition status |
|---|------|-----:|---------------|----------------------------|
| 1 | spacecoins | 5296 | Token-like naming; suspicious mcap | `partial` |
| 2 | CCVault.io | 542 | Wallet/utility branding | `partial` |
| 3 | Token Riot Factions | 379 | Utility/token-like | `partial` |
| 4 | Demon Hit Squad Whitelist Tokens | 447 | Whitelist token pattern | `partial` |
| 5 | [DEPRECATED] Jungle Wenno Cat | 350 | Deprecated in name (named — eligible) | `broken` |
| 6 | OREMOB CASEY AIRDROP | 333 | Airdrop sub-policy | `partial` |
| 7 | OREMOB CASES by ENCASE.ART | 341 | Nested airdrop/case policy | `partial` |
| 8 | NFTSeeker Tool | 310 | Tooling NFT | `partial` |
| 9 | PoolPerks | 346 | Utility/rewards naming | `partial` |
| 10 | MELD Bank Manager v1 | 345 | DeFi/role NFT | `partial` |
| 11 | Brave Dogs - Genesis Collection | 100 | Genesis/event hybrid | `partial` |
| 12 | Equine Pioneer Skins | 302 | Game skins only | `partial` |
| 13 | Alice's Adventures in Wonderland | 410 | Misclassified land heuristic; verify | `partial` |
| 14 | The Art of War | 608 | Book/media pattern (lower rank) | `partial` |
| 15 | Book.io - Foundations of Decentralized Identity | 3117 | Identity/media crossover | `partial` |
| 16 | Charlz: The Herd Membership | 4523 | Membership naming | `partial` |
| 17 | Cardano Summit 2023 | 795 | Recent event; sparse traits likely | `partial` |
| 18 | aeoniumsky Cardano Summit 2022 | 1443 | Community event variant | `partial` |
| 19 | cNFTcon Legacy Pass | 229 | Legacy pass | `partial` |
| 20 | HOSKY C(ash grab)NFT | 20 | Utility-adjacent naming | `partial` |

### Phase 3 intent

- **~36 TapTools `Unknown` / broken-label rows** — auto-excluded; not Phase 3 stress tests ([top-100-triage-policy.md](top-100-triage-policy.md))
- **Suspicious market rows (named)** — test indexing notes for bad third-party data
- **Utility/token-like (named)** — test collections that may not have trait grids
- **Named deprecated / airdrop / whitelist** — test non-standard collection boundaries
- **Lower-rank unusual names (named)** — broaden layout discovery without optimizing for size

Many Phase 3 rows may never become `definition_status: complete` — that is expected and valid.

---

## Phase 4 preview (not selected here)

Random sampling from the broader ~12,800+ collection universe after Phases 1–3 gate review. Do not begin until schema stabilization criteria in [collection-selection.md](collection-selection.md) are met.

---

## Populating Phase 1 input file

When the Phase 1 list is confirmed, add entries like:

```json
[
  {
    "name": "SpaceBudz",
    "collection_id": "spacebudz",
    "policy_ids": ["4523c5e21d409b81c95b45b0aea275b8ea1406e6cafea5583b9f8a5f"],
    "sample_assets": ["TBD-after-manual-sample-selection"],
    "notes": "Phase 1 baseline CIP-25 PFP"
  }
]
```

Then:

```bash
pnpm --filter @cardano-nft-collection-registry/cli start prepare-phase research/phase-1-top-10.json
```

No audits, Blockfrost fetches, schema changes, or registry definitions are performed at this stage.
