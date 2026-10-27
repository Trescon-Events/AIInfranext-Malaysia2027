import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_ACTIONS === "true";
const repoName = "AIInfranext-Malaysia2027";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || (isGithubPages ? `/${repoName}` : "");

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  allowedDevOrigins: [
    '192.168.254.105',
    'localhost',
  ],
};

export default nextConfig;
