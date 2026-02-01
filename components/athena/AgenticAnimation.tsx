"use client";

import { AnimatePresence, motion } from 'framer-motion';
import {
    Brain,
    CheckCircle2,
    Database,
    FileSearch,
    Globe,
    Loader2,
    MessageSquare,
    Sparkles,
    Zap
} from 'lucide-react';
import { useEffect, useState } from 'react';

const PIPELINE_STAGES = [
    { id: 'input', label: 'Input', icon: MessageSquare },
    { id: 'decompose', label: 'Decompose', icon: Brain },
    { id: 'execute', label: 'Execute', icon: Zap },
    { id: 'synthesize', label: 'Synthesize', icon: Sparkles },
];

const TASKS = [
    { id: 1, name: "SQL Query", icon: Database, color: "primary" },
    { id: 2, name: "Web Search", icon: Globe, color: "blue-500" },
    { id: 3, name: "RAG Search", icon: FileSearch, color: "purple-500" },
];

type Phase = 0 | 1 | 2 | 3 | 4; // input, decompose, execute, synthesize, complete

export default function AgenticAnimation() {
    const [phase, setPhase] = useState<Phase>(0);
    const [executingTasks, setExecutingTasks] = useState<number[]>([]);
    const [completedTasks, setCompletedTasks] = useState<number[]>([]);

    useEffect(() => {
        const timeline = [
            { delay: 1500, action: () => setPhase(1) }, // decompose
            { delay: 1500, action: () => { setPhase(2); setExecutingTasks([1, 2, 3]); } }, // execute start
            { delay: 800, action: () => setCompletedTasks([1]) },
            { delay: 600, action: () => setCompletedTasks([1, 2]) },
            { delay: 600, action: () => { setCompletedTasks([1, 2, 3]); setExecutingTasks([]); } },
            { delay: 800, action: () => setPhase(3) }, // synthesize
            { delay: 1500, action: () => setPhase(4) }, // complete
            { delay: 3000, action: () => { // reset
                setPhase(0);
                setExecutingTasks([]);
                setCompletedTasks([]);
            }},
        ];

        let timeouts: NodeJS.Timeout[] = [];
        let cumulative = 0;

        timeline.forEach(({ delay, action }) => {
            cumulative += delay;
            timeouts.push(setTimeout(action, cumulative));
        });

        return () => timeouts.forEach(clearTimeout);
    }, [phase === 0 && completedTasks.length === 0]);

    const getStageStatus = (index: number) => {
        if (phase > index) return 'completed';
        if (phase === index) return 'active';
        return 'pending';
    };

    return (
        <div className="w-full h-full min-h-[500px] lg:min-h-[450px] bg-background relative overflow-hidden flex flex-col font-sans">
            {/* Background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.03),transparent_70%)]" />

            {/* Progress bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-foreground/5">
                <motion.div
                    className="h-full bg-gradient-to-r from-primary to-green-500"
                    animate={{ width: `${(phase / 4) * 100}%` }}
                    transition={{ duration: 0.5 }}
                />
            </div>

            {/* Main Pipeline */}
            <div className="flex-1 flex flex-col justify-center px-4 md:px-8 py-8">

                {/* Pipeline Stages */}
                <div className="w-full max-w-3xl mx-auto flex flex-wrap justify-center md:justify-between gap-4 md:gap-0 relative">
                    {PIPELINE_STAGES.map((stage, i) => {
                        const status = getStageStatus(i);
                        return (
                            <div key={stage.id} className="flex flex-col items-center gap-2 md:gap-3 relative px-2">
                                <motion.div
                                    animate={{
                                        scale: status === 'active' ? 1.05 : 1,
                                        backgroundColor: status === 'active'
                                            ? 'hsl(var(--primary) / 0.1)'
                                            : status === 'completed'
                                                ? 'hsl(142 76% 36% / 0.1)'
                                                : 'hsl(var(--foreground) / 0.03)',
                                        borderColor: status === 'active'
                                            ? 'hsl(var(--primary))'
                                            : status === 'completed'
                                                ? 'hsl(142 76% 36%)'
                                                : 'hsl(var(--foreground) / 0.1)'
                                    }}
                                    className="w-12 h-12 md:w-14 md:h-14 rounded-xl border flex items-center justify-center relative transition-colors duration-500"
                                >
                                    <stage.icon className={`w-5 h-5 md:w-6 md:h-6 ${
                                        status === 'active' ? 'text-primary' :
                                        status === 'completed' ? 'text-green-500' : 'text-foreground/20'
                                    }`} />

                                    {status === 'completed' && (
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            className="absolute -right-1 -top-1 bg-green-500 rounded-full p-0.5"
                                        >
                                            <CheckCircle2 className="w-3 h-3 text-background" />
                                        </motion.div>
                                    )}

                                    {/* Loading indicator for active */}
                                    {status === 'active' && (
                                        <motion.div
                                            className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-foreground/10 rounded-full overflow-hidden"
                                        >
                                            <motion.div
                                                className="h-full bg-primary rounded-full"
                                                initial={{ x: '-100%' }}
                                                animate={{ x: '100%' }}
                                                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                                            />
                                        </motion.div>
                                    )}
                                </motion.div>

                                <span className={`text-[8px] md:text-[10px] font-bold uppercase tracking-widest ${
                                    status === 'active' ? 'text-primary' :
                                    status === 'completed' ? 'text-green-500' : 'text-foreground/20'
                                }`}>
                                    {stage.label}
                                </span>

                                {/* Progress line between stages */}
                                {i < PIPELINE_STAGES.length - 1 && (
                                    <div className="hidden md:block absolute left-[calc(100%+8px)] top-6 w-12 lg:w-16 h-px bg-foreground/5 overflow-hidden">
                                        <motion.div
                                            className="h-full bg-green-500"
                                            initial={{ width: 0 }}
                                            animate={{ width: phase > i ? '100%' : '0%' }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Content Area */}
                <div className="mt-8 md:mt-12 min-h-[200px]">
                    <AnimatePresence mode="wait">
                        {/* Phase 0: Input */}
                        {phase === 0 && (
                            <motion.div
                                key="input"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="flex justify-center"
                            >
                                <div className="max-w-md w-full bg-foreground/[0.02] border border-border/50 rounded-xl p-4">
                                    <div className="flex items-center gap-2 mb-2">
                                        <MessageSquare className="w-4 h-4 text-primary" />
                                        <span className="text-[10px] font-mono text-foreground/40 uppercase">Query</span>
                                    </div>
                                    <p className="text-sm text-foreground">
                                        Analyze Q3 sales performance and compare with competitors
                                        <motion.span
                                            animate={{ opacity: [1, 0] }}
                                            transition={{ duration: 0.5, repeat: Infinity }}
                                            className="inline-block w-0.5 h-4 bg-primary ml-1 align-middle"
                                        />
                                    </p>
                                </div>
                            </motion.div>
                        )}

                        {/* Phase 1: Decompose */}
                        {phase === 1 && (
                            <motion.div
                                key="decompose"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="flex justify-center"
                            >
                                <div className="max-w-lg w-full">
                                    <div className="flex items-center justify-center gap-2 mb-4">
                                        <Loader2 className="w-4 h-4 text-primary animate-spin" />
                                        <span className="text-xs font-mono text-foreground/50">Decomposing into sub-tasks...</span>
                                    </div>
                                    <div className="flex justify-center gap-3">
                                        {TASKS.map((task, i) => (
                                            <motion.div
                                                key={task.id}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: i * 0.15 }}
                                                className="flex items-center gap-2 px-3 py-2 bg-foreground/[0.02] border border-border/50 rounded-lg"
                                            >
                                                <task.icon className="w-4 h-4 text-foreground/40" />
                                                <span className="text-[11px] font-mono text-foreground/60">{task.name}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* Phase 2: Execute */}
                        {phase === 2 && (
                            <motion.div
                                key="execute"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="flex justify-center"
                            >
                                <div className="max-w-2xl w-full">
                                    <div className="flex items-center justify-center gap-2 mb-4">
                                        <Zap className="w-4 h-4 text-primary" />
                                        <span className="text-xs font-mono text-foreground/50">Executing parallel tasks...</span>
                                    </div>
                                    <div className="flex justify-center gap-4">
                                        {TASKS.map((task) => {
                                            const isExecuting = executingTasks.includes(task.id) && !completedTasks.includes(task.id);
                                            const isCompleted = completedTasks.includes(task.id);

                                            return (
                                                <motion.div
                                                    key={task.id}
                                                    animate={{
                                                        borderColor: isCompleted
                                                            ? 'hsl(142 76% 36% / 0.5)'
                                                            : isExecuting
                                                                ? 'hsl(var(--primary) / 0.5)'
                                                                : 'hsl(var(--foreground) / 0.1)'
                                                    }}
                                                    className={`
                                                        relative flex flex-col items-center gap-2 p-4 rounded-xl border-2 min-w-[100px]
                                                        ${isCompleted ? 'bg-green-500/5' : isExecuting ? 'bg-primary/5' : 'bg-foreground/[0.02]'}
                                                    `}
                                                >
                                                    <div className="w-10 h-10 rounded-lg bg-background border border-border/50 flex items-center justify-center">
                                                        {isCompleted ? (
                                                            <CheckCircle2 className="w-5 h-5 text-green-500" />
                                                        ) : isExecuting ? (
                                                            <Loader2 className="w-5 h-5 text-primary animate-spin" />
                                                        ) : (
                                                            <task.icon className="w-5 h-5 text-foreground/30" />
                                                        )}
                                                    </div>
                                                    <span className={`text-[10px] font-mono uppercase tracking-wider ${
                                                        isCompleted ? 'text-green-500' : isExecuting ? 'text-primary' : 'text-foreground/40'
                                                    }`}>
                                                        {task.name}
                                                    </span>

                                                    {/* Progress bar */}
                                                    {isExecuting && (
                                                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary/20 rounded-b-xl overflow-hidden">
                                                            <motion.div
                                                                className="h-full bg-primary"
                                                                initial={{ x: '-100%' }}
                                                                animate={{ x: '100%' }}
                                                                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                                                            />
                                                        </div>
                                                    )}
                                                </motion.div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* Phase 3: Synthesize */}
                        {phase === 3 && (
                            <motion.div
                                key="synthesize"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="flex justify-center"
                            >
                                <div className="max-w-md w-full flex flex-col items-center gap-4">
                                    <div className="relative">
                                        <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                                            <Sparkles className="w-8 h-8 text-primary" />
                                        </div>
                                        {/* Loading bar */}
                                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-foreground/10 rounded-full overflow-hidden">
                                            <motion.div
                                                className="h-full bg-primary rounded-full"
                                                initial={{ x: '-100%' }}
                                                animate={{ x: '100%' }}
                                                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                                            />
                                        </div>
                                    </div>
                                    <span className="text-xs font-mono text-foreground/50 mt-2">Synthesizing results...</span>

                                    {/* Data flowing in */}
                                    <div className="flex gap-2">
                                        {[0, 1, 2].map((i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: [0, 1, 0], y: [20, 0, -20] }}
                                                transition={{ duration: 1, delay: i * 0.2, repeat: Infinity }}
                                                className="w-2 h-2 rounded-full bg-green-500"
                                            />
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* Phase 4: Complete */}
                        {phase === 4 && (
                            <motion.div
                                key="complete"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="flex justify-center"
                            >
                                <div className="max-w-lg w-full bg-gradient-to-br from-primary/5 to-green-500/5 border border-primary/20 rounded-xl p-5">
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="w-6 h-6 rounded-lg bg-green-500/10 flex items-center justify-center">
                                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                                        </div>
                                        <span className="text-[10px] font-mono text-green-500 uppercase tracking-wider">Analysis Complete</span>
                                    </div>
                                    <p className="text-sm text-foreground leading-relaxed">
                                        Q3 sales reached <span className="text-primary font-semibold">$4.2M</span>, up 18% YoY.
                                        Market position: <span className="text-green-500 font-semibold">#2</span> in segment.
                                        Digital growth outpaced industry by 12%.
                                    </p>
                                    <div className="flex items-center gap-4 mt-4 pt-3 border-t border-border/30">
                                        <div className="flex items-center gap-1.5">
                                            <Database className="w-3 h-3 text-foreground/40" />
                                            <span className="text-[9px] font-mono text-foreground/40">3 sources</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <Zap className="w-3 h-3 text-foreground/40" />
                                            <span className="text-[9px] font-mono text-foreground/40">2.1s</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <CheckCircle2 className="w-3 h-3 text-green-500" />
                                            <span className="text-[9px] font-mono text-green-500">Verified</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Bottom Status */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${phase < 4 ? 'bg-primary animate-pulse' : 'bg-green-500'}`} />
                    <span className="text-[10px] font-mono text-foreground/40 uppercase tracking-wider">
                        {phase === 0 && "Receiving input..."}
                        {phase === 1 && "Decomposing query..."}
                        {phase === 2 && "Executing tasks..."}
                        {phase === 3 && "Synthesizing..."}
                        {phase === 4 && "Complete"}
                    </span>
                </div>
                <span className="text-[9px] font-mono text-foreground/20">ATHENA // AGENTIC</span>
            </div>
        </div>
    );
}
