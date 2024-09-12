import { ChevronDown } from "lucide-react";
import Link from "next/link";
import * as React from "react";

import { Button } from "@/components/ui/button";

export default function MobileNavbar() {
	const [mobileProductsOpen, setMobileProductsOpen] = React.useState(false);
	const [analyticsOpen, setAnalyticsOpen] = React.useState(false);
    const analytics = [
        {href : "/analytics/face", title: "Face Analytics"},
        {href : "/analytics/people", title: "People Oriented Analytics"},
        {href : "/analytics/vehicle", title: "Vehicle Oriented Analytics"},
        {href : "/analytics/environment", title: "Environment Oriented Analytics"},
        {href : "/analytics/people", title: "Human Behavior Analytics"},
        {href : "/analytics/people", title: "Crowd Anomaly Analytics"},
    ]
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
							<div>
								<button
									onClick={() => setAnalyticsOpen(!analyticsOpen)}
									className="flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
                                    type="button"
								>
									Analytics
									<ChevronDown
										className={`h-4 w-4 transition-transform ${analyticsOpen ? "rotate-180" : ""}`}
									/>
								</button>
								{analyticsOpen && (
									<div className="pl-4 space-y-2 mt-2">
										{analytics.map((item, index) => (
											<Link
												href={item.href}
												key={item.href}
												className="block rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
											>
												{item.title}
											</Link>
										))}
									</div>
								)}
							</div>
							<Link
								href="/hardware"
								className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
							>
								Hardware
							</Link>
							<Link
								href="/streaming-compression"
								className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
							>
								Streaming Compression
							</Link>
						</div>
					)}
				</div>
				<Link
					href="/solutions"
					className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
				>
					Solutions
				</Link>
				<Button variant="default" className="w-full justify-start">
					<a href="/contact-us">Contact Us</a>
				</Button>
			</div>
		</div>
	);
}
