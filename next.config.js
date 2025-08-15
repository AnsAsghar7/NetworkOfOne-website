/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const isGitHubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  // App Router is now stable in Next.js 14, no experimental flag needed
  output: 'export',
  basePath: isGitHubPages ? '/NetworkOfOne-website' : '',
  assetPrefix: isGitHubPages ? '/NetworkOfOne-website/' : '',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
