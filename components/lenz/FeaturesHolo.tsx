import { TrackingLink } from "@/components/tracking/TrackingLink";
import {
  ActivityIcon as Activity,
  Bell,
  CheckCircle,
  Cpu,
  Graph,
  HardDrive,
  MapTrifold,
  MonitorPlay,
  Shield,
  TrendUp,
  Users,
} from "@phosphor-icons/react/dist/ssr";
import { InViewFade } from "./DashboardShowcaseClient";

const coreFeatures = [
  {
    name: "Live Streaming",
    icon: MonitorPlay,
    desc: "Manage live camera feeds",
  },
  { name: "Smart Alerts", icon: Bell, desc: "AI-triggered notifications" },
  { name: "Multi-User Access", icon: Users, desc: "Role-based permissions" },
  { name: "Site Mapping", icon: MapTrifold, desc: "Visual camera placement" },
  { name: "Tracking", icon: HardDrive, desc: "Monitor person or vehicle" },
  { name: "Auto Retention", icon: Graph, desc: "Automated data management" },
  { name: "Edge Processing", icon: Cpu, desc: "On-device AI analysis" },
  { name: "Health Monitoring", icon: Activity, desc: "Camera status tracking" },
];

export function FeaturesHolo() {
  return (
    <section className="py-12 md:py-32 bg-muted/30 relative border-t border-border/40 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20">
          {/* Left: Core Platform Features */}
          <div className="space-y-6 md:space-y-12">
            <InViewFade className="space-y-3 md:space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-primary rounded-full" />
                <span className="text-[10px] font-mono text-primary uppercase tracking-widest">
                  Platform Features
                </span>
              </div>
              <h3 className="text-2xl md:text-4xl font-medium tracking-tight">
                BUILT FOR{" "}
                <span className="text-muted-foreground uppercase tracking-tight">
                  SCALE.
                </span>
              </h3>
              <p className="text-sm md:text-base text-muted-foreground font-light leading-relaxed max-w-lg">
                Lenz is designed to handle enterprise deployments. From a
                handful of cameras to thousands across multiple sites.
              </p>
            </InViewFade>

            <div className="grid grid-cols-2 gap-2 md:gap-4">
              {coreFeatures.map((item, i) => (
                <InViewFade key={i} delay={0.1 + i * 0.05}>
                  <div className="flex items-center gap-2 md:gap-4 p-2.5 md:p-4 rounded-xl md:rounded-2xl bg-background border border-border/60 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all group cursor-default">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-muted/50 flex items-center justify-center text-muted-foreground group-hover:text-primary group-hover:bg-primary/5 transition-colors shrink-0">
                      <item.icon className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-xs md:text-sm font-medium text-foreground/80 block truncate">
                        {item.name}
                      </span>
                      <span className="text-[9px] md:text-[10px] font-mono text-muted-foreground uppercase tracking-wider hidden md:block">
                        {item.desc}
                      </span>
                    </div>
                  </div>
                </InViewFade>
              ))}
            </div>
          </div>

          {/* Right: Enterprise CTA */}
          <InViewFade delay={0.3} className="relative group">
            <div className="absolute inset-0 bg-primary/5 rounded-2xl md:rounded-[2rem] blur-3xl group-hover:bg-primary/10 transition-colors" />
            <div className="relative p-5 md:p-12 rounded-2xl md:rounded-[2rem] border border-primary/20 bg-background/60 backdrop-blur-md space-y-4 md:space-y-8 flex flex-col justify-center h-full shadow-2xl">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-[0_0_20px_rgba(var(--primary),0.2)]">
                <Shield className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <div className="space-y-2 md:space-y-4">
                <h3 className="text-xl md:text-4xl font-medium tracking-tight">
                  ENTERPRISE{" "}
                  <span className="text-primary uppercase tracking-tight">
                    READY.
                  </span>
                </h3>
                <p className="text-sm md:text-base text-muted-foreground font-light leading-relaxed">
                  Need custom deployment? On-premise installation? Integration
                  with your existing systems? We&apos;ve got you covered.
                </p>
              </div>

              <div className="space-y-2 md:space-y-4 pt-2 md:pt-4">
                <div className="flex items-center gap-3 md:gap-4 text-xs md:text-sm text-foreground/80">
                  <CheckCircle className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary shrink-0" />
                  <span>On-premise or hybrid cloud deployment</span>
                </div>
                <div className="flex items-center gap-3 md:gap-4 text-xs md:text-sm text-foreground/80">
                  <CheckCircle className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary shrink-0" />
                  <span>Active dedicated support team</span>
                </div>
              </div>

              <div className="pt-2 md:pt-4">
                <TrackingLink href="/contact-us" page="lenz" ctaText="Talk to Our Team" className="w-full md:w-auto px-6 md:px-10 py-3 md:py-5 bg-primary text-primary-foreground rounded-xl md:rounded-2xl text-sm font-semibold hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3 active:scale-[0.98]">
                  Talk to Our Team <TrendUp className="w-4 h-4" />
                </TrackingLink>
              </div>
            </div>
          </InViewFade>
        </div>
      </div>
    </section>
  );
}
