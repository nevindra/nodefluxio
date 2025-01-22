"use client";

import Hero from "@/components/hero/Hero";
import Stream from "@/components/platform/stream";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import { HoverEffect } from "@/components/ui/card-hover-effect";

export default function Platform() {
  const heroData = {
    title:
      "VisionAIre Platform: Indonesia's Leading AI Video Analytics Platform",
    image: "/products-hero.webp",
    description:
      "Trusted by Indonesian government agencies and enterprises for mission-critical security and surveillance. Our platform delivers scalable, reliable video analytics for smart cities and security operations.",
    features: [
      "Government-grade security compliance",
      "Nationwide deployment capability",
      "24/7 mission-critical reliability",
    ],
  };

  const features = [
    {
      title: "Government-Grade Security Infrastructure",
      description:
        "Built to meet stringent Indonesian government security standards. Our platform ensures data sovereignty, encryption, and compliance with national regulations while delivering powerful AI video analytics capabilities.",
      link: "/",
    },
    {
      title: "Smart City Integration Hub",
      description:
        "Seamlessly integrate with existing city infrastructure, from traffic cameras to emergency response systems. Supports multi-location deployment with centralized management for nationwide smart city initiatives.",
      link: "/",
    },
    {
      title: "Advanced Surveillance System",
      description:
        "Enterprise-grade surveillance platform with real-time threat detection and incident response capabilities. Designed for large-scale security operations in government facilities and critical infrastructure.",
      link: "/",
    },
    {
      title: "High-Performance Processing",
      description:
        "Optimized for Indonesian infrastructure with efficient bandwidth utilization and edge processing capabilities. Ensures reliable operation even in challenging network conditions across the archipelago.",
      link: "/",
    },
    {
      title: "Secure Data Management",
      description:
        "Comprehensive data management system with local storage options and strict access controls. Features automated backup, disaster recovery, and audit logging for complete operational transparency.",
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
          Indonesia's Leading AI Video Analytics Platform
        </h2>
        <Stream />
        <Card className="mt-8">
          <CardHeader>
            <CardDescription className="text-sm md:text-base text-black text-center">
              VisionAIre Platform delivers trusted AI video analytics for
              Indonesian government agencies and enterprises. Our platform is
              designed for mission-critical security and surveillance
              applications, with a focus on scalability, reliability, and
              government-grade security compliance.
            </CardDescription>
          </CardHeader>
        </Card>
        <div className="mt-8">
          <h3 className="text-xl md:text-2xl font-semibold mb-6 text-center">
            Platform Features
          </h3>
          <HoverEffect items={features} />
        </div>
      </section>
    </main>
  );
}
