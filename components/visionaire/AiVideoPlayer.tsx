"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface AiVideoPlayerProps {
    src: string;
    thumbnail?: string;
    className?: string;
    modelId?: string;
}

export function AiVideoPlayer({
    src,
    thumbnail,
    className,
    modelId
}: AiVideoPlayerProps) {
    const [isStarted, setIsStarted] = useState(false);

    // Reset state jika tab berubah
    useEffect(() => {
        setIsStarted(false);
    }, [src]);

    return (
        <div className={cn("relative w-full h-full overflow-hidden bg-black group", className)}>
            <AnimatePresence mode="wait">
                {!isStarted ? (
                    <motion.div
                        key="thumbnail"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 z-10 flex cursor-pointer items-center justify-center"
                        onClick={() => setIsStarted(true)}
                    >
                        {/* Thumbnail preview */}
                        {thumbnail ? (
                            <img
                                src={thumbnail}
                                alt="Feed Preview"
                                className="absolute inset-0 h-full w-full object-cover brightness-[0.5] transition-transform duration-700 group-hover:scale-105"
                            />
                        ) : (
                            <div className="absolute inset-0 bg-neutral-900 border border-white/5" />
                        )}

                        {/* Play Trigger (Estetika MagicUI) */}
                        <div className="relative z-20 flex flex-col items-center gap-6">
                            <div className="bg-primary/10 flex items-center justify-center rounded-full backdrop-blur-md size-24 md:size-28 transition-all duration-500 group-hover:scale-110 group-hover:bg-primary/20">
                                <div className="flex items-center justify-center bg-gradient-to-b from-primary/30 to-primary shadow-[0_0_40px_rgba(var(--primary),0.4)] rounded-full size-16 md:size-20">
                                    <Play className="size-6 md:size-8 text-white fill-white translate-x-0.5" />
                                </div>
                            </div>
                            <div className="flex flex-col items-center gap-1">
                                <span className="text-[10px] font-mono text-primary animate-pulse tracking-[0.3em] uppercase">Ready to Initialize</span>
                                <span className="text-white/40 text-xs font-light">Click to establish secure link</span>
                            </div>
                        </div>

                        {/* HUD Corner accents */}
                        <div className="absolute top-6 left-6 w-4 h-4 border-t border-l border-white/20" />
                        <div className="absolute top-6 right-6 w-4 h-4 border-t border-r border-white/20" />
                        <div className="absolute bottom-6 left-6 w-4 h-4 border-b border-l border-white/20" />
                        <div className="absolute bottom-6 right-6 w-4 h-4 border-b border-r border-white/20" />
                    </motion.div>
                ) : (
                    <motion.div
                        key="video-frame"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="size-full bg-black flex items-center justify-center"
                    >
                        {/* 1:1 Logic with HeroVideoDialog (Tanpa extra parameters yang merusak header auth) */}
                        <iframe
                            src={src}
                            className="size-full border-0 rounded-2xl"
                            allowFullScreen
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        ></iframe>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Static HUD context */}
            {!isStarted && (
                <div className="absolute bottom-6 left-8 flex items-center gap-3 z-20">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                    <span className="text-[10px] font-mono text-white/60 tracking-widest">{modelId || "STREAM-ID-01"}</span>
                </div>
            )}
        </div>
    );
}
