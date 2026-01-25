"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CTA() {
    return (
        <section className="py-40 bg-background relative overflow-hidden border-t border-white/5">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-hero-pattern [background-size:20px_20px] opacity-[0.02]"></div>
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="space-y-10"
                    >
                        <div className="flex justify-center space-x-1 mb-8 opacity-20">
                            <div className="w-px h-8 bg-white"></div>
                            <div className="w-px h-8 bg-white"></div>
                            <div className="w-px h-8 bg-white"></div>
                        </div>

                        <h2 className="text-5xl md:text-7xl font-medium tracking-tight text-white leading-tight">
                            ESTABLISH <span className="text-muted-foreground">CLARITY.</span>
                        </h2>

                        <p className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
                            Engage with our experts to deploy Nodeflux within your operational domain.
                            Secure your infrastructure with verified intelligence.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8">
                            <Button size="lg" className="bg-white hover:bg-white/90 text-black font-medium h-14 px-12 rounded-none transition-all duration-300">
                                <Link href="/contact-us">Request System Access</Link>
                            </Button>
                            <Button size="lg" variant="outline" className="h-14 px-12 rounded-none border-white/10 text-white hover:bg-white/5 transition-all duration-300">
                                <Link href="/technology">Review Technical Specs</Link>
                            </Button>
                        </div>

                        <div className="pt-24 flex justify-center items-center space-x-8 opacity-20">
                            <span className="text-[9px] font-mono tracking-widest uppercase">Encryption: Verified</span>
                            <span className="w-1 h-1 rounded-full bg-white"></span>
                            <span className="text-[9px] font-mono tracking-widest uppercase">System: Operational</span>
                            <span className="w-1 h-1 rounded-full bg-white"></span>
                            <span className="text-[9px] font-mono tracking-widest uppercase">Secure Node: 0xF24</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
