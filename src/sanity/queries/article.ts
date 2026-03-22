import { groq } from "next-sanity";

export const postsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    "author": author-> {
      name,
      "image": image.asset->url
    },
    "mainImage": {
      "url": mainImage.asset->url,
      "alt": mainImage.alt
    },
    "categories": categories[]-> {
      _id,
      title,
      slug
    },
    body
  }
`;

export const singlePostQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    publishedAt,
    "author": author-> {
      name,
      "image": image.asset->url
    },
    "mainImage": {
      "url": mainImage.asset->url,
      "alt": mainImage.alt
    },
    "categories": categories[]-> {
      _id,
      title,
      slug
    },
    body
  }
`;

export const postsByCategoryQuery = groq`
  *[_type == "post" && $categorySlug in categories[]->slug.current] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    "author": author-> {
      name,
      "image": image.asset->url
    },
    "mainImage": {
      "url": mainImage.asset->url,
      "alt": mainImage.alt
    },
    "categories": categories[]-> {
      _id,
      title,
      slug
    },
    "excerpt": pt::text(body)[0...150] + "..."
  }
`;

export const categoriesQuery = groq`
  *[_type == "category"] | order(title asc) {
    _id,
    title,
    slug
  }
`;