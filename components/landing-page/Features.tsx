"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Bell,
  Brain,
  History,
  LayoutDashboard,
  LineChart,
  Scan
} from "lucide-react";
import { useState } from "react";

import AthenaKnowledgeMockup from "./AthenaKnowledgeMockup";
import LenzDashboardMockup from "./LenzDashboardMockup";
import VisionAIreMockup from "./VisionAIreMockup";

const products = [
  {
    id: "visionaire",
    title: "VisionAIre",
    subtitle: "Enterprise Vision Platform",
    description: "VisionAIre is a comprehensive AI platform providing a set of production-ready Computer Vision models. Deploy advanced recognition capabilities directly into your applications with ease.",
    valueProp: "From Face Recognition to License Plate detection, VisionAIre gives you the building blocks to see and understand the physical world through code.",
    icon: <Scan className="w-6 h-6" />,
    stats: [
      { label: "Models", value: "10+" },
      { label: "Latency", value: "<1000ms" }
    ]
  },
  {
    id: "lenz",
    title: "Lenz",
    subtitle: "Smart Video Monitoring System",
    description: "Lenz is like having an extra set of eyes that never gets tired. It watches your camera feeds 24/7, instantly recognizing people and vehicles while turning video into clear, useful information.",
    valueProp: "Stop spending hours watching security screens. Lenz alerts you only when something important happens, so you can stay focused on running your business safely.",
    icon: <LayoutDashboard className="w-6 h-6" />,
    stats: [
      { label: "Reliability", value: "99.9%" },
      { label: "Alert Speed", value: "Instant" },
      { label: "Precision", value: "High" }
    ]
  },
  {
    id: "athena",
    title: "Athena",
    subtitle: "AI Assistant for Your Business",
    description: "Athena is an intelligent assistant that understands your business data. It connects everything together so you can simply ask questions and get clear, helpful answers in plain English.",
    valueProp: "No more digging through complex reports. Just ask Athena, 'What happened today?' or 'How busy was the lobby?' and get a human-like response in seconds.",
    icon: <Brain className="w-6 h-6" />,
    stats: [
      { label: "Response", value: "Real-time" },
      { label: "Intelligence", value: "Advanced" },
      { label: "Language", value: "English/Indo" }
    ]
  }
];

export default function Features() {
  const [activeTab, setActiveTab] = useState("lenz");
  const [lenzUseCase, setLenzUseCase] = useState<string>("streams");

  return (
    <section id="features" className="py-24 md:py-32 bg-background border-b border-black/[0.03] font-futura">
      <div className="max-w-7xl relative z-20 mx-auto px-4 md:px-6 lg:px-8">
        {/* Unified Header */}
        <div className="max-w-7xl mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center space-x-3 mb-8"
          >
            <div className="w-12 h-[2px] bg-primary"></div>
            <span className="text-xs font-bold tracking-[0.4em] text-primary uppercase">Core Technology Fleet</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold tracking-[0.05em] mb-6 leading-tight text-foreground uppercase"
          >
            Powerful AI Tools <br />
            <span className="text-primary">Engineered for Action.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-foreground/80 font-medium leading-relaxed max-w-4xl"
          >
            We transform complex data into simple, actionable insights. Whether it's 
            keeping your premises safe or answering business questions, our tools do the heavy lifting for you.
          </motion.p>
        </div>

        {/* Tab Headers - Ultra Minimalist Tabs */}
        <div className="flex mb-20 overflow-x-auto scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
          <div className="flex gap-12 relative border-b border-black/[0.03] w-full md:w-auto px-2">
            {products.map((p) => (
              <button
                key={p.id}
                onClick={() => setActiveTab(p.id)}
                className={`flex items-center gap-2.5 py-4 transition-all duration-300 relative group flex-shrink-0 ${
                  activeTab === p.id 
                    ? "text-primary" 
                    : "text-foreground/30 hover:text-foreground/60"
                }`}
              >
                <div className={`transition-all duration-300 ${activeTab === p.id ? "scale-110" : "opacity-40 grayscale group-hover:opacity-100 group-hover:grayscale-0"}`}>
                  {p.icon}
                </div>
                <span className="font-bold uppercase tracking-[0.3em] text-[10px] whitespace-nowrap">{p.title}</span>
                
                {activeTab === p.id && (
                  <motion.div 
                    layoutId="activeTabUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary z-20"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-10">
            <AnimatePresence mode="wait">
              {products.map((p) => p.id === activeTab && (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-primary font-bold text-base md:text-lg uppercase tracking-[0.4em] mb-2">{p.subtitle}</h3>
                      <h4 className="text-xl md:text-2xl font-bold text-foreground tracking-tight uppercase leading-tight mb-4">
                        {p.title}
                      </h4>
                      <p className="text-base md:text-lg text-foreground/80 font-medium leading-relaxed">
                        {p.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-3 gap-8 p-6 border border-black/5 bg-black/[0.02] rounded-xl">
                      {p.stats.map((s) => (
                        <div key={s.label}>
                          <div className="text-[9px] font-bold text-primary uppercase tracking-[0.2em] mb-2">{s.label}</div>
                          <div className="text-xl font-bold text-foreground tracking-tight">{s.value}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-6 pt-4">
                      <button className="px-8 py-4 bg-foreground text-background text-[10px] font-bold rounded-xl hover:bg-foreground/90 transition-all duration-300 uppercase tracking-[0.2em] group flex items-center gap-3">
                        View Specifications <span className="text-background/40 group-hover:text-background group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">↗</span>
                      </button>
                      <button className="px-8 py-4 border border-black/10 text-foreground text-[10px] font-bold rounded-xl hover:bg-black/5 transition-all duration-300 uppercase tracking-[0.2em]">
                        Documentation
                      </button>
                    </div>

                    {p.id === "lenz" && (
                      <div className="pt-10 border-t border-black/5">
                        <div className="text-[10px] font-bold text-primary uppercase mb-6 tracking-[0.3em]">Operational Perspectives</div>
                        <div className="flex flex-wrap gap-3">
                          {[
                            { id: "alerts", label: "Alert Integration", icon: Bell },
                            { id: "history", label: "Event History", icon: History },
                            { id: "stats", label: "Analytics Overlays", icon: LineChart },
                          ].map((uc) => (
                            <button
                              key={uc.id}
                              onClick={() => setLenzUseCase(lenzUseCase === uc.id ? "streams" : uc.id)}
                              className={`flex items-center gap-2.5 px-5 py-2.5 text-[9px] font-bold uppercase tracking-[0.15em] border rounded-full transition-all duration-300 ${
                                lenzUseCase === uc.id
                                  ? "bg-primary text-white border-primary shadow-lg shadow-primary/20"
                                  : "bg-black/[0.02] border-black/10 text-foreground/40 hover:border-black/20 hover:text-foreground/60"
                              }`}
                            >
                              <uc.icon className="w-3.5 h-3.5" />
                              {uc.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Mockup Side */}
          <div className="hidden lg:block lg:col-span-7 relative">
            <div className="relative aspect-[16/10] bg-slate-50 border border-black/5 overflow-hidden shadow-2xl rounded-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full w-full"
                >
                  {activeTab === "lenz" ? (
                    <LenzDashboardMockup useCase={lenzUseCase} />
                  ) : activeTab === "visionaire" ? (
                    <VisionAIreMockup />
                  ) : (
                    <AthenaKnowledgeMockup />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Float Decoration */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/10 blur-[100px] pointer-events-none rounded-full" />
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/5 blur-[100px] pointer-events-none rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
