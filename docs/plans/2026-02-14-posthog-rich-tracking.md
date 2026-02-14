# PostHog Rich Event Tracking Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add comprehensive PostHog event tracking across the Nodeflux website covering conversions, product interest, content engagement, navigation signals, and UTM attribution.

**Architecture:** Create a centralized `lib/analytics.ts` utility with typed event helper functions. Each component imports and calls the relevant tracking function at interaction points. UTM capture happens once on initial page load in the PostHog provider. All tracking uses the `posthog-js` library already installed.

**Tech Stack:** posthog-js (already installed), React hooks, Next.js

---

### Task 1: Create analytics utility module

**Files:**
- Create: `lib/analytics.ts`

**Step 1: Create the tracking utility**

```typescript
import posthog from "posthog-js";

// --- Conversion Events ---

export function trackDemoCtaClicked(page: string, ctaText: string) {
  posthog.capture("demo_cta_clicked", { page, cta_text: ctaText });
}

export function trackContactFormStarted() {
  posthog.capture("contact_form_started");
}

export function trackContactFormSubmitted() {
  posthog.capture("contact_form_submitted");
}

export function trackContactFormError(error: string) {
  posthog.capture("contact_form_error", { error });
}

// --- Product & Solution Interest ---

export function trackProductTabSwitched(product: string) {
  posthog.capture("product_tab_switched", { product });
}

export function trackCapabilityTabSwitched(capability: string) {
  posthog.capture("capability_tab_switched", { capability });
}

export function trackProductLearnMoreClicked(product: string) {
  posthog.capture("product_learn_more_clicked", { product });
}

export function trackLenzFeatureToggled(feature: string) {
  posthog.capture("lenz_feature_toggled", { feature });
}

// --- Content Engagement ---

export function trackBlogCategoryFiltered(category: string | null) {
  posthog.capture("blog_category_filtered", {
    category: category || "all",
  });
}

export function trackUseCaseCarouselInteracted(
  direction: "left" | "right" | "dot",
  index: number,
) {
  posthog.capture("use_case_carousel_interacted", { direction, index });
}

// --- Navigation & UX ---

export function trackContactInfoClicked(type: "email" | "phone" | "map") {
  posthog.capture("contact_info_clicked", { type });
}

export function trackSocialLinkClicked(platform: string) {
  posthog.capture("social_link_clicked", { platform });
}

export function trackMobileMenuOpened() {
  posthog.capture("mobile_menu_opened");
}

// --- Scroll Depth ---

export function trackScrollDepth(depth: number, page: string) {
  posthog.capture("scroll_depth", { depth, page });
}

// --- UTM Attribution ---

export function captureUtmParams() {
  if (typeof window === "undefined") return;

  const params = new URLSearchParams(window.location.search);
  const utmKeys = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content",
  ];
  const utmParams: Record<string, string> = {};

  for (const key of utmKeys) {
    const value = params.get(key);
    if (value) {
      utmParams[key] = value;
    }
  }

  if (Object.keys(utmParams).length > 0) {
    posthog.register(utmParams);
  }
}
```

**Step 2: Verify file compiles**

Run: `npx tsc --noEmit lib/analytics.ts 2>&1 | head -20` (or just build the project)

**Step 3: Commit**

```bash
git add lib/analytics.ts
git commit -m "feat: add centralized PostHog analytics tracking utility"
```

---

### Task 2: Add UTM capture and scroll depth tracking to PostHogProvider

**Files:**
- Modify: `components/providers/PostHogProvider.tsx`

**Step 1: Update PostHogProvider to capture UTMs and track scroll depth**

Add UTM capture on mount and a scroll depth tracker component:

