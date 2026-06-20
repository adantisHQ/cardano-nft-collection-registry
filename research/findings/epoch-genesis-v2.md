# Findings: Epoch Genesis v2

Phase 2 metadata discovery — 2026-06-08

**Policy ID:** `123da5e4ef337161779c6729d2acd765f7a33a833b2a21a063ef65a5`  
**Samples:** 10 Blockfrost `GET /assets/{unit}` responses in `research/raw-samples/epoch-genesis-v2/`  
**Metadata-bearing samples:** 100%

---

## Metadata summary

Music NFT policy (Sick City / Epoch Genesis v2). **Not CIP-68** — Blockfrost reports CIP25v1 throughout. Two coexisting music-metadata layouts in the same policy:

- **`music_metadata_version: v2`** — musical fields nested under `release` (4/10 samples)
- **`music_metadata_version: v1`** — same fields flattened at metadata root (6/10 samples)

Both variants use `files[]` with `audio/mp3` entries and cover `image`. Copyright appears as `release.copyright` or root `copyright` (class C — license-like text present but non-standard path).

---

## Metadata standard

| Signal | Finding |
|--------|---------|
| Blockfrost `onchain_metadata_standard` | CIP25v1 |
| Layout class | dual music layout (v1 flat / v2 nested `release`) |
| Metadata root | `onchain_metadata` (Blockfrost asset response) |

---

## Trait layout

Musical metadata fields (not PFP traits). Map as collection-specific scalar fields:

| Field | v2 path | v1 path |
|-------|---------|---------|
| song_title | `$.release.song_title` | `$.song_title` |
| artists | `$.release.artists[]` | `$.artists[]` |
| genres | `$.release.genres[]` | `$.genres[]` |
| copyright | `$.release.copyright` | `$.copyright` |
| song_duration | `$.release.song_duration` | `$.song_duration` |
| release_type | `$.release.release_type` | `$.release_type` |

Use `first_existing_path` extraction or version-gated mapping keyed on `$.music_metadata_version`.

---

## Media layout

- `image` string
- `files[]` multi-media
- `image` array

---

## Socials and links

### Socials

| Field | Value |
|-------|-------|
| twitter | `https://twitter.com/BadFox4042` |
| discord | `http://discord.gg/3B8ygHQ5hH` |

### Links

| Field | Value |
|-------|-------|
| website | `https://linktr.ee/mgbedford` |

---

## License and royalties

| Area | Finding |
|------|---------|
| release.copyright | StripperCoin ℗ 2022 |
| copyright | Nobody$, OddShapeShadow ℗ 2022 |

| Royalties | Not present in on-chain metadata samples |

---

## Custom fields

- `release` (nested object or section)
- `links` (nested object or section)
- `genres` (nested object or section)
- `artists` (nested object or section)

---

## Expected registry mappings

- Trait/metadata fields: `first_existing_path` between v1 root and v2 `release.*` paths
- Media: `media_mappings.files` from `$.files[]` (audio/mp3 primary asset)
- Identity: `$.name` (artist-track naming convention)
- Socials: `$.links.twitter`, `$.release.links.*` where present

---

## Indexing caveats

- Raw samples are full Blockfrost asset responses; parsers must use `onchain_metadata` subtree

---

## Extraction strategy assessment

| Question | Answer |
|----------|--------|
| Are Phase 1 extraction strategies sufficient? | **Mostly** — `first_existing_path` covers v1/v2 drift; no new schema gap (single policy) |
| Recommended strategy | Version-aware direct paths; `files[]` for audio |

---

## Sample inventory

| Label | Asset unit | Asset name (hex) | Metadata |
|-------|------------|------------------|----------|
| asset-001 | `123da5e4ef337161779c6729d2acd765f7a33a833b2a21a063ef65a55369636b43697479333431` | `5369636b43697479333431` | yes |
| asset-002 | `123da5e4ef337161779c6729d2acd765f7a33a833b2a21a063ef65a55369636b43697479333432` | `5369636b43697479333432` | yes |
| asset-003 | `123da5e4ef337161779c6729d2acd765f7a33a833b2a21a063ef65a55369636b43697479333436` | `5369636b43697479333436` | yes |
| asset-004 | `123da5e4ef337161779c6729d2acd765f7a33a833b2a21a063ef65a55369636b43697479333532` | `5369636b43697479333532` | yes |
| asset-005 | `123da5e4ef337161779c6729d2acd765f7a33a833b2a21a063ef65a55369636b43697479333538` | `5369636b43697479333538` | yes |
| asset-006 | `123da5e4ef337161779c6729d2acd765f7a33a833b2a21a063ef65a55369636b43697479333634` | `5369636b43697479333634` | yes |
| asset-007 | `123da5e4ef337161779c6729d2acd765f7a33a833b2a21a063ef65a5544845414e5448454d3538` | `544845414e5448454d3538` | yes |
| asset-008 | `123da5e4ef337161779c6729d2acd765f7a33a833b2a21a063ef65a55369636b43697479333730` | `5369636b43697479333730` | yes |
| asset-009 | `123da5e4ef337161779c6729d2acd765f7a33a833b2a21a063ef65a55369636b43697479333736` | `5369636b43697479333736` | yes |
| asset-010 | `123da5e4ef337161779c6729d2acd765f7a33a833b2a21a063ef65a55369636b43697479333832` | `5369636b43697479333832` | yes |

---

## Schema classification preview

| Metric | Value |
|--------|-------|
| `schema_fit` | fits_with_notes |
| Failures logged | 5 (see audit) |

**Do not modify schema or definitions based on this document alone.** Cross-collection D-class review in `research/schema-gap-log.md`.
