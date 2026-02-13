import { generateOGImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";
import { getPostBySlug, getAllSlugs } from "@/lib/blog";

export const alt = "Nodeflux Blog";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return generateOGImage({ title: "Post Not Found" });
  }

  return generateOGImage({
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    badge: post.frontmatter.category,
  });
}
