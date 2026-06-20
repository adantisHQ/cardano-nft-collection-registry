# Phase 3A Discovery Summary

Phase 3A metadata discovery closure — 2026-06-09

**Batch:** 23 `include_now` collections from [phase-3a-selected.json](../phase-3a-selected.json) ([top100-review.md](../top100-review.md))  
**Samples:** 10 Blockfrost `GET /assets/{unit}` responses per collection (`230` total) under `research/raw-samples/<collection_id>/`  
**Artifacts:** 23 findings, 23 audits, prepare-phase placeholder definitions (**not finalized**)

**Constraints honored:** No schema changes, no parser changes, no final registry definitions, `include_later` (58) not started.

**Coverage:** 30 baseline + 23 Phase 3A = **53 collections** in discovery scope (definitions pending for 3A).

---

## Executive summary

Phase 3A expanded the validated batch from **30 → 53 collections** using Top-100 `include_now` selections only. **228/230 (99.1%)** fetched samples carry parseable on-chain metadata. **23/23 (100.0%)** collections are representable with current schema and generic extraction strategies (no custom hex parser).

**Phase 3A success target:** **MET** — see metrics below.

Recommend proceeding to definition authoring for the straightforward majority after user review. Do not start `include_later` until approved.

---

## Batch metrics

| Metric | Value |
|--------|------:|
| Collections | 23 |
| Total samples | 230 |
| Samples with on-chain metadata | 228 (99.1%) |
| Collections usable without custom parser | 23 (100.0%) |
| Representable with current schema | 23 / 23 |
| Collections needing manual input / notes | 1 |
| New D-class patterns (2+ collections) | 0 |

---

## Phase 3A success target

| Criterion | Target | Result | Status |
|-----------|--------|--------|--------|
| Sample parse rate | ≥95% metadata parseable | **99.1%** | PASS |
| No custom parser | ≥90% collections | **100.0%** | PASS |
| Critical schema gaps | 0 new critical | **0** repeated D-class | PASS |
| Repeated schema gaps | ≤2 new | **0** | PASS |
| **Overall** | — | — | **PASS** |

---

## Metadata standards observed

| Standard | Collections |
|----------|------------:|
| CIP25v1 | 23 |
| CIP68v1 | 1 |

All Phase 3A samples signal **CIP25v1** via Blockfrost. No new CIP-68 hex trait blob collections observed (GAP-002 not expanded).

---

## Trait layout patterns

| Layout | Count |
|--------|------:|
| root_flat_keys | 9 |
| attributes_object | 7 |
| minimal_or_custom | 5 |
| array_singleton_object | 1 |
| traits_string_array | 1 |

**Dominant patterns:** `root_flat_keys` (PFP/gaming), `attributes_object`, `array_singleton_object` (land sections), `minimal_or_custom` (pass/event/utility).

---

## Media layout patterns

| Pattern | Collections (approx.) |
|---------|----------------------|
| `image` string (IPFS/HTTP) | Majority |
| `files[]` multi-media | Several gaming / 3D collections |
| `mediaType` present | Common on CIP-25v1 |
| Split `image` array | goofy-gophers-mining-club, magic-kongs |

---

## Socials / license / royalties

| Area | Phase 3A observation |
|------|---------------------|
| Socials on asset metadata | Rare; mostly absent (class A) |
| External links | Sparse; occasional `website` / project URLs |
| License text | Not on-chain in samples |
| Royalties | Not in asset metadata (marketplace-level) |

Consistent with Phase 1/2 baseline — not blockers for registry definitions.

---

## Schema representability

| `schema_fit` | Count |
|----------------|------:|
| fits_with_notes | 23 |

**23/23** collections can be drafted with current Collection Definition Record schema and existing extraction strategies.

### Per-collection summary

