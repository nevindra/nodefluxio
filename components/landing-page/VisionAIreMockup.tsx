"use client";

import {
  Car,
  ChartBar,
  Cloud,
  CloudArrowUp,
  Icon,
  MonitorPlay,
  ScanSmiley,
  SecurityCamera,
  Users,
} from "@phosphor-icons/react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

// --- Data ---

const centerModels = [
  { id: "fr", label: "Face Recognition", icon: ScanSmiley, moduleId: "FR-01" },
  { id: "pc", label: "People Counting", icon: Users, moduleId: "PA-02" },
  { id: "lpr", label: "Plate Reader", icon: Car, moduleId: "LPR-03" },
];

const nodes: {
  id: string;
  label: string;
  icon: Icon;
  description: string;
  x: number;
  y: number;
}[] = [
  {
    id: "input",
    label: "Input",
    icon: SecurityCamera,
    description: "Camera streams",
    x: 82,
    y: 78,
  },
  {
    id: "deployment",
    label: "Deployment",
    icon: CloudArrowUp,
    description: "On-prem & cloud",
    x: 12,
    y: 78,
  },
  {
    id: "api",
    label: "API",
    icon: Cloud,
    description: "REST & gRPC",
    x: 6,
    y: 28,
  },
  {
    id: "others",
    label: "Others",
    icon: MonitorPlay,
    description: "VMS & integrations",
    x: 50,
    y: 8,
  },
  {
    id: "analytics",
    label: "Analytics",
    icon: ChartBar,
    description: "Insights & reports",
    x: 88,
    y: 28,
  },
];

// --- Sub-components ---

function NodeCard({
  node,
  delay = 0,
}: {
  node: (typeof nodes)[0];
  delay?: number;
}) {
  const NodeIcon = node.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="flex flex-col items-center gap-1.5 group"
    >
      <div className="relative p-2.5 bg-card/80 border border-primary/30 rounded-lg backdrop-blur-sm group-hover:border-primary/60 transition-all duration-500 shadow-[0_0_15px_hsl(var(--primary)/0.08)]">
        <NodeIcon className="w-5 h-5 text-primary" weight="duotone" />
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-primary/50" />
        <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-primary/50" />
        <div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-primary/50" />
        <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-primary/50" />
      </div>
      {/* Label pill */}
      <div className="px-2.5 py-1 bg-primary/10 border border-primary/30 rounded-full backdrop-blur-sm">
        <span className="text-[8px] font-mono text-primary uppercase tracking-[0.15em] font-bold">
          {node.label}
        </span>
      </div>
      <span className="text-[7px] font-mono text-muted-foreground uppercase tracking-wider">
        {node.description}
      </span>
    </motion.div>
  );
}

