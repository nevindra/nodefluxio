"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PostCard, CategoryFilter } from "@/components/blog/post-card";
import { trackBlogCategoryFiltered } from "@/lib/analytics";
import type { SanityPostMeta } from "@/sanity/lib/types";

interface BlogListProps {
  posts: SanityPostMeta[];
  categories: string[];
}

export function BlogList({ posts, categories }: BlogListProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredPosts = activeCategory
    ? posts.filter(
        (post) =>
          post.category?.toLowerCase() === activeCategory.toLowerCase()
      )
    : posts;

  const [featuredPost, ...remainingPosts] = filteredPosts;

  return (
    <>
      {/* Category Filter */}
      {categories.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mb-12 flex justify-center"
        >
          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={(category) => {
              setActiveCategory(category);
              trackBlogCategoryFiltered(category);
            }}
          />
        </motion.div>
      )}

      {/* Posts */}
      {filteredPosts.length > 0 ? (
        <div className="space-y-6">
          {/* Featured Post */}
          {featuredPost && (
            <PostCard post={featuredPost} index={0} featured />
          )}

          {/* Remaining Posts Grid */}
          {remainingPosts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {remainingPosts.map((post, index) => (
                <PostCard key={post.slug} post={post} index={index + 1} />
              ))}
            </div>
          )}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20"
        >
          <p className="text-muted-foreground text-lg">
            No posts found. Check back soon for new content.
          </p>
        </motion.div>
      )}
    </>
  );
}
