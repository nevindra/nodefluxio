"use client";
import { cn } from "@/lib/utils";
import visionaireSVG from "@/public/platform/visionaire.svg";
import { Cctv, Database, Webhook } from "lucide-react";
import Image from "next/image";
import React, { forwardRef, useRef } from "react";
import { AnimatedBeam } from "../magicui/animated-beam";

const Circle = forwardRef<
	HTMLDivElement,
	{ className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
	return (
		<div
			ref={ref}
			className={cn(
				"z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
				className,
			)}
		>
			{children}
		</div>
	);
});

Circle.displayName = "Circle";
export default function Stream() {
	const containerRef = useRef<HTMLDivElement>(null);
	const div1Ref = useRef<HTMLDivElement>(null);
	const div2Ref = useRef<HTMLDivElement>(null);
	const div3Ref = useRef<HTMLDivElement>(null);
	const div4Ref = useRef<HTMLDivElement>(null);
	const div5Ref = useRef<HTMLDivElement>(null);
	const div6Ref = useRef<HTMLDivElement>(null);
	const div7Ref = useRef<HTMLDivElement>(null);
	return (
		<div
			className="relative flex h-[400px] w-full items-center justify-center overflow-hidden p-10"
			ref={containerRef}
		>
			<div className="flex size-full flex-col items-stretch justify-between gap-10 max-w-4xl">
				<div className="flex flex-row items-center justify-between">
					<Circle ref={div1Ref} className="size-16">
						<Cctv className="w-8 h-8" color="#4C12A1" />
					</Circle>
					<Circle ref={div5Ref} className="size-16">
						<Webhook className="w-8 h-8" color="#4C12A1" />
					</Circle>
				</div>
				<div className="flex flex-row items-center justify-between">
					<Circle ref={div2Ref} className="size-16">
						<Image
							src="/platform/cam.png"
							alt="Body Worn"
							width={200}
							height={125}
						/>
					</Circle>
					<Circle ref={div4Ref} className="size-24">
						<Image
							src={visionaireSVG}
							alt="Visionaire Logo"
							width={200}
							height={125}
						/>
					</Circle>
					<Circle ref={div6Ref} className="size-16">
						<Database className="w-8 h-8" color="#4C12A1" />
					</Circle>
				</div>
				<div className="flex flex-row items-center justify-between">
					<Circle ref={div3Ref} className="size-16">
						<Image
							src="/platform/camera-drone.png"
							alt="Drone"
							width={200}
							height={125}
						/>
					</Circle>
					<Circle ref={div7Ref} className="size-16">
						<Image
							src="/platform/business.png"
							alt="Dashboard"
							width={200}
							height={125}
						/>
					</Circle>
				</div>
			</div>

			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div1Ref}
				toRef={div4Ref}
				curvature={-75}
				endYOffset={-10}
				duration={3}
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div2Ref}
				toRef={div4Ref}
				duration={3}
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div3Ref}
				toRef={div4Ref}
				curvature={75}
				endYOffset={10}
				duration={3}
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div5Ref}
				toRef={div4Ref}
				curvature={-75}
				endYOffset={-10}
				duration={3}
				reverse
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div6Ref}
				toRef={div4Ref}
				reverse
				duration={3}
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div7Ref}
				toRef={div4Ref}
				curvature={75}
				endYOffset={10}
				reverse
				duration={3}
			/>
		</div>
	);
}
