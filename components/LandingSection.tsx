"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface LandingSectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
}

export default function LandingSection({ children, className, id }: LandingSectionProps) {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);
    const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [50, 0, 0, -50]);

    return (
        <motion.section
            id={id}
            ref={containerRef}
            style={{
                opacity,
                scale,
                y,
            }}
            className={className}
        >
            {children}
        </motion.section>
    );
}
