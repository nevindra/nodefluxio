"use client";

import { AnimatePresence, motion } from 'framer-motion';
import {
  Brain,
  CheckCircle2,
  Database,
  Filter,
  MessageSquare,
  Search,
  FileText,
  Sparkles
} from 'lucide-react';
import { useEffect, useState } from 'react';

const RAG_STAGES = [
  {
    id: 'query',
    label: 'Query Analysis',
    icon: Search,
    details: 'Expanding prompt via HyDE & Multi-Query transformation',
    color: 'var(--primary)'
  },
  {
    id: 'retrieve',
    label: 'Vector Retrieval',
    icon: Database,
    details: 'Semantic search across 10M+ embedded document chunks',
    color: 'var(--secondary)'
  },
  {
    id: 'rerank',
    label: 'Cross-Encoder Rerank',
    icon: Filter,
    details: 'Re-scoring Top-50 candidates for precise relevance',
    color: 'var(--accent)'
  },
  {
    id: 'generate',
    label: 'Grounded Generation',
    icon: Brain,
    details: 'Synthesizing answer with verbatim source citations',
    color: 'var(--ring)'
  }
];

const SAMPLE_ANSWER = {
  question: "What is our Q4 revenue projection?",
  answer: "Based on the financial documents, the Q4 2024 revenue projection is $12.4M, representing a 23% YoY growth.",
  sources: [
    { name: "Q4_Financial_Report.pdf", page: 12 },
    { name: "Revenue_Analysis.xlsx", page: 3 },
  ]
};

const SAMPLE_DOCUMENTS = [
  { id: 1, name: "Q4_Report.pdf", score: 0.94, relevant: true },
  { id: 2, name: "Budget_2024.xlsx", score: 0.87, relevant: true },
  { id: 3, name: "Meeting_Notes.doc", score: 0.52, relevant: false },
  { id: 4, name: "HR_Policy.pdf", score: 0.31, relevant: false },
  { id: 5, name: "Revenue_Data.csv", score: 0.91, relevant: true },
  { id: 6, name: "Old_Archive.zip", score: 0.12, relevant: false },
];

