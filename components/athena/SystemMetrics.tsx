"use client";

import { motion } from "framer-motion";
import { Activity, ShieldCheck, Zap, Database } from "lucide-react";

const metrics = [
    { label: "Query Latency", value: "124ms", icon: Zap, status: "Optimal" },
    { label: "Knowledge Accuracy", value: "99.8%", icon: ShieldCheck, status: "Verified" },
    { label: "Active Vectors", value: "14.2M", icon: Database, status: "Live" },
    { label: "System Status", value: "Operational", icon: Activity, status: "Healthy" },
];

export function SystemMetrics() {
    return (
        <section className="border-y border-border/40 bg-muted/10 backdrop-blur-sm overflow-hidden">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-border/40">
                    {metrics.map((metric, index) => (
                        <div key={index} className="flex-1 p-6 md:p-8 flex items-center justify-between group hover:bg-muted/20 transition-colors cursor-default">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center text-primary/60 group-hover:text-primary group-hover:bg-primary/10 transition-colors">
                                    <metric.icon className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider mb-1">
                                        {metric.label}
                                    </div>
                                    <div className="text-xl font-medium text-foreground tracking-tight">
                                        {metric.value}
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                <span className="text-[10px] text-primary font-mono tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                                    {metric.status}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
