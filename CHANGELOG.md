# Changelog

## [Unreleased]

### Changed
- **Dev audit (2026-11-15):** pin root `vite` 7.3.8 and `pnpm.overrides` for `vite`/`esbuild` so `pnpm audit` reports no high/critical (vitest 4.1.12). Tests only; no registry schema/API changes.
- **Vitest config (2026-11-15):** run tests from `src/` only (exclude stale `dist/*.test.js`).
- **Dev audit overrides (2026-11-15):** root `pnpm.overrides` for tinypool ≥2.1.2 (critical via vitest), nanoid, postcss, source-map-js.

## [0.1.1]

See Git tags / release notes.
