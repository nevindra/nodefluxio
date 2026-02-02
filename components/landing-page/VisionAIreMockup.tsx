"use client";

import {
  ActivityIcon as Activity,
  Car,
  CaretRight,
  Eye,
  Plus,
  Scan,
  ShieldCheck,
  UserSquare,
} from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { useState } from "react";

const models = [
  {
    id: "fr",
    name: "Face Recognition",
    description: "Identify individuals with 99.8% precision",
    icon: UserSquare,
    status: "Active",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
  {
    id: "lpr",
    name: "License Plate",
    description: "Automatic vehicle registration detection",
    icon: Car,
    status: "Standby",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
  },
  {
    id: "od",
    name: "Object Detection",
    description: "Real-time classification of 80+ categories",
    icon: Scan,
    status: "Active",
    color: "text-amber-400",
    bg: "bg-amber-400/10",
  },
];

export default function VisionAIreMockup() {
  const [selectedModel, setSelectedModel] = useState(models[0]);

  return (
    <div className="flex flex-col h-full w-full bg-white text-foreground/90 overflow-hidden font-sans text-xs select-none">
      {/* Header */}
      <div className="p-4 border-b border-black/5 flex justify-between items-center bg-slate-50">
        <div className="flex items-center gap-3">
          <div className="p-1.5 bg-primary/10 border border-primary/20 rounded-lg">
            <Eye className="w-4 h-4 text-primary" />
          </div>
          <div>
            <h1 className="text-sm font-bold tracking-tight text-foreground">
              VisionAIre Hub
            </h1>
            <div className="flex items-center gap-2 text-[8px] text-black/40 uppercase font-mono tracking-widest">
              <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
              API Cloud Ready
            </div>
          </div>
        </div>
        <button className="flex items-center gap-2 px-3 py-1.5 bg-primary text-white font-bold uppercase tracking-widest text-[9px] rounded-lg hover:bg-primary/90 transition-all">
          <Plus className="w-3.5 h-3.5" />
          <span>Deploy Model</span>
        </button>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Model List */}
        <div className="w-[240px] border-r border-black/5 p-3 space-y-2.5 overflow-y-auto bg-slate-50/50">
          <h3 className="text-[9px] font-mono text-black/30 uppercase tracking-[0.2em] mb-2 px-1">
            Available Models
          </h3>
          {models.map((model) => (
            <motion.button
              key={model.id}
              onClick={() => setSelectedModel(model)}
              className={`w-full p-3 rounded-xl border text-left transition-all group ${
                selectedModel.id === model.id
                  ? "bg-white border-primary/40 shadow-sm"
                  : "bg-transparent border-black/5 hover:border-black/10"
              }`}
            >
              <div className="flex items-start gap-3">
                <div className={`p-1.5 rounded-lg ${model.bg} ${model.color}`}>
                  <model.icon className="w-3.5 h-3.5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold mb-0.5 truncate text-[11px] text-foreground">
                    {model.name}
                  </div>
                  <div className="text-[9px] text-black/40 truncate">
                    {model.status}
                  </div>
                </div>
                <CaretRight
                  className={`w-3 h-3 mt-1 transition-transform ${selectedModel.id === model.id ? "rotate-90 text-primary" : "text-black/20"}`}
                />
              </div>
            </motion.button>
          ))}

          <div className="pt-2 px-1">
            <div className="p-3 rounded-xl border border-dashed border-black/10 flex flex-col items-center justify-center text-black/20 hover:text-black/40 hover:border-black/20 transition-all cursor-pointer">
              <Plus className="w-3.5 h-3.5 mb-1.5" />
              <span className="text-[9px] font-mono uppercase tracking-widest text-center">
                Custom Training
              </span>
            </div>
          </div>
        </div>

        {/* Preview Area */}
        <div className="flex-1 p-4 flex flex-col gap-4 bg-slate-100/30">
          <div className="flex-1 relative rounded-2xl border border-black/10 overflow-hidden bg-slate-200/50 group">
            {/* Mock Video/Analysis View */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full relative">
                {/* Bounding box simulation based on model */}
                {selectedModel.id === "fr" && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="w-40 h-40 border-2 border-primary rounded-2xl flex items-center justify-center"
                      >
                        <div className="absolute -top-6 left-0 bg-primary px-2 py-0.5 text-white font-bold font-mono text-[8px] uppercase">
                          Match: Roger D. (99.8%)
                        </div>
                        <div className="absolute inset-x-0 top-0 h-[2px] bg-primary/50 animate-scan" />
                        <UserSquare className="w-16 h-16 text-black/10" />
                      </motion.div>
                    </div>
                  </div>
                )}
                {selectedModel.id === "lpr" && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-white border border-black/10 p-2 rounded shadow-lg flex items-center gap-4"
                    >
                      <div className="w-20 h-10 bg-slate-900 flex items-center justify-center text-white font-bold text-lg rounded px-2 tracking-tighter">
                        B 1234 ABC
                      </div>
                      <div className="text-left">
                        <div className="text-[7px] font-mono text-black/40 uppercase">
                          Registration Detected
                        </div>
                        <div className="text-emerald-500 font-bold uppercase text-[10px]">
                          Authorized
                        </div>
                      </div>
                    </motion.div>
                  </div>
                )}
                {selectedModel.id === "od" && (
                  <div className="absolute inset-0 p-6">
                    <div className="grid grid-cols-3 gap-3 h-full">
                      {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div
                          key={i}
                          className="aspect-square border border-black/5 rounded-lg flex items-center justify-center relative overflow-hidden bg-white/40"
                        >
                          <Scan className="w-6 h-6 text-black/5" />
                          <div className="absolute top-1 left-1 border-t border-l border-amber-500 w-1.5 h-1.5" />
                          <div className="absolute top-1 right-1 border-t border-r border-amber-500 w-1.5 h-1.5" />
                          <div className="absolute bottom-1 left-1 border-b border-l border-amber-500 w-1.5 h-1.5" />
                          <div className="absolute bottom-1 right-1 border-b border-r border-amber-500 w-1.5 h-1.5" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="absolute bottom-3 left-3 flex gap-2">
              <div className="px-2.5 py-1 bg-white/80 backdrop-blur-md rounded-lg border border-black/10 text-[8px] font-mono flex items-center gap-2 text-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                LIVE STREAM 04
              </div>
            </div>
          </div>

          {/* Model Stats */}
          <div className="grid grid-cols-3 gap-3 shrink-0">
            {[
              { label: "Confidence", value: "99.8%", icon: ShieldCheck },
              { label: "Latency", value: "24ms", icon: Activity },
              { label: "Total Rec", value: "4.2k/hr", icon: UserSquare2 },
            ].map((stat, i) => (
              <div
                key={i}
                className="p-3 bg-white border border-black/5 rounded-xl shadow-sm"
              >
                <div className="flex items-center gap-1.5 text-[7px] font-mono text-black/40 uppercase tracking-widest mb-1">
                  <stat.icon className="w-2.5 h-2.5" />
                  {stat.label}
                </div>
                <div className="text-base font-bold text-foreground tracking-tight">
                  {stat.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
