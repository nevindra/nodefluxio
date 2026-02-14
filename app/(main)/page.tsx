import { MainHero } from "@/components/hero/MainHero";
import Certifications from "@/components/landing-page/Certifications";
import CTA from "@/components/landing-page/CTA";
import Features from "@/components/landing-page/Features";
import GlobalPresenceGL from "@/components/landing-page/GlobalPresenceGL";
import TrustedBy from "@/components/landing-page/TrustedBy";
import UseCases from "@/components/landing-page/UseCases";
import LandingSection from "@/components/LandingSection";
import { homepageJsonLd } from "@/lib/jsonLd";

export const dynamic = "force-static";
export const revalidate = false;

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageJsonLd()) }}
      />
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

      <LandingSection id="global-presence">
        <GlobalPresenceGL />
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
