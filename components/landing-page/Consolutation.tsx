"use client";

import { Button } from "../ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react";
import { trackDemoCtaClicked } from "@/lib/analytics";

export default function Consolutation() {
	return (
		<section className="relative w-full py-16 md:py-24 overflow-hidden bg-muted/30">
			<div className="container relative z-10 mx-auto px-6 lg:px-8 max-w-[1280px]">
				<div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12">
					<div className="max-w-2xl">
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8 }}
							className="flex items-center space-x-3 mb-6 text-muted-foreground"
						>
							<span className="w-2 h-2 bg-primary rounded-full"></span>
							<span className="text-xs font-semibold tracking-wider uppercase">
								Get in Touch
							</span>
						</motion.div>

						<motion.h2
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8, delay: 0.1 }}
							className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground mb-6"
						>
							Ready to Get Started?{" "}
							<span className="text-muted-foreground">
								Let&apos;s Talk.
							</span>
						</motion.h2>

						<motion.p
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className="text-muted-foreground text-base md:text-lg max-w-xl leading-relaxed"
						>
							Our technical architects specialize in complex, sovereign-grade infrastructure deployments for nationwide operations.
						</motion.p>
					</div>

					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, delay: 0.3 }}
						className="flex flex-col sm:flex-row items-stretch gap-6"
					>
						<Button
							asChild
							size="lg"
							className="px-8 font-semibold h-12"
						>
							<Link href="/contact-us" className="flex items-center group" onClick={() => trackDemoCtaClicked("consultation", "Request Consultation")}>
								Request Consultation
								<ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
							</Link>
						</Button>
						<div className="hidden lg:flex flex-col justify-center items-start pl-6 border-l border-border">
							<span className="text-sm text-muted-foreground">Sovereign Cloud</span>
							<span className="text-sm text-muted-foreground">On-Premise Available</span>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
