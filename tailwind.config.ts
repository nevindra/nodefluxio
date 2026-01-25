import type { Config } from "tailwindcss";

const config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		screens: {
			sm: "425px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
			"3xl": "1920px",
			"4xl": "2560px",
			"5xl": "3840px",
		},
		container: {
			center: true,
			padding: "2rem",
			screens: {
				sm: "425px",
				md: "768px",
				lg: "1024px",
				xl: "1280px",
				"2xl": "1400px",
				"3xl": "1800px",
				"4xl": "2400px",
				"5xl": "3200px",
			},
		},
		extend: {
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "#4c12a1",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "#45e5b7",
					foreground: "hsl(var(--secondary-foreground))",
				},
				tertiary: {
					DEFAULT: "#439dff",
					foreground: "hsl(var(--tertiary-foreground, 0 0% 100%))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				"color-1": "hsl(var(--color-1))",
				"color-2": "hsl(var(--color-2))",
				"color-3": "hsl(var(--color-3))",
				"color-4": "hsl(var(--color-4))",
				"color-5": "hsl(var(--color-5))",
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: {
						height: "0",
					},
					to: {
						height: "var(--radix-accordion-content-height)",
					},
				},
				"accordion-up": {
					from: {
						height: "var(--radix-accordion-content-height)",
					},
					to: {
						height: "0",
					},
				},
				pulse: {
					"0%, 100%": {
						boxShadow: "0 0 0 0 var(--pulse-color)",
					},
					"50%": {
						boxShadow: "0 0 0 8px var(--pulse-color)",
					},
				},
				gradient: {
					to: {
						backgroundPosition: "var(--bg-size) 0",
					},
				},
				"border-beam": {
					"100%": {
						"offset-distance": "100%",
					},
				},
				"shine-pulse": {
					"0%": {
						"background-position": "0% 0%",
					},
					"50%": {
						"background-position": "100% 100%",
					},
					to: {
						"background-position": "0% 0%",
					},
				},
				shimmer: {
					"0%, 90%, 100%": {
						"background-position": "calc(-100% - var(--shimmer-width)) 0",
					},
					"30%, 60%": {
						"background-position": "calc(100% + var(--shimmer-width)) 0",
					},
				},
				rainbow: {
					"0%": {
						"background-position": "0%",
					},
					"100%": {
						"background-position": "200%",
					},
				},
				"scan-x": {
					"0%": {
						left: "0%",
					},
					"100%": {
						left: "100%",
					},
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				pulse: "pulse var(--duration) ease-out infinite",
				gradient: "gradient 8s linear infinite",
				"border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
				shimmer: "shimmer 8s infinite",
				rainbow: "rainbow var(--speed, 2s) infinite linear",
				"scan-x": "scan-x 10s linear infinite",
			},
			backgroundImage: {
				"hero-pattern": "radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.05) 1px, transparent 0)",
				"tech-gradient": "linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 0%, transparent 100%)",
			},
			maxWidth: {
				"8xl": "90rem",
				"9xl": "100rem",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
