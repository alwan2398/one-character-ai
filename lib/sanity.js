import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
    projectId: "5veex363",
    dataset: "production",
    apiVersion: "2024-12-08",
    useCdn: true,
    token: process.env.NEXT_SANITY_API_TOKEN
});

export const urlFor = (source) => imageUrlBuilder(client).image(source);