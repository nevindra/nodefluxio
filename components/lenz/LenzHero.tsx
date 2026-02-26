import { MonitorPlay } from "@phosphor-icons/react/dist/ssr";
import {
  LenzHeroParallax,
  LenzHeroScrollIndicator,
  LenzHeroEntrance,
  LenzHeroImageEntrance,
} from "./LenzHeroClient";
import { LenzHeroVideos } from "./LenzHeroVideos";

export function LenzHero() {
  return (
    <section className="relative pt-28 sm:pt-32 pb-0 overflow-visible bg-background border-b border-border/10">
      {/* Background Ambience - client-side parallax */}
      <LenzHeroParallax />

      <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-8 relative z-10 pt-8 md:pt-12 lg:pt-16">
        <div className="flex flex-col items-center text-center space-y-12 md:space-y-16">
          <div className="space-y-6 md:space-y-8 max-w-4xl mx-auto">
            {/* Label */}
            <LenzHeroEntrance>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm">
                <MonitorPlay className="w-3 h-3 text-primary" />
                <span className="text-[10px] font-mono text-primary tracking-[0.2em] uppercase">
                  Video Management System
                </span>
              </div>
            </LenzHeroEntrance>

            {/* Main Title - server-rendered for SEO */}
            <LenzHeroEntrance delay={0.1}>
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-medium tracking-wide text-foreground">
                ALL CAMERAS, <br className="hidden sm:block" />
                <span className="text-muted-foreground">ONE DASHBOARD.</span>
              </h1>
            </LenzHeroEntrance>

            {/* Description - server-rendered for SEO */}
            <LenzHeroEntrance delay={0.2}>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed px-2">
                Monitor, analyze, and manage thousands of camera streams from
                one powerful, unified command center.
              </p>
            </LenzHeroEntrance>
          </div>

          {/* Hero Videos - Fanned Layout */}
          <LenzHeroImageEntrance>
            <LenzHeroVideos />
          </LenzHeroImageEntrance>
        </div>
      </div>

      {/* Scroll Indicator - client-side scroll-linked opacity */}
      <LenzHeroScrollIndicator />
    </section>
  );
}
