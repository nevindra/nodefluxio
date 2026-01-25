"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Radio,
    Video,
    Map,
    Truck,
    Server,
    Monitor,
    Database,
    LayoutDashboard,
    ArrowRight,
    ShieldCheck,
    Cpu
} from "lucide-react";

const stages = [
    {
        title: "Edge Capture",
        id: "STG-01",
        nodes: [
            { name: "Tactical Body Cam", icon: <Radio className="w-5 h-5 text-blue-400" />, desc: "Personnel-worn sensing for field teams" },
            { name: "Fixed Infrastructure", icon: <Video className="w-5 h-5 text-blue-400" />, desc: "Permanent municipal or site cameras" },
            { name: "Aerial Recon", icon: <Map className="w-5 h-5 text-blue-400" />, desc: "UAVs for bird's-eye monitoring" }
        ]
    },
    {
        title: "Intelligence Hub",
        id: "STG-02",
        nodes: [
            { name: "Mobile Command", icon: <Truck className="w-5 h-5 text-emerald-400" />, desc: "Forward station to gather video feeds" }
        ]
    },
    {
        title: "AI Analysis",
        id: "STG-03",
        nodes: [
            { name: "VisionAIre Compute", icon: <Cpu className="w-5 h-5 text-amber-400" />, desc: "AI engine for threat and identity analysis" },
            { name: "Sovereign Vault", icon: <Server className="w-5 h-5 text-amber-400" />, desc: "Secure local storage for all data" }
        ]
    },
    {
        title: "Mission Output",
        id: "STG-04",
        nodes: [
            { name: "Command Dashboard", icon: <LayoutDashboard className="w-5 h-5 text-white" />, desc: "Unified display for alerts and mapping" },
            { name: "Evidence Archive", icon: <Database className="w-5 h-5 text-white" />, desc: "Secure retrieval for forensics and reports" }
        ]
    }
];

export function TacticalTopology() {
    return (
        <div className="w-full py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-0 relative">
                {stages.map((stage, sIdx) => (
                    <div key={stage.id} className="relative flex flex-col">
                        {/* Stage Header */}
                        <div className="mb-8 px-6">
                            <div className="flex items-center space-x-2 mb-2">
                                <span className="text-[10px] font-mono text-white/20 tracking-[0.2em]">{stage.id}</span>
                                <div className="h-px flex-1 bg-white/5"></div>
                            </div>
                            <h3 className="text-xs font-mono uppercase tracking-[0.3em] text-white/40">{stage.title}</h3>
                        </div>

                        {/* Stage Nodes */}
                        <div className="flex-1 space-y-4 px-4 pb-8 relative z-10">
                            {stage.nodes.map((node, nIdx) => (
                                <motion.div
                                    key={node.name}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: (sIdx * 0.2) + (nIdx * 0.1) }}
                                    className="group relative bg-white/[0.02] border border-white/5 p-4 hover:border-white/20 transition-all duration-300"
                                >
                                    <div className="flex items-start space-x-4">
                                        <div className="mt-1 p-2 bg-white/5 rounded-sm group-hover:bg-white/10 transition-colors">
                                            {node.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-[11px] font-mono uppercase tracking-wider text-white mb-1">{node.name}</h4>
                                            <p className="text-[10px] text-white/30 font-light leading-relaxed">{node.desc}</p>
                                        </div>
                                    </div>

                                    {/* Node Accents */}
                                    <div className="absolute top-0 right-0 w-4 h-px bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <div className="absolute top-0 right-0 h-4 w-px bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Connecting Arrows for Desktop */}
                        {sIdx < stages.length - 1 && (
                            <div className="absolute top-1/2 -right-4 translate-y-[-50%] z-20 hidden md:block opacity-20">
                                <ArrowRight className="w-8 h-8 text-white/40" strokeWidth={1} />
                            </div>
                        )}

                        {/* Background Column Lines */}
                        <div className="absolute inset-y-0 right-0 w-px bg-white/5 pointer-events-none hidden md:block"></div>
                    </div>
                ))}
            </div>

            {/* Decision Block - Bottom Highlight */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="mt-12 mx-4 bg-blue-600/10 border border-blue-500/20 p-8 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
            >
                <div className="absolute inset-0 bg-hero-pattern [background-size:20px_20px] opacity-[0.03]"></div>
                <div className="relative z-10">
                    <div className="flex items-center space-x-3 mb-2 text-blue-400">
                        <ShieldCheck className="w-5 h-5" />
                        <span className="text-[10px] font-mono uppercase tracking-[0.4em]">Integrated Intelligence</span>
                    </div>
                    <h3 className="text-2xl font-medium tracking-tight text-white uppercase">Faster Decisions, Smarter Operations</h3>
                </div>
                <div className="relative z-10 flex space-x-4">
                    <div className="text-right">
                        <div className="text-[10px] font-mono text-white/20 uppercase mb-1">Status</div>
                        <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest flex items-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse mr-2"></span>
                            ACTIVE
                        </div>
                    </div>
                    <div className="w-px h-10 bg-white/10"></div>
                    <div className="text-right">
                        <div className="text-[10px] font-mono text-white/20 uppercase mb-1">Alert Speed</div>
                        <div className="text-xs font-mono text-white tracking-widest">Real-Time</div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
