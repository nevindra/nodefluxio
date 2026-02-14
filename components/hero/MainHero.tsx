"use client";

import { Button } from "@/components/ui/button";
import { CaretRight, Database, Globe } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HeroBackground } from "./HeroBackground";
import { HeroProps } from "./types";
import { trackDemoCtaClicked } from "@/lib/analytics";

const words = ["SAFETY.", "SMART CITIES.", "TRAFFIC.", "EFFICIENCY."];

function Typewriter({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState(words[0] ?? "");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Start the typewriter cycle after initial mount + pause
    const startTimer = setTimeout(() => {
      setMounted(true);
      setIsDeleting(true);
    }, 2000);
    return () => clearTimeout(startTimer);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handleTyping = () => {
      const currentWord = words[index];
      if (isDeleting) {
        setDisplayText(currentWord.substring(0, displayText.length - 1));
        setSpeed(50);
      } else {
        setDisplayText(currentWord.substring(0, displayText.length + 1));
        setSpeed(150);
      }

      if (!isDeleting && displayText === currentWord) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, index, speed, words, mounted]);

  return (
    <span className="text-primary relative group">
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        className="inline-block w-[3px] h-[0.7em] bg-primary ml-1 align-middle"
      />
      <div className="absolute -inset-x-4 -inset-y-2 bg-primary/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left -z-10" />
    </span>
  );
}

// --- Sub-components for HUD ---

function SystemStat({
  icon: Icon,
  label,
  value,
  detail,
  color = "primary",
}: any) {
  return (
    <div className="group relative bg-background/20 backdrop-blur-md border border-foreground/5 p-4 overflow-hidden transition-all hover:border-primary/30">
      <div
        className={`absolute top-0 left-0 w-1 h-full bg-${color === "primary" ? "primary" : "secondary"} opacity-50`}
      />
      <div className="flex items-start justify-between mb-3">
        <div className="p-2 bg-foreground/5 rounded-sm">
          <Icon className="w-4 h-4 text-primary" />
        </div>
        <div className="text-[10px] font-mono text-foreground/30 uppercase tracking-widest">
          {detail}
        </div>
      </div>
      <div className="space-y-1">
        <div className="text-2xl font-light tracking-tight text-foreground">
          {value}
        </div>
        <div className="text-[10px] font-medium text-primary uppercase tracking-[0.2em]">
          {label}
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-8 h-8 opacity-[0.03] transition-opacity group-hover:opacity-[0.1]">
        <Icon className="w-full h-full" />
      </div>
    </div>
  );
}

