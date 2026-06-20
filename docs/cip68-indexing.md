# CIP-68 Indexing

How to express CIP-68 collection interpretation in a Collection Definition Record.

## Role of the registry

CIP-68 defines reference tokens, user tokens, and updatable datum. The registry documents **how a specific collection implements CIP-68** and where traits and media are resolved.

## metadata_layout.cip68

```json
"metadata_layout": {
  "primary_standard": "cip68",
  "asset_name_encoding": "hex",
  "cip68": {
    "enabled": true,
    "datum_path": "$.datum",
    "reference_token_pattern": "^000643b0"
  }
}
```

Indexers must resolve reference tokens before reading user token metadata.

## Dynamic trait mappings

Set `dynamic: true` on traits that may change when reference datums update:

```json
{
  "canonical_trait": "Level",
  "value_type": "integer",
  "dynamic": true,
  "source": "cip68",
  "source_paths": [
    "$.extra_traits.Level",
    "$.datum.extra_traits.Level"
  ]
}
```

## Social and links from off-chain JSON

Use sourced values with extraction paths for project-level fields:

```json
"social_mappings": {
  "telegram": {
    "value": null,
    "source_path": "$.project.telegram",
    "source": "custom"
  }
},
"link_mappings": {
  "game": {
    "source_path": "$.project.game_url",
    "source": "custom"
  }
}
```

## Media

Per-asset media from resolved metadata; collection branding from registry:

```json
"media_mappings": {
  "image": { "source_path": "$.image", "source": "cip68" },
  "banner": { "value": "https://example.com/banner.webp", "source": "registry" }
}
```

## Indexing notes

```json
"indexing_notes": [
  {
    "severity": "critical",
    "message": "Distinguish reference tokens (prefix 000643b0) from user tokens."
  },
  {
    "severity": "warning",
    "message": "Trait values can change; do not cache indefinitely."
  }
]
```

## Example

`examples/collection.cip68.json`

## Mixed collections

Use `primary_standard: "mixed"` and document era boundaries in `indexing_notes` when a project spans CIP-25 and CIP-68 mints.
