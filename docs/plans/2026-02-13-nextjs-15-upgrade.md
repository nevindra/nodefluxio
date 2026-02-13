# Next.js 15 Upgrade Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Upgrade nodeflux.io from Next.js 14.2.6 to Next.js 15 with config modernization, keeping React 18.

**Architecture:** Minimal-touch upgrade. The codebase already passes all Next.js 15 compatibility checks (async params, Image alt props, no deprecated APIs). Changes are limited to package version, config file format, and dev script.

**Tech Stack:** Next.js 15, React 18, TypeScript, pnpm, Turbopack (dev only)

---

### Task 1: Upgrade Next.js package

**Files:**
- Modify: `package.json:43` (next version)
- Modify: `pnpm-lock.yaml` (auto-updated by pnpm)

**Step 1: Upgrade next to v15**

Run:
```bash
pnpm add next@15
```

Expected: pnpm resolves next@15.x.x with React 18 peer deps satisfied. No peer dependency errors.

**Step 2: Verify installation**

Run:
```bash
pnpm next --version
```

Expected: Output shows `15.x.x`

**Step 3: Commit**

```bash
git add package.json pnpm-lock.yaml
git commit -m "chore: upgrade next from 14.2.6 to 15"
```

---

### Task 2: Convert next.config.mjs to next.config.ts

**Files:**
- Delete: `next.config.mjs`
- Create: `next.config.ts`

**Step 1: Create next.config.ts with modernized config**

Create `next.config.ts` with this exact content:

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
      },
    ],
  },
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
  optimizePackageImports: [
    "framer-motion",
    "@phosphor-icons/react",
    "lucide-react",
    "gsap",
  ],
  headers: async () => {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
```

Changes from original:
- `swcMinify: true` removed (default in Next.js 15)
- `experimental.optimizePackageImports` moved to top-level `optimizePackageImports` (now stable)
- Added TypeScript `NextConfig` type import
- File extension changed from `.mjs` to `.ts`

**Step 2: Delete old next.config.mjs**

Run:
```bash
rm next.config.mjs
```

**Step 3: Commit**

```bash
git add next.config.ts
git rm next.config.mjs
git commit -m "chore: convert next.config to TypeScript, remove deprecated options"
```

---

### Task 3: Enable Turbopack for development

**Files:**
- Modify: `package.json:6` (dev script)

**Step 1: Update dev script**

In `package.json`, change:
```json
"dev": "next dev"
```
to:
```json
"dev": "next dev --turbopack"
```

**Step 2: Commit**

```bash
git add package.json
git commit -m "chore: enable turbopack for dev server"
```

---

### Task 4: Verify build succeeds

**Files:** None (verification only)

**Step 1: Run production build**

Run:
```bash
pnpm build
```

Expected: Build completes successfully with no errors. Watch for:
- No warnings about `swcMinify` being deprecated
- No warnings about `experimental.optimizePackageImports`
- All pages compile (static and dynamic)
- Sitemap generates via postbuild script

**Step 2: Run dev server smoke test**

Run:
```bash
pnpm dev
```

Expected: Dev server starts with Turbopack. Output should show `▲ Next.js 15.x.x (Turbopack)`. Verify:
- Homepage loads at http://localhost:3000
- Animations work (framer-motion, Three.js globe)
- Blog page loads at /blog
- Solutions pages load at /solutions/public-security
- Contact form renders at /contact-us

**Step 3: Run lint check**

Run:
```bash
pnpm lint
```

Expected: No new lint errors introduced by the upgrade.

---

### Task 5: Final commit with version bump

**Files:**
- Modify: `package.json:3` (version, optional)

**Step 1: Squash or tag if desired**

This is optional. The upgrade is complete after Task 4 passes. If the user wants a version bump:

```bash
# Optional: bump version
pnpm version patch -m "chore: upgrade to next.js 15"
```

---

## Rollback Plan

If the build fails or runtime errors occur:

```bash
git revert HEAD~3..HEAD  # Revert all 3 commits
pnpm install             # Restore original lockfile
```

## Verification Checklist

- [ ] `pnpm next --version` shows 15.x.x
- [ ] `pnpm build` succeeds with no errors
- [ ] `pnpm dev` starts with Turbopack
- [ ] Homepage renders with animations
- [ ] Blog posts render correctly
- [ ] Solution pages render correctly
- [ ] Contact form works
- [ ] No console errors in browser