function BiometricScanner() {
  return (
    <div className="relative aspect-square max-w-[320px] mx-auto">
      {/* Background Rings */}
      <div className="absolute inset-0 border border-primary/20 rounded-full animate-pulse" />
      <div className="absolute inset-4 border border-primary/10 rounded-full" />

      {/* Rotating Rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 border-t-2 border-primary/40 rounded-full will-change-transform"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute inset-8 border-b-2 border-primary/30 rounded-full border-dashed will-change-transform"
      />

      {/* Target Crosshair & Subject Face */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-48 h-48 rounded-2xl overflow-hidden border border-primary/30 shadow-[0_0_50px_rgba(var(--primary-rgb),0.2)] bg-black/20 transform-gpu">
          {/* Live Face Stream - CCTV View */}
          <Image
            src="/hero/cctv-capture.png"
            alt="CCTV Subject Capture"
            fill
            sizes="192px"
            className="object-cover opacity-80"
            priority
          />

          {/* Scanning Face Grid/Mesh Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
          <div className="absolute inset-0 opacity-20 bg-grid-scanlines" />

          {/* Target Corners */}
          <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary" />
          <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary" />
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary" />
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary" />

          {/* Scanning Line */}
          <motion.div
            animate={{ top: ["0%", "100%", "0%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 w-full h-[2px] bg-primary shadow-[0_0_15px_rgba(var(--primary-rgb),0.8)] z-10 will-change-[top]"
          />

          {/* Tracking Markers */}
          <motion.div
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1.5 }}
            className="absolute top-1/3 left-1/4 w-2 h-2 border border-primary rounded-full will-change-opacity"
          />
          <motion.div
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1.2 }}
            className="absolute top-1/2 right-1/3 w-2 h-2 border border-primary rounded-full will-change-opacity"
          />
        </div>
      </div>

      {/* Matching Profile Card - Database View */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute -right-8 top-1/4 w-32 bg-background/90 backdrop-blur-md border border-primary/40 p-2 shadow-2xl z-20"
      >
        <div className="text-[7px] font-mono text-primary/60 uppercase mb-1 tracking-tighter">
          Database Match
        </div>
        <div className="relative aspect-square w-full mb-2 border border-primary/20">
          <Image
            src="/hero/biometric-face.png"
            alt="Target Match"
            fill
            sizes="128px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary/10" />
        </div>
        <div className="space-y-0.5">
          <div className="text-[9px] font-mono text-foreground font-bold leading-tight uppercase">
            Sarah Jenkins
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[7px] font-mono text-foreground/40">
              ACCURACY
            </span>
            <span className="text-[8px] font-mono text-green-500 font-bold">
              99.82%
            </span>
          </div>
        </div>
        {/* Decorative bar */}
        <div className="mt-2 w-full h-0.5 bg-foreground/5 overflow-hidden">
          <motion.div
            animate={{ width: ["0%", "99.82%"] }}
            transition={{ duration: 1.5, delay: 2.5 }}
            className="h-full bg-green-500"
          />
        </div>
      </motion.div>

      {/* Floating Data Labels */}
      <div className="absolute -top-4 -left-4 bg-background/80 backdrop-blur-sm border border-primary/30 p-2 font-mono text-[8px] space-y-1 shadow-2xl">
        <div className="text-primary tracking-widest uppercase">
          UID: NFX-9382
        </div>
        <div className="text-foreground/60 uppercase">Scan: Active</div>
      </div>
      <div className="absolute -bottom-4 -right-4 bg-background/80 backdrop-blur-sm border border-primary/30 p-2 font-mono text-[8px] space-y-1 shadow-2xl">
        <div className="text-primary uppercase">COORD: -6.2088</div>
        <div className="text-foreground/60 uppercase">Sync: 100%</div>
      </div>
    </div>
  );
}

function TerminalLog() {
  const [logs, setLogs] = useState<string[]>([
    "> Accessing CAM-112 stream...",
    "> Facial feature analysis: INAUGURAL",
    "> Searching national vision core...",
    "> MATCH FOUND: JENKINS, SARAH [99.82%]",
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      requestAnimationFrame(() => {
        const newLogs = [
          "> Processing stream ID: " +
            Math.random().toString(36).substring(7).toUpperCase(),
          "> Object detected: License Plate [B 1234 ABC]",
          "> Latency: " + (Math.random() * 50 + 10).toFixed(2) + "ms",
          "> Anomaly detection: Detected",
          "> Syncing national database...",
        ];
        setLogs((prev) => [
          ...prev.slice(-3),
          newLogs[Math.floor(Math.random() * newLogs.length)],
        ]);
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black/60 backdrop-blur-md border border-white/10 p-4 h-32 font-mono text-[10px] overflow-hidden relative shadow-2xl">
      <div className="absolute top-0 left-0 w-full h-6 bg-white/5 flex items-center px-4 justify-between">
        <span className="text-[8px] text-white/40 tracking-widest uppercase font-bold">
          System_Output.log
        </span>
        <div className="flex gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-red-500/40" />
          <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/40" />
          <div className="w-1.5 h-1.5 rounded-full bg-green-500/40" />
        </div>
      </div>
      <div className="mt-6 space-y-1">
        {logs.map((log, i) => (
          <div
            key={i}
            className={`${i === logs.length - 1 ? "text-primary opacity-100 font-bold" : "text-white/40"}`}
          >
            {log}
          </div>
        ))}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="inline-block w-1.5 h-3 bg-primary ml-1 align-middle"
        />
      </div>
    </div>
  );
}

export function MainHero({
  title,
  description = "The intelligence operating system for the physical world. We unify vision and data into a foundational core that powers real-time awareness at any scale.",
  videoSrc,
  primaryCtaText = "Request Demo",
  primaryCtaHref = "/contact-us",
  secondaryCtaText = "Platform Overview",
  secondaryCtaHref = "#features",
  label = "Extending Vision Beyond Imagination",
}: HeroProps) {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-background pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-0 md:pb-0">
      <HeroBackground videoSrc={videoSrc} isLanding={true} />

      <div className="relative z-10 mx-auto w-full max-w-[1280px] md:mt-0 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Column: Context & CTA */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 md:space-y-10 text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-4 sm:space-y-6"
            >
              <div className="inline-flex items-center space-x-2 sm:space-x-3 mb-2">
                <span className="w-8 sm:w-12 h-[2px] bg-primary"></span>
                <span className="text-[9px] sm:text-[10px] md:text-xs font-mono tracking-[0.3em] sm:tracking-[0.4em] uppercase text-primary">
                  {label}
                </span>
              </div>

              <h1 className="font-medium tracking-wide text-foreground leading-[1.1] text-3xl sm:text-4xl md:text-6xl lg:text-7xl">
                <span className="block italic opacity-40">AI-POWERED</span>
                <Typewriter words={words} />
                <span className="sr-only">
                  {" "}AI for Safety, Smart Cities, Traffic, and Efficiency
                </span>
              </h1>

              <p className="text-muted-foreground font-light text-sm sm:text-base md:text-lg max-w-xl leading-relaxed">
                {description}
              </p>

              <div className="pt-4 sm:pt-6">
                <Button
                  size="lg"
                  asChild
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-12 sm:h-14 px-6 sm:px-10 transition-all duration-300 shadow-xl shadow-primary/20 rounded-none uppercase tracking-wide sm:tracking-widest text-[10px] sm:text-xs"
                >
                  <Link href={primaryCtaHref} onClick={() => trackDemoCtaClicked("hero", primaryCtaText)}>{primaryCtaText}</Link>
                </Button>
              </div>
            </motion.div>

            {/* Terminal Log at the bottom of left column or separate */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hidden md:block w-full max-w-lg"
            >
              <TerminalLog />
            </motion.div>
          </div>

          {/* Right Column: HUD & Visualization - Hidden on mobile */}
          <div className="hidden lg:block lg:col-span-6 space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative grid grid-cols-2 gap-4"
            >
              {/* HUD Background Decoration */}
              <div className="absolute -inset-10 bg-primary/5 blur-[100px] pointer-events-none rounded-full" />

              <div className="col-span-2 md:col-span-1">
                <SystemStat
                  icon={Globe}
                  label="Years of Experience"
                  value="> 8"
                  detail="NET_GRID_01"
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <SystemStat
                  icon={Database}
                  label="Streams Implemented"
                  value=">1000"
                  detail="RECORDS_SCAN"
                />
              </div>

              <div className="col-span-2 bg-background/40 backdrop-blur-md p-8 border border-foreground/5 flex items-center justify-center relative overflow-hidden min-h-[400px] shadow-2xl">
                {/* Scanline overlay with defined linear gradient */}
                <div className="absolute inset-0 pointer-events-none [background-image:linear-gradient(to_bottom,transparent_50%,rgba(139,92,246,0.02)_50%)] [background-size:100%_4px] opacity-100" />

                <div className="space-y-8 w-full">
                  <div className="text-center">
                    <div className="text-[10px] font-mono font-bold text-primary uppercase tracking-[0.4em] mb-6">
                      Live Biometric Search Visualization
                    </div>
                    <BiometricScanner />
                  </div>

                  <div className="grid grid-cols-2 gap-8 border-t border-foreground/5 pt-8">
                    <div className="text-center">
                      <div className="text-[10px] font-mono text-foreground/30 uppercase mb-1">
                        Search Latency
                      </div>
                      <div className="text-xl font-light text-primary tracking-tighter">
                        &lt; 0.50 SEC
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-[10px] font-mono text-foreground/30 uppercase mb-1">
                        Match Accuracy
                      </div>
                      <div className="text-xl font-light text-primary tracking-tighter">
                        99.98%
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating HUD Elements */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[8px] font-mono text-green-500/60 uppercase font-bold">
                    System Online
                  </span>
                </div>
                <div className="absolute top-4 right-4 font-mono text-[8px] text-foreground/20">
                  COORD: 0.5435 / 123.0568
                </div>
              </div>

              {/* Additional Stats for Mobile */}
              <div className="md:hidden col-span-2 flex flex-col gap-4">
                <TerminalLog />
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center glass p-4">
                    <div className="text-[9px] font-mono text-foreground/30 uppercase mb-1">
                      Latency
                    </div>
                    <div className="text-lg font-light text-primary tracking-tighter">
                      &lt; 0.8s
                    </div>
                  </div>
                  <div className="text-center glass p-4">
                    <div className="text-[9px] font-mono text-foreground/30 uppercase mb-1">
                      Accuracy
                    </div>
                    <div className="text-lg font-light text-primary tracking-tighter">
                      99.9%
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Aesthetic Borders */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t border-l border-primary/20 pointer-events-none"></div>
      <div className="absolute top-8 right-8 w-16 h-16 border-t border-r border-primary/20 pointer-events-none"></div>
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b border-l border-primary/20 pointer-events-none"></div>
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b border-r border-primary/20 pointer-events-none"></div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary/40 to-transparent relative overflow-hidden">
          <motion.div
            animate={{
              top: ["-100%", "100%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-0 w-full h-1/2 bg-primary/80"
          />
        </div>
      </motion.div>
    </section>
  );
}

export default MainHero;
