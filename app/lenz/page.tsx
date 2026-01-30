"use client";

import { motion } from "framer-motion";
import { Activity, Database, Shield, Layout, Layers, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SingleHero } from "@/components/hero/SingleHero";

export default function Dashboard() {
	const features = [
		{
			title: "Unified Stream Orchestration",
			description: "A centralized command interface designed for the synchronization of heterogeneous sensor networks. Manage unbounded video feeds across distributed geographic domains.",
			icon: <Activity className="w-6 h-6" />,
			code: "STRM-MGR-01",
			capabilities: [
				"Dynamic feed ingestion and mapping",
				"Low-latency temporal synchronization",
				"Fault-tolerant stream failover protocols"
			]
		},
		{
			title: "Tactical Semantic Analysis",
			description: "Deployment of deep neural architectures to extract structured intelligence from unstructured visual streams.",
			icon: <Database className="w-6 h-6" />,
			code: "AI-PROC-99",
			capabilities: [
				"Real-time object classification and tracking",
				"Heuristic-based anomaly recognition",
				"End-to-end cryptographic stream integrity"
			]
		}
	];

	return (
		<main className="min-h-screen bg-background pb-32">
			{/* Subpage Hero Variant */}
			<SingleHero
				title={<>COMMAND <br /><span className="text-muted-foreground">INTERFACE.</span></>}
				description="The definitive operational environment for high-stakes visual intelligence. Integrating distributed AI nodes into a cohesive situational awareness platform."
				label="VisionAIre System Management"
				primaryCtaText="Initialize Portal"
				secondaryCtaText="System Logs"
				secondaryCtaHref="#metrics"
			/>

			{/* Structural Data Grid */}
			<section id="metrics" className="py-24 border-b border-white/5 bg-white/[0.01]">
				<div className="container mx-auto px-8 lg:px-12">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
						{[
							{ label: "Uptime", value: "99.999%", icon: <Activity className="w-4 h-4" /> },
							{ label: "Active Nodes", value: "842", icon: <Layers className="w-4 h-4" /> },
							{ label: "Processing Latency", value: "<15ms", icon: <Settings className="w-4 h-4" /> },
							{ label: "Daily Tasks", value: "2.4M", icon: <Layout className="w-4 h-4" /> }
						].map((item, i) => (
							<div key={i} className="bg-background p-8 flex flex-col space-y-4">
								<div className="text-white/20">{item.icon}</div>
								<div>
									<div className="text-[9px] font-mono text-white/30 uppercase tracking-[0.2em] mb-1">{item.label}</div>
									<div className="text-2xl font-light text-white tracking-tighter">{item.value}</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Capabilities Decomposition */}
			<section className="py-24 container mx-auto px-8 lg:px-12">
				<div className="grid grid-cols-1 gap-24">
					{features.map((feature, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8 }}
							className="flex flex-col lg:flex-row items-start gap-16"
						>
							<div className="w-full lg:w-1/3 space-y-8 sticky top-32">
								<div className="inline-block p-4 border border-white/5 bg-white/[0.02] text-white">
									{feature.icon}
								</div>
								<div className="space-y-4">
									<div className="text-[10px] font-mono text-white/20 tracking-widest uppercase">{feature.code}</div>
									<h2 className="text-3xl font-medium text-white tracking-tight">{feature.title}</h2>
									<p className="text-muted-foreground font-light leading-relaxed">
										{feature.description}
									</p>
								</div>
							</div>

							<div className="w-full lg:w-2/3">
								<div className="relative aspect-video bg-white/[0.02] border border-white/5 flex items-center justify-center overflow-hidden">
									<div className="absolute inset-0 bg-hero-pattern [background-size:30px_30px] opacity-[0.03]"></div>
									<div className="text-[10px] font-mono text-white/20 uppercase tracking-widest">Interface Stream: {feature.code}</div>
								</div>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
									{feature.capabilities.map((cap, i) => (
										<div key={i} className="flex items-start space-x-4">
											<div className="mt-1.5 w-1.5 h-1.5 bg-white/20"></div>
											<span className="text-sm text-muted-foreground font-light">{cap}</span>
										</div>
									))}
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</section>
		</main>
	);
}
