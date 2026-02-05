"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import {
  Globe as GlobeIcon,
  MapPin,
  Broadcast,
  ShieldCheck,
} from "@phosphor-icons/react";

// Dynamic import to avoid SSR issues with Three.js
const Globe = dynamic(() => import("react-globe.gl"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-1 bg-foreground/10 overflow-hidden rounded-full">
          <div className="w-full h-full bg-primary animate-pulse" />
        </div>
        <span className="text-[10px] font-mono text-primary animate-pulse uppercase tracking-[0.3em]">
          Loading Globe...
        </span>
      </div>
    </div>
  ),
});

// Location data
const hubLocation = {
  name: "Jakarta",
  country: "Indonesia",
  lat: -6.2088,
  lng: 106.8456,
};

const indonesiaLocations = [
  {
    name: "Jakarta",
    country: "Indonesia",
    lat: -6.2088,
    lng: 106.8456,
    type: "hub",
  },
  {
    name: "Surabaya",
    country: "Indonesia",
    lat: -7.2575,
    lng: 112.7508,
    type: "domestic",
  },
  {
    name: "Medan",
    country: "Indonesia",
    lat: 3.5833,
    lng: 98.6667,
    type: "domestic",
  },
  {
    name: "Makassar",
    country: "Indonesia",
    lat: -5.1477,
    lng: 119.4189,
    type: "domestic",
  },
  {
    name: "Bali",
    country: "Indonesia",
    lat: -8.65,
    lng: 115.2167,
    type: "domestic",
  },
  {
    name: "Jayapura",
    country: "Indonesia",
    lat: -2.5916,
    lng: 140.7178,
    type: "domestic",
  },
];

const internationalLocations = [
  {
    name: "Ho Chi Minh City",
    country: "Vietnam",
    lat: 10.8231,
    lng: 106.6297,
    type: "international",
  },
  {
    name: "Dubai",
    country: "UAE",
    lat: 25.2048,
    lng: 55.2708,
    type: "international",
  },
  {
    name: "Dhaka",
    country: "Bangladesh",
    lat: 23.8103,
    lng: 90.4125,
    type: "international",
  },
  {
    name: "Taipei",
    country: "Taiwan",
    lat: 25.033,
    lng: 121.5654,
    type: "international",
  },
  {
    name: "Bucharest",
    country: "Romania",
    lat: 44.4268,
    lng: 26.1025,
    type: "international",
  },
  {
    name: "Kuwait City",
    country: "Kuwait",
    lat: 29.3759,
    lng: 47.9774,
    type: "international",
  },
  {
    name: "Athens",
    country: "Greece",
    lat: 37.9838,
    lng: 23.7275,
    type: "international",
  },
];

// All points for the globe
const allPoints = [...indonesiaLocations, ...internationalLocations];

// Arcs from Jakarta to international locations
const arcsData = internationalLocations.map((dest) => ({
  startLat: hubLocation.lat,
  startLng: hubLocation.lng,
  endLat: dest.lat,
  endLng: dest.lng,
  color: ["rgba(124, 58, 237, 0.8)", "rgba(124, 58, 237, 0.3)"], // Primary purple gradient
  name: `${hubLocation.name} → ${dest.country}`,
}));

