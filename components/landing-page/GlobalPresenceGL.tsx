"use client";

import { useEffect, useRef, useCallback, useState, memo } from "react";
import createGlobe from "cobe";
import { motion, animate, useInView } from "framer-motion";
import {
  Globe as GlobeIcon,
  MapPin,
  Users,
  Database,
  Lightning,
  Monitor,
} from "@phosphor-icons/react";

// International deployment locations
const internationalLocations = [
  { name: "Ho Chi Minh City", country: "Vietnam", lat: 10.8231, lng: 106.6297 },
  { name: "Dubai", country: "UAE", lat: 25.2048, lng: 55.2708 },
  { name: "Dhaka", country: "Bangladesh", lat: 23.8103, lng: 90.4125 },
  { name: "Taipei", country: "Taiwan", lat: 25.033, lng: 121.5654 },
  { name: "Bucharest", country: "Romania", lat: 44.4268, lng: 26.1025 },
  { name: "Kuwait City", country: "Kuwait", lat: 29.3759, lng: 47.9774 },
  { name: "Athens", country: "Greece", lat: 37.9838, lng: 23.7275 },
];

// Indonesia deployment locations
const indonesiaLocations = [
  { name: "Jakarta", lat: -6.2088, lng: 106.8456 },
  { name: "Surabaya", lat: -7.2575, lng: 112.7508 },
  { name: "Medan", lat: 3.5833, lng: 98.6667 },
  { name: "Makassar", lat: -5.1477, lng: 119.4189 },
  { name: "Bali", lat: -8.65, lng: 115.2167 },
  { name: "Jayapura", lat: -2.5916, lng: 140.7178 },
];

// Build cobe markers
const markers = [
  // Hub - Jakarta (larger)
  { location: [-6.2088, 106.8456] as [number, number], size: 0.1 },
  // Indonesia domestic
  ...indonesiaLocations
    .filter((l) => l.name !== "Jakarta")
    .map((l) => ({
      location: [l.lat, l.lng] as [number, number],
      size: 0.05,
    })),
  // International (distinct color)
  ...internationalLocations.map((l) => ({
    location: [l.lat, l.lng] as [number, number],
    size: 0.07,
    color: [0.486, 0.227, 0.929] as [number, number, number],
  })),
];

export default function GlobalPresenceGL() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const phiRef = useRef(1.85);

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    pointerInteracting.current = e.clientX - pointerInteractionMovement.current;
    if (canvasRef.current) canvasRef.current.style.cursor = "grabbing";
  }, []);

  const onPointerUp = useCallback(() => {
    pointerInteracting.current = null;
    if (canvasRef.current) canvasRef.current.style.cursor = "grab";
  }, []);

  const onPointerOut = useCallback(() => {
    pointerInteracting.current = null;
    if (canvasRef.current) canvasRef.current.style.cursor = "grab";
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (pointerInteracting.current !== null) {
      const delta = e.clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      phiRef.current = delta / 200;
    }
  }, []);

  useEffect(() => {
    let width = 0;

    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };
    onResize();
    window.addEventListener("resize", onResize);

    let globe: ReturnType<typeof createGlobe> | undefined;

    if (canvasRef.current) {
      globe = createGlobe(canvasRef.current, {
        devicePixelRatio: 2,
        width: width * 2,
        height: width * 2,
        phi: phiRef.current,
        theta: 0.15,
        dark: 0,
        diffuse: 1.2,
        mapSamples: 24000,
        mapBrightness: 2,
        mapBaseBrightness: 0.02,
        baseColor: [0.91, 0.93, 0.96],
        markerColor: [0.486, 0.227, 0.929],
        glowColor: [0.91, 0.93, 0.96],
        markers,
        scale: 1.05,
        opacity: 0.85,
        onRender: (state) => {
          if (pointerInteracting.current === null) {
            phiRef.current += 0.003;
          }
          state.phi = phiRef.current;
          state.width = width * 2;
          state.height = width * 2;
        },
      });
    }

    return () => {
      globe?.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, []);

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
          {/* Globe - desktop only */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full hidden lg:block"
          >
            <div className="relative aspect-square max-w-[520px] mx-auto">
              <canvas
                ref={canvasRef}
                onPointerDown={onPointerDown}
                onPointerUp={onPointerUp}
                onPointerOut={onPointerOut}
                onPointerMove={onPointerMove}
                className="w-full h-full cursor-grab"
                style={{ contain: "layout paint size" }}
              />
              <div className="absolute top-4 right-4 flex flex-col gap-1.5 pointer-events-none">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                  <span className="text-[10px] font-mono text-foreground/50 uppercase tracking-wider">
                    International
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary/40" />
                  <span className="text-[10px] font-mono text-foreground/50 uppercase tracking-wider">
                    Indonesia
                  </span>
                </div>
              </div>
            </div>
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
