"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

const useCases = [
  {
    title: "Massive Surveillance System",
    subtitle: "Public Safety & Security",
    description:
      "Monitor vast areas efficiently, detect anomalies in real-time, and respond swiftly to potential threats with advanced large-scale surveillance.",
    image: "/landing-page/command-center.png",
    href: "/solutions/massive-surveillance",
  },
  {
    title: "Smart City Solution",
    subtitle: "Urban Intelligence",
    description:
      "Optimize traffic flow, improve resource allocation, and enhance quality of life for citizens through data-driven urban management.",
    image: "/landing-page/smart-city.jpg",
    href: "/solutions/smart-city",
  },
  {
    title: "Integrated Building Surveillance",
    subtitle: "Facility Management",
    description:
      "Monitor access points, track occupancy, and ensure safety protocols through a single integrated security platform.",
    image: "/landing-page/smart-city.jpg",
    href: "/solutions/smart-building",
  },
  {
    title: "Retail Store Optimization",
    subtitle: "Business Analytics",
    description:
      "Gain insights into customer behavior, optimize store layouts, and enhance the shopping experience with cutting-edge retail analytics.",
    image: "/landing-page/smart-city.jpg",
    href: "/solutions/smart-retail",
  },
];

export default function UseCases() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollLeft = container.scrollLeft;
    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;

    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    // Calculate active index based on scroll position
    const cardWidth = container.firstElementChild?.clientWidth || 0;
    const gap = 24; // gap-6 = 24px
    const newIndex = Math.round(scrollLeft / (cardWidth + gap));
    setActiveIndex(Math.min(newIndex, useCases.length - 1));
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    container.addEventListener("scroll", updateScrollState);
    updateScrollState();

    return () => container.removeEventListener("scroll", updateScrollState);
  }, [updateScrollState]);

  const scrollToIndex = (index: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const cardWidth = container.firstElementChild?.clientWidth || 0;
    const gap = 24;
    container.scrollTo({
      left: index * (cardWidth + gap),
      behavior: "smooth",
    });
  };

  const scrollLeft = () => {
    if (activeIndex > 0) {
      scrollToIndex(activeIndex - 1);
    }
  };

  const scrollRight = () => {
    if (activeIndex < useCases.length - 1) {
      scrollToIndex(activeIndex + 1);
    }
  };

  return (
    <section className="py-24 md:py-32 bg-background border-t border-black/[0.03] overflow-hidden">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mb-12 md:mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center space-x-3 mb-8"
        >
          <div className="w-12 h-[2px] bg-primary"></div>
          <span className="text-xs font-medium tracking-[0.4em] text-primary uppercase">
            Market Applications
          </span>
        </motion.div>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight mb-6 leading-tight text-foreground uppercase"
            >
              Transforming industries with{" "}
              <br className="hidden md:block" />
              <span className="text-primary">intelligent vision.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base md:text-lg text-muted-foreground font-light leading-relaxed max-w-2xl"
            >
              Leveraging computer vision to solve complex operational challenges
              across diverse sectors.
            </motion.p>
          </div>

          {/* Navigation Arrows */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <button
              onClick={scrollLeft}
              disabled={!canScrollLeft}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${
                canScrollLeft
                  ? "border-foreground/20 text-foreground hover:bg-foreground hover:text-background"
                  : "border-foreground/10 text-foreground/20 cursor-not-allowed"
              }`}
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollRight}
              disabled={!canScrollRight}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${
                canScrollRight
                  ? "border-foreground/20 text-foreground hover:bg-foreground hover:text-background"
                  : "border-foreground/10 text-foreground/20 cursor-not-allowed"
              }`}
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Horizontal Scroll Container - Left aligned with max-w-7xl, right extends full */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 pl-4 md:pl-6 lg:pl-8 pr-[20vw]"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          marginLeft: "max(0px, calc((100vw - 1280px) / 2))",
        }}
      >
        {useCases.map((useCase, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="snap-start flex-shrink-0 w-[75vw] md:w-[55vw] lg:w-[45vw] xl:w-[40vw] max-w-[600px]"
          >
            <Link href={useCase.href} className="group block">
              {/* Card */}
              <div className="relative overflow-hidden rounded-2xl bg-black/[0.02] border border-black/[0.05] transition-all duration-500 group-hover:border-primary/20 group-hover:shadow-2xl group-hover:shadow-primary/5">
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={useCase.image}
                    alt={useCase.title}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  {/* Corner Brackets */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                  {/* Content Overlay with solid dark background */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/95 to-transparent pt-16 pb-6 px-6 md:pt-20 md:pb-8 md:px-8">
                    <div className="flex items-end justify-between gap-4">
                      <div className="flex-1">
                        <span className="text-[10px] font-mono text-primary uppercase tracking-[0.2em] mb-2 block">
                          {useCase.subtitle}
                        </span>
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-medium text-white tracking-tight mb-3">
                          {useCase.title}
                        </h3>
                        <p className="text-sm md:text-base text-white/80 font-light leading-relaxed max-w-lg">
                          {useCase.description}
                        </p>
                      </div>

                      {/* CTA Arrow */}
                      <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-500 group-hover:bg-primary group-hover:border-primary group-hover:scale-110">
                        <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-2 mt-8 md:mt-12">
        {useCases.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`transition-all duration-300 rounded-full ${
              index === activeIndex
                ? "w-8 h-2 bg-primary"
                : "w-2 h-2 bg-foreground/20 hover:bg-foreground/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
