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
import visionaireLogo from "@/public/nodeflux-logo-purple.png";
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
			href: "/streaming-compression",
			title: "Streaming Compression",
			description: "Streaming Compression",
		},
	];
	return (
		<nav className="bg-background sticky top-0 z-50 shadow-sm">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 items-center justify-between">
					<div className="flex items-center">
						<Link href="/" className="flex-shrink-0">
						{/* logo nodeflux lengkap */}
							<Image
								src={visionaireLogo}
								alt="Visionaire Logo"
								width={30}
								height={32}
							/>
						</Link>
					</div>
					<div className="hidden md:block">
						<div className="ml-10 flex items-baseline space-x-4">
							<NavigationMenu>
								<NavigationMenuList>
									<NavigationMenuItem>
										<NavigationMenuTrigger>Products</NavigationMenuTrigger>
										<NavigationMenuContent>
											<ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
												<li className="row-span-3">
													<NavigationMenuLink asChild>
														<a
															className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md hover:bg-primary hover:text-white"
															href="/products"
														>
															<div className="mb-2 mt-4 text-lg font-medium">
																Products Overview
															</div>
															<p className="text-sm leading-tight text-muted-foreground hover:text-black">
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
														className="hover:bg-primary"
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
													An AI-powered solution for massive surveillance
												</ListItem>
												<ListItem
													href="/retail-analytics"
													title="Retail Analytics"
												>
													An AI-powered solution for retail analytics
												</ListItem>
												<ListItem href="/smart-building" title="Smart Building">
													An AI-powered solution for massive surveillance
												</ListItem>
												<ListItem
													href="/smart-city"
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
			{mobileMenuOpen && (
				<MobileNavbar />
			)}
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
