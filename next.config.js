const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export',
  basePath: '/NetworkOfOne-website',
  assetPrefix: isProd ? '/NetworkOfOne-website/' : '',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};
