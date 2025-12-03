import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const repoName = "marquis-golf-media"; // Your repository name

const nextConfig: NextConfig = {
  output: 'export',
  // When deploying to GitHub Pages, the site is served from a subdirectory
  basePath: isProd ? `/${repoName}` : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
