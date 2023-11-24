/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: process.env.GITHUB_PAGES ? '/millionaire' : '',
  assetPrefix: process.env.GITHUB_PAGES ? '/millionaire/' : '',
}

export default nextConfig