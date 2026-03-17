

// Fetch all posts
export async function getAllPosts(): Promise<SanityPost[]> {
  try {
    return await sanityClient.fetch<SanityPost[]>(postsQuery);
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    return [];
  }
}

// Fetch a single post by slug
export async function getPostBySlug(slug: string): Promise<SanityPost | null> {
  try {
    return await sanityClient.fetch<SanityPost>(singlePostQuery, { slug });
  } catch (error) {
    console.error(`Failed to fetch post with slug "${slug}":`, error);
    return null;
  }
}

// Fetch posts filtered by category slug
export async function getPostsByCategory(
  categorySlug: string
): Promise<SanityPost[]> {
  try {
    return await sanityClient.fetch<SanityPost[]>(postsByCategoryQuery, {
      categorySlug,
    });
  } catch (error) {
    console.error(`Failed to fetch posts for category "${categorySlug}":`, error);
    return [];
  }
}

// Fetch all categories
export async function getAllCategories(): Promise<SanityCategory[]> {
  try {
    return await sanityClient.fetch<SanityCategory[]>(categoriesQuery);
  } catch (error) {
    console.error("Failed to fetch categories:", error);
    return [];
  }
}