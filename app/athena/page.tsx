"use client";

import { AthenaHero } from "@/components/athena/AthenaHero";
import { CapabilitiesScroll } from "@/components/athena/CapabilitiesScroll";
import { EnterpriseServices } from "@/components/athena/EnterpriseServices";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "@phosphor-icons/react";
import LandingSection from "@/components/LandingSection";
import OperationalGrid from "@/components/OperationalGrid";

export default function AthenaPage() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary/20">
      <OperationalGrid />

      <div>
        <AthenaHero />
      </div>

      <LandingSection>
        {/* 3. Capabilities: Deep Dive */}
        <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 pt-8 md:pt-16">
          <CapabilitiesScroll />
        </div>
      </LandingSection>

      {/* 4. Enterprise Services: Big Data & Governance */}
      <EnterpriseServices />

    </main>
  );
}