```typescript
"use client";

import posthog from "posthog-js";
import { PostHogProvider as PHProvider, usePostHog } from "posthog-js/react";
import { Suspense, useCallback, useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { captureUtmParams, trackScrollDepth } from "@/lib/analytics";

if (
  typeof window !== "undefined" &&
  process.env.NEXT_PUBLIC_POSTHOG_KEY
) {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: "/ingest",
    ui_host: "https://us.i.posthog.com",
    capture_pageview: false,
    capture_pageleave: true,
  });
}

function PostHogPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const posthog = usePostHog();

  useEffect(() => {
    if (pathname && posthog) {
      let url = window.origin + pathname;
      if (searchParams.toString()) {
        url = url + "?" + searchParams.toString();
      }
      posthog.capture("$pageview", { $current_url: url });
    }
  }, [pathname, searchParams, posthog]);

  // Capture UTM params on first load
  useEffect(() => {
    captureUtmParams();
  }, []);

  return null;
}

function ScrollDepthTracker() {
  const pathname = usePathname();
  const milestonesRef = useRef<Set<number>>(new Set());

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight <= 0) return;

    const percent = Math.round((scrollTop / docHeight) * 100);
    const milestones = [25, 50, 75, 100];

    for (const milestone of milestones) {
      if (percent >= milestone && !milestonesRef.current.has(milestone)) {
        milestonesRef.current.add(milestone);
        trackScrollDepth(milestone, pathname);
      }
    }
  }, [pathname]);

  useEffect(() => {
    milestonesRef.current = new Set();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname, handleScroll]);

  return null;
}

export default function PostHogProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PHProvider client={posthog}>
      <Suspense fallback={null}>
        <PostHogPageView />
      </Suspense>
      <ScrollDepthTracker />
      {children}
    </PHProvider>
  );
}
```

**Step 2: Commit**

```bash
git add components/providers/PostHogProvider.tsx
git commit -m "feat: add UTM capture and scroll depth tracking to PostHog provider"
```

---

### Task 3: Add conversion tracking to contact form

**Files:**
- Modify: `app/contact-us/page.tsx`

**Step 1: Add form started and submission tracking**

At the top of the file, add import:
```typescript
import { trackContactFormStarted, trackContactFormSubmitted, trackContactFormError, trackContactInfoClicked } from "@/lib/analytics";
```

Add `useRef` to the react import:
```typescript
import { useRef, useState } from "react";
```

Inside `ContactUs` component, add a ref to track if form-started has fired:
```typescript
const formStartedRef = useRef(false);
```

Add an `onFocus` handler to the `<form>` element:
```tsx
<form
  onSubmit={handleSubmit(onSubmit)}
  onFocus={() => {
    if (!formStartedRef.current) {
      formStartedRef.current = true;
      trackContactFormStarted();
    }
  }}
  className="space-y-6"
>
```

In the `onSubmit` handler, after `reset()` add:
```typescript
trackContactFormSubmitted();
```

In the `catch` block, before the toast, add:
```typescript
trackContactFormError(error instanceof Error ? error.message : "Unknown error");
```

For contact info cards, change the `<a>` element to include an onClick:
```tsx
<a
  key={i}
  href={item.href}
  onClick={() => trackContactInfoClicked(item.label.toLowerCase() as "email" | "phone" | "map")}
  className="group flex items-start gap-4 p-5 rounded-2xl border border-border/60 bg-muted/5 hover:bg-muted/10 hover:border-primary/40 transition-all"
>
```

Note: For the "Office" label, we need to map it to "map". Update the contact info items to include a trackType:
```typescript
{
  icon: MapPin,
  label: "Office",
  value: "Jl. Kemang Timur No.24, Bangka, Jakarta Selatan 12730",
  href: "https://maps.app.goo.gl/5rtXjKs6T5eL4hZv5",
  trackType: "map" as const,
},
```

And in the onClick:
```tsx
onClick={() => trackContactInfoClicked(item.trackType || item.label.toLowerCase() as "email" | "phone" | "map")}
```

**Step 2: Commit**

```bash
git add app/contact-us/page.tsx
git commit -m "feat: add contact form conversion tracking (started, submitted, error, info clicks)"
```

---

### Task 4: Add CTA click tracking to hero and CTA components

**Files:**
- Modify: `components/hero/MainHero.tsx`
- Modify: `components/landing-page/CTA.tsx`
- Modify: `components/landing-page/Consolutation.tsx`

**Step 1: Track MainHero "Request Demo" button**

In `MainHero.tsx`, add import:
```typescript
import { trackDemoCtaClicked } from "@/lib/analytics";
```

Wrap the hero CTA button's Link with an onClick:
```tsx
<Link href={primaryCtaHref} onClick={() => trackDemoCtaClicked("hero", primaryCtaText)}>
  {primaryCtaText}
</Link>
```

**Step 2: Track CTA section "Contact Us" link**

In `CTA.tsx`, this is a server component (no "use client"). Convert it to a client component or use a wrapper. Since it uses `@phosphor-icons/react/dist/ssr`, the simplest approach is to add tracking inline via a client wrapper.

