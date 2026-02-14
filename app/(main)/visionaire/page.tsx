import Link from "next/link";
import { TrackingLink } from "@/components/tracking/TrackingLink";
import { VisionaireHero } from "@/components/visionaire/VisionaireHero";
import { CapabilitiesShowcase } from "@/components/visionaire/CapabilitiesShowcase";
import { FadeInView } from "@/components/solutions/MotionDiv";
import {
  ActivityIcon as Activity,
  CarIcon as Car,
  CrosshairIcon as Crosshair,
  LightningIcon as Lightning,
  ShieldWarningIcon as ShieldWarning,
  TrendUpIcon as TrendUp,
  UsersIcon as Users,
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";
export const revalidate = false;

const additionalDetections = [
  { name: "Crowd Estimation", icon: Users },
  { name: "PPE Detection", icon: ShieldWarning },
  { name: "Fire & Smoke Detection", icon: Lightning },
  { name: "Smoking Detection", icon: Crosshair },
  { name: "Fighting Detection", icon: Activity },
  { name: "Road Crash Monitoring", icon: Car },
];

export default function Analytics() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* 1st Section: Hero with Product Integration */}
      <VisionaireHero />

      {/* 2nd Section: Capabilities Showcase */}
      <section
        id="capabilities"
        className="pt-24 sm:pt-32 md:pt-48 lg:pt-56 pb-16 md:pb-40 bg-muted/20 relative overflow-hidden text-foreground"
      >
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          {/* Header - server-rendered for SEO */}
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-24 space-y-3 md:space-y-4">
            <h2 className="text-3xl md:text-6xl font-medium tracking-tight">
              WHAT CAN{" "}
              <span className="text-muted-foreground uppercase">
                It Detect?
              </span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg font-light leading-relaxed">
              From faces to license plates, our AI recognizes what matters most
              to your business.
            </p>
          </div>

          {/* SEO: All capabilities as hidden semantic content for crawlers */}
          <div className="sr-only">
            <h3>Face Recognition</h3>
            <p>Know exactly who enters your premises. Our AI identifies faces in real-time, even in crowds, poor lighting, or from different angles. Track multiple faces at once. Recognize faces in any lighting. Estimate age, gender and more attributes.</p>
            <h3>People Analytics</h3>
            <p>See how many people are in any area, where they go, and how long they stay. Make better decisions with real visitor data. Visual heatmaps. Queue monitoring. Crowd alerts.</p>
            <h3>License Plate Recognition</h3>
            <p>Automatically read and record every license plate that passes your cameras. Works day or night, rain or shine. Read plates instantly. Identify vehicle type. Works in all conditions.</p>
            <h3>Vehicle Analytics</h3>
            <p>Detect and classify every vehicle on camera. Know the make, model, color, and even estimate speed. Identify car brands. Measure speed. Detect illegal parking.</p>
          </div>

          {/* Interactive tabs - client component */}
          <CapabilitiesShowcase />
        </div>
      </section>

      {/* 3rd Section: Beyond the Core & Custom Services - server-rendered */}
      <section className="py-12 md:py-32 bg-muted/30 relative border-t border-border/40 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20">
            {/* Left: More Ready-to-Use Analytics */}
            <FadeInView>
              <div className="space-y-6 md:space-y-12">
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-primary rounded-full" />
                    <span className="text-[10px] font-mono text-primary uppercase tracking-widest">
                      More Detections
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-4xl font-medium tracking-tight">
                    AND THERE&apos;S{" "}
                    <span className="text-muted-foreground uppercase tracking-tight">
                      MORE.
                    </span>
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground font-light leading-relaxed max-w-lg">
                    Beyond faces and vehicles, our AI can detect many other
                    situations that matter to your safety and operations.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 md:gap-4">
                  {additionalDetections.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 md:gap-4 p-2.5 md:p-4 rounded-xl md:rounded-2xl bg-background border border-border/60 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all group cursor-default"
                    >
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-muted/50 flex items-center justify-center text-muted-foreground group-hover:text-primary group-hover:bg-primary/5 transition-colors shrink-0">
                        <item.icon className="w-4 h-4 md:w-5 md:h-5" />
                      </div>
                      <span className="text-xs md:text-sm font-medium text-foreground/80">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInView>

            {/* Right: Custom Model Development */}
            <FadeInView delay={0.2}>
              <div className="relative group">
                <div className="absolute inset-0 bg-primary/5 rounded-2xl md:rounded-[2rem] blur-3xl group-hover:bg-primary/10 transition-colors" />
                <div className="relative p-5 md:p-12 rounded-2xl md:rounded-[2rem] border border-primary/20 bg-background/60 backdrop-blur-md space-y-4 md:space-y-8 flex flex-col justify-center h-full shadow-2xl">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-[0_0_20px_rgba(var(--primary),0.2)]">
                    <Lightning className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                  <div className="space-y-2 md:space-y-4">
                    <h3 className="text-xl md:text-4xl font-medium tracking-tight">
                      NEED SOMETHING{" "}
                      <span className="text-primary uppercase tracking-tight">
                        SPECIFIC?
                      </span>
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground font-light leading-relaxed">
                      Can&apos;t find what you need? Tell us what you want to
                      detect, and we&apos;ll build custom AI trained
                      specifically for your use case.
                    </p>
                  </div>

                  <div className="space-y-2 md:space-y-4 pt-2 md:pt-4">
                    <div className="flex items-center gap-3 md:gap-4 text-xs md:text-sm text-foreground/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      <span>
                        We collect and label training data from your actual
                        cameras
                      </span>
                    </div>
                    <div className="flex items-center gap-3 md:gap-4 text-xs md:text-sm text-foreground/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      <span>
                        AI optimized for your specific environment and lighting
                      </span>
                    </div>
                    <div className="flex items-center gap-3 md:gap-4 text-xs md:text-sm text-foreground/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      <span>
                        Ongoing improvements as we learn from your data
                      </span>
                    </div>
                  </div>

                  <div className="pt-2 md:pt-4">
                    <TrackingLink href="/contact-us" page="visionaire" ctaText="Talk to Our Team" className="w-full md:w-auto px-6 md:px-10 py-3 md:py-5 bg-primary text-primary-foreground rounded-xl md:rounded-2xl text-sm font-semibold hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3 active:scale-[0.98]">
                      Talk to Our Team <TrendUp className="w-4 h-4" />
                    </TrackingLink>
                  </div>
                </div>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>
    </main>
  );
}
