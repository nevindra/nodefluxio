"use client";

import { motion } from "framer-motion";
import { CaretDown, X } from "@phosphor-icons/react";
import Link from "next/link";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/navigation-data";

interface MobileNavbarProps {
  onClose: () => void;
}

export default function MobileNavbar({ onClose }: MobileNavbarProps) {
  const [expandedGroups, setExpandedGroups] = React.useState<Record<string, boolean>>({});

  const toggleGroup = (title: string) => {
    setExpandedGroups(prev => ({ ...prev, [title]: !prev[title] }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    },
    exit: {
      opacity: 0,
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="md:hidden fixed inset-0 z-[60] bg-background/95 backdrop-blur-2xl flex flex-col p-8 pt-24"
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-3 text-muted-foreground hover:text-foreground transition-colors z-[70]"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-5">
        <div className="absolute top-[20%] left-[10%] text-[8px] font-mono whitespace-pre italic">
          {"0xFE_NODE_INGESTION_READY\nSTATUS: ACTIVE\nCOORD: -6.2088 / 106.8456"}
        </div>
      </div>

      <div className="flex-1 space-y-10 overflow-y-auto">
        {navLinks.map((group) => (
          <motion.div key={group.title} variants={itemVariants} className="space-y-4">
            {group.items && (
              <>
                <button
                  onClick={() => toggleGroup(group.title)}
                  className="flex w-full items-center justify-between text-[10px] font-mono tracking-[0.3em] text-primary uppercase"
                >
                  <span>{group.title}</span>
                  <CaretDown className={`w-3 h-3 transition-transform duration-300 ${expandedGroups[group.title] ? "rotate-180" : ""}`} />
                </button>

                <div className="space-y-4 pl-2">
                  {(expandedGroups[group.title] || true) && (
                    <div className="flex flex-col space-y-4">
                      {group.items.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          onClick={onClose}
                          className="block text-3xl font-light tracking-tight text-foreground/90 hover:text-primary transition-colors"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </>
            )}

          </motion.div>
        ))}
      </div>

      <motion.div variants={itemVariants} className="pt-8 border-t border-border space-y-8">
        <div className="flex flex-col gap-4">
          <p className="text-[10px] font-mono text-muted-foreground tracking-widest uppercase">System Initialization</p>
          <Button
            size="lg"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg h-14 text-sm uppercase tracking-widest"
            onClick={onClose}
          >
            <Link href="/contact-us" className="w-full h-full flex items-center justify-center">Request Demo</Link>
          </Button>
        </div>

        <div className="flex justify-between items-center text-muted-foreground">
          <div className="flex space-x-4">
            {['IN', 'TW', 'FB'].map(sm => (
              <span key={sm} className="text-[10px] font-mono cursor-pointer hover:text-primary transition-colors">{sm}</span>
            ))}
          </div>
          <span className="text-[8px] font-mono uppercase tracking-[0.2em]">Nodeflux_v4.3</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
