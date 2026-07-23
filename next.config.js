const path = require("path");

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const repositoryName = "Ediney-Andrade";

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  output: isGitHubPages ? "export" : undefined,
  basePath: isGitHubPages ? `/${repositoryName}` : "",
  assetPrefix: isGitHubPages ? `/${repositoryName}/` : "",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
