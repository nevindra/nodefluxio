import { defineType, defineField } from "sanity";
import { DocumentTextIcon } from "@sanity/icons";

export const postType = defineType({
  name: "post",
  title: "Blog Post",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      type: "text",
      rows: 3,
      validation: (rule) =>
        rule.max(300).warning("Keep it under 300 characters for best SEO"),
    }),
    defineField({
      name: "date",
      type: "date",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "author",
      type: "object",
      fields: [
        defineField({
          name: "name",
          type: "string",
          initialValue: "Nodeflux Team",
        }),
        defineField({
          name: "avatar",
          type: "string",
          initialValue: "/nodeflux-logo-purple.png",
        }),
      ],
    }),
    defineField({
      name: "category",
      type: "string",
      options: {
        list: [
          { title: "Product", value: "Product" },
          { title: "Use Case", value: "Use Case" },
          { title: "Insight", value: "Insight" },
        ],
        layout: "radio",
      },
      initialValue: "Insight",
    }),
    defineField({
      name: "tags",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "coverImage",
      type: "string",
      initialValue: "/hero/visionaire-hero.webp",
    }),
    defineField({
      name: "body",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
      date: "date",
    },
    prepare({ title, subtitle, date }) {
      return {
        title,
        subtitle: `${subtitle || "Uncategorized"} — ${date || "No date"}`,
      };
    },
  },
});
