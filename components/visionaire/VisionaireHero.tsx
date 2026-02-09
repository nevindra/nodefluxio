import { Cpu } from "@phosphor-icons/react/dist/ssr";
import {
  VisionaireHeroParallax,
  VisionaireHeroScrollIndicator,
  HeroEntrance,
  HeroImageEntrance,
  ProductIntegrationEmbed,
} from "./VisionaireHeroClient";

export function VisionaireHero() {
  return (
    <section className="relative pt-28 sm:pt-32 pb-0 overflow-visible bg-background border-b border-border/10">
      {/* Background Ambience - client-side parallax */}
      <VisionaireHeroParallax />

      <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-8 relative z-10 pt-24 md:pt-32 lg:pt-40">
        <div className="flex flex-col items-center text-center space-y-12 md:space-y-16">
          <div className="space-y-6 md:space-y-8 max-w-4xl mx-auto">
            {/* Label */}
            <HeroEntrance>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm">
                <Cpu className="w-3 h-3 text-primary" />
                <span className="text-[10px] font-mono text-primary tracking-[0.2em] uppercase">
                  Works with any camera
                </span>
              </div>
            </HeroEntrance>

            {/* Main Title - server-rendered for SEO */}
            <HeroEntrance delay={0.1}>
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-medium tracking-wide text-foreground">
                YOUR CAMERAS, <br className="hidden sm:block" />
                <span className="text-muted-foreground">NOW INTELLIGENT.</span>
              </h1>
            </HeroEntrance>

            {/* Description - server-rendered for SEO */}
            <HeroEntrance delay={0.2}>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed px-2">
                Turn your existing cameras into a smart detection system. Know
                who enters, count visitors, read plates - all automatically.
              </p>
            </HeroEntrance>
          </div>

          {/* Product Integration - Overlapping Section Below */}
          <HeroImageEntrance>
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-border/50 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] bg-background/80 backdrop-blur-sm">
              <ProductIntegrationEmbed />
            </div>

            {/* Decorative reflection */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-primary/20 blur-xl md:blur-3xl" />
          </HeroImageEntrance>
        </div>
      </div>

      {/* Scroll Indicator - client-side scroll-linked opacity */}
      <VisionaireHeroScrollIndicator />
    </section>
  );
}

export default VisionaireHero;
