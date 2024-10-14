"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function LicenseCheckPage() {
	const [licenseKey, setLicenseKey] = useState("");
	const [showSpecs, setShowSpecs] = useState(false);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Here you would typically validate the license key
		// For now, we'll just show the specs
		setShowSpecs(true);
	};

	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-3xl font-bold mb-4 text-center">License Check</h1>
               <p className="text-center text-md mb-2">Input your appliance license key to check if it is valid.</p>
			<div className="max-w-md mx-auto">
				<form onSubmit={handleSubmit} className="space-y-4">
					<Input
						placeholder="Enter License Key"
						value={licenseKey}
						onChange={(e) => setLicenseKey(e.target.value)}
					/>
					<Button type="submit" className="w-full">
						Submit
					</Button>
				</form>

				{showSpecs && (
					<Card className="mt-8">
						<CardHeader>
							<CardTitle>Server Specifications</CardTitle>
						</CardHeader>
						<CardContent>
							<ul className="space-y-2">
								<li>
									<strong>CPU:</strong> Intel Xeon E5-2680 v4
								</li>
								<li>
									<strong>GPU:</strong> NVIDIA Tesla V100
								</li>
								<li>
									<strong>RAM:</strong> 128 GB DDR4
								</li>
								<li>
									<strong>Storage:</strong> 2 TB NVMe SSD
								</li>
							</ul>
						</CardContent>
					</Card>
				)}
			</div>
		</div>
	);
}
