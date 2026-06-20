# Dataset Analysis

Analysis of the local TapTools research CSV used to understand the Cardano NFT collection universe for **validation candidate selection**.

## Important disclaimers

| Statement | Meaning |
|-----------|---------|
| **Research dataset only** | The CSV is not part of the registry and not a source of truth |
| **Not versioned** | `csv/` is gitignored; do not commit exports or dumps |
| **Heuristic classification** | Labels below are inferred from TapTools names and market fields, not on-chain metadata review |
| **No audits performed** | This document does not validate metadata layouts or schema fit |
| **No Blockfrost** | No chain or IPFS metadata was fetched for this analysis |

## Source file

| Property | Value |
|----------|-------|
| Path | `csv/collections_top1000_filter_owners425_sales10.csv` (local only) |
| Rows | **1,002** data rows (+ header) |
| Unique policy IDs | **1,002** (no duplicates in file) |
| Unique names | **925** |
| Inferred filter | Top ~1000 collections with **≥425 owners** and **≥10 sales** (from filename) |
| Columns | `page`, `rank`, `name`, `policy_id`, `floor_price`, `mcap`, `sales`, `owners`, `url` |

TapTools rank spans roughly **1–8,356** within this filtered slice (not global rank 1–1000 only).

---

## 1. How many collections are present?

**1,002 collection/policy entries** in the CSV.

Each row represents one TapTools chart entry keyed by `policy_id`. This is a **filtered candidate pool**, not the full Cardano collection universe (~12,800+ collections referenced for later phases).

---

## 2. How many appear to be valid NFT collections?

Using conservative heuristics on CSV fields and names:

| Category | Count | Notes |
|----------|------:|-------|
| **Likely valid NFT candidates** | **~950–965** | Named collections, valid policy ID, no broken/suspicious signals |
| **Explicit `Unknown` name** | **34** | TapTools could not resolve a collection name |
| **Broken / invalid** | **2** | Invalid policy length or error-like name |
| **Suspicious market signals** | **3–10** | Absurd `mcap`, very low sales vs high owners, etc. |
| **Token-like / utility-like names** | **16** | Names suggesting coins, vaults, coupons, rewards |

### Quality breakdown (automated pass)

| Quality label | Count |
|---------------|------:|
| `valid_candidate` | 963 |
| `unknown` | 34 |
| `suspicious` | 3 |
| `broken` | 2 |

### Policy ID validity

| Check | Count |
|-------|------:|
| Valid 56-character hex policy ID | 1,001 |
| Invalid policy ID format | 1 |

**Working estimate:** treat **~960 entries (~96%)** as plausible NFT collection policies worth eventual validation, and **~40 entries (~4%)** as unknown, broken, suspicious, or non-collection-like without further research.

This does **not** mean metadata is parseable — only that the row plausibly represents an NFT collection policy.

---

## 3. Entry classification

Heuristic name + field classification (entries may match multiple signals; primary intent shown):

| Appears to be | Count | Examples from CSV |
|---------------|------:|-------------------|
| **Traditional / general NFT collections** | ~784 | SpaceBudz, Alley Katz, Jellycubes, Cryptoknitties |
| **Gaming / game asset collections** | ~108 | Clay Nation, DEADPXLZ, OREMOB, Chilled Kongs, Cornucopias vehicles |
| **Land / parcel / real-estate-like** | ~32 | Pavia, Cornucopias Land Sale, Boss Planet Real Estate, UnboundedEarth |
| **Event / commemorative / genesis** | ~23 | Cardano Summit, Epoch Genesis, cNFTcon airdrops |
| **Identity / namespace-like** | ~2 | ADA Handle (+ Book.io identity-adjacent entries) |
| **Membership / pass-like** | ~3 | Introverts Membership Card, Charlz: The Herd Membership |
| **Utility / token-like** | ~16 | spacecoins, HOSKY C(ash grab)NFT, CCVault.io, Token Riot Factions |
| **Unknown (TapTools name)** | **34** | Name literally `Unknown` — high owner counts, often odd `mcap` |
| **Broken / data error** | **2** | `404 - Page Not Found`; one truncated/invalid `policy_id` |
| **Suspicious** | **3–10** | `mcap` ≈ 10,737,418,235 (2³²-scale artifact), billions/trillions mcap with few sales |

### Notable patterns

**Unknown entries (34)** often have:

- Very high `owners` (5k–25k+) but low `sales` relative to peers
- Inflated or nonsensical `mcap` values
- No resolvable collection name in TapTools

These are **automatically excluded** from Phase 3 Top-100 onboarding (`triage_status: "exclude"`, `reason_code: "unknown_or_broken_collection"`) — likely aggregation artifacts, unnamed policies, or broken indexer labels — not Phase 1 and not `include_later`.

