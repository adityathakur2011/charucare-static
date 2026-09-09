import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  /** Empty for a custom domain. Use BASE_PATH for project pages (e.g. /repo-name). */
  basePath: process.env.BASE_PATH || "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
