"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const HeroBackground = ({
    videoSrc,
    isLanding,
}: { videoSrc?: string; isLanding: boolean }) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();

    // Amplified Parallax transforms
    const y1 = useTransform(scrollY, [0, 800], [0, 400]); // Much slower/deeper background
    const y2 = useTransform(scrollY, [0, 800], [0, -200]); // Significant counter-movement

    return (
        <div ref={ref} className="absolute inset-0 z-0 overflow-hidden">
            {/* Base Background Layers */}
            <div className="absolute inset-0 bg-background"></div>

            {/* Media Layer (Video or Gradient) */}
            <motion.div style={{ y: y1 }} className="absolute inset-0 w-full h-full">
                {videoSrc ? (
                    <div className="absolute inset-0 w-full h-full overflow-hidden">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover opacity-20 grayscale"
                        >
                            <source src={videoSrc} type="video/mp4" />
                        </video>
                        <div className="absolute inset-0 bg-background/40"></div>
                    </div>
                ) : (
                    <div className="absolute inset-0 bg-tech-gradient"></div>
                )}
            </motion.div>

            {/* Universal Technical Overlays */}
            <div className="absolute inset-0 bg-hero-pattern [background-size:40px_40px] opacity-[0.05] grayscale pointer-events-none"></div>

            {/* Technical Structural Lines with different parallax speed */}
            <motion.div style={{ y: y2 }} className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-px h-full bg-border/20"></div>
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 left-0 w-[200%] h-[1px] bg-border/[0.05] origin-top-left rotate-[12deg]"></div>
                </div>

                {/* Structural Lines (no text) */}
                <div className="absolute top-1/4 left-0 w-full h-px bg-border/20 hidden md:block" />
                <div className="absolute top-3/4 left-0 w-full h-px bg-border/20 hidden md:block" />
                <div className="absolute left-1/4 top-0 w-px h-full bg-border/20 hidden md:block" />
            </motion.div>
        </div>
    );
};
