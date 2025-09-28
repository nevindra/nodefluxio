import Consolutation from "@/components/landing-page/Consolutation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import visionaire from "@/public/products-hero.webp";
import topologi from "@/public/solutions/massive-surveillance.png";
import { CheckCircle2, CheckCircleIcon } from "lucide-react";
import Image from "next/image";

export default function MassiveSurveillance() {
  const listUseCases = [
    {
      name: "Tactical Body Camera System",
      description:
        "Military-grade body-worn camera system with real-time AI analytics for immediate threat assessment and tactical response. Designed for law enforcement and military personnel operating in high-risk environments.",
      relevantAnalytics: [
        "Face Recognition",
        "People Analytics",
        "Anomaly Detection",
      ],
      benefits: [
        "Instant threat identification and tactical response capabilities",
        "Secure, encrypted evidence collection for mission debriefing",
        "Real-time command center integration for coordinated operations",
      ],
    },
    {
      name: "Tactical Drone Surveillance",
      description:
        "Advanced military-grade drone surveillance system with AI-powered analytics for aerial reconnaissance and tactical operations. Enables secure, real-time aerial monitoring for critical missions and force protection.",
      relevantAnalytics: [
        "People Analytics",
        "Crowd Estimation",
        "Anomaly Detection",
      ],
      benefits: [
        "Secure aerial reconnaissance in hostile environments",
        "Rapid tactical deployment for emergency response",
        "Advanced terrain mapping and threat identification",
      ],
    },
    {
      name: "Command Center CCTV Integration",
      description:
        "Military-grade CCTV command center solution with advanced AI analytics for comprehensive facility security and force protection. Designed for mission-critical surveillance operations.",
      relevantAnalytics: [
        "Face Recognition",
        "People Analytics",
        "People Fighting",
        "Anomaly Detection",
      ],
      benefits: [
        "24/7 AI-powered command center operations",
        "Multi-site tactical security coordination",
        "Advanced threat detection and response protocols",
      ],
    },
  ];

  const benefits = [
    "Military-grade security coverage for mission-critical operations",
    "Advanced tactical response capabilities with AI-powered threat detection",
    "Secure, encrypted communications for sensitive operations",
    "Comprehensive command center integration for coordinated tactical response",
  ];

  return (
    <main className="bg-gray-50">
      <section className="py-12 md:py-20 bg-primary">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center text-white">
          <div className="w-full md:w-1/2 md:pr-12 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              VisionAIre Real Time Surveillance
            </h1>
            <p className="mb-8 text-lg leading-relaxed">
              Advanced surveillance system designed for military and law
              enforcement operations. Featuring AI-powered analytics for
              tactical response, force protection, and mission-critical security
              operations across multiple deployment scenarios.
            </p>
            <ul className="mb-8 space-y-3">
              {listUseCases.map((useCase, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircleIcon size={20} className="mr-3 text-secondary" />
                  <span className="text-lg">{useCase.name}</span>
                </li>
              ))}
            </ul>
            <Button className="bg-secondary hover:bg-secondary-dark text-white px-8 py-4 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105">
              Request Security Consultation
            </Button>
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <Image
              src={visionaire}
              alt="Military-Grade Surveillance System"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-[85%]">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary">
            Tactical Deployment Architecture
          </h2>
          <div className="mb-8">
            <Image
              src={topologi}
              alt="Military Surveillance System Architecture"
              width={1920}
              height={1080}
              className="w-full mx-auto rounded-lg shadow-lg"
            />
            <p className="text-xs italic text-center mt-2 text-gray-600">
              *Example topology for a real time surveillance use case
            </p>
          </div>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
              Tactical Deployment Scenarios
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Advanced surveillance solutions for military and law enforcement
              operations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {listUseCases.map((useCase, index) => (
              <Card
                key={index}
                className="flex flex-col h-full transition-shadow duration-300 hover:shadow-lg"
              >
                <CardHeader>
                  <h3 className="text-xl font-bold mb-2 text-primary">
                    {useCase.name}
                  </h3>
                  <CardDescription className="text-gray-600">
                    {useCase.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <div className="mb-4">
                    <p className="font-semibold mb-2 text-primary">
                      Analytics Used:
                    </p>
                    <ul className="space-y-2">
                      {useCase.relevantAnalytics.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle2 className="text-green-500 flex-shrink-0 w-5 h-5 mr-2" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">
                      Operational Benefits:
                    </h4>
                    <ul className="space-y-2">
                      {useCase.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircleIcon className="text-green-500 flex-shrink-0 w-5 h-5 mr-2 mt-1" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 max-w-[85%]">
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl font-bold text-primary">
                <h2>Military-Grade Surveillance Advantages</h2>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg mb-6 text-gray-700">
                Our military-grade surveillance system delivers tactical
                advantages:
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircleIcon
                      size={24}
                      className="text-green-500 mr-3 flex-shrink-0 mt-1"
                    />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <Consolutation />
    </main>
  );
}
