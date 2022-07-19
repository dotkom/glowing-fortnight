// @ts-check

const isProd = process.env.NODE_ENV === 'production';

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  assetPrefix: isProd ? '' : '',
  trailingSlash: true,
  basePath: '',
  cssModules: false,
};

module.exports = nextConfig;
