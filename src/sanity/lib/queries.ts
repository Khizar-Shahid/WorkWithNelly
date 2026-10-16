import { groq } from 'next-sanity';

// Query to get all published blog posts ordered newest first
export const postsQuery = groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  category,
  publishedAt,
  excerpt,
  author,
  mainImage
}`;

// Query to get a single post by slug
export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  category,
  publishedAt,
  excerpt,
  author,
  authorBio,
  mainImage,
  body
}`;

// Query to fetch all slugs for static params & dynamic sitemap generation
export const postSlugsQuery = groq`*[_type == "post" && defined(slug.current)] {
  "slug": slug.current
}`;

// Query to fetch recent 3 posts for blog cards or related posts
export const recentPostsQuery = groq`*[_type == "post" && defined(slug.current) && slug.current != $currentSlug] | order(publishedAt desc)[0...3] {
  _id,
  title,
  "slug": slug.current,
  category,
  publishedAt,
  excerpt,
  mainImage
}`;
