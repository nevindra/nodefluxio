"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cctv,
  FileVideo,
  Database,
  LayoutDashboard,
  Webhook,
  ScanFace,
  Users,
  Car,
  Truck,
  Video,
  Radio,
  MonitorPlay,
  LucideIcon
} from "lucide-react";

// --- Types ---

interface AIModel {
  id: string;
  moduleId: string;
  icon: LucideIcon;
  label: string;
  description: string;
}

// --- AI Models Data ---

const aiModels: AIModel[] = [
  {
    id: "face",
    moduleId: "FR-01",
    icon: ScanFace,
    label: "Face Recognition",
    description: "Identify People"
  },
  {
    id: "people",
    moduleId: "PA-02",
    icon: Users,
    label: "People Counting",
    description: "Track Visitors"
  },
  {
    id: "lpr",
    moduleId: "LPR-03",
    icon: Car,
    label: "Plate Reader",
    description: "Read Plates"
  },
  {
    id: "vehicle",
    moduleId: "VA-04",
    icon: Truck,
    label: "Vehicle Detection",
    description: "Track Vehicles"
  }
];

// --- Components ---

const PulseLine = ({
  d,
  active = true,
  color = "stroke-primary",
  reverse = false,
  delay = 0
}: {
  d: string;
  active?: boolean;
  color?: string;
  reverse?: boolean;
  delay?: number;
}) => {
  return (
    <>
      {/* Background Track */}
      <path
        d={d}
        fill="none"
        strokeWidth="1"
        className="stroke-border/30"
      />

      {/* Animated Path (Drawing Effect) */}
      <motion.path
        d={d}
        fill="none"
        strokeWidth="1.5"
        className={color}
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 0.5 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: delay, ease: "easeInOut" }}
      />

      {/* Travelling Pulse (Data Packet) */}
      {active && (
        <motion.path
          d={d}
          fill="none"
          strokeWidth="2"
          className={color}
          strokeDasharray="0 1"
          initial={{ pathLength: 0, pathOffset: reverse ? 1 : 0, opacity: 0 }}
          animate={{
            pathLength: [0.05, 0.2, 0.05],
            pathOffset: reverse ? [1, 0] : [0, 1],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 2.5 + Math.random(),
            repeat: Infinity,
            ease: "linear",
            delay: delay + 1.5
          }}
          style={{ strokeLinecap: "round" }}
        />
      )}
    </>
  );
};

const NodeCard = ({
  icon: Icon,
  label,
  subLabel,
  side = "left",
  active = false,
  delay = 0,
  badge
}: {
  icon: LucideIcon;
  label: string;
  subLabel: string;
  side?: "left" | "right";
  active?: boolean;
  delay?: number;
  badge?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`
        relative group z-10 flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl border transition-all duration-300
        ${active
          ? "bg-primary/5 border-primary/40 shadow-[0_0_15px_rgba(var(--primary),0.1)]"
          : "bg-background/40 backdrop-blur-sm border-border hover:bg-background/60 hover:border-sidebar-foreground/20"
        }
        md:${side === "right" ? "flex-row-reverse text-right" : "flex-row text-left"}
      `}
    >
      <div className={`
        p-2 md:p-2.5 rounded-lg transition-colors shrink-0
        ${active ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground group-hover:text-foreground"}
      `}>
        <Icon className="w-4 h-4 md:w-5 md:h-5" />
      </div>
      <div className="flex-1 min-w-0">
        <div className={`text-xs md:text-sm font-medium uppercase tracking-wide truncate ${active ? "text-primary" : "text-foreground"}`}>
          {label}
        </div>
        <div className="text-[9px] md:text-[10px] font-mono text-muted-foreground uppercase tracking-wider truncate">
          {subLabel}
        </div>
        {badge && (
          <span className="hidden sm:inline-block mt-1.5 px-2 py-0.5 text-[9px] font-mono uppercase tracking-wider bg-primary/10 text-primary border border-primary/20 rounded-full">
            {badge}
          </span>
        )}
      </div>

      {/* Connector Dot - Hidden on mobile */}
      <div className={`
        hidden md:block absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full border border-border bg-background
        ${side === "left" ? "-right-1.5" : "-left-1.5"}
        ${active ? "bg-primary border-primary animate-pulse" : ""}
      `} />
    </motion.div>
  );
};