export default function RAGAnimation() {
  const [activeStage, setActiveStage] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [stageProgress, setStageProgress] = useState(0);

  useEffect(() => {
    // Progress within each stage
    const progressTimer = setInterval(() => {
      setStageProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + 4;
      });
    }, 100);

    // Stage transition
    const stageTimer = setInterval(() => {
      setActiveStage((prev) => {
        const next = (prev + 1) % (RAG_STAGES.length + 1); // +1 for answer state
        if (next === RAG_STAGES.length) {
          setShowAnswer(true);
        } else {
          setShowAnswer(false);
        }
        setStageProgress(0);
        return next;
      });
    }, 3000);

    return () => {
      clearInterval(progressTimer);
      clearInterval(stageTimer);
    };
  }, []);

  const overallProgress = showAnswer ? 100 : ((activeStage / RAG_STAGES.length) * 100) + (stageProgress / RAG_STAGES.length);

  // Filter documents based on stage
  const visibleDocs = activeStage === 0 ? [] :
    activeStage === 1 ? SAMPLE_DOCUMENTS :
      activeStage >= 2 ? SAMPLE_DOCUMENTS.filter(d => d.relevant) : [];

  return (
    <div className="w-full h-full min-h-[500px] lg:min-h-[450px] bg-background relative overflow-hidden flex flex-col items-center justify-center font-sans p-6 md:p-12">
      {/* Ambient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(var(--primary),0.08),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-foreground/[0.02] [mask-image:radial-gradient(white,transparent_80%)]"></div>

      {/* OVERALL PROGRESS BAR */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-foreground/5">
        <motion.div
          className="h-full bg-gradient-to-r from-primary via-primary to-green-500"
          initial={{ width: 0 }}
          animate={{ width: `${overallProgress}%` }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </div>

      <AnimatePresence mode="wait">
        {showAnswer ? (
          /* ANSWER UI */
          <motion.div
            key="answer"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-lg z-20"
          >
            {/* Question */}
            <div className="mb-4 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-foreground/5 border border-border/50 flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-4 h-4 text-foreground/40" />
              </div>
              <div className="flex-1 pt-1">
                <p className="text-sm text-foreground/60 font-medium">{SAMPLE_ANSWER.question}</p>
              </div>
            </div>

            {/* Answer Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="bg-gradient-to-br from-primary/5 to-green-500/5 border border-primary/20 rounded-xl p-4 md:p-5"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm md:text-base text-foreground leading-relaxed">{SAMPLE_ANSWER.answer}</p>
                </div>
              </div>

              {/* Sources */}
              <div className="border-t border-border/30 pt-3 mt-3">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[9px] font-mono text-foreground/40 uppercase tracking-widest">Sources</span>
                  <CheckCircle2 className="w-3 h-3 text-green-500" />
                </div>
                <div className="flex flex-wrap gap-2">
                  {SAMPLE_ANSWER.sources.map((source, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      className="flex items-center gap-2 bg-background/60 border border-border/50 rounded-lg px-2.5 py-1.5"
                    >
                      <FileText className="w-3 h-3 text-primary/60" />
                      <span className="text-[10px] font-mono text-foreground/60">{source.name}</span>
                      <span className="text-[9px] text-foreground/30">p.{source.page}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-4 flex justify-center"
            >
              <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-3 py-1">
                <CheckCircle2 className="w-3 h-3 text-green-500" />
                <span className="text-[10px] font-mono text-green-500 uppercase tracking-wider">Response Generated</span>
              </div>
            </motion.div>
          </motion.div>
        ) : (
          /* PROCESSING UI */
          <motion.div
            key="processing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full flex flex-col items-center"
          >
            {/* STAGE INDICATORS (TOP) */}
            <div className="w-full max-w-5xl flex flex-wrap justify-center md:justify-between gap-4 md:gap-0 mb-12 md:mb-20 relative z-20">
              {RAG_STAGES.map((stage, i) => (
                <div key={stage.id} className="flex flex-col items-center gap-2 md:gap-3 relative px-2">
                  <motion.div
                    animate={{
                      scale: activeStage === i ? 1.1 : 1,
                      backgroundColor: activeStage === i ? `hsl(${stage.color} / 0.1)` : activeStage > i ? 'hsl(142 76% 36% / 0.1)' : 'hsl(var(--foreground) / 0.03)',
                      borderColor: activeStage === i ? `hsl(${stage.color})` : activeStage > i ? 'hsl(142 76% 36%)' : 'hsl(var(--foreground) / 0.1)'
                    }}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl border flex items-center justify-center relative transition-colors duration-500"
                  >
                    <stage.icon className={`w-5 h-5 md:w-6 md:h-6 ${activeStage === i ? 'text-foreground' : activeStage > i ? 'text-green-500' : 'text-foreground/20'}`} />

                    {activeStage > i && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -right-1 -top-1 bg-green-500 rounded-full p-0.5"
                      >
                        <CheckCircle2 className="w-2.5 h-2.5 md:w-3 md:h-3 text-background" />
                      </motion.div>
                    )}

                    {/* Stage progress indicator */}
                    {activeStage === i && (
                      <motion.div
                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-foreground/10 rounded-full overflow-hidden"
                      >
                        <motion.div
                          className="h-full bg-primary"
                          initial={{ width: 0 }}
                          animate={{ width: `${stageProgress}%` }}
                        />
                      </motion.div>
                    )}
                  </motion.div>
                  <div className={`text-[7px] md:text-[9px] font-bold uppercase tracking-widest ${activeStage === i ? 'text-foreground' : activeStage > i ? 'text-green-500' : 'text-foreground/20'}`}>
                    {stage.label}
                  </div>

                  {/* Progress line between stages */}
                  {i < RAG_STAGES.length - 1 && (
                    <div className="hidden md:block absolute left-[calc(100%+8px)] top-6 w-12 lg:w-16 h-px bg-foreground/5 overflow-hidden">
                      <motion.div
                        className="h-full bg-green-500"
                        initial={{ width: 0 }}
                        animate={{ width: activeStage > i ? '100%' : '0%' }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* DOCUMENT RETRIEVAL VISUALIZATION */}
            <div className="relative w-full max-w-2xl z-10">
              {/* Query Input Display */}
              {activeStage === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center gap-4"
                >
                  <div className="w-full max-w-md bg-foreground/[0.02] border border-border/50 rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <Search className="w-4 h-4 text-primary" />
                      <span className="text-xs text-foreground/40 font-mono">QUERY</span>
                    </div>
                    <motion.p
                      className="text-sm md:text-base text-foreground"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      {SAMPLE_ANSWER.question}
                      <motion.span
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.5, repeat: Infinity }}
                        className="inline-block w-0.5 h-4 bg-primary ml-1 align-middle"
                      />
                    </motion.p>
                  </div>
                  <div className="text-[10px] font-mono text-foreground/30 uppercase tracking-wider">
                    Analyzing query semantics...
                  </div>
                </motion.div>
              )}

              {/* Document Cards Grid */}
              {activeStage >= 1 && activeStage < RAG_STAGES.length && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-3"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono text-foreground/40 uppercase tracking-wider">
                      {activeStage === 1 ? 'Retrieved Documents' : 'Relevant Documents'}
                    </span>
                    <span className="text-[10px] font-mono text-primary">
                      {visibleDocs.length} {activeStage === 1 ? 'found' : 'selected'}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    <AnimatePresence mode="popLayout">
                      {visibleDocs.map((doc, i) => (
                        <motion.div
                          key={doc.id}
                          layout
                          initial={{ opacity: 0, scale: 0.8, y: 20 }}
                          animate={{
                            opacity: activeStage === 2 && !doc.relevant ? 0.3 : 1,
                            scale: 1,
                            y: 0,
                            x: activeStage === 2 && !doc.relevant ? -20 : 0
                          }}
                          exit={{ opacity: 0, scale: 0.8, x: -50 }}
                          transition={{ delay: i * 0.05, duration: 0.3 }}
                          className={`
                            relative p-3 rounded-lg border transition-colors
                            ${doc.relevant
                              ? 'bg-primary/5 border-primary/20'
                              : 'bg-foreground/[0.02] border-border/30'}
                          `}
                        >
                          <div className="flex items-start gap-2">
                            <FileText className={`w-3.5 h-3.5 flex-shrink-0 ${doc.relevant ? 'text-primary' : 'text-foreground/20'}`} />
                            <div className="min-w-0 flex-1">
                              <p className="text-[10px] font-mono text-foreground/70 truncate">{doc.name}</p>
                              <div className="flex items-center gap-1 mt-1">
                                <div className="flex-1 h-1 bg-foreground/10 rounded-full overflow-hidden">
                                  <motion.div
                                    className={`h-full ${doc.relevant ? 'bg-green-500' : 'bg-foreground/20'}`}
                                    initial={{ width: 0 }}
                                    animate={{ width: `${doc.score * 100}%` }}
                                    transition={{ delay: i * 0.05 + 0.2, duration: 0.5 }}
                                  />
                                </div>
                                <span className={`text-[9px] font-mono ${doc.relevant ? 'text-green-500' : 'text-foreground/30'}`}>
                                  {doc.score.toFixed(2)}
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Relevance badge */}
                          {activeStage >= 2 && doc.relevant && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="absolute -top-1 -right-1"
                            >
                              <CheckCircle2 className="w-4 h-4 text-green-500 bg-background rounded-full" />
                            </motion.div>
                          )}
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>

                  {/* Stage description */}
                  <motion.div
                    key={activeStage}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 text-center"
                  >
                    <p className="text-[10px] font-mono text-foreground/30 uppercase tracking-wider">
                      {RAG_STAGES[activeStage]?.details}
                    </p>
                  </motion.div>
                </motion.div>
              )}

              {/* Generation Stage */}
              {activeStage === 3 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center gap-4 mt-8"
                >
                  <div className="flex items-center gap-3">
                    <Brain className="w-4 h-4 text-primary" />
                    <span className="text-xs font-mono text-foreground/50">Generating grounded response...</span>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* DECORATIVE METADATA */}
      <div className="absolute top-4 right-4 md:top-8 md:right-8 flex gap-4 md:gap-8">
        <div className="flex flex-col items-end">
          <span className="text-[7px] md:text-[8px] font-mono text-foreground/20 uppercase tracking-widest">Similarity</span>
          <span className="text-[10px] md:text-sm font-light text-green-500 font-mono">0.9412</span>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-[7px] md:text-[8px] font-mono text-foreground/20 uppercase tracking-widest">Latency</span>
          <span className="text-[10px] md:text-sm font-light text-primary font-mono">14ms</span>
        </div>
      </div>
    </div>
  );
}
