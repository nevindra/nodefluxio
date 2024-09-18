import { Button } from "@/components/ui/button";
import visionaire from "@/public/nodeflux-primary-purple.png";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="bg-background border-t">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="py-12 md:flex md:items-center md:justify-between">
					<div className="space-y-8 md:w-1/3">
						<div>
							<Link href="/" className="flex-shrink-0">
								<span className="text-xl font-bold text-primary">
									<Image
										src={visionaire}
										alt="VisionAIre"
										width={200}
										height={50}
										className="h-auto md:w-full"
									/>
								</span>
							</Link>
							<p className="mt-2 text-base text-muted-foreground">
								Empowering your business with cutting-edge solutions.
							</p>
						</div>
						<div className="flex space-x-6">
							<a
								href="#"
								className="text-muted-foreground hover:text-foreground"
							>
								<span className="sr-only">Facebook</span>
								<Facebook className="h-6 w-6" />
							</a>
							<a
								href="#"
								className="text-muted-foreground hover:text-foreground"
							>
								<span className="sr-only">Twitter</span>
								<Twitter className="h-6 w-6" />
							</a>
							<a
								href="#"
								className="text-muted-foreground hover:text-foreground"
							>
								<span className="sr-only">Instagram</span>
								<Instagram className="h-6 w-6" />
							</a>
							<a
								href="#"
								className="text-muted-foreground hover:text-foreground"
							>
								<span className="sr-only">LinkedIn</span>
								<Linkedin className="h-6 w-6" />
							</a>
						</div>
					</div>
					<div className="mt-12 md:mt-0 md:w-2/3">
						<div className="grid grid-cols-2 gap-8">
							<div>
								<h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">
									Products
								</h3>
								<ul className="mt-4 space-y-4">
									<li>
										<Link
											href="/dashboard"
											className="text-base text-muted-foreground hover:text-foreground"
										>
											Dashboard
										</Link>
									</li>
									<li>
										<Link
											href="/analytics"
											className="text-base text-muted-foreground hover:text-foreground"
										>
											Analytics
										</Link>
									</li>
									<li>
										<Link
											href="/hardware"
											className="text-base text-muted-foreground hover:text-foreground"
										>
											Platform
										</Link>
									</li>
								</ul>
							</div>
							<div>
								<h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">
									Company
								</h3>
								<ul className="mt-4 space-y-4">
									<li>
										<Link
											href="/solutions"
											className="text-base text-muted-foreground hover:text-foreground"
										>
											Solutions
										</Link>
									</li>
									<li>
										<Link
											href="/about"
											className="text-base text-muted-foreground hover:text-foreground"
										>
											About
										</Link>
									</li>
									<li>
										<Link
											href="/careers"
											className="text-base text-muted-foreground hover:text-foreground"
										>
											Careers
										</Link>
									</li>
									<li>
										<Button variant="default">
											<Link href="/contact-us">Contact Us</Link>
										</Button>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="border-t border-muted-foreground/10 py-8">
					<p className="text-base text-muted-foreground text-center text-primary">
						&copy; 2024 Nodeflux Teknology Indonesia. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
