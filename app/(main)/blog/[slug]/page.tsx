import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from "next-sanity";
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
} from "@phosphor-icons/react/dist/ssr";
import { sanityFetch } from "@/sanity/lib/live";
import { POST_QUERY, POST_SLUGS_QUERY } from "@/sanity/lib/queries";
import { portableTextComponents } from "@/components/blog/portable-text-components";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/jsonLd";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const { data: slugs } = await sanityFetch({
    query: POST_SLUGS_QUERY,
    perspective: "published",
    stega: false,
  });
  return slugs.map((s: { slug: string }) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const { data: post } = await sanityFetch({
    query: POST_QUERY,
    params: { slug },
    stega: false,
  });

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: `${post.title} | Nodeflux Blog`,
    description: post.description,
    keywords: post.tags,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `/blog/${slug}`,
      siteName: "Nodeflux",
      type: "article",
      publishedTime: post.date,
      authors: [post.author?.name || "Nodeflux Team"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const { data: post } = await sanityFetch({
    query: POST_QUERY,
    params: { slug },
  });

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleJsonLd({
              title: post.title,
              description: post.description,
              url: `/blog/${slug}`,
              image: post.coverImage,
              datePublished: post.date,
              authorName: post.author?.name || "Nodeflux Team",
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
              { name: "Blog", url: "/blog" },
              { name: post.title, url: `/blog/${slug}` },
            ]),
          ),
        }}
      />
      {/* Header Section */}
      <section className="relative pt-32 pb-8">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          {/* Back Link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Blog</span>
          </Link>

          {/* Category & Reading Time */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              {post.readingTime}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
            {post.title}
          </h1>

          {/* Description */}
          <p className="text-xl text-muted-foreground leading-relaxed mb-6">
            {post.description}
          </p>

          {/* Author & Date */}
          <div className="flex items-center gap-4 pb-8 border-b">
            {post.author?.avatar && (
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                width={48}
                height={48}
                className="rounded-full"
              />
            )}
            <div>
              <div className="flex items-center gap-1.5 font-medium text-foreground">
                <User className="w-4 h-4" />
                {post.author?.name || "Nodeflux Team"}
              </div>
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                {formattedDate}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cover Image */}
      {post.coverImage && (
        <section className="pb-8">
          <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>
      )}

      {/* Content */}
      <section className="pb-16">
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
          <article className="prose prose-lg prose-slate dark:prose-invert max-w-none">
            {post.body && (
              <PortableText
                value={post.body}
                components={portableTextComponents}
              />
            )}
          </article>
        </div>
      </section>

      {/* Tags */}
      {post.tags && post.tags.length > 0 && (
        <section className="pb-16">
          <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
            <div className="flex flex-wrap gap-2 pt-8 border-t">
              {post.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back to Blog */}
      <section className="pb-20">
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to all posts</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
