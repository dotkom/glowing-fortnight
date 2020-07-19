/* eslint-disable @typescript-eslint/no-var-requires */
const withSass = require('@zeit/next-sass');

const isProd = process.env.NODE_ENV === 'production';

module.exports = withSass({
  cssModules: false,
  assetPrefix: isProd ? '/splash/' : '',
  distDir: 'splash/.next',
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]___[hash:base64:5]',
  },
});
