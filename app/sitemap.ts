import type { MetadataRoute } from "next";

const BASE_URL = "https://guyprogaming.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/privacy-policy", "/terms", "/delete-account"];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "yearly",
    priority: route === "" ? 1 : 0.3,
  }));
}
