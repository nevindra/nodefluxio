"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { Toaster } from "@/components/ui/toaster";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import {
	Mail,
	MapPin,
	Phone,
	ArrowRight,
	Clock,
	ShieldCheck,
	Briefcase
} from "lucide-react";
import { HeroBackground } from "@/components/hero/HeroBackground";

const contactFormSchema = z.object({
	name: z.string().min(4, "Name is required and must be at least 4 characters long"),
	companyName: z.string().min(5, "Company name is required and must be at least 5 characters long"),
	companyEmail: z.string().email("Invalid email address"),
	phoneNumber: z.string().min(10, "Phone number is required"),
	message: z.string().min(10, "Message must be at least 10 characters long"),
});

type FormData = {
	name: string;
	companyName: string;
	companyEmail: string;
	phoneNumber: string;
	message: string;
};

export default function ContactUs() {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const { toast } = useToast();

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<FormData>({
		resolver: zodResolver(contactFormSchema),
	});

	const onSubmit = async (data: FormData) => {
		setIsSubmitting(true);
		try {
			const response = await fetch("/api/send-email", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data),
			});

			if (response.ok) {
				toast({
					title: "MESSAGE SENT",
					description: "We have received your inquiry and will get back to you shortly.",
					variant: "default",
				});
				reset();
			} else {
				throw new Error("Failed to send message");
			}
		} catch (error) {
			console.error("Error sending message:", error);
			toast({
				title: "SENDING ERROR",
				description: "Please try again later or contact us directly at business@nodeflux.io",
				variant: "destructive",
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<main className="min-h-screen bg-background text-white relative">
			<HeroBackground isLanding={false} />
			<Toaster />

			<section className="relative z-10 pt-32 pb-24 px-8 lg:px-24 max-w-7xl mx-auto">
				<div className="flex flex-col lg:flex-row gap-24">
					{/* Left Column: Info */}
					<div className="flex-1 w-full max-w-xl">
						<motion.div
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
							className="space-y-8"
						>
							<div className="flex flex-col space-y-4">
								<div className="inline-flex items-center space-x-3 text-white/60">
									<span className="w-1.5 h-1.5 bg-white/60"></span>
									<span className="text-[10px] md:text-xs font-mono tracking-[0.3em] uppercase">
										Business Solutions
									</span>
								</div>
								<div className="w-full h-px bg-white/10 max-w-xs"></div>
							</div>

							<h1 className="font-semibold tracking-tighter text-white leading-[0.85] text-5xl md:text-7xl lg:text-8xl uppercase">
								GET IN <br />
								<span className="text-muted-foreground">TOUCH.</span>
							</h1>

							<p className="text-white/50 leading-relaxed font-light text-base md:text-lg">
								Discuss how our AI-powered solutions can optimize your organizational efficiency, safety, and operational clarity.
							</p>

							<div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/5 border border-white/5 mt-16">
								{[
									{ icon: <Mail className="w-4 h-4" />, label: "Inquiries", value: "business@nodeflux.io" },
									{ icon: <Phone className="w-4 h-4" />, label: "Support", value: "+62 21 2270 2164" },
									{ icon: <Clock className="w-4 h-4" />, label: "Response Time", value: "< 24 Hours" },
									{ icon: <ShieldCheck className="w-4 h-4" />, label: "Privacy", value: "Enterprise Grade" },
								].map((item, i) => (
									<div key={i} className="bg-background/50 backdrop-blur-sm p-6 border-r border-b border-white/5 last:border-r-0">
										<div className="flex items-center space-x-3 mb-3 text-white/30">
											{item.icon}
											<span className="text-[9px] font-mono uppercase tracking-[0.2em]">{item.label}</span>
										</div>
										<div className="text-xs font-mono text-white tracking-wider">{item.value}</div>
									</div>
								))}
							</div>

							{/* Office Location Card */}
							<div className="mt-12 p-8 border border-white/5 bg-white/[0.01] relative overflow-hidden group">
								<div className="absolute top-0 right-0 p-4 opacity-5">
									<MapPin className="w-24 h-24" />
								</div>
								<h3 className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 mb-6">Main Office</h3>
								<div className="space-y-2">
									<p className="text-sm font-light text-white/60">Jl. Kemang Timur No.90C</p>
									<p className="text-sm font-light text-white/60">Jakarta Selatan, 12730</p>
									<p className="text-sm font-light text-white/60">Indonesia</p>
								</div>
								<div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/10"></div>
							</div>
						</motion.div>
					</div>

					{/* Right Column: Contact Form */}
					<div className="flex-1 w-full relative">
						<motion.div
							initial={{ opacity: 0, scale: 0.98 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 1, ease: "easeOut" }}
							className="bg-white/[0.02] border border-white/10 p-8 md:p-12 relative overflow-hidden"
						>
							{/* Visual Grid Accent */}
							<div className="absolute inset-0 bg-hero-pattern [background-size:30px_30px] opacity-[0.02] pointer-events-none"></div>

							<div className="relative z-10">
								<div className="flex justify-between items-center mb-12">
									<div className="flex items-center space-x-2">
										<div className="w-2 h-2 bg-emerald-500"></div>
										<span className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest">Active Connection</span>
									</div>
									<span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">Form Ref: 01-A</span>
								</div>

								<form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
									<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
										<div className="space-y-2">
											<Label htmlFor="name" className="text-[10px] font-mono uppercase tracking-widest text-white/40">Your Name</Label>
											<Input
												id="name"
												placeholder="Enter your name"
												{...register("name")}
												className="bg-transparent border-white/10 rounded-none focus:border-white/40 transition-all font-mono text-sm placeholder:text-white/10"
											/>
											{errors.name?.message && <p className="text-red-500/60 text-[10px] font-mono uppercase mt-1">{errors.name.message}</p>}
										</div>

										<div className="space-y-2">
											<Label htmlFor="companyName" className="text-[10px] font-mono uppercase tracking-widest text-white/40">Company / Agency</Label>
											<Input
												id="companyName"
												placeholder="Enter organization"
												{...register("companyName")}
												className="bg-transparent border-white/10 rounded-none focus:border-white/40 transition-all font-mono text-sm placeholder:text-white/10"
											/>
											{errors.companyName?.message && <p className="text-red-500/60 text-[10px] font-mono uppercase mt-1">{errors.companyName.message}</p>}
										</div>
									</div>

									<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
										<div className="space-y-2">
											<Label htmlFor="companyEmail" className="text-[10px] font-mono uppercase tracking-widest text-white/40">Business Email</Label>
											<Input
												id="companyEmail"
												type="email"
												placeholder="name@company.com"
												{...register("companyEmail")}
												className="bg-transparent border-white/10 rounded-none focus:border-white/40 transition-all font-mono text-sm placeholder:text-white/10"
											/>
											{errors.companyEmail?.message && <p className="text-red-500/60 text-[10px] font-mono uppercase mt-1">{errors.companyEmail.message}</p>}
										</div>

										<div className="space-y-2">
											<Label htmlFor="phoneNumber" className="text-[10px] font-mono uppercase tracking-widest text-white/40">Phone Number</Label>
											<Input
												id="phoneNumber"
												type="tel"
												placeholder="+00 (000) 000-0000"
												{...register("phoneNumber")}
												className="bg-transparent border-white/10 rounded-none focus:border-white/40 transition-all font-mono text-sm placeholder:text-white/10"
											/>
											{errors.phoneNumber?.message && <p className="text-red-500/60 text-[10px] font-mono uppercase mt-1">{errors.phoneNumber.message}</p>}
										</div>
									</div>

									<div className="space-y-2">
										<Label htmlFor="message" className="text-[10px] font-mono uppercase tracking-widest text-white/40">Message / Project Brief</Label>
										<Textarea
											id="message"
											placeholder="How can we help?"
											className="min-h-[150px] bg-transparent border-white/10 rounded-none focus:border-white/40 transition-all font-mono text-sm placeholder:text-white/10 resize-none"
											{...register("message")}
										/>
										{errors.message?.message && <p className="text-red-500/60 text-[10px] font-mono uppercase mt-1">{errors.message.message}</p>}
									</div>

									<Button
										type="submit"
										disabled={isSubmitting}
										className="w-full h-16 bg-white hover:bg-neutral-200 text-black rounded-none font-medium text-base uppercase tracking-widest transition-all duration-300 relative group"
									>
										{isSubmitting ? (
											<div className="flex items-center space-x-3">
												<span className="w-2 h-2 bg-black animate-pulse"></span>
												<span>Sending Inquiry...</span>
											</div>
										) : (
											<div className="flex items-center space-x-2">
												<span>Send Message</span>
												<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
											</div>
										)}
									</Button>
								</form>
							</div>

							{/* Corner Accents */}
							<div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-white/20"></div>
							<div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/20"></div>
						</motion.div>

						{/* Bottom Form Metadata */}
						<div className="mt-8 flex justify-between items-center px-4 opacity-20">
							<div className="flex items-center space-x-6">
								<div className="flex items-center space-x-2">
									<Briefcase className="w-3 h-3" />
									<span className="text-[8px] font-mono uppercase tracking-[0.2em]">Secure Data Channel</span>
								</div>
								<div className="flex items-center space-x-2">
									<ShieldCheck className="w-3 h-3" />
									<span className="text-[8px] font-mono uppercase tracking-[0.2em]">Enterprise Privacy</span>
								</div>
							</div>
							<span className="text-[8px] font-mono">UTC+07:00</span>
						</div>
					</div>
				</div>
			</section>

			{/* Decorative Technical Accents */}
			<div className="absolute bottom-12 left-12 flex items-end space-x-1.5 opacity-40">
				<div className="w-1.5 h-10 bg-white/60"></div>
				<div className="w-1.5 h-6 bg-white/30"></div>
				<div className="w-1.5 h-8 bg-white/40"></div>
			</div>
			<div className="absolute top-1/2 right-10 w-24 h-24 pointer-events-none opacity-20 hidden lg:block">
				<div className="absolute bottom-0 right-0 w-full h-px bg-white"></div>
				<div className="absolute bottom-0 right-0 w-px h-full bg-white"></div>
			</div>
		</main>
	);
}
