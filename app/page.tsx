import { MainHero } from "@/components/hero/MainHero";
import Certifications from "@/components/landing-page/Certifications";
import CTA from "@/components/landing-page/CTA";
import Features from "@/components/landing-page/Features";
import NationalIntelligence from "@/components/landing-page/NationalIntelligence";
import TrustedBy from "@/components/landing-page/TrustedBy";
import UseCases from "@/components/landing-page/UseCases";
import LandingSection from "@/components/LandingSection";

export const revalidate = 3600;

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-black snap-y snap-mandatory">
      <div className="snap-start">
        <MainHero />
      </div>
      
      <LandingSection id="features">
        <Features />
      </LandingSection>
      
      <LandingSection>
        <UseCases />
      </LandingSection>
      
      <LandingSection className="snap-start">
        <NationalIntelligence />
      </LandingSection>
      
      <LandingSection>
        <TrustedBy />
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
