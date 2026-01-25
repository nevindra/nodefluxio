"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const [percent, setPercent] = useState(0);

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Sync state with scroll progress for the text readout
    useEffect(() => {
        return scrollYProgress.onChange((latest) => {
            setPercent(Math.round(latest * 100));
        });
    }, [scrollYProgress]);

    return (
        <div className="fixed right-10 top-1/2 -translate-y-1/2 h-48 w-[2px] bg-white/5 z-50 hidden xl:flex flex-col items-center">
            <div className="absolute -top-12 text-[10px] font-mono text-white/40 vertical-text tracking-widest uppercase whitespace-nowrap">
                PROGRESS
            </div>

            <div className="relative w-full h-full bg-white/5">
                <motion.div
                    className="absolute top-0 left-0 w-full bg-white/40 origin-top"
                    style={{ scaleY }}
                />

                {/* Decorative Ticks */}
                {[0, 0.25, 0.5, 0.75, 1].map((tick) => (
                    <div
                        key={tick}
                        className="absolute left-full ml-1 w-1 h-[1px] bg-white/10"
                        style={{ top: `${tick * 100}%` }}
                    />
                ))}
            </div>

            <div className="absolute -bottom-10 flex flex-col items-center">
                <span className="text-[12px] font-mono text-white/60 tabular-nums">
                    {percent}%
                </span>
            </div>
        </div>
    );
}
