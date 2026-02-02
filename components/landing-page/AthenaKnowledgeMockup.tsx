"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Brain,
  Database,
  FileText,
  Stack,
  Graph,
  Plus,
  MagnifyingGlass,
  Gear,
  ShareNetwork,
  Shield,
  Lightning,
  CheckCircle,
  CircleNotch,
  ChartBar,
  TrendUp,
} from "@phosphor-icons/react";
import { useState, useEffect } from "react";

type Stage = "idle" | "thinking" | "retrieving" | "answering";

export default function AthenaKnowledgeMockup() {
  const [query, setQuery] = useState("");
  const [stage, setStage] = useState<Stage>("idle");
  const [currentThought, setCurrentThought] = useState(0);

  const isBusiness = query.includes("Performance") || query.includes("Report");

  const thoughts = isBusiness ? [
    "Aggregating unstructured fiscal data for Q3 period...",
    "Extracting revenue KPIs from localized departmental reports...",
    "Cross-referencing with internal risk/compliance policies...",
    "Validating quarterly growth vectors against historical benchmarks..."
  ] : [
    "Decomposing Zone B-4 video metadata into activity vectors...",
    "Retrieving real-time sensor telemetry from Lenz OS node...",
    "Anatomizing movement patterns for protocol deviations...",
    "Correlating identified anomalies with security shift logs..."
  ];

  const sourceLabels = isBusiness ? ["Fiscal_Q3.pdf", "Dept_Revenue", "Risk_Protocol"] : ["Cam_4_Metadata", "Shift_Logs", "Lenz_Telemetry"];

  useEffect(() => {
    if (query) {
      setStage("thinking");
      setCurrentThought(0);

      const thinkingTimer = setInterval(() => {
        setCurrentThought(prev => {
          if (prev < thoughts.length - 1) return prev + 1;
          clearInterval(thinkingTimer);
          setStage("retrieving");
          return prev;
        });
      }, 1000);

      const retrieveTimer = setTimeout(() => {
        setStage("answering");
      }, 5500);

      return () => {
        clearInterval(thinkingTimer);
        clearTimeout(retrieveTimer);
      };
    } else {
      setStage("idle");
    }
  }, [query, thoughts.length]);

  return (
    <div className="flex h-full w-full bg-white text-foreground/90 overflow-hidden font-sans text-[10px] md:text-xs select-none">
      {/* Sidebar - Hidden on mobile */}
      <div className="hidden md:flex w-32 lg:w-40 bg-slate-50 border-r border-black/5 flex-col p-4 space-y-6 shrink-0">
        <div>
          <h3 className="text-[8px] lg:text-[9px] font-mono text-black/30 uppercase tracking-[0.2em] mb-4">Context engine</h3>
          <div className="space-y-2">
            {[
              { icon: isBusiness ? ChartBar : Database, label: isBusiness ? "Business" : "Vector", active: stage === "retrieving" },
              { icon: Graph, label: "Knowledge", active: stage === "thinking" },
              { icon: Stack, label: "Context", active: stage === "answering" },
              { icon: FileText, label: "Index", active: false },
            ].map((item, i) => (
              <div
                key={i}
                className={`flex items-center gap-2 px-2 py-1.5 rounded-lg border transition-all shadow-sm ${item.active ? 'bg-primary/5 border-primary/30' : 'bg-white border-black/5'}`}
              >
                <item.icon className={`w-3 h-3 ${item.active ? 'text-primary' : 'text-black/40'}`} />
                <span className={`font-medium text-[8px] lg:text-[9px] ${item.active ? 'text-primary' : 'text-black/60'}`}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1">
          <h3 className="text-[8px] lg:text-[9px] font-mono text-black/30 uppercase tracking-[0.2em] mb-4">Metrics</h3>
          <div className="space-y-3">
            <div className="p-2 bg-white border border-black/5 shadow-sm rounded-lg">
              <div className="flex items-center gap-2 font-bold text-[7px] lg:text-[8px] text-black/60 uppercase">
                <div className="w-1 h-1 lg:w-1.5 lg:h-1.5 rounded-full bg-green-500 animate-pulse" />
                Online
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Workspace */}
      <div className="flex-1 flex flex-col p-3 md:p-6 min-w-0 bg-white relative">
        <header className="flex justify-between items-center mb-4 md:mb-8 shrink-0">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="p-1 md:p-1.5 bg-primary/10 border border-primary/30 rounded-lg md:rounded-xl">
              <Brain className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
            </div>
            <div>
              <h1 className="text-xs md:text-sm font-bold tracking-tight text-foreground uppercase tracking-widest">Athena AI</h1>
              <div className="flex items-center gap-2 text-[7px] md:text-[8px] text-black/20 uppercase font-mono tracking-[0.2em]">
                <span className={`w-1 h-1 rounded-full ${stage !== 'idle' ? 'bg-primary animate-pulse' : 'bg-black/20'}`} />
                {stage === "idle" ? "Standby" : stage === "thinking" ? "Reasoning" : stage === "retrieving" ? "Grounding" : "Synthesized"}
              </div>
            </div>
          </div>
          <div className="flex gap-1.5 md:gap-2">
            <button className="hidden sm:block p-1 md:p-1.5 bg-slate-50 border border-black/10 rounded-lg text-black/30">
              <ShareNetwork className="w-3 md:w-3.5 h-3 md:h-3.5" />
            </button>
            <button className="p-1 md:p-1.5 bg-slate-50 border border-black/10 rounded-lg text-black/30">
              <Gear className="w-3 md:w-3.5 h-3 md:h-3.5" />
            </button>
          </div>
        </header>

        <div className="flex-1 flex flex-col gap-3 md:gap-5 w-full max-w-2xl mx-auto overflow-y-auto scrollbar-hide">
          <div className="flex-1 flex flex-col justify-center py-4">
            <AnimatePresence mode="wait">
              {stage === "idle" ? (
                <motion.div
                  key="idle"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6 text-center"
                >
                  <h2 className="text-xl font-light text-black/50 leading-tight">Unified <span className="text-foreground font-medium italic">operational intelligence</span>.</h2>
                  <div className="flex flex-wrap justify-center gap-1.5">
                    {[
                      "Analyze Zone B-4 anomalies",
                      "Q3 Performance Report"
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
                  key="active"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-6"
                >
                  <div className="flex gap-3 justify-end">
                    <div className="bg-primary/5 border border-primary/20 p-3 rounded-2xl rounded-tr-none text-foreground text-[11px]">
                      {query}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-xl bg-slate-50 flex items-center justify-center shrink-0 border border-black/5 shadow-sm">
                      <Brain className={`w-4 h-4 ${stage !== 'answering' ? 'text-primary animate-pulse' : 'text-primary'}`} />
                    </div>

                    <div className="flex-1 space-y-5">
                      <AnimatePresence>
                        {(stage === "thinking" || stage === "retrieving") && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="space-y-4 bg-slate-50 border border-black/5 p-4 rounded-2xl rounded-tl-none overflow-hidden"
                          >
                            <div>
                              <div className="flex items-center gap-2 mb-3">
                                <CircleNotch className="w-3 h-3 text-primary animate-spin" />
                                <span className="text-[9px] font-mono text-primary uppercase tracking-[0.2em] font-bold">Chain-of-Thought</span>
                              </div>
                              <div className="space-y-2.5 pl-4 border-l-2 border-primary/10">
                                {thoughts.map((thought, i) => (
                                  <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -5 }}
                                    animate={{ opacity: i <= currentThought ? 1 : 0.2, x: 0 }}
                                    className={`flex items-center gap-2.5 text-[10px] ${i === currentThought ? 'text-primary font-medium' : 'text-black/40'}`}
                                  >
                                    {i < currentThought ? (
                                      <CheckCircle className="w-3 h-3 text-green-500" />
                                    ) : (
                                      <div className={`w-1 h-1 rounded-full ${i === currentThought ? 'bg-primary animate-pulse' : 'bg-black/20'}`} />
                                    )}
                                    {thought}
                                  </motion.div>
                                ))}
                              </div>
                            </div>

                            {stage === "retrieving" && (
                              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-3 border-t border-black/5">
                                <div className="grid grid-cols-2 gap-2">
                                  {[1, 2].map(i => (
                                    <div key={i} className="px-2.5 py-1.5 bg-white border border-black/5 rounded-lg text-[8px] flex items-center gap-2">
                                      <FileText className="w-3 h-3 text-black/20" />
                                      <div className="flex-1 h-1 bg-black/5 rounded-full overflow-hidden">
                                        <motion.div className="h-full bg-primary/40" animate={{ width: ['0%', '100%'] }} transition={{ duration: 1.5 }} />
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {stage === "answering" && (
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-5">
                          <div className="bg-slate-50 border border-black/5 p-4 rounded-2xl rounded-tl-none leading-relaxed text-black/70 text-[11px] shadow-sm relative overflow-hidden">
                            {isBusiness ? (
                              <>
                                I have synthesized your <span className="text-primary font-bold">Q3 Performance Analysis</span>. Based on processed invoices and internal fiscal documents, I've identified a <span className="text-primary font-bold">12.4% increase</span> in operational margin.
                                <br /><br />
                                Data grounded with absolute veracity across all fiscal departments.
                              </>
                            ) : (
                              <>
                                I have analyzed the <span className="text-primary font-bold">Zone B-4 metadata</span>. I've identified a significant activity deviation that aligns with unauthorized entry protocols.
                                <br /><br />
                                Live sensors and historical logs used for grounding. Response verified by RAG engine.
                              </>
                            )}

                            <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-black/5">
                              {sourceLabels.map((s, i) => (
                                <div key={i} className="px-2 py-0.5 bg-primary/5 border border-primary/20 rounded text-[7px] font-bold text-primary">
                                  SOURCE: {s}
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-50 border border-black/5 rounded-lg text-[8px] text-primary font-bold uppercase tracking-widest">
                              {isBusiness ? <TrendUp className="w-3 h-3" /> : <Shield className="w-3 h-3" />}
                              {isBusiness ? "Grounded Data" : "Verified Grounding"}
                            </div>
                            <div className="flex items-center gap-1.5 px-3 py-1 bg-green-500/5 border border-green-500/20 rounded-lg text-[8px] text-green-600 font-bold uppercase tracking-widest">
                              <Lightning className="w-3 h-3" /> Real-time
                            </div>
                          </div>
                          <button onClick={() => { setQuery(""); setStage("idle"); }} className="text-[9px] font-mono text-black/20 hover:text-black transition-colors uppercase tracking-[0.3em] flex items-center gap-2 pt-2">
                            <Plus className="w-3 h-3 rotate-45" /> New Analysis
                          </button>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="border border-black/10 rounded-xl p-1.5 flex items-center gap-2 bg-white shadow-sm shrink-0">
            <MagnifyingGlass className="w-3.5 h-3.5 text-black/20 ml-2.5" />
            <input readOnly placeholder={query || "Ask Athena..."} className="flex-1 bg-transparent border-none outline-none py-2 text-xs text-foreground placeholder:text-black/10" />
            <button className="h-8 px-5 bg-primary text-white font-bold uppercase tracking-widest text-[9px] rounded-lg">Analyze</button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 mt-6 pt-5 border-t border-black/5 shrink-0">
          {["RAG Engine", "Context", "Reasoning", "Latency"].map((label, i) => (
            <div key={i}>
              <div className="text-[7px] font-mono text-black/20 uppercase mb-0.5 tracking-widest">{label}</div>
              <div className="font-bold text-[10px] text-black/50">
                {i === 0 ? (isBusiness ? 'Fiscal' : 'Vector') :
                  i === 1 ? (isBusiness ? 'Internal' : 'Lenz') :
                    i === 2 ? 'Agentic' : '82ms'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
