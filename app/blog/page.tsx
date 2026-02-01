import { Metadata } from "next";
import { getAllPosts, getAllCategories } from "@/lib/blog";
import { BlogList } from "@/components/blog/blog-list";

export const metadata: Metadata = {
  title: "Blog | Nodeflux",
  description:
    "Stay up to date with the latest news, product updates, and technical insights from the Nodeflux team.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();

  return (
    <main>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8 relative max-w-[1440px]">
          <div className="text-center">
            <span className="inline-block text-sm font-medium text-primary mb-4">
              Blog
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground mb-6">
              Insights & Updates
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Stay up to date with the latest news, product updates, and technical
              insights from the Nodeflux team.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Posts Section */}
      <section className="pb-20">
        <div className="container mx-auto px-6 lg:px-8 max-w-[1440px]">
          <BlogList posts={posts} categories={categories} />
        </div>
      </section>
    </main>
  );
}
