import type { MetadataRoute } from "next";
import { urlSitio } from "@/lib/empresa";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${urlSitio}/sitemap.xml`,
  };
}
