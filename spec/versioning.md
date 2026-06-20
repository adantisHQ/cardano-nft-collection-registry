# Versioning

This document defines versioning rules for the Collection Definition Registry schema and specification.

---

## Version fields

| Field | Scope |
|-------|--------|
| `registry_version` | Per collection definition record (required) |
| JSON Schema `$id` | Machine-readable schema at `schemas/collection-definition.schema.json` |
| `spec/` documents | Human-readable specification (this directory) |

All new collection definitions **MUST** set `registry_version` to the schema version they conform to (currently `1.0.0`).

---

## Semantic versioning

The registry uses [Semantic Versioning 2.0.0](https://semver.org/):

```
MAJOR.MINOR.PATCH
```

| Bump | When |
|------|------|
| **MAJOR** | Breaking schema change (removed required behavior, renamed required fields, incompatible enum changes) |
| **MINOR** | New optional fields, new optional extraction strategies, backward-compatible extensions |
| **PATCH** | Documentation clarifications, typo fixes, non-normative example updates |

---

## Compatibility rules

### Producers (creators, launchpads, registry maintainers)

- **MUST** set `registry_version` matching the schema used for validation.
- **MUST NOT** use fields absent from their declared schema version.
- **SHOULD** re-validate definitions after schema upgrades.

### Consumers (indexers, wallets, ADAntis)

- **MUST** reject documents failing JSON Schema validation for the declared version.
- **SHOULD** ignore unknown optional fields within the same major version if using a forward-compatible parser.
- **MUST NOT** assume unknown fields have defined semantics.

---

## Current version: 1.0.0

### Supported extraction strategies

- `direct_path`
- `first_existing_path`
- `array_singleton_object`
- `key_value_array`
- `root_flat_keys`

Adding a sixth strategy requires **MINOR** bump minimum.

### Deprecated fields

None in `1.0.0`.

### Experimental fields

None standardized in `1.0.0`. Implementations **MAY** use `indexing_notes` to document experimental parser behavior outside schema.

---

## Schema files (normative)

| File | Purpose |
|------|---------|
| `schemas/collection-definition.schema.json` | Root record |
| `schemas/trait-mapping.schema.json` | Trait mapping items |
| `schemas/sourced-value.schema.json` | Sourced value pattern |

Spec prose in `spec/` **SHOULD** match schema constraints. If prose and schema disagree, schema validation is authoritative for machine interchange; spec issues **SHOULD** be fixed in patch releases.

---

## Specification document versioning

The `spec/` package shares the registry schema version line (`1.0.0` preview). Spec-only changes (clarifications, examples) **MAY** note patch date in document headers without bumping `registry_version`.

---

## Migration guidance

When **MAJOR** version increases:

1. Publish migration guide in `docs/` or `spec/`.
2. Provide validation tooling for old and new versions during transition.
3. Registry maintainers **SHOULD** bulk re-validate `registry/**/collections/*.json`.

When **MINOR** version increases:

- Existing `1.0.x` documents remain valid as `1.1.0` if they omit new optional fields.
- New fields **MAY** be adopted incrementally per collection.

---

## CIP submission status

This registry specification is **not** a submitted CIP. Versioning here governs the ADAntis / repository registry format only until a public CIP process is initiated.

See [docs/spec-readiness-review.md](../docs/spec-readiness-review.md).
