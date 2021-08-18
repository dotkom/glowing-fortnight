// @ts-check

const isProd = process.env.NODE_ENV === 'production';

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  assetPrefix: isProd ? '/splash' : '',
  trailingSlash: true,
  basePath: '/splash',
  cssModules: false,
};

module.exports = nextConfig;
