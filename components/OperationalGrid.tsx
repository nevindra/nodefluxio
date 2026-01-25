"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function OperationalGrid() {
    const { scrollY } = useScroll();
    const yGrid = useTransform(scrollY, (value) => value * 0.4);
    const yGhost1 = useTransform(scrollY, (value) => value * 0.8);
    const yGhost2 = useTransform(scrollY, (value) => value * 0.25);

    return (
        <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
            {/* Base Grid Layer */}
            <motion.div
                style={{ y: yGrid }}
                className="absolute inset-0 bg-hero-pattern [background-size:80px_80px] opacity-[0.03]"
            />

            {/* Vignette & Gradients */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />

            {/* Ghost Code / Technical Accents */}
            <motion.div
                style={{ y: yGhost1 }}
                className="absolute top-1/4 left-10 text-[9px] font-mono text-white/[0.03] space-y-1 hidden lg:block"
            >
                <div>0xFE_INGESTION_NODE_PRIMARY</div>
                <div>STATUS: OPERATIONAL</div>
                <div>LATENCY: 14ms</div>
            </motion.div>

            <motion.div
                style={{ y: yGhost2 }}
                className="absolute top-1/3 right-10 text-[9px] font-mono text-white/[0.03] space-y-1 text-right hidden lg:block"
            >
                <div>NETWORK_FABRIC_v4.2</div>
                <div>COORDINATES: -6.2088, 106.8456</div>
                <div>LOC: INDONESIA_CENTRAL</div>
            </motion.div>

            {/* Horizontal Scanline */}
            <motion.div
                animate={{
                    top: ["0%", "100%"]
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute left-0 w-full h-[1px] bg-white/5 shadow-[0_0_15px_rgba(255,255,255,0.05)] z-10"
            />
        </div>
    );
}