const CenterCore = () => {
  const [currentModelIndex, setCurrentModelIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentModelIndex((prev) => (prev + 1) % aiModels.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const currentModel = aiModels[currentModelIndex];
  const Icon = currentModel.icon;

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      className="relative z-20 flex flex-col items-center justify-center w-48 h-48 md:w-72 md:h-72"
    >
      {/* Rotating Rings */}
      <div className="absolute inset-0 border border-primary/20 rounded-full animate-[spin_10s_linear_infinite]" />
      <div className="absolute inset-2 md:inset-4 border border-primary/20 rounded-full border-dashed animate-[spin_15s_linear_infinite_reverse]" />
      <div className="absolute inset-6 md:inset-12 border border-primary/10 rounded-full animate-pulse" />

      {/* Static Center Content */}
      <div className="relative z-10 bg-background/80 backdrop-blur-xl border border-primary/30 p-4 md:p-6 rounded-xl md:rounded-2xl shadow-[0_0_50px_rgba(var(--primary),0.15)] flex flex-col items-center justify-center text-center min-w-[140px] md:min-w-[180px]">
        {/* Model Icon with Crossfade */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentModel.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="mb-2 md:mb-3"
          >
            <Icon className="w-8 h-8 md:w-10 md:h-10 text-primary" />
          </motion.div>
        </AnimatePresence>

        {/* Model Info with Crossfade */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentModel.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            <h3 className="text-sm md:text-base font-bold tracking-tight text-foreground uppercase">
              {currentModel.label}
            </h3>
            <p className="text-[9px] md:text-[10px] font-mono text-primary uppercase tracking-[0.15em] mt-0.5">
              {currentModel.moduleId}
            </p>
            <p className="hidden md:block text-[10px] font-mono text-muted-foreground uppercase tracking-wider mt-1">
              {currentModel.description}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Model Indicator Dots */}
        <div className="flex gap-1.5 mt-3 md:mt-4">
          {aiModels.map((model, index) => (
            <div
              key={model.id}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${index === currentModelIndex
                  ? "bg-primary scale-125"
                  : "bg-muted-foreground/30"
                }`}
            />
          ))}
        </div>
      </div>

      {/* Decorative vertical line - hidden on mobile */}
      <div className="hidden md:block absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
    </motion.div>
  );
};

export default function ProductIntegration() {
  // Input sources (4 types, brand agnostic)
  const inputs = [
    { id: "cctv", icon: Cctv, label: "CCTV Cameras", subLabel: "Any brand you have", badge: "Any Brand" },
    { id: "bodyworn", icon: Radio, label: "Body Cameras", subLabel: "Wearable devices" },
    { id: "drone", icon: Video, label: "Drones", subLabel: "Aerial footage" },
    { id: "video", icon: FileVideo, label: "Video Files", subLabel: "Recorded footage" },
  ];

  // Output destinations (4 types)
  const outputs = [
    { id: "lenz", icon: LayoutDashboard, label: "Live Dashboard", subLabel: "See everything at once", color: "violet" },
    { id: "websocket", icon: Webhook, label: "Instant Alerts", subLabel: "Real-time notifications", color: "blue" },
    { id: "visual", icon: MonitorPlay, label: "Smart Overlay", subLabel: "See what AI detects", color: "emerald" },
    { id: "postgres", icon: Database, label: "Event History", subLabel: "Search past events", color: "amber" },
  ];

  return (
    <section className="py-16 md:py-24 bg-background border-b border-border overflow-hidden relative">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 relative">

        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 md:gap-3 mb-4"
          >
            <span className="h-px w-6 md:w-8 bg-primary/40" />
            <span className="text-[10px] md:text-xs font-mono text-primary uppercase tracking-[0.2em] md:tracking-[0.3em]">Works with any camera</span>
            <span className="h-px w-6 md:w-8 bg-primary/40" />
          </motion.div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-foreground mb-4 md:mb-6">
            HOW IT <span className="text-muted-foreground">WORKS.</span>
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground font-light leading-relaxed px-2">
            Connect your existing cameras. Our AI analyzes every frame in real-time.
            Get instant alerts and searchable history of everything that happens.
          </p>
        </div>

        {/* The Schematic Board */}
        <div className="relative w-full bg-card/30 border border-border/50 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
          {/* Grid Background */}
          <div className="absolute inset-0 bg-[url('/hero/grid.svg')] opacity-[0.03] [background-size:32px_32px]" />

          <div className="relative p-4 sm:p-6 md:p-12 flex flex-col md:flex-row items-center md:items-stretch justify-between gap-4 md:gap-8">

            {/* Left Column: Inputs */}
            <div className="w-full md:w-1/4 md:min-w-[220px] z-10">
              {/* Mobile Section Label */}
              <div className="md:hidden flex items-center gap-2 mb-3">
                <span className="text-[10px] font-mono text-primary uppercase tracking-widest">Connect Your Cameras</span>
                <span className="flex-1 h-px bg-primary/20" />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-1 gap-2 md:gap-3 md:h-full md:justify-between">
                {inputs.map((item, i) => (
                  <NodeCard
                    key={item.id}
                    icon={item.icon}
                    label={item.label}
                    subLabel={item.subLabel}
                    badge={item.badge}
                    side="left"
                    delay={i * 0.1}
                    active={true}
                  />
                ))}
              </div>
            </div>

            {/* Mobile Arrow Down */}
            <div className="md:hidden flex flex-col items-center py-2">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center gap-1"
              >
                <div className="w-px h-4 bg-gradient-to-b from-transparent to-primary/50" />
                <div className="w-2 h-2 border-b-2 border-r-2 border-primary/50 rotate-45 -mt-1" />
              </motion.div>
            </div>

            {/* Center: Core with Animated Model Switcher */}
            <div className="flex items-center justify-center py-4 md:py-0 z-10 md:flex-1">
              <CenterCore />
            </div>

            {/* Mobile Arrow Down */}
            <div className="md:hidden flex flex-col items-center py-2">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center gap-1"
              >
                <div className="w-px h-4 bg-gradient-to-b from-transparent to-primary/50" />
                <div className="w-2 h-2 border-b-2 border-r-2 border-primary/50 rotate-45 -mt-1" />
              </motion.div>
            </div>

            {/* Right Column: Outputs */}
            <div className="w-full md:w-1/4 md:min-w-[220px] z-10">
              {/* Mobile Section Label */}
              <div className="md:hidden flex items-center gap-2 mb-3">
                <span className="text-[10px] font-mono text-primary uppercase tracking-widest">Get Results</span>
                <span className="flex-1 h-px bg-primary/20" />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-1 gap-2 md:gap-3 md:h-full md:justify-between">
                {outputs.map((item, i) => (
                  <NodeCard
                    key={item.id}
                    icon={item.icon}
                    label={item.label}
                    subLabel={item.subLabel}
                    side="right"
                    delay={0.5 + (i * 0.1)}
                    active={true}
                  />
                ))}
              </div>
            </div>

          </div>

          {/* SVG Connection Layer - Desktop Only */}
          <div className="absolute inset-0 pointer-events-none hidden lg:block">
            <svg width="100%" height="100%" viewBox="0 0 1440 720" preserveAspectRatio="xMidYMid meet">
              {/* Input Connections - All converge to center (blue) */}
              <PulseLine d="M 320 100 C 500 100, 550 360, 720 360" delay={0.1} color="stroke-blue-500/60" />
              <PulseLine d="M 320 260 C 480 260, 550 360, 720 360" delay={0.2} color="stroke-blue-500/60" />
              <PulseLine d="M 320 420 C 480 420, 550 360, 720 360" delay={0.3} color="stroke-blue-500/60" />
              <PulseLine d="M 320 580 C 500 580, 550 360, 720 360" delay={0.4} color="stroke-blue-500/60" />

              {/* Output Connections - Fan out from center (color-coded) */}
              <PulseLine d="M 720 360 C 890 360, 940 100, 1120 100" reverse delay={0.8} color="stroke-blue-500/60" />
              <PulseLine d="M 720 360 C 890 360, 940 260, 1120 260" reverse delay={1.0} color="stroke-emerald-500/60" />
              <PulseLine d="M 720 360 C 890 360, 940 420, 1120 420" reverse delay={1.2} color="stroke-violet-500/60" />
              <PulseLine d="M 720 360 C 890 360, 940 580, 1120 580" reverse delay={1.4} color="stroke-amber-500/60" />
            </svg>
          </div>

        </div>
      </div>
    </section>
  );
}
