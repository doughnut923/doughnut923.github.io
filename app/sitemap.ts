import { MetadataRoute } from "next";
// import { getBlogPosts } from "./lib/posts";
import { metaData } from "./config";

export const dynamic = "force-static";

const BaseUrl = metaData.baseUrl.endsWith("/")
  ? metaData.baseUrl
  : `${metaData.baseUrl}/`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // let blogs = getBlogPosts().map((post) => ({
  //   url: `${BaseUrl}blog/${post.slug}`,
  //   lastModified: post.metadata.publishedAt,
  // }));

  let routes = [""].map((route) => ({
    url: `${BaseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes];
}