**Multi-policy ecosystems** appear frequently:

- Clay Nation + Pitches + Clay Mates + collabs
- Boss Cat Rocket Club + Rocket Parts
- Yummi Universe + seasonal Naru variants
- Book.io + many title-specific policies
- Cardano Summit (multiple years)

This confirms the registry must treat **collection identity separately from policy IDs**.

**Book.io cluster (~15+ policies in file)** shows repeated **media-linked metadata** patterns — valuable for testing `media_mappings` and external resource fields.

---

## 4. Proposed initial collection taxonomy

For registry `identity.category` and audit classification:

| Taxonomy | Description | CSV prevalence (heuristic) |
|----------|-------------|----------------------------|
| **pfp** | Avatar/profile-style trait collections | ~109 named hits |
| **gaming** | Game items, characters, skins, vehicles | ~108 |
| **land** | Parcels, zones, real estate, pitches | ~32 |
| **identity** | Handles, namespaces, on-chain names | ~2 explicit |
| **membership** | Passes, club cards, access tokens | ~3 |
| **utility** | Coin-like, vault, coupon, reward naming | ~16 |
| **art** | Art-first collections | ~5 explicit |
| **event** | Summits, conferences, genesis drops, airdrops | ~23 |
| **mixed** | General NFTs not fitting above | ~670 (default bucket) |
| **unknown** | Unresolved TapTools name | 34 |

### Metadata structure profiles (orthogonal to taxonomy)

These describe **how** metadata likely behaves — the primary axis for validation diversity:

| Profile | Why it matters for registry design |
|---------|-----------------------------------|
| `trait_based_pfp` | CIP-25 `attributes` maps; trait normalization |
| `land_parcel` | Coordinate/zone fields; non-standard trait keys |
| `game_asset` | Stats, levels, slots; companion item policies |
| `identity_namespace` | String primary value; not trait-grid oriented |
| `event_commemorative` | Minimal traits; date/event fields |
| `media_linked` | Book/audio/IPFS-heavy; `files[]` patterns |
| `membership_pass` | Tier/role fields; expiry |
| `utility_token_like` | May lack NFT-style traits entirely |
| `general_nft` | Requires audit to discover layout |
| `unknown` | Expect `definition_status: broken` or creator-provided defs |

---

## 5. Implications for registry validation

### Phase sequencing (confirmed)

1. **Phase 1 — Top 10 known** — stabilize schema on high-signal, recognizable collections
2. **Phase 2 — Next 10–20** — multi-policy, collabs, events, membership, media variants
3. **Phase 3 — 50–100** — named problematic/utility/deprecated/unusual collections only; **auto-exclude** unknown/blank/404/invalid names ([top-100-triage-policy.md](top-100-triage-policy.md))
4. **Phase 4 — Random sampling** — estimate coverage across full universe

### Unparseable collections do not invalidate the registry

Collections with inconsistent metadata should be represented as:

- `definition_status: "partial"` — incomplete automatic rules
- `definition_status: "broken"` — cannot infer reliable parse rules
- `indexing_notes[]` — document missing/inconsistent fields

The registry must support **creator-provided definitions** when automatic inference fails.

### Schema stress areas suggested by CSV alone

| Area | CSV signal |
|------|------------|
| Multi-policy collections | Clay Nation, Boss Cat, Yummi, Book.io, Summit years |
| Sub-collection naming | Pitches, Clay Mates, seasonal variants |
| Non-trait NFTs | ADA Handle, membership cards |
| Media-heavy metadata | Book.io cluster |
| Unknown/broken labels | 34 `Unknown` + suspicious mcap rows |
| Collab / linked drops | NFT-Link, ABHS x Yummi, Good Charlotte |

---

## 6. Candidate shortlist

See **[phase-1-candidates.md](phase-1-candidates.md)** for:

- Recommended **10** Phase 1 collections
- Recommended **20** Phase 2 collections
- Recommended **50** Phase 3 collections

Selection optimizes for **metadata structure diversity**, not market cap alone.

---

## 7. Next steps (not performed here)

1. User confirms or edits Phase 1 shortlist
2. Populate `research/phase-1-top-10.json` with chosen collections + sample assets
3. Run `prepare-phase` to scaffold audits (no Blockfrost)
4. Manually collect raw metadata samples
5. Begin Phase 1 audits

---

## Analysis method

Automated pass over CSV using:

- Policy ID format validation (56-char hex)
- Name pattern heuristics for taxonomy
- Market anomaly detection (`mcap` ≥ 10¹⁰, sales/owner imbalance)
- Diversity picking for candidate shortlists

Script used locally under gitignored `tmp/` (not part of repository state). Results manually reviewed and curated in `phase-1-candidates.md`.
