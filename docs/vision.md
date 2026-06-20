# Vision

## Problem

Cardano has millions of NFTs and thousands of collections, but applications repeatedly guess how to interpret collection metadata.

Metadata arrives as CIP-25, CIP-68, custom JSON, legacy broken fields, marketplace-specific keys, and project-specific conventions. Indexers, wallets, and marketplaces maintain parallel heuristics. The same policy may use different trait keys across mint eras.

## Goal

Build a **Cardano NFT Collection Definition Registry** — a collection-level specification that tells applications **how to interpret, parse, normalize, and present** an entire collection.

Given a policy ID, a consumer should know:

- What the collection is
- Where metadata lives and how it is structured
- How to extract and normalize traits
- How to resolve media, links, socials, license, and royalties
- What caveats apply

## Scope

### In scope

- Collection Definition Records (JSON)
- Explicit values and metadata path extraction (`source_path`)
- Trait mappings, media mappings, social/link mappings
- License and royalty interpretation rules
- CIP-25 and CIP-68 layout documentation per collection
- Parser utilities: `extractBySourcePath`, `normalizeCollectionMetadata`
- CLI, API, and indexer utilities

### Out of scope

- Per-NFT trait storage
- On-chain anchoring or cryptographic verification
- Governance frameworks
- Full chain indexing
- Marketplace pricing or listing data

## Core principle

Every mappable field supports either:

**A. Explicit registry value** — defined in the definition record  
**B. Source path extraction** — resolved from raw metadata via `source_path`

```json
{
  "value": "https://example.com",
  "source_path": "$.project.website",
  "source": "registry",
  "notes": "..."
}
```

## Principles

1. **Collection-level only** — one definition covers 1 or 200,000 NFTs
2. **Complement standards** — does not replace CIP-25 or CIP-68
3. **Rules, not data** — stores parsing rules, not every trait instance
4. **Honest completeness** — `definition_status` reflects how complete the definition is
5. **No security theater** — verification only if implemented for real later

## Success criteria

An indexer can:

1. Resolve `policy_id → collection definition`
2. Call `normalizeCollectionMetadata(rawMetadata, definition)`
3. Receive normalized traits, media, socials, links, license, royalties, and warnings
4. Present collection-level branding from explicit registry values where metadata lacks them

## Intended consumers

- ADAntis marketplace
- Indexers and explorers
- Wallets and bridges
- Analytics platforms
- Community maintainers submitting definitions

See [registry-model.md](registry-model.md) for the record format.
