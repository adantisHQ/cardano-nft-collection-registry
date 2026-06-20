# Trait Mappings

Trait mappings define how indexers extract **per-NFT trait values** from raw metadata into a **canonical trait namespace**.

---

## Canonical mapping object

```json
{
  "canonical_trait": "Background",
  "display_name": "Background",
  "value_type": "enum",
  "category": "visual",
  "required": false,
  "dynamic": false,
  "source": "cip25",
  "source_paths": ["$.attributes.Background"],
  "extraction": {
    "strategy": "direct_path",
    "source_path": "$.attributes.Background"
  },
  "allowed_values": ["Blue", "Red", "Green"],
  "normalization": {
    "blue": "Blue"
  },
  "notes": ""
}
```

---

## Required fields

| Field | Requirement |
|-------|-------------|
| `canonical_trait` | **MUST** be present. Stable internal key (string). |
| `value_type` | **MUST** be present. See enum below. |
| `extraction` | **SHOULD** be present when value is read from metadata. |

---

## Optional fields

| Field | Purpose |
|-------|---------|
| `display_name` | UI label; defaults to `canonical_trait` if omitted |
| `category` | Grouping for filters and marketplaces |
| `required` | If `true`, missing trait **SHOULD** produce a warning |
| `dynamic` | If `true`, trait may change over time (game state, upgrades) |
| `source` | Provenance of trait definition |
| `source_paths` | Documentation / fallback path list |
| `allowed_values` | Closed enum for validation |
| `normalization` | Map raw strings to canonical display values |
| `notes` | Implementer context |

---

## value_type

| Type | Use when |
|------|----------|
| `string` | Free-text trait |
| `enum` | Closed set; use with `allowed_values` |
| `integer` | Whole number |
| `number` | Decimal number |
| `boolean` | true/false |
| `date` | ISO date |
| `datetime` | ISO datetime |
| `percentage` | 0–100 or 0–1 (document in notes) |
| `score` | Game or rarity score |
| `rank` | Ordinal rank |
| `object` | Nested object preserved as JSON |
| `array` | List value (e.g. tag arrays) |
| `unknown` | Type not determined |

Parsers **SHOULD** coerce string metadata to the declared type when safe; otherwise **SHOULD** emit a warning and preserve raw string.

---

## category

Recommended categories (implementations **MAY** extend):

| Category | Typical traits |
|----------|----------------|
| `visual` | Background, Eyes, Fur, Body |
| `gameplay` | Class, Level, Power |
| `utility` | Boost, Stake tier |
| `identity` | Name, Serial, Edition |
| `access` | Membership tier, Pass type |
| `rarity` | Rarity tier, Rank |
| `dynamic` | Mutable game state |
| `system` | Internal / protocol fields |
| `other` | Does not fit above |

Legacy registry files **MAY** use additional category strings (e.g. `parcel`, `membership`, `link`).

---

## source

| Value | Meaning |
|-------|---------|
| `cip25` | Extracted from CIP-25 asset metadata |
| `cip68` | Extracted from CIP-68 reference metadata |
| `custom` | Non-standard on-chain layout |
| `external` | External manifest (see `external_resources`) |
| `registry` | Registry-provided static value (rare for traits) |

---

## extraction

Every trait mapping **SHOULD** include an `extraction` object with a supported `strategy`. See [extraction-strategies.md](./extraction-strategies.md).

```json
{
  "strategy": "direct_path",
  "source_path": "$.attributes.Background"
}
```

Strategy-specific fields:

| Strategy | Additional fields |
|----------|-------------------|
| `direct_path` | `source_path` |
| `first_existing_path` | use `source_paths` on mapping |
| `array_singleton_object` | `source_path`, `key` |
| `key_value_array` | `source_path`, `key`, `key_field`, `value_field` |
| `root_flat_keys` | `key` |

---

## normalization

Per-trait value normalization map:

```json
"normalization": {
  "blue": "Blue",
  "BLUE": "Blue"
}
```

- Keys **SHOULD** be compared case-insensitively unless noted.
- Global rules **MAY** also appear in `normalization_rules` on the collection record.

---

## allowed_values

For `value_type: "enum"`:

```json
"allowed_values": ["Blue", "Red", "Green"]
```

- Indexers **SHOULD** warn when extracted value is not in `allowed_values`.
- Unknown values **MAY** still be returned with a warning.

---

## Multiple mappings

- Each `canonical_trait` **SHOULD** appear at most once per collection definition.
- Related legacy keys **SHOULD** map to one canonical trait via normalization, not duplicate mappings.

---

## Trait mapping without extraction

Registry-only traits (unusual) **MAY** omit `extraction` if value is always supplied externally. Such traits **SHOULD** be documented in `notes`.
