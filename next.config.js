/* eslint-disable @typescript-eslint/no-var-requires */
const withSass = require('@zeit/next-sass');

const isProd = process.env.NODE_ENV === 'production';

module.exports = withSass({
  assetPrefix: isProd ? '/splash' : '',
  exportTrailingSlash: true,
  basePath: '/splash',
  cssModules: false,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]___[hash:base64:5]',
  },
});