Actually, looking more closely: `CTA.tsx` uses SSR icon imports and `FadeInView` which is a client component. The `<Link>` component from Next.js supports `onClick`. But since this is a server component, we cannot add `onClick` directly.

**Approach:** Create a small client wrapper `TrackingLink` or convert CTA to a client component. Since CTA is simple, add `"use client"` directive and switch to client-side phosphor imports:

```typescript
"use client";

import { ArrowRight, Phone } from "@phosphor-icons/react";
import { FadeInView } from "@/components/solutions/MotionDiv";
import Link from "next/link";
import { trackDemoCtaClicked } from "@/lib/analytics";
```

Add onClick to the Link:
```tsx
<Link href="/contact-us" className="block group" onClick={() => trackDemoCtaClicked("landing_cta", "Contact Us")}>
```

**Step 3: Track Consolutation "Request Consultation" button**

In `Consolutation.tsx`, add import:
```typescript
import { trackDemoCtaClicked } from "@/lib/analytics";
```

Add onClick to the Link inside the Button:
```tsx
<Link href="/contact-us" className="flex items-center group" onClick={() => trackDemoCtaClicked("consultation", "Request Consultation")}>
```

**Step 4: Commit**

```bash
git add components/hero/MainHero.tsx components/landing-page/CTA.tsx components/landing-page/Consolutation.tsx
git commit -m "feat: add CTA click tracking to hero, CTA section, and consultation section"
```

---

### Task 5: Add CTA tracking to product and solution pages

**Files:**
- Modify: `components/lenz/FeaturesHolo.tsx`
- Modify: `app/visionaire/page.tsx`
- Modify: `app/solutions/[slug]/page.tsx`

**Step 1: Track Lenz "Talk to Our Team" CTA**

In `FeaturesHolo.tsx` (SSR component), we need to create a client wrapper for the tracking link, or extract the CTA into a client component. Simplest approach: create a tiny reusable client component.

Create: `components/tracking/TrackingLink.tsx`
```typescript
"use client";

import Link from "next/link";
import { trackDemoCtaClicked } from "@/lib/analytics";

interface TrackingLinkProps {
  href: string;
  page: string;
  ctaText: string;
  className?: string;
  children: React.ReactNode;
}

export function TrackingLink({ href, page, ctaText, className, children }: TrackingLinkProps) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => trackDemoCtaClicked(page, ctaText)}
    >
      {children}
    </Link>
  );
}
```

In `FeaturesHolo.tsx`, replace the `<Link href="/contact-us" ...>` with:
```tsx
import { TrackingLink } from "@/components/tracking/TrackingLink";

<TrackingLink href="/contact-us" page="lenz" ctaText="Talk to Our Team" className="w-full md:w-auto px-6 md:px-10 py-3 md:py-5 bg-primary text-primary-foreground rounded-xl md:rounded-2xl text-sm font-semibold hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3 active:scale-[0.98]">
  Talk to Our Team <TrendUp className="w-4 h-4" />
</TrackingLink>
```

**Step 2: Track VisionAIre "Talk to Our Team" CTA**

In `app/visionaire/page.tsx`, same approach — replace the `<Link>` CTA with `<TrackingLink>`:
```tsx
import { TrackingLink } from "@/components/tracking/TrackingLink";

<TrackingLink href="/contact-us" page="visionaire" ctaText="Talk to Our Team" className="w-full md:w-auto px-6 md:px-10 py-3 md:py-5 bg-primary text-primary-foreground rounded-xl md:rounded-2xl text-sm font-semibold hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3 active:scale-[0.98]">
  Talk to Our Team <TrendUp className="w-4 h-4" />
</TrackingLink>
```

**Step 3: Track solution page "Request Demo" CTA**

In `app/solutions/[slug]/page.tsx`, replace the "Request Demo" Button with TrackingLink inside:

Import TrackingLink and also need slug available. The page already has `slug` in scope.

Replace:
```tsx
<Button size="lg" asChild>
  <Link href="/contact-us">Request Demo</Link>
</Button>
```

With:
```tsx
<Button size="lg" asChild>
  <TrackingLink href="/contact-us" page={`solution_${slug}`} ctaText="Request Demo">
    Request Demo
  </TrackingLink>
</Button>
```

**Step 4: Commit**

```bash
git add components/tracking/TrackingLink.tsx components/lenz/FeaturesHolo.tsx app/visionaire/page.tsx app/solutions/\\[slug\\]/page.tsx
git commit -m "feat: add CTA tracking to product pages and solution pages"
```

