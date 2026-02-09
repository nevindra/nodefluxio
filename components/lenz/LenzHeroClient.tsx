"use client";

import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";

export function LenzHeroParallax() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollY } = useScroll();

  const staticY = useMotionValue(0);
  const y1Transform = useTransform(scrollY, [0, 500], [0, 200]);
  const y2Transform = useTransform(scrollY, [0, 500], [0, -150]);

  const y1 = isMobile ? staticY : y1Transform;
  const y2 = isMobile ? staticY : y2Transform;

  return (
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
  );
}

export function LenzHeroScrollIndicator() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <motion.div
      style={{ opacity }}
      className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
    >
      <div className="w-[1px] h-8 md:h-12 bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0" />
      <span className="text-[10px] font-mono text-foreground/30 tracking-widest uppercase">
        Scroll
      </span>
    </motion.div>
  );
}

export function LenzHeroEntrance({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function LenzHeroImageEntrance({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
      className="w-full max-w-7xl group relative z-20 mb-[-60px] sm:mb-[-80px] md:mb-[-120px] lg:mb-[-160px]"
    >
      <div className="absolute inset-0 bg-cyan-500/10 blur-[100px] opacity-0 group-hover:opacity-40 transition-opacity duration-1000 -z-10" />
      {children}
    </motion.div>
  );
}
