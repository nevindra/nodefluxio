import {
  GridFour,
  ClockCounterClockwise,
  Shield,
  CheckCircle,
  Graph,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { FadeInView } from "@/components/solutions/MotionDiv";
import {
  SlideInView,
  ScaleInView,
  SlideInFeature,
} from "./DashboardShowcaseClient";
import { ScreenMockup } from "@/components/ui/screen-mockup";

type ShowcaseItem = {
  id: string;
  badge: string;
  title: string;
  headline: string;
  description: string;
  features: string[];
  image: string;
  video?: string;
  icon: Icon;
  accent: "cyan" | "violet" | "amber" | "emerald";
};

const showcaseItems: ShowcaseItem[] = [
  {
    id: "unified-view",
    badge: "STREAM-01",
    title: "Unified Stream View",
    headline: "See everything at once",
    description:
      "Monitor all your camera feeds in a single, organized dashboard. The home screen provides a centralized view of your entire surveillance network with real-time streaming and instant camera access.",
    features: [
      "Custom grid layouts (1x1 to 8x8)",
      "Drag-and-drop camera arrangement",
      "Full-screen single camera mode",
    ],
    image: "/dashboard/Home.webp",
    video: "https://pub-a8dc42a652814c1f82b6763e8cbfb0ba.r2.dev/videos/Stream%20View.mp4",
    icon: GridFour,
    accent: "cyan",
  },
  {
    id: "event-history",
    badge: "SMART-02",
    title: "Event History",
    headline: "Track every detection",
    description:
      "Browse through comprehensive event logs with detailed detection records. Each event is captured with timestamps, thumbnails, and AI classifications for quick identification and review.",
    features: [
      "Chronological event timeline",
      "Thumbnail preview for quick scan",
      "Detailed detection metadata",
    ],
    image: "/dashboard/Event_History.webp",
    video: "https://pub-a8dc42a652814c1f82b6763e8cbfb0ba.r2.dev/videos/Event%20Timeline.mp4",
    icon: ClockCounterClockwise,
    accent: "violet",
  },
  {
    id: "statistics",
    badge: "ANALYTICS-03",
    title: "Analytics Dashboard",
    headline: "Insights at a glance",
    description:
      "Visualize comprehensive statistics across all analytics modules in real-time. Track detection patterns, analyze trends from face recognition to vehicle monitoring, and generate actionable reports.",
    features: [
      "Unified analytics across all modules",
      "Real-time detection statistics",
      "Export reports with one click",
    ],
    image: "/dashboard/Statistic_FRA.webp",
    video: "https://pub-a8dc42a652814c1f82b6763e8cbfb0ba.r2.dev/videos/Statistics.mp4",
    icon: Graph,
    accent: "amber",
  },
  {
    id: "alert-management",
    badge: "ALERT-04",
    title: "Alert Management",
    headline: "Stay informed, stay secure",
    description:
      "Manage and review all security alerts from a centralized dashboard. Track alert history, acknowledge notifications, and integrate with third-party services for seamless alert delivery.",
    features: [
      "Centralized alert dashboard",
      "Third-party integration (Telegram, Email, Webhook)",
      "Complete alert audit trail",
    ],
    image: "/dashboard/Alert Management - Alert History.webp",
    icon: Shield,
    accent: "emerald",
  },
];

const accentColors = {
  cyan: {
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    text: "text-cyan-500",
    glow: "bg-cyan-500/20",
  },
  violet: {
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    text: "text-violet-500",
    glow: "bg-violet-500/20",
  },
  amber: {
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    text: "text-amber-500",
    glow: "bg-amber-500/20",
  },
  emerald: {
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    text: "text-emerald-500",
    glow: "bg-emerald-500/20",
  },
};

export function DashboardShowcase() {
  return (
    <section className="relative z-10 pt-16 sm:pt-20 md:pt-24 lg:pt-32 pb-24 md:pb-40 bg-muted/20">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-24 space-y-4">
          <FadeInView>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight">
              WHAT CAN <br />
              <span className="text-muted-foreground uppercase">Lenz Do?</span>
            </h2>
          </FadeInView>
          <FadeInView delay={0.1}>
            <p className="text-muted-foreground text-lg font-light leading-relaxed">
              From live monitoring to intelligent analysis, Lenz transforms how
              you manage video surveillance.
            </p>
          </FadeInView>
        </div>

        {/* Showcase Items */}
        <div className="space-y-32 md:space-y-48">
          {showcaseItems.map((item, index) => (
            <ShowcaseItem
              key={item.id}
              item={item}
              index={index}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ShowcaseItem({
  item,
  index,
  reverse,
}: {
  item: ShowcaseItem;
  index: number;
  reverse: boolean;
}) {
  const IconComponent = item.icon;
  const colors = accentColors[item.accent as keyof typeof accentColors];

  return (
    <div
      className={cn(
        "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center",
        reverse && "lg:grid-flow-dense",
      )}
    >
      {/* Text Content */}
      <SlideInView
        direction={reverse ? "right" : "left"}
        className={cn("space-y-8", reverse && "lg:col-start-2")}
      >
        {/* Badge */}
        <div className="flex items-center gap-4">
          <span
            className={cn(
              "inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-mono tracking-widest uppercase",
              colors.bg,
              colors.border,
              colors.text,
            )}
          >
            {item.badge}
          </span>
        </div>

        {/* Title & Description */}
        <div className="space-y-4">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight">
            {item.headline}
          </h3>
          <p className="text-muted-foreground text-lg font-light leading-relaxed max-w-lg">
            {item.description}
          </p>
        </div>

        {/* Features List */}
        <div className="space-y-4 pt-4">
          {item.features.map((feature, i) => (
            <SlideInFeature key={i} delay={0.3 + i * 0.1}>
              <div className="flex items-center gap-3 text-foreground/80">
                <CheckCircle className={cn("w-5 h-5 shrink-0", colors.text)} />
                <span className="text-sm md:text-base">{feature}</span>
              </div>
            </SlideInFeature>
          ))}
        </div>

        {/* Icon Badge */}
        <ScaleInView delay={0.5}>
          <div
            className={cn(
              "inline-flex items-center gap-3 px-4 py-3 rounded-xl border bg-background/50 backdrop-blur-sm",
              colors.border,
            )}
          >
            <div className={cn("p-2 rounded-lg", colors.bg)}>
              <IconComponent className={cn("w-5 h-5", colors.text)} />
            </div>
            <span className="text-sm font-medium text-foreground/80">
              {item.title}
            </span>
          </div>
        </ScaleInView>
      </SlideInView>

      {/* Image */}
      <SlideInView
        direction={reverse ? "left" : "right"}
        delay={0.2}
        className={cn(
          "relative group",
          reverse && "lg:col-start-1 lg:row-start-1",
        )}
      >
        {/* Glow Effect */}
        <div
          className={cn(
            "absolute -inset-4 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700",
            colors.glow,
          )}
        />

        {/* Screen Mockup */}
        <ScreenMockup
          videoSrc={item.video}
          imageSrc={item.image}
          alt={item.title}
        />

        {/* Decorative Elements */}
        <div
          className={cn(
            "absolute -bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-px blur-sm",
            colors.glow,
          )}
        />
      </SlideInView>
    </div>
  );
}
