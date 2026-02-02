"use client";

import { LenzHero } from "@/components/lenz/LenzHero";
import { DashboardShowcase } from "@/components/lenz/DashboardShowcase";
import { FeaturesHolo } from "@/components/lenz/FeaturesHolo";
import { TrendUp } from "@phosphor-icons/react";

export default function LenzPage() {
	return (
		<main className="min-h-screen bg-background text-foreground selection:bg-primary/30 overflow-x-hidden">
			{/* 1st Section: Hero with Dashboard Image */}
			<LenzHero />

			{/* 2nd Section: Dashboard Capabilities with Side-by-Side Layout */}
			<DashboardShowcase />

			{/* 3rd Section: Platform Features & Enterprise CTA */}
			<FeaturesHolo />
		</main>
	);
}
