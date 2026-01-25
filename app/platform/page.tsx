"use client";

import { SingleHero } from "@/components/hero/SingleHero";
import {
  Cpu,
  Maximize,
  Scan,
  Workflow,
  CheckCircle2,
  Building2,
  Globe2,
  Smartphone,
  LayoutDashboard,
  ShieldCheck,
  Navigation,
} from "lucide-react";
import { motion } from "framer-motion";

const strengths = [
  {
    title: "Open-Devices Compatibility",
    subtitle: "Built for Your Existing Setup",
    description: "Forget brand limitations. Our platform is designed to leverage your existing camera infrastructure—whether it's legacy CCTV, high-end drones, body-worn cameras, or even satellite imagery. We turn any video source into a source of intelligence.",
    features: [
      "Brand Independent: Hikvision, Dahua, Axis, and more",
      "Mobile & Wearable integration Support",
      "Drone and Aerial Imagery Processing",
      "Satellite and Wide-Area Monitoring"
    ],
    icon: <Scan className="w-6 h-6" />,
    visual: (
      <div className="grid grid-cols-2 gap-4 p-8 h-full items-center">
        {[
          "HIKVISION", "AVIGILON", "DAHUA", "BOSCH", "PANASONIC", "CUSTOM SOURCE"
        ].map((brand) => (
          <div key={brand} className="h-16 flex items-center justify-center rounded-xl bg-white/[0.03] border border-white/5 text-[10px] font-mono tracking-widest text-white/40">
            {brand}
          </div>
        ))}
      </div>
    )
  },
  {
    title: "Tailored Application Possibility",
    subtitle: "Flexibility in Every Byte",
    description: "Explore our API-first approach that gives you the freedom to build exactly what you need. From specialized command centers to instant mobile notifications, our platform integrates seamlessly with your current software or powers entirely new ones.",
    features: [
      "API-First Architecture for developers",
      "Unified Command Center Interface",
      "Real-time Mobile Alerts & Notifications",
      "Custom Enterprise Dashboard Support"
    ],
    icon: <Workflow className="w-6 h-6" />,
    visual: (
      <div className="flex flex-col justify-center gap-4 p-8 h-full">
        {[
          { icon: <LayoutDashboard className="w-4 h-4" />, label: "Smart Command Center" },
          { icon: <Smartphone className="w-4 h-4" />, label: "Mobile Notification App" },
          { icon: <ShieldCheck className="w-4 h-4" />, label: "Automated Access Control" },
          { icon: <Navigation className="w-4 h-4" />, label: "Emergency Response Hub" }
        ].map((item, i) => (
          <div key={i} className="flex items-center space-x-4 p-4 rounded-xl bg-white/[0.03] border border-white/5">
            <div className="p-2 rounded-lg bg-white/5 text-white/40">{item.icon}</div>
            <div className="text-[11px] font-mono text-white/40 uppercase tracking-wider">{item.label}</div>
          </div>
        ))}
      </div>
    )
  },
  {
    title: "Optimized for Any Scale",
    subtitle: "Grow From One to Millions",
    description: "Built on a modern, containerized architecture that scales with your ambition. Whether you're securing a single-site storefront or deploying a nation-wide smart city topology, the platform maintains peak performance and reliability.",
    features: [
      "Containerized Microservices Architecture",
      "Seamless Multi-site Management",
      "Nation-wide Scale Topology",
      "Optimized Resource Consumption"
    ],
    icon: <Maximize className="w-6 h-6" />,
    visual: (
      <div className="relative h-full flex items-end justify-between p-12 overflow-hidden">
        <div className="w-1/4 h-1/4 bg-white/[0.03] border border-white/5 rounded-lg flex items-center justify-center relative group-hover:bg-white/10 transition-colors">
          <Building2 className="w-5 h-5 text-white/20" />
          <div className="absolute -bottom-6 text-[8px] font-mono text-white/10 uppercase">Single Site</div>
        </div>
        <div className="w-1/3 h-1/2 bg-white/[0.05] border border-white/10 rounded-lg flex items-center justify-center relative translate-y-4">
          <div className="absolute -top-6 text-[8px] font-mono text-white/20 uppercase">City Wide</div>
          <Building2 className="w-8 h-8 text-white/30" />
        </div>
        <div className="w-1/3 h-3/4 bg-white/[0.07] border border-white/20 rounded-lg flex items-center justify-center relative translate-y-8">
          <div className="absolute -top-6 text-[8px] font-mono text-white/20 uppercase">Nation Wide</div>
          <Globe2 className="w-12 h-12 text-white/40" />
        </div>
      </div>
    )
  }
];

