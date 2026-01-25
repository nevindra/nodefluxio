"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
	return (
		<main className="relative min-h-screen bg-background flex flex-col items-center justify-center overflow-hidden">
			{/* Subtle background texture */}
			<div
				className="absolute inset-0 opacity-[0.02] pointer-events-none"
				style={{
					backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
					backgroundSize: '48px 48px'
				}}
			/>

			<div className="relative z-10 flex flex-col items-center">
				{/* Large subtle background number */}
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] select-none pointer-events-none">
					<span className="text-[15rem] md:text-[25rem] font-medium leading-none tracking-tighter text-white/[0.03]">
						404
					</span>
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
					className="text-center px-8"
				>
					<span className="text-[10px] font-mono tracking-[0.4em] text-white/30 uppercase mb-8 block">
						Infrastructure Notice
					</span>
					<h1 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-6">
						PAGE <span className="text-muted-foreground">UNDEFINED.</span>
					</h1>
					<p className="text-muted-foreground font-light text-lg max-w-md mx-auto leading-relaxed mb-12">
						The requested intelligence vector is currently unavailable or has been relocated within our network.
					</p>

					<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
						<Button
							asChild
							className="bg-white hover:bg-white/90 text-black font-medium h-12 px-10 rounded-none transition-all duration-300"
						>
							<Link href="/">Back to Home</Link>
						</Button>
						<Button
							variant="outline"
							onClick={() => window.history.back()}
							className="border-white/10 text-white hover:bg-white/5 h-12 px-10 rounded-none transition-all duration-300"
						>
							Previous Page
						</Button>
					</div>
				</motion.div>
			</div>

			{/* Minimalistic Border Accents */}
			<div className="absolute top-12 left-12 w-8 h-8 border-t border-l border-white/5"></div>
			<div className="absolute bottom-12 right-12 w-8 h-8 border-b border-r border-white/5"></div>
		</main>
	);
}
