# Metadata Layout

The `metadata_layout` section describes **how to interpret existing on-chain metadata** for a collection. It does **not** replace CIP-25 or CIP-68.

---

## Canonical structure

```json
{
  "primary_standard": "cip25",
  "metadata_root": "$",
  "asset_name_encoding": "utf8",
  "cip25": {
    "label": "721",
    "policy_path": "$.721.<policy_id>",
    "asset_metadata_path": "$.721.<policy_id>.<asset_name>"
  },
  "cip68": {
    "enabled": false,
    "datum_path": null,
    "reference_token_pattern": null
  },
  "custom": {
    "description": ""
  }
}
```

---

## primary_standard

| Value | Meaning |
|-------|---------|
| `cip25` | Dominant layout follows CIP-25 label `721` structure |
| `cip68` | Dominant layout uses CIP-68 reference-token metadata |
| `custom` | Project-specific layout documented in `custom.description` |
| `mixed` | Multiple standards or policies with different layouts |
| `unknown` | Standard not determined |

Indexers **MUST** read `primary_standard` before applying trait and media paths.

---

## metadata_root

- **SHOULD** be `$` (asset-level metadata object after CIP-25 unwrap).
- Implementations **MAY** support other roots when documented in `custom.description`.

Path syntax uses dot notation; see repository `docs/source-paths.md`.

Placeholders:

| Placeholder | Replaced with |
|-------------|---------------|
| `<policy_id>` | Current asset policy ID |
| `<asset_name>` | Decoded asset name per `asset_name_encoding` |

---

## asset_name_encoding

| Value | Meaning |
|-------|---------|
| `utf8` | Asset name is UTF-8 text in CIP-25 path |
| `hex` | Asset name is hex-encoded in metadata paths |
| `mixed` | Encoding varies by sub-policy or asset type |
| `unknown` | Encoding not determined |

Indexers **MUST** decode asset names consistently when resolving `asset_metadata_path`.

---

## cip25 block

Describes the standard CIP-25 envelope:

```json
{
  "label": "721",
  "policy_path": "$.721.<policy_id>",
  "asset_metadata_path": "$.721.<policy_id>.<asset_name>"
}
```

- `label` **SHOULD** be `"721"`.
- After locating asset metadata, trait and media paths in mappings are usually relative to that object (i.e. `metadata_root: "$"` on the unwrapped record).

### Recommended mint format for new collections

Launchpads **SHOULD** mint CIP-25 metadata using the `721` label and an `attributes` object for traits (see [launchpad-guidance.md](./launchpad-guidance.md)).

This registry **does not** replace CIP-25. It documents how to **interpret** CIP-25 (and legacy variants) already on chain.

---

## cip68 block

```json
{
  "enabled": true,
  "datum_path": null,
  "reference_token_pattern": null
}
```

| Field | Role |
|-------|------|
| `enabled` | Whether CIP-68 reference-token metadata is in scope |
| `datum_path` | Optional path to inline datum fields |
| `reference_token_pattern` | Optional pattern to locate reference tokens |

When `enabled` is `true`:

- Indexers **MUST** resolve user tokens to reference-token metadata where applicable.
- Definitions **SHOULD** document hex-encoded or opaque fields in `indexing_notes`.
- Partial CIP-68 support **SHOULD** use `definition_status: "partial"`.

---

## custom block

```json
{
  "description": "Traits are top-level string fields, not nested under attributes."
}
```

Use when `primary_standard` is `custom` or when legacy layout needs human-readable context.

---

## Relationship to CIP standards

| Statement | Normative |
|-----------|-----------|
| This registry interprets metadata | **MUST** be true |
| This registry replaces CIP-25 / CIP-68 | **MUST NOT** be claimed |
| New mints should prefer CIP-25 `attributes` | **SHOULD** |
| Legacy layouts require explicit strategies | **MUST** |

---

## mixed and unknown layouts

When `primary_standard` is `mixed`:

- Trait mappings **MAY** use `first_existing_path` across legacy paths.
- Indexers **SHOULD** emit warnings when multiple paths disagree.

When `primary_standard` is `unknown`:

- Definitions **SHOULD** use `definition_status` of `minimal`, `unknown`, or `broken`.
- Indexers **MAY** return identity-only normalized output.
