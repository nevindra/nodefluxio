import { AthenaHero } from "@/components/athena/AthenaHero";
import { CapabilitiesScroll } from "@/components/athena/CapabilitiesScroll";
import { EnterpriseServices } from "@/components/athena/EnterpriseServices";
import { PracticalUsage } from "@/components/athena/PracticalUsage";
import LandingSection from "@/components/LandingSection";

export const dynamic = "force-static";
export const revalidate = false;

export default function AthenaPage() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary/20 overflow-x-hidden">
      <div>
        <AthenaHero />
      </div>

      <LandingSection>
        {/* 3. Capabilities: Deep Dive */}
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-8 pt-8 md:pt-16">
          <CapabilitiesScroll />
        </div>
      </LandingSection>

      {/* 4. Practical Usage: Real-world Applications */}
      <PracticalUsage />

      {/* 5. Enterprise Services: Big Data & Governance */}
      <EnterpriseServices />
    </main>
  );
}
