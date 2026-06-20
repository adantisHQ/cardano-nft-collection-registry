# Specification Examples

Worked examples validate against `schemas/collection-definition.schema.json`.

Validate any example:

```bash
pnpm --filter @cardano-nft-collection-registry/cli run start validate spec/examples/basic-cip25-pfp.collection-definition.json
```

---

## Example index

| File | Scenario | `definition_status` | Key strategies |
|------|----------|---------------------|----------------|
| [basic-cip25-pfp.collection-definition.json](./examples/basic-cip25-pfp.collection-definition.json) | Standard new-mint PFP | `complete` | `direct_path` |
| [gaming-item.collection-definition.json](./examples/gaming-item.collection-definition.json) | Gaming item, flat root keys | `complete` | `root_flat_keys` |
| [land.collection-definition.json](./examples/land.collection-definition.json) | Metaverse land parcels | `complete` | `array_singleton_object` |
| [membership.collection-definition.json](./examples/membership.collection-definition.json) | Membership pass + Official Links | `complete` | `root_flat_keys`, `array_singleton_object` |
| [cip68-partial.collection-definition.json](./examples/cip68-partial.collection-definition.json) | CIP-68 encoded traits | `partial` | `direct_path` |
| [broken-legacy.collection-definition.json](./examples/broken-legacy.collection-definition.json) | Unreliable legacy layout | `broken` | (none) |

Policy IDs in spec examples use synthetic hex prefixes (`f010…`, `f020…`, etc.) and **MUST NOT** be treated as live mainnet policies.

---

## Example 1 — Basic CIP-25 PFP

**Use case:** Launchpad mint with standard `attributes` object.

**Highlights:**

- `metadata_layout.primary_standard: "cip25"`
- Traits via `direct_path` on `$.attributes.*`
- Collection banner/logo as registry `value` fields
- Social and website in mappings

**Sample on-chain metadata** (asset level, after CIP-25 unwrap):

```json
{
  "name": "Basic #42",
  "image": "ipfs://bafyexample",
  "mediaType": "image/png",
  "attributes": {
    "Background": "Blue",
    "Eyes": "Laser"
  }
}
```

---

## Example 2 — Gaming item

**Use case:** Game item with uppercase stat keys on metadata root (OREMOB-style).

**Highlights:**

- `root_flat_keys` for `CLASS`, `RARITY`
- `files[]` media mapping
- `link_mappings.game` for client URL

---

## Example 3 — Land parcel

**Use case:** Metaverse land with coordinate sections (Pavia-style).

**Highlights:**

- Decorative section key `-----Land Sale 1-----`
- `array_singleton_object` for `type`, `x`, `y`
- Required parcel traits
- Warning note for bare IPFS CIDs

---

## Example 4 — Membership pass

**Use case:** Membership card with embedded Official Links array.

**Highlights:**

- Trait + social extraction from same legacy structure
- `social_mappings` and `link_mappings` use `source_path`
- Stable array order documented in `indexing_notes`

---

## Example 5 — CIP-68 partial

**Use case:** Reference-token metadata with opaque hex trait blob (SpaceBudz-style).

**Highlights:**

- `primary_standard: "cip68"`, `asset_name_encoding: "hex"`
- `definition_status: "partial"` because trait decoding is incomplete
- Warnings for reference-token indexing

---

## Example 6 — Broken legacy

**Use case:** Document unreliable collections without pretending completeness.

**Highlights:**

- Empty `trait_mappings`
- `definition_status: "broken"`
- Critical indexing note blocking automated analytics

---

## Production registry examples

Real mainnet definitions (54+ files) live under:

```
registry/mainnet/collections/
```

Notable references:

| File | Pattern |
|------|---------|
| `clay-nation.json` | `root_flat_keys` |
| `deadpxlz.json` | `key_value_array` |
| `the-mallard-order.json` | `array_singleton_object` |
| `pavia.json` | Land `array_singleton_object` |
| `spacebudz.json` | CIP-68 partial |
| `introverts-membership-card.json` | Membership links |

---

## Generating new examples

1. Author JSON conforming to [collection-definition.md](./collection-definition.md).
2. Validate with CLI `validate` command.
3. Add fixture raw metadata samples in tests when adding parser coverage.
