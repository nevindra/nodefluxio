"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

export default function TrustedBy() {
  return (
    <section className="py-20 bg-background border-b border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center space-x-3 mb-16"
          >
            <div className="w-8 h-px bg-white/20"></div>
            <h2 className="text-[10px] font-mono text-white/40 tracking-[0.3em] uppercase">
              Operational Partnerships
            </h2>
            <div className="w-8 h-px bg-white/20"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-12 gap-y-16 w-full max-w-5xl"
          >
            {companies.map((company, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="flex items-center justify-center grayscale brightness-200 opacity-30 hover:opacity-100 transition-all duration-500 transform hover:scale-105"
              >
                <div className="relative w-20 h-10 md:w-24 md:h-12">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
