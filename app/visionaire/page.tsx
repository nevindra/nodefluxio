"use client";

import { SingleHero } from "@/components/hero/SingleHero";
import ProductIntegration from "@/components/landing-page/ProductIntegration";
import { motion } from "framer-motion";
import {
  Car,
  Crosshair,
  Maximize,
  Network,
  Plus,
  Scan,
  Users,
  Zap
} from "lucide-react";

const analyticModels = [
  {
    title: "Face Recognition",
    id: "ANL-FR-01",
    description: "Biometric matching engine for sub-second verification across watchlists.",
    icon: <Scan className="w-5 h-5" />,
    specs: ["Accuracy 99.8%", "Multi-angle"],
    video: "/videos/face-recognition.mp4"
  },
  {
    title: "People Analytics",
    id: "ANL-PA-01",
    description: "Real-time occupancy tracking, density mapping, and flow analysis.",
    icon: <Users className="w-5 h-5" />,
    specs: ["Heatmap", "Queue Monitoring"],
    video: "/videos/people-analytics.mp4"
  },
  {
    title: "Vehicle Analytics",
    id: "ANL-VA-01",
    description: "Categorizing vehicles by type, color, and make for urban planning.",
    icon: <Crosshair className="w-5 h-5" />,
    specs: ["80+ Categories", "Speed Estimation"],
    video: "/videos/vehicle-analytics.mp4"
  },
  {
    title: "License Plate Recognition",
    id: "ANL-LPR-01",
    description: "High-speed registration plate identification for traffic law enforcement.",
    icon: <Car className="w-5 h-5" />,
    specs: ["OCR Optimization", "95%+ Accuracy"],
    video: "/videos/lpr.mp4"
  },
  {
    title: "And many more...",
    id: "ANL-CUSTOM",
    description: "Explore our full catalog of 100+ production-ready computer vision models.",
    icon: <Plus className="w-5 h-5" />,
    specs: [],
    isCustom: true
  }
];

import { useState } from "react";

