# CIP-25 Indexing

How to express CIP-25 collection interpretation in a Collection Definition Record.

## Role of the registry

CIP-25 defines NFT metadata format. The registry defines **how a specific collection uses CIP-25** — paths, fallbacks, and normalization.

## metadata_layout.cip25

```json
"metadata_layout": {
  "primary_standard": "cip25",
  "metadata_root": "$",
  "asset_name_encoding": "utf8",
  "cip25": {
    "label": "721",
    "policy_path": "$.721.<policy_id>",
    "asset_metadata_path": "$.721.<policy_id>.<asset_name>"
  }
}
```

Document on-chain label structure and off-chain JSON layout for indexers.

## Trait extraction

Define trait mappings with CIP-25 source paths:

```json
{
  "canonical_trait": "Background",
  "value_type": "enum",
  "source": "cip25",
  "source_paths": [
    "$.attributes.Background",
    "$.attributes.background"
  ]
}
```

Handle both attribute object and array forms by listing alternate paths or adding normalization rules.

## Media extraction

```json
"media_mappings": {
  "image": { "source_path": "$.image", "source": "cip25" },
  "animation": { "source_path": "$.animation_url", "source": "cip25" },
  "files": [
    {
      "label": "Primary File",
      "source_path": "$.files[0].src",
      "media_type_path": "$.files[0].mediaType"
    }
  ]
}
```

Collection logo/banner are often **not** in per-asset metadata — define explicit registry values:

```json
"logo": {
  "value": "https://example.com/logo.png",
  "source": "registry"
}
```

## License and royalties

Extract from metadata when present:

```json
"license_info": {
  "license": { "source_path": "$.license", "source": "cip25" }
},
"royalty_info": {
  "has_royalties": true,
  "source": "cip27",
  "royalty_percentage": { "source_path": "$.royalties.rate", "source": "cip25" }
}
```

## Indexing notes

Document mint-era differences:

```json
"indexing_notes": [
  {
    "severity": "warning",
    "message": "721 schema version varies between 1.0 and 2.0 across mint batches."
  }
]
```

## Example

`examples/collection.cip25.json`

## Parser usage

```typescript
import { normalizeCollectionMetadata } from "@cardano-nft-collection-registry/core";

const normalized = normalizeCollectionMetadata(perAssetJson, definition);
```
