"use client";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import { useState } from "react";
import BoxReveal from "./magicui/box-reveal";

const steps = [
	{
		number: 1,
		title: "Requirements Analysis",
		description:
			"We begin by thoroughly examining your security needs and existing infrastructure. Our experts will determine which of our AI Analytics SKUs best address your surveillance objectives.",
	},
	{
		number: 2,
		title: "System Evaluation",
		description:
			"Our team assesses your current security systems to ensure compatibility with our AI Analytics SKUs and identify any necessary adjustments.",
	},
	{
		number: 3,
		title: "Integration",
		description:
			"We seamlessly integrate our AI Analytics into your surveillance business process, conducting thorough testing to ensure optimal performance and accuracy.",
	},
	{
		number: 4,
		title: "Deployment and Monitoring",
		description:
			"We activate the AI-enhanced surveillance system, providing comprehensive training, ongoing support, and maintenance to ensure continual security optimization.",
	},
];
interface BusinessProcessProps {
	onScheduleConsultation?: () => void;
}

export default function BusinessProcess({
	onScheduleConsultation,
}: BusinessProcessProps) {
	const [currentStep, setCurrentStep] = useState(0);
	const [revealedSteps, setRevealedSteps] = useState<number[]>([0]);

	const handleNext = () => {
		if (currentStep < steps.length - 1) {
			const nextStep = currentStep + 1;
			setCurrentStep(nextStep);
			setRevealedSteps([...revealedSteps, nextStep]);
		}
	};

	return (
		<div className="mx-auto w-[85%] p-6 bg-white rounded-lg shadow-lg my-4">
			<h2 className="text-2xl font-bold mb-6 text-center">
				Our AI Consultation Process
			</h2>
			<div className="mb-8">
				{steps.map((step, index) => (
					<div key={step.number} className="flex mb-4">
						<div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
							<span
								className={`text-lg font-semibold ${index <= currentStep ? "bg-primary text-white" : "bg-gray-200 text-gray-600"} rounded-full w-8 h-8 flex items-center justify-center`}
							>
								{step.number}
							</span>
						</div>
						<div className="flex-grow">
							<h3
								className={`text-xl font-semibold mb-2 ${index <= currentStep ? "text-primary" : "text-gray-600"}`}
							>
								{step.title}
							</h3>
							{revealedSteps.includes(index) && (
								<BoxReveal>
									<p
										className={`text-sm ${index <= currentStep ? "text-gray-800" : "text-gray-500"}`}
									>
										{step.description}
									</p>
								</BoxReveal>
							)}
						</div>
					</div>
				))}
			</div>
			<div className="flex justify-between items-center">
				<Button
					onClick={handleNext}
					disabled={currentStep === steps.length - 1}
					className="bg-primary text-white font-bold py-2 px-4 rounded"
				>
					{currentStep === steps.length - 1 ? "Completed" : "Next"}
					<ChevronRightIcon className="ml-2 h-4 w-4" />
				</Button>
				{currentStep === steps.length - 1 && (
					<Button
						className="bg-secondaary text-primary font-bold py-2 px-4 rounded"
						onClick={onScheduleConsultation}
					>
						Schedule your consultation
					</Button>
				)}
			</div>
		</div>
	);
}
