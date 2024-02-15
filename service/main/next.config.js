/** @type {import('next').NextConfig} */
// const path = require('path');

const nextConfig = {
  swcMinify: true,
  reactStrictMode: false,
  // output: 'standalone',
  // experimental: {
  //   outputFileTracingRoot: path.join(__dirname, '../../'),
  // }
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'https://stag-server.xquare.app/:path*',
      },
    ]
  },
}

module.exports = nextConfig