| collection_id | Layout | Standard | Meta rate | schema_fit | No custom parser |
|---------------|--------|----------|----------:|------------|------------------|
| earthnode | minimal_or_custom | CIP25v1 | 100% | fits_with_notes | yes |
| toolheads | attributes_object | CIP25v1 | 100% | fits_with_notes | yes |
| hosky-c-ash-grab-nft | array_singleton_object | CIP25v1 | 100% | fits_with_notes | yes |
| goofy-gophers-mining-club | minimal_or_custom | CIP25v1 | 100% | fits_with_notes | yes |
| dead-rabbit-resurrection-society | minimal_or_custom | CIP25v1 | 100% | fits_with_notes | yes |
| derp-birds | attributes_object | CIP25v1 | 100% | fits_with_notes | yes |
| mocossi-itos | attributes_object | CIP25v1 | 100% | fits_with_notes | yes |
| snekkies | attributes_object | CIP25v1 | 100% | fits_with_notes | yes |
| raccoon-syndicate | attributes_object | CIP25v1 | 100% | fits_with_notes | yes |
| salty-seagulls-society | root_flat_keys | CIP25v1 | 100% | fits_with_notes | yes |
| equinenft-pioneer-horses | root_flat_keys | CIP25v1 | 100% | fits_with_notes | yes |
| kwic-keyboard-warriors-internet-cafe | root_flat_keys | CIP25v1 | 100% | fits_with_notes | yes |
| mad-dog-car-club | root_flat_keys | CIP25v1 | 100% | fits_with_notes | yes |
| ada-invadaz-season-1-planet-zaguro | root_flat_keys | CIP25v1 | 100% | fits_with_notes | yes |
| virtua-cardano-island-land-deeds | attributes_object | CIP25v1 | 100% | fits_with_notes | yes |
| magic-kongs | root_flat_keys | CIP25v1 | 100% | fits_with_notes | yes |
| eikonikos-genesis-passports | root_flat_keys | CIP25v1 | 100% | fits_with_notes | yes |
| genesis-collector | attributes_object | CIP25v1 | 100% | fits_with_notes | yes |
| cardano-warriors | traits_string_array | CIP25v1 | 100% | fits_with_notes | yes |
| platypus-cyberpunks | root_flat_keys | CIP68v1, CIP25v1 | 80% | fits_with_notes | yes |
| chains-of-war-genesis-heroes | minimal_or_custom | CIP25v1 | 100% | fits_with_notes | yes |
| brave-dogs-genesis-collection | root_flat_keys | CIP25v1 | 100% | fits_with_notes | yes |
| artifct-moon | minimal_or_custom | CIP25v1 | 100% | fits_with_notes | yes |

---

## Manual creator input likely needed

| collection_id | Layout | Notes |
|---------------|--------|-------|
| cardano-warriors | traits_string_array | `traits` string array with colon-separated labels (e.g. `Bac… |

---

## New gaps and edge cases

| collection_id | Pattern | Schema action |
|---------------|---------|---------------|
| goofy-gophers-mining-club | split_image_array | See findings |
| magic-kongs | split_image_array | See findings |
| cardano-warriors | traits_string_array | See findings |

**D-class schema log:** No new repeated D-class insufficiencies. `array_singleton_object` (GAP-001 resolved) covers land section arrays where seen.

**Not logged as schema gaps (single-collection or C-class):** split IPFS images, sparse pass metadata, utility collections with minimal traits.

---

## Comparison to 30-collection baseline

| | Phase 1+2 | Phase 3A add |
|--|----------:|-------------:|
| Collections | 30 | 23 |
| Samples | 300 | 230 |
| Parse failures at discovery | 0 normalization failures (post-definition) | 99.1% metadata at fetch |
| Custom parser collections | 1 (spacebudz, baseline) | 0 new |

---

## Next steps (not performed)

1. User review of Phase 3A summary
2. Definition authoring for 3A batch (separate pass)
3. End-to-end normalization on 53 collections
4. **Do not** start `include_later` (58 collections) until Phase 3A reviewed

---

## Related

- [top100-review.md](../top100-review.md)
- [phase-3-top100.json](../phase-3-top100.json)
- [schema-gap-log.md](../schema-gap-log.md)
