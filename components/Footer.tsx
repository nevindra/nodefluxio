"use client";

import visionaire from "@/public/nodeflux-primary-purple.png";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-black/5 py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
          {/* Brand & Mission */}
          <div className="md:col-span-4 space-y-8">
            <Link href="/" className="inline-block transition-opacity opacity-80 hover:opacity-100">
              <Image
                src={visionaire}
                alt="Nodeflux"
                width={160}
                height={40}
                className="h-auto"
              />
            </Link>
            <p className="text-sm text-muted-foreground font-light leading-relaxed max-w-xs">
              Building the foundational computational fabric for autonomous
              visual intelligence across diversified operational domains.
            </p>
            <div className="pt-4 flex space-x-4 opacity-20">
              <div className="w-1 h-1 bg-black"></div>
              <div className="w-1 h-1 bg-black"></div>
              <div className="w-1 h-1 bg-black"></div>
            </div>
          </div>

          {/* Navigation Grid */}
          <div className="md:col-span-8 flex flex-col md:flex-row md:justify-end gap-16 lg:gap-24">
            <div className="space-y-6">
              <h3 className="text-[10px] font-mono tracking-[0.2em] text-foreground/40 uppercase">
                Platform
              </h3>
              <ul className="space-y-4">
                {["Dashboard", "Analytics", "VisionAIre Node"].map((item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase().replace(" ", "-")}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 font-light"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-[10px] font-mono tracking-[0.2em] text-foreground/40 uppercase">
                Solutions
              </h3>
              <ul className="space-y-4">
                {["Public Safety", "Smart Infrastructure", "Logistics Audit", "Site Security"].map((item) => (
                  <li key={item}>
                    <Link
                      href={`/solutions/${item.toLowerCase().replace(" ", "-")}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 font-light"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-[10px] font-mono tracking-[0.2em] text-foreground/40 uppercase">
                Architecture
              </h3>
              <ul className="space-y-4">
                {["Specifications", "Security Protocol", "Edge Deployment"].map((item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase().replace(" ", "-")}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 font-light"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-6">
            <span className="text-[10px] font-mono text-foreground/20 tracking-widest uppercase">
              NODEFLUX TECHNOLOGI INDONESIA © 2026
            </span>
            <span className="w-1 h-1 rounded-full bg-black/10 hidden md:inline-block"></span>
            <Link href="/privacy" className="text-[10px] font-mono text-foreground/20 hover:text-primary transition-colors uppercase tracking-widest">
              Privacy Protocol
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <div className="text-[9px] font-mono text-foreground/20 flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-black/10 animate-pulse"></span>
              <span className="uppercase tracking-[0.2em]">Core Systems Nominal</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
