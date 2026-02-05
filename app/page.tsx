import { MainHero } from "@/components/hero/MainHero";
import Certifications from "@/components/landing-page/Certifications";
import CTA from "@/components/landing-page/CTA";
import Features from "@/components/landing-page/Features";
import GlobalPresence from "@/components/landing-page/GlobalPresence";
import GlobalPresenceGL from "@/components/landing-page/GlobalPresenceGL";
import NationalIntelligence from "@/components/landing-page/NationalIntelligence";
import TrustedBy from "@/components/landing-page/TrustedBy";
import UseCases from "@/components/landing-page/UseCases";
import LandingSection from "@/components/LandingSection";

export const revalidate = 3600;

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-black">
      <div>
        <MainHero />
      </div>

      <LandingSection>
        <TrustedBy />
      </LandingSection>

      <LandingSection id="features">
        <Features />
      </LandingSection>

      <LandingSection>
        <UseCases />
      </LandingSection>

      <LandingSection id="national-intelligence">
        <NationalIntelligence />
      </LandingSection>

      <LandingSection>
        <Certifications />
      </LandingSection>

      <LandingSection>
        <CTA />
      </LandingSection>
    </main>
  );
}
