// const runtimeCaching = require('next-pwa/cache')
// const withPWA = require('next-pwa')({
//   dest: 'public',
//   runtimeCaching,
// })

const plugins = []

// plugins.push(withPWA)

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  distDir: 'build',
  reactStrictMode: true,
  transpilePackages: ['@sportspot/ui'],
}

module.exports = module.exports = () => plugins.reduce((acc, next) => next(acc), nextConfig)
