/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */

import WithPWA from 'next-pwa'
import runtimeCaching from 'next-pwa/cache.js'

await import('./env.mjs')

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  distDir: 'build',
  transpilePackages: ['@sportspot/ui'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

const pwaConfig = WithPWA({
  dest: 'public',
  runtimeCaching,
  disable: process.env.NODE_ENV === 'development',
})

const mergedConfig = {
  ...config,
  ...pwaConfig,
}

export default mergedConfig
