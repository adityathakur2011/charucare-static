import type { MetadataRoute } from "next";

export const dynamic = "force-static";

/** Set NEXT_PUBLIC_SITE_URL in env for production. Used at build time (static-compatible). */
const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://charucare.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
