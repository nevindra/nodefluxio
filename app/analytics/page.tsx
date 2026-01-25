"use client";

import { SingleHero } from "@/components/hero/SingleHero";
import TechnicalMedia from "@/components/landing-page/TechnicalMedia";
import {
  Scan,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";

const analyticCapabilities = [
  {
    title: "Face Recognition",
    id: "ANL-FR-01",
    description: "High-precision biometric matching engine optimized for sub-second verification across multi-million entry watchlists.",
    icon: <Scan className="w-5 h-5" />,
    specs: ["Latency < 200ms", "Accuracy 99.8%", "Multi-angle Support"],
    video: "/videos/face-demo.mp4"
  },
  {
    title: "Crowd Intelligence",
    id: "ANL-CD-04",
    description: "Real-time occupancy tracking and density mapped analytics for large-scale spatial management and public safety.",
    icon: <Users className="w-5 h-5" />,
    specs: ["Dwell Time Analysis", "Heatmap Generation", "Queue Monitoring"],
    video: "/videos/crowd-demo.mp4"
  },
];

export default function Analytics() {
  return (
    <main className="min-h-screen bg-background pb-40">
      {/* Subpage Hero Variant */}
      <SingleHero
        videoSrc="/videos/analytics-hero.mp4"
        title={<>ALGORITHMIC <br /><span className="text-muted-foreground">PRECISION.</span></>}
        description="Deploying enterprise-grade computer vision models designed for deterministic operational intelligence and situational awareness."
        label="Advanced Analytics Engine"
        secondaryCtaText="Explore Models"
        secondaryCtaHref="#capabilities"
      />

      <section id="capabilities" className="container mx-auto px-8 lg:px-12 max-w-7xl mb-40 mt-32">
        <div className="max-w-4xl mb-24">
          <div className="flex items-center space-x-2 mb-6">
            <span className="w-2 h-px bg-white/20"></span>
            <span className="text-[10px] font-mono tracking-[0.3em] text-white/40 uppercase">
              Deterministic Insights
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-8">
            MISSION <span className="text-muted-foreground">CRITICAL.</span>
          </h2>
          <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-2xl">
            Our analytics suite provides the structural foundation for autonomous sensing,
            transforming disparate visual streams into verified operational clarity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5">
          {analyticCapabilities.map((capability, index) => (
            <motion.div
              key={capability.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-background p-10 md:p-14 flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="text-white/40">{capability.icon}</div>
                <span className="text-[10px] font-mono text-white/10">{capability.id}</span>
              </div>

              <h3 className="text-2xl font-medium text-white mb-6">{capability.title}</h3>
              <p className="text-muted-foreground font-light mb-8">{capability.description}</p>

              <div className="mb-10 border border-white/5">
                <TechnicalMedia videoSrc={capability.video} label={capability.title} code={capability.id} />
              </div>

              <div className="mt-auto pt-8 border-t border-white/5 space-y-3">
                {capability.specs.map((spec, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="w-1 h-1 bg-white/20"></div>
                    <span className="text-[11px] font-mono text-white/30 uppercase tracking-widest">{spec}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
