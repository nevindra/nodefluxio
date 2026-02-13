# Next.js 15 Upgrade + Config Modernization

**Date:** 2026-02-13
**Approach:** Upgrade Next.js 15 with React 18 (conservative) + config modernization

## Decision

Upgrade from Next.js 14.2.6 to Next.js 15 while keeping React 18. Modernize configuration to take advantage of stable Next.js 15 features.

## Audit Results

Codebase is fully compatible with Next.js 15:
- `params` already uses `Promise<>` + `await` in both dynamic routes
- All `Image` components have `alt` text
- No `cookies()`/`headers()`/`draftMode()` usage (now async in v15)
- No middleware, no `searchParams`, no `NextRequest.geo/ip`
- Route handler properly structured
- Sharp already installed

## Package Changes

| Package | Current | Target |
|---------|---------|--------|
| next | 14.2.6 | 15.x (latest) |
| All others | unchanged | unchanged |

## Config Changes

### next.config.mjs → next.config.ts
1. Remove `swcMinify: true` (default in v15)
2. Move `optimizePackageImports` from `experimental` to top-level (now stable)
3. Convert to TypeScript with `NextConfig` type import

### package.json scripts
- `"dev": "next dev"` → `"dev": "next dev --turbopack"`

## Out of Scope
- React 19 upgrade
- Dependency updates (framer-motion, GSAP, Three.js, Radix, etc.)
- ESLint flat config (no eslint config exists currently)
- Code changes (none needed)
