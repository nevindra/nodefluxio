"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./landing-page.module.css";

const companies = [
  { name: "BIN", logo: "/landing-page/logos/bin.png" },
  { name: "Divtik", logo: "/landing-page/logos/divtik.png" },
  { name: "Brimob", logo: "/landing-page/logos/brimob.png" },
  { name: "Polri", logo: "/landing-page/logos/polri.png" },
  { name: "Mabes", logo: "/landing-page/logos/mabes.png" },
  { name: "BNPT", logo: "/landing-page/logos/bnpt.png" },
  { name: "Baintelkam", logo: "/landing-page/logos/baintelkam.png" },
  { name: "Imigrasi", logo: "/landing-page/logos/imigrasi.png" },
  { name: "Beacukai", logo: "/landing-page/logos/beacukai.png" },
  { name: "jsc", logo: "/landing-page/logos/jsc.jpg" },
  { name: "Jabar", logo: "/landing-page/logos/diskom-jabar.png" },
  { name: "Jatim", logo: "/landing-page/logos/kominfo-jatim.png" },
];

export default function TrustedBy() {
  // Duplicate companies for seamless loop (Total 2 sets for -50% animation)
  const scrollItems = [...companies, ...companies];

  return (
    <section className="py-16 md:py-24 bg-background border-b border-black/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-10 md:mb-16">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center space-x-3"
          >
            <div className="w-8 h-px bg-black/10"></div>
            <h2 className="text-[10px] font-mono text-foreground/40 tracking-[0.4em] uppercase">
              Operational Partnerships
            </h2>
            <div className="w-8 h-px bg-black/10"></div>
          </motion.div>
        </div>
      </div>

      <div className="relative w-full">
        {/* Gradients for smooth fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex w-fit pointer-events-none">
          <div
            className={`${styles.animateScroll} flex items-center space-x-12 md:space-x-20 px-4`}
          >
            {scrollItems.map((company, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 flex items-center justify-center grayscale opacity-15 hover:opacity-100 transition-all duration-500 pointer-events-auto select-none"
                onContextMenu={(e) => e.preventDefault()}
              >
                <div className="relative w-20 h-10 md:w-28 md:h-14">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    fill
                    sizes="(max-width: 768px) 80px, 112px"
                    className="object-contain pointer-events-none"
                    draggable={false}
                    onContextMenu={(e) => e.preventDefault()}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
