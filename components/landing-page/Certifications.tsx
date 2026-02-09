import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeInView } from "@/components/solutions/MotionDiv";
import nist from "@/public/landing-page/nist.webp";
import Image from "next/image";

export default function Certifications() {
  return (
    <section className="py-24 md:py-32 bg-background border-t border-black/[0.03] font-futura">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-7xl mb-12 md:mb-20">
          <FadeInView
            direction="left"
            className="flex items-center space-x-3 mb-8"
          >
            <div className="w-12 h-[2px] bg-primary"></div>
            <span className="text-xs font-medium tracking-[0.4em] text-primary uppercase">
              Ecosystem & Compliance
            </span>
          </FadeInView>
          <FadeInView>
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6 leading-tight text-foreground uppercase">
              Global Standards <br />
              <span className="text-primary">World-Class Recognition.</span>
            </h2>
          </FadeInView>
          <FadeInView delay={0.2}>
            <p className="text-base md:text-lg text-muted-foreground font-light leading-relaxed max-w-4xl">
              Built on top-tier global partnerships and verified by the world's
              most rigorous biometric testing authorities.
            </p>
          </FadeInView>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          <FadeInView>
            <Card className="glass border-black/5 relative overflow-hidden group shadow-sm rounded-xl h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardHeader className="relative z-10 pt-12">
                <div className="flex items-center gap-6 mb-8">
                  <div className="flex flex-col">
                    <span className="text-2xl font-medium tracking-tighter text-foreground">
                      NVIDIA
                    </span>
                    <span className="text-[10px] font-mono text-primary uppercase tracking-[0.2em] font-medium">
                      Global Partner
                    </span>
                  </div>
                  <div className="w-px h-8 bg-black/10" />
                  <div className="flex flex-col">
                    <span className="text-2xl font-medium tracking-tighter text-foreground">
                      INTEL
                    </span>
                    <span className="text-[10px] font-mono text-primary uppercase tracking-[0.2em] font-medium">
                      Partner
                    </span>
                  </div>
                </div>
                <CardTitle className="text-xl md:text-2xl font-medium tracking-tight text-foreground uppercase mb-4">
                  Strategic Global <br />
                  Technology Alliances
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10 pb-12">
                <p className="text-muted-foreground text-sm md:text-base font-light leading-relaxed">
                  As a member of the NVIDIA Global Partner Program and an Intel
                  Partner, Nodeflux leverages cutting-edge hardware acceleration
                  and early access to next-gen AI compute tools to deliver
                  unparalleled performance from the edge to the cloud.
                </p>
              </CardContent>
            </Card>
          </FadeInView>

          <FadeInView delay={0.1}>
            <Card className="glass border-black/5 relative overflow-hidden group shadow-sm rounded-xl h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardHeader className="relative z-10 pt-12">
                <div className="mb-8 flex items-center gap-4">
                  <Image
                    src={nist}
                    alt="NIST"
                    width={100}
                    height={40}
                    className="opacity-80 grayscale"
                  />
                  <span className="text-[10px] font-mono text-primary uppercase tracking-[0.2em] font-medium">
                    Verified Score
                  </span>
                </div>
                <CardTitle className="text-xl md:text-2xl font-medium tracking-tight text-foreground uppercase mb-4">
                  Ranked Top 25th <br />
                  Global NIST FRVT
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10 pb-12">
                <p className="text-muted-foreground text-sm md:text-base font-light leading-relaxed">
                  Passed as the 1st technology principal from Indonesia to pass
                  NIST's Face Recognition Vendor Test. Nodeflux ranks in the top
                  85th percentile among 140+ global vision companies.
                </p>
              </CardContent>
            </Card>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}
