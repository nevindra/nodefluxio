import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { getPostBySlug, getAllSlugs } from "@/lib/blog";
import { mdxComponents } from "@/components/blog/mdx-components";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.frontmatter.title} | Nodeflux Blog`,
    description: post.frontmatter.description,
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      type: "article",
      publishedTime: post.frontmatter.date,
      authors: [post.frontmatter.author.name],
      images: post.frontmatter.coverImage
        ? [{ url: post.frontmatter.coverImage }]
        : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { frontmatter, content, readingTime } = post;
  const formattedDate = new Date(frontmatter.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main>
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
              {frontmatter.category}
            </span>
            <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              {readingTime}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
            {frontmatter.title}
          </h1>

          {/* Description */}
          <p className="text-xl text-muted-foreground leading-relaxed mb-6">
            {frontmatter.description}
          </p>

          {/* Author & Date */}
          <div className="flex items-center gap-4 pb-8 border-b">
            {frontmatter.author.avatar && (
              <Image
                src={frontmatter.author.avatar}
                alt={frontmatter.author.name}
                width={48}
                height={48}
                className="rounded-full"
              />
            )}
            <div>
              <div className="flex items-center gap-1.5 font-medium text-foreground">
                <User className="w-4 h-4" />
                {frontmatter.author.name}
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
      {frontmatter.coverImage && (
        <section className="pb-8">
          <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <Image
                src={frontmatter.coverImage}
                alt={frontmatter.title}
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
            <MDXRemote
              source={content}
              components={mdxComponents}
              options={{
                mdxOptions: {
                  rehypePlugins: [rehypeHighlight],
                },
              }}
            />
          </article>
        </div>
      </section>

      {/* Tags */}
      {frontmatter.tags && frontmatter.tags.length > 0 && (
        <section className="pb-16">
          <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
            <div className="flex flex-wrap gap-2 pt-8 border-t">
              {frontmatter.tags.map((tag) => (
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
