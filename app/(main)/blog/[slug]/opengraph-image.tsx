import { generateOGImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";
import { sanityFetch } from "@/sanity/lib/live";
import { POST_QUERY, POST_SLUGS_QUERY } from "@/sanity/lib/queries";

export const alt = "Nodeflux Blog";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export async function generateStaticParams() {
  const { data: slugs } = await sanityFetch({
    query: POST_SLUGS_QUERY,
    perspective: "published",
    stega: false,
  });
  return slugs.map((s: { slug: string }) => ({ slug: s.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { data: post } = await sanityFetch({
    query: POST_QUERY,
    params: { slug },
    stega: false,
  });

  if (!post) {
    return generateOGImage({ title: "Post Not Found" });
  }

  return generateOGImage({
    title: post.title,
    description: post.description,
    badge: post.category,
  });
}
