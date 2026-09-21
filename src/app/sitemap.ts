import type { MetadataRoute } from "next";
import { SITE_URL } from "./siteUrl";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: `${SITE_URL}/`, lastModified, priority: 1 },
    { url: `${SITE_URL}/resume`, lastModified, priority: 0.8 },
  ];
}
