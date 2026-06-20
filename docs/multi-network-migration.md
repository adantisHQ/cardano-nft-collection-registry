# Multi-Network Registry Migration Proposal

**Status:** Phase 2 complete (mainnet definitions migrated) — legacy fallback code retained until Phase 3  
**Date:** 2026-06-09  
**Scope:** Repository layout and tooling — **not** Collection Definition Record schema changes

Phase 1 added network-aware path resolution. **Phase 2 (2026-06-09)** moved all mainnet JSON from `registry/collections/` to `registry/mainnet/collections/`. See [research/phase2-mainnet-migration-report.md](../research/phase2-mainnet-migration-report.md).

---

## Goals

1. Store collection definitions **per Cardano network**, not in a single flat directory.
2. Keep **one shared parser/schema** — network is a **load-time partition**, not a schema field (for now).
3. Preserve **backward compatibility** for consumers and CI that still reference `registry/collections/`.
4. Align CLI, API, and indexer discovery with explicit network selection.

## Non-goals (this proposal)

- No file moves in this step
- No changes to `schemas/collection-definition.schema.json` or Zod validators
- No `network` field inside Collection Definition Records (deferred; see [Future schema considerations](#future-schema-considerations))
- No multi-network policy collision rules in schema (handled at loader/index layer)

---

## 1. Proposed directory structure

```
registry/
├── mainnet/
│   └── collections/
│       ├── clay-nation.json
│       ├── spacebudz.json
│       └── …
├── preprod/
│   └── collections/
│       └── …                    # test / staging definitions (may be empty initially)
├── preview/
│   └── collections/
│       └── …                    # preview testnet definitions (may be empty initially)
└── collections/                 # LEGACY — see backward compatibility (deprecated)
    └── …                        # current 53+ definition files remain here until migrated
```

### Rationale

| Path | Purpose |
|------|---------|
| `registry/{network}/collections/` | Canonical home for validated definitions per network |
| `registry/collections/` | Legacy flat layout; retained during transition with deprecation warnings |

**Research artifacts** (`research/raw-samples/`, audits, findings) are **out of scope** for this layout change in v1. Samples today are mainnet Blockfrost fetches; a future pass may add `research/raw-samples/{network}/` if preprod/preview audits begin.

**Examples** (`examples/`) and **JSON Schema** (`schemas/`) stay at repo root — network-agnostic.

---

## 2. Proposed network enum

```typescript
/** Cardano networks supported by the registry loader (not yet in schema). */
type RegistryNetwork = "mainnet" | "preprod" | "preview";

const REGISTRY_NETWORKS: readonly RegistryNetwork[] = [
  "mainnet",
  "preprod",
  "preview",
] as const;

const DEFAULT_REGISTRY_NETWORK: RegistryNetwork = "mainnet";
```

### Validation rules

- CLI/API `--network` and `REGISTRY_NETWORK` must match `^mainnet|preprod|preview$` (case-sensitive, lowercase).
- Invalid network → exit code 1 with clear error (CLI) or HTTP 400 (API).
- Default when omitted: **`mainnet`**.

### Mapping to Blockfrost / ADAntis

| Registry network | Typical Blockfrost base | ADAntis `network` column (cardano-market-api) |
|------------------|-------------------------|-----------------------------------------------|
| `mainnet` | `https://cardano-mainnet.blockfrost.io/api/v0` | `mainnet` |
| `preprod` | `https://cardano-preprod.blockfrost.io/api/v0` | `preprod` |
| `preview` | `https://cardano-preview.blockfrost.io/api/v0` | `preview` |

Loader network does **not** embed Blockfrost URLs in definition JSON; consumers pair network + policy_id when fetching chain data.

---

## 3. Required code changes (by component)

### 3.1 Registry discovery logic (`packages/core/src/registry.ts`)

**Today:**

```typescript
resolveRegistryRoot(startDir?) → {repoRoot}/registry/collections
loadCollectionsFromDirectory(directory) → reads *.json from flat directory
```

**Proposed additions:**

| Function | Role |
|----------|------|
| `isRegistryNetwork(value: string): value is RegistryNetwork` | Parse/validate network enum |
| `resolveRegistryCollectionsPath(startDir?, network?)` | `{repoRoot}/registry/{network}/collections` |
| `resolveRegistryRoot(startDir?, network?)` | Alias to collections path (backward-compatible name extension) |
| `detectLegacyCollectionsPath(repoRoot)` | Returns `registry/collections` if it exists and has JSON |
| `resolveRegistryCollectionsPathWithFallback(...)` | Prefer network path; fall back to legacy with warning |

**`loadCollectionsFromDirectory`:** unchanged signature — still loads one directory. Callers pass the resolved path for the chosen network.

**Optional v2 loader (later):**

```typescript
loadRegistryByNetwork(repoRoot, network): RegistryLoadResult
// internally: resolveRegistryCollectionsPathWithFallback + loadCollectionsFromDirectory
```

**Policy index:** `buildPolicyIndex` remains per loaded batch. Callers must not merge mainnet + preprod indexes without explicit multi-network API (policy IDs could collide across testnets).

### 3.2 Validator (`packages/core/src/schemas.ts`)

**No schema changes** in this migration.

| Component | Change |
|-----------|--------|
| `validateCollectionDefinition()` | **None** — validates JSON shape only |
| `loadCollectionsFromDirectory()` validation loop | **None** — still calls `validateCollectionDefinition` per file |
| CI `validate-all` | Resolve path via network (default mainnet) before batch load |

Optional future: warn if filename network prefix mismatches `--network` (not required for v1).

### 3.3 CLI (`packages/cli/src/cli.ts`, `audit.ts`, `prepare-phase.ts`)

**New global option:**

```
--network mainnet|preprod|preview   (default: mainnet)
```

**Interaction with existing `--root`:**

| Flags | Resolved load path |
|-------|-------------------|
| `--root /custom/path` | Exact path (ignores `--network` for loading; network still used for prepare-phase definition **target** unless `--root` is collections dir) |
| `--network preprod` only | `{repoRoot}/registry/preprod/collections` (with legacy fallback during transition) |
| neither | `mainnet` collections path |

**`resolveAuditPaths()` (`audit.ts`)** — today hardcodes:

```86:86:packages/cli/src/audit.ts
    definitionFile: path.join(repoRoot, "registry", "collections", `${collectionId}.json`),
```

**Proposed:**

```typescript
definitionFile: path.join(
  repoRoot,
  "registry",
  network,
  "collections",
  `${collectionId}.json`,
),
```

Pass `network` from CLI options into `createAuditTemplate`, `preparePhase`, `parseAuditReport` (definition existence check only).

**Help text:** update default path documentation from `./registry/collections` to `./registry/mainnet/collections`.

### 3.4 API (`packages/api/src/app.ts`, `server.ts`)

**Environment variables (proposed):**

| Variable | Default | Purpose |
|----------|---------|---------|
| `REGISTRY_NETWORK` | `mainnet` | Select network subdirectory |
| `REGISTRY_ROOT` | _(auto)_ | Override collections directory **or** repo root (see below) |

**Resolution order for `getRegistryRoot()`:**

1. If `REGISTRY_ROOT` ends with `/collections` or contains `mainnet/collections` → use as-is (explicit override).
2. If `REGISTRY_ROOT` points at repo root → `{REGISTRY_ROOT}/registry/{REGISTRY_NETWORK}/collections`.
3. Else → `resolveRegistryCollectionsPathWithFallback(repoRoot, REGISTRY_NETWORK)`.

**Route options (pick one in implementation — recommend A + C):**

| Option | Example | Notes |
|--------|---------|-------|
| **A. Env-only** | Single-network server per deploy | Simplest; matches ADAntis sidecar pattern |
| **B. Path prefix** | `GET /networks/mainnet/collections` | Multi-network single process |
| **C. Query param** | `GET /collections?network=preprod` | Backward compatible `/collections` = default network |

**Response enrichment (optional, non-breaking):**

```json
{
  "network": "mainnet",
  "count": 53,
  "collections": [ … ]
}
```

**Policy lookup:** `GET /policies/{id}` must document that resolution is **within the server's active network** unless multi-network routes are added.

### 3.5 Indexer package (`packages/indexer/src/index.ts`)

**Today:**

```typescript
loadRegistryIndexer(registryRoot = resolveRegistryRoot())
```

**Proposed:**

```typescript
loadRegistryIndexer(options?: {
  registryRoot?: string;
  network?: RegistryNetwork;
})
```

Default: `network: "mainnet"`, root from `resolveRegistryCollectionsPathWithFallback`.

Export `RegistryNetwork` type from `@cardano-nft-collection-registry/core` for ADAntis embed.

### 3.6 Root `package.json` scripts

**Today:** `validate-all` → CLI `validate-all` with default root.

**Proposed:**

```json
"validate-all": "… validate-all --network mainnet",
"validate-all:preprod": "… validate-all --network preprod",
"validate-all:preview": "… validate-all --network preview"
```

---

## 4. Backward compatibility plan

### Phase 0 — Proposal (current)

- No file moves
- Document target layout and API

### Phase 1 — Dual-path loader (code only)

Implement `resolveRegistryCollectionsPathWithFallback`:

```
1. If registry/{network}/collections exists → use it
2. Else if network === "mainnet" AND registry/collections exists → use legacy path
3. Emit console warning (CLI) or startup log (API):
   "Using legacy registry/collections; migrate to registry/mainnet/collections"
4. Else → empty directory or error (validate-all fails clearly)
```

**Behavior preserved:**

| Consumer | During Phase 1 |
|----------|----------------|
| `pnpm validate-all` (no flags) | Validates legacy `registry/collections/` until move |
| `--root registry/collections` | Still works (explicit override) |
| ADAntis `REGISTRY_ROOT=.../registry/collections` | Unchanged |
| `resolveRegistryRoot()` default | Returns mainnet path if present, else legacy |

### Phase 2 — Physical migration (complete)

1. Inspected `registry/mainnet/collections/` for prepare-phase placeholders
2. **Moved** 54 JSON files from `registry/collections/` → `registry/mainnet/collections/` (see migration report)
3. Removed empty `registry/collections/` directory
4. Legacy fallback **remains in code** until Phase 3; normal validation uses canonical mainnet path

**Migration report:** [research/phase2-mainnet-migration-report.md](../research/phase2-mainnet-migration-report.md)

### Phase 2 — Physical migration (original plan)

### Phase 3 — Remove legacy fallback (future)

- Loader stops reading `registry/collections/`
- Major version bump if published to npm
- Update all docs and CI paths

### Compatibility matrix

| Path | Phase 1 | Phase 2 | Phase 3 |
|------|---------|---------|---------|
| `registry/collections/*.json` | Loaded (mainnet default + warning) | **Removed** (migrated) | Not loaded |
| `registry/mainnet/collections/*.json` | Loaded if present | **Canonical** | **Canonical** |
| `registry/preprod/collections/*.json` | Loaded when `--network preprod` | Same | Same |
| `registry/preview/collections/*.json` | Loaded when `--network preview` | Same | Same |

---

## 5. Tests requiring updates

### Must update (path/network behavior)

| File | Reason |
|------|--------|
| `packages/cli/src/cli.test.ts` | Hardcodes `--root ../../registry/collections`; add mainnet path test + legacy fallback test |
| `packages/cli/src/prepare-phase.test.ts` | `resolveAuditPaths().definitionFile` will include network segment |
| `packages/cli/src/audit.test.ts` | If asserts definition path strings |
| `packages/core/src/registry.test.ts` | Add tests for `resolveRegistryCollectionsPath`, fallback, invalid network |
| `packages/api/src/app.test.ts` | Optional: test network in response body if added |
| New: `packages/core/src/registry-network.test.ts` | Enum validation, path resolution edge cases |

### Likely unchanged (no path dependency)

| File | Reason |
|------|--------|
| `packages/core/src/schemas.test.ts` | Schema validation is network-agnostic |
| `packages/core/src/parser.test.ts` | Normalizer tests use inline fixtures |
| `packages/core/src/trait-extraction.test.ts` | Strategy tests use inline fixtures |
| `packages/core/src/source-path.test.ts` | Path extraction only |
| `packages/indexer/src/index.test.ts` | In-memory definitions; optional add network loader integration test |

### Integration / repo scripts (update when migration executes)

| Script | Change |
|--------|--------|
| `tmp/e2e-normalization-report.mjs` | Pass `registry/mainnet/collections` or `--network mainnet` |
| `tmp/phase1-normalization-report.mjs` | Same |
| `tmp/build-phase2-definitions.mjs` | Output path includes network |
| CI workflow (if added) | `validate-all --network mainnet` |

### Test strategy recommendation

1. **Fixture dirs** in `packages/core/test/fixtures/registry/`:

   ```
   fixtures/registry/
   ├── legacy/collections/example.json
   ├── mainnet/collections/example.json
   └── preprod/collections/empty/
   ```

2. Assert fallback warning once, then canonical path after Phase 2 fixture layout.

---

## 6. CLI commands and `--network`

### Commands that **should** gain `--network`

| Command | Why |
|---------|-----|
| `validate-all` | Batch-validate per-network dataset |
| `list` | List definitions for selected network |
| `inspect` | Lookup within network scope |
| `search` | Search within network scope |
| `prepare-phase` | Write placeholder definitions to `registry/{network}/collections/` |
| `audit-template` | Target definition path under network |
| `audit-report` | Check definition existence under network |

### Commands that **should not** require `--network` (file-scoped)

| Command | Why |
|---------|-----|
| `validate <file>` | Validates explicit file path; network inferred from path or ignored |
| `help` | — |

### Proposed help snippet

```
Options:
  --network <mainnet|preprod|preview>   Registry network (default: mainnet)
  --root <path>                         Override collections directory (ignores default network path)
  …
```

### Examples (post-implementation)

```bash
# Default — mainnet (legacy fallback until files moved)
pnpm validate-all

# Explicit network
pnpm --filter @cardano-nft-collection-registry/cli start validate-all --network preprod

# Override path entirely (CI pinning)
pnpm --filter @cardano-nft-collection-registry/cli start list --root ./registry/mainnet/collections

# Single file — unchanged
pnpm --filter @cardano-nft-collection-registry/cli start validate registry/mainnet/collections/clay-nation.json
```

---

## 7. API surface (proposed)

### Single-network deployment (minimal)

```bash
REGISTRY_NETWORK=mainnet node packages/api/dist/server.js
# loads registry/mainnet/collections (or legacy fallback)
```

### Multi-network deployment (optional later)

```
GET /health
GET /networks
GET /networks/:network/collections
GET /networks/:network/collections/:collection_id
GET /networks/:network/policies/:policy_id
GET /networks/:network/search?q=
```

Existing routes remain as aliases for `REGISTRY_NETWORK` default.

---

## 8. Documentation updates (when migration is executed)

Not changed in this proposal step; track for Phase 1–2:

| Document | Update |
|----------|--------|
| `README.md` | Paths, `validate-all`, `--network` |
| `docs/submission-guide.md` | Submit to `registry/mainnet/collections/` |
| `docs/adantis-integration.md` | `REGISTRY_NETWORK`, embed path |
| `docs/internal-baseline.md` | Baseline scope = mainnet |
| `research/validation-methodology.md` | Sample fetch network label |
| `research/audit-template.md` | Definition output path |

---

## 9. Future schema considerations (out of scope)

When schemas are updated in a **separate** approved change:

| Field | Purpose |
|-------|---------|
| `metadata_layout.cardano_network` | Optional explicit network on record |
| `policy_ids[]` + network uniqueness | Cross-network collision policy in schema |

Until then, **network is a directory partition only** — same `collection_id` may exist on preprod and mainnet in different files without schema enforcement.

---

## 10. Implementation checklist (ordered)

| Step | Action | Moves files? | Status |
|------|--------|--------------|--------|
| 1 | Add `RegistryNetwork` type + path helpers in `core` | No | Done |
| 2 | Add legacy fallback + deprecation warning | No | Done |
| 3 | Extend CLI `--network`; thread into `audit.ts` / `prepare-phase` | No | Done |
| 4 | Extend API/indexer env + optional response `network` field | No | Done |
| 5 | Update tests + `validate-all` scripts | No | Done |
| 6 | Create empty `registry/preprod/collections/`, `registry/preview/collections/` | No (mkdir only) | Optional |
| 7 | Move mainnet JSON to `registry/mainnet/collections/` | **Yes** (Phase 2) | **Done** (54 files) |
| 8 | Remove legacy fallback | **Yes** (Phase 3) | Not started |

---

## 11. Risk summary

| Risk | Mitigation |
|------|------------|
| CI breaks when fallback removed too early | Phase 1 dual-path; explicit CI `--network mainnet` |
| ADAntis hardcodes `registry/collections` | Document `REGISTRY_ROOT` override; Phase 2 comms |
| Same policy on multiple testnets | Network-scoped indexer; never merge indexes silently |
| Empty preprod/preview dirs fail validate-all | `validate-all` exits 0 with 0 collections + warning, or skip empty networks in CI |

---

## Related

- Current loader: `packages/core/src/registry-network.ts` — `resolveRegistryCollectionsPath()`, `loadRegistry()`
- CLI: `packages/cli/src/cli.ts` — `--network`, `--root` override
- API startup: `packages/api/src/server.ts` — `REGISTRY_NETWORK`, optional `?network=`
- Indexer: `packages/indexer/src/index.ts` — `loadRegistryIndexer({ network })`

**Phase 2 physical migration** (moving JSON to `registry/mainnet/collections/`) is a separate step.
