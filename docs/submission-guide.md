# Submission Guide

How to add or update a Collection Definition Record.

## Before you submit

Gather:

- Policy ID(s) — 56-character hex, at least one required
- Sample per-asset metadata from multiple mint eras
- Known trait key variants and normalization needs
- CIP-25 and/or CIP-68 layout details
- Official logo, banner, website, socials (for explicit registry values)
- License and royalty information sources
- Indexing caveats

## Steps

### 1. Choose collection_id

Lowercase kebab-case, stable, unique: `my-collection-name`

### 2. Set definition_status honestly

| Status | When to use |
|--------|-------------|
| `minimal` | Only identity and policy IDs are known |
| `partial` | Important parsing information is still missing or unresolved |
| `complete` | Known metadata layout can be parsed from the definition; optional socials/license/royalties may still be absent |
| `inferred` | Layout inferred from samples; not confirmed by creator/project |
| `broken` | Metadata layout is inconsistent or unreliable |
| `unknown` | Not enough information to assess |

See [registry-model.md](registry-model.md) for full semantics.

### 3. Create the definition file

Add `registry/collections/{collection_id}.json`.

Start from:

- `examples/collection.basic.json` — minimal
- `examples/collection.with-traits.json` — full trait/media/social example
- `examples/collection.cip25.json` — CIP-25 pattern
- `examples/collection.cip68.json` — CIP-68 pattern

### 4. Define extraction or explicit values

For each trait, media field, social, and link:

- Set `value` when the registry should provide it directly, or
- Set `source_path` when it must be extracted from metadata

### 5. Validate locally

```bash
pnpm build
pnpm --filter @cardano-nft-collection-registry/cli start validate registry/collections/your-collection.json
pnpm validate-all
```

### 6. Test parsing

```typescript
import { normalizeCollectionMetadata, validateCollectionDefinition } from "@cardano-nft-collection-registry/core";
```

Run against real sample metadata and confirm traits, media, and warnings.

### 7. Open a pull request

Include:

- Collection name and official site
- Policy IDs
- Your relationship to the project
- Sample metadata used to derive mappings

## Review criteria

- Validates against schema
- At least one policy ID
- Trait paths match sample metadata
- Explicit registry values used for collection branding not present on-chain
- Indexing notes document known quirks
- No duplicate active policy mappings

## Not required (v1)

- Cryptographic proof of ownership
- On-chain attestation
- Governance approval

## Anti-patterns

- Storing per-NFT trait values
- Fake verification flags
- Mapping one policy to multiple active definitions
- Copying marketplace trait lists without verifying metadata
