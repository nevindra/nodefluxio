"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Radio,
  Video,
  Plane,
  Truck,
  Server,
  Cpu,
  LayoutDashboard,
  Database,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const stages = [
  {
    title: "Edge Capture",
    description: "Data collection from the field",
    nodes: [
      {
        name: "Body Cameras",
        icon: <Radio className="w-5 h-5" />,
        desc: "Wearable devices for field personnel",
      },
      {
        name: "Fixed Cameras",
        icon: <Video className="w-5 h-5" />,
        desc: "Permanent CCTV infrastructure",
      },
      {
        name: "Aerial Systems",
        icon: <Plane className="w-5 h-5" />,
        desc: "Drone and UAV monitoring",
      },
    ],
  },
  {
    title: "Field Aggregation",
    description: "Mobile command units",
    nodes: [
      {
        name: "Mobile Command",
        icon: <Truck className="w-5 h-5" />,
        desc: "Forward stations for video collection",
      },
    ],
  },
  {
    title: "AI Processing",
    description: "Analysis and detection",
    nodes: [
      {
        name: "VisionAIre Engine",
        icon: <Cpu className="w-5 h-5" />,
        desc: "Real-time AI analytics",
      },
      {
        name: "Secure Storage",
        icon: <Server className="w-5 h-5" />,
        desc: "On-premise data vault",
      },
    ],
  },
  {
    title: "Command Output",
    description: "Actionable intelligence",
    nodes: [
      {
        name: "Dashboard",
        icon: <LayoutDashboard className="w-5 h-5" />,
        desc: "Unified monitoring interface",
      },
      {
        name: "Evidence Archive",
        icon: <Database className="w-5 h-5" />,
        desc: "Forensic retrieval system",
      },
    ],
  },
];

export function TacticalTopology() {
  return (
    <div className="w-full">
      {/* Desktop View */}
      <div className="hidden md:block">
        <div className="grid grid-cols-4 gap-6 relative">
          {stages.map((stage, sIdx) => (
            <div key={stage.title} className="relative">
              {/* Stage Header */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {stage.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {stage.description}
                </p>
              </div>

              {/* Stage Nodes */}
              <div className="space-y-4">
                {stage.nodes.map((node, nIdx) => (
                  <motion.div
                    key={node.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: sIdx * 0.15 + nIdx * 0.1 }}
                  >
                    <Card className="hover:shadow-md transition-all">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                            {node.icon}
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-foreground mb-1">
                              {node.name}
                            </h4>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                              {node.desc}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Connecting Arrow */}
              {sIdx < stages.length - 1 && (
                <div className="absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-muted-foreground/40" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden space-y-6">
        {stages.map((stage, sIdx) => (
          <motion.div
            key={stage.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: sIdx * 0.1 }}
          >
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-medium">
                    {sIdx + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{stage.title}</h3>
                    <p className="text-xs text-muted-foreground">
                      {stage.description}
                    </p>
                  </div>
                </div>
                <div className="space-y-2 pl-11">
                  {stage.nodes.map((node) => (
                    <div key={node.name} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm text-foreground">{node.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Bottom Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12"
      >
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  End-to-End Intelligence Pipeline
                </h3>
                <p className="text-muted-foreground">
                  From capture to decision—all data processed on your
                  infrastructure.
                </p>
              </div>
              <div className="flex gap-8">
                <div className="text-center">
                  <div className="text-2xl font-semibold text-primary">
                    Real-Time
                  </div>
                  <div className="text-sm text-muted-foreground">Processing</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-semibold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">On-Premise</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
