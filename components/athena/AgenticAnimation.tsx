"use client";

import { AnimatePresence, motion } from 'framer-motion';
import {
    Activity,
    Brain,
    Cloud,
    Database,
    Globe,
    MessageSquare,
    Search,
    Server,
    Zap
} from 'lucide-react';
import { useEffect, useState } from 'react';

const WORKFLOW_STEPS = [
  { id: 'input', label: 'User Query', subtext: 'Received Natural Language Input' },
  { id: 'athena', label: 'Athena Orchestrator', subtext: 'Decomposing task into sub-goals' },
  { id: 'dispatch', label: 'Agent Dispatch', subtext: 'Allocating specialized resources' },
  { id: 'execution', label: 'Deep Execution', subtext: 'Consulting external APIs & Databases' },
  { id: 'synthesis', label: 'Final Synthesis', subtext: 'Validating and formatting response' }
];

const AGENTS = [
    { id: 'agent-a', name: 'Researcher', icon: Search, color: '#9333ea', target: ['Web Search', 'Vector DB'] },
    { id: 'agent-b', name: 'Analyst', icon: Activity, color: '#3b82f6', target: ['Analytics API', 'SQL DB'] }
];

const EXTERNAL_RESOURCES = [
    { name: 'Web Search', icon: Globe },
    { name: 'Vector DB', icon: Server },
    { name: 'Analytics API', icon: Cloud },
    { name: 'SQL DB', icon: Database }
];

