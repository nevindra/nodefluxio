"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Brain, Database, Network, ArrowRight } from "lucide-react";
import RAGAnimation from "@/components/athena/RAGAnimation";
import AgenticAnimation from "@/components/athena/AgenticAnimation";
import KnowledgeGraphAnimation from "@/components/athena/KnowledgeGraphAnimation";

const capabilities = [
    {
        id: "rag",
        title: "01 // Intelligent Retrieval",
        heading: "Grounded in Your Data.",
        description: "Athena doesn't hallucinate. It retrieves facts from your vectorized business documents to provide accurate, cited answers every time.",
        icon: Database,
        component: <RAGAnimation />,
    },
    {
        id: "agentic",
        title: "02 // Agentic Workflow",
        heading: "Autonomous Reasoning.",
        description: "Beyond simple chat, Athena breaks down complex operational problems into multi-step execution plans and solves them autonomously.",
        icon: Brain,
        component: <AgenticAnimation />,
    },
    {
        id: "graph",
        title: "03 // Knowledge Graph",
        heading: "Contextual Understanding.",
        description: "Connecting the dots between isolated data points. Athena maintains a dynamic graph of relationships between people, assets, and events.",
        icon: Network,
        component: <KnowledgeGraphAnimation />,
    },
];

export function CapabilitiesScroll() {
    return (
        <section className="relative bg-background py-4 md:py-8">
            <div className="w-full">
                {capabilities.map((cap, index) => (
                    <CapabilityRow key={cap.id} capability={cap} index={index} />
                ))}
            </div>
        </section>
    );
}

function CapabilityRow({ capability, index }: { capability: typeof capabilities[0], index: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <div ref={ref} className={`min-h-[90vh] flex flex-col lg:flex-row items-center gap-12 lg:gap-24 py-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>

            {/* Text Content */}
            <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, margin: "-20%" }}
                className="lg:w-2/5 space-y-8"
            >
                <div className="inline-flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-widest border-b border-primary/20 pb-2">
                    <capability.icon className="w-4 h-4" />
                    {capability.title}
                </div>

                <div className="space-y-4">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter text-foreground">
                        {capability.heading}
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-lg">
                        {capability.description}
                    </p>
                </div>

                <div className="pt-4">
                    <button className="group flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-foreground/60 hover:text-primary transition-colors">
                        <span className="w-8 h-[1px] bg-foreground/30 group-hover:bg-primary transition-colors" />
                        Explore Technicals
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                </div>
            </motion.div>

            {/* Visual Component */}
            <motion.div
                style={{ y: typeof window !== 'undefined' && window.innerWidth < 1024 ? 0 : y, opacity }}
                className="lg:w-3/5 w-full"
            >
                <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/3] w-full rounded-2xl overflow-hidden border border-border/50 bg-background/50 shadow-2xl">
                    {capability.component}

                    {/* Overlay Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 bg-background/80 backdrop-blur border border-border/50 rounded-lg text-[10px] font-mono text-muted-foreground uppercase tracking-widest z-10">
                        Live Simulation
                    </div>
                </div>
            </motion.div>

        </div>
    );
}
