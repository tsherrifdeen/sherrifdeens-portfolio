import { PostsByCategoryQueryResult, PostsQueryResult, SinglePostQueryResult } from "../sanity.types";
import { postsByCategoryQuery, postsQuery, singlePostQuery } from "../queries/article";
import {client as sanityClient} from "../lib/client"

// Fetch all posts
export async function getAllPosts(): Promise<PostsQueryResult[]> {
  try {
    return await sanityClient.fetch<PostsQueryResult[]>(postsQuery);
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    return [];
  }
}

// Fetch a single post by slug
export async function getPostBySlug(slug: string): Promise<SinglePostQueryResult | null> {
  try {
    return await sanityClient.fetch<SinglePostQueryResult>(singlePostQuery, { slug });
  } catch (error) {
    console.error(`Failed to fetch post with slug "${slug}":`, error);
    return null;
  }
}

// Fetch posts filtered by category slug
export async function getPostsByCategory(
  categorySlug: string
): Promise<PostsByCategoryQueryResult[]> {
  try {
    return await sanityClient.fetch<PostsByCategoryQueryResult[]>(postsByCategoryQuery, {
      categorySlug,
    });
  } catch (error) {
    console.error(`Failed to fetch posts for category "${categorySlug}":`, error);
    return [];
  }
}

