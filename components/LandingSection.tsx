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

    const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0.85, 1, 1, 0.85]);
    const y = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [150, 0, 0, -150]);

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
