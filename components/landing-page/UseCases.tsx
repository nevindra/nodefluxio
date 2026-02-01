"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const useCases = [
  {
    title: "Massive Surveillance System",
    description:
      "Enhance public safety and security with our advanced large-scale surveillance solutions. Monitor vast areas efficiently, detect anomalies in real-time, and respond swiftly to potential threats.",
    image: "/landing-page/command-center.png",
    href: "/solutions/massive-surveillance",
  },
  {
    title: "Smart City Solution",
    description:
      "Revolutionize urban living with our intelligent city management systems. Optimize traffic flow, improve resource allocation, and enhance overall quality of life for citizens through data-driven insights.",
    image: "/landing-page/smart-city.jpg",
    href: "/solutions/smart-city",
  },
  {
    title: "Integrated Building Surveillance",
    description:
      "Secure your premises with our comprehensive building surveillance solutions. Monitor access points, track occupancy, and ensure safety protocols are followed, all through a single integrated platform.",
    image: "/landing-page/smart-city.jpg",
    href: "/solutions/smart-building",
  },
  {
    title: "Retail Store Optimization",
    description:
      "Elevate your retail operations with our cutting-edge analytics. Gain valuable insights into customer behavior, optimize store layouts, and enhance the shopping experience while improving operational efficiency.",
    image: "/landing-page/smart-city.jpg",
    href: "/solutions/smart-retail",
  },
];

export default function UseCases() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-24 md:py-32 bg-background border-t border-black/[0.03] font-futura">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-7xl mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center space-x-3 mb-8"
          >
            <div className="w-12 h-[2px] bg-primary"></div>
            <span className="text-xs font-bold tracking-[0.4em] text-primary uppercase">Market Applications</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold tracking-[0.05em] mb-6 leading-tight text-foreground uppercase"
          >
            Transforming industries with <br className="hidden md:block" />
            <span className="text-primary">intelligent vision.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-foreground/80 font-medium leading-relaxed max-w-4xl"
          >
            Leveraging computer vision to solve complex operational challenges across diverse sectors,
            from security to urban infrastructure and retail intelligence.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* Tabs Navigation - Scalable Sidebar */}
          <div className="w-full lg:w-[400px] flex flex-col border-l border-black/[0.08]">
            {useCases.map((useCase, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`text-left py-6 px-8 relative transition-all duration-300 group rounded-r-lg
                  ${activeTab === index
                    ? "text-primary bg-primary/[0.03]"
                    : "text-foreground hover:text-primary hover:bg-black/[0.02]"
                  }`}
              >
                {/* Minimalist Active Indicator */}
                <div className={`absolute left-0 top-2 bottom-2 w-[3px] bg-primary transition-transform duration-500 origin-top rounded-full
                  ${activeTab === index ? "scale-y-100" : "scale-y-0"}
                `} />

                <span className="text-xs md:text-sm font-bold uppercase tracking-[0.2em]">
                  {useCase.title}
                </span>

                {activeTab === index && (
                  <motion.div
                    layoutId="active-indicator"
                    className="absolute right-6 top-1/2 -translate-y-1/2"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_12px_rgba(var(--primary),0.6)]" />
                  </motion.div>
                )}
              </button>
            ))}
          </div>

          {/* Display Area */}
          <div className="flex-1 min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col h-full"
              >
                <div className="mb-12">
                  <p className="text-base md:text-lg text-foreground font-medium leading-relaxed">
                    {useCases[activeTab].description}
                  </p>
                </div>

                {/* Main Visual */}
                <div className="relative aspect-[21/9] lg:aspect-[21/9] rounded-xl overflow-hidden bg-black/[0.05] border border-black/[0.1] group/img mb-12 shadow-xl w-full">
                  <img
                    src={useCases[activeTab].image}
                    alt={useCases[activeTab].title}
                    className="w-full h-full object-cover grayscale opacity-50 group-hover/img:opacity-100 group-hover/img:grayscale-0 transition-all duration-1000 scale-105 group-hover/img:scale-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-transparent opacity-60" />

                  {/* Decorative Corner Brackets (Palantir/NOC vibe) */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-white/30 rounded-tl-lg" />
                  <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-white/30 rounded-tr-lg" />
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-white/30 rounded-bl-lg" />
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-white/30 rounded-br-lg" />
                </div>

                <Link
                  href={useCases[activeTab].href}
                  className="inline-flex items-center gap-6 group/link w-fit"
                >
                  <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-primary group-hover/link:text-foreground transition-colors">
                    Access Technical Specifications
                  </span>
                  <div className="w-12 h-12 rounded-full border-2 border-primary/20 flex items-center justify-center group-hover/link:bg-primary group-hover/link:border-primary transition-all duration-500 group-hover/link:shadow-[0_0_15px_rgba(var(--primary),0.3)]">
                    <ArrowUpRight className="w-6 h-6 text-primary group-hover/link:text-white transition-colors" />
                  </div>
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