---

### Task 6: Add product tab and capability tracking to Features and VisionAIre

**Files:**
- Modify: `components/landing-page/Features.tsx`
- Modify: `components/visionaire/CapabilitiesShowcase.tsx`

**Step 1: Track product tab switches in Features**

In `Features.tsx`, add import:
```typescript
import { trackProductTabSwitched, trackProductLearnMoreClicked, trackLenzFeatureToggled } from "@/lib/analytics";
```

In the tab button `onClick`, add tracking:
```tsx
onClick={() => {
  setActiveTab(p.id);
  trackProductTabSwitched(p.id);
}}
```

In the "Learn More" Link, add onClick:
```tsx
<Link href={p.href} onClick={() => trackProductLearnMoreClicked(p.id)}>Learn More </Link>
```

In the Lenz sub-feature buttons, add tracking:
```tsx
onClick={() => {
  setLenzUseCase(lenzUseCase === uc.id ? "streams" : uc.id);
  trackLenzFeatureToggled(uc.label);
}}
```

**Step 2: Track capability tab switches in CapabilitiesShowcase**

In `CapabilitiesShowcase.tsx`, add import:
```typescript
import { trackCapabilityTabSwitched } from "@/lib/analytics";
```

For the desktop tab buttons:
```tsx
onClick={() => {
  setActiveTab(model.id);
  trackCapabilityTabSwitched(model.title);
}}
```

For the mobile Select:
```tsx
onValueChange={(value) => {
  setActiveTab(value);
  const model = analyticModels.find((m) => m.id === value);
  if (model) trackCapabilityTabSwitched(model.title);
}}
```

**Step 3: Commit**

```bash
git add components/landing-page/Features.tsx components/visionaire/CapabilitiesShowcase.tsx
git commit -m "feat: add product tab and capability tracking to features and VisionAIre"
```

---

### Task 7: Add content engagement tracking to blog and carousel

**Files:**
- Modify: `components/blog/blog-list.tsx`
- Modify: `components/landing-page/UseCases.tsx`

**Step 1: Track blog category filter changes**

In `blog-list.tsx`, add import:
```typescript
import { trackBlogCategoryFiltered } from "@/lib/analytics";
```

Wrap `setActiveCategory` with tracking:
```tsx
<CategoryFilter
  categories={categories}
  activeCategory={activeCategory}
  onCategoryChange={(category) => {
    setActiveCategory(category);
    trackBlogCategoryFiltered(category);
  }}
/>
```

**Step 2: Track carousel interactions in UseCases**

In `UseCases.tsx`, add import:
```typescript
import { trackUseCaseCarouselInteracted } from "@/lib/analytics";
```

In `scrollLeft`:
```tsx
const scrollLeft = () => {
  if (activeIndex > 0) {
    scrollToIndex(activeIndex - 1);
    trackUseCaseCarouselInteracted("left", activeIndex - 1);
  }
};
```

In `scrollRight`:
```tsx
const scrollRight = () => {
  if (activeIndex < useCases.length - 1) {
    scrollToIndex(activeIndex + 1);
    trackUseCaseCarouselInteracted("right", activeIndex + 1);
  }
};
```

In dot indicators button onClick:
```tsx
onClick={() => {
  scrollToIndex(index);
  trackUseCaseCarouselInteracted("dot", index);
}}
```

**Step 3: Commit**

```bash
git add components/blog/blog-list.tsx components/landing-page/UseCases.tsx
git commit -m "feat: add blog category filter and use case carousel tracking"
```

---

### Task 8: Add navigation tracking to Navbar and Footer

**Files:**
- Modify: `components/Navbar.tsx`
- Modify: `components/navbar/MobileNavbar.tsx`
- Modify: `components/Footer.tsx`

**Step 1: Track "Initialize Demo" CTA in Navbar**

In `Navbar.tsx`, add import:
```typescript
import { trackDemoCtaClicked, trackMobileMenuOpened } from "@/lib/analytics";
```

For the desktop "Initialize Demo" button:
```tsx
<Link href="/contact-us" onClick={() => trackDemoCtaClicked("navbar", "Initialize Demo")}>Initialize Demo</Link>
```

For the mobile menu button, track when opened:
```tsx
onClick={() => {
  const newState = !mobileMenuOpen;
  setMobileMenuOpen(newState);
  if (newState) trackMobileMenuOpened();
}}
```

