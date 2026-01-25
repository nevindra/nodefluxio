"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

const useCases = [
  {
    title: "Massive Surveillance System",
    description:
      "Enhance public safety and security with our advanced large-scale surveillance solutions. Monitor vast areas efficiently, detect anomalies in real-time, and respond swiftly to potential threats.",
    image: "/landing-page/command-center.png",
    href: "/solutions/massive-surveillance",
    id: "01",
  },
  {
    title: "Smart City Solution",
    description:
      "Revolutionize urban living with our intelligent city management systems. Optimize traffic flow, improve resource allocation, and enhance overall quality of life for citizens through data-driven insights.",
    image: "/landing-page/smart-city.jpg",
    href: "/solutions/smart-city",
    id: "02",
  },
  {
    title: "Integrated Building Surveillance",
    description:
      "Secure your premises with our comprehensive building surveillance solutions. Monitor access points, track occupancy, and ensure safety protocols are followed, all through a single integrated platform.",
    image: "/landing-page/smart-city.jpg",
    href: "/solutions/smart-building",
    id: "03",
  },
  {
    title: "Retail Store Optimization",
    description:
      "Elevate your retail operations with our cutting-edge analytics. Gain valuable insights into customer behavior, optimize store layouts, and enhance the shopping experience while improving operational efficiency.",
    image: "/landing-page/smart-city.jpg",
    href: "/solutions/smart-retail",
    id: "04",
  },
];

export default function UseCases() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 mb-16">
        <div className="flex items-center gap-4 mb-8">
          <span className="text-[10px] font-mono tracking-[0.3em] text-white/40 uppercase">Our Solutions</span>
          <div className="h-px w-32 bg-white/10" />
        </div>

        <h2 className="text-5xl md:text-6xl font-light tracking-tight text-white mb-20 max-w-4xl leading-[1.1]">
          Transforming industries with intelligent vision.
        </h2>
      </div>

      <div className="relative">
        {/* Progress & Navigation Controls - Top Right relative to scroll area */}
        <div className="container mx-auto px-4 flex justify-between items-end mb-12">
          <div className="flex gap-4">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <div className="flex flex-col items-end">
              <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.2em] mb-1">Status</span>
              <span className="text-[10px] font-mono text-primary font-bold tracking-widest">AWAITING_COMMAND</span>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="flex flex-col items-end">
              <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.2em] mb-1">Index</span>
              <span className="text-[10px] font-mono text-white/60 tracking-widest">01 — 04</span>
            </div>
          </div>
        </div>

        {/* Horizontal Scroll Area - wrapped in container for alignment */}
        <div className="container mx-auto px-4">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-8 pb-24 -mr-4 pr-4 sm:-mr-[calc((100vw-640px)/2+1rem)] sm:pr-[calc((100vw-640px)/2+1rem)] md:-mr-[calc((100vw-768px)/2+1rem)] md:pr-[calc((100vw-768px)/2+1rem)] lg:-mr-[calc((100vw-1024px)/2+1rem)] lg:pr-[calc((100vw-1024px)/2+1rem)] xl:-mr-[calc((100vw-1280px)/2+1rem)] xl:pr-[calc((100vw-1280px)/2+1rem)] 2xl:-mr-[calc((100vw-1536px)/2+1rem)] 2xl:pr-[calc((100vw-1536px)/2+1rem)]"
          >
            {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="min-w-[320px] md:min-w-[450px] lg:min-w-[550px] snap-start group/card"
            >
              <Link href={useCase.href} className="block">
              <div className="mb-12">
                <h3 className="text-2xl font-medium text-white mb-4 group-hover/card:text-primary transition-colors duration-500">
                  {useCase.title}
                </h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed max-w-sm line-clamp-2 min-h-[3rem]">
                  {useCase.description}
                </p>
              </div>

              <div className="relative aspect-[16/11] rounded-[2px] overflow-hidden border border-white/5 bg-white/5 group/img shadow-2xl shadow-black/50">
                <img
                  src={useCase.image}
                  alt={useCase.title}
                  className="w-full h-full object-cover opacity-60 group-hover/img:opacity-100 transition-all duration-1000 grayscale group-hover/img:grayscale-0 scale-110 group-hover/img:scale-100"
                />

                {/* Tactical AI Overlays */}
                <div className="absolute inset-0 p-8 pointer-events-none opacity-40 group-hover/img:opacity-100 transition-all duration-700">
                  <div className="w-full h-full border border-white/5 relative">
                    {/* Corner Brackets */}
                    <div className="absolute top-0 left-0 border-l border-t border-white/40 w-8 h-8" />
                    <div className="absolute top-0 right-0 border-r border-t border-white/40 w-8 h-8" />
                    <div className="absolute bottom-0 left-0 border-l border-b border-white/40 w-8 h-8" />
                    <div className="absolute bottom-0 right-0 border-r border-b border-white/40 w-8 h-8" />

                    {/* Scanning Line Effect */}
                    <motion.div
                      animate={{ top: ["0%", "100%", "0%"] }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      className="absolute left-0 right-0 h-px bg-primary/20 shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                    />

                    <div className="absolute top-6 left-6 font-mono text-[8px] text-white/40 space-y-2 uppercase tracking-widest">
                      <div className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-primary" />
                        <span>System_Sync: Active</span>
                      </div>
                      <div>Stream_ID: NF_{useCase.id}</div>
                    </div>

                    <div className="absolute bottom-6 right-6 font-mono text-[8px] text-white/30 text-right tracking-[0.2em]">
                      {useCase.id} // SEC_TYPE_A
                    </div>
                  </div>
                </div>

                {/* Overlay Mask */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-transparent opacity-80 group-hover/img:opacity-0 transition-opacity duration-700" />
              </div>
              </Link>
            </motion.div>
          ))}

            {/* Spacer to allow scrolling past the last item */}
            <div className="min-w-[10vw] sm:min-w-[20vw] flex-shrink-0" />
          </div>
        </div>

        {/* Progress Bar (at the bottom of the section) */}
        <div className="container mx-auto px-4 mt-12 pb-12">
          <div className="w-full h-[1px] bg-white/5 relative">
            <motion.div
              className="absolute top-0 left-0 h-full bg-primary/40"
              style={{ width: "25%" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

