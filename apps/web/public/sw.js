if (!self.define) {
  let e,
    s = {}
  const a = (a, n) => (
    (a = new URL(a + '.js', n).href),
    s[a] ||
      new Promise((s) => {
        if ('document' in self) {
          const e = document.createElement('script')
          ;(e.src = a), (e.onload = s), document.head.appendChild(e)
        } else (e = a), importScripts(a), s()
      }).then(() => {
        let e = s[a]
        if (!e) throw new Error(`Module ${a} didn’t register its module`)
        return e
      })
  )
  self.define = (n, t) => {
    const i = e || ('document' in self ? document.currentScript.src : '') || location.href
    if (s[i]) return
    let c = {}
    const r = (e) => a(e, i),
      d = { module: { uri: i }, exports: c, require: r }
    s[i] = Promise.all(n.map((e) => d[e] || r(e))).then((e) => (t(...e), c))
  }
}
define(['./workbox-b777c91b'], function (e) {
  'use strict'
  importScripts('fallback-17u20tCaaF15oSqMN4bIV.js'),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/static/17u20tCaaF15oSqMN4bIV/_buildManifest.js',
          revision: 'b850379aaa6ee93c4eeb917d9c76585a',
        },
        {
          url: '/_next/static/17u20tCaaF15oSqMN4bIV/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933',
        },
        { url: '/_next/static/chunks/202-1bbbfc1bc62fd2c6.js', revision: '17u20tCaaF15oSqMN4bIV' },
        { url: '/_next/static/chunks/210-581851c6eb4989f4.js', revision: '17u20tCaaF15oSqMN4bIV' },
        { url: '/_next/static/chunks/245.932773ae830b2350.js', revision: '932773ae830b2350' },
        { url: '/_next/static/chunks/29.1d5c21f96b945724.js', revision: '1d5c21f96b945724' },
        { url: '/_next/static/chunks/299-617df7309caee716.js', revision: '17u20tCaaF15oSqMN4bIV' },
        {
          url: '/_next/static/chunks/2e28ede4-e98c3967dc2d7dde.js',
          revision: '17u20tCaaF15oSqMN4bIV',
        },
        { url: '/_next/static/chunks/396-af17e789bc0b702d.js', revision: '17u20tCaaF15oSqMN4bIV' },
        { url: '/_next/static/chunks/397-20aebffc473677b8.js', revision: '17u20tCaaF15oSqMN4bIV' },
        { url: '/_next/static/chunks/432-db032bc20e62981a.js', revision: '17u20tCaaF15oSqMN4bIV' },
        { url: '/_next/static/chunks/641.9f9ca2a3c6a01164.js', revision: '9f9ca2a3c6a01164' },
        { url: '/_next/static/chunks/729-c8b6486f1ead5bbe.js', revision: '17u20tCaaF15oSqMN4bIV' },
        { url: '/_next/static/chunks/854-a5c7220e7f245683.js', revision: '17u20tCaaF15oSqMN4bIV' },
        {
          url: '/_next/static/chunks/877ae01b-869bcd695bc93c8c.js',
          revision: '17u20tCaaF15oSqMN4bIV',
        },
        {
          url: '/_next/static/chunks/90e355c0-967a9b5060f990ca.js',
          revision: '17u20tCaaF15oSqMN4bIV',
        },
        { url: '/_next/static/chunks/958-6a3e119f71649df8.js', revision: '17u20tCaaF15oSqMN4bIV' },
        {
          url: '/_next/static/chunks/app/(authentication)/login/page-a8cc38ed62eb115e.js',
          revision: '17u20tCaaF15oSqMN4bIV',
        },
        {
          url: '/_next/static/chunks/app/(authentication)/register/page-d72b9b62418eace7.js',
          revision: '17u20tCaaF15oSqMN4bIV',
        },
        {
          url: '/_next/static/chunks/app/favorites/page-aad17fd27b55eacf.js',
          revision: '17u20tCaaF15oSqMN4bIV',
        },
        {
          url: '/_next/static/chunks/app/layout-1347e8f98f7c84b1.js',
          revision: '17u20tCaaF15oSqMN4bIV',
        },
        {
          url: '/_next/static/chunks/app/loading-854b767c4ca34400.js',
          revision: '17u20tCaaF15oSqMN4bIV',
        },
        {
          url: '/_next/static/chunks/app/not-found-e6750c3b82523749.js',
          revision: '17u20tCaaF15oSqMN4bIV',
        },
        {
          url: '/_next/static/chunks/app/onboarding/1/page-0d589a5845dfe870.js',
          revision: '17u20tCaaF15oSqMN4bIV',
        },
        {
          url: '/_next/static/chunks/app/onboarding/2/page-ea21a9059c5ebd82.js',
          revision: '17u20tCaaF15oSqMN4bIV',
        },
        {
          url: '/_next/static/chunks/app/page-ce3f08bb70aaf05d.js',
          revision: '17u20tCaaF15oSqMN4bIV',
        },
        {
          url: '/_next/static/chunks/app/profile/page-d5dd857d47ca745e.js',
          revision: '17u20tCaaF15oSqMN4bIV',
        },
        {
          url: '/_next/static/chunks/app/~offline/page-c0c3ca3a7473e71c.js',
          revision: '17u20tCaaF15oSqMN4bIV',
        },
        { url: '/_next/static/chunks/main-37687ea694e80bfd.js', revision: '17u20tCaaF15oSqMN4bIV' },
        {
          url: '/_next/static/chunks/main-app-369a4534f4822b9e.js',
          revision: '17u20tCaaF15oSqMN4bIV',
        },
        {
          url: '/_next/static/chunks/pages/_app-ee1d7b0804697337.js',
          revision: '17u20tCaaF15oSqMN4bIV',
        },
        {
          url: '/_next/static/chunks/pages/_error-bbba1e061bbed81d.js',
          revision: '17u20tCaaF15oSqMN4bIV',
        },
        {
          url: '/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js',
          revision: '837c0df77fd5009c9e46d446188ecfd0',
        },
        {
          url: '/_next/static/chunks/webpack-7d0b8911905c8ec7.js',
          revision: '17u20tCaaF15oSqMN4bIV',
        },
        { url: '/_next/static/css/c1302d12e7da7810.css', revision: 'c1302d12e7da7810' },
        { url: '/_next/static/css/d84ed0945ffcee7e.css', revision: 'd84ed0945ffcee7e' },
        {
          url: '/_next/static/media/10939feefdad71be-s.woff2',
          revision: '72b3ae37567ee5efdf2254b657c36ba9',
        },
        {
          url: '/_next/static/media/1b097aa12b72d9f9-s.woff2',
          revision: 'ba40202b1c1dcacbdbb7bcd2042a410f',
        },
        {
          url: '/_next/static/media/20b8b8f6f47c1e10-s.woff2',
          revision: '7def222d1a45cb1cb7d8c3ae675dbdcc',
        },
        {
          url: '/_next/static/media/370d1cc320ec5619-s.woff2',
          revision: 'a6ff41d10fa89e7f8fec937c243d7428',
        },
        {
          url: '/_next/static/media/376dd8dc38524313-s.p.woff2',
          revision: 'af4d371a10271dafeb343f1eace762bc',
        },
        {
          url: '/_next/static/media/3828f203592f7603-s.woff2',
          revision: 'e9fd398a43c9e51f9ee14e757eaf95d9',
        },
        {
          url: '/_next/static/media/3dbfd66a998aa65d-s.woff2',
          revision: '471e5592b263b338db72492abbe41175',
        },
        {
          url: '/_next/static/media/42715246d8ba3b6f-s.woff2',
          revision: '7aa7e4f59ca0a2d44f3632b38393858c',
        },
        {
          url: '/_next/static/media/51051a7edfeea436-s.woff2',
          revision: 'f1b74fe764967ea8636858297f750d66',
        },
        {
          url: '/_next/static/media/552557e850bd48e4-s.p.woff2',
          revision: 'f38b44e28b9fbdd25d71b17841b1474d',
        },
        {
          url: '/_next/static/media/591327bf3b62a611-s.woff2',
          revision: '0ed299a4bb5262e17e2145783b2c18f1',
        },
        {
          url: '/_next/static/media/6082fd4a454f3845-s.woff2',
          revision: '9df052c9ab7df951a7f4ef04cac8879b',
        },
        {
          url: '/_next/static/media/7777133e901cd5ed-s.p.woff2',
          revision: 'a09f2fccfee35b7247b08a1a266f0328',
        },
        {
          url: '/_next/static/media/839135d04a097cea-s.woff2',
          revision: '79e6e81d255edac7e8627c7e16baccf5',
        },
        {
          url: '/_next/static/media/87c72f23c47212b9-s.woff2',
          revision: '790d0c8dbcd491d29d58f1369c199d40',
        },
        {
          url: '/_next/static/media/8d1a51bb45dd4d14-s.woff2',
          revision: '185244e129c78b5a1e8de9b0319e5f93',
        },
        {
          url: '/_next/static/media/916d3686010a8de2-s.p.woff2',
          revision: '9212f6f9860f9fc6c69b02fedf6db8c3',
        },
        {
          url: '/_next/static/media/9a881e2ac07d406b-s.p.woff2',
          revision: '25b0e113ca7cce3770d542736db26368',
        },
        {
          url: '/_next/static/media/9b44cfc48addbfc9-s.woff2',
          revision: 'b8f12782fb372c92a5c8e3380f926e17',
        },
        {
          url: '/_next/static/media/bd427f25ac24d036-s.p.woff2',
          revision: '5426bf50c8455aab7a3e89d1138eb969',
        },
        {
          url: '/_next/static/media/cfc16507801c472c-s.woff2',
          revision: '0109cbce5509b5bf4513bd548b9deb30',
        },
        {
          url: '/_next/static/media/d869208648ca5469-s.p.woff2',
          revision: '72993dddf88a63e8f226656f7de88e57',
        },
        {
          url: '/_next/static/media/f93b79c1ea023ab6-s.woff2',
          revision: '96b6d54684daa94742f7bfd72a981213',
        },
        { url: '/_next/static/media/layers-2x.9859cd12.png', revision: '9859cd12' },
        { url: '/_next/static/media/layers.ef6db872.png', revision: 'ef6db872' },
        { url: '/_next/static/media/marker-icon.d577052a.png', revision: 'd577052a' },
        { url: '/~offline', revision: '17u20tCaaF15oSqMN4bIV' },
      ],
      { ignoreURLParametersMatching: [] },
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({ response: e }) =>
              e && 'opaqueredirect' === e.type
                ? new Response(e.body, { status: 200, statusText: 'OK', headers: e.headers })
                : e,
          },
          {
            handlerDidError: async ({ request: e }) =>
              'undefined' != typeof self ? self.fallback(e) : Response.error(),
          },
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
          {
            handlerDidError: async ({ request: e }) =>
              'undefined' != typeof self ? self.fallback(e) : Response.error(),
          },
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
          {
            handlerDidError: async ({ request: e }) =>
              'undefined' != typeof self ? self.fallback(e) : Response.error(),
          },
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
          {
            handlerDidError: async ({ request: e }) =>
              'undefined' != typeof self ? self.fallback(e) : Response.error(),
          },
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 2592e3 }),
          {
            handlerDidError: async ({ request: e }) =>
              'undefined' != typeof self ? self.fallback(e) : Response.error(),
          },
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\/_next\/static.+\.js$/i,
      new e.CacheFirst({
        cacheName: 'next-static-js-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
          {
            handlerDidError: async ({ request: e }) =>
              'undefined' != typeof self ? self.fallback(e) : Response.error(),
          },
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
          {
            handlerDidError: async ({ request: e }) =>
              'undefined' != typeof self ? self.fallback(e) : Response.error(),
          },
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          {
            handlerDidError: async ({ request: e }) =>
              'undefined' != typeof self ? self.fallback(e) : Response.error(),
          },
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          {
            handlerDidError: async ({ request: e }) =>
              'undefined' != typeof self ? self.fallback(e) : Response.error(),
          },
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 48, maxAgeSeconds: 86400 }),
          {
            handlerDidError: async ({ request: e }) =>
              'undefined' != typeof self ? self.fallback(e) : Response.error(),
          },
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          {
            handlerDidError: async ({ request: e }) =>
              'undefined' != typeof self ? self.fallback(e) : Response.error(),
          },
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          {
            handlerDidError: async ({ request: e }) =>
              'undefined' != typeof self ? self.fallback(e) : Response.error(),
          },
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          {
            handlerDidError: async ({ request: e }) =>
              'undefined' != typeof self ? self.fallback(e) : Response.error(),
          },
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ sameOrigin: e, url: { pathname: s } }) =>
        !!e && !s.startsWith('/api/auth/') && !!s.startsWith('/api/'),
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
          {
            handlerDidError: async ({ request: e }) =>
              'undefined' != typeof self ? self.fallback(e) : Response.error(),
          },
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ request: e, url: { pathname: s }, sameOrigin: a }) =>
        '1' === e.headers.get('RSC') &&
        '1' === e.headers.get('Next-Router-Prefetch') &&
        a &&
        !s.startsWith('/api/'),
      new e.NetworkFirst({
        cacheName: 'pages-rsc-prefetch',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          {
            handlerDidError: async ({ request: e }) =>
              'undefined' != typeof self ? self.fallback(e) : Response.error(),
          },
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ request: e, url: { pathname: s }, sameOrigin: a }) =>
        '1' === e.headers.get('RSC') && a && !s.startsWith('/api/'),
      new e.NetworkFirst({
        cacheName: 'pages-rsc',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          {
            handlerDidError: async ({ request: e }) =>
              'undefined' != typeof self ? self.fallback(e) : Response.error(),
          },
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ url: { pathname: e }, sameOrigin: s }) => s && !e.startsWith('/api/'),
      new e.NetworkFirst({
        cacheName: 'pages',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          {
            handlerDidError: async ({ request: e }) =>
              'undefined' != typeof self ? self.fallback(e) : Response.error(),
          },
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ sameOrigin: e }) => !e,
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
          {
            handlerDidError: async ({ request: e }) =>
              'undefined' != typeof self ? self.fallback(e) : Response.error(),
          },
        ],
      }),
      'GET',
    )
})
