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
