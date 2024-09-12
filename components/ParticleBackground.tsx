'use client';
import { useEffect, useRef } from "react";

declare global {
	interface Window {
		particlesJS: any;
	}
}

export default function ParticlesBackground() {
	const particlesRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (typeof window.particlesJS !== "undefined" && particlesRef.current) {
			window.particlesJS("particles-js", {
				particles: {
					number: { value: 80, density: { enable: true, value_area: 800 } },
					color: { value: "#ffffff" },
					shape: { type: "circle" },
					opacity: { value: 0.5, random: false },
					size: { value: 3, random: true },
					line_linked: {
						enable: true,
						distance: 150,
						color: "#ffffff",
						opacity: 0.4,
						width: 1,
					},
					move: {
						enable: true,
						speed: 6,
						direction: "none",
						random: false,
						straight: false,
						out_mode: "out",
						bounce: false,
					},
				},
				interactivity: {
					detect_on: "canvas",
					events: {
						onhover: { enable: true, mode: "repulse" },
						onclick: { enable: true, mode: "push" },
						resize: true,
					},
				},
				retina_detect: true,
			});
		}
	}, []);

	return (
		<div
			id="particles-js"
			ref={particlesRef}
			className="absolute inset-0 z-0"
		/>
	);
}
