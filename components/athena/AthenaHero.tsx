import { Sparkle } from "@phosphor-icons/react/dist/ssr";
import AthenaKnowledgeMockup from "@/components/landing-page/AthenaKnowledgeMockup";
import {
  AthenaHeroParallax,
  AthenaHeroScrollIndicator,
  AthenaHeroEntrance,
  AthenaHeroImageEntrance,
} from "./AthenaHeroClient";

export function AthenaHero() {
  return (
    <section className="relative pt-28 sm:pt-32 pb-0 overflow-visible bg-background border-b border-border/10">
      {/* Background Ambience - client-side parallax */}
      <AthenaHeroParallax />

      <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-8 relative z-10 pt-32 md:pt-48">
        <div className="flex flex-col items-center text-center space-y-16">
          <div className="space-y-8 max-w-4xl mx-auto">
            {/* Label */}
            <AthenaHeroEntrance>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm">
                <Sparkle className="w-3 h-3 text-primary" />
                <span className="text-[10px] font-mono text-primary tracking-[0.2em] uppercase">
                  Enterprise Knowledge Assistant
                </span>
              </div>
            </AthenaHeroEntrance>

            {/* Main Title - server-rendered for SEO */}
            <AthenaHeroEntrance delay={0.1}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-wide text-foreground">
                INTELLIGENCE THAT <br className="hidden md:block" />
                <span className="text-muted-foreground">UNDERSTANDS.</span>
              </h1>
            </AthenaHeroEntrance>

            {/* Description - server-rendered for SEO */}
            <AthenaHeroEntrance delay={0.2}>
              <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
                Turn your company documents into a smart assistant that anyone
                can talk to. Find information in seconds, not hours.
              </p>
            </AthenaHeroEntrance>
          </div>

          {/* Interaction Mock - Overlapping Section Below */}
          <AthenaHeroImageEntrance>
            <div
              className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-border/50 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] bg-background/50 backdrop-blur-sm"
              style={{ perspective: "1000px", transform: "rotateX(2deg)" }}
            >
              <AthenaKnowledgeMockup />
            </div>

            {/* Decorative reflection */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-primary/20 blur-xl md:blur-3xl" />
          </AthenaHeroImageEntrance>
        </div>
      </div>

      {/* Scroll Indicator - client-side scroll-linked opacity */}
      <AthenaHeroScrollIndicator />
    </section>
  );
}
