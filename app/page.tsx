import Certifications from "@/components/landing-page/Certifications";
import Consolutation from "@/components/landing-page/Consolutation";
import CoreProducts from "@/components/landing-page/CoreProducts";
import Features from "@/components/landing-page/Features";
import TrustedBy from "@/components/landing-page/TrustedBy";
import UseCases from "@/components/landing-page/UseCases";
import { RainbowButton } from "@/components/ui/rainbow-button";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between space-y-4">
      <section className="w-full bg-tertiary py-12 md:py-16 relative h-[500px] md:h-[600px]">
        <div className="absolute inset-0">
          <div
            className="bg-cover bg-center w-full h-full"
            style={{ backgroundImage: "url('/landing-page/hero.png')" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, black 0%, rgba(0, 0, 0, 0.4) 100%)",
            }}
          />
          {/* Gradient overlay */}
        </div>
        <div className="relative container mx-auto px-4 z-10 h-full">
          {/* Positioned the text and button at the top left with width constraint */}
          <div className="absolute top-8 left-4 md:left-8 text-white md:w-2/5 lg:w-1/3">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              Extending Vision Beyond Imagination
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-6">
              Redefining the Possibilities of Surveillance with Advanced AI
              Algorithms and Real-time Analytics.
            </p>
            <RainbowButton className="bg-primary">
              <a
                href="/contact-us"
                className="text-sm sm:text-lg md:text-xl lg:text-2xl font-semibold"
              >
                Schedule Consultation
              </a>
            </RainbowButton>
          </div>
        </div>
      </section>
      <div className="max-w-[85%] mx-auto">
        <TrustedBy />
        <Features />
        <Certifications />
        <CoreProducts />
        <UseCases />
      </div>
      <Consolutation />
    </main>
  );
}
