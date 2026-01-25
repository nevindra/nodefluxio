"use client";

import { SingleHero } from "@/components/hero/SingleHero";
import TechnicalMedia from "@/components/landing-page/TechnicalMedia";
import Consolutation from "@/components/landing-page/Consolutation";
import { motion } from "framer-motion";
import {
  Shield,
  Eye,
  Map,
  Zap,
  Cpu,
  Radio,
  Target,
  FileSearch,
  Users
} from "lucide-react";
import Image from "next/image";
import topologi from "@/public/solutions/massive-surveillance.png";
import visionaire from "@/public/products-hero.webp";
import { TacticalTopology } from "@/components/solutions/TacticalTopology";

const useCases = [
  {
    id: "MS-01",
    name: "Law Enforcement Response",
    description: "Equip personnel with smart body cameras that identify threats in real-time and alert headquarters for immediate coordination.",
    icon: <Radio className="w-5 h-5" />,
    relevance: ["Face Recognition", "Threat Detection", "Field Coordination"],
    specs: ["Secure Video Transmission", "Emergency Broadcast", "GPS Unit Tracking"]
  },
  {
    id: "MS-02",
    name: "Strategic Reconnaissance",
    description: "Smart drones for monitoring borders, restricted zones, or high-risk areas with thermal sensing and automated patrol routes.",
    icon: <Map className="w-5 h-5" />,
    relevance: ["Area Analytics", "Heat Mapping", "Remote Operations"],
    specs: ["Autonomous Flight", "Night Vision", "Secure Ground Link"]
  },
  {
    id: "MS-03",
    name: "Command & Control Center",
    description: "Centralize all municipal or agency feeds into one interface. Our AI filters thousands of streams to highlight critical incidents.",
    icon: <Cpu className="w-5 h-5" />,
    relevance: ["Unusual Activity", "Identity Matching", "Centralized Map"],
    specs: ["24/7 Monitoring", "Agency-wide Sync", "Secure Data Archival"]
  }
];

const coreCapabilities = [
  {
    title: "Regional Coverage",
    description: "Manage thousands of cameras across entire cities or national infrastructure with zero delay.",
    id: "CAP-01",
    icon: <Zap className="w-6 h-6" />
  },
  {
    title: "Intelligence Alerts",
    description: "AI monitors every frame for you, sending instant alerts for persons of interest or high-risk behavior.",
    id: "CAP-02",
    icon: <Target className="w-6 h-6" />
  },
  {
    title: "Sovereign Control",
    description: "Your data stays under your control. All processing occurs on your sovereign network for maximum security.",
    id: "CAP-03",
    icon: <Shield className="w-6 h-6" />
  },
  {
    title: "Rapid Investigation",
    description: "Search days of footage across your entire network in seconds for specific vehicles, faces, or events.",
    id: "CAP-04",
    icon: <FileSearch className="w-6 h-6" />
  }
];

