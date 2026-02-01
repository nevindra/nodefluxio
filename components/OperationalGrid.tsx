"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function OperationalGrid() {
    const { scrollY } = useScroll();
    const yGrid = useTransform(scrollY, (value) => value * -0.05);
    const yGhost1 = useTransform(scrollY, (value) => value * -0.15);
    const yGhost2 = useTransform(scrollY, (value) => value * -0.1);

    return (
        <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
            {/* Vignette & Gradients - Bottom layer */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.02)_100%)] dark:bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]" />

            {/* Base Sparse Grid Layer */}
            <motion.div
                style={{ y: yGrid }}
                className="absolute inset-x-0 -inset-y-[20%] bg-hero-pattern [background-size:250px_250px] opacity-[0.4] dark:opacity-[0.1]"
            />
        </div>
    );
}
