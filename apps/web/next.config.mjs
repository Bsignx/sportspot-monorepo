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
    legacyBrowsers: false,
    outputFileTracingExcludes: {
      '*': ['**swc/core**'],
    },
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
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'sportspot-images.s3.sa-east-1.amazonaws.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
})
