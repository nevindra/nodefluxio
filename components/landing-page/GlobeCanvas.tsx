"use client";

import { useEffect, useRef, useCallback } from "react";
import createGlobe from "cobe";

// International deployment locations
const internationalLocations = [
  { lat: 10.8231, lng: 106.6297 },
  { lat: 25.2048, lng: 55.2708 },
  { lat: 23.8103, lng: 90.4125 },
  { lat: 25.033, lng: 121.5654 },
  { lat: 44.4268, lng: 26.1025 },
  { lat: 29.3759, lng: 47.9774 },
  { lat: 37.9838, lng: 23.7275 },
];

// Indonesia deployment locations
const indonesiaLocations = [
  { lat: -6.2088, lng: 106.8456 },
  { lat: -7.2575, lng: 112.7508 },
  { lat: 3.5833, lng: 98.6667 },
  { lat: -5.1477, lng: 119.4189 },
  { lat: -8.65, lng: 115.2167 },
  { lat: -2.5916, lng: 140.7178 },
];

// Build cobe markers
const markers = [
  { location: [-6.2088, 106.8456] as [number, number], size: 0.1 },
  ...indonesiaLocations
    .filter((l) => l.lat !== -6.2088)
    .map((l) => ({
      location: [l.lat, l.lng] as [number, number],
      size: 0.05,
    })),
  ...internationalLocations.map((l) => ({
    location: [l.lat, l.lng] as [number, number],
    size: 0.07,
    color: [0.486, 0.227, 0.929] as [number, number, number],
  })),
];

export default function GlobeCanvas() {
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
  );
}
