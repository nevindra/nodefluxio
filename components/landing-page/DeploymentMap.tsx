"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Anchor, Layers, MapPin, Plane, Satellite, ShieldCheck } from "lucide-react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { useEffect, useRef, useState } from "react";

// Marker data
const locations = [
    // Major Airports
    { id: 1, name: "Sultan Iskandar Muda", city: "Aceh", coords: [95.4202, 5.5222], type: "Airport" },
    { id: 2, name: "Kuala Namu", city: "Medan", coords: [98.8852, 3.6422], type: "Airport" },
    { id: 3, name: "Soekarno-Hatta", city: "Jakarta", coords: [106.6559, -6.1256], type: "Airport" },
    { id: 4, name: "Juanda", city: "Surabaya", coords: [112.7847, -7.3798], type: "Airport" },
    { id: 5, name: "Ngurah Rai", city: "Bali", coords: [115.1668, -8.7481], type: "Airport" },
    { id: 6, name: "Sultan Hasanuddin", city: "Makassar", coords: [119.5544, -5.0611], type: "Airport" },
    { id: 7, name: "Sepinggan", city: "Balikpapan", coords: [116.8944, -1.2683], type: "Airport" },
    { id: 8, name: "Sentani", city: "Jayapura", coords: [140.5161, -2.5781], type: "Airport" },
    { id: 9, name: "Yogyakarta Intl", city: "Yogyakarta", coords: [110.0622, -7.9133], type: "Airport" },

    // Major Harbors
    { id: 10, name: "Belawan Port", city: "Medan", coords: [98.6942, 3.7828], type: "Harbor" },
    { id: 11, name: "Tanjung Priok", city: "Jakarta", coords: [106.8833, -6.1], type: "Harbor" },
    { id: 12, name: "Tanjung Perak", city: "Surabaya", coords: [112.7214, -7.2], type: "Harbor" },
    { id: 13, name: "Makassar Port", city: "Makassar", coords: [119.4122, -5.1167], type: "Harbor" },
    { id: 14, name: "Jayapura Port", city: "Jayapura", coords: [140.7042, -2.5333], type: "Harbor" },
    { id: 15, name: "Benoa Port", city: "Bali", coords: [115.2166, -8.75], type: "Harbor" },

    // Provincial Capitals
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

const MAP_STYLE = "https://tiles.openfreemap.org/styles/dark";

export default function DeploymentMap() {
    const mapContainer = useRef<HTMLDivElement>(null);
    const map = useRef<maplibregl.Map | null>(null);
    const [hoveredLocation, setHoveredLocation] = useState<any>(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [activeTab, setActiveTab] = useState<"Airport" | "Harbor" | "Capital">("Airport");

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
            center: [118, -2], // Centered on Indonesia
            zoom: 4.5,
            attributionControl: false,
            scrollZoom: false,
            dragPan: false, // Lock map position
            maxBounds: [
                [94, -12],  // Southwest: [lng, lat]
                [142, 8]    // Northeast: [lng, lat]
            ],
        });

        map.current.on("load", () => {
            setIsLoaded(true);
        });

        map.current.on("click", () => {
            setHoveredLocation(null);
        });

        // Fallback for markers if load is slow
        const timer = setTimeout(() => {
            if (!isLoaded) setIsLoaded(true);
        }, 3000);

        return () => {
            clearTimeout(timer);
            map.current?.remove();
        };
    }, [isMobile]); // Re-initialize when mobile status changes

    // Create markers after map is loaded
    useEffect(() => {
        if (!map.current || !isLoaded || isMobile) return;

        const markers: maplibregl.Marker[] = [];

        locations.forEach((loc) => {
            // Create a DOM element for the marker
            const el = document.createElement("div");
            el.className = "custom-marker";

            // Pulsing effect wrapper
            const pulse = document.createElement("div");
            pulse.className = "marker-pulse";
            el.appendChild(pulse);

            const dot = document.createElement("div");
            dot.className = "marker-dot";
            el.appendChild(dot);

            // Add marker to map
            const marker = new maplibregl.Marker({ element: el })
                .setLngLat(loc.coords as [number, number])
                .addTo(map.current!);

            // Interaction
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

    const filteredLocations = locations.filter(loc => loc.type === activeTab);
    const stats = {
        Airport: locations.filter(l => l.type === "Airport").length,
        Harbor: locations.filter(l => l.type === "Harbor").length,
        Capital: locations.filter(l => l.type === "Capital").length,
    };

    return (
        <div className="relative w-full min-h-screen flex items-center overflow-hidden bg-background py-20 px-4">
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
                    background: rgba(255, 255, 255, 0.02);
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(var(--primary-rgb), 0.2);
                    border-radius: 10px;
                }
            `}</style>

            {/* Background elements */}
            <div className="absolute inset-0 bg-grid-scanlines opacity-5 pointer-events-none z-10" />

            <div className="container mx-auto px-4 relative z-20">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
                    <div className="max-w-8xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center space-x-2 mb-4"
                        >
                            <span className="w-8 h-px bg-primary/50"></span>
                            <span className="text-[10px] md:text-sm font-mono tracking-[0.3em] text-primary uppercase">
                                Operational Intelligence
                            </span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-7xl font-light tracking-tighter mb-6 leading-none"
                        >
                            Nationwide <br className="md:hidden" /> Scale
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-muted-foreground text-lg md:text-xl font-light leading-relaxed max-w-2xl"
                        >
                            Orchestrating AI deployments across Indonesia's critical infrastructure points, ensuring security and efficiency at the edge.
                        </motion.p>
                    </div>

                    {!isMobile && (
                        <div className="flex flex-wrap gap-4">
                            <div className="flex items-center space-x-2 glass px-4 py-2 hover:bg-white/5 transition-colors">
                                <Plane className="w-4 h-4 text-primary" />
                                <span className="text-xs font-mono uppercase tracking-wider">Airports</span>
                            </div>
                            <div className="flex items-center space-x-2 glass px-4 py-2 hover:bg-white/5 transition-colors">
                                <Anchor className="w-4 h-4 text-primary" />
                                <span className="text-xs font-mono uppercase tracking-wider">Harbors</span>
                            </div>
                            <div className="flex items-center space-x-2 glass px-4 py-2 hover:bg-white/5 transition-colors">
                                <MapPin className="w-4 h-4 text-primary" />
                                <span className="text-xs font-mono uppercase tracking-wider">Capitals</span>
                            </div>
                        </div>
                    )}
                </div>

                {!isMobile ? (
                    <div className="relative group">
                        {/* UI Frame */}
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 opacity-0 group-hover:opacity-100 blur transition duration-500"></div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="relative w-full aspect-[21/9] glass overflow-hidden border-white/5 bg-[#0a0a0a]"
                        >
                            {/* Map Container - needs explicit width/height for MapLibre */}
                            <div
                                ref={mapContainer}
                                className="absolute inset-0 w-full h-full"
                            />

                            {/* Loading Overlay */}
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

                            {/* HUD Elements */}
                            <div className="absolute top-6 left-6 font-mono text-[9px] text-white/40 select-none z-10 flex flex-col gap-1">
                                <div className="flex items-center gap-2">
                                    <Satellite className="w-3 h-3 text-primary animate-pulse" />
                                    <span>SAT_LNK: ACTIVE [IND_01]</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Layers className="w-3 h-3" />
                                    <span>GRID_COORD: 118.01 / -2.53</span>
                                </div>
                            </div>

                            <div className="absolute bottom-6 left-6 z-10 flex flex-col gap-4">
                                <div className="flex items-end space-x-3">
                                    <div className="text-5xl font-light tracking-tighter text-white">100%</div>
                                    <div className="text-[9px] font-mono text-muted-foreground mb-1 leading-tight uppercase">
                                        Network<br />Coverage
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 glass-dark px-3 py-1.5 border-primary/20">
                                    <ShieldCheck className="w-4 h-4 text-primary" />
                                    <span className="text-[10px] font-mono tracking-widest text-primary uppercase">All Systems Active</span>
                                </div>
                            </div>

                            {/* Tooltip Overlay */}
                            <AnimatePresence>
                                {hoveredLocation && (
                                    <motion.div
                                        initial={{ opacity: 0, x: -20, scale: 0.95 }}
                                        animate={{ opacity: 1, x: 0, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none"
                                    >
                                        <div className="glass px-6 py-4 border-primary/30 bg-background/90 backdrop-blur-2xl shadow-2xl min-w-[280px]">
                                            <div className="flex justify-between items-start mb-3">
                                                <div>
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                                        <p className="text-[10px] font-mono text-primary uppercase tracking-[0.2em]">
                                                            {hoveredLocation.type} NODE
                                                        </p>
                                                    </div>
                                                    <h3 className="text-xl font-light tracking-tight text-white leading-tight">
                                                        {hoveredLocation.name}
                                                    </h3>
                                                </div>
                                                <div className="p-2 glass border-white/10 rounded-sm">
                                                    {hoveredLocation.type === "Airport" ? (
                                                        <Plane className="w-5 h-5 text-primary" />
                                                    ) : hoveredLocation.type === "Harbor" ? (
                                                        <Anchor className="w-5 h-5 text-primary" />
                                                    ) : (
                                                        <MapPin className="w-5 h-5 text-primary" />
                                                    )}
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-3">
                                                <div>
                                                    <p className="text-[8px] font-mono text-muted-foreground uppercase mb-0.5">Location</p>
                                                    <p className="text-xs font-medium tracking-wide">{hoveredLocation.city}, ID</p>
                                                </div>
                                                <div>
                                                    <p className="text-[8px] font-mono text-muted-foreground uppercase mb-0.5">Status</p>
                                                    <p className="text-xs font-medium tracking-wide text-green-400">Active</p>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Scanner Line Animation */}
                            <div className="absolute inset-0 pointer-events-none">
                                <div className="h-full w-px bg-primary/20 absolute animate-scan-x opacity-30 shadow-[0_0_15px_rgba(var(--primary-rgb),0.5)]" />
                            </div>
                        </motion.div>
                    </div>
                ) : (
                    <div className="flex flex-col gap-6">
                        {/* Mobile Tabs */}
                        <div className="flex p-1 glass bg-white/5 rounded-lg">
                            {(["Airport", "Harbor", "Capital"] as const).map((type) => (
                                <button
                                    key={type}
                                    onClick={() => setActiveTab(type)}
                                    className={`flex-1 py-2 rounded-md text-[10px] font-mono uppercase tracking-widest transition-all ${activeTab === type ? "bg-primary text-black shadow-lg shadow-primary/20" : "text-white/40"}`}
                                >
                                    {type}s
                                </button>
                            ))}
                        </div>

                        {/* Interactive Stats Card */}
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="glass p-6 border-primary/20 relative overflow-hidden bg-gradient-to-br from-white/[0.03] to-transparent min-h-[450px] flex flex-col"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl -mr-16 -mt-16 rounded-full" />

                            <div className="flex items-center justify-between mb-8">
                                <div className="space-y-1">
                                    <p className="text-[10px] font-mono text-primary uppercase tracking-[0.3em]">Active Fleet</p>
                                    <h4 className="text-3xl font-light text-white">{stats[activeTab]} <span className="text-white/20 text-xl tracking-tighter uppercase ml-2">Units</span></h4>
                                </div>
                                <div className="p-3 glass border-white/10 rounded-full">
                                    {activeTab === "Airport" ? <Plane className="w-6 h-6 text-primary" /> :
                                        activeTab === "Harbor" ? <Anchor className="w-6 h-6 text-primary" /> :
                                            <MapPin className="w-6 h-6 text-primary" />}
                                </div>
                            </div>

                            <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar space-y-3">
                                {filteredLocations.slice(0, 6).map((loc) => (
                                    <div key={loc.id} className="flex items-center justify-between py-3 border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors rounded-sm px-2">
                                        <div>
                                            <h5 className="text-sm font-medium text-white/90">{loc.name}</h5>
                                            <p className="text-[10px] text-muted-foreground font-mono uppercase">{loc.city}</p>
                                        </div>
                                        <div className="flex flex-col items-end gap-1">
                                            <div className="flex items-center gap-1.5">
                                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                                <span className="text-[9px] font-mono text-green-500/80 uppercase">Active</span>
                                            </div>
                                            <span className="text-[7px] font-mono text-white/20">{loc.coords[0].toFixed(2)} / {loc.coords[1].toFixed(2)}</span>
                                        </div>
                                    </div>
                                ))}

                                {filteredLocations.length > 6 && (
                                    <div className="flex items-center justify-center py-4">
                                        <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.2em]">
                                            + {filteredLocations.length - 6} more locations active
                                        </span>
                                    </div>
                                )}
                            </div>

                            <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <Satellite className="w-3 h-3 text-primary" />
                                    <span className="text-[8px] font-mono text-white/40 uppercase">Satellite Synced</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <ShieldCheck className="w-3 h-3 text-primary" />
                                    <span className="text-[8px] font-mono text-primary uppercase tracking-widest">Protocol Active</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </div>
        </div>
    );
}
