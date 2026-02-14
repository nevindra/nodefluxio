"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import type { SanityPostMeta } from "@/sanity/lib/types";

interface PostCardProps {
  post: SanityPostMeta;
  index?: number;
  featured?: boolean;
}

export function PostCard({ post, index = 0, featured = false }: PostCardProps) {
  const { slug, title, description, date, category, readingTime } = post;
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <Link href={`/blog/${slug}`} className="group block">
        <article
          className={cn(
            "relative rounded-xl border border-border/50 bg-card p-6 transition-all duration-300",
            "hover:border-primary/30 hover:shadow-md hover:shadow-primary/5",
            featured && "md:p-8"
          )}
        >
          {/* Category & Meta Row */}
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
              {category}
            </span>
            <span className="text-xs text-muted-foreground/60">·</span>
            <div className="flex items-center gap-1 text-xs text-muted-foreground/60">
              <Calendar className="w-3 h-3" />
              <span>{formattedDate}</span>
            </div>
            <span className="text-xs text-muted-foreground/60">·</span>
            <div className="flex items-center gap-1 text-xs text-muted-foreground/60">
              <Clock className="w-3 h-3" />
              <span>{readingTime}</span>
            </div>
          </div>

          {/* Title */}
          <h3
            className={cn(
              "font-semibold leading-tight text-foreground group-hover:text-primary transition-colors duration-200",
              featured ? "text-2xl md:text-3xl mb-3" : "text-lg mb-2"
            )}
          >
            {title}
          </h3>

          {/* Description */}
          <p
            className={cn(
              "text-muted-foreground leading-relaxed",
              featured ? "text-base line-clamp-3" : "text-sm line-clamp-2"
            )}
          >
            {description}
          </p>

          {/* Read More */}
          <div className="flex items-center gap-1.5 mt-4 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <span>Read more</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </div>
        </article>
      </Link>
    </motion.div>
  );
}

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

export function CategoryFilter({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onCategoryChange(null)}
        className={cn(
          "px-4 py-2 rounded-full text-sm font-medium transition-colors",
          activeCategory === null
            ? "bg-primary text-primary-foreground"
            : "bg-muted text-muted-foreground hover:bg-muted/80"
        )}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium transition-colors",
            activeCategory === category
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-muted-foreground hover:bg-muted/80"
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
