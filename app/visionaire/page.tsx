"use client";

import { AiVideoPlayer } from "@/components/visionaire/AiVideoPlayer";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { VisionaireHero } from "@/components/visionaire/VisionaireHero";
import { cn } from "@/lib/utils";
import {
  ActivityIcon as Activity,
  ArrowsOutIcon as ArrowsOut,
  CarIcon as Car,
  CheckCircleIcon as CheckCircle,
  CrosshairIcon as Crosshair,
  FingerprintIcon as Fingerprint,
  GraphIcon as Graph,
  LightningIcon as Lightning,
  MagnifyingGlassIcon as MagnifyingGlass,
  ScanIcon as Scan,
  ShieldWarningIcon as ShieldWarning,
  TrendUpIcon as TrendUp,
  UsersIcon as Users,
} from "@phosphor-icons/react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

// --- Data ---
const analyticModels = [
  {
    id: "FR-01",
    title: "Face Recognition",
    description:
      "Know exactly who enters your premises. Our AI identifies faces in real-time, even in crowds, poor lighting, or from different angles.",
    icon: Scan,
    video:
      "https://drive.google.com/file/d/1HKvK-kcS2vz6guQSQfDZfnwg8HDAy8D8/preview",
    thumbnail: "/products-page/face-recognition.webp",
    features: [
      "Track multiple faces at once",
      "Recognize faces in any lighting",
      "Estimate age, gender and more attributes",
    ],
    useCases: [
      {
        title: "Keyless Entry",
        desc: "Let employees and residents enter with just their face. No more lost cards or forgotten PINs.",
        icon: Fingerprint,
      },
      {
        title: "Watchlist Alerts",
        desc: "Get instant notifications when a known person appears on camera. Perfect for security teams.",
        icon: ShieldWarning,
      },
      {
        title: "VIP Recognition",
        desc: "Know when important guests arrive so your team can provide personalized service immediately.",
        icon: MagnifyingGlass,
      },
    ],
  },
  {
    id: "PA-02",
    title: "People Analytics",
    description:
      "See how many people are in any area, where they go, and how long they stay. Make better decisions with real visitor data.",
    icon: Users,
    video:
      "https://drive.google.com/file/d/1HKvK-kcS2vz6guQSQfDZfnwg8HDAy8D8/preview",
    thumbnail: "/products-page/people-analytics.webp",
    features: ["Visual heatmaps", "Queue monitoring", "Crowd alerts"],
    useCases: [
      {
        title: "Store Analytics",
        desc: "Find out which areas get the most foot traffic. Optimize product placement and staff schedules.",
        icon: Activity,
      },
      {
        title: "Capacity Management",
        desc: "Know when areas are getting too crowded. Keep people safe and comfortable.",
        icon: Graph,
      },
      {
        title: "Wait Time Display",
        desc: "Show customers how long the queue is. Reduce complaints and improve satisfaction.",
        icon: TrendUp,
      },
    ],
  },
  {
    id: "LPR-03",
    title: "License Plate Recognition",
    description:
      "Automatically read and record every license plate that passes your cameras. Works day or night, rain or shine.",
    icon: Car,
    video:
      "https://drive.google.com/file/d/1HKvK-kcS2vz6guQSQfDZfnwg8HDAy8D8/preview",
    thumbnail: "/products-page/lpr.webp",
    features: [
      "Read plates instantly",
      "Identify vehicle type",
      "Works in all conditions",
    ],
    useCases: [
      {
        title: "Ticketless Parking",
        desc: "Cars enter and exit without tickets or cards. Billing happens automatically based on plate numbers.",
        icon: Lightning,
      },
      {
        title: "Gate Automation",
        desc: "Open gates automatically for authorized vehicles. Block unknown plates until verified.",
        icon: ShieldWarning,
      },
      {
        title: "Fleet Visibility",
        desc: "Track when your vehicles arrive and depart. Know exactly where your fleet is at all times.",
        icon: ArrowsOut,
      },
    ],
  },
  {
    id: "VA-04",
    title: "Vehicle Analytics",
    description:
      "Detect and classify every vehicle on camera. Know the make, model, color, and even estimate speed.",
    icon: Crosshair,
    video:
      "https://drive.google.com/file/d/1HKvK-kcS2vz6guQSQfDZfnwg8HDAy8D8/preview",
    thumbnail: "/products-page/vehicle-analytics.webp",
    features: [
      "Identify car brands",
      "Measure speed",
      "Detect illegal parking",
    ],
    useCases: [
      {
        title: "Traffic Insights",
        desc: "Understand traffic patterns at your location. Plan better road layouts and parking spaces.",
        icon: Activity,
      },
      {
        title: "No-Go Zone Alerts",
        desc: "Get alerts when vehicles enter restricted areas like pedestrian zones or loading docks.",
        icon: ShieldWarning,
      },
      {
        title: "Violation Detection",
        desc: "Catch wrong-way drivers, illegal U-turns, and other dangerous maneuvers automatically.",
        icon: Graph,
      },
    ],
  },
];

