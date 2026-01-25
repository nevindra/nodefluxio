"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { HeroProps } from "./types";
import { HeroBackground } from "./HeroBackground";

export function SingleHero({
    title = (
        <>
            TECHNICAL <br />
            <span className="text-muted-foreground">SPECIFICATIONS.</span>
        </>
    ),
    description = "Detailed operational parameters and deployment architectures for the VisionAIre platform.",
    videoSrc,
    image,
    primaryCtaText = "Request Demo",
    primaryCtaHref = "/contact-us",
    secondaryCtaText = "Platform Overview",
    secondaryCtaHref = "#features",
    label = "System Documentation",
    features,
}: HeroProps) {
    return (
        <section className="relative w-full h-[80vh] flex items-center justify-start overflow-hidden bg-background text-left pt-20">
            <HeroBackground videoSrc={videoSrc} isLanding={false} />

            <div className="relative z-10 px-8 lg:px-24 mx-auto w-full max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    <div className="flex-1 w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="space-y-8"
                        >
                            <div className="flex flex-col space-y-4">
                                <div className="inline-flex items-center space-x-3 text-white/60">
                                    <span className="w-1.5 h-1.5 bg-white/60"></span>
                                    <span className="text-[10px] md:text-xs font-mono tracking-[0.3em] uppercase">
                                        {label}
                                    </span>
                                </div>
                                <div className="w-full h-px bg-white/10 max-w-sm"></div>
                            </div>

                            <h1 className="font-semibold tracking-tighter text-white leading-[0.85] text-5xl md:text-7xl lg:text-8xl uppercase">
                                {title}
                            </h1>

                            <div className="max-w-2xl">
                                <p className="text-white/50 leading-relaxed font-light text-base md:text-lg">
                                    {description}
                                </p>
                                {features && features.length > 0 && (
                                    <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {features.map((feature, index) => (
                                            <li
                                                key={index}
                                                className="flex items-center text-sm text-white/40 font-mono uppercase tracking-wider"
                                            >
                                                <CheckCircle2 className="text-white/20 mr-2 w-4 h-4" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            className="flex items-center space-x-0 mt-16"
                        >
                            <Button
                                size="lg"
                                asChild
                                className="bg-white hover:bg-neutral-200 text-black font-medium h-14 px-8 rounded-none transition-all duration-300 relative z-10"
                            >
                                <Link href={primaryCtaHref}>{primaryCtaText}</Link>
                            </Button>

                            <div className="w-20 h-px bg-white/20"></div>

                            <Button
                                size="lg"
                                variant="outline"
                                asChild
                                className="border-white/10 text-white/60 hover:bg-white/5 hover:text-white h-14 px-8 rounded-none transition-all duration-300"
                            >
                                <Link href={secondaryCtaHref}>{secondaryCtaText}</Link>
                            </Button>
                        </motion.div>
                    </div>

                    {image && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="hidden lg:flex flex-1 justify-end items-center"
                        >
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-white/10 to-transparent blur opacity-25"></div>
                                <Image
                                    src={image}
                                    alt="Hero Visual"
                                    width={600}
                                    height={400}
                                    className="relative w-full h-auto grayscale opacity-40 group-hover:opacity-80 transition-all duration-700"
                                    priority
                                />
                                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/20"></div>
                                <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-white/20"></div>
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>

            {/* Aesthetic Technical Accents */}
            <div className="absolute bottom-12 left-12 flex items-end space-x-1.5 opacity-40">
                <div className="w-1.5 h-10 bg-white/60"></div>
                <div className="w-1.5 h-6 bg-white/30"></div>
                <div className="w-1.5 h-8 bg-white/40"></div>
            </div>

            {/* Corner Crop Marks */}
            <div className="absolute bottom-10 right-10 w-24 h-24 pointer-events-none opacity-20">
                <div className="absolute bottom-0 right-0 w-full h-px bg-white"></div>
                <div className="absolute bottom-0 right-0 w-px h-full bg-white"></div>
            </div>

            {/* Crosshair/Grid Indicators */}
            <div className="absolute top-0 right-1/4 w-px h-12 bg-white/10"></div>
            <div className="absolute bottom-0 left-1/2 w-64 h-px bg-white/5 font-mono text-[8px] text-white/20 flex items-center justify-center">
                STRUCT_BASE_LINE_0.42
            </div>
        </section>
    );
}

export default SingleHero;
