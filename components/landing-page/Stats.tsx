"use client";

import { motion, animate, useInView } from "framer-motion";
import { useEffect, useRef, useState, ReactNode } from "react";
import {
    Activity,
    Globe,
    Users,
    Zap,
    Database,
    Cpu,
    CheckCircle2,
    Monitor,
    TrendingUp,
    Search,
    BrainCircuit
} from "lucide-react";

interface CounterProps {
    value: number;
    prefix?: string;
    suffix?: string;
    decimals?: number;
    duration?: number;
}

function Counter({ value, prefix = "", suffix = "", decimals = 0, duration = 2 }: CounterProps) {
    const [display, setDisplay] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            const controls = animate(0, value, {
                duration: duration,
                ease: [0.21, 0.45, 0.32, 0.9],
                onUpdate: (latest) => setDisplay(latest),
            });
            return controls.stop;
        }
    }, [value, isInView, duration]);

    return (
        <span ref={ref} className="tabular-nums font-medium">
            {prefix}{display.toLocaleString(undefined, {
                minimumFractionDigits: decimals,
                maximumFractionDigits: decimals
            })}{suffix}
        </span>
    );
}

interface StatCardProps {
    title: string;
    value: number;
    suffix?: string;
    prefix?: string;
    subtext: string;
    detail?: string;
    icon: ReactNode;
    index: number;
    className?: string;
    decimals?: number;
    color?: "primary" | "secondary" | "tertiary";
    variant?: "default" | "hero";
}

function StatCard({ title, value, suffix, prefix, subtext, detail, icon, index, className = "", decimals = 0, color = "primary", variant = "default" }: StatCardProps) {
    const colorClass = {
        primary: "group-hover:text-primary",
        secondary: "group-hover:text-secondary",
        tertiary: "group-hover:text-tertiary"
    };

    const bgGlow = {
        primary: "group-hover:bg-primary/5",
        secondary: "group-hover:bg-secondary/5",
        tertiary: "group-hover:bg-tertiary/5"
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`group relative overflow-hidden glass border-white/5 hover:border-white/10 transition-all duration-500 flex flex-col ${className} ${variant === 'hero' ? 'p-8 md:p-12' : 'p-8'}`}
        >
            <div className={`absolute inset-0 transition-colors duration-700 ${bgGlow[color]}`} />

            <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start justify-between mb-8">
                    <div className={`p-3 glass border-white/10 ${colorClass[color]} transition-colors duration-300`}>
                        {icon}
                    </div>
                    <div className="flex flex-col items-end">
                        <span className="text-[10px] font-mono tracking-[0.2em] text-white/20 uppercase">
                            {detail}
                        </span>
                        {variant === 'hero' && (
                            <div className="flex items-center gap-1.5 mt-2">
                                <TrendingUp className="w-3 h-3 text-green-500/50" />
                                <span className="text-[9px] font-mono text-green-500/50 font-bold">LIVE_THROUGHPUT</span>
                            </div>
                        )}
                    </div>
                </div>

                <div className="mt-auto">
                    <div className={`${variant === 'hero' ? 'text-6xl md:text-8xl' : 'text-5xl lg:text-6xl'} font-light tracking-tighter text-white mb-4`}>
                        <Counter value={value} suffix={suffix} prefix={prefix} decimals={decimals} duration={variant === 'hero' ? 2.5 : 2} />
                    </div>
                    <h3 className={`${variant === 'hero' ? 'text-2xl' : 'text-lg'} font-medium text-white/90 mb-3`}>{title}</h3>
                    <p className={`text-muted-foreground ${variant === 'hero' ? 'text-base max-w-xl' : 'text-sm leading-relaxed'} font-light`}>
                        {subtext}
                    </p>
                </div>
            </div>

            {variant === 'hero' && (
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
            )}

            <div className={`absolute bottom-0 left-0 h-[2px] w-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ${color === 'primary' ? 'bg-primary' : color === 'secondary' ? 'bg-secondary' : 'bg-tertiary'}`} />
        </motion.div>
    );
}

