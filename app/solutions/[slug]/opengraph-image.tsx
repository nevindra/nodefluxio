import { generateOGImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";
import { getSolutionBySlug, getAllSolutionSlugs } from "@/lib/solutions-data";

export const alt = "Nodeflux Solutions";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export async function generateStaticParams() {
  return getAllSolutionSlugs().map((slug) => ({ slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    return generateOGImage({ title: "Solution Not Found" });
  }

  return generateOGImage({
    title: `${solution.title} ${solution.titleHighlight}`,
    description: solution.description,
    badge: solution.badge,
  });
}
