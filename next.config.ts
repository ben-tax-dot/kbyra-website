import type { NextConfig } from "next";

const repo = "REPO_NAME"; // <-- e.g. "kbyra-website"

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,

  // Required for GitHub Pages sub-path hosting:
  basePath: process.env.NODE_ENV === "production" ? `/${repo}` : "",
  assetPrefix: process.env.NODE_ENV === "production" ? `/${repo}/` : "",
};

export default nextConfig;