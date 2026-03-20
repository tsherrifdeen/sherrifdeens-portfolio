import {client as sanityClient} from "../lib/client"
import { CategoriesQueryResult } from "../sanity.types";
import { categoriesQuery } from "../queries/article";
// Fetch all categories
export async function getAllCategories(): Promise<CategoriesQueryResult[]> {
  try {
    return await sanityClient.fetch<CategoriesQueryResult[]>(categoriesQuery);
  } catch (error) {
    console.error("Failed to fetch categories:", error);
    return [];
  }
}