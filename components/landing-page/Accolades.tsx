"use client";

import { motion } from "framer-motion";

export default function Accolades() {
    return (
        <section className="py-32 bg-background border-b border-white/5 relative overflow-hidden">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 bg-hero-pattern [background-size:40px_40px] opacity-[0.02]"></div>

            <div className="container mx-auto px-8 lg:px-24 max-w-7xl relative z-10">
                <div className="max-w-4xl mb-24">
                    <div className="flex items-center space-x-2 mb-6">
                        <span className="w-2 h-px bg-white/20"></span>
                        <span className="text-[10px] font-mono tracking-[0.3em] text-white/40 uppercase">
                            Quality Standards
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-8">
                        LOCAL TECHNOLOGY. <span className="text-muted-foreground">WORLD CLASS QUALITY.</span>
                    </h2>
                    <p className="text-lg text-white/50 font-light leading-relaxed max-w-2xl">
                        Nodeflux is committed to advancing domestic innovation through globally recognized certifications and performance benchmarks.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5 mx-auto">
                    {/* TKDN Card */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="group relative bg-background p-10 md:p-14 space-y-8 flex flex-col h-full border-r border-white/5 md:border-r-0"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div className="bg-white/90 px-3 py-1 rounded-none">
                                <span className="text-black font-bold text-sm tracking-tighter">TKDN</span>
                            </div>
                            <span className="text-[10px] font-mono text-white/10 uppercase tracking-widest pt-1">
                                CERT-IDX-9904
                            </span>
                        </div>

                        <div className="space-y-4 flex-grow">
                            <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
                                Domestic Component Level: 99.04%
                            </div>
                            <h3 className="text-2xl font-medium text-white group-hover:text-muted-foreground transition-colors">
                                Strategic Local Value
                            </h3>
                            <p className="text-white/40 font-light leading-relaxed">
                                Nodeflux maintains a dominant Domestic Component Level (TKDN), certified as Indonesian Intellectual Property developed entirely by elite local engineering teams.
                            </p>
                        </div>

                        <div className="pt-8 border-t border-white/5 text-[9px] font-mono text-white/20 uppercase tracking-[0.2em]">
                            Verified Indonesian Principal Technology
                        </div>
                    </motion.div>

                    {/* NIST Card */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="group relative bg-background p-10 md:p-14 space-y-8 flex flex-col h-full"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div className="bg-white/90 px-3 py-1 rounded-none">
                                <span className="text-black font-bold text-sm tracking-tighter">NIST</span>
                            </div>
                            <span className="text-[10px] font-mono text-white/10 uppercase tracking-widest pt-1">
                                BENCHMARK-FL-25
                            </span>
                        </div>

                        <div className="space-y-4 flex-grow">
                            <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
                                Global Ranking: Top 25
                            </div>
                            <h3 className="text-2xl font-medium text-white group-hover:text-muted-foreground transition-colors">
                                Global Visibility
                            </h3>
                            <p className="text-white/40 font-light leading-relaxed">
                                Ranked in the 85th percentile globally in the NIST FRVT Leaderboard. Nodeflux is the first Indonesian principal to achieve elite status among international Vision AI competitors.
                            </p>
                        </div>

                        <div className="pt-8 border-t border-white/5 text-[9px] font-mono text-white/20 uppercase tracking-[0.2em]">
                            Standardized Global Performance Benchmarking
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Corner Crop Marks */}
            <div className="absolute top-10 left-10 w-24 h-24 pointer-events-none opacity-20">
                <div className="absolute top-0 left-0 w-full h-px bg-white/20"></div>
                <div className="absolute top-0 left-0 w-px h-full bg-white/20"></div>
            </div>
            <div className="absolute bottom-10 right-10 w-24 h-24 pointer-events-none opacity-20">
                <div className="absolute bottom-0 right-0 w-full h-px bg-white/20"></div>
                <div className="absolute bottom-0 right-0 w-px h-full bg-white/20"></div>
            </div>
        </section>
    );
}

