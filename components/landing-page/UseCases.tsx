import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import commandCenter from "@/public/landing-page/command-center.png";
import smartcity from "@/public/landing-page/smart-city.jpg";
import Link from "next/link";
export default function UseCases() {
  const useCases = [
    {
      title: "Massive Surveillance System",
      description:
        "Enhance public safety and security with our advanced large-scale surveillance solutions. Monitor vast areas efficiently, detect anomalies in real-time, and respond swiftly to potential threats.",
      image: commandCenter,
      href: "/solutions/massive-surveillance",
      button: "Discover Our Capabilities",
    },
    {
      title: "Smart City Solution",
      description:
        "Revolutionize urban living with our intelligent city management systems. Optimize traffic flow, improve resource allocation, and enhance overall quality of life for citizens through data-driven insights.",
      image: smartcity,
      href: "/solutions/smart-city",
      button: "Transform Your City",
    },
    {
      title: "Integrated Building Surveillance",
      description:
        "Secure your premises with our comprehensive building surveillance solutions. Monitor access points, track occupancy, and ensure safety protocols are followed, all through a single integrated platform.",
      image: smartcity,
      href: "/solutions/smart-building",
      button: "Secure Your Space",
    },
    {
      title: "Retail Store Optimization",
      description:
        "Elevate your retail operations with our cutting-edge analytics. Gain valuable insights into customer behavior, optimize store layouts, and enhance the shopping experience while improving operational efficiency.",
      image: smartcity,
      href: "/solutions/retail-analytics",
      button: "Optimize Your Store",
    },
  ];
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-2l font-bold text-center mb-8">
          Transforming Industries with{" "}
          <span className="text-[#4c12a1]">VisionAIre</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <Card
              key={index}
              className="flex flex-col h-full items-center justify-center text-center bg-[#DEE1FE]"
            >
              <CardHeader className="">
                {/* <div className="w-full flex items-center justify-center rounded-lg mb-4">
									<Image
										src={useCase.image}
										alt={useCase.title}
										width={350}
										height={400}
										className="rounded-lg fixed-size"
									/>
								</div> */}
                <h3 className="text-xl font-semibold">{useCase.title}</h3>
              </CardHeader>
              <CardContent>
                <p>{useCase.description}</p>
              </CardContent>
              <CardFooter>
                <Button className="bg-primary text-white text-lg sm:text-sm">
                  <Link href={useCase.href}>{useCase.button}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
