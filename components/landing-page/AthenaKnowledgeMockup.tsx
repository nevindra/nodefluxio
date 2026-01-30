"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
    ArrowRight,
    Brain,
    Database,
    FileText,
    Layers,
    Network,
    Plus,
    Search,
    Settings,
    Share2,
    Shield,
    Zap
} from "lucide-react";
import { useState } from "react";

export default function AthenaKnowledgeMockup() {
  const [query, setQuery] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const insights = [
    { title: "Anomaly Detected", detail: "Zone B-4 // Unusual Entry", color: "text-red-400" },
    { title: "Traffic Optimization", detail: "Main Lobby Peak: 14:00", color: "text-primary" },
    { title: "Unit Efficiency", detail: "Server_01 @ 92% Utilization", color: "text-green-400" },
  ];

  return (
    <div className="flex h-full w-full bg-white text-foreground/90 overflow-hidden font-sans text-xs select-none">
      {/* Sidebar - Integrated with Knowledge Graph */}
      <div className="w-40 bg-slate-50 border-r border-black/5 flex flex-col p-3 space-y-4">
        <div>
          <h3 className="text-[9px] font-mono text-black/30 uppercase tracking-[0.2em] mb-3">Knowledge Index</h3>
          <div className="space-y-1.5">
            {[
              { icon: Database, label: "Vector Store" },
              { icon: Network, label: "Knowledge Graph" },
              { icon: Layers, label: "RAG Context" },
              { icon: FileText, label: "Source Docs" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg bg-white border border-black/5 hover:border-primary/30 transition-all cursor-pointer group shadow-sm">
                <item.icon className="w-3 h-3 text-black/40 group-hover:text-primary" />
                <span className="font-medium text-black/60 group-hover:text-foreground text-[10px]">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1">
          <h3 className="text-[9px] font-mono text-black/30 uppercase tracking-[0.2em] mb-3">Live Insights</h3>
          <div className="space-y-2.5">
            {insights.map((insight, i) => (
              <div key={i} className="p-2.5 bg-white border-l-2 border-black/10 hover:border-primary transition-all shadow-sm">
                <div className={`font-bold mb-0.5 text-[10px] ${insight.color}`}>{insight.title}</div>
                <div className="text-[8px] text-black/40 truncate">{insight.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Intelligence Workspace */}
      <div className="flex-1 flex flex-col p-4 md:p-5 min-w-0 bg-white">
        <header className="flex justify-between items-center mb-6 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-1.5 bg-primary/10 border border-primary/20 rounded-xl">
              <Brain className="w-4 h-4 text-primary" />
            </div>
            <div>
              <h1 className="text-base font-bold tracking-tight text-foreground">Athena AI</h1>
              <div className="flex items-center gap-2 text-[8px] text-black/20 uppercase font-mono tracking-widest">
                <span className="w-1 h-1 rounded-full bg-primary/60 animate-pulse" />
                RAG Engine Active
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="p-1.5 bg-slate-50 border border-black/10 rounded-lg text-black/40 hover:text-foreground transition-colors">
              <Share2 className="w-3.5 h-3.5" />
            </button>
            <button className="p-1.5 bg-slate-50 border border-black/10 rounded-lg text-black/40 hover:text-foreground transition-colors">
              <Settings className="w-3.5 h-3.5" />
            </button>
          </div>
        </header>

        {/* Chat / Interaction Area */}
        <div className="flex-1 flex flex-col gap-5 max-w-xl mx-auto w-full overflow-y-auto scrollbar-hide">
           <div className="flex-1 flex flex-col justify-center py-4">
              <AnimatePresence mode="wait">
                {!query ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-5 text-center"
                  >
                    <h2 className="text-xl font-light text-black/60 leading-tight">Expert <span className="text-foreground font-medium italic">operational awareness</span>.</h2>
                    <div className="flex flex-wrap justify-center gap-1.5">
                      {[
                        "Analyze lobby traffic",
                        "Zone B anomalies",
                        "Audit protocols",
                        "System health"
                      ].map((q, i) => (
                        <button 
                          key={i}
                          onClick={() => setQuery(q)}
                          className="px-3 py-1.5 bg-slate-50 border border-black/5 rounded-full text-black/40 hover:text-primary hover:border-primary/20 transition-all text-[9px] font-mono uppercase tracking-wider"
                        >
                          {q}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-4"
                  >
                    <div className="flex gap-3 justify-end">
                      <div className="bg-primary/10 border border-primary/20 p-3 rounded-2xl rounded-tr-none text-foreground text-[11px] shadow-sm">
                        {query}
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-7 h-7 rounded-xl bg-slate-100 flex items-center justify-center shrink-0 border border-black/5">
                        <Brain className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <div className="space-y-3">
                        <div className="bg-slate-50 border border-black/5 p-3 rounded-2xl rounded-tl-none leading-relaxed text-black/60 text-[11px] shadow-sm">
                          Based on the <span className="text-primary font-bold">Lenz OS</span> data stream, I processed a significant increase in vehicle movement.
                          <br /><br />
                          This aligns with the shift change pattern. Security units have been notified.
                        </div>
                        <div className="flex gap-2">
                           <div className="flex items-center gap-1 px-2.5 py-1 bg-green-500/10 border border-green-500/20 rounded-lg text-[8px] text-green-600 font-bold uppercase tracking-widest">
                             <Shield className="w-2.5 h-2.5" /> High Veracity
                           </div>
                           <div className="flex items-center gap-1 px-2.5 py-1 bg-primary/10 border border-primary/20 rounded-lg text-[8px] text-primary font-bold uppercase tracking-widest">
                             <Zap className="w-2.5 h-2.5" /> Real-time
                           </div>
                        </div>
                      </div>
                    </div>
                    <button 
                      onClick={() => setQuery("")}
                      className="text-[9px] font-mono text-black/20 hover:text-black transition-colors uppercase tracking-[0.3em] flex items-center gap-2 mx-auto pt-2"
                    >
                      <Plus className="w-3 h-3 rotate-45" /> New Analysis
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
           </div>

           {/* Input Bar */}
           <div className="relative mb-2 group shrink-0">
             <div className="absolute inset-0 bg-primary/10 blur-xl opacity-0 group-focus-within:opacity-30 transition-opacity" />
             <div className="relative bg-white border border-black/10 rounded-xl p-1.5 flex items-center gap-2 group-focus-within:border-primary/30 transition-all shadow-sm">
                <Search className="w-3.5 h-3.5 text-black/20 ml-2.5" />
                <input 
                  readOnly
                  placeholder="Ask Athena..." 
                  className="flex-1 bg-transparent border-none outline-none py-2 text-xs text-foreground placeholder:text-black/20"
                />
                <button className="h-8 px-4 bg-primary text-white font-bold uppercase tracking-widest text-[9px] rounded-lg flex items-center gap-2 hover:bg-primary/90 transition-all">
                  <span>Analyze</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
             </div>
           </div>
        </div>

        {/* Bottom Metadata */}
        <div className="grid grid-cols-4 gap-4 pt-4 border-t border-black/5 shrink-0 bg-slate-50/50 -mx-5 px-5">
           {[
             { label: "RAG Tokens", value: "3.2M Active" },
             { label: "Context", value: "128k v2" },
             { label: "Mode", value: "Reasoning" },
             { label: "Latency", value: "82ms" },
           ].map((item, i) => (
             <div key={i}>
                <div className="text-[7px] font-mono text-black/20 uppercase mb-0.5 tracking-widest">{item.label}</div>
                <div className="font-bold text-black/60 text-[10px]">{item.value}</div>
             </div>
           ))}
        </div>
      </div>


    </div>
  );
}
