"use client";

import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
} from "framer-motion";
import { useState, useEffect } from "react";

export function AthenaHeroParallax() {
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
        className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] bg-primary/5 rounded-full blur-[120px] will-change-transform"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute top-[20%] -right-[10%] w-[60vw] h-[60vw] bg-secondary/5 rounded-full blur-[100px] will-change-transform"
      />
    </div>
  );
}

export function AthenaHeroScrollIndicator() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <motion.div
      style={{ opacity }}
      className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
    >
      <div className="w-[1px] h-12 bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0" />
      <span className="text-[10px] font-mono text-foreground/30 tracking-widest uppercase">
        Scroll
      </span>
    </motion.div>
  );
}

export function AthenaHeroEntrance({
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

export function AthenaHeroImageEntrance({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
      className="w-full max-w-7xl group relative z-20 mb-[-100px] md:mb-[-220px]"
    >
      <div className="absolute inset-0 bg-primary/20 blur-[100px] opacity-0 group-hover:opacity-40 transition-opacity duration-1000 -z-10" />
      {children}
    </motion.div>
  );
}
