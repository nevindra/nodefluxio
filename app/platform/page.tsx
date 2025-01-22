"use client";

import Hero from "@/components/hero/Hero";
import Stream from "@/components/platform/stream";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import { HoverEffect } from "@/components/ui/card-hover-effect";

export default function Platform() {
  const heroData = {
    title: "VisionAIre Platform: Enterprise Computer Vision Infrastructure",
    image: "/products-hero.webp",
    description:
      "Deploy enterprise-grade computer vision infrastructure with VisionAIre Platform. Our scalable architecture handles real-time video processing, AI inference, and analytics for mission-critical applications across industries.",
    features: [
      "High-performance distributed processing architecture",
      "Enterprise-ready API integration framework",
      "Production-grade AI model deployment system",
    ],
  };

  const features = [
    {
      title: "Enterprise Processing Infrastructure",
      description:
        "Enterprise-grade processing infrastructure that unifies AI inference, data management, and video streaming in a distributed architecture. Designed for high availability and scalable performance in production environments.",
      link: "/",
    },
    {
      title: "Multi-Source Video Integration",
      description:
        "Enterprise-ready integration hub supporting HD cameras, IoT devices, drones, and industrial video systems. Features automated device discovery, secure connection management, and redundant failover capabilities.",
      link: "/",
    },
    {
      title: "Production AI Deployment System",
      description:
        "Production-grade AI model deployment system with real-time inference capabilities. Supports model versioning, A/B testing, and automated performance monitoring for enterprise AI operations.",
      link: "/",
    },
    {
      title: "Enterprise Video Processing Engine",
      description:
        "High-performance video processing engine with hardware acceleration support. Delivers optimal streaming quality while maintaining efficient resource utilization for enterprise-scale deployments.",
      link: "/",
    },
    {
      title: "Distributed Data Architecture",
      description:
        "Enterprise-ready distributed database system designed for high-throughput video data and metadata processing. Features automatic sharding, replication, and disaster recovery capabilities.",
      link: "/",
    },
    {
      title: "Enterprise Analytics Suite",
      description:
        "Comprehensive enterprise analytics suite with real-time monitoring, custom reporting, and predictive insights. Enables data-driven operational decisions with advanced visualization tools.",
      link: "/",
    },
  ];

  return (
    <main>
      <Hero data={heroData} />
      <section className="py-8 w-[85%] mx-auto mt-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-primary">
          Enterprise Computer Vision Infrastructure
        </h2>
        <Stream />
        <Card className="mt-8">
          <CardHeader>
            <CardDescription className="text-sm md:text-base text-black text-center">
              VisionAIre Platform delivers enterprise-grade computer vision
              infrastructure designed for mission-critical applications. Our
              distributed architecture handles high-throughput video processing,
              real-time AI inference, and advanced analytics at scale. Built
              with enterprise requirements in mind, the platform provides robust
              security, seamless integration capabilities, and comprehensive
              monitoring tools for organizations deploying computer vision in
              production environments.
            </CardDescription>
          </CardHeader>
        </Card>
        <div className="mt-8">
          <h3 className="text-xl md:text-2xl font-semibold mb-6 text-center">
            Enterprise Platform Features
          </h3>
          <HoverEffect items={features} />
        </div>
      </section>
    </main>
  );
}
