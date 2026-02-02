"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { AnimatePresence, animate, motion, useInView } from "framer-motion";
import {
    Anchor,
    CheckCircle,
    Database,
    Globe,
    Stack,
    MapPin,
    Monitor,
    Airplane,
    Broadcast,
    MagnifyingGlass,
    ShieldCheck,
    TrendUp,
    Users,
    Lightning,
} from "@phosphor-icons/react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { ReactNode, useEffect, useRef, useState, memo, useMemo } from "react";

// --- Data ---
const locations = [
    { id: 1, name: "Sultan Iskandar Muda", city: "Aceh", coords: [95.4202, 5.5222], type: "Airport" },
    { id: 2, name: "Kuala Namu", city: "Medan", coords: [98.8852, 3.6422], type: "Airport" },
    { id: 3, name: "Soekarno-Hatta", city: "Jakarta", coords: [106.6559, -6.1256], type: "Airport" },
    { id: 4, name: "Juanda", city: "Surabaya", coords: [112.7847, -7.3798], type: "Airport" },
    { id: 5, name: "Ngurah Rai", city: "Bali", coords: [115.1668, -8.7481], type: "Airport" },
    { id: 6, name: "Sultan Hasanuddin", city: "Makassar", coords: [119.5544, -5.0611], type: "Airport" },
    { id: 7, name: "Sepinggan", city: "Balikpapan", coords: [116.8944, -1.2683], type: "Airport" },
    { id: 8, name: "Sentani", city: "Jayapura", coords: [140.5161, -2.5781], type: "Airport" },
    { id: 9, name: "Yogyakarta Intl", city: "Yogyakarta", coords: [110.0622, -7.9133], type: "Airport" },
    { id: 10, name: "Belawan Port", city: "Medan", coords: [98.6942, 3.7828], type: "Harbor" },
    { id: 11, name: "Tanjung Priok", city: "Jakarta", coords: [106.8833, -6.1], type: "Harbor" },
    { id: 12, name: "Tanjung Perak", city: "Surabaya", coords: [112.7214, -7.2], type: "Harbor" },
    { id: 13, name: "Makassar Port", city: "Makassar", coords: [119.4122, -5.1167], type: "Harbor" },
    { id: 14, name: "Jayapura Port", city: "Jayapura", coords: [140.7042, -2.5333], type: "Harbor" },
    { id: 15, name: "Benoa Port", city: "Bali", coords: [115.2166, -8.75], type: "Harbor" },
    { id: 16, name: "Banda Aceh", city: "Aceh", coords: [95.3222, 5.5483], type: "Capital" },
    { id: 17, name: "Medan", city: "Sumatera Utara", coords: [98.6667, 3.5833], type: "Capital" },
    { id: 18, name: "Padang", city: "Sumatera Barat", coords: [100.3544, -0.9492], type: "Capital" },
    { id: 19, name: "Pekanbaru", city: "Riau", coords: [101.4500, 0.5071], type: "Capital" },
    { id: 20, name: "Tanjung Pinang", city: "Kepulauan Riau", coords: [104.4581, 0.9186], type: "Capital" },
    { id: 21, name: "Jambi", city: "Jambi", coords: [103.6131, -1.6101], type: "Capital" },
    { id: 22, name: "Palembang", city: "Sumatera Selatan", coords: [104.7458, -2.9761], type: "Capital" },
    { id: 23, name: "Bengkulu", city: "Bengkulu", coords: [102.2655, -3.7928], type: "Capital" },
    { id: 24, name: "Bandar Lampung", city: "Lampung", coords: [105.2619, -5.4294], type: "Capital" },
    { id: 25, name: "Pangkal Pinang", city: "Bangka Belitung", coords: [106.1167, -2.1167], type: "Capital" },
    { id: 26, name: "Jakarta", city: "DKI Jakarta", coords: [106.8456, -6.2088], type: "Capital" },
    { id: 27, name: "Bandung", city: "Jawa Barat", coords: [107.6191, -6.9175], type: "Capital" },
    { id: 28, name: "Semarang", city: "Jawa Tengah", coords: [110.4203, -6.9666], type: "Capital" },
    { id: 29, name: "Yogyakarta", city: "DI Yogyakarta", coords: [110.3667, -7.7956], type: "Capital" },
    { id: 30, name: "Surabaya", city: "Jawa Timur", coords: [112.7508, -7.2575], type: "Capital" },
    { id: 31, name: "Serang", city: "Banten", coords: [106.1503, -6.1103], type: "Capital" },
    { id: 32, name: "Denpasar", city: "Bali", coords: [115.2167, -8.6500], type: "Capital" },
    { id: 33, name: "Mataram", city: "NTB", coords: [116.1167, -8.5833], type: "Capital" },
    { id: 34, name: "Kupang", city: "NTT", coords: [123.5850, -10.1772], type: "Capital" },
    { id: 35, name: "Pontianak", city: "Kalimantan Barat", coords: [109.3425, -0.0263], type: "Capital" },
    { id: 36, name: "Palangkaraya", city: "Kalimantan Tengah", coords: [113.9108, -2.2136], type: "Capital" },
    { id: 37, name: "Banjarmasin", city: "Kalimantan Selatan", coords: [114.5917, -3.3167], type: "Capital" },
    { id: 38, name: "Samarinda", city: "Kalimantan Timur", coords: [117.1500, 0.5000], type: "Capital" },
    { id: 39, name: "Tanjung Selor", city: "Kalimantan Utara", coords: [117.3667, 2.8500], type: "Capital" },
    { id: 40, name: "Manado", city: "Sulawesi Utara", coords: [124.8422, 1.4748], type: "Capital" },
    { id: 41, name: "Gorontalo", city: "Gorontalo", coords: [123.0568, 0.5435], type: "Capital" },
    { id: 42, name: "Palu", city: "Sulawesi Tengah", coords: [119.8707, -0.8917], type: "Capital" },
    { id: 43, name: "Makassar", city: "Sulawesi Selatan", coords: [119.4189, -5.1477], type: "Capital" },
    { id: 44, name: "Kendari", city: "Sulawesi Tenggara", coords: [122.5150, -3.9675], type: "Capital" },
    { id: 45, name: "Mamuju", city: "Sulawesi Barat", coords: [118.8881, -2.6748], type: "Capital" },
    { id: 46, name: "Ambon", city: "Maluku", coords: [128.1833, -3.6954], type: "Capital" },
    { id: 47, name: "Sofifi", city: "Maluku Utara", coords: [127.5594, 0.7346], type: "Capital" },
    { id: 48, name: "Manokwari", city: "Papua Barat", coords: [134.0833, -0.8667], type: "Capital" },
    { id: 49, name: "Jayapura", city: "Papua", coords: [140.7178, -2.5916], type: "Capital" },
    { id: 50, name: "Nusantara", city: "IKN", coords: [116.7025, -1.0829], type: "Capital" },
];

