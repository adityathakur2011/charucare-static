import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/charucare-static",
  assetPrefix: "/charucare-static/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
