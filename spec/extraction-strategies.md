# Extraction Strategies

Extraction strategies are declarative rules for reading trait values from raw NFT metadata.

Implementations **MUST NOT** add new strategy names without a schema version bump and spec update. The following five strategies are validated against real Cardano mainnet collections.

---

## Strategy summary

| Strategy | Use when |
|----------|----------|
| `direct_path` | Value lives at one fixed path |
| `first_existing_path` | Several legacy paths may exist |
| `array_singleton_object` | Traits in `[{ "Trait": "Value" }, ...]` arrays |
| `key_value_array` | Traits in `[{ "key": "...", "value": "..." }]` arrays |
| `root_flat_keys` | Traits are top-level string fields on metadata root |

---

## 1. direct_path

**Use when** the trait value lives at a single known path.

```json
{
  "canonical_trait": "Background",
  "value_type": "string",
  "extraction": {
    "strategy": "direct_path",
    "source_path": "$.attributes.Background"
  }
}
```

### Rules

- `source_path` **MUST** be present.
- Parsers **MUST** return the value at that path or absent if missing.
- **SHOULD** be the default for new CIP-25 mints using `attributes`.

### Example raw metadata

```json
{
  "attributes": {
    "Background": "Blue",
    "Eyes": "Laser"
  }
}
```

---

## 2. first_existing_path

**Use when** multiple legacy paths may contain the same trait.

```json
{
  "canonical_trait": "Background",
  "value_type": "string",
  "source_paths": [
    "$.attributes.Background",
    "$.traits.background",
    "$.properties.Background"
  ],
  "extraction": {
    "strategy": "first_existing_path"
  }
}
```

### Rules

- `source_paths` **MUST** be a non-empty ordered array on the trait mapping.
- Parsers **MUST** return the first path that exists and is non-null.
- Order **SHOULD** reflect most canonical → most legacy.

---

## 3. array_singleton_object

**Use when** metadata stores traits as an array of single-key objects:

```json
[
  { "Eyes": "Blue" },
  { "Background": "Green" }
]
```

```json
{
  "canonical_trait": "Background",
  "value_type": "string",
  "extraction": {
    "strategy": "array_singleton_object",
    "source_path": "$.Attributes",
    "key": "Background"
  }
}
```

### Rules

- `source_path` **MUST** point to the array.
- `key` **MUST** name the trait key to find within each array element.
- Parsers **MUST** scan array elements for an object containing `key`.
- Validated examples: The Mallard Order (`$.Attributes`), Pavia land sections.

---

## 4. key_value_array

**Use when** metadata uses explicit key/value pairs:

```json
[
  { "key": "Background", "value": "Blue" },
  { "key": "Type", "value": "Hero" }
]
```

```json
{
  "canonical_trait": "type",
  "value_type": "string",
  "extraction": {
    "strategy": "key_value_array",
    "source_path": "$.properties",
    "key": "type",
    "key_field": "key",
    "value_field": "value"
  }
}
```

### Rules

- `source_path` **MUST** point to the array.
- `key` **MUST** be the trait name to match in `key_field`.
- `key_field` and `value_field` **SHOULD** default to `"key"` and `"value"` if omitted (implementations **MAY** require explicit fields per schema).
- Validated example: DEADPXLZ `$.properties`.

---

## 5. root_flat_keys

**Use when** traits are stored directly on the metadata root:

```json
{
  "Eyes": "Blue",
  "Fur": "Black",
  "image": "ipfs://..."
}
```

```json
{
  "canonical_trait": "Eyes",
  "value_type": "string",
  "extraction": {
    "strategy": "root_flat_keys",
    "key": "Eyes"
  }
}
```

### Rules

- `key` **MUST** be present.
- Parsers **MUST** read `metadata_root[key]` (typically `$.Eyes`).
- Non-trait root fields (e.g. `image`, `name`) **SHOULD NOT** be mapped as traits unless intentional.
- Validated example: Clay Nation, OREMOB.

---

## Strategy selection guide

| Metadata pattern | Strategy |
|------------------|----------|
| Standard CIP-25 `attributes` | `direct_path` |
| OpenSea-style `traits` object | `first_existing_path` or `direct_path` |
| `[{ "Hat": "Cap" }]` arrays | `array_singleton_object` |
| `[{ "key": "...", "value": "..." }]` | `key_value_array` |
| Flat string fields on root | `root_flat_keys` |

---

## Error handling

- Missing path **MUST NOT** throw; return absent trait.
- Wrong type (object where string expected) **SHOULD** produce indexer warning.
- Encrypted, hex-encoded, or opaque blobs **SHOULD** use `value_type: "string"` with explanatory `notes` and `definition_status: "partial"`.

---

## Prohibited extensions

Implementations **MUST NOT** introduce undeclared strategies (regex capture, arithmetic transforms, conditional branches) in registry files until a future schema version documents them.

Workarounds **SHOULD** be documented in `indexing_notes` and `custom.description`.
