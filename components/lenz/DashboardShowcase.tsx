"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";
import {
    GridFour,
    Cpu,
    ClockCounterClockwise,
    Shield,
    CheckCircle,
    Lightning,
    Eye,
    Database,
    Graph,
} from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

const showcaseItems = [
    {
        id: "unified-view",
        badge: "STREAM-01",
        title: "Unified Stream View",
        headline: "See everything at once",
        description: "Watch all your camera feeds in a single, organized grid. No more switching between apps or screens. Customize layouts for different use cases - from a wall of 64 cameras to focused 4-screen monitoring.",
        features: [
            "Custom grid layouts (1x1 to 8x8)",
            "Drag-and-drop camera arrangement",
            "Full-screen single camera mode"
        ],
        image: "/dashboard/Home.webp",
        icon: GridFour,
        accent: "cyan"
    },
    {
        id: "ai-analysis",
        badge: "SMART-02",
        title: "AI-Powered Analysis",
        headline: "Let AI watch for you",
        description: "Our AI continuously analyzes every frame, detecting people, vehicles, and events in real-time. Get instant alerts when something important happens - no more staring at screens for hours.",
        features: [
            "Real-time object detection",
            "Automatic event classification",
            "Smart alert filtering"
        ],
        image: "/dashboard/Event_History.webp",
        icon: Cpu,
        accent: "violet"
    },
    {
        id: "event-history",
        badge: "HIST-03",
        title: "Event Timeline",
        headline: "Never miss what happened",
        description: "Every detection is logged with a timestamp, thumbnail, and full metadata. Search through thousands of events instantly. Find exactly what you're looking for in seconds, not hours.",
        features: [
            "Searchable event database",
            "Thumbnail preview for quick scan",
            "Export evidence with one click"
        ],
        image: "/dashboard/Statistic_FRA.webp",
        icon: ClockCounterClockwise,
        accent: "amber"
    }
];

export function DashboardShowcase() {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <section ref={containerRef} className="relative z-10 pt-32 sm:pt-40 md:pt-48 lg:pt-56 pb-24 md:pb-40 bg-muted/20">
            <div className="max-w-[1280px] mx-auto px-6">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-24 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-medium tracking-tight">
                            WHAT CAN <br />
                            <span className="text-muted-foreground uppercase">Lenz Do?</span>
                        </h2>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-muted-foreground text-lg font-light leading-relaxed"
                    >
                        From live monitoring to intelligent analysis, Lenz transforms how you manage video surveillance.
                    </motion.p>
                </div>

                {/* Showcase Items */}
                <div className="space-y-32 md:space-y-48">
                    {showcaseItems.map((item, index) => (
                        <ShowcaseItem
                            key={item.id}
                            item={item}
                            index={index}
                            reverse={index % 2 === 1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ShowcaseItem({
    item,
    index,
    reverse
}: {
    item: typeof showcaseItems[0];
    index: number;
    reverse: boolean;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const Icon = item.icon;

    const accentColors = {
        cyan: {
            bg: "bg-cyan-500/10",
            border: "border-cyan-500/20",
            text: "text-cyan-500",
            glow: "bg-cyan-500/20"
        },
        violet: {
            bg: "bg-violet-500/10",
            border: "border-violet-500/20",
            text: "text-violet-500",
            glow: "bg-violet-500/20"
        },
        amber: {
            bg: "bg-amber-500/10",
            border: "border-amber-500/20",
            text: "text-amber-500",
            glow: "bg-amber-500/20"
        }
    };

    const colors = accentColors[item.accent as keyof typeof accentColors];

    return (
        <div
            ref={ref}
            className={cn(
                "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center",
                reverse && "lg:grid-flow-dense"
            )}
        >
            {/* Text Content */}
            <motion.div
                initial={{ opacity: 0, x: reverse ? 50 : -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                className={cn("space-y-8", reverse && "lg:col-start-2")}
            >
                {/* Badge */}
                <div className="flex items-center gap-4">
                    <span className={cn(
                        "inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-mono tracking-widest uppercase",
                        colors.bg, colors.border, colors.text
                    )}>
                        {item.badge}
                    </span>
                </div>

                {/* Title & Description */}
                <div className="space-y-4">
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight">
                        {item.headline}
                    </h3>
                    <p className="text-muted-foreground text-lg font-light leading-relaxed max-w-lg">
                        {item.description}
                    </p>
                </div>

                {/* Features List */}
                <div className="space-y-4 pt-4">
                    {item.features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                            className="flex items-center gap-3 text-foreground/80"
                        >
                            <CheckCircle className={cn("w-5 h-5 shrink-0", colors.text)} />
                            <span className="text-sm md:text-base">{feature}</span>
                        </motion.div>
                    ))}
                </div>

                {/* Icon Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className={cn(
                        "inline-flex items-center gap-3 px-4 py-3 rounded-xl border bg-background/50 backdrop-blur-sm",
                        colors.border
                    )}
                >
                    <div className={cn("p-2 rounded-lg", colors.bg)}>
                        <Icon className={cn("w-5 h-5", colors.text)} />
                    </div>
                    <span className="text-sm font-medium text-foreground/80">{item.title}</span>
                </motion.div>
            </motion.div>

            {/* Image */}
            <motion.div
                initial={{ opacity: 0, x: reverse ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1], delay: 0.2 }}
                className={cn("relative group", reverse && "lg:col-start-1 lg:row-start-1")}
            >
                {/* Glow Effect */}
                <div className={cn(
                    "absolute -inset-4 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700",
                    colors.glow
                )} />

                {/* Image Container */}
                <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-border/50 shadow-2xl bg-background/80">
                    <div className="relative aspect-[16/10] w-full">
                        <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-contain transition-transform duration-700 group-hover:scale-105"
                        />
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
                    </div>

                    {/* Floating Badge */}
                    <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-md border border-border/50">
                        <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
                            Live Preview
                        </span>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className={cn(
                    "absolute -bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-px blur-sm",
                    colors.glow
                )} />
            </motion.div>
        </div>
    );
}
