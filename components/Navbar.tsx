"use client";

import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";

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
      title: "Solutions",
      items: [
        { title: "Public Safety", href: "/solutions/massive-surveillance", desc: "National scale surveillance frameworks" },
        { title: "Smart Infrastructure", href: "/solutions/smart-city", desc: "Urban orchestration systems" },
        { title: "Logistics Audit", href: "/solutions/smart-retail", desc: "Industrial audit automation" },
        { title: "Building Security", href: "/solutions/smart-building", desc: "Deep perimeter defense" },
      ],
    },
    {
      title: "Platform",
      items: [
        { title: "Dashboard", href: "/dashboard", desc: "Operational visualization command" },
        { title: "Analytics", href: "/analytics", desc: "Deep learning insight engine" },
        { title: "VisionAIre Node", href: "/platform", desc: "Edge computation core" },
      ],
    },
    {
      title: "Technology",
      href: "/technology"
    }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 flex justify-center py-4 ${isScrolled ? "pt-4" : "pt-6"
        }`}
    >
      <div
        className={`relative transition-all duration-500 overflow-visible px-6 border border-white/5 flex items-center justify-between ${isScrolled
          ? "w-[95%] lg:w-[85%] h-14 bg-background/60 backdrop-blur-2xl rounded-none shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
          : "w-full h-16 bg-transparent border-transparent"
          }`}
      >
        {/* Logo */}
        <div className="flex items-center shrink-0">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative h-8 w-40 md:h-12 md:w-56 transition-transform duration-500 group-hover:scale-105">
              <Image
                src={visionaireLogo}
                alt="Nodeflux"
                fill
                className="object-contain brightness-0 invert transition-opacity"
              />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center absolute left-1/2 -translate-x-1/2 h-full">
          <div className="flex items-center space-x-1" onMouseLeave={() => setHoveredPath(null)}>
            {NavLinks.map((link) => (
              <div
                key={link.title}
                className="relative group h-full flex items-center py-2"
                onMouseEnter={() => setHoveredPath(link.title)}
              >
                <div
                  className={`flex items-center space-x-1.5 px-4 py-1.5 rounded-none text-[11px] font-mono tracking-widest uppercase transition-colors duration-300 z-10 ${hoveredPath === link.title ? "text-white" : "text-white/50"
                    }`}
                >
                  {link.href ? (
                    <Link href={link.href}>{link.title}</Link>
                  ) : (
                    <span>{link.title}</span>
                  )}
                  {link.items && <ChevronDown className={`w-3 h-3 transition-transform duration-300 group-hover:rotate-180`} />}
                </div>

                {/* Hover Background Pill */}
                {hoveredPath === link.title && (
                  <motion.div
                    layoutId="nav-hover"
                    className="absolute inset-x-1 inset-y-2 bg-white/5 rounded-none -z-0"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}

                {/* Dropdown menu */}
                {link.items && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="w-[480px] bg-background/95 backdrop-blur-2xl border border-white/5 p-6 grid grid-cols-2 gap-4 shadow-2xl relative overflow-hidden rounded-none">
                      {/* Technical Detail */}
                      <div className="absolute top-0 right-0 p-2 opacity-10">
                        <div className="w-16 h-px bg-white" />
                      </div>

                      {link.items.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="group/item flex flex-col p-3 hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/5"
                        >
                          <span className="text-xs font-medium text-white/80 group-hover/item:text-primary transition-colors">
                            {item.title}
                          </span>
                          <span className="text-[10px] text-muted-foreground font-light mt-1">
                            {item.desc}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Action Button & Menu */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:block">
            <Button
              size="sm"
              className={`font-medium px-6 rounded-none transition-all duration-500 text-[10px] uppercase tracking-widest ${isScrolled
                ? "bg-primary text-white hover:bg-primary/90"
                : "bg-white text-black hover:bg-white/90"
                }`}
            >
              <Link href="/contact-us">Initialize Demo</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-none transition-colors ${mobileMenuOpen ? "bg-white/10 text-white" : "text-white/60 hover:text-white"
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
