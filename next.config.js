const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export',
  basePath: isProd ? '/NetworkOfOne-website' : '',
  assetPrefix: isProd ? '/NetworkOfOne-website/' : '',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};