const MAP_STYLE = "https://tiles.openfreemap.org/styles/liberty";

// --- Components from Stats.tsx ---

interface CounterProps {
    value: number;
    prefix?: string;
    suffix?: string;
    decimals?: number;
    duration?: number;
}

const Counter = memo(({ value, prefix = "", suffix = "", decimals = 0, duration = 2 }: CounterProps) => {
    const [display, setDisplay] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            const controls = animate(0, value, {
                duration: duration,
                ease: [0.21, 0.45, 0.32, 0.9],
                onUpdate: (latest) => setDisplay(latest),
            });
            return controls.stop;
        }
    }, [value, isInView, duration]);

    return (
        <span ref={ref} className="tabular-nums font-medium">
            {prefix}{display.toLocaleString(undefined, {
                minimumFractionDigits: decimals,
                maximumFractionDigits: decimals
            })}{suffix}
        </span>
    );
});

interface StatCardProps {
    title: string;
    value: number;
    suffix?: string;
    prefix?: string;
    subtext: string;
    detail?: string;
    icon: ReactNode;
    index: number;
    className?: string;
    decimals?: number;
    color?: "primary" | "secondary" | "tertiary";
    variant?: "default" | "hero";
}

const MotionCard = motion(Card);

const StatCard = memo(({ title, value, suffix, prefix, subtext, detail, icon, index, className = "", decimals = 0, color = "primary", variant = "default" }: StatCardProps) => {
    const colorClass = {
        primary: "group-hover:text-primary",
        secondary: "group-hover:text-secondary",
        tertiary: "group-hover:text-tertiary"
    };

    const bgGlow = {
        primary: "group-hover:bg-primary/5",
        secondary: "group-hover:bg-secondary/5",
        tertiary: "group-hover:bg-tertiary/5"
    };



    return (
        <MotionCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={cn(
                "group relative overflow-hidden bg-background/50 backdrop-blur-sm border-black/5 hover:border-primary/20 transition-all duration-500 flex flex-col",
                variant === 'hero' ? 'min-h-[320px]' : 'min-h-[280px]',
                className
            )}
        >
            <div className={`absolute inset-0 transition-colors duration-700 ${bgGlow[color]}`} />

            <CardHeader className="relative z-10 flex flex-row items-start justify-between p-8 pb-0">
                <div className={`p-3 glass border-black/5 ${colorClass[color]} transition-colors duration-300`}>
                    {icon}
                </div>
                <div className="flex flex-col items-end">
                    <span className="text-[10px] font-medium tracking-[0.2em] text-primary uppercase">
                        {detail}
                    </span>
                    {variant === 'hero' && (
                        <div className="flex items-center gap-1.5 mt-2">
                            <TrendUp className="w-3 h-3 text-green-600/50" />
                            <span className="text-[9px] font-mono text-green-600/50 font-medium">LIVE_THROUGHPUT</span>
                        </div>
                    )}
                </div>
            </CardHeader>

            <CardContent className="relative z-10 p-8 pt-6 mt-auto">
                <div className={`${variant === 'hero' ? 'text-4xl md:text-6xl' : 'text-3xl lg:text-4xl'} font-light font-sans tracking-tighter text-foreground mb-4`}>
                    <Counter value={value} suffix={suffix} prefix={prefix} decimals={decimals} duration={variant === 'hero' ? 2.5 : 2} />
                </div>
                <h3 className={`${variant === 'hero' ? 'text-lg' : 'text-sm'} font-medium text-primary mb-2 uppercase tracking-wider`}>{title}</h3>
                <p className={`text-muted-foreground ${variant === 'hero' ? 'text-sm' : 'text-xs leading-relaxed'} font-light`}>
                    {subtext}
                </p>
            </CardContent>

            <div className={`absolute bottom-0 left-0 h-[2px] w-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ${color === 'primary' ? 'bg-primary' : color === 'secondary' ? 'bg-secondary' : 'bg-tertiary'}`} />
        </MotionCard>
    );
});

