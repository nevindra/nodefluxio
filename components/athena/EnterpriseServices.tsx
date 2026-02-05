"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
    Brain,
    Graph,
    FileText,
    ChatCircle,
    Sparkle,
    MagnifyingGlass,
    Lightning,
    Robot,
    TrendUp,
    CheckCircle,
    BookOpen,
    GitBranch,
} from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const llmCapabilities = [
    { name: "Vector Search", icon: MagnifyingGlass, desc: "Semantic similarity" },
    { name: "Document Parsing", icon: FileText, desc: "PDF, Word, Excel" },
    { name: "Entity Extraction", icon: Sparkle, desc: "Auto-detect entities" },
    { name: "Graph Reasoning", icon: Graph, desc: "Relationship inference" },
    { name: "Multi-turn Chat", icon: ChatCircle, desc: "Context retention" },
    { name: "Custom Prompts", icon: BookOpen, desc: "Domain-specific tuning" },
    { name: "Agent Workflows", icon: GitBranch, desc: "Multi-step automation" },
    { name: "Model Routing", icon: Robot, desc: "Best model per task" }
];

export function EnterpriseServices() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="py-24 md:py-32 bg-muted/30 relative border-t border-border/40 overflow-hidden">
            <div className="max-w-[1280px] mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                    {/* Left: LLM & RAG Capabilities */}
                    <div className="space-y-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6 }}
                            className="space-y-4"
                        >
                            <div className="flex items-center gap-2">
                                <div className="w-1 h-1 bg-primary rounded-full" />
                                <span className="text-[10px] font-mono text-primary uppercase tracking-widest">Core Technology</span>
                            </div>
                            <h3 className="text-3xl md:text-4xl font-medium tracking-tight">
                                POWERED BY <br />
                                <span className="text-muted-foreground uppercase tracking-tight">MODERN AI.</span>
                            </h3>
                            <p className="text-muted-foreground font-light leading-relaxed max-w-lg">
                                Built on cutting-edge RAG architecture, knowledge graphs, and agentic workflows. Athena combines the best of retrieval and generation for accurate, grounded responses.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {llmCapabilities.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.1 + i * 0.05 }}
                                    className="flex items-center gap-4 p-4 rounded-2xl bg-background border border-border/60 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all group cursor-default"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-muted/50 flex items-center justify-center text-muted-foreground group-hover:text-primary group-hover:bg-primary/5 transition-colors">
                                        <item.icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <span className="text-sm font-medium text-foreground/80 block">{item.name}</span>
                                        <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">{item.desc}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Use Cases CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative group"
                    >
                        <div className="absolute inset-0 bg-primary/5 rounded-[2rem] blur-3xl group-hover:bg-primary/10 transition-colors" />
                        <div className="relative p-8 md:p-12 rounded-[2rem] border border-primary/20 bg-background/60 backdrop-blur-md space-y-8 flex flex-col justify-center h-full shadow-2xl">
                            <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-[0_0_20px_rgba(var(--primary),0.2)]">
                                <Brain className="w-8 h-8" />
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-3xl md:text-4xl font-medium tracking-tight">
                                    BUILT FOR <br />
                                    <span className="text-primary uppercase tracking-tight">YOUR USE CASE.</span>
                                </h3>
                                <p className="text-muted-foreground font-light leading-relaxed">
                                    From internal knowledge bases to customer support, Athena adapts to how your organization works.
                                </p>
                            </div>

                            <div className="space-y-4 pt-4">
                                <div className="flex items-center gap-4 text-sm text-foreground/80">
                                    <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                                    <span>Internal knowledge search & Q&A</span>
                                </div>
                                <div className="flex items-center gap-4 text-sm text-foreground/80">
                                    <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                                    <span>Document summarization & analysis</span>
                                </div>
                                <div className="flex items-center gap-4 text-sm text-foreground/80">
                                    <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                                    <span>Automated report generation</span>
                                </div>
                                <div className="flex items-center gap-4 text-sm text-foreground/80">
                                    <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                                    <span>Customer support copilot</span>
                                </div>
                            </div>

                            <div className="pt-4">
                                <button className="w-full md:w-auto px-10 py-5 bg-primary text-primary-foreground rounded-2xl text-sm font-semibold hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3 active:scale-[0.98]">
                                    Talk to Our Team <TrendUp className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