export default function MassiveSurveillance() {
  return (
    <main className="min-h-screen bg-background text-white">
      {/* Hero Section */}
      <SingleHero
        title={<>MISSION <br /><span className="text-muted-foreground">CRITICAL.</span></>}
        description="Smart sensing infrastructure for nationwide monitoring. We provide an integrated foundation for administrative and law enforcement agencies to maintain persistent operational awareness."
        label="Strategic Intelligence Platform"
        image={visionaire}
        features={[
          "Agency-Wide AI Detection",
          "Tactical Field Alerts",
          "Unified Command & Control",
          "Sovereign Data Storage"
        ]}
      />

      {/* Capabilities Section */}
      <section className="container mx-auto px-8 lg:px-24 mt-40">
        <div className="max-w-4xl mb-24">
          <div className="flex items-center space-x-2 mb-6">
            <span className="w-2 h-px bg-white/20"></span>
            <span className="text-[10px] font-mono tracking-[0.3em] text-white/40 uppercase">
              Mission parameters
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-8">
            STRATEGIC <span className="text-muted-foreground">FOUNDATION.</span>
          </h2>
          <p className="text-lg text-white/50 font-light leading-relaxed max-w-2xl">
            Our smart monitoring architecture is built for national scale and security. We empower agencies to monitor vast areas with automated sensing modules that detect and analyze events in real-time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
          {coreCapabilities.map((cap, index) => (
            <motion.div
              key={cap.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-background p-8 flex flex-col h-full border-r border-white/5 last:border-r-0"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="text-white/40">{cap.icon}</div>
                <span className="text-[10px] font-mono text-white/10">{cap.id}</span>
              </div>
              <h3 className="text-xl font-medium text-white mb-4">{cap.title}</h3>
              <p className="text-white/40 font-light text-sm leading-relaxed">{cap.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Live Operations Section */}
      <section className="container mx-auto px-8 lg:px-24 mt-48">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-6">
              <span className="w-2 h-px bg-white/20"></span>
              <span className="text-[10px] font-mono tracking-[0.3em] text-white/40 uppercase">
                Real-Time Monitoring
              </span>
            </div>
            <h2 className="text-4xl font-medium tracking-tight text-white mb-8">
              INSTANT <span className="text-muted-foreground">AWARENESS.</span>
            </h2>
            <p className="text-white/50 font-light leading-relaxed mb-8">
              Experience the power of autonomous sensing with our live intelligence feeds. Our system processes high-resolution video instantly, delivering threat alerts and actionable data to command centers.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-2xl font-mono text-white mb-1">REAL-TIME</div>
                <div className="text-[10px] font-mono text-white/20 uppercase tracking-widest">Alert Speed</div>
              </div>
              <div>
                <div className="text-2xl font-mono text-white mb-1">100%</div>
                <div className="text-[10px] font-mono text-white/20 uppercase tracking-widest">Data Control</div>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full">
            <TechnicalMedia
              videoSrc="/demo-surveillance.mp4"
              label="SECURE CAMERA FEED // ZONE 1"
              code="ACTIVE-MONITORING"
            />
          </div>
        </div>
      </section>

      {/* Tactical Topology Section */}
      <section className="container mx-auto px-8 lg:px-24 mt-48 overflow-hidden">
        <div className="max-w-4xl mb-16">
          <div className="flex items-center space-x-2 mb-6">
            <span className="w-2 h-px bg-white/20"></span>
            <span className="text-[10px] font-mono tracking-[0.3em] text-white/40 uppercase">
              How it works
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-8 uppercase">
            System <span className="text-muted-foreground">TOPOLOGY.</span>
          </h2>
          <p className="text-white/50 font-light leading-relaxed max-w-2xl">
            A simple look at how VisionAIre connects everything together. From gathering video on the ground to analyzing it with AI and helping you make the right decisions in the control room.
          </p>
        </div>

        <TacticalTopology />
      </section>

      {/* Deployment Scenarios Grid */}
      <section className="container mx-auto px-8 lg:px-24 mt-56 mb-40">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-2 mb-6">
              <span className="w-2 h-px bg-white/20"></span>
              <span className="text-[10px] font-mono tracking-[0.3em] text-white/40 uppercase">
                Where it's used
              </span>
            </div>
            <h2 className="text-4xl font-medium tracking-tight text-white uppercase">
              Solutions for <span className="text-muted-foreground">ANY SCALE.</span>
            </h2>
          </div>
          <div className="text-[10px] font-mono text-white/20 text-right uppercase tracking-[0.5em] hidden md:block">
            SMART MONITORING MODULES
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-background flex flex-col h-full border-r border-white/5 last:border-r-0"
            >
              {/* Card Header Illustration/Icon Area */}
              <div className="relative h-48 bg-white/[0.02] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 border-b border-white/5"></div>
                <div className="relative z-10 w-16 h-16 rounded-full border border-white/10 flex items-center justify-center bg-background/50 backdrop-blur-sm">
                  {useCase.icon}
                </div>
                {/* Visual Glitch/Grid effect */}
                <div className="absolute inset-0 opacity-[0.03] bg-hero-pattern [background-size:20px_20px]"></div>
              </div>

              <div className="p-10 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[10px] font-mono text-white/20 tracking-tighter">{useCase.id}</span>
                  <div className="w-10 h-px bg-white/10"></div>
                </div>
                <h3 className="text-2xl font-medium text-white mb-6 uppercase tracking-tight">{useCase.name}</h3>
                <p className="text-white/40 font-light mb-10 text-sm leading-relaxed">
                  {useCase.description}
                </p>

                <div className="mt-auto space-y-8">
                  <div>
                    <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/20 mb-4">What AI Detects</h4>
                    <div className="flex flex-wrap gap-2">
                      {useCase.relevance.map((rel, i) => (
                        <span key={i} className="px-2 py-1 border border-white/5 text-[9px] font-mono text-white/40 uppercase tracking-widest">
                          {rel}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/20 mb-4">Quick Specs</h4>
                    <div className="space-y-2">
                      {useCase.specs.map((spec, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500/40"></div>
                          <span className="text-[9px] font-mono text-white/30 uppercase tracking-tight">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative py-32 overflow-hidden border-y border-white/5">
        <div className="absolute inset-0 bg-white/[0.01] pointer-events-none"></div>
        <Consolutation />
      </section>
    </main>
  );
}