export default function Analytics() {
  const [selectedModel, setSelectedModel] = useState(analyticModels[0]);

  return (
    <main className="min-h-screen bg-background pb-40">
      {/* 1st Section: Subpage Hero Variant */}
      <SingleHero
        videoSrc="/videos/analytics-hero.mp4"
        title={<>ALGORITHMIC <br /><span className="text-muted-foreground">PRECISION.</span></>}
        description="Deploying enterprise-grade computer vision models designed for deterministic operational intelligence and situational awareness."
        label="Advanced Analytics Engine"
        secondaryCtaText="Explore Models"
        secondaryCtaHref="#analytics"
      />

      {/* 2nd Section: Product Integration */}
      <ProductIntegration />

      {/* 3rd Section: Analytics and Video Detection */}
      <section id="analytics" className="py-24 md:py-32 bg-background border-b border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-8 lg:px-12 max-w-7xl">
          <div className="max-w-4xl mb-16">
            <div className="flex items-center space-x-2 mb-6">
              <span className="w-2 h-px bg-white/20"></span>
              <span className="text-[10px] font-mono tracking-[0.3em] text-white/40 uppercase">
                Detection Core
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-8">
              ADVANCED <span className="text-muted-foreground">ANALYTICS.</span>
            </h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-2xl">
              Our vision engine processes live video feeds with sub-second latency, 
              detecting patterns and objects that drive operational intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: List (Order Swapped) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-4 mb-4">
                 <h3 className="text-sm font-mono text-white/40 uppercase tracking-[0.3em]">AI Models</h3>
                 <div className="h-px flex-1 bg-white/5" />
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                {analyticModels.map((model, index) => (
                  <motion.div
                    key={model.id}
                    onClick={() => {
                      setSelectedModel(model);
                      if (window.innerWidth < 1024) {
                        document.getElementById('analytics-player')?.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className={`group p-6 border rounded-2xl transition-all cursor-pointer relative overflow-hidden ${
                      selectedModel.id === model.id 
                      ? "bg-primary/5 border-primary/40 shadow-[0_0_30px_rgba(var(--primary),0.1)]" 
                      : "bg-white/[0.02] border-white/5 hover:bg-white/[0.04] hover:border-white/20"
                    }`}
                  >
                    <div className="flex items-center gap-6 relative z-10">
                      <div className={`p-3 rounded-xl transition-colors ${
                        selectedModel.id === model.id ? "bg-primary/10 text-primary" : "bg-white/5 text-white/20 group-hover:text-white/40"
                      }`}>
                        {model.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className={`text-lg font-medium transition-colors ${
                          selectedModel.id === model.id ? "text-primary" : "text-white group-hover:text-white/80"
                        }`}>
                          {model.title}
                        </h4>
                        <p className="text-xs text-muted-foreground font-light line-clamp-1 mt-1">
                          {model.description}
                        </p>
                      </div>
                      {selectedModel.id === model.id && (
                        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(var(--primary),0.5)]" />
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column: Sticky Preview Area */}
            <div id="analytics-player" className="lg:col-span-7 lg:sticky lg:top-32 space-y-6">
              {selectedModel.isCustom ? (
                /* Custom Solutions Message */
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="relative w-full aspect-video bg-[#0c0f16] border border-primary/20 overflow-hidden shadow-2xl rounded-3xl p-12 flex flex-col justify-center items-center text-center group"
                >
                   {/* Background Decor */}
                   <div className="absolute inset-0 bg-[url('/hero/grid.svg')] opacity-[0.03] [background-size:40px_40px]" />
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 blur-[100px] rounded-full" />
                   
                   <div className="relative z-10 max-w-lg">
                      <p className="text-lg text-muted-foreground font-light leading-relaxed mb-8">
                        We don't just provide models; we build tailored AI ecosystems. 
                        From custom model training to specialized processing pipelines, 
                        our architecture is designed to handle your most unique operational use cases.
                      </p>
                      <div className="flex flex-wrap justify-center gap-3">
                         {["Custom Algorithm", "End-to-End Integration", "Proprietary Data Support"].map((tag, i) => (
                           <span key={i} className="text-[10px] font-mono text-primary/60 border border-primary/20 px-3 py-1.5 rounded-full uppercase tracking-widest bg-primary/5">
                             {tag}
                           </span>
                         ))}
                      </div>
                   </div>
                </motion.div>
              ) : (
                /* Standard Video Player */
                <div className="relative w-full aspect-video bg-[#0c0f16] border border-white/10 overflow-hidden shadow-2xl rounded-3xl group">
                  <div className="absolute inset-0">
                    <video 
                      key={selectedModel.video}
                      autoPlay 
                      muted 
                      loop 
                      playsInline 
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700"
                    >
                      <source src={selectedModel.video} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                  </div>

                  <div className="absolute top-6 left-6 flex flex-col gap-2">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                        <span className="text-[10px] font-mono text-white tracking-widest uppercase bg-black/40 backdrop-blur-md px-2 py-1 rounded">Live Analysis Feed</span>
                      </div>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6">
                      <div className="p-4 bg-black/40 backdrop-blur-md border border-white/10 rounded-xl max-w-fit">
                         <div className="flex items-center gap-3 text-primary mb-1">
                            {selectedModel.icon}
                            <span className="text-sm font-medium uppercase tracking-wider">{selectedModel.title}</span>
                         </div>
                         <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest">{selectedModel.id}</div>
                      </div>
                  </div>

                  <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-primary/10 blur-[150px] pointer-events-none rounded-full" />
                </div>
              )}

              {/* Active Model Details (Metadata) */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {selectedModel.specs.map((spec, i) => (
                    <div key={i} className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl flex flex-col gap-2">
                       <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest">
                         {selectedModel.isCustom ? "Feature" : "Metric"}
                       </span>
                       <span className="text-sm font-mono text-white/80 font-medium">{spec}</span>
                    </div>
                  ))}
                  <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl flex flex-col gap-2">
                     <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest">Deploy</span>
                     <span className="text-sm font-mono text-white/80 font-bold uppercase">
                        {selectedModel.isCustom ? "Consult" : "Ready"}
                     </span>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4th Section: Capabilities (Fast processing, 500+ streams) */}
      <section className="py-24 md:py-32 bg-background border-b border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-8 lg:px-12 max-w-7xl">
          <div className="max-w-4xl mb-24 text-center mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <span className="w-2 h-px bg-white/20"></span>
              <span className="text-[10px] font-mono tracking-[0.3em] text-white/40 uppercase">
                Enterprise Performance
              </span>
              <span className="w-2 h-px bg-white/20"></span>
            </div>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-8">
              SCALABLE <span className="text-muted-foreground">FOUNDATION.</span>
            </h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-3xl mx-auto">
              Engineered for the most demanding environments, VisionAIre delivers unmatched 
              processing power with the reliability of national-grade infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Massive Connection",
                value: "500+",
                unit: "Streams",
                description: "Proven experience in managing over 500 simultaneous high-definition streams with consistent performance and zero frame drops.",
                icon: Network,
                color: "text-blue-400",
                bg: "bg-blue-400/5"
              },
              {
                title: "Ultra-Fast Processing",
                value: "<200",
                unit: "ms",
                description: "Optimized inference engines that deliver sub-second response times, essential for mission-critical security and real-time operations.",
                icon: Zap,
                color: "text-amber-400",
                bg: "bg-amber-400/5"
              },
              {
                title: "Elastic Scalability",
                value: "99.9",
                unit: "%",
                description: "A cloud-native architecture that scales horizontally to meet fluctuating demand while maintaining peak availability.",
                icon: Maximize,
                color: "text-primary",
                bg: "bg-primary/5"
              }
            ].map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group p-8 lg:p-12 bg-white/[0.02] border border-white/5 rounded-3xl hover:bg-white/[0.04] transition-all duration-500 overflow-hidden"
              >
                {/* Background Pattern */}
                <div className={`absolute top-0 right-0 w-32 h-32 ${capability.bg} rounded-bl-full opacity-50 group-hover:scale-110 transition-transform duration-700`} />
                
                <div className={`p-3 w-fit rounded-xl ${capability.bg} ${capability.color} mb-8 border border-white/5 group-hover:scale-110 transition-transform`}>
                  <capability.icon className="w-6 h-6" />
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-5xl font-bold text-white tracking-tighter">{capability.value}</span>
                    <span className="text-xl font-light text-muted-foreground uppercase tracking-widest">{capability.unit}</span>
                  </div>
                  <h4 className="text-lg font-medium text-white uppercase tracking-wider">{capability.title}</h4>
                </div>

                <p className="text-muted-foreground font-light leading-relaxed">
                  {capability.description}
                </p>

                <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.2em]">Operational Spec</span>
                  <div className="w-2 h-2 rounded-full bg-emerald-500/50" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Infrastructure Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 border border-white/5 rounded-2xl overflow-hidden">
             {[
               { label: "Hardware Accel", value: "NVIDIA TensorRT" },
               { label: "Architecture", value: "Microservices" },
               { label: "Deployment", value: "Hybrid Cloud" },
               { label: "Connectivity", value: "RTSP / WebRTC" },
             ].map((stat, i) => (
               <div key={i} className="bg-background p-6">
                 <div className="text-[9px] font-mono text-white/20 uppercase tracking-[0.2em] mb-1">{stat.label}</div>
                 <div className="text-xs font-mono text-white/60 font-medium">{stat.value}</div>
               </div>
             ))}
          </div>
        </div>
      </section>
    </main>
  );
}
