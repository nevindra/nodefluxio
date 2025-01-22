import Hero from "@/components/hero/Hero";
import Environments from "@/components/products-page/Environment";
import FaceAnalytics from "@/components/products-page/FaceAnalytics";
import PeopleAnalytics from "@/components/products-page/PeopleAnalytics";
import PeopleAnomaly from "@/components/products-page/PeopleAnomaly";
import PeopleBehavior from "@/components/products-page/PeopleBehavior";
import VehicleAnalytics from "@/components/products-page/VehicleAnalytics";

export default function Analytics() {
  const heroData = {
    title: "VisionAIre Analytics: Enterprise AI Video Analytics",
    description:
      "Transform your operations with enterprise-grade AI video analytics. Our comprehensive suite delivers real-time insights through facial recognition, behavior analysis, and intelligent monitoring for security, retail, and smart cities.",
    image: "/products-hero.webp",
    features: [
      "Real-time AI analytics with sub-second processing",
      "Enterprise-grade accuracy and scalability",
      "Multi-domain analytics capabilities",
    ],
  };

  return (
    <main>
      <Hero data={heroData} />
      <section className="mx-auto py-5 bg-[#dfdff2]">
        <div className="container max-w-[85%] mx-auto">
          <FaceAnalytics />
          <PeopleAnalytics />
          <PeopleAnomaly />
          <PeopleBehavior />
          <VehicleAnalytics />
          <Environments />
        </div>
      </section>
    </main>
  );
}