**Step 2: Track "Request Demo" in MobileNavbar**

In `MobileNavbar.tsx`, add import:
```typescript
import { trackDemoCtaClicked } from "@/lib/analytics";
```

On the mobile "Request Demo" link:
```tsx
<Link href="/contact-us" className="w-full h-full flex items-center justify-center" onClick={() => {
  trackDemoCtaClicked("mobile_navbar", "Request Demo");
  onClose();
}}>Request Demo</Link>
```

Remove the separate `onClick={onClose}` from the parent `Button` since `onClose` is now called inside the Link.

**Step 3: Track Footer contact info and social links**

In `Footer.tsx`, add import:
```typescript
import { trackContactInfoClicked, trackSocialLinkClicked } from "@/lib/analytics";
```

For the email link:
```tsx
<a
  href={`mailto:${contactInfo.email}`}
  onClick={() => trackContactInfoClicked("email")}
  className="..."
>
```

For the phone link:
```tsx
<a
  href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
  onClick={() => trackContactInfoClicked("phone")}
  className="..."
>
```

For the maps link:
```tsx
<a
  href="https://maps.app.goo.gl/5rtXjKs6T5eL4hZv5"
  onClick={() => trackContactInfoClicked("map")}
  target="_blank"
  rel="noopener noreferrer"
  className="..."
>
```

For the LinkedIn link:
```tsx
<a
  href="https://www.linkedin.com/company/nodeflux/"
  onClick={() => trackSocialLinkClicked("linkedin")}
  target="_blank"
  rel="noopener noreferrer"
  className="..."
  aria-label="LinkedIn"
>
```

**Step 4: Commit**

```bash
git add components/Navbar.tsx components/navbar/MobileNavbar.tsx components/Footer.tsx
git commit -m "feat: add navigation tracking to navbar, mobile menu, and footer"
```

---

### Task 9: Build verification

**Step 1: Run the build to verify everything compiles**

Run: `npm run build` (or `pnpm build` / `yarn build`)

Expected: Build succeeds with no TypeScript errors.

**Step 2: Fix any build errors if needed**

**Step 3: Final commit if any fixes were needed**

```bash
git add -A
git commit -m "fix: resolve build errors from analytics tracking integration"
```

---

## Summary of Events Implemented

| Category | Event Name | Properties |
|----------|-----------|------------|
| Conversion | `demo_cta_clicked` | `page`, `cta_text` |
| Conversion | `contact_form_started` | - |
| Conversion | `contact_form_submitted` | - |
| Conversion | `contact_form_error` | `error` |
| Product Interest | `product_tab_switched` | `product` |
| Product Interest | `capability_tab_switched` | `capability` |
| Product Interest | `product_learn_more_clicked` | `product` |
| Product Interest | `lenz_feature_toggled` | `feature` |
| Content | `blog_category_filtered` | `category` |
| Content | `use_case_carousel_interacted` | `direction`, `index` |
| Navigation | `contact_info_clicked` | `type` |
| Navigation | `social_link_clicked` | `platform` |
| Navigation | `mobile_menu_opened` | - |
| Engagement | `scroll_depth` | `depth`, `page` |
| Attribution | UTM params registered | `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content` |

## Files Created
- `lib/analytics.ts` — centralized tracking utility
- `components/tracking/TrackingLink.tsx` — client wrapper for tracked links in server components

## Files Modified
- `components/providers/PostHogProvider.tsx` — UTM capture + scroll depth
- `app/contact-us/page.tsx` — form tracking + contact info clicks
- `components/hero/MainHero.tsx` — hero CTA tracking
- `components/landing-page/CTA.tsx` — CTA section tracking
- `components/landing-page/Consolutation.tsx` — consultation CTA tracking
- `components/landing-page/Features.tsx` — product tab + learn more tracking
- `components/landing-page/UseCases.tsx` — carousel interaction tracking
- `components/visionaire/CapabilitiesShowcase.tsx` — capability tab tracking
- `components/lenz/FeaturesHolo.tsx` — Lenz CTA tracking
- `app/visionaire/page.tsx` — VisionAIre CTA tracking
- `app/solutions/[slug]/page.tsx` — solution page CTA tracking
- `components/blog/blog-list.tsx` — blog category filter tracking
- `components/Navbar.tsx` — navbar CTA + mobile menu tracking
- `components/navbar/MobileNavbar.tsx` — mobile CTA tracking
- `components/Footer.tsx` — footer contact info + social tracking
