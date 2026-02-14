"use client";

import { useRef, useState, useEffect, memo } from "react";
import dynamic from "next/dynamic";
import { motion, animate, useInView } from "framer-motion";
import {
  Globe as GlobeIcon,
  MapPin,
  Users,
  Database,
  Lightning,
  Monitor,
} from "@phosphor-icons/react";

const GlobeCanvas = dynamic(
  () => import("@/components/landing-page/GlobeCanvas"),
  { ssr: false },
);

// International deployment locations
const internationalLocations = [
  { name: "Ho Chi Minh City", country: "Vietnam" },
  { name: "Dubai", country: "UAE" },
  { name: "Dhaka", country: "Bangladesh" },
  { name: "Taipei", country: "Taiwan" },
  { name: "Bucharest", country: "Romania" },
  { name: "Kuwait City", country: "Kuwait" },
  { name: "Athens", country: "Greece" },
];

export default function GlobalPresenceGL() {
  return (
    <div className="relative w-full py-16 md:py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-7xl mb-8 md:mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center space-x-3 mb-8"
          >
            <div className="w-12 h-[2px] bg-primary" />
            <span className="text-xs font-medium tracking-[0.4em] text-primary uppercase">
              Global Presence
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-medium tracking-tight mb-6 leading-tight text-foreground uppercase"
          >
            Nationwide Scale, <br />
            <span className="text-primary">International Reach.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-muted-foreground font-light leading-relaxed max-w-4xl"
          >
            From airports and city infrastructure across 34 provinces to
            international partnerships — our technology is trusted wherever
            security and efficiency matter most.
          </motion.p>
        </div>

        {/* Globe + Consolidated Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Globe - desktop only, lazy loaded client-only */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full hidden lg:block"
          >
            <GlobeCanvas />
          </motion.div>

          {/* Right Panel - All info consolidated */}
          <div className="space-y-6">
            {/* Indonesia */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-5 md:p-6 border border-black/10 bg-black/[0.02]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 border border-primary/20 rounded-lg">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="text-base font-medium text-foreground uppercase tracking-tight">
                    Indonesia
                  </h3>
                  <p className="text-[10px] font-mono text-primary uppercase tracking-[0.2em]">
                    Nationwide Deployment
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <div className="text-2xl font-light text-foreground">34</div>
                  <div className="text-[9px] font-mono text-muted-foreground uppercase">
                    Provinces
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-light text-foreground">50+</div>
                  <div className="text-[9px] font-mono text-muted-foreground uppercase">
                    Locations
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-light text-foreground">30+</div>
                  <div className="text-[9px] font-mono text-muted-foreground uppercase">
                    Major Events
                  </div>
                </div>
              </div>
            </motion.div>

            {/* International */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-5 md:p-6 border border-black/10 bg-black/[0.02]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 border border-primary/20 rounded-lg">
                  <GlobeIcon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="text-base font-medium text-foreground uppercase tracking-tight">
                    International
                  </h3>
                  <p className="text-[10px] font-mono text-primary uppercase tracking-[0.2em]">
                    7 Countries across 3 Continents
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {internationalLocations.map((loc, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-white/50 border border-black/5 rounded-full text-xs font-medium text-foreground hover:border-primary/30 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {loc.country}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Performance Stats - compact grid */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 gap-px bg-black/10 border border-black/10"
            >
              <MetricCell
                icon={Database}
                value={100}
                suffix="M+"
                label="Daily Data Points"
              />
              <MetricCell
                icon={Users}
                value={200}
                suffix="M+"
                label="Records Indexed"
              />
              <MetricCell
                icon={Lightning}
                value={500}
                prefix="<"
                suffix="ms"
                label="Search Latency"
              />
              <MetricCell
                icon={Monitor}
                value={10000}
                suffix="+"
                label="Live Connections"
              />
            </motion.div>

            {/* Partners */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-3 p-4 bg-primary/5 border border-primary/20"
            >
              <Users className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                100+ Partners Worldwide
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Compact metric cell for the 2x2 grid ---

function MetricCell({
  icon: Icon,
  value,
  suffix = "",
  prefix = "",
  label,
}: {
  icon: React.ComponentType<{ className?: string }>;
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}) {
  return (
    <div className="bg-background p-4 md:p-5 flex flex-col gap-1 group hover:bg-primary/[0.02] transition-colors">
      <Icon className="w-4 h-4 text-primary/50 mb-1" />
      <div className="text-xl md:text-2xl font-light text-foreground tracking-tight">
        <Counter value={value} prefix={prefix} suffix={suffix} />
      </div>
      <span className="text-[9px] font-mono text-muted-foreground uppercase tracking-wider leading-tight">
        {label}
      </span>
    </div>
  );
}

// --- Animated Counter ---

const Counter = memo(function Counter({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 2,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
}) {
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration,
        ease: [0.21, 0.45, 0.32, 0.9],
        onUpdate: (latest) => setDisplay(latest),
      });
      return controls.stop;
    }
  }, [value, isInView, duration]);

  return (
    <span ref={ref} className="tabular-nums font-medium">
      {prefix}
      {display.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
});
