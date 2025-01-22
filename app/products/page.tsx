import Hero from "@/components/hero/Hero";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { faq } from "@/data/faq";
import { CheckCircle2 } from "lucide-react";

export default function Products() {
  const data = [
    {
      title: "Dashboard",
      itemTitle: "VisionAIre Smart Dashboard",
      description:
        "Enterprise-grade command center for real-time surveillance monitoring, designed for Indonesian government institutions and businesses requiring high-security video analytics.",
      features: [
        "Real-time threat detection and security alerts",
        "Multi-location surveillance monitoring",
        "Government-compliant access control and audit logs",
      ],
    },
    {
      title: "Analytics",
      itemTitle: "VisionAIre Analytics",
      description:
        "Advanced AI analytics tailored for Indonesian smart cities and retail, delivering actionable insights for crowd management, retail optimization, and urban security.",
      features: [
        "Smart city traffic and crowd analysis",
        "Retail customer behavior analytics",
        "Security incident pattern detection",
      ],
    },
    {
      title: "Platform",
      itemTitle: "VisionAIre Platform",
      description:
        "Enterprise-ready AI platform trusted by Indonesian government agencies and businesses, offering seamless integration for security and surveillance operations.",
      features: [
        "Government-grade security compliance",
        "Scalable deployment for city-wide operations",
        "Integration with existing security infrastructure",
      ],
    },
    {
      title: "Hardware",
      itemTitle: "VisionAIre Hardware",
      description:
        "High-performance surveillance hardware optimized for Indonesian climate and infrastructure, ensuring reliable operation in demanding security and retail environments.",
      features: [
        "Tropical climate-optimized components",
        "24/7 surveillance capability",
        "Distributed edge processing for large-scale deployments",
      ],
    },
    {
      title: "Stream Compression",
      itemTitle: "VisionAIre Stream Compression",
      description:
        "Advanced video compression technology designed for Indonesian infrastructure, enabling efficient surveillance data transmission even in bandwidth-limited environments.",
      features: [
        "Low-bandwidth optimization for remote locations",
        "High-quality video retention for evidence",
        "Secure data transmission protocols",
      ],
    },
  ];
  const heroData = {
    title: "Complete AI Video Analytics Solutions",
    description:
      "Empower your organization with Indonesia's leading AI video analytics platform for security, surveillance, smart city, and retail operations",
    image: "/products-hero.webp",
    features: [
      "Government-grade security and surveillance",
      "Smart city monitoring and analytics",
      "Retail intelligence and optimization",
      "Enterprise-scale deployment",
      "24/7 reliable operation",
    ],
  };

  return (
    <main>
      <Hero data={heroData} />
      <section className="relative py-8 w-[85%] mx-auto mt-4">
        <div className="container mx-auto px-4 space-y-4">
          <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            VisionAIre Products
          </h1>
          <Tabs defaultValue={data[0].title}>
            <div className="overflow-x-auto">
              <TabsList className="flex items-center mb-4 min-w-max">
                {data.map((item, index) => (
                  <TabsTrigger
                    key={index}
                    value={item.title}
                    className="whitespace-nowrap data-[state=active]:bg-primary data-[state=active]:text-white"
                  >
                    {item.title}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            {data.map((item, index) => (
              <TabsContent key={index} value={item.title}>
                <Card className="text-center">
                  <CardHeader>
                    <CardTitle>
                      <p className="text-2xl md:text-3xl font-bold mb-6">
                        {item.itemTitle}
                      </p>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-6">{item.description}</p>
                    <ul className="space-y-4 mb-8 inline-block text-left">
                      {item.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center space-x-3"
                        >
                          <CheckCircle2 className="text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
      <section className="py-12">
        <div className="container w-[85%] mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible>
            {faq.map((item, index) => (
              <AccordionItem key={index} value={item.question}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </main>
  );
}
