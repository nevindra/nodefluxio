"use client";

import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import { Cpu } from "@phosphor-icons/react";
import { useRef, useState, useEffect } from "react";
import ProductIntegration from "@/components/landing-page/ProductIntegration";
import { AnimatePresence } from "framer-motion";
import {
  SecurityCamera,
  FileVideo,
  Database,
  SquaresFour,
  BellRinging,
  ScanSmiley,
  Users,
  Car,
  Truck,
  VideoCamera,
  Broadcast,
  MonitorPlay,
  Icon,
} from "@phosphor-icons/react";

export function VisionaireHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollY } = useScroll();

  // Static values for mobile to prevent scroll-linked animations
  const staticY = useMotionValue(0);
  const staticOpacity = useMotionValue(1);

  const y1Transform = useTransform(scrollY, [0, 500], [0, 200]);
  const y2Transform = useTransform(scrollY, [0, 500], [0, -150]);
  const opacityTransform = useTransform(scrollY, [0, 400], [1, 0]);

  const y1 = isMobile ? staticY : y1Transform;
  const y2 = isMobile ? staticY : y2Transform;
  const opacity = isMobile ? staticOpacity : opacityTransform;

  return (
    <section
      ref={containerRef}
      className="relative pt-28 sm:pt-32 pb-0 overflow-visible bg-background border-b border-border/10"
    >
      {/* Background Ambience - Hidden on mobile for performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        <motion.div
          style={{ y: y1 }}
          className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] bg-blue-500/5 rounded-full blur-[120px] will-change-transform"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute top-[20%] -right-[10%] w-[60vw] h-[60vw] bg-primary/5 rounded-full blur-[100px] will-change-transform"
        />
      </div>

      <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-8 relative z-10 pt-24 md:pt-32 lg:pt-40">
        <div className="flex flex-col items-center text-center space-y-12 md:space-y-16">
          <div className="space-y-6 md:space-y-8 max-w-4xl mx-auto">
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm"
            >
              <Cpu className="w-3 h-3 text-primary" />
              <span className="text-[10px] font-mono text-primary tracking-[0.2em] uppercase">
                Works with any camera
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-medium tracking-wide text-foreground"
            >
              YOUR CAMERAS, <br className="hidden sm:block" />
              <span className="text-muted-foreground">NOW INTELLIGENT.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed px-2"
            >
              Turn your existing cameras into a smart detection system. Know who
              enters, count visitors, read plates - all automatically.
            </motion.p>
          </div>

          {/* Product Integration - Overlapping Section Below */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="w-full max-w-7xl group relative z-20 mb-[-60px] sm:mb-[-80px] md:mb-[-120px] lg:mb-[-160px]"
          >
            <div className="absolute inset-0 bg-blue-500/10 blur-[100px] opacity-0 group-hover:opacity-40 transition-opacity duration-1000 -z-10" />

            {/* ProductIntegration without its own section wrapper */}
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-border/50 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] bg-background/80 backdrop-blur-sm">
              <ProductIntegrationEmbed />
            </div>

            {/* Decorative reflection */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-primary/20 blur-xl md:blur-3xl" />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <div className="w-[1px] h-8 md:h-12 bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0" />
        <span className="text-[10px] font-mono text-foreground/30 tracking-widest uppercase">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}

// Embedded version of ProductIntegration without the outer section/padding
function ProductIntegrationEmbed() {
  return (
    <div className="relative w-full bg-card/30 overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[url('/hero/grid.svg')] opacity-[0.03] [background-size:32px_32px]" />

      <div className="relative p-4 sm:p-6 md:p-10 lg:p-12 flex flex-col md:flex-row items-center md:items-stretch justify-between gap-4 md:gap-6 lg:gap-8">
        {/* Left Column: Inputs */}
        <InputsColumn />

        {/* Mobile Arrow Down */}
        <MobileArrow />

        {/* Center: Core with Animated Model Switcher */}
        <div className="flex items-center justify-center py-4 md:py-0 z-10 md:flex-1">
          <CenterCore />
        </div>

        {/* Mobile Arrow Down */}
        <MobileArrow />

        {/* Right Column: Outputs */}
        <OutputsColumn />
      </div>

      {/* SVG Connection Layer - Desktop Only */}
      <SVGConnections />
    </div>
  );
}

// --- Embedded Sub-Components (copied from ProductIntegration for self-contained hero) ---

interface AIModel {
  id: string;
  moduleId: string;
  icon: Icon;
  label: string;
  description: string;
}

const aiModels: AIModel[] = [
  {
    id: "face",
    moduleId: "FR-01",
    icon: ScanSmiley,
    label: "Face Recognition",
    description: "Identify People",
  },
  {
    id: "people",
    moduleId: "PA-02",
    icon: Users,
    label: "People Counting",
    description: "Track Visitors",
  },
  {
    id: "lpr",
    moduleId: "LPR-03",
    icon: Car,
    label: "Plate Reader",
    description: "Read Plates",
  },
  {
    id: "vehicle",
    moduleId: "VA-04",
    icon: Truck,
    label: "Vehicle Detection",
    description: "Track Vehicles",
  },
];

const inputs = [
  {
    id: "cctv",
    icon: SecurityCamera,
    label: "CCTV Cameras",
    subLabel: "Any brand you have",
    badge: "Any Brand",
  },
  {
    id: "bodyworn",
    icon: Broadcast,
    label: "Body Cameras",
    subLabel: "Wearable devices",
  },
  {
    id: "drone",
    icon: VideoCamera,
    label: "Drones",
    subLabel: "Aerial footage",
  },
  {
    id: "video",
    icon: FileVideo,
    label: "Video Files",
    subLabel: "Recorded footage",
  },
];

const outputs = [
  {
    id: "lenz",
    icon: SquaresFour,
    label: "Live Dashboard",
    subLabel: "See everything at once",
  },
  {
    id: "websocket",
    icon: BellRinging,
    label: "Instant Alerts",
    subLabel: "Real-time notifications",
  },
  {
    id: "visual",
    icon: MonitorPlay,
    label: "Smart Overlay",
    subLabel: "See what AI detects",
  },
  {
    id: "postgres",
    icon: Database,
    label: "Event History",
    subLabel: "Search past events",
  },
];

const NodeCard = ({
  icon: IconComponent,
  label,
  subLabel,
  side = "left",
  delay = 0,
  badge,
}: {
  icon: Icon;
  label: string;
  subLabel: string;
  side?: "left" | "right";
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
                relative group z-10 flex items-center gap-2 sm:gap-3 md:gap-4 p-2 sm:p-3 md:p-4 rounded-lg md:rounded-xl border transition-all duration-300
                bg-primary/5 border-primary/40 shadow-[0_0_15px_rgba(var(--primary),0.1)]
                md:${side === "right" ? "flex-row-reverse text-right" : "flex-row text-left"}
            `}
    >
      <div className="p-1.5 sm:p-2 md:p-2.5 rounded-md md:rounded-lg bg-primary text-primary-foreground shrink-0">
        <IconComponent className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-[10px] sm:text-xs md:text-sm font-medium uppercase tracking-wide truncate text-primary">
          {label}
        </div>
        <div className="text-[8px] sm:text-[9px] md:text-[10px] font-mono text-muted-foreground uppercase tracking-wider truncate">
          {subLabel}
        </div>
        {badge && (
          <span className="hidden lg:inline-block mt-1 px-1.5 py-0.5 text-[8px] font-mono uppercase tracking-wider bg-primary/10 text-primary border border-primary/20 rounded-full">
            {badge}
          </span>
        )}
      </div>

      {/* Connector Dot - Hidden on mobile */}
      <div
        className={`
                hidden lg:block absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary border-primary animate-pulse
                ${side === "left" ? "-right-1.5" : "-left-1.5"}
            `}
      />
    </motion.div>
  );
};

const CenterCore = () => {
  const [currentModelIndex, setCurrentModelIndex] = useState(0);
  const [isMobileCore, setIsMobileCore] = useState(true);

  useEffect(() => {
    const checkMobile = () => setIsMobileCore(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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
      className="relative z-20 flex flex-col items-center justify-center w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-72 lg:h-72"
    >
      {/* Rotating Rings - Static on mobile for performance */}
      <div
        className={`absolute inset-0 border border-primary/20 rounded-full ${isMobileCore ? "" : "animate-[spin_10s_linear_infinite]"}`}
      />
      <div
        className={`absolute inset-2 md:inset-4 border border-primary/20 rounded-full border-dashed ${isMobileCore ? "" : "animate-[spin_15s_linear_infinite_reverse]"}`}
      />
      <div
        className={`absolute inset-4 sm:inset-6 md:inset-12 border border-primary/10 rounded-full ${isMobileCore ? "" : "animate-pulse"}`}
      />

      {/* Static Center Content */}
      <div className="relative z-10 bg-background/80 backdrop-blur-xl border border-primary/30 p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl md:rounded-2xl shadow-[0_0_50px_rgba(var(--primary),0.15)] flex flex-col items-center justify-center text-center min-w-[100px] sm:min-w-[120px] md:min-w-[160px] lg:min-w-[180px]">
        {/* Model Icon with Crossfade */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentModel.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="mb-1 sm:mb-2 md:mb-3"
          >
            <Icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-primary" />
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
            <h3 className="text-[10px] sm:text-xs md:text-sm lg:text-base font-bold tracking-tight text-foreground uppercase">
              {currentModel.label}
            </h3>
            <p className="text-[8px] sm:text-[9px] md:text-[10px] font-mono text-primary uppercase tracking-[0.1em] md:tracking-[0.15em] mt-0.5">
              {currentModel.moduleId}
            </p>
            <p className="hidden md:block text-[10px] font-mono text-muted-foreground uppercase tracking-wider mt-1">
              {currentModel.description}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Model Indicator Dots */}
        <div className="flex gap-1 sm:gap-1.5 mt-2 sm:mt-3 md:mt-4">
          {aiModels.map((model, index) => (
            <div
              key={model.id}
              className={`w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full transition-all duration-300 ${
                index === currentModelIndex
                  ? "bg-primary scale-125"
                  : "bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Decorative vertical line - hidden on mobile */}
      <div className="hidden lg:block absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
    </motion.div>
  );
};

const InputsColumn = () => (
  <div className="w-full md:w-1/4 lg:min-w-[200px] z-10">
    <div className="md:hidden flex items-center gap-2 mb-2">
      <span className="text-[9px] font-mono text-primary uppercase tracking-widest">
        Connect Your Cameras
      </span>
      <span className="flex-1 h-px bg-primary/20" />
    </div>
    <div className="grid grid-cols-2 md:grid-cols-1 gap-1.5 sm:gap-2 md:gap-3 md:h-full md:justify-between">
      {inputs.map((item, i) => (
        <NodeCard
          key={item.id}
          icon={item.icon}
          label={item.label}
          subLabel={item.subLabel}
          badge={item.badge}
          side="left"
          delay={i * 0.1}
        />
      ))}
    </div>
  </div>
);

const OutputsColumn = () => (
  <div className="w-full md:w-1/4 lg:min-w-[200px] z-10">
    <div className="md:hidden flex items-center gap-2 mb-2">
      <span className="text-[9px] font-mono text-primary uppercase tracking-widest">
        Get Results
      </span>
      <span className="flex-1 h-px bg-primary/20" />
    </div>
    <div className="grid grid-cols-2 md:grid-cols-1 gap-1.5 sm:gap-2 md:gap-3 md:h-full md:justify-between">
      {outputs.map((item, i) => (
        <NodeCard
          key={item.id}
          icon={item.icon}
          label={item.label}
          subLabel={item.subLabel}
          side="right"
          delay={0.5 + i * 0.1}
        />
      ))}
    </div>
  </div>
);

const MobileArrow = () => (
  <div className="md:hidden flex flex-col items-center py-1">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="flex flex-col items-center gap-0.5"
    >
      <div className="w-px h-3 bg-gradient-to-b from-transparent to-primary/50" />
      <div className="w-1.5 h-1.5 border-b-2 border-r-2 border-primary/50 rotate-45 -mt-0.5" />
    </motion.div>
  </div>
);

const PulseLine = ({
  d,
  color = "stroke-primary",
  reverse = false,
  delay = 0,
}: {
  d: string;
  color?: string;
  reverse?: boolean;
  delay?: number;
}) => {
  return (
    <>
      <path d={d} fill="none" strokeWidth="1" className="stroke-border/30" />
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
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 2.5 + Math.random(),
          repeat: Infinity,
          ease: "linear",
          delay: delay + 1.5,
        }}
        style={{ strokeLinecap: "round" }}
      />
    </>
  );
};

