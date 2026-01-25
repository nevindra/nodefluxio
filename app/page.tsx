import { MainHero } from "@/components/hero/MainHero";
import Stats from "@/components/landing-page/Stats";
import TrustedBy from "@/components/landing-page/TrustedBy";
import Features from "@/components/landing-page/Features";
import Accolades from "@/components/landing-page/Accolades";
import UseCases from "@/components/landing-page/UseCases";
import DeploymentMap from "@/components/landing-page/DeploymentMap";
import CTA from "@/components/landing-page/CTA";
import LandingSection from "@/components/LandingSection";

export const revalidate = 3600;

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-black snap-y snap-mandatory">
      <div className="snap-start">
        <MainHero />
      </div>
      <LandingSection className="snap-start">
        <Stats />
      </LandingSection>
      <LandingSection className="snap-start">
        <DeploymentMap />
      </LandingSection>
      <LandingSection id="features">
        <Features />
      </LandingSection>
      <LandingSection>
        <UseCases />
      </LandingSection>
      <LandingSection>
        <Accolades />
      </LandingSection>
      <LandingSection>
        <TrustedBy />
      </LandingSection>
      <LandingSection>
        <CTA />
      </LandingSection>
    </main>
  );
}
