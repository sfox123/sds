import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Find this in your sanity.json
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2023-05-03", // Use a recent date
  useCdn: true, // `false` if you want to ensure fresh data
};

export const sanityClient = createClient(config);

// Helper function for generating image URLs with only the asset reference data in your documents
const builder = imageUrlBuilder(sanityClient);
export function urlFor(source) {
  return builder.image(source);
}