export default function AgenticAnimation() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % WORKFLOW_STEPS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const currentStatus = WORKFLOW_STEPS[step];

  return (
    <div className="w-full h-full min-h-[450px] bg-[#05060a] relative overflow-hidden flex items-center justify-center font-sans p-8">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.05),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:radial-gradient(white,transparent_80%)]"></div>

      <div className="relative w-full max-w-4xl flex items-center justify-between z-10">
        
        {/* 1. USER INPUT ZONE */}
        <div className="flex flex-col items-center gap-4 w-1/4">
          <div className="text-[10px] uppercase tracking-widest text-white/20 mb-2">Initiation</div>
          <motion.div
            animate={{ 
                scale: step === 0 ? 1.1 : 1,
                borderColor: step === 0 ? 'rgba(147,51,234,0.5)' : 'rgba(255,255,255,0.05)'
            }}
            className="w-16 h-16 rounded-2xl border flex items-center justify-center bg-white/[0.02] backdrop-blur-xl relative"
          >
            <MessageSquare className={`w-8 h-8 ${step === 0 ? 'text-primary' : 'text-white/20'}`} />
            {step === 0 && (
                <motion.div 
                    layoutId="ring"
                    className="absolute -inset-2 border border-primary/20 rounded-2xl animate-pulse"
                />
            )}
          </motion.div>
          <div className="text-center">
            <div className="text-[10px] text-white/40 font-mono">USER_INPUT</div>
          </div>
        </div>

        {/* CONNECTION FLOW 1 */}
        <div className="flex-1 h-px relative bg-white/5 mx-4 overflow-hidden">
            {step === 1 && (
                <motion.div 
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/50 to-transparent"
                />
            )}
        </div>

        {/* 2. ATHENA (THE BRAIN) */}
        <div className="flex flex-col items-center gap-4 w-1/4">
          <div className="text-[10px] uppercase tracking-widest text-primary mb-2">Processing</div>
          <motion.div
            animate={{ 
                scale: step >= 1 ? 1.05 : 1,
                boxShadow: step >= 1 ? '0 0 30px rgba(147, 51, 234, 0.2)' : '0 0 0px transparent'
            }}
            className="w-24 h-24 rounded-full border border-primary/20 flex items-center justify-center bg-white/[0.02] backdrop-blur-3xl relative overflow-hidden"
          >
            <Brain className={`w-12 h-12 ${step >= 1 ? 'text-primary' : 'text-white/10'}`} />
            
            {/* Thinking particles */}
            {step >= 1 && (
                <div className="absolute inset-0">
                    {[...Array(3)].map((_, i) => (
                        <motion.div 
                            key={i}
                            animate={{ 
                                rotate: 360,
                                scale: [1, 1.2, 1],
                                opacity: [0.3, 0.6, 0.3]
                            }}
                            transition={{ duration: 5 + i, repeat: Infinity, ease: 'linear' }}
                            className="absolute inset-2 border border-primary/10 rounded-full border-dashed"
                        />
                    ))}
                </div>
            )}
          </motion.div>
          <div className="text-center">
             <div className="text-xs text-white font-bold tracking-widest uppercase">Athena</div>
          </div>
        </div>

        {/* CONNECTION FLOW 2 (BRANCHING) */}
        <div className="flex-1 flex flex-col justify-center items-center h-48 mx-4 relative">
             <svg className="w-full h-full absolute inset-0 text-white/5 overflow-visible">
                <path d="M 0 96 L 100 0" stroke="currentColor" fill="none" />
                <path d="M 0 96 L 100 192" stroke="currentColor" fill="none" />
                
                {/* Branch Pulses */}
                {step >= 2 && step <= 3 && (
                    <>
                        <motion.circle r="3" fill="#9333ea"
                            initial={{ offset: 0 }}
                            animate={{ offset: 1 }}
                        >
                            <animateMotion dur="2s" repeatCount="indefinite" path="M 0 96 L 100 0" />
                        </motion.circle>
                        <motion.circle r="3" fill="#3b82f6"
                            animate={{ offset: 1 }}
                        >
                            <animateMotion dur="2.5s" repeatCount="indefinite" path="M 0 96 L 100 192" />
                        </motion.circle>
                    </>
                )}
             </svg>
        </div>

        {/* 3. AGENTS & EXTERNAL ZONE */}
        <div className="w-1/3 flex flex-col gap-12">
            {AGENTS.map((agent, i) => (
                <div key={agent.id} className="flex items-center gap-6 relative">
                    {/* The Agent */}
                    <motion.div
                        animate={{ 
                            opacity: step >= 2 ? 1 : 0.3,
                            scale: step === 3 ? 1.1 : 1,
                            borderColor: step >= 2 ? agent.color : 'rgba(255,255,255,0.05)'
                        }}
                        className="w-16 h-16 rounded-xl border flex items-center justify-center bg-white/[0.02] backdrop-blur-xl shrink-0 z-10"
                    >
                        <agent.icon className="w-8 h-8 text-white" />
                        
                        {/* Status tag */}
                        {step === 3 && (
                            <motion.div 
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="absolute -top-4 -right-12 px-2 py-0.5 bg-green-500/20 text-green-400 text-[7px] border border-green-500/30 rounded font-mono uppercase"
                            >
                                Executing...
                            </motion.div>
                        )}
                    </motion.div>

                    {/* Dotted connections to Resources */}
                    <div className="flex flex-col gap-2">
                        {EXTERNAL_RESOURCES.slice(i*2, i*2 + 2).map((res, j) => (
                            <div key={j} className="flex items-center gap-3">
                                <motion.div 
                                    animate={{ 
                                        opacity: step === 3 ? 1 : 0.3,
                                        x: step === 3 ? [0, 5, 0] : 0
                                    }}
                                    className="flex items-center gap-2 px-2 py-1 bg-white/5 rounded border border-white/5"
                                >
                                    <res.icon className="w-3 h-3 text-white/40" />
                                    <span className="text-[8px] text-white/60 font-mono whitespace-nowrap">{res.name}</span>
                                </motion.div>
                                
                                {step === 3 && (
                                    <motion.div
                                        animate={{ opacity: [0, 1, 0] }}
                                        transition={{ duration: 1, repeat: Infinity, delay: j * 0.5 }}
                                    >
                                        <Zap className="w-2.5 h-2.5 text-yellow-500/50" />
                                    </motion.div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>

      </div>

      {/* FOOTER STATUS BAR */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent flex flex-col justify-end p-8">
        <div className="w-full max-w-4xl mx-auto flex justify-between items-end border-t border-white/5 pt-6">
            <div className="space-y-1">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={step}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-3"
                    >
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-[10px] font-mono text-primary font-bold uppercase tracking-[0.2em]">{currentStatus.label}</span>
                    </motion.div>
                </AnimatePresence>
                <div className="text-sm text-white/40 font-light translate-x-5">{currentStatus.subtext}</div>
            </div>

            <div className="flex gap-4 items-center">
                <div className="flex flex-col items-end gap-1">
                    <span className="text-[8px] font-mono text-white/20 uppercase tracking-widest">Active Threads</span>
                    <div className="flex gap-0.5">
                        {[...Array(6)].map((_, i) => (
                            <motion.div 
                                key={i}
                                animate={{ height: [4, 12, 4], opacity: [0.2, 0.5, 0.2] }}
                                transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.1 }}
                                className="w-1 bg-primary/40 rounded-full"
                            />
                        ))}
                    </div>
                </div>
                
                <div className="h-8 w-px bg-white/5 mx-2" />
                
                <div className="flex flex-col items-end">
                    <span className="text-[8px] font-mono text-white/20 uppercase tracking-widest mb-1">Latency</span>
                    <span className="text-xl font-light text-white tracking-tighter">1.2<span className="text-[10px] text-white/40 ml-1 font-mono">MS</span></span>
                </div>
            </div>
        </div>
      </div>

      {/* Decorative Floating Elements */}
      <div className="absolute top-12 left-12 opacity-20 hidden lg:block">
        <div className="flex flex-col gap-2">
            {[...Array(3)].map((_, i) => (
                <div key={i} className="flex gap-2">
                    <div className="w-12 h-1 bg-white/10" />
                    <div className="w-4 h-1 bg-primary/20" />
                </div>
            ))}
        </div>
      </div>
      
      <div className="absolute top-0 right-0 p-4 font-mono text-[8px] text-white/10 flex flex-col items-end gap-1 uppercase tracking-tighter">
            <div>Engine // v2.4.0</div>
            <div>Mode // MultiAgent_Sync</div>
            <div>Status // Operational</div>
      </div>
    </div>
  );
}
