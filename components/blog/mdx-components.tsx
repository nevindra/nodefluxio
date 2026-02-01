import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  h1: ({ className, ...props }) => (
    <h1
      className={cn(
        "mt-8 mb-4 text-3xl font-bold tracking-tight text-foreground",
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }) => (
    <h2
      className={cn(
        "mt-8 mb-4 text-2xl font-semibold tracking-tight text-foreground border-b pb-2",
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }) => (
    <h3
      className={cn(
        "mt-6 mb-3 text-xl font-semibold tracking-tight text-foreground",
        className
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }) => (
    <h4
      className={cn(
        "mt-4 mb-2 text-lg font-semibold tracking-tight text-foreground",
        className
      )}
      {...props}
    />
  ),
  p: ({ className, ...props }) => (
    <p
      className={cn(
        "mb-4 text-lg leading-relaxed text-foreground/90",
        className
      )}
      {...props}
    />
  ),
  ul: ({ className, ...props }) => (
    <ul
      className={cn("mb-4 ml-6 list-disc space-y-2 text-foreground/90", className)}
      {...props}
    />
  ),
  ol: ({ className, ...props }) => (
    <ol
      className={cn("mb-4 ml-6 list-decimal space-y-2 text-foreground/90", className)}
      {...props}
    />
  ),
  li: ({ className, ...props }) => (
    <li className={cn("text-lg leading-relaxed", className)} {...props} />
  ),
  blockquote: ({ className, ...props }) => (
    <blockquote
      className={cn(
        "mb-4 border-l-4 border-primary pl-4 italic text-muted-foreground",
        className
      )}
      {...props}
    />
  ),
  a: ({ className, href, ...props }) => {
    const isExternal = href?.startsWith("http");
    if (isExternal) {
      return (
        <a
          className={cn(
            "text-primary underline underline-offset-4 hover:text-primary/80 transition-colors",
            className
          )}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          {...props}
        />
      );
    }
    return (
      <Link
        className={cn(
          "text-primary underline underline-offset-4 hover:text-primary/80 transition-colors",
          className
        )}
        href={href || "#"}
        {...props}
      />
    );
  },
  code: ({ className, ...props }) => (
    <code
      className={cn(
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm",
        className
      )}
      {...props}
    />
  ),
  pre: ({ className, ...props }) => (
    <pre
      className={cn(
        "mb-4 overflow-x-auto rounded-lg bg-zinc-950 p-4 text-sm",
        className
      )}
      {...props}
    />
  ),
  img: ({ src, alt, ...props }) => {
    if (!src) return null;
    return (
      <span className="block my-6">
        <Image
          src={src}
          alt={alt || ""}
          width={800}
          height={450}
          className="rounded-lg"
          {...props}
        />
      </span>
    );
  },
  hr: ({ ...props }) => <hr className="my-8 border-border" {...props} />,
  table: ({ className, ...props }) => (
    <div className="mb-4 w-full overflow-x-auto">
      <table
        className={cn("w-full border-collapse text-sm", className)}
        {...props}
      />
    </div>
  ),
  th: ({ className, ...props }) => (
    <th
      className={cn(
        "border border-border bg-muted px-4 py-2 text-left font-semibold",
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }) => (
    <td
      className={cn("border border-border px-4 py-2", className)}
      {...props}
    />
  ),
  strong: ({ className, ...props }) => (
    <strong className={cn("font-semibold text-foreground", className)} {...props} />
  ),
};
