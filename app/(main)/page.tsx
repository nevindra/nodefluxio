import { MainHero } from "@/components/hero/MainHero";
import Features from "@/components/landing-page/Features";
import TrustedBy from "@/components/landing-page/TrustedBy";
import LandingSection from "@/components/LandingSection";
import { homepageJsonLd } from "@/lib/jsonLd";
import nextDynamic from "next/dynamic";

const UseCases = nextDynamic(() => import("@/components/landing-page/UseCases"));
const GlobalPresenceGL = nextDynamic(() => import("@/components/landing-page/GlobalPresenceGL"));
const Certifications = nextDynamic(() => import("@/components/landing-page/Certifications"));
const CTA = nextDynamic(() => import("@/components/landing-page/CTA"));

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