export default function GlobalPresenceGL() {
  const globeRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [globeReady, setGlobeReady] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 500, height: 500 });
  const [hoveredPoint, setHoveredPoint] = useState<any>(null);
  const [countries, setCountries] = useState<any>({ features: [] });

  // Load country polygons
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson",
    )
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((err) => console.error("Failed to load countries:", err));
  }, []);

  // Handle resize
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        setDimensions({ width, height: width });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Auto-rotate and initial position
  useEffect(() => {
    if (globeRef.current && globeReady) {
      // Set initial view to Indonesia
      globeRef.current.pointOfView({ lat: -2, lng: 118, altitude: 2.5 }, 1000);

      // Enable auto-rotate
      globeRef.current.controls().autoRotate = true;
      globeRef.current.controls().autoRotateSpeed = 0.5;
      globeRef.current.controls().enableZoom = false;
    }
  }, [globeReady]);

  // Point color based on type
  const getPointColor = (point: any) => {
    if (point.type === "hub") return "#7c3aed"; // Primary purple
    if (point.type === "international") return "#7c3aed";
    return "#7c3aed80"; // Domestic - slightly transparent
  };

  // Point size based on type
  const getPointRadius = (point: any) => {
    if (point.type === "hub") return 0.8;
    if (point.type === "international") return 0.6;
    return 0.4;
  };

  return (
    <div className="relative w-full py-16 md:py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="max-w-7xl mb-8 md:mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center space-x-3 mb-8"
          >
            <div className="w-12 h-[2px] bg-primary"></div>
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
            Deployed across Indonesia&apos;s critical infrastructure with
            expanding international partnerships.
          </motion.p>
        </div>

        {/* Globe and Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Globe - hidden on mobile */}
          <motion.div
            ref={containerRef}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square max-w-[500px] mx-auto w-full hidden md:block"
          >
            <Globe
              ref={globeRef}
              width={dimensions.width}
              height={dimensions.height}
              onGlobeReady={() => setGlobeReady(true)}
              // Clean corporate style - subtle gray ocean matching theme
              globeImageUrl="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3Crect fill='%23f1f5f9' width='1' height='1'/%3E%3C/svg%3E"
              bumpImageUrl=""
              backgroundColor="rgba(0,0,0,0)"
              showGlobe={true}
              showAtmosphere={true}
              atmosphereColor="rgba(124, 58, 237, 0.15)"
              atmosphereAltitude={0.12}
              // Polygon countries - slightly darker than ocean for contrast
              polygonsData={countries.features}
              polygonCapColor={() => "#cbd5e1"}
              polygonSideColor={() => "#94a3b8"}
              polygonStrokeColor={() => "#94a3b8"}
              polygonAltitude={0.006}
              // Points
              pointsData={allPoints}
              pointLat="lat"
              pointLng="lng"
              pointColor={getPointColor}
              pointRadius={getPointRadius}
              pointAltitude={0.01}
              onPointHover={setHoveredPoint}
              // Labels - always visible for hub and international
              labelsData={allPoints.filter(
                (p) => p.type === "hub" || p.type === "international",
              )}
              labelLat="lat"
              labelLng="lng"
              labelText={(d: any) =>
                d.type === "hub" ? "Jakarta (HQ)" : d.country
              }
              labelSize={1.5}
              labelDotRadius={0}
              labelColor={() => "#4c1d95"}
              labelResolution={2}
              labelAltitude={0.02}
              labelIncludeDot={false}
              // Arcs
              arcsData={arcsData}
              arcStartLat="startLat"
              arcStartLng="startLng"
              arcEndLat="endLat"
              arcEndLng="endLng"
              arcColor="color"
              arcDashLength={0.5}
              arcDashGap={0.2}
              arcDashAnimateTime={2000}
              arcStroke={0.5}
              arcAltitudeAutoScale={0.4}
              arcLabel={(arc: any) => `
                <div style="
                  background: rgba(255,255,255,0.95);
                  backdrop-filter: blur(8px);
                  padding: 8px 12px;
                  border-radius: 6px;
                  border: 1px solid rgba(124,58,237,0.2);
                  font-family: system-ui, sans-serif;
                  font-size: 12px;
                  color: #7c3aed;
                  font-weight: 500;
                ">${arc.name}</div>
              `}
            />

            {/* Globe HUD */}
            <div className="absolute top-4 left-4 font-mono text-[9px] text-foreground/40 select-none flex flex-col gap-1 pointer-events-none">
              <div className="flex items-center gap-2">
                <Broadcast className="w-3 h-3 text-primary animate-pulse" />
                <span>GLOBAL_NET: ACTIVE</span>
              </div>
            </div>

            {/* Hover indicator */}
            {hoveredPoint && (
              <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
                <div className="bg-white/90 backdrop-blur-sm border border-black/10 rounded-lg p-3 shadow-lg">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-xs font-medium text-foreground">
                      {hoveredPoint.name}, {hoveredPoint.country}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </motion.div>

          {/* Info Cards */}
          <div className="space-y-6">
            {/* Indonesia Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6 border border-black/10 bg-black/[0.02]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 border border-primary/20 rounded-lg">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground uppercase tracking-tight">
                    Indonesia
                  </h3>
                  <p className="text-[10px] font-mono text-primary uppercase tracking-[0.2em]">
                    Nationwide Deployment
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
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
                  <div className="text-2xl font-light text-foreground">
                    100%
                  </div>
                  <div className="text-[9px] font-mono text-muted-foreground uppercase">
                    Coverage
                  </div>
                </div>
              </div>
            </motion.div>

            {/* International Partners */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-6 border border-black/10 bg-black/[0.02]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 border border-primary/20 rounded-lg">
                  <GlobeIcon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground uppercase tracking-tight">
                    International
                  </h3>
                  <p className="text-[10px] font-mono text-primary uppercase tracking-[0.2em]">
                    Global Partnerships
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {internationalLocations.map((loc, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 p-3 bg-white/50 border border-black/5 rounded-lg hover:border-primary/30 transition-colors"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <div>
                      <div className="text-sm font-medium text-foreground">
                        {loc.country}
                      </div>
                      <div className="text-[9px] font-mono text-muted-foreground uppercase">
                        {loc.name}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-3 p-4 bg-primary/5 border border-primary/20"
            >
              <ShieldCheck className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                All Systems Operational
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
