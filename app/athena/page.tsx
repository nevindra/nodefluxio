"use client";

import AgenticAnimation from "@/components/athena/AgenticAnimation";
import KnowledgeGraphAnimation from "@/components/athena/KnowledgeGraphAnimation";
import RAGAnimation from "@/components/athena/RAGAnimation";
import { SingleHero } from "@/components/hero/SingleHero";
import AthenaKnowledgeMockup from "@/components/landing-page/AthenaKnowledgeMockup";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
    Brain,
    Database,
    FileText,
    Network,
    Shield,
    Sparkles,
    Zap
} from "lucide-react";

export default function AthenaPage() {
  const capabilities = [
    {
      title: "Retrieval-Augmented Generation (RAG)",
      description: "Athena utilizes advanced RAG techniques to ground its responses in your specific business data. It doesn't just guess; it retrieves the most relevant information before formulating an answer.",
      icon: <Database className="w-6 h-6" />,
      code: "ATH-RAG-01",
      features: [
        "Vector database integration",
        "Semantic search & retrieval",
        "Source attribution & citations"
      ]
    },
    {
      title: "Agentic Reasoning Workflows",
      description: "Beyond simple chat, Athena can decompose complex tasks into manageable steps. It acts as an agent that can reason through multi-step processes to solve operational challenges.",
      icon: <Brain className="w-6 h-6" />,
      code: "ATH-AGNT-02",
      features: [
        "Chain-of-thought processing",
        "Autonomous task execution",
        "Cross-system orchestration"
      ]
    },
    {
      title: "Dynamic Knowledge Base",
      description: "Athena transforms your unstructured data—reports, logs, and documents—into a structured, queryable knowledge graph that evolves with your business.",
      icon: <Network className="w-6 h-6" />,
      code: "ATH-KNB-03",
      features: [
        "Automatic graph construction",
        "Real-time data synchronization",
        "Contextual relationship mapping"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-background pb-32">
      {/* 1. What is this? - Hero Section */}
      <SingleHero
        title={<>INTELLIGENT <br /><span className="text-muted-foreground">ASSISTANT.</span></>}
        description="Athena is an enterprise-grade AI assistant that transforms your raw business data into actionable intelligence. By bridging the gap between complex data and human language, Athena empowers every team member with expert-level insights."
        label="Athena // Generative AI Product"
        primaryCtaText="Request Early Access"
        secondaryCtaText="Explore Technicals"
        secondaryCtaHref="#how-it-works"
        features={["RAG-Powered", "Agentic Workflows", "Knowledge Graph"]}
      />

      {/* 2. How good is it? - Performance Metrics */}
      <section id="performance" className="py-24 border-b border-white/5 bg-white/[0.01]">
        <div className="container mx-auto px-8 lg:px-24">
          <div className="mb-12">
            <h2 className="text-[10px] font-mono text-primary tracking-[0.3em] uppercase mb-4">Performance Metrics</h2>
            <p className="text-2xl text-white font-light">Engineered for accuracy and speed.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
            {[
              { label: "Response Latency", value: "<1.2s", icon: <Zap className="w-4 h-4" /> },
              { label: "Veracity Score", value: "98.4%", icon: <Shield className="w-4 h-4" /> },
              { label: "Context Window", value: "128k+", icon: <FileText className="w-4 h-4" /> },
              { label: "Live Data Sync", value: "Real-time", icon: <Network className="w-4 h-4" /> }
            ].map((item, i) => (
              <div key={i} className="bg-background p-8 flex flex-col space-y-4">
                <div className="text-white/20">{item.icon}</div>
                <div>
                  <div className="text-[9px] font-mono text-white/30 uppercase tracking-[0.2em] mb-1">{item.label}</div>
                  <div className="text-2xl font-light text-white tracking-tighter">{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. How can I as a user get value? - Capabilities */}
      <section className="py-32 container mx-auto px-8 lg:px-24">
        <div className="grid grid-cols-1 gap-32">
          {capabilities.map((cap, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col lg:flex-row items-start gap-16 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="w-full lg:w-1/3 space-y-8 sticky top-32">
                <div className="inline-block p-4 border border-white/5 bg-white/[0.02] text-primary">
                  {cap.icon}
                </div>
                <div className="space-y-4">
                  <div className="text-[10px] font-mono text-white/20 tracking-widest uppercase">{cap.code}</div>
                  <h2 className="text-3xl font-medium text-white tracking-tight leading-tight">{cap.title}</h2>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    {cap.description}
                  </p>
                </div>
                <ul className="space-y-3">
                  {cap.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-white/60 font-light">
                      <Sparkles className="w-3.5 h-3.5 text-primary/40" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-full lg:w-2/3">
                <div className="relative aspect-video bg-[#05060a] border border-white/5 rounded-none overflow-hidden group">
                  {index === 0 && <RAGAnimation />}
                  {index === 1 && <AgenticAnimation />}
                  {index === 2 && <KnowledgeGraphAnimation />}

                  <div className="absolute bottom-6 right-6 text-[10px] font-mono text-white/20 uppercase tracking-widest bg-black/40 backdrop-blur-md px-4 py-2 border border-white/5 z-20">
                    INTERFACE_STREAM :: {cap.code}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. How is this system working? - Deep Dive */}
      <section id="how-it-works" className="py-32 bg-white/[0.01] border-y border-white/5">
        <div className="container mx-auto px-8 lg:px-24">
          <div className="max-w-4xl mb-24">
            <h2 className="text-4xl md:text-6xl font-medium text-white mb-8 tracking-tighter uppercase">
              THE <span className="text-muted-foreground">ENGINE.</span>
            </h2>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              Athena operates on a sophisticated pipeline that ensures reliability and operational relevance. 
              By combining state-of-the-art LLMs with proprietary data retrieval architectures.
            </p>
          </div>

          <div className="relative aspect-[21/9] w-full border border-white/5 overflow-hidden">
             <AthenaKnowledgeMockup />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full -translate-y-1/2"></div>
        <div className="container mx-auto px-8 lg:px-24 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-medium text-white mb-8 tracking-tighter uppercase">
            REDEFINE <span className="text-muted-foreground">AWARENESS.</span>
          </h2>
          <p className="text-xl text-white/50 font-light mb-12 max-w-2xl mx-auto">
            Ready to integrate Athena into your operational ecosystem? 
            Join our enterprise early access program today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button size="lg" className="h-16 px-12 rounded-none bg-primary text-white hover:bg-primary/90 text-sm uppercase tracking-widest font-bold">
              Become a Partner
            </Button>
            <button className="flex items-center gap-3 text-white/40 hover:text-white transition-colors uppercase tracking-[0.3em] font-mono text-xs">
              <span className="w-10 h-px bg-white/20"></span>
              Technical Specs
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
