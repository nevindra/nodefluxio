import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ActivityIcon as Activity } from "@phosphor-icons/react/dist/ssr";
import Consolutation from "@/components/landing-page/Consolutation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FadeIn, FadeInView } from "@/components/solutions/MotionDiv";
import { getIconSSR } from "@/lib/icons-ssr";
import { getSolutionBySlug, getAllSolutionSlugs } from "@/lib/solutions-data";
import { productJsonLd, breadcrumbJsonLd } from "@/lib/jsonLd";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSolutionSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    return { title: "Solution Not Found" };
  }

  const title = `${solution.title} ${solution.titleHighlight} - ${solution.badge} | Nodeflux`;
  const description = solution.description;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      images: [{ url: solution.topologyImage }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function SolutionPage({ params }: PageProps) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    notFound();
  }

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            productJsonLd({
              name: `${solution.title} ${solution.titleHighlight}`,
              description: solution.description,
              url: `/solutions/${slug}`,
              image: solution.topologyImage,
              category: "BusinessApplication",
            }),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "Solutions", url: "/" },
              {
                name: `${solution.title} ${solution.titleHighlight}`,
                url: `/solutions/${slug}`,
              },
            ]),
          ),
        }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8 relative max-w-[1280px]">
          <FadeIn>
            <span className="inline-block text-sm font-medium text-primary mb-4">
              {solution.badge}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground mb-6">
              {solution.title}{" "}
              <span className="text-muted-foreground">
                {solution.titleHighlight}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              {solution.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/contact-us">Request Demo</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#how-it-works">See How It Works</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Why Choose This Solution
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Purpose-built for law enforcement and security operations at any
              scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solution.benefits.map((benefit, index) => {
              const IconComponent = getIconSSR(benefit.icon);
              return (
                <FadeInView key={benefit.title} delay={index * 0.1}>
                  <Card className="h-full hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-2">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <CardTitle className="text-lg">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="leading-relaxed">
                        {benefit.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </FadeInView>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works - Topology Section */}
      <section id="how-it-works" className="py-20">
        <div className="container max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From edge capture to actionable intelligence—see how data flows
              through the system.
            </p>
          </div>

          <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden">
            <Image
              src={solution.topologyImage}
              alt={`${solution.title} System Architecture`}
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Tactical Solutions Section */}
      <section className="py-20">
        <div className="container max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Tactical Solutions
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Purpose-built capabilities for your operational needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {solution.tacticalSolutions.map((tactical) => (
              <Card key={tactical.title} className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">
                    {tactical.title}
                  </CardTitle>
                  <CardDescription className="leading-relaxed">
                    {tactical.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">
                      Analytics Used:
                    </h4>
                    <ul className="space-y-1">
                      {tactical.analyticsUsed.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-sm"
                        >
                          <Activity className="w-4 h-4 text-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">
                      Operational Benefits:
                    </h4>
                    <ul className="space-y-1">
                      {tactical.operationalBenefits.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm"
                        >
                          <Activity className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          <span>{item}</span>
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

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Deployment Scenarios
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Proven solutions for critical security operations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {solution.useCases.map((useCase, index) => {
              const IconComponent = getIconSSR(useCase.icon);
              return (
                <FadeInView key={useCase.name} delay={index * 0.1}>
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-2">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <CardTitle className="text-xl">{useCase.name}</CardTitle>
                      <CardDescription className="leading-relaxed">
                        {useCase.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {useCase.capabilities.map((capability, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 text-sm text-foreground"
                          >
                            <Activity className="w-4 h-4 text-primary" />
                            <span>{capability}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </FadeInView>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <Consolutation />
      </section>
    </main>
  );
}