export default function Stats() {
    return (
        <section className="w-full min-h-screen flex items-center py-24 relative overflow-hidden bg-background">
            <div className="absolute inset-0 bg-grid-white/[0.015] pointer-events-none" />

            <div className="container relative z-10 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div className="max-w-5xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center space-x-3 mb-6"
                        >
                            <div className="w-12 h-px bg-primary/40"></div>
                            <span className="text-xs font-semibold tracking-[0.4em] text-primary uppercase">Velocity & Scale</span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white"
                        >
                            Processing Intelligence <br />
                            <span className="text-white/30 italic text-3xl md:text-5xl">at High-Performance Scale.</span>
                        </motion.h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
                    {/* 1. HUGE DATA PROCESSING (HERO) */}
                    <StatCard
                        index={0}
                        variant="hero"
                        title="Daily Throughput"
                        value={100}
                        suffix="M+"
                        subtext="Analyzing over 100 million data points every single day across national-scale infrastructures, converting raw input into operational clarity in real-time."
                        detail="PROCESSING POWER"
                        icon={<Database className="w-8 h-8" />}
                        className="lg:col-span-12"
                        color="primary"
                    />

                    {/* 2. 200M DATABASE SEARCH (NEW IMPORTANT STAT) */}
                    <StatCard
                        index={1}
                        title="Record Matching"
                        value={200}
                        suffix="M+"
                        subtext="Seamlessly querying a massive pool of 200 million biometric records for instant identification and verification."
                        detail="SEARCH VOLUME"
                        icon={<Search className="w-6 h-6" />}
                        className="lg:col-span-4"
                        color="secondary"
                    />

                    {/* 3. INSTANT DISCOVERY SPEED */}
                    <StatCard
                        index={2}
                        title="Search Velocity"
                        value={1}
                        prefix="<"
                        suffix=" SEC"
                        subtext="Retrieving precise matches from hundreds of millions of records in less than a second for immediate response."
                        detail="ULTRA LATENCY"
                        icon={<Zap className="w-6 h-6" />}
                        className="lg:col-span-4"
                        color="secondary"
                    />

                    {/* 4. ACTIVE CONNECTIONS */}
                    <StatCard
                        index={3}
                        title="Live Connections"
                        value={10000}
                        suffix="+"
                        subtext="Handling over 10,000 active data streams across the network since our inception in 2018."
                        detail="CONNECTIVITY"
                        icon={<Monitor className="w-6 h-6" />}
                        className="lg:col-span-4"
                        color="tertiary"
                    />

                    {/* FOOTER STATS */}
                    <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-6 mt-2">
                        <div className="flex items-center gap-4 glass p-6 border-white/5 opacity-60 hover:opacity-100 transition-opacity">
                            <Globe className="w-5 h-5 text-primary/70" />
                            <div>
                                <div className="text-2xl font-light text-white leading-none mb-1">34 Provinces</div>
                                <div className="text-[10px] font-mono text-white/30 uppercase tracking-widest">National Grid</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 glass p-6 border-white/5 opacity-60 hover:opacity-100 transition-opacity">
                            <CheckCircle2 className="w-5 h-5 text-secondary/70" />
                            <div>
                                <div className="text-2xl font-light text-white leading-none mb-1">30+ Major Events</div>
                                <div className="text-[10px] font-mono text-white/30 uppercase tracking-widest">Success Record</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 glass p-6 border-white/5 opacity-60 hover:opacity-100 transition-opacity">
                            <Users className="w-5 h-5 text-tertiary/70" />
                            <div>
                                <div className="text-2xl font-light text-white leading-none mb-1">100+ Partners</div>
                                <div className="text-[10px] font-mono text-white/30 uppercase tracking-widest">Global Network</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
