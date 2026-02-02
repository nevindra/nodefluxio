"use client";

import { ArrowRight, Phone } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-16 md:py-32 bg-background relative overflow-hidden border-t border-black/5">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-hero-pattern [background-size:20px_20px] opacity-[0.05] grayscale invert"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-8 md:gap-16 items-center"
        >
          {/* Left: Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-[2px] bg-primary"></div>
              <span className="text-xs font-medium tracking-[0.3em] text-primary uppercase">
                Ready to Start?
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-foreground leading-tight">
              Transform Your Vision <br className="hidden md:block" />
              <span className="text-primary">Into Reality</span>
            </h2>

            <p className="text-base md:text-lg text-muted-foreground font-light leading-relaxed max-w-lg">
              Connect with our experts to discuss your business needs. Get the
              right AI solution for your digital transformation journey.
            </p>

            {/* Benefits list - mobile friendly */}
            <div className="grid grid-cols-2 gap-3 py-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                <span>Live Demo</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                <span>Local Team</span>
              </div>
            </div>
          </div>

          {/* Right: CTA Cards */}
          <div className="space-y-4">
            <Link href="/contact-us" className="block group">
              <div className="p-6 bg-primary hover:bg-primary/90 transition-all duration-300 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-white/10 rounded-lg">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                </div>
                <h3 className="text-lg font-medium text-white mb-1">
                  Contact Us
                </h3>
                <p className="text-sm text-white/70">
                  Schedule a consultation with our sales team
                </p>
              </div>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
