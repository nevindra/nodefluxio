"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
    return (
        <section className="py-24 md:py-40 bg-background relative overflow-hidden border-t border-black/5">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-hero-pattern [background-size:20px_20px] opacity-[0.05] grayscale invert"></div>
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-black/5 to-transparent"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="space-y-10"
                    >
                        <div className="flex justify-center space-x-1 mb-8 opacity-20">
                            <div className="w-px h-8 bg-black"></div>
                            <div className="w-px h-8 bg-black"></div>
                            <div className="w-px h-8 bg-black"></div>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground leading-tight uppercase">
                            Establish <span className="text-muted-foreground">Clarity.</span>
                        </h2>

                        <p className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
                            Engage with our experts to deploy Nodeflux within your operational domain.
                            Secure your infrastructure with verified intelligence.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8">
                            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium h-12 md:h-14 px-8 md:px-12 transition-all duration-300 shadow-xl shadow-primary/20">
                                <Link href="/contact-us">Request System Access</Link>
                            </Button>
                            <Button size="lg" variant="outline" className="h-12 md:h-14 px-8 md:px-12 border-black/10 text-foreground hover:bg-black/5 transition-all duration-300">
                                <Link href="/technology">Review Technical Specs</Link>
                            </Button>
                        </div>

                        <div className="pt-16 md:pt-24 flex flex-wrap justify-center items-center gap-y-4 gap-x-8 opacity-20">
                            <span className="text-[9px] font-mono tracking-widest uppercase">Encryption: Verified</span>
                            <span className="hidden md:block w-1 h-1 rounded-full bg-black"></span>
                            <span className="text-[9px] font-mono tracking-widest uppercase">System: Operational</span>
                            <span className="hidden md:block w-1 h-1 rounded-full bg-black"></span>
                            <span className="text-[9px] font-mono tracking-widest uppercase">Secure Node: 0xF24</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
