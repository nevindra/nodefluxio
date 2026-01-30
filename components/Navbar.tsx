"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X, Zap } from "lucide-react";
import Link from "next/link";
import * as React from "react";

import { Button } from "@/components/ui/button";
import visionaireLogo from "@/public/nodeflux-primary-purple.png";
import Image from "next/image";
import MobileNavbar from "./navbar/MobileNavbar";

export default function NavigationBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [hoveredPath, setHoveredPath] = React.useState<string | null>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavLinks = [
    {
      title: "Products",
      items: [
        { title: "Lenz", href: "/lenz", desc: "Smart video monitoring & analytics" },
        { title: "VisionAIre", href: "/visionaire", desc: "Enterprise Computer Vision platform" },
        { title: "Athena", href: "/athena", desc: "Generative AI business assistant" },
      ],
    },
    {
      title: "Solutions",
      items: [
        { title: "Public Safety", href: "/solutions/massive-surveillance", desc: "National scale surveillance frameworks" },
        { title: "Smart Infrastructure", href: "/solutions/smart-city", desc: "Urban orchestration systems" },
        { title: "Logistics Audit", href: "/solutions/smart-retail", desc: "Industrial audit automation" },
        { title: "Building Security", href: "/solutions/smart-building", desc: "Deep perimeter defense" },
      ],
    },
    {
      title: "Resources",
      items: [
        { title: "Documentation", href: "/docs", desc: "Technical guides and API reference" },
        { title: "Blog", href: "/blog", desc: "Insights and updates from our team" },
      ],
    },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 flex justify-center py-4 ${
        isScrolled ? "px-4 md:px-6" : "px-0"
      }`}
    >
      <div
        className={`relative max-w-7xl w-full transition-all duration-500 overflow-visible px-6 flex items-center justify-between border ${
          isScrolled
            ? "h-14 bg-white/70 backdrop-blur-xl rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-black/5"
            : "h-16 bg-transparent border-transparent"
        }`}
      >
        {/* Logo Section */}
        <div className="flex items-center shrink-0">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative h-8 w-40 md:h-10 md:w-48 transition-all duration-500 group-hover:scale-[1.02]">
              <Image
                src={visionaireLogo}
                alt="Nodeflux"
                fill
                className="object-contain"
              />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation - Center */}
        <div className="hidden md:flex items-center justify-center absolute left-1/2 -translate-x-1/2 h-full">
          <div className="flex items-center space-x-1" onMouseLeave={() => setHoveredPath(null)}>
            {NavLinks.map((link) => (
              <div
                key={link.title}
                className="relative group h-full flex items-center"
                onMouseEnter={() => setHoveredPath(link.title)}
              >
                <div
                  className={`flex items-center gap-1.5 px-5 py-2 text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-300 z-10 cursor-pointer ${
                    hoveredPath === link.title ? "text-primary" : "text-foreground/40 hover:text-foreground/70"
                  }`}
                >
                  <span>{link.title}</span>
                  <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${hoveredPath === link.title ? "rotate-180" : ""}`} />
                </div>

                {/* Dropdown menu - Minimalist Glass */}
                <AnimatePresence>
                  {hoveredPath === link.title && (
                    <motion.div
                      initial={{ opacity: 0, y: 2, scale: 0.99 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 2, scale: 0.99 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full left-0 z-50"
                    >
                      <div className="mt-2 w-[420px] bg-white border border-black/5 p-4 grid grid-cols-1 gap-1 shadow-[0_10px_40px_rgba(0,0,0,0.08)] rounded-2xl">
                        {link.items.map((item) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            className="group/item flex items-center justify-between p-3 rounded-xl hover:bg-black/[0.02] transition-all duration-300"
                          >
                            <div className="flex flex-col">
                              <span className="text-xs font-bold text-foreground/80 group-hover/item:text-primary transition-colors uppercase tracking-wider">
                                {item.title}
                              </span>
                              <span className="text-[9px] text-black/40 font-medium mt-0.5">
                                {item.desc}
                              </span>
                            </div>
                            <div className="opacity-0 group-hover/item:opacity-100 transition-opacity">
                              <Zap className="w-3 h-3 text-primary/40" />
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button & Menu */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:block">
            <Button
              size="sm"
              className="font-bold px-6 h-9 rounded-xl transition-all duration-500 text-[9px] uppercase tracking-[0.2em] bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/10"
            >
              <Link href="/contact-us">Initialize Demo</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-xl transition-all ${
              mobileMenuOpen ? "bg-black/5 text-foreground" : "text-foreground/40 hover:text-foreground"
            }`}
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div key="close" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                  <X className="h-5 w-5" />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                  <Menu className="h-5 w-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Navbar Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <MobileNavbar onClose={() => setMobileMenuOpen(false)} />
        )}
      </AnimatePresence>
    </nav>
  );
}

