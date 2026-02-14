import { defineQuery } from "next-sanity";

export const POSTS_QUERY = defineQuery(`
  *[_type == "post" && defined(slug.current)] | order(date desc) {
    _id,
    title,
    "slug": slug.current,
    description,
    date,
    author,
    category,
    tags,
    coverImage,
    "readingTime": string(round(length(pt::text(body)) / 5 / 200)) + " min read"
  }
`);

export const POST_QUERY = defineQuery(`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    description,
    date,
    author,
    category,
    tags,
    coverImage,
    body,
    "readingTime": string(round(length(pt::text(body)) / 5 / 200)) + " min read"
  }
`);

export const POST_SLUGS_QUERY = defineQuery(`
  *[_type == "post" && defined(slug.current)] {
    "slug": slug.current
  }
`);

export const CATEGORIES_QUERY = defineQuery(`
  array::unique(*[_type == "post" && defined(category)].category)
`);
