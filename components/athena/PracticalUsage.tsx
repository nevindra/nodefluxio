"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
    ChatCircle,
    FileSearchIcon,
    MagnifyingGlass,
    ChartLineUp,
    ArrowRight,
} from "@phosphor-icons/react";

const useCases = [
    {
        title: "Custom Chatbot",
        subtitle: "Virtual Assistant",
        description:
            "Build AI-powered chatbots trained on your company data. Deploy for customer service, internal support, or employee onboarding.",
        icon: ChatCircle,
        tag: "Most Popular",
    },
    {
        title: "Document Q&A",
        subtitle: "Instant Answers",
        description:
            "Upload PDFs, contracts, or manuals. Ask questions in natural language and get precise answers with source citations.",
        icon: FileSearchIcon,
        tag: "Time Saver",
    },
    {
        title: "Knowledge Search",
        subtitle: "Semantic Discovery",
        description:
            "Go beyond keyword search. Find relevant information across your wikis, SOPs, and documentation using meaning, not just words.",
        icon: MagnifyingGlass,
        tag: "Enterprise",
    },
    {
        title: "Report Generation",
        subtitle: "Automated Insights",
        description:
            "Transform raw data into executive summaries, compliance reports, and actionable insights automatically.",
        icon: ChartLineUp,
        tag: "Efficiency",
    },
];

export function PracticalUsage() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            ref={ref}
            className="py-24 md:py-32 bg-background relative overflow-hidden"
        >
            {/* Background accent */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-[150px]" />
            </div>

            <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center space-y-6 mb-16 md:mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                        <span className="text-[10px] font-mono text-primary tracking-[0.2em] uppercase">
                            Practical Applications
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight">
                        BUILD WHAT YOU{" "}
                        <span className="text-muted-foreground">NEED.</span>
                    </h2>

                    <p className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
                        From chatbots to document intelligence, Athena powers real-world
                        applications that transform how your team works.
                    </p>
                </motion.div>

                {/* Use Cases Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {useCases.map((useCase, index) => (
                        <motion.div
                            key={useCase.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                duration: 0.6,
                                delay: 0.1 + index * 0.1,
                            }}
                            className="group relative"
                        >
                            <div className="absolute inset-0 bg-primary/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative p-6 md:p-8 rounded-2xl border border-border/60 bg-background/80 backdrop-blur-sm hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 h-full">
                                {/* Tag */}
                                <div className="absolute top-4 right-4 md:top-6 md:right-6">
                                    <span className="text-[9px] font-mono text-primary/70 uppercase tracking-widest px-2 py-1 rounded-full bg-primary/5 border border-primary/10">
                                        {useCase.tag}
                                    </span>
                                </div>

                                {/* Icon */}
                                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-muted/50 border border-border/50 flex items-center justify-center text-muted-foreground group-hover:text-primary group-hover:bg-primary/5 group-hover:border-primary/20 transition-all duration-300 mb-6">
                                    <useCase.icon className="w-7 h-7 md:w-8 md:h-8" />
                                </div>

                                {/* Content */}
                                <div className="space-y-3">
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-medium text-foreground tracking-tight">
                                            {useCase.title}
                                        </h3>
                                        <span className="text-xs font-mono text-primary uppercase tracking-widest">
                                            {useCase.subtitle}
                                        </span>
                                    </div>

                                    <p className="text-sm md:text-base text-muted-foreground font-light leading-relaxed">
                                        {useCase.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