export default function Platform() {
  return (
    <main className="bg-background pb-40">
      <SingleHero
        title={<>VISION AI <br /><span className="text-muted-foreground">INTEGRATION.</span></>}
        description="The foundational 'brain' that connects any video source to any application. A flexible, government-grade platform designed to evolve with your infrastructure."
        label="The Core Platform"
        secondaryCtaText="Platform Strengths"
        secondaryCtaHref="#strengths"
      />

      {/* Core Strength Sections */}
      <section id="strengths" className="container mx-auto px-8 lg:px-12 mt-40 space-y-40">
        <div className="max-w-4xl">
          <div className="flex items-center space-x-2 mb-6">
            <span className="w-2 h-px bg-white/20"></span>
            <span className="text-[10px] font-mono tracking-[0.3em] text-white/40 uppercase">
              Core Capabilities
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-8">
            STRENGTH IN <span className="text-muted-foreground">FLEXIBILITY.</span>
          </h2>
          <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-2xl">
            Our platform isn't just another piece of software—it's the central nervous system for your visual data, designed to be compatible, customizable, and infinitely scalable.
          </p>
        </div>

        {strengths.map((strength, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16 md:gap-24`}
          >
            {/* Visual Block (Meaningful instead of Decorative) */}
            <div className="flex-1 w-full aspect-square relative group">
              <div className="absolute inset-0 bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden backdrop-blur-sm shadow-2xl transition-all duration-500 group-hover:bg-white/[0.04] group-hover:border-white/10">
                {strength.visual}

                {/* Subtle Grid overlay for texture without being purely decorative */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                  style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}
                />
              </div>
            </div>

            {/* Content Block */}
            <div className="flex-1 space-y-8">
              <div>
                <span className="text-primary/60 font-mono text-[10px] tracking-[0.3em] uppercase mb-4 block">
                  {strength.subtitle}
                </span>
                <h3 className="text-3xl md:text-4xl font-medium text-white mb-6">
                  {strength.title}
                </h3>
                <p className="text-muted-foreground font-light leading-relaxed text-lg">
                  {strength.description}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 pt-4 border-t border-white/5">
                {strength.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-white/20 mt-1 shrink-0" />
                    <span className="text-white/60 font-light">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Final CTA / Summary Section */}
      <section className="container mx-auto px-8 lg:px-12  mt-60">
        <div className="bg-white/[0.02] border border-white/5 p-12 md:p-24 rounded-3xl text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          <div className="max-w-2xl mx-auto space-y-8 relative z-10">
            <h2 className="text-3xl md:text-4xl font-medium text-white">
              The Reliable <span className="text-muted-foreground">Core.</span>
            </h2>
            <p className="text-muted-foreground font-light text-lg">
              Our platform acts as the brain of your operation—unifying data, simplifying deployments, and ensuring that your vision AI capabilities are always future-proof.
            </p>
            <div className="pt-8 flex flex-wrap justify-center gap-4">
              <div className="px-6 py-2 rounded-full border border-white/5 bg-white/5 text-[11px] font-mono tracking-widest text-white/40 uppercase">
                Containerized
              </div>
              <div className="px-6 py-2 rounded-full border border-white/5 bg-white/5 text-[11px] font-mono tracking-widest text-white/40 uppercase">
                Scalable
              </div>
              <div className="px-6 py-2 rounded-full border border-white/5 bg-white/5 text-[11px] font-mono tracking-widest text-white/40 uppercase">
                API-First
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
