"use client";

import visionaire from "@/public/nodeflux-primary-purple.png";
import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { footerNavigation } from "@/lib/navigation-data";

const navigation = footerNavigation;

const contactInfo = {
  email: "business@nodeflux.io",
  phone: "+62 21 2270 2164",
  address: {
    street: "Jl. Kemang Timur No.90C",
    city: "Jakarta Selatan, 12730",
    country: "Indonesia",
  },
};

export default function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border">
      {/* Main Footer Content */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block transition-opacity hover:opacity-80">
              <Image
                src={visionaire}
                alt="Nodeflux"
                width={140}
                height={35}
                className="h-auto"
              />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Building the foundational computational fabric for autonomous
              visual intelligence across diversified operational domains.
            </p>

            {/* Contact Info */}
            <div className="pt-4 space-y-3">
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                {contactInfo.email}
              </a>
              <a
                href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                {contactInfo.phone}
              </a>
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div className="leading-relaxed">
                  {contactInfo.address.street}<br />
                  {contactInfo.address.city}<br />
                  {contactInfo.address.country}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12 lg:justify-items-end">
              {/* Products */}
              <div className="space-y-4">
                <h3 className="text-xs font-semibold text-foreground uppercase tracking-wider">
                  Products
                </h3>
                <ul className="space-y-3">
                  {navigation.products.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solutions */}
              <div className="space-y-4">
                <h3 className="text-xs font-semibold text-foreground uppercase tracking-wider">
                  Solutions
                </h3>
                <ul className="space-y-3">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div className="space-y-4">
                <h3 className="text-xs font-semibold text-foreground uppercase tracking-wider">
                  Resources
                </h3>
                <ul className="space-y-3">
                  {navigation.resources.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Nodeflux Teknologi Indonesia. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/nodeflux/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
