"use client";

import { Play } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface TechnicalMediaProps {
    videoSrc: string;
    thumbnailSrc?: string;
    label?: string;
    code?: string;
}

export default function TechnicalMedia({ videoSrc, thumbnailSrc, label, code }: TechnicalMediaProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const yBackground = useTransform(scrollYProgress, [0, 1], [-20, 20]);
    const yHUD = useTransform(scrollYProgress, [0, 1], [-10, 10]);

    return (
        <div ref={ref} className="group relative w-full aspect-video bg-white/[0.02] border border-white/5 overflow-hidden flex items-center justify-center">
            {/* Background Pattern with Parallax */}
            <motion.div
                style={{ y: yBackground }}
                className="absolute inset-0 bg-hero-pattern [background-size:20px_20px] opacity-[0.02]"
            />

            {/* Video / Thumbnail */}
            <div className="absolute inset-0 w-full h-full">
                <div className="w-full h-full bg-gradient-to-br from-white/[0.05] to-transparent"></div>
            </div>

            {/* HUD Elements with inverse parallax for depth */}
            <motion.div
                style={{ y: yHUD }}
                className="absolute inset-0 p-4 flex flex-col justify-between z-10 opacity-40 group-hover:opacity-100 transition-opacity duration-500"
            >
                <div className="flex justify-between items-start">
                    <div className="flex space-x-4">
                        <div className="w-4 h-4 border-t border-l border-white/40"></div>
                        <div className="text-[9px] font-mono text-white/40 uppercase tracking-widest pt-1">
                            {label || "Telemetry Active"}
                        </div>
                    </div>
                    <div className="text-[9px] font-mono text-white/40 pt-1">
                        {code || "REC:0xF24"}
                    </div>
                </div>

                <div className="flex justify-between items-end">
                    <div className="flex space-x-4 items-center">
                        <div className="w-1.5 h-1.5 bg-white/40 animate-pulse"></div>
                        <div className="text-[9px] font-mono text-white/20 tracking-widest uppercase">
                            Signal Strength: Nominal
                        </div>
                    </div>
                    <div className="w-4 h-4 border-b border-r border-white/40"></div>
                </div>
            </motion.div>

            {/* Play Overlay */}
            <motion.div
                whileHover={{ scale: 1.1 }}
                className="relative z-20 w-16 h-16 flex items-center justify-center border border-white/20 bg-background/40 backdrop-blur-sm cursor-pointer group-hover:border-white/60 transition-colors"
            >
                <Play className="w-6 h-6 text-white fill-white ml-1" />
            </motion.div>

            {/* Scanline Effect */}
            <div className="absolute inset-0 pointer-events-none bg-grid-scanlines opacity-[0.03]"></div>
        </div>
    );
}