const SVGConnections = () => (
  <div className="absolute inset-0 pointer-events-none hidden lg:block">
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1440 720"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Input Connections */}
      <PulseLine
        d="M 320 100 C 500 100, 550 360, 720 360"
        delay={0.1}
        color="stroke-blue-500/60"
      />
      <PulseLine
        d="M 320 260 C 480 260, 550 360, 720 360"
        delay={0.2}
        color="stroke-blue-500/60"
      />
      <PulseLine
        d="M 320 420 C 480 420, 550 360, 720 360"
        delay={0.3}
        color="stroke-blue-500/60"
      />
      <PulseLine
        d="M 320 580 C 500 580, 550 360, 720 360"
        delay={0.4}
        color="stroke-blue-500/60"
      />

      {/* Output Connections */}
      <PulseLine
        d="M 720 360 C 890 360, 940 100, 1120 100"
        reverse
        delay={0.8}
        color="stroke-violet-500/60"
      />
      <PulseLine
        d="M 720 360 C 890 360, 940 260, 1120 260"
        reverse
        delay={1.0}
        color="stroke-blue-500/60"
      />
      <PulseLine
        d="M 720 360 C 890 360, 940 420, 1120 420"
        reverse
        delay={1.2}
        color="stroke-emerald-500/60"
      />
      <PulseLine
        d="M 720 360 C 890 360, 940 580, 1120 580"
        reverse
        delay={1.4}
        color="stroke-amber-500/60"
      />
    </svg>
  </div>
);

export default VisionaireHero;
