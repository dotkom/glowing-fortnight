const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  assetPrefix: isProd ? '/splash' : '',
  trailingSlash: true,
  basePath: '/splash',
  cssModules: false,
};
