"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AthenaKnowledgeMockup from "@/components/landing-page/AthenaKnowledgeMockup";

export function ArchitectureParallax() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section ref={ref} className="py-32 md:py-48 bg-foreground/[0.02] border-t border-border/40 relative overflow-hidden">

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-medium tracking-tighter"
                    >
                        THE <span className="text-muted-foreground">ENGINE.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-lg text-muted-foreground font-light"
                    >
                        A simplified view of how Athena processes, retrieves, and synthesizes information from your enterprise ecosystem.
                    </motion.p>
                </div>

                <motion.div
                    style={{ y, opacity }}
                    className="relative w-full max-w-6xl mx-auto aspect-[16/9] md:aspect-[21/9] rounded-xl overflow-hidden shadow-2xl border border-border/50 bg-background"
                >
                    <AthenaKnowledgeMockup />

                    {/* Glass overlay for depth */}
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background/20 to-transparent" />
                </motion.div>
            </div>

            {/* Decorative background elements */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[500px] bg-primary/5 blur-[150px] pointer-events-none" />
        </section>
    );
}
