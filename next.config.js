// Use dynamic basePath/assetPrefix so local dev (/) works and GitHub Pages (/REPO) works
const isProd = process.env.NODE_ENV === 'production'
const repo = 'NetworkOfOne-website'

module.exports = {
  output: 'export',
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '/',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? `/${repo}` : ''
  }
};
