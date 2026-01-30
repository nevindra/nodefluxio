"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HeroBackground } from "./HeroBackground";
import { HeroProps } from "./types";

const words = [
    "SECURITY.",
    "SAFETY.",
    "SMART CITIES.",
    "TRAFFIC.",
    "EFFICIENCY.",
];

export function MainHero({
    title,
    description = "The intelligence operating system for the physical world. We unify vision and data into a foundational core that powers real-time awareness and mission-critical clarity at any scale.",
    videoSrc,
    primaryCtaText = "Request Demo",
    primaryCtaHref = "/contact-us",
    secondaryCtaText = "Platform Overview",
    secondaryCtaHref = "#features",
    label = "Extending Vision Beyond Imagination",
}: HeroProps) {
    const [index, setIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [speed, setSpeed] = useState(150);

    useEffect(() => {
        const handleTyping = () => {
            const currentWord = words[index];
            if (isDeleting) {
                setDisplayText(currentWord.substring(0, displayText.length - 1));
                setSpeed(50);
            } else {
                setDisplayText(currentWord.substring(0, displayText.length + 1));
                setSpeed(150);
            }

            if (!isDeleting && displayText === currentWord) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && displayText === "") {
                setIsDeleting(false);
                setIndex((prev) => (prev + 1) % words.length);
            }
        };

        const timer = setTimeout(handleTyping, speed);
        return () => clearTimeout(timer);
    }, [displayText, isDeleting, index, speed]);

    return (
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-background text-center">
            <HeroBackground videoSrc={videoSrc} isLanding={true} />

            <div className="relative z-10 px-4 mx-auto w-full max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-6"
                >
                    <div className="inline-flex items-center space-x-2 mb-2 text-foreground/30">
                        <span className="w-1 h-1 rounded-none bg-primary/60"></span>
                        <span className="text-[10px] md:text-xs font-mono tracking-[0.2em] uppercase">
                            {label}
                        </span>
                    </div>

                    <h1 className="font-medium tracking-tight text-foreground leading-[1.05] text-4xl md:text-6xl lg:text-7xl min-h-[1.8em] md:min-h-[2.2em] flex flex-col items-center justify-center">
                        <span className="block italic">AI-POWERED</span>
                        <span className="text-muted-foreground relative">
                            {displayText}
                            <motion.span
                                animate={{ opacity: [1, 0] }}
                                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                                className="inline-block w-[2px] h-[0.7em] bg-primary ml-1 align-middle"
                            />
                        </span>
                    </h1>

                    <p className="text-muted-foreground font-light text-base md:text-xl max-w-2xl mx-auto leading-relaxed">
                        {description}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-12"
                >
                    <Button
                        size="lg"
                        asChild
                        className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium h-12 px-10 transition-all duration-300 shadow-lg shadow-primary/20"
                    >
                        <Link href={primaryCtaHref}>{primaryCtaText}</Link>
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        asChild
                        className="border-foreground/10 text-foreground hover:bg-foreground/5 h-12 px-10 transition-all duration-300"
                    >
                        <Link href={secondaryCtaHref}>{secondaryCtaText}</Link>
                    </Button>
                </motion.div>
            </div>

            {/* Aesthetic Border Accents */}
            <div className="absolute top-8 left-8 w-12 h-12 border-t border-l border-black/5"></div>
            <div className="absolute bottom-8 right-8 w-12 h-12 border-b border-r border-black/5"></div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-primary/40 to-transparent relative overflow-hidden">
                    <motion.div
                        animate={{
                            top: ["-100%", "100%"]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute left-0 w-full h-1/2 bg-primary/80"
                    />
                </div>
            </motion.div>
        </section>
    );
}

export default MainHero;
