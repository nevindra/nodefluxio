"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Envelope, MapPin, WhatsappLogo } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { trackContactFormStarted, trackContactFormSubmitted, trackContactFormError, trackContactInfoClicked } from "@/lib/analytics";

const contactFormSchema = z.object({
  name: z
    .string()
    .min(4, "Name is required and must be at least 4 characters long"),
  companyName: z
    .string()
    .min(5, "Company name is required and must be at least 5 characters long"),
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
  const formStartedRef = useRef(false);
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
          title: "Message Sent",
          description:
            "We have received your inquiry and will get back to you shortly.",
          variant: "default",
        });
        reset();
        trackContactFormSubmitted();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      trackContactFormError(error instanceof Error ? error.message : "Unknown error");
      toast({
        title: "Sending Error",
        description:
          "Please try again later or contact us directly at business@nodeflux.io",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Toaster />

      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-medium tracking-tight">
              GET IN <span className="text-muted-foreground">TOUCH</span>
            </h1>
            <p className="text-muted-foreground text-lg font-light leading-relaxed">
              Discuss how our AI-powered solutions can optimize your
              organizational efficiency, safety, and operational clarity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pb-24 md:pb-40">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left: Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-primary rounded-full" />
                  <span className="text-xs font-mono text-primary uppercase tracking-widest">
                    Contact Info
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
                  LET&apos;S START A <br />
                  <span className="text-muted-foreground">CONVERSATION.</span>
                </h2>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Have questions about our products or want to discuss your
                  project? We&apos;re here to help.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {[
                  {
                    icon: Envelope,
                    label: "Email",
                    value: "business@nodeflux.io",
                    href: "mailto:business@nodeflux.io",
                    trackType: "email" as const,
                  },
                  {
                    icon: WhatsappLogo,
                    label: "WhatsApp",
                    value: "+62 812 9240 0659",
                    href: "https://wa.me/6281292400659",
                    trackType: "whatsapp" as const,
                  },
                  {
                    icon: MapPin,
                    label: "Office",
                    value:
                      "Jl. Kemang Timur No.24, Bangka, Jakarta Selatan 12730",
                    href: "https://maps.app.goo.gl/5rtXjKs6T5eL4hZv5",
                    trackType: "map" as const,
                  },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    onClick={() => trackContactInfoClicked(item.trackType)}
                    className="group flex items-start gap-4 p-5 rounded-2xl border border-border/60 bg-muted/5 hover:bg-muted/10 hover:border-primary/40 transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-background border border-border/40 flex items-center justify-center text-muted-foreground group-hover:text-primary group-hover:border-primary/40 transition-colors shrink-0">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                        {item.label}
                      </span>
                      <p className="text-foreground font-medium mt-1">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Right: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="p-8 md:p-10 rounded-3xl border border-border/60 bg-card/50 backdrop-blur-sm">
                <div className="mb-8">
                  <h3 className="text-xl font-medium mb-2">
                    Send us a message
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Fill out the form below and we&apos;ll get back to you.
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  onFocus={() => {
                    if (!formStartedRef.current) {
                      formStartedRef.current = true;
                      trackContactFormStarted();
                    }
                  }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium">
                        Name
                      </Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        {...register("name")}
                        className="h-12 bg-background border-border rounded-xl focus:border-primary transition-colors"
                      />
                      {errors.name?.message && (
                        <p className="text-destructive text-xs">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="companyName"
                        className="text-sm font-medium"
                      >
                        Company
                      </Label>
                      <Input
                        id="companyName"
                        placeholder="Company name"
                        {...register("companyName")}
                        className="h-12 bg-background border-border rounded-xl focus:border-primary transition-colors"
                      />
                      {errors.companyName?.message && (
                        <p className="text-destructive text-xs">
                          {errors.companyName.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label
                        htmlFor="companyEmail"
                        className="text-sm font-medium"
                      >
                        Email
                      </Label>
                      <Input
                        id="companyEmail"
                        type="email"
                        placeholder="name@company.com"
                        {...register("companyEmail")}
                        className="h-12 bg-background border-border rounded-xl focus:border-primary transition-colors"
                      />
                      {errors.companyEmail?.message && (
                        <p className="text-destructive text-xs">
                          {errors.companyEmail.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="phoneNumber"
                        className="text-sm font-medium"
                      >
                        Phone
                      </Label>
                      <Input
                        id="phoneNumber"
                        type="tel"
                        placeholder="+62 xxx xxxx xxxx"
                        {...register("phoneNumber")}
                        className="h-12 bg-background border-border rounded-xl focus:border-primary transition-colors"
                      />
                      {errors.phoneNumber?.message && (
                        <p className="text-destructive text-xs">
                          {errors.phoneNumber.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project or inquiry..."
                      {...register("message")}
                      className="min-h-[140px] bg-background border-border rounded-xl focus:border-primary transition-colors resize-none"
                    />
                    {errors.message?.message && (
                      <p className="text-destructive text-xs">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-14 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-medium transition-all shadow-lg shadow-primary/20"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        <span>Sending...</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <span>Send Message</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