// --- Main Component ---

export default function NationalIntelligence() {
    const mapContainer = useRef<HTMLDivElement>(null);
    const map = useRef<maplibregl.Map | null>(null);
    const [hoveredLocation, setHoveredLocation] = useState<any>(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => {
        if (!mapContainer.current || isMobile) return;

        map.current = new maplibregl.Map({
            container: mapContainer.current,
            style: MAP_STYLE,
            center: [118, -2],
            zoom: 4.2,
            attributionControl: false,
            scrollZoom: false,
            dragPan: false,
            maxBounds: [
                [94, -12],
                [142, 8]
            ],
        });

        map.current.on("load", () => {
            setIsLoaded(true);
        });

        const timer = setTimeout(() => {
            if (!isLoaded) setIsLoaded(true);
        }, 3000);

        return () => {
            clearTimeout(timer);
            map.current?.remove();
        };
    }, [isMobile]);

    useEffect(() => {
        if (!map.current || !isLoaded || isMobile) return;

        const markers: maplibregl.Marker[] = [];

        locations.forEach((loc) => {
            const el = document.createElement("div");
            el.className = "custom-marker";

            const pulse = document.createElement("div");
            pulse.className = "marker-pulse";
            el.appendChild(pulse);

            const dot = document.createElement("div");
            dot.className = "marker-dot";
            el.appendChild(dot);

            const marker = new maplibregl.Marker({ element: el })
                .setLngLat(loc.coords as [number, number])
                .addTo(map.current!);

            const handleInteract = () => setHoveredLocation(loc);
            const handleLeave = () => setHoveredLocation(null);

            el.addEventListener("mouseenter", handleInteract);
            el.addEventListener("mouseleave", handleLeave);

            markers.push(marker);
        });

        return () => {
            markers.forEach(m => m.remove());
        };
    }, [isLoaded, isMobile]);

    const mapStats = useMemo(() => ({
        Airport: locations.filter(l => l.type === "Airport").length,
        Harbor: locations.filter(l => l.type === "Harbor").length,
        Capital: locations.filter(l => l.type === "Capital").length,
    }), []);

    return (
        <div className="relative w-full min-h-screen py-16 md:py-24 bg-background overflow-hidden font-futura">
            <style jsx global>{`
                .custom-marker {
                    width: 12px;
                    height: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    z-index: 10;
                }
                .marker-dot {
                    width: 6px;
                    height: 6px;
                    background: hsl(var(--primary));
                    border-radius: 50%;
                    box-shadow: 0 0 10px hsl(var(--primary));
                }
                .marker-pulse {
                    position: absolute;
                    width: 20px;
                    height: 20px;
                    border: 1px solid hsl(var(--primary));
                    border-radius: 50%;
                    animation: pulse 2s infinite ease-out;
                    opacity: 0;
                }
                @keyframes pulse {
                    0% { transform: scale(0.5); opacity: 0.8; }
                    100% { transform: scale(2.5); opacity: 0; }
                }
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: rgba(0, 0, 0, 0.02);
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(139, 92, 246, 0.2);
                    border-radius: 10px;
                }
            `}</style>

            <div className="absolute inset-0 bg-grid-scanlines opacity-[0.03] pointer-events-none z-10" />

            <div className="max-w-7xl relative z-20 mx-auto px-4">
                {/* Unified Header */}
                <div className="max-w-7xl mb-2 md:mb-4">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-3 mb-8"
                    >
                        <div className="w-12 h-[2px] bg-primary"></div>
                        <span className="text-xs font-medium tracking-[0.4em] text-primary uppercase">National Grid Intelligence</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-3xl font-medium tracking-tight mb-6 leading-tight text-foreground uppercase"
                    >
                        Processing Scale <br />
                        <span className="text-primary">Deployed Nationwide.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-base md:text-lg text-muted-foreground font-light leading-relaxed max-w-4xl"
                    >
                        Orchestrating AI deployments across Indonesia's critical infrastructure,
                        handling massive data throughput with sub-second precision at the edge.
                    </motion.p>
                </div>

                {/* Map Integration */}
                <div className="relative group mb-4 md:mb-8">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 blur transition duration-500"></div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative w-full aspect-video md:aspect-[21/9] glass overflow-hidden border-black/5 bg-black/[0.02]"
                    >
                        {!isMobile ? (
                            <>
                                <div ref={mapContainer} className="absolute inset-0 w-full h-full" />

                                {!isLoaded && (
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-20">
                                        <div className="flex flex-col items-center gap-4">
                                            <div className="w-12 h-1 bg-white/10 overflow-hidden">
                                                <div className="w-full h-full bg-primary animate-scan-x" />
                                            </div>
                                            <span className="text-[10px] font-mono text-primary animate-pulse uppercase tracking-[0.3em]">Mapping Network...</span>
                                        </div>
                                    </div>
                                )}

                                {/* HUD Overlay */}
                                <div className="absolute top-6 left-6 font-mono text-[9px] text-foreground/40 select-none z-10 flex flex-col gap-1">
                                    <div className="flex items-center gap-2">
                                        <Broadcast className="w-3 h-3 text-primary animate-pulse" />
                                        <span>SAT_LNK: ACTIVE [IND_01]</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Stack className="w-3 h-3" />
                                        <span>GRID_COORD: 118.01 / -2.53</span>
                                    </div>
                                </div>

                                <div className="absolute bottom-6 left-6 z-10 flex flex-col gap-4">
                                    <div className="flex items-end space-x-3">
                                        <div className="text-5xl font-light tracking-tighter text-foreground">100%</div>
                                        <div className="text-[9px] font-mono text-foreground/40 mb-1 leading-tight uppercase">
                                            Network<br />Coverage
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 bg-white/60 backdrop-blur-md px-3 py-1.5 border border-primary/20">
                                        <ShieldCheck className="w-4 h-4 text-primary" />
                                        <span className="text-[10px] font-mono font-medium tracking-widest text-primary uppercase">All Systems Active</span>
                                    </div>
                                </div>

                                <AnimatePresence>
                                    {hoveredLocation && (
                                        <motion.div
                                            initial={{ opacity: 0, x: -20, scale: 0.95 }}
                                            animate={{ opacity: 1, x: 0, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none"
                                        >
                                            <div className="bg-background/95 backdrop-blur-2xl px-6 py-4 border border-primary/30 shadow-2xl min-w-[280px]">
                                                <div className="flex justify-between items-start mb-3">
                                                    <div>
                                                        <div className="flex items-center gap-2 mb-1">
                                                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                                            <p className="text-[10px] font-mono text-primary uppercase tracking-[0.2em]">
                                                                {hoveredLocation.type} NODE
                                                            </p>
                                                        </div>
                                                        <h3 className="text-xl font-light tracking-tight text-foreground leading-tight">
                                                            {hoveredLocation.name}
                                                        </h3>
                                                    </div>
                                                    <div className="p-2 border border-black/5 rounded-sm">
                                                        {hoveredLocation.type === "Airport" ? <Airplane className="w-5 h-5 text-primary" /> :
                                                            hoveredLocation.type === "Harbor" ? <Anchor className="w-5 h-5 text-primary" /> :
                                                                <MapPin className="w-5 h-5 text-primary" />}
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-2 gap-4 border-t border-black/5 pt-3">
                                                    <div>
                                                        <p className="text-[8px] font-mono text-muted-foreground uppercase mb-0.5">Location</p>
                                                        <p className="text-xs font-medium tracking-wide text-foreground">{hoveredLocation.city}, ID</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-[8px] font-mono text-muted-foreground uppercase mb-0.5">Status</p>
                                                        <p className="text-xs font-medium tracking-wide text-green-600">Active</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <div className="absolute inset-0 pointer-events-none">
                                    <div className="h-full w-px bg-primary/20 absolute animate-scan-x opacity-30 shadow-[0_0_15px_rgba(var(--primary-rgb),0.5)]" />
                                </div>
                            </>
                        ) : (
                            <div className="flex flex-col h-full p-6">
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-2">
                                        <Broadcast className="w-4 h-4 text-primary animate-pulse" />
                                        <span className="text-[10px] font-mono text-primary uppercase tracking-[0.2em]">Network Status</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                        <span className="text-[9px] font-mono text-green-600 uppercase">All Active</span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-3 gap-3 flex-1">
                                    <div className="flex flex-col items-center justify-center p-4 bg-black/[0.02] border border-black/5 rounded-lg">
                                        <div className="p-2 border border-primary/20 rounded-full mb-3">
                                            <Airplane className="w-5 h-5 text-primary" />
                                        </div>
                                        <span className="text-2xl font-light text-foreground mb-1">{mapStats.Airport}</span>
                                        <span className="text-[9px] font-mono text-muted-foreground uppercase tracking-wider">Airports</span>
                                    </div>
                                    <div className="flex flex-col items-center justify-center p-4 bg-black/[0.02] border border-black/5 rounded-lg">
                                        <div className="p-2 border border-primary/20 rounded-full mb-3">
                                            <Anchor className="w-5 h-5 text-primary" />
                                        </div>
                                        <span className="text-2xl font-light text-foreground mb-1">{mapStats.Harbor}</span>
                                        <span className="text-[9px] font-mono text-muted-foreground uppercase tracking-wider">Harbors</span>
                                    </div>
                                    <div className="flex flex-col items-center justify-center p-4 bg-black/[0.02] border border-black/5 rounded-lg">
                                        <div className="p-2 border border-primary/20 rounded-full mb-3">
                                            <MapPin className="w-5 h-5 text-primary" />
                                        </div>
                                        <span className="text-2xl font-light text-foreground mb-1">{mapStats.Capital}</span>
                                        <span className="text-[9px] font-mono text-muted-foreground uppercase tracking-wider">Capitals</span>
                                    </div>
                                </div>

                                <div className="mt-4 pt-4 border-t border-black/5">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-[10px] font-mono text-muted-foreground uppercase mb-1">Total Deployment</p>
                                            <p className="text-xl font-light text-foreground">{locations.length} <span className="text-sm text-muted-foreground">Nodes</span></p>
                                        </div>
                                        <div className="flex items-center gap-2 px-3 py-1.5 bg-primary/5 border border-primary/20 rounded-full">
                                            <ShieldCheck className="w-4 h-4 text-primary" />
                                            <span className="text-[9px] font-mono text-primary uppercase tracking-wider">100% Coverage</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <StatCard
                        index={0}
                        title="Daily Throughput"
                        value={100}
                        suffix="M+"
                        subtext="Analyzing 100M+ data points daily across national infrastructure."
                        detail="PROCESSING"
                        icon={<Database className="w-6 h-6" />}
                        color="primary"
                    />
                    <StatCard
                        index={1}
                        title="Record Matching"
                        value={200}
                        suffix="M+"
                        subtext="Querying a pool of 200M+ biometric records for instant ID."
                        detail="SEARCH"
                        icon={<MagnifyingGlass className="w-6 h-6" />}
                        color="primary"
                    />
                    <StatCard
                        index={2}
                        title="Search Velocity"
                        value={1}
                        prefix="<"
                        suffix=" SEC"
                        subtext="Retrieving precise matches from records in sub-second response."
                        detail="LATENCY"
                        icon={<Lightning className="w-6 h-6" />}
                        color="primary"
                    />
                    <StatCard
                        index={3}
                        title="Live Connections"
                        value={10000}
                        suffix="+"
                        subtext="Handling over 10,000 active data streams across the network."
                        detail="CONNECTIVITY"
                        icon={<Monitor className="w-6 h-6" />}
                        color="primary"
                    />
                </div>

                {/* Footer Badges */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-12 border-t border-black/10">
                    <div className="flex items-center gap-4 border border-black/10 p-6 hover:bg-primary/[0.03] transition-all bg-black/[0.02]">
                        <Globe className="w-5 h-5 text-primary" />
                        <div>
                            <div className="text-xl font-medium text-foreground leading-none mb-1 uppercase tracking-tight">34 Provinces</div>
                            <div className="text-[10px] font-medium text-primary uppercase tracking-[0.2em]">National Grid</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 border border-black/10 p-6 hover:bg-primary/[0.03] transition-all bg-black/[0.02]">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <div>
                            <div className="text-xl font-medium text-foreground leading-none mb-1 uppercase tracking-tight">30+ Major Events</div>
                            <div className="text-[10px] font-medium text-primary uppercase tracking-[0.2em]">Success Record</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 border border-black/10 p-6 hover:bg-primary/[0.03] transition-all bg-black/[0.02]">
                        <Users className="w-5 h-5 text-primary" />
                        <div>
                            <div className="text-xl font-medium text-foreground leading-none mb-1 uppercase tracking-tight">100+ Partners</div>
                            <div className="text-[10px] font-medium text-primary uppercase tracking-[0.2em]">Global Network</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