function CenterChip() {
  const [modelIndex, setModelIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setModelIndex((prev) => (prev + 1) % centerModels.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const current = centerModels[modelIndex];
  const CurrentIcon = current.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative flex items-center justify-center"
    >
      {/* Outer glow */}
      <div className="absolute w-44 h-44 rounded-full bg-primary/10 blur-[40px] pointer-events-none" />

      {/* Rotating rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute w-36 h-36 border border-primary/20 rounded-full border-dashed"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute w-28 h-28 border border-accent/15 rounded-full"
      />

      {/* Chip body */}
      <div className="relative w-24 h-24 flex items-center justify-center">
        {/* Chip base shadow */}
        <div
          className="absolute -bottom-3 w-full h-6 bg-primary/10 blur-md"
          style={{
            clipPath: "polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)",
          }}
        />

        {/* Main chip */}
        <div className="relative w-full h-full bg-card border border-primary/40 rounded-xl flex flex-col items-center justify-center shadow-[0_0_30px_hsl(var(--primary)/0.15),inset_0_1px_0_rgba(255,255,255,0.05)]">
          {/* Top edge highlight */}
          <div className="absolute top-0 inset-x-2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

          {/* Chip pins - top */}
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 flex gap-1.5">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-1 h-1.5 bg-primary/40 rounded-sm" />
            ))}
          </div>
          {/* Chip pins - bottom */}
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex gap-1.5">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-1 h-1.5 bg-primary/40 rounded-sm" />
            ))}
          </div>
          {/* Chip pins - left */}
          <div className="absolute -left-1 top-1/2 -translate-y-1/2 flex flex-col gap-1.5">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-1.5 h-1 bg-primary/40 rounded-sm" />
            ))}
          </div>
          {/* Chip pins - right */}
          <div className="absolute -right-1 top-1/2 -translate-y-1/2 flex flex-col gap-1.5">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-1.5 h-1 bg-primary/40 rounded-sm" />
            ))}
          </div>

          {/* Icon crossfade */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.3 }}
            >
              <CurrentIcon className="w-7 h-7 text-primary" weight="duotone" />
            </motion.div>
          </AnimatePresence>

          {/* Module ID */}
          <AnimatePresence mode="wait">
            <motion.span
              key={current.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-[7px] font-mono text-primary/70 uppercase tracking-widest mt-1"
            >
              {current.moduleId}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>

      {/* Label below chip */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            <div className="text-[9px] font-mono text-primary uppercase tracking-[0.2em] font-bold">
              {current.label}
            </div>
          </motion.div>
        </AnimatePresence>
        {/* Model dots */}
        <div className="flex gap-1 justify-center mt-1.5">
          {centerModels.map((m, i) => (
            <div
              key={m.id}
              className={`w-1 h-1 rounded-full transition-all duration-300 ${
                i === modelIndex
                  ? "bg-primary scale-125"
                  : "bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function ConnectionLine({
  from,
  to,
  delay = 0,
}: {
  from: { x: number; y: number };
  to: { x: number; y: number };
  delay?: number;
}) {
  const midX = (from.x + to.x) / 2;
  const midY = (from.y + to.y) / 2;

  const d = `M ${from.x} ${from.y} Q ${midX} ${midY} ${to.x} ${to.y}`;

  return (
    <>
      {/* Base track */}
      <path d={d} fill="none" strokeWidth="1" className="stroke-primary/10" />
      {/* Animated draw-in */}
      <motion.path
        d={d}
        fill="none"
        strokeWidth="1.5"
        className="stroke-primary/30"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay, ease: "easeInOut" }}
      />
      {/* Travelling pulse */}
      <motion.path
        d={d}
        fill="none"
        strokeWidth="2"
        className="stroke-primary"
        strokeDasharray="0 1"
        initial={{ pathLength: 0, pathOffset: 0, opacity: 0 }}
        animate={{
          pathLength: [0.03, 0.12, 0.03],
          pathOffset: [0, 1],
          opacity: [0, 0.7, 0],
        }}
        transition={{
          duration: 2.5 + Math.random() * 0.5,
          repeat: Infinity,
          ease: "linear",
          delay: delay + 1.2,
        }}
        style={{ strokeLinecap: "round" }}
      />
    </>
  );
}

// --- Main Component ---

export default function VisionAIreMockup() {
  const svgW = 800;
  const svgH = 500;
  const cx = svgW / 2;
  const cy = svgH / 2;

  return (
    <div className="relative h-full w-full bg-background overflow-hidden select-none">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-primary/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[30%] h-[30%] bg-accent/5 rounded-full blur-[60px] pointer-events-none" />

      {/* SVG Connection Lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox={`0 0 ${svgW} ${svgH}`}
        preserveAspectRatio="xMidYMid meet"
      >
        {nodes.map((node, i) => (
          <ConnectionLine
            key={node.id}
            from={{ x: cx, y: cy }}
            to={{
              x: (node.x / 100) * svgW,
              y: (node.y / 100) * svgH,
            }}
            delay={i * 0.15}
          />
        ))}
      </svg>

      {/* Nodes positioned absolutely */}
      {nodes.map((node, i) => (
        <div
          key={node.id}
          className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
          }}
        >
          <NodeCard node={node} delay={0.3 + i * 0.12} />
        </div>
      ))}

      {/* Center Chip */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <CenterChip />
      </div>

      {/* Corner HUD accents */}
      <div className="absolute top-3 left-3 text-[7px] font-mono text-primary/30 uppercase tracking-widest space-y-0.5">
        <div>SYS: ONLINE</div>
        <div className="flex items-center gap-1">
          <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
          <span>STREAM ACTIVE</span>
        </div>
      </div>
      <div className="absolute top-3 right-3 text-[7px] font-mono text-muted-foreground/40 uppercase tracking-widest">
        VISIONAIRE_CORE_v4
      </div>
      <div className="absolute bottom-3 left-3 text-[7px] font-mono text-muted-foreground/40 uppercase tracking-widest">
        ARCH_OVERVIEW
      </div>
      <div className="absolute bottom-3 right-3 text-[7px] font-mono text-muted-foreground/40 uppercase tracking-widest">
        COORD: -6.2088 / 106.845
      </div>

      {/* Decorative corner brackets */}
      <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-primary/20" />
      <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-primary/20" />
      <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-primary/20" />
      <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-primary/20" />
    </div>
  );
}
