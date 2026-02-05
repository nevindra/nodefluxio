"use client";

import { MonitorPlay } from "@phosphor-icons/react";
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

export function LenzHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(true); // Default to mobile to prevent heavy load on first render

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

  // Use static values on mobile, scroll-linked on desktop
  const y1 = isMobile ? staticY : y1Transform;
  const y2 = isMobile ? staticY : y2Transform;
  const opacity = isMobile ? staticOpacity : opacityTransform;

  return (
    <section
      ref={containerRef}
      className="relative pt-20 pb-0 overflow-visible bg-background border-b border-border/10"
    >
      {/* Background Ambience - Hidden on mobile for performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        <motion.div
          style={{ y: y1 }}
          className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] bg-cyan-500/5 rounded-full blur-[120px] will-change-transform"
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
              <MonitorPlay className="w-3 h-3 text-primary" />
              <span className="text-[10px] font-mono text-primary tracking-[0.2em] uppercase">
                Video Management System
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-medium tracking-wide text-foreground"
            >
              ALL CAMERAS, <br className="hidden sm:block" />
              <span className="text-muted-foreground">ONE DASHBOARD.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed px-2"
            >
              Monitor, analyze, and manage thousands of camera streams from one
              powerful, unified command center.
            </motion.p>
          </div>

          {/* Hero Image - Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="w-full max-w-7xl group relative z-20 mb-[-60px] sm:mb-[-80px] md:mb-[-120px] lg:mb-[-160px]"
          >
            <div className="absolute inset-0 bg-cyan-500/10 blur-[100px] opacity-0 group-hover:opacity-40 transition-opacity duration-1000 -z-10" />

            {/* Main Image Container */}
            <div className="relative aspect-[16/9] w-full">
              <Image
                src="/hero/lenz-hero.webp"
                alt="Lenz Dashboard - Unified Camera Management"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Stats Bar */}
            <div className="mt-2 md:mt-4">
              <div className="flex items-center justify-between gap-4 md:gap-8 max-w-4xl mx-auto">
                <StatItem value="1000+" label="Cameras Supported" />
                <div className="hidden sm:block w-px h-8 bg-border/50" />
                <StatItem value="24/7" label="Live Monitoring" />
                <div className="hidden sm:block w-px h-8 bg-border/50" />
                <StatItem value="<100ms" label="Stream Latency" />
                <div className="hidden md:block w-px h-8 bg-border/50" />
                <StatItem
                  value="99.9%"
                  label="Uptime SLA"
                  className="hidden md:flex"
                />
              </div>
            </div>
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

function StatItem({
  value,
  label,
  className = "",
}: {
  value: string;
  label: string;
  className?: string;
}) {
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      <span className="text-lg md:text-2xl font-medium text-foreground tracking-tight">
        {value}
      </span>
      <span className="text-[9px] md:text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
        {label}
      </span>
    </div>
  );
}