export default function Analytics() {
  const [activeTab, setActiveTab] = useState(analyticModels[0].id);
  const activeModel =
    analyticModels.find((m) => m.id === activeTab) || analyticModels[0];

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
          {/* Header */}
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

          <div className="flex flex-col gap-6 md:gap-12">
            {/* Mobile: Select dropdown */}
            <div className="md:hidden">
              <Select value={activeTab} onValueChange={setActiveTab}>
                <SelectTrigger className="w-full h-12 px-4 rounded-xl bg-background border-border/60 text-sm font-medium">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="rounded-xl">
                  {analyticModels.map((model) => (
                    <SelectItem key={model.id} value={model.id} className="rounded-lg">
                      {model.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Desktop: Tab buttons */}
            <div className="hidden md:flex items-center justify-center">
              <div className="flex items-center gap-4 bg-muted/20 p-2 rounded-2xl border border-border/40">
                {analyticModels.map((model) => (
                  <button
                    key={model.id}
                    onClick={() => setActiveTab(model.id)}
                    className={cn(
                      "relative px-8 py-3 rounded-xl transition-all duration-300 text-sm font-medium uppercase tracking-wider whitespace-nowrap",
                      activeTab === model.id
                        ? "text-primary shadow-sm"
                        : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {activeTab === model.id && (
                      <motion.div
                        layoutId="tabBackground"
                        className="absolute inset-0 bg-background border border-border shadow-md rounded-xl"
                      />
                    )}
                    <span className="relative z-10">{model.title}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Content Body: Feature-First Grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeModel.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-start"
              >
                {/* Left: Info & Use Cases */}
                <div className="space-y-6 md:space-y-12 order-2 lg:order-1">
                  <div className="space-y-4 md:space-y-6">
                    <span className="inline-flex items-center gap-2 px-2 py-0.5 md:px-3 md:py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] md:text-xs text-primary font-mono tracking-widest uppercase">
                      {activeModel.id}
                    </span>
                    <h3 className="text-2xl md:text-4xl font-medium tracking-tight">
                      {activeModel.title}
                    </h3>
                    <p className="text-muted-foreground text-sm md:text-lg font-light leading-relaxed">
                      {activeModel.description}
                    </p>

                    <div className="flex flex-wrap gap-2 md:gap-4 pt-1 md:pt-2">
                      {activeModel.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm text-foreground/80"
                        >
                          <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-primary" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Use Cases Cards */}
                  <div className="space-y-4 md:space-y-6">
                    <h4 className="text-xs md:text-sm font-mono text-muted-foreground uppercase tracking-[0.2em] border-b border-border pb-2 md:pb-4">
                      Perfect For
                    </h4>
                    <div className="grid grid-cols-1 gap-2 md:gap-4">
                      {activeModel.useCases.map((useCase, idx) => (
                        <div
                          key={idx}
                          className="group p-3 md:p-6 rounded-xl md:rounded-2xl border border-border/60 bg-muted/5 hover:bg-muted/10 transition-colors flex gap-3 md:gap-6 items-start"
                        >
                          <div className="w-9 h-9 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-background border border-border/40 flex items-center justify-center text-primary shrink-0 transition-transform group-hover:scale-110">
                            <useCase.icon className="w-4 h-4 md:w-6 md:h-6" />
                          </div>
                          <div>
                            <h5 className="text-sm md:text-base font-medium mb-0.5 md:mb-1">
                              {useCase.title}
                            </h5>
                            <p className="text-xs md:text-sm text-muted-foreground font-light leading-relaxed">
                              {useCase.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Visual Proof (Video) */}
                <div className="lg:sticky lg:top-24 order-1 lg:order-2">
                  <div className="relative aspect-video rounded-xl md:rounded-3xl overflow-hidden border border-border/60 bg-black shadow-2xl">
                    <AiVideoPlayer
                      src={activeModel.video}
                      thumbnail={activeModel.thumbnail}
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 4th Section: Beyond the Core & Custom Services */}
      <section className="py-12 md:py-32 bg-muted/30 relative border-t border-border/40 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20">
            {/* Left: More Ready-to-Use Analytics */}
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
                {[
                  { name: "Crowd Estimation", icon: Users },
                  { name: "PPE Detection", icon: ShieldWarning },
                  { name: "Fire & Smoke Detection", icon: Lightning },
                  { name: "Smoking Detection", icon: Crosshair },
                  { name: "Fighting Detection", icon: Activity },
                  { name: "Road Crash Monitoring", icon: Car },
                ].map((item, i) => (
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

            {/* Right: Custom Model Development */}
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
                    detect, and we&apos;ll build custom AI trained specifically
                    for your use case.
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
                    <span>Ongoing improvements as we learn from your data</span>
                  </div>
                </div>

                <div className="pt-2 md:pt-4">
                  <button className="w-full md:w-auto px-6 md:px-10 py-3 md:py-5 bg-primary text-primary-foreground rounded-xl md:rounded-2xl text-sm font-semibold hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3 active:scale-[0.98]">
                    Talk to Our Team <TrendUp className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
