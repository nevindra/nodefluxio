"use client";

import { Button } from "../ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Consolutation() {
	return (
		<section className="relative w-full py-24 md:py-32 overflow-hidden bg-background">
			{/* Background Accents */}
			<div className="absolute inset-0 z-0 bg-hero-pattern [background-size:40px_40px] opacity-[0.03]"></div>
			<div className="absolute top-0 left-0 w-full h-px bg-white/5"></div>
			<div className="absolute bottom-0 left-0 w-full h-px bg-white/5"></div>

			<div className="container relative z-10 mx-auto px-8 lg:px-24 max-w-7xl">
				<div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
					<div className="max-w-2xl">
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8 }}
							className="flex items-center space-x-3 mb-8 text-white/40"
						>
							<span className="w-2 h-2 bg-white/40"></span>
							<span className="text-[10px] md:text-xs font-mono tracking-[0.3em] uppercase">
								Initial Engagement Cycle
							</span>
						</motion.div>

						<motion.h2
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8, delay: 0.1 }}
							className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-8 leading-[0.9]"
						>
							SEEKING <span className="text-muted-foreground">SPECIFIC <br className="hidden md:block" /> MISSION PARAMS?</span>
						</motion.h2>

						<motion.p
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className="text-white/50 text-lg font-light max-w-lg"
						>
							Our technical architects specialize in complex, sovereign-grade infrastructure deployments for nationwide operations.
						</motion.p>
					</div>

					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, delay: 0.3 }}
						className="flex flex-col sm:flex-row items-stretch gap-4"
					>
						<Button
							asChild
							size="lg"
							className="bg-white hover:bg-neutral-200 text-black rounded-none px-10 h-16 font-medium text-base transition-all duration-300"
						>
							<Link href="/contact-us" className="flex items-center group">
								Initiate Briefing
								<ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
							</Link>
						</Button>
						<div className="hidden lg:flex flex-col justify-center items-end px-6 border-l border-white/10">
							<span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">Protocol: CTR-72</span>
							<span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">Sovereign Cloud // On-Prem</span>
						</div>
					</motion.div>
				</div>
			</div>

			{/* Aesthetic Technical Border Lines */}
			<div className="absolute top-0 right-1/3 w-px h-12 bg-white/10 hidden lg:block"></div>
			<div className="absolute bottom-0 right-1/4 w-px h-24 bg-white/10 hidden lg:block"></div>
		</section>
	);
}