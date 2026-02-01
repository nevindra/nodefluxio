"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Activity,
  AlertTriangle,
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  ChevronDown,
  Cpu,
  Database,
  Filter,
  Globe,
  Grid,
  Home,
  MessageSquare,
  MoreHorizontal,
  Plus,
  Search,
  Send,
  User,
  Video,
} from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

interface LenzDashboardMockupProps {
  useCase?: string;
}

export default function LenzDashboardMockup({ useCase = "streams" }: LenzDashboardMockupProps) {
  const [activeStream, setActiveStream] = useState<number | null>(null);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (useCase === "alerts") {
      const timer = setTimeout(() => setShowAlert(true), 1000);
      return () => clearTimeout(timer);
    } else {
      setShowAlert(false);
    }
  }, [useCase]);

  const streams = [
    { id: 1, name: "cibiru-sore", status: "online", resolution: "240p", image: "https://images.unsplash.com/photo-1545147981-19675c05debc?q=80&w=2070&auto=format&fit=crop" },
    { id: 2, name: "FRA Testing", status: "online", resolution: "240p", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" },
    { id: 3, name: "Nodeflux Hall", status: "online", resolution: "240p", image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop" },
    { id: 4, name: "Al Jabar", status: "online", resolution: "240p", image: "https://images.unsplash.com/photo-1571210862729-78a52d3779a2?q=80&w=2070&auto=format&fit=crop" },
    { id: 5, name: "Simpang Pajeksan", status: "offline", resolution: "240p", image: "https://images.unsplash.com/photo-1449156001935-d28605a2d774?q=80&w=2070&auto=format&fit=crop" },
    { id: 6, name: "Flying Tiger Tenant", status: "online", resolution: "240p", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop" },
    { id: 7, name: "iqbal", status: "online", resolution: "240p", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1974&auto=format&fit=crop" },
    { id: 8, name: "Test", status: "online", resolution: "240p", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop" },
  ];

  return (
    <div className="flex h-full w-full bg-white text-foreground/90 overflow-hidden font-sans text-xs select-none">
      {/* Sidebar */}
      <div className="w-16 md:w-40 bg-slate-50 border-r border-black/5 flex flex-col pt-4">
        <div className="px-4 mb-6 flex items-center gap-2">
          <div className="w-7 h-7 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/20">
            <Cpu className="w-3.5 h-3.5 text-primary" />
          </div>
          <span className="font-bold text-[11px] tracking-tight hidden md:block uppercase text-foreground">NODEFLUX<span className="text-primary tracking-tighter ml-0.5">OS</span></span>
        </div>

        <nav className="flex-1 px-2 space-y-0.5">
          {[
            { icon: Home, label: "Home", active: true },
            { icon: Video, label: "Core" },
            { icon: User, label: "Unit Management" },
            { icon: Database, label: "Media Servers" },
            { icon: Activity, label: "Investigation" },
            { icon: Globe, label: "Analytics" },
          ].map((item, i) => (
            <div
              key={i}
              className={`flex items-center gap-2.5 px-3 py-2 rounded transition-colors group cursor-pointer ${item.active ? 'bg-primary/5 text-primary' : 'hover:bg-black/5 text-black/40'}`}
            >
              <item.icon className={`w-3.5 h-3.5 ${item.active ? 'text-primary' : 'group-hover:text-black/60'}`} />
              <span className="hidden md:block font-medium text-[10px]">{item.label}</span>
            </div>
          ))}
        </nav>

        <div className="p-4 border-t border-black/5 text-[9px] text-black/20 uppercase hidden md:block tracking-widest">
          v4.5.1 Stable
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 bg-white">
        {/* Top Header */}
        <header className="h-10 bg-white border-b border-black/5 flex items-center justify-between px-4 shrink-0">
          <div className="flex items-center gap-6">
            <h1 className="font-semibold tracking-tight text-[11px] text-foreground">All Streams</h1>
            <div className="hidden md:flex items-center gap-1 text-black/40">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
              <span className="text-[9px] uppercase font-mono">Platform Online</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-black/5 border border-black/10 px-2 py-0.5 rounded text-[9px] flex items-center gap-2 text-foreground">
              <span>Bahasa</span>
              <ChevronDown className="w-3 h-3 text-black/20" />
            </div>
          </div>
        </header>

        {/* Toolbar */}
        <div className="p-3 bg-slate-50/50 border-b border-black/5 flex flex-wrap gap-3 items-center shrink-0">
          <div className="relative group max-w-[200px] w-full">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3 h-3 text-black/20 group-focus-within:text-primary transition-colors" />
            <input
              readOnly
              placeholder="Search..."
              className="bg-white border border-black/10 w-full pl-8 pr-3 py-1 rounded text-[10px] focus:outline-none focus:border-primary/50 transition-colors text-foreground"
            />
          </div>

          <div className="flex items-center gap-1.5">
            <div className="h-7 flex items-center gap-1 bg-white border border-black/10 px-2 rounded cursor-pointer hover:bg-slate-50 transition-colors text-[10px] text-foreground">
              <Filter className="w-3 h-3 text-black/40" />
              <span>Semua</span>
              <ChevronDown className="w-3 h-3 text-black/20" />
            </div>
            <div className="h-7 w-7 flex items-center justify-center bg-white border border-black/10 rounded cursor-pointer hover:bg-slate-50 transition-colors">
              <Grid className="w-3 h-3 text-black/40" />
            </div>
          </div>

          <div className="flex-1" />

          <div className="flex items-center gap-1.5">
            <button className="h-7 px-3 bg-primary text-white text-[9px] font-bold uppercase rounded flex items-center gap-2 transition-colors hover:bg-primary/90">
              <Plus className="w-3 h-3" />
              <span>Tambah</span>
            </button>
            <button className="h-7 px-3 bg-white border border-black/10 hover:bg-slate-50 text-[9px] font-bold uppercase rounded flex items-center gap-2 transition-colors text-yellow-600">
              <AlertTriangle className="w-3 h-3" />
              <span>Alert (1)</span>
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-3 scrollbar-hide relative bg-slate-50/30">


          <AnimatePresence mode="wait">
            {useCase === "streams" && (
              <motion.div
                key="streams"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="grid grid-cols-2 lg:grid-cols-4 gap-4"
              >
                {streams.map((stream) => (
                  <motion.div
                    key={stream.id}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setActiveStream(stream.id)}
                    className={`relative aspect-video rounded-lg overflow-hidden border transition-all duration-300 group cursor-pointer ${activeStream === stream.id ? 'border-primary ring-1 ring-primary/30 shadow-lg' : 'border-black/5 hover:border-black/10 shadow-sm'}`}
                  >
                    <Image
                      src={stream.image}
                      alt={stream.name}
                      fill
                      className={`object-cover transition-all duration-700 ${stream.status === 'offline' ? 'grayscale blur-sm opacity-50' : 'group-hover:scale-110 grayscale-[0.2] brightness-90 group-hover:grayscale-0 group-hover:brightness-100'}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                    {/* Overlays */}
                    <div className="absolute top-2 left-2 flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full ${stream.status === 'online' ? 'bg-green-500' : 'bg-red-500'} animate-pulse`} />
                      <span className="text-[10px] font-mono font-bold tracking-tight text-white drop-shadow-md">{stream.name}</span>
                    </div>

                    <div className="absolute top-2 right-2 flex items-center gap-1.5">
                      <span className="bg-white/80 backdrop-blur-md border border-black/10 px-1 py-0.5 rounded text-[8px] font-mono text-foreground font-bold">{stream.resolution}</span>
                    </div>

                    {stream.status === 'offline' && (
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-white/20 backdrop-blur-[2px]">
                        <div className="w-8 h-8 rounded-full border-2 border-primary/20 border-t-primary animate-spin" />
                        <span className="text-[10px] font-mono text-foreground/60 font-bold">RECONNECTING...</span>
                      </div>
                    )}

                    <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <MoreHorizontal className="w-4 h-4 text-white" />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {useCase === "alerts" && (
              <motion.div
                key="alerts"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-6"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-video relative rounded-lg overflow-hidden border border-red-500/50 shadow-md">
                    <Image
                      src={streams[0].image}
                      alt="Alert View"
                      fill
                      className="object-cover grayscale-[0.1]"
                    />
                    <div className="absolute inset-0 border-2 border-red-500 animate-pulse" />
                    <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-0.5 rounded text-[8px] font-bold shadow-lg">ALERT: UNKNOWN PERSON</div>
                  </div>
                  <div className="space-y-4">
                    <div className="p-4 bg-white border border-black/5 rounded-lg shadow-sm">
                      <h3 className="text-[10px] uppercase font-bold text-black/40 mb-2 tracking-wider">Webhook Status</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <MessageSquare className="w-3 h-3 text-green-600" />
                            <span className="text-foreground">WhatsApp</span>
                          </div>
                          <span className="text-green-600 flex items-center gap-1 font-bold text-[9px]"><CheckCircle2 className="w-2.5 h-2.5" /> Sent</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Send className="w-3 h-3 text-blue-600" />
                            <span className="text-foreground">Telegram</span>
                          </div>
                          <span className="text-green-600 flex items-center gap-1 font-bold text-[9px]"><CheckCircle2 className="w-2.5 h-2.5" /> Sent</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Simulated Sonner Toast */}
                <AnimatePresence>
                  {showAlert && (
                    <motion.div
                      initial={{ opacity: 0, x: 50, scale: 0.9 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="absolute bottom-4 right-4 w-64 bg-white border border-black/10 rounded-lg shadow-2xl p-3 z-50"
                    >
                      <div className="flex gap-3">
                        <div className="w-8 h-8 bg-red-500/10 rounded-full flex items-center justify-center">
                          <AlertTriangle className="w-4 h-4 text-red-500" />
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-xs text-foreground">Security Alert</div>
                          <div className="text-[10px] text-black/40">Unknown person detected at cibiru-sore</div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}

            {useCase === "history" && (
              <motion.div
                key="history"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-white border border-black/5 rounded-lg overflow-hidden shadow-sm"
              >
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-black/5 bg-slate-50">
                      <th className="px-4 py-2 font-bold uppercase tracking-wider text-[8px] text-black/40">Timestamp</th>
                      <th className="px-4 py-2 font-bold uppercase tracking-wider text-[8px] text-black/40">Event Type</th>
                      <th className="px-4 py-2 font-bold uppercase tracking-wider text-[8px] text-black/40">Location</th>
                      <th className="px-4 py-2 font-bold uppercase tracking-wider text-[8px] text-black/40">Confidence</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { time: "14:22:11", event: "Person Detected", loc: "Nodeflux Hall", score: "98.2%" },
                      { time: "14:21:45", event: "Vehicle (B 1234 ABC)", loc: "FRA Testing", score: "94.5%" },
                      { time: "14:20:12", event: "Person Detected", loc: "cibiru-sore", score: "99.1%" },
                      { time: "14:18:33", event: "Crowd Formation", loc: "Al Jabar", score: "88.2%" },
                      { time: "14:15:02", event: "Vehicle Recognized", loc: "Flying Tiger", score: "92.0%" },
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-black/5 hover:bg-slate-50/50 transition-colors">
                        <td className="px-4 py-2 font-mono text-foreground/60">{row.time}</td>
                        <td className="px-4 py-2 font-medium text-foreground">{row.event}</td>
                        <td className="px-4 py-2 text-black/40">{row.loc}</td>
                        <td className="px-4 py-2">
                          <span className="px-2 py-0.5 bg-primary/10 text-primary border border-primary/20 rounded-full text-[8px] font-bold">{row.score}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
            )}

            {useCase === "stats" && (
              <motion.div
                key="stats"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="grid grid-cols-3 gap-4"
              >
                <div className="col-span-2 bg-white border border-black/5 rounded-lg p-4 shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-[10px] uppercase font-bold text-black/40 tracking-wider">Detection Trends (24h)</h3>
                    <BarChart3 className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <div className="h-32 flex items-end gap-2 px-2">
                    {[40, 65, 45, 90, 55, 70, 85, 40, 60, 75, 50, 80].map((h, i) => (
                      <div key={i} className="flex-1 bg-primary/10 hover:bg-primary transition-colors rounded-t-sm relative group" style={{ height: `${h}%` }}>
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[8px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 shadow-lg">
                          {h * 12} detects
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    { label: "Total Detections", value: "1,240", change: "+12%" },
                    { label: "Active Nodes", value: "24/25", change: "Stable" },
                    { label: "Avg. Accuracy", value: "96.4%", change: "+0.4%" },
                  ].map((stat, i) => (
                    <div key={i} className="bg-white border border-black/5 rounded-lg p-3 shadow-sm">
                      <div className="text-[8px] uppercase text-black/30 font-bold mb-1 tracking-wider">{stat.label}</div>
                      <div className="flex items-end justify-between">
                        <div className="text-sm font-bold text-foreground">{stat.value}</div>
                        <div className="text-[8px] text-green-600 font-bold flex items-center gap-0.5">
                          {stat.change} <ArrowUpRight className="w-2 h-2" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom Status Bar */}
        <footer className="h-8 bg-slate-50 border-t border-black/5 flex items-center justify-between px-4 shrink-0 text-[9px] font-mono text-black/40">
          <div className="flex items-center gap-4 text-foreground/60">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="font-bold">SYSTEM ONLINE</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span>CPU: <span className="text-primary font-bold">42%</span></span>
              <span>RAM: <span className="text-primary font-bold">12.4GB</span></span>
            </div>
          </div>
          <div className="flex items-center gap-4 uppercase tracking-[0.15em] font-bold">
            <span>Disk: 84% Available</span>
            <span className="text-black/20">13:42:11</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
