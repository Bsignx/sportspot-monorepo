/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */

import withPWAInit from '@ducanh2912/next-pwa'

await import('./env.mjs')

const withPWA = withPWAInit({
  dest: 'public',
  scope: '/app',
  sw: 'sw.js',
  fallbacks: { document: '/~offline' },
  disable: process.env.NODE_ENV === 'development',
})

/** @type {import("next").NextConfig} */
export default withPWA({
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
})
