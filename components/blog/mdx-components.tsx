import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { MDXComponents } from "mdx/types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type MdxProps = Record<string, any>;

export const mdxComponents: MDXComponents = {
  h1: ({ className, ref: _ref, ...props }: MdxProps) => (
    <h1
      className={cn(
        "mt-8 mb-4 text-3xl font-bold tracking-tight text-foreground",
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ref: _ref, ...props }: MdxProps) => (
    <h2
      className={cn(
        "mt-8 mb-4 text-2xl font-semibold tracking-tight text-foreground border-b pb-2",
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ref: _ref, ...props }: MdxProps) => (
    <h3
      className={cn(
        "mt-6 mb-3 text-xl font-semibold tracking-tight text-foreground",
        className
      )}
      {...props}
    />
  ),
  h4: ({ className, ref: _ref, ...props }: MdxProps) => (
    <h4
      className={cn(
        "mt-4 mb-2 text-lg font-semibold tracking-tight text-foreground",
        className
      )}
      {...props}
    />
  ),
  p: ({ className, ref: _ref, ...props }: MdxProps) => (
    <p
      className={cn(
        "mb-4 text-lg leading-relaxed text-foreground/90",
        className
      )}
      {...props}
    />
  ),
  ul: ({ className, ref: _ref, ...props }: MdxProps) => (
    <ul
      className={cn("mb-4 ml-6 list-disc space-y-2 text-foreground/90", className)}
      {...props}
    />
  ),
  ol: ({ className, ref: _ref, ...props }: MdxProps) => (
    <ol
      className={cn("mb-4 ml-6 list-decimal space-y-2 text-foreground/90", className)}
      {...props}
    />
  ),
  li: ({ className, ref: _ref, ...props }: MdxProps) => (
    <li className={cn("text-lg leading-relaxed", className)} {...props} />
  ),
  blockquote: ({ className, ref: _ref, ...props }: MdxProps) => (
    <blockquote
      className={cn(
        "mb-4 border-l-4 border-primary pl-4 italic text-muted-foreground",
        className
      )}
      {...props}
    />
  ),
  a: ({ className, href, ref: _ref, ...props }: MdxProps) => {
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
  code: ({ className, ref: _ref, ...props }: MdxProps) => (
    <code
      className={cn(
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm",
        className
      )}
      {...props}
    />
  ),
  pre: ({ className, ref: _ref, ...props }: MdxProps) => (
    <pre
      className={cn(
        "mb-4 overflow-x-auto rounded-lg bg-zinc-950 p-4 text-sm",
        className
      )}
      {...props}
    />
  ),
  img: ({ src, alt }: MdxProps) => {
    if (!src) return null;
    return (
      <span className="block my-6">
        <Image
          src={src}
          alt={alt || ""}
          width={800}
          height={450}
          className="rounded-lg"
        />
      </span>
    );
  },
  hr: ({ ref: _ref, ...props }: MdxProps) => <hr className="my-8 border-border" {...props} />,
  table: ({ className, ref: _ref, ...props }: MdxProps) => (
    <div className="mb-4 w-full overflow-x-auto">
      <table
        className={cn("w-full border-collapse text-sm", className)}
        {...props}
      />
    </div>
  ),
  th: ({ className, ref: _ref, ...props }: MdxProps) => (
    <th
      className={cn(
        "border border-border bg-muted px-4 py-2 text-left font-semibold",
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ref: _ref, ...props }: MdxProps) => (
    <td
      className={cn("border border-border px-4 py-2", className)}
      {...props}
    />
  ),
  strong: ({ className, ref: _ref, ...props }: MdxProps) => (
    <strong className={cn("font-semibold text-foreground", className)} {...props} />
  ),
};
