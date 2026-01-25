"use client";

import { motion } from "framer-motion";
import { Cpu, LayoutDashboard, Sparkles, Zap, Brain, ArrowRight } from "lucide-react";

const features = [
  {
    title: "VisionAIre",
    description: "A high-performance AI stream processing platform engineered for ultra-fast inference and real-time visual intelligence at scale.",
    icon: <Zap className="w-5 h-5 text-primary" />,
    code: "VAI_STREAM",
    id: "01"
  },
  {
    title: "Lenz",
    description: "A comprehensive AI Video Surveillance dashboard and data processing engine that transforms raw detections into actionable operational insights.",
    icon: <LayoutDashboard className="w-5 h-5 text-primary" />,
    code: "LNZ_DASH",
    id: "02"
  },
  {
    title: "Athena",
    description: "Our advanced LLM integration platform designed to bring generative intelligence and natural language reasoning to your vision data ecosystem.",
    icon: <Brain className="w-5 h-5 text-primary" />,
    code: "ATH_INTEG",
    id: "03"
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-background border-b border-white/5 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6 uppercase">
              PRODUCT <span className="text-muted-foreground">ECOSYSTEM.</span>
            </h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              Explore our core suite of AI solutions engineered for maximum operational integrity,
              from ultra-fast stream processing to advanced LLM integration.
            </p>
          </div>
          <div className="hidden md:block pt-4 text-right">
            <span className="text-[10px] font-mono text-white/20 tracking-widest uppercase block mb-1">
              Specification v4.3.0
            </span>
            <div className="flex gap-1 justify-end">
              {[...Array(5)].map((_, i) => (
                <div key={i} className={`w-1 h-1 ${i < 3 ? 'bg-primary/50' : 'bg-white/5'}`} />
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* VisionAIre - Large Feature */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 group relative bg-white/[0.01] border border-white/5 p-6 md:p-8 overflow-hidden flex flex-col"
          >
            {/* Background Decorative */}
            <div className="absolute inset-0 z-0">
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
              <div className="absolute inset-0 bg-[url('/hero/grid.svg')] opacity-[0.03] [background-size:40px_40px]" />
              {/* Animated Scanline */}
              <motion.div
                animate={{ y: ["0%", "100%", "0%"] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent h-1/2 w-full pointer-events-none"
              />
            </div>

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-8">
                <div className="relative">
                  <div className="absolute -inset-4 bg-primary/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative p-4 bg-white/5 border border-white/10 group-hover:border-primary/50 transition-colors">
                    <Zap className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div className="text-right">
                  <span className="block text-xs font-mono text-white/20 mb-1">VAI_STREAM_v2.4</span>
                  <div className="flex gap-2 items-center justify-end">
                    <span className="text-xs font-mono text-purple-400 animate-pulse font-bold tracking-tight">INFRA_SYNC</span>
                    <div className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_12px_rgba(168,85,247,0.8)]" />
                  </div>
                </div>
              </div>

              <h3 className="text-4xl font-medium text-white mb-4">VisionAIre</h3>
              <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-xl mb-8">
                A high-performance AI stream processing platform engineered for
                <span className="text-white italic font-medium"> zero-latency inference </span>
                and real-time visual intelligence at massive industrial scale.
              </p>

              {/* Enhanced Visual Features for VisionAIre */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { label: "Connectivity", value: "Agnostic", sub: "Universal Input" },
                  { label: "Deployment", value: "500+", sub: "Concurrent Streams" },
                  { label: "Integration", value: "API First", sub: "RESTful Sync" }
                ].map((stat) => (
                  <div key={stat.label} className="p-4 bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
                    <div className="text-[10px] font-mono text-white/20 uppercase tracking-widest mb-1">{stat.label}</div>
                    <div className="text-xl font-medium text-white mb-1">{stat.value}</div>
                    <div className="text-[10px] font-mono text-purple-400/90 font-medium">{stat.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Side Column for Small Features */}
          <div className="flex flex-col gap-4">
            {/* Lenz - Small Feature */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group relative bg-white/[0.01] border border-white/5 p-6 overflow-hidden flex flex-col flex-1"
            >
              {/* Decorative Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative z-10 mb-6 flex justify-between items-start">
                <div className="p-3 bg-white/5 border border-white/10 group-hover:border-primary/40 transition-colors">
                  <LayoutDashboard className="w-6 h-6 text-primary" />
                </div>
                <span className="text-[10px] font-mono text-white/20">LNZ_DASH</span>
              </div>

              <div className="relative z-10 flex-1">
                <h3 className="text-2xl font-medium text-white mb-2">Lenz</h3>
                <p className="text-muted-foreground font-light text-sm leading-relaxed mb-6">
                  Industrial-grade surveillance engine that transforms raw visual metadata into
                  <span className="text-white/80"> actionable operational intelligence.</span>
                </p>

                {/* Visual mini-HUD for Lenz */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between p-2 bg-white/[0.02] border-l-2 border-primary/40">
                    <span className="text-[10px] font-mono text-white/40 uppercase">Alert Management</span>
                    <span className="text-[10px] font-mono text-purple-400 font-bold tracking-tight shadow-primary/20 drop-shadow-sm">REAL-TIME</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-white/[0.02] border-l-2 border-white/10">
                    <span className="text-[10px] font-mono text-white/40 uppercase">Analytics Core</span>
                    <span className="text-[10px] font-mono text-white/60">STRONG</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-white/[0.02] border-l-2 border-white/10">
                    <span className="text-[10px] font-mono text-white/40 uppercase">3rd Party SYNC</span>
                    <span className="text-[10px] font-mono text-white/60">INTEGRATION_READY</span>
                  </div>
                </div>
              </div>

              {/* Mini HUD decoration */}
              <div className="relative z-10 h-10 w-full flex items-end gap-1 border-b border-white/5 pb-2">
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ height: [4, Math.random() * 20 + 4, 4] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                    className="w-full bg-primary/10"
                  />
                ))}
              </div>
            </motion.div>

            {/* Athena - Small Feature */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="group relative bg-white/[0.01] border border-white/5 p-6 overflow-hidden flex flex-col flex-1"
            >
              {/* Decorative Background */}
              <div className="absolute inset-0 z-0">
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
              </div>

              <div className="relative z-10 mb-6 flex justify-between items-start">
                <div className="p-3 bg-white/5 border border-white/10 group-hover:border-primary/40 transition-colors">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <span className="text-[10px] font-mono text-white/20">ATH_INTEG</span>
              </div>

              <div className="relative z-10 flex-1">
                <h3 className="text-2xl font-medium text-white mb-2">Athena</h3>
                <p className="text-muted-foreground font-light text-sm leading-relaxed mb-6">
                  Advanced generative framework specialized in RAG-driven insights across
                  <span className="text-white/80"> big-data vision ecosystems.</span>
                </p>

                {/* Visual Feature Tokens for Athena */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {["RAG Architecture", "Smart LLM Core", "Vision Context"].map((token) => (
                    <div key={token} className="px-2 py-1 bg-primary/10 border border-primary/30 text-[9px] font-mono text-purple-400 font-bold uppercase tracking-tight">
                      {token}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
