/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  distDir: 'build',
  reactStrictMode: true,
  transpilePackages: ['@sportspot/ui'],
}

module.exports = nextConfig
