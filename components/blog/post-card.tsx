"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, User } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { PostMeta } from "@/lib/blog";
import { cn } from "@/lib/utils";

interface PostCardProps {
  post: PostMeta;
  index?: number;
}

export function PostCard({ post, index = 0 }: PostCardProps) {
  const { slug, frontmatter, readingTime } = post;
  const formattedDate = new Date(frontmatter.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/blog/${slug}`}>
        <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 group">
          {frontmatter.coverImage && (
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={frontmatter.coverImage}
                alt={frontmatter.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          )}
          <CardHeader className="space-y-2">
            <span className="inline-block w-fit text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
              {frontmatter.category}
            </span>
            <h3 className="text-xl font-semibold leading-tight text-foreground group-hover:text-primary transition-colors">
              {frontmatter.title}
            </h3>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground line-clamp-2">
              {frontmatter.description}
            </p>
          </CardContent>
          <CardFooter className="text-sm text-muted-foreground">
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-1.5">
                <User className="w-4 h-4" />
                <span>{frontmatter.author.name}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <span>{formattedDate}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>{readingTime}</span>
              </div>
            </div>
          </CardFooter>
        </Card>
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
