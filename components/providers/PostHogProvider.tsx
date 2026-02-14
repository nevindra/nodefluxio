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
    capture_pageview: false, // We capture manually below
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
