import { FadeInView } from "@/components/solutions/MotionDiv";
import Image from "next/image";

const companies = [
  { name: "Divtik", logo: "/landing-page/logos/divtik.png" },
  { name: "Brimob", logo: "/landing-page/logos/brimob.png" },
  { name: "Polri", logo: "/landing-page/logos/polri.png" },
  { name: "Mabes", logo: "/landing-page/logos/mabes.png" },
  { name: "BNPT", logo: "/landing-page/logos/bnpt.png" },
  { name: "Baintelkam", logo: "/landing-page/logos/baintelkam.png" },
  { name: "Imigrasi", logo: "/landing-page/logos/imigrasi.png" },
  { name: "Beacukai", logo: "/landing-page/logos/beacukai.png" },
  { name: "JSC", logo: "/landing-page/logos/jsc.jpg" },
  { name: "Jabar", logo: "/landing-page/logos/diskom-jabar.png" },
  { name: "Jatim", logo: "/landing-page/logos/kominfo-jatim.png" },
];

export default function TrustedBy() {
  return (
    <section className="py-16 md:py-24 bg-background border-b border-black/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-10 md:mb-16">
        <div className="flex flex-col items-center">
          <FadeInView className="flex items-center space-x-3">
            <div className="w-8 h-px bg-black/10" />
            <h2 className="text-[10px] font-mono text-foreground/40 tracking-[0.4em] uppercase">
              Operational Partnerships
            </h2>
            <div className="w-8 h-px bg-black/10" />
          </FadeInView>
        </div>
      </div>

      <div className="relative w-full">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Scrolling container */}
        <div className="flex overflow-hidden">
          <div className="flex animate-marquee items-center gap-12 md:gap-20">
            {companies.map((company, idx) => (
              <div
                key={`first-${idx}`}
                className="flex-shrink-0 grayscale opacity-20"
              >
                <div className="relative w-20 h-10 md:w-28 md:h-14">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    fill
                    sizes="(max-width: 768px) 80px, 112px"
                    className="object-contain select-none pointer-events-none"
                    draggable={false}
                  />
                </div>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {companies.map((company, idx) => (
              <div
                key={`second-${idx}`}
                className="flex-shrink-0 grayscale opacity-20"
              >
                <div className="relative w-20 h-10 md:w-28 md:h-14">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    fill
                    sizes="(max-width: 768px) 80px, 112px"
                    className="object-contain select-none pointer-events-none"
                    draggable={false}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
