"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkle } from "@phosphor-icons/react";
import { useRef } from "react";
import AthenaKnowledgeMockup from "@/components/landing-page/AthenaKnowledgeMockup";

export function AthenaHero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();

    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section ref={containerRef} className="relative pt-20 pb-0 overflow-visible bg-background border-b border-border/10">
            {/* Background Ambience */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    style={{ y: y1 }}
                    className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] bg-primary/5 rounded-full blur-[120px]"
                />
                <motion.div
                    style={{ y: y2 }}
                    className="absolute top-[20%] -right-[10%] w-[60vw] h-[60vw] bg-secondary/5 rounded-full blur-[100px]"
                />
            </div>

            <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 relative z-10 pt-32 md:pt-48">
                <div className="flex flex-col items-center text-center space-y-16">

                    <div className="space-y-8 max-w-4xl mx-auto">
                        {/* Label */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm"
                        >
                            <Sparkle className="w-3 h-3 text-primary" />
                            <span className="text-[10px] font-mono text-primary tracking-[0.2em] uppercase">
                                Enterprise Knowledge Assistant
                            </span>
                        </motion.div>

                        {/* Main Title */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                            className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-wide text-foreground"
                        >
                            INTELLIGENCE THAT <br className="hidden md:block" />
                            <span className="text-muted-foreground">UNDERSTANDS.</span>
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed"
                        >
                            Turn your company documents into a smart assistant that anyone can talk to.
                            Find information in seconds, not hours.
                        </motion.p>
                    </div>

                    {/* Interaction Mock - Overlapping Section Below */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 40 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
                        className="w-full max-w-7xl group relative z-20 mb-[-100px] md:mb-[-220px]"
                    >
                        <div className="absolute inset-0 bg-primary/20 blur-[100px] opacity-0 group-hover:opacity-40 transition-opacity duration-1000 -z-10" />

                        <motion.div
                            style={{ rotateX: 2 }}
                            className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-border/50 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] bg-background/50 backdrop-blur-sm perspective-1000"
                        >
                            <AthenaKnowledgeMockup />
                        </motion.div>

                        {/* Decorative reflection or bottom light */}
                        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-primary/20 blur-xl md:blur-3xl" />
                    </motion.div>

                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                style={{ opacity }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0" />
                <span className="text-[10px] font-mono text-foreground/30 tracking-widest uppercase">Scroll</span>
            </motion.div>
        </section>
    );
}
