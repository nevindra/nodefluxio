import { ChevronDown } from "lucide-react";
import Link from "next/link";
import * as React from "react";

import { Button } from "@/components/ui/button";

export default function MobileNavbar() {
  const [mobileProductsOpen, setMobileProductsOpen] = React.useState(false);
  const [solutionOpen, setSolutionOpen] = React.useState(false);

  const solutions = [
    {
      title: "Real Time Surveillance",
      href: "/solutions/massive-surveillance",
    },
    { title: "Retail Analytics", href: "/solutions/retail-analytics" },
    { title: "Smart Building", href: "/solutions/smart-building" },
    { title: "Smart City", href: "/solutions/smart-city" },
  ];

  return (
    <div className="md:hidden shadow-lg rounded-b-lg">
      <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
        <div className="relative">
          <button
            onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
            className="flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
            type="button"
          >
            Products
            <ChevronDown
              className={`h-4 w-4 transition-transform ${mobileProductsOpen ? "rotate-180" : ""}`}
            />
          </button>
          {mobileProductsOpen && (
            <div className="mt-2 space-y-2 pl-4">
              <Link
                href="/dashboard"
                className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
              >
                Dashboard
              </Link>
              <Link
                href="/analytics"
                className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
              >
                Analytics
              </Link>
              <Link
                href="/platform"
                className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
              >
                Platform
              </Link>
            </div>
          )}
        </div>
        <div className="relative">
          <button
            onClick={() => setSolutionOpen(!solutionOpen)}
            className="flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
            type="button"
          >
            Solutions
            <ChevronDown
              className={`h-4 w-4 transition-transform ${mobileProductsOpen ? "rotate-180" : ""}`}
            />
          </button>
          {solutionOpen && (
            <div className="mt-2 space-y-2 pl-4">
              {solutions.map((solution) => (
                <Link
                  key={solution.title}
                  href={solution.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
                >
                  {solution.title}
                </Link>
              ))}
            </div>
          )}
        </div>
        <Button variant="default" className="w-full justify-start">
          <a href="/contact-us">Contact Us</a>
        </Button>
      </div>
    </div>
  );
}
