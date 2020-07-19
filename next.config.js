/* eslint-disable @typescript-eslint/no-var-requires */
const withSass = require('@zeit/next-sass');

module.exports = withSass({
  cssModules: false,
  assetPrefix: isProd ? "/splash/" : "",
  distDir: "splash/.next",
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]___[hash:base64:5]',
  },
});
