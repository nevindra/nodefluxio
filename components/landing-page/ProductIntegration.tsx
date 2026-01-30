"use client";

import { motion } from "framer-motion";
import { Brain, LayoutDashboard, Zap } from "lucide-react";

export default function ProductIntegration() {
  return (
    <section className="py-24 bg-background border-b border-white/5 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mb-16">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-6 uppercase">
            INTEGRATED <span className="text-muted-foreground">ARCHITECTURE.</span>
          </h2>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            The core intelligence of <span className="text-primary font-medium italic">VisionAIre</span> powers our entire operational ecosystem, 
            providing a unified backbone for specialized insights.
          </p>
        </div>

        <div className="relative flex flex-col items-center justify-center p-8 md:p-20 bg-white/[0.01] border border-white/5 rounded-3xl overflow-hidden">
          {/* Background Grid */}
          <div className="absolute inset-0 z-0 bg-[url('/hero/grid.svg')] opacity-[0.02] [background-size:30px_30px]" />
          
          <div className="relative z-10 w-full max-w-5xl">
            {/* Diagram Container */}
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-12 md:gap-4">
              
              {/* VisionAIre - Source Hub */}
              <div className="relative group w-full md:w-1/3 flex flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative p-8 bg-white/5 border border-primary/20 rounded-xl mb-6 group-hover:border-primary/50 transition-all duration-500 shadow-xl"
                >
                  <Zap className="w-12 h-12 text-primary" />
                  {/* Subtle rings */}
                  <motion.div 
                    animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.1, 0.05] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute inset-0 border border-primary/20 rounded-xl"
                  />
                </motion.div>
                <div className="text-center">
                  <h4 className="text-xl font-medium text-white mb-1 uppercase tracking-wider">VisionAIre</h4>
                  <span className="text-[10px] font-mono text-primary/80 font-bold uppercase tracking-[0.2em]">Core Engine</span>
                  <p className="text-xs text-muted-foreground mt-4 max-w-[180px] font-light">
                    Massive-scale stream processing & metadata extraction.
                  </p>
                </div>
              </div>

              {/* Connecting Lines (Desktop) */}
              <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[45%] w-full h-[120%] pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 1000 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Glow paths */}
                  <defs>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                    <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="hsl(var(--primary) / 0.3)" />
                      <stop offset="100%" stopColor="hsl(var(--primary) / 0)" />
                    </linearGradient>
                  </defs>

                  {/* Line to Lenz */}
                  <motion.path 
                    d="M 350 250 C 500 250, 500 130, 650 130" 
                    stroke="url(#lineGrad)" 
                    strokeWidth="1"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                  />
                  
                  {/* Line to Athena */}
                  <motion.path 
                    d="M 350 250 C 500 250, 500 370, 650 370" 
                    stroke="url(#lineGrad)" 
                    strokeWidth="1"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
                  />
                  
                  {/* Animated Pulses - Lenz */}
                  {[0, 1, 2].map((i) => (
                    <motion.circle key={`lenz-p-${i}`} r="2" fill="hsl(var(--primary) / 0.4)" filter="url(#glow)">
                      <animateMotion 
                        dur="4s" 
                        repeatCount="indefinite" 
                        path="M 350 250 C 500 250, 500 130, 650 130"
                        begin={`${i * 1.5}s`}
                      />
                    </motion.circle>
                  ))}
                  
                  {/* Animated Pulses - Athena */}
                  {[0, 1, 2].map((i) => (
                    <motion.circle key={`ath-p-${i}`} r="2" fill="hsl(var(--primary) / 0.4)" filter="url(#glow)">
                      <animateMotion 
                        dur="5s" 
                        repeatCount="indefinite" 
                        path="M 350 250 C 500 250, 500 370, 650 370"
                        begin={`${i * 2 + 0.5}s`}
                      />
                    </motion.circle>
                  ))}
                </svg>
              </div>

              {/* Consumers Side */}
              <div className="w-full md:w-1/3 flex flex-col gap-12">
                {/* Lenz */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="group relative flex items-center gap-6 p-6 bg-white/[0.02] border border-white/10 rounded-xl hover:bg-white/[0.04] hover:border-primary/30 transition-all duration-300"
                >
                  <div className="p-3 bg-white/5 border border-white/10 rounded-lg group-hover:text-primary transition-colors">
                    <LayoutDashboard className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1 uppercase tracking-tight">Lenz</h4>
                    <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">Operational Hub</span>
                    <div className="mt-2 flex gap-1 items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-[9px] font-mono text-primary/80 font-bold uppercase">Metadata Stream</span>
                    </div>
                  </div>
                </motion.div>

                {/* Athena */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="group relative flex items-center gap-6 p-6 bg-white/[0.02] border border-white/10 rounded-xl hover:bg-white/[0.04] hover:border-primary/50 transition-all duration-300"
                >
                  <div className="p-3 bg-white/5 border border-white/10 rounded-lg group-hover:text-primary transition-colors">
                    <Brain className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1 uppercase tracking-tight">Athena</h4>
                    <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">Generative Intelligence</span>
                    <div className="mt-2 flex gap-1 items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/60 animate-pulse" />
                      <span className="text-[9px] font-mono text-primary/60 font-bold uppercase">Insight API</span>
                    </div>
                  </div>
                </motion.div>
              </div>

            </div>

            {/* Bottom Technical Labels */}
            <div className="mt-16 pt-8 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Data Source", value: "VisionAIre V2" },
                { label: "Throughput", value: "3.2 TB/s" },
                { label: "Sync Mode", value: "Zero Latency" },
                { label: "Interface", value: "Unified SDK" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="text-[9px] font-mono text-white/20 uppercase tracking-[0.2em] mb-1">{item.label}</div>
                  <div className="text-xs font-mono text-white/60 font-medium">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
