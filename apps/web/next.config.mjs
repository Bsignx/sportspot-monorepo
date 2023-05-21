/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import('./env.mjs')

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  distDir: 'build',
  transpilePackages: ['@sportspot/ui'],
}
export default config

// const runtimeCaching = require('next-pwa/cache')
// const withPWA = require('next-pwa')({
//   dest: 'public',
//   runtimeCaching,
// })

// const plugins = []

// // plugins.push(withPWA)

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   experimental: {
//     appDir: true,
//   },
//   distDir: 'build',
//   reactStrictMode: true,
//   transpilePackages: ['@sportspot/ui'],
// }

// module.exports = module.exports = () => plugins.reduce((acc, next) => next(acc), nextConfig)
