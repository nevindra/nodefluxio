"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import visionaireLogo from "@/public/nodeflux-primary-purple.png";
import Image from "next/image";
import MobileNavbar from "./navbar/MobileNavbar";

export default function NavigationBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const NavLink = [
    {
      href: "/dashboard",
      title: "Dashboard",
      description: "Manage and visualize your data",
    },
    {
      href: "/analytics",
      title: "Analytics",
      description: "AI Analytics for your business",
    },
    {
      href: "/platform",
      title: "Platform",
      description: "VisionAIre Platform to manage the system",
    },
  ];
  return (
    <nav className="bg-background sticky top-0 z-50 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image
                src={visionaireLogo}
                alt="Visionaire Logo"
                width={160}
                height={100}
              />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-2 md:space-x-4">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-2 p-4 md:w-[400px] lg:w-[450px] lg:grid-cols-[.75fr_1fr]">
                        <li className="row-span-3">
                          <NavigationMenuLink
                            asChild
                            className="bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md hover:bg-primary hover:text-black"
                          >
                            <a
                              className="flex h-full w-full select-none flex-col justify-end rounded-md "
                              href="/products"
                            >
                              <div className="mb-2 mt-4 text-lg font-medium">
                                Products Overview
                              </div>
                              <p className="text-sm leading-tight">
                                Explore our full range of products and
                                solutions.
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                        {NavLink.map((item, index) => (
                          <ListItem
                            href={item.href}
                            key={item.href}
                            title={item.title}
                            className="bg-secondary hover:bg-black"
                          >
                            {item.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                        <ListItem
                          href="/solutions/massive-surveillance"
                          title="Massive Surveillance"
                        >
                          An AI-powered solution for real time surveillance
                        </ListItem>
                        <ListItem
                          href="/solutions/smart-retail"
                          title="Retail Analytics"
                        >
                          An AI-powered solution for retail analytics
                        </ListItem>
                        <ListItem
                          href="/solutions/smart-building"
                          title="Smart Building"
                        >
                          An AI-powered solution for massive surveillance
                        </ListItem>
                        <ListItem
                          href="/solutions/smart-city"
                          title="Smart City Solution"
                        >
                          An AI-powered solution for massive surveillance
                        </ListItem>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              <Button variant="default">
                <a href="/contact-us">Contact Us</a>
              </Button>
            </div>
          </div>
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>
      {mobileMenuOpen && <MobileNavbar />}
    </nav>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
