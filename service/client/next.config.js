/** @type {import('next').NextConfig} */
// const path = require('path');

const nextConfig = {
  swcMinify: true,
  // output: 'standalone',
  // experimental: {
  //   outputFileTracingRoot: path.join(__dirname, '../../'),
  // }
  images: {
    domains: ['gdimg.gmarket.co.kr'] /** 더미데이터를 사용하기위하여 잠시 도메인을 추가함. 추후 삭제 필요 */,
  },
}

module.exports = nextConfig
