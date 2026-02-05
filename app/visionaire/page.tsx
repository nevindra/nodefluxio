"use client";

import { AiVideoPlayer } from "@/components/visionaire/AiVideoPlayer";
import { VisionaireHero } from "@/components/visionaire/VisionaireHero";
import { cn } from "@/lib/utils";
import {
  ActivityIcon as Activity,
  ArrowsOut,
  Car,
  CheckCircle,
  Crosshair,
  Fingerprint,
  Graph,
  Lightning,
  MagnifyingGlass,
  Scan,
  ShieldWarning,
  TrendUp,
  Users,
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
    thumbnail:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1920&auto=format&fit=crop",
    features: [
      "Track multiple faces at once",
      "Detect fake photos & masks",
      "Estimate age & gender",
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
    title: "People Counting",
    description:
      "See how many people are in any area, where they go, and how long they stay. Make better decisions with real visitor data.",
    icon: Users,
    video:
      "https://drive.google.com/file/d/1HKvK-kcS2vz6guQSQfDZfnwg8HDAy8D8/preview",
    thumbnail:
      "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=1920&auto=format&fit=crop",
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
    title: "License Plate Reader",
    description:
      "Automatically read and record every license plate that passes your cameras. Works day or night, rain or shine.",
    icon: Car,
    video:
      "https://drive.google.com/file/d/1HKvK-kcS2vz6guQSQfDZfnwg8HDAy8D8/preview",
    thumbnail:
      "https://images.unsplash.com/photo-1542281286-9e0a16bb0a20?q=80&w=1920&auto=format&fit=crop",
    features: [
      "Read plates instantly",
      "Detect vehicle color",
      "Identify vehicle type",
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
    title: "Vehicle Detection",
    description:
      "Detect and classify every vehicle on camera. Know the make, model, color, and even estimate speed.",
    icon: Crosshair,
    video:
      "https://drive.google.com/file/d/1HKvK-kcS2vz6guQSQfDZfnwg8HDAy8D8/preview",
    thumbnail:
      "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=1920&auto=format&fit=crop",
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
        className="pt-32 sm:pt-40 md:pt-48 lg:pt-56 pb-24 md:pb-40 bg-muted/20 relative overflow-hidden text-foreground"
      >
        <div className="max-w-[1280px] mx-auto px-6">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-24 space-y-4">
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight">
              WHAT CAN <br />
              <span className="text-muted-foreground uppercase">
                It Detect?
              </span>
            </h2>
            <p className="text-muted-foreground text-lg font-light leading-relaxed">
              From faces to license plates, our AI recognizes what matters most
              to your business.
            </p>
          </div>

          <div className="flex flex-col gap-12">
            {/* Top Navigation: Large Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-4 bg-muted/20 p-2 rounded-2xl border border-border/40 w-fit mx-auto">
              {analyticModels.map((model) => (
                <button
                  key={model.id}
                  onClick={() => setActiveTab(model.id)}
                  className={cn(
                    "relative px-8 py-3 rounded-xl transition-all duration-300 text-sm font-medium uppercase tracking-wider",
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

            {/* Content Body: Feature-First Grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeModel.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
              >
                {/* Left: Info & Use Cases */}
                <div className="space-y-12">
                  <div className="space-y-6">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs text-primary font-mono tracking-widest uppercase">
                      {activeModel.id}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-medium tracking-tight">
                      {activeModel.title}
                    </h3>
                    <p className="text-muted-foreground text-lg font-light leading-relaxed">
                      {activeModel.description}
                    </p>

                    <div className="flex flex-wrap gap-4 pt-2">
                      {activeModel.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-sm text-foreground/80"
                        >
                          <CheckCircle className="w-4 h-4 text-primary" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Use Cases Cards */}
                  <div className="space-y-6">
                    <h4 className="text-sm font-mono text-muted-foreground uppercase tracking-[0.2em] border-b border-border pb-4">
                      Perfect For
                    </h4>
                    <div className="grid grid-cols-1 gap-4">
                      {activeModel.useCases.map((useCase, idx) => (
                        <div
                          key={idx}
                          className="group p-6 rounded-2xl border border-border/60 bg-muted/5 hover:bg-muted/10 transition-colors flex gap-6 items-start"
                        >
                          <div className="w-12 h-12 rounded-xl bg-background border border-border/40 flex items-center justify-center text-primary shrink-0 transition-transform group-hover:scale-110">
                            <useCase.icon className="w-6 h-6" />
                          </div>
                          <div>
                            <h5 className="text-base font-medium mb-1">
                              {useCase.title}
                            </h5>
                            <p className="text-sm text-muted-foreground font-light leading-relaxed">
                              {useCase.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Visual Proof (Video) */}
                <div className="lg:sticky lg:top-24">
                  <div className="space-y-6">
                    <div className="relative aspect-video rounded-3xl overflow-hidden border border-border/60 bg-black shadow-2xl">
                      <AiVideoPlayer
                        src={activeModel.video}
                        thumbnail={activeModel.thumbnail}
                        className="w-full h-full"
                      />
                    </div>
                    <div className="p-6 rounded-2xl bg-muted/20 border border-border/40">
                      <p className="text-xs font-mono text-muted-foreground/60 leading-relaxed italic">
                        *See {activeModel.title} in action. This is actual
                        footage from a standard security camera.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 4th Section: Beyond the Core & Custom Services */}
      <section className="py-24 md:py-32 bg-muted/30 relative border-t border-border/40 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Left: More Ready-to-Use Analytics */}
            <div className="space-y-12">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-primary rounded-full" />
                  <span className="text-[10px] font-mono text-primary uppercase tracking-widest">
                    More Detections
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-medium tracking-tight">
                  AND THERE&apos;S <br />
                  <span className="text-muted-foreground uppercase tracking-tight">
                    MORE.
                  </span>
                </h3>
                <p className="text-muted-foreground font-light leading-relaxed max-w-lg">
                  Beyond faces and vehicles, our AI can detect many other
                  situations that matter to your safety and operations.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { name: "Unauthorized Entry", icon: ShieldWarning },
                  { name: "Boundary Crossing", icon: Graph },
                  { name: "Suspicious Loitering", icon: Activity },
                  { name: "Fire & Smoke", icon: Lightning },
                  { name: "Safety Gear Check", icon: CheckCircle },
                  { name: "Object Counting", icon: TrendUp },
                  { name: "Fall Detection", icon: Activity },
                  { name: "Unusual Activity", icon: Crosshair },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-background border border-border/60 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all group cursor-default"
                  >
                    <div className="w-10 h-10 rounded-xl bg-muted/50 flex items-center justify-center text-muted-foreground group-hover:text-primary group-hover:bg-primary/5 transition-colors">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-medium text-foreground/80">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Custom Model Development */}
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/5 rounded-[2rem] blur-3xl group-hover:bg-primary/10 transition-colors" />
              <div className="relative p-8 md:p-12 rounded-[2rem] border border-primary/20 bg-background/60 backdrop-blur-md space-y-8 flex flex-col justify-center h-full shadow-2xl">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-[0_0_20px_rgba(var(--primary),0.2)]">
                  <Lightning className="w-8 h-8" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl md:text-4xl font-medium tracking-tight">
                    NEED SOMETHING <br />
                    <span className="text-primary uppercase tracking-tight">
                      SPECIFIC?
                    </span>
                  </h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Can&apos;t find what you need? Tell us what you want to
                    detect, and we&apos;ll build custom AI trained specifically
                    for your use case.
                  </p>
                </div>

                <div className="space-y-4 pt-4">
                  <div className="flex items-center gap-4 text-sm text-foreground/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>
                      We collect and label training data from your actual
                      cameras
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-foreground/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>
                      AI optimized for your specific environment and lighting
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-foreground/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Ongoing improvements as we learn from your data</span>
                  </div>
                </div>

                <div className="pt-4">
                  <button className="w-full md:w-auto px-10 py-5 bg-primary text-primary-foreground rounded-2xl text-sm font-semibold hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3 active:scale-[0.98]">
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
