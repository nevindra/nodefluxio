"use client";

import { SingleHero } from "@/components/hero/SingleHero";
import Consolutation from "@/components/landing-page/Consolutation";
import TechnicalMedia from "@/components/landing-page/TechnicalMedia";
import { TacticalTopology } from "@/components/solutions/TacticalTopology";
import { motion } from "framer-motion";
import {
  BarChart3,
  Bell,
  Cpu,
  Eye,
  LayoutGrid,
  Map,
  Plus,
  Radio,
  Shield,
  Target,
  Users,
  Zap
} from "lucide-react";

const useCases = [
  {
    id: "SC-01",
    name: "Public Safety",
    description: "Monitor busy public areas like parks, stations, or streets to ensure everyone stays safe and help arrives quickly when needed.",
    icon: <Users className="w-5 h-5" />,
    relevance: ["Crowd Management", "Safety Monitoring", "Incident Alerts"],
    specs: ["24/7 Monitoring", "Real-time Detection", "Instant Alerts"]
  },
  {
    id: "SC-02",
    name: "Urban Monitoring",
    description: "Keep an eye on city traffic and infrastructure to manage flow and detect unusual events automatically.",
    icon: <Map className="w-5 h-5" />,
    relevance: ["Traffic Flow", "Area Analytics", "Heat Mapping"],
    specs: ["Smart Analytics", "Historical Data", "Trend Analysis"]
  },
  {
    id: "SC-03",
    name: "Emergency Response",
    description: "Give field responders the information they need with real-time video feeds during critical situations.",
    icon: <Radio className="w-5 h-5" />,
    relevance: ["Field Coordination", "Live Updates", "Secure Hosting"],
    specs: ["Mobile Access", "Direct Messaging", "GPS Tracking"]
  }
];

const coreCapabilities = [
  {
    title: "Fast Response",
    description: "Get alerts the moment something happens, allowing your team to respond in seconds, not minutes.",
    id: "BEN-01",
    icon: <Zap className="w-6 h-6" />
  },
  {
    title: "Automatic Monitoring",
    description: "Let AI watch the screens for you. It never gets tired and detects incidents automatically round the clock.",
    id: "BEN-02",
    icon: <Target className="w-6 h-6" />
  },
  {
    title: "Easy to Manage",
    description: "Control all your cameras from one simple dashboard. No complex setup or technical skills required.",
    id: "BEN-03",
    icon: <Cpu className="w-6 h-6" />
  },
  {
    title: "Total Privacy",
    description: "Your data stays yours. Everything is processed locally on your own network for maximum security.",
    id: "BEN-04",
    icon: <Shield className="w-6 h-6" />
  }
];

const dashboardFeatures = [
  {
    title: "Alert Management",
    description: "Receive instant notifications. Send alerts directly to WhatsApp, Telegram, or integrate with your own security tools.",
    icon: <Bell className="w-6 h-6" />
  },
  {
    title: "Visual Statistics",
    description: "Turn video into data. View heatmaps, object counts, and peak time patterns in clear, easy-to-read charts.",
    icon: <BarChart3 className="w-6 h-6" />
  },
  {
    title: "Multi-Camera Views",
    description: "Watch all your cameras at once. Customize your layout to focus on the zones that matter most to you.",
    icon: <LayoutGrid className="w-6 h-6" />
  },
  {
    title: "Total Control",
    description: "Manage users, set custom automation rules, and access your data anytime from any secure device.",
    icon: <Plus className="w-6 h-6" />
  }
];

export default function MassiveSurveillance() {
  return (
    <main className="min-h-screen bg-background text-white">
      {/* Hero Section */}
      <SingleHero
        title={<>Smart Safety <br /><span className="text-muted-foreground">For Every City.</span></>}
        description="Simplifying city safety with intelligent video monitoring. Connect all your cameras and respond faster to any incident."
        label="Integrated Surveillance Solution"
        features={[
          "Automatic Intelligence Detection",
          "Real-time Safety Alerts",
          "Simple Central Dashboard",
          "Private & Secure Storage"
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
            SAFETY <span className="text-muted-foreground">BENEFITS.</span>
          </h2>
          <p className="text-lg text-white/50 font-light leading-relaxed max-w-2xl">
            Our technology makes it easier to keep people safe. We use smart AI to help you monitor large areas automatically, so you can focus on what matters most.
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
              See what's happening right now with our live video analysis. Our system checks your camera feeds instantly and lets you know if something needs your attention.
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

      {/* Dashboard Showcase Section */}
      <section className="container mx-auto px-8 lg:px-24 mt-48">
        <div className="max-w-4xl mb-16">
          <div className="flex items-center space-x-2 mb-6">
            <span className="w-2 h-px bg-white/20"></span>
            <span className="text-[10px] font-mono tracking-[0.3em] text-white/40 uppercase">
              Dashboard Overview
            </span>
          </div>
          <h2 className="text-4xl font-medium tracking-tight text-white mb-8">
            ALL YOUR INSIGHTS <span className="text-muted-foreground">IN ONE PLACE.</span>
          </h2>
          <p className="text-white/50 font-light leading-relaxed max-w-2xl">
            Our intuitive dashboard gives you a complete view of your safety operations. Monitor live feeds, track alerts, and analyze trends with ease.
          </p>
        </div>

        <div className="relative aspect-video w-full rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden group">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center space-y-4">
              <Eye className="w-12 h-12 text-white/20" />
              <p className="text-white/20 font-mono text-sm tracking-widest uppercase text-center px-4">
                [ PREMIUM DASHBOARD MOCKUP PLACEHOLDER ] <br />
                <span className="text-[10px]">Real-time Analytics • Heatmaps • Object Detection</span>
              </p>
            </div>
          </div>
          {/* Subtle decoration to make it look "techy" */}
          <div className="absolute top-0 left-0 w-full p-4 border-b border-white/5 flex items-center justify-between">
            <div className="flex space-x-2">
              <div className="w-2 h-2 rounded-full bg-white/10"></div>
              <div className="w-2 h-2 rounded-full bg-white/10"></div>
              <div className="w-2 h-2 rounded-full bg-white/10"></div>
            </div>
            <div className="text-[10px] font-mono text-white/10 uppercase tracking-widest">System Operational</div>
          </div>
          <div className="absolute inset-0 bg-hero-pattern opacity-[0.03] pointer-events-none"></div>
        </div>
      </section>

      {/* Dashboard Features Detail Section */}
      <section className="container mx-auto px-8 lg:px-24 mt-12 mb-48">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
          {dashboardFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-background p-10 flex flex-col h-full border-r border-white/5 last:border-r-0"
            >
              <div className="text-white/40 mb-8">{feature.icon}</div>
              <h3 className="text-xl font-medium text-white mb-4">{feature.title}</h3>
              <p className="text-white/40 font-light text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="container mx-auto px-8 lg:px-24 mt-48 overflow-hidden">
        <div className="max-w-4xl mb-16">
          <div className="flex items-center space-x-2 mb-6">
            <span className="w-2 h-px bg-white/20"></span>
            <span className="text-[10px] font-mono tracking-[0.3em] text-white/40 uppercase">
              How it works
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-8 uppercase">
            HOW IT <span className="text-muted-foreground">WORKS.</span>
          </h2>
          <p className="text-white/50 font-light leading-relaxed max-w-2xl">
            Our system connects everything in one simple flow. From gathering video on the ground to analyzing it with AI and helping you make the right decisions in the control room.
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

