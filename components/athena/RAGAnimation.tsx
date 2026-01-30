"use client";

import { AnimatePresence, motion } from 'framer-motion';
import {
    Brain,
    CheckCircle2,
    Database,
    Filter,
    Layers,
    MessageSquare,
    Search,
    Terminal
} from 'lucide-react';
import { useEffect, useState } from 'react';

const RAG_STAGES = [
  { 
    id: 'query', 
    label: 'Query Analysis', 
    icon: Search, 
    details: 'Expanding prompt via HyDE & Multi-Query transformation',
    color: '#a855f7'
  },
  { 
    id: 'retrieve', 
    label: 'Vector Retrieval', 
    icon: Database, 
    details: 'Semantic search across 10M+ embedded document chunks',
    color: '#3b82f6'
  },
  { 
    id: 'rerank', 
    label: 'Cross-Encoder Rerank', 
    icon: Filter, 
    details: 'Re-scoring Top-50 candidates for precise relevance',
    color: '#10b981'
  },
  { 
    id: 'generate', 
    label: 'Grounded Generation', 
    icon: Brain, 
    details: 'Synthesizing answer with verbatim source citations',
    color: '#f59e0b'
  }
];

export default function RAGAnimation() {
  const [activeStage, setActiveStage] = useState(0);
  const [chunks, setChunks] = useState<{ id: number; color: string }[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % RAG_STAGES.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  // Simulate data chunks flying around
  useEffect(() => {
    if (activeStage === 1) {
        setChunks(Array.from({ length: 8 }, (_, i) => ({ id: Math.random(), color: RAG_STAGES[1].color })));
    } else if (activeStage === 2) {
        setChunks(prev => prev.slice(0, 3).map(c => ({ ...c, color: RAG_STAGES[2].color })));
    } else if (activeStage === 0) {
        setChunks([]);
    }
  }, [activeStage]);

  return (
    <div className="w-full h-full min-h-[450px] bg-[#05060a] relative overflow-hidden flex flex-col items-center justify-center font-sans p-12">
      {/* Ambient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(168,85,247,0.08),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:radial-gradient(white,transparent_80%)]"></div>

      {/* STAGE INDICATORS (TOP) */}
      <div className="w-full max-w-4xl flex justify-between mb-20 relative z-20">
        {RAG_STAGES.map((stage, i) => (
          <div key={stage.id} className="flex flex-col items-center gap-3 relative">
            <motion.div
              animate={{ 
                scale: activeStage === i ? 1.2 : 1,
                backgroundColor: activeStage === i ? `${stage.color}20` : 'rgba(255,255,255,0.03)',
                borderColor: activeStage === i ? stage.color : 'rgba(255,255,255,0.1)'
              }}
              className="w-12 h-12 rounded-xl border flex items-center justify-center relative transition-colors duration-500"
            >
              <stage.icon className={`w-6 h-6 ${activeStage === i ? 'text-white' : 'text-white/20'}`} />
              
              {activeStage > i && (
                <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -right-1 -top-1 bg-green-500 rounded-full p-0.5"
                >
                    <CheckCircle2 className="w-3 h-3 text-white" />
                </motion.div>
              )}
            </motion.div>
            <div className={`text-[9px] font-bold uppercase tracking-widest ${activeStage === i ? 'text-white' : 'text-white/20'}`}>
              {stage.label}
            </div>
            
            {/* Progress line between indicators */}
            {i < RAG_STAGES.length - 1 && (
                <div className="absolute left-[calc(100%+8px)] top-6 w-16 h-px bg-white/5" />
            )}
          </div>
        ))}
      </div>

      {/* CENTRAL PROCESSING HUB */}
      <div className="relative w-full max-w-2xl h-48 flex items-center justify-center z-10">
        
        {/* The Pipeline Track */}
        <div className="absolute inset-x-0 h-24 bg-white/[0.02] border-y border-white/5 rounded-full" />
        
        {/* Animated Chunks */}
        <AnimatePresence>
            {chunks.map((chunk, i) => (
                <motion.div
                    key={chunk.id}
                    initial={{ x: -300, opacity: 0, scale: 0.5 }}
                    animate={{ 
                        x: activeStage === 1 ? [-300, 0] : activeStage === 2 ? [0, 200] : 0,
                        opacity: 1, 
                        scale: 1,
                    }}
                    exit={{ opacity: 0, x: 400 }}
                    className="absolute w-3 h-3 rounded-sm blur-[1px]"
                    style={{ 
                        backgroundColor: chunk.color,
                        boxShadow: `0 0 10px ${chunk.color}`,
                        marginTop: (i - 4) * 15 // Spread them out vertically
                    }}
                />
            ))}
        </AnimatePresence>

        {/* Central Orchestrator Core */}
        <motion.div
            animate={{ 
                rotate: activeStage === 3 ? 360 : 0,
                scale: activeStage === 3 ? 1.1 : 1
            }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            className="w-32 h-32 rounded-3xl border border-white/10 bg-[#0a0c14]/80 backdrop-blur-xl flex items-center justify-center relative border-dashed"
        >
            <div className="absolute inset-4 rounded-2xl bg-primary/10 animate-pulse" />
            <Layers className={`w-12 h-12 ${activeStage === 3 ? 'text-primary' : 'text-white/10'}`} />
            
            {/* Scanning Ring */}
            {activeStage === 2 && (
                <motion.div 
                    animate={{ y: [-40, 40, -40] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-x-0 h-px bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.5)] z-20"
                />
            )}
        </motion.div>

        {/* Floating Technical Snippet */}
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-64">
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeStage}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="bg-black/60 border border-white/5 p-3 rounded-lg font-mono text-[9px] text-white/40"
                >
                    <div className="flex items-center gap-2 mb-1">
                        <Terminal className="w-3 h-3 text-primary" />
                        <span className="text-white/60">SYSTEM_LOG // {RAG_STAGES[activeStage].id.toUpperCase()}</span>
                    </div>
                    {RAG_STAGES[activeStage].details}
                </motion.div>
            </AnimatePresence>
        </div>
      </div>

      {/* FINAL OUTPUT PREVIEW (RIGHT) */}
      <div className="absolute right-12 bottom-12 w-64 border border-white/5 bg-white/[0.02] backdrop-blur-md p-4 space-y-3 z-30">
        <div className="flex items-center gap-2 border-b border-white/5 pb-2">
            <MessageSquare className="w-4 h-4 text-primary" />
            <span className="text-[10px] font-bold text-white uppercase tracking-wider">Athena Response</span>
        </div>
        <div className="space-y-2">
            <motion.div 
                animate={{ opacity: activeStage === 3 ? 1 : 0.2 }}
                className="h-2 w-full bg-white/10 rounded-full"
            />
            <motion.div 
                animate={{ opacity: activeStage === 3 ? 1 : 0.2 }}
                className="h-2 w-4/5 bg-white/10 rounded-full"
            />
            <motion.div 
                animate={{ opacity: activeStage === 3 ? 1 : 0.2 }}
                className="flex items-center gap-2 mt-4"
            >
                <div className="px-1.5 py-0.5 bg-primary/20 text-primary text-[7px] font-bold rounded border border-primary/30">REF [1]</div>
                <div className="px-1.5 py-0.5 bg-primary/20 text-primary text-[7px] font-bold rounded border border-primary/30">REF [2]</div>
                <span className="text-[8px] text-white/20 font-mono italic">-- Verified Source Citations</span>
            </motion.div>
        </div>
      </div>

      {/* DECORATIVE METADATA */}
      <div className="absolute top-8 right-8 flex gap-8">
        <div className="flex flex-col items-end">
            <span className="text-[8px] font-mono text-white/20 uppercase tracking-widest">Cosine Similarity</span>
            <span className="text-sm font-light text-green-500 font-mono">0.9412</span>
        </div>
        <div className="flex flex-col items-end">
            <span className="text-[8px] font-mono text-white/20 uppercase tracking-widest">Rerank Latency</span>
            <span className="text-sm font-light text-primary font-mono">14ms</span>
        </div>
      </div>
    </div>
  );
}
