/* eslint-disable @typescript-eslint/no-var-requires */
const withSass = require('@zeit/next-sass');

module.exports = withSass({
  exportTrailingSlash: true,
  basePath: '/splash',
  cssModules: false,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]___[hash:base64:5]',
  },
});
