if (!self.define) {
  let e,
    s = {}
  const i = (i, n) => (
    (i = new URL(i + '.js', n).href),
    s[i] ||
      new Promise((s) => {
        if ('document' in self) {
          const e = document.createElement('script')
          ;(e.src = i), (e.onload = s), document.head.appendChild(e)
        } else (e = i), importScripts(i), s()
      }).then(() => {
        let e = s[i]
        if (!e) throw new Error(`Module ${i} didn’t register its module`)
        return e
      })
  )
  self.define = (n, a) => {
    const t = e || ('document' in self ? document.currentScript.src : '') || location.href
    if (s[t]) return
    let c = {}
    const r = (e) => i(e, t),
      f = { module: { uri: t }, exports: c, require: r }
    s[t] = Promise.all(n.map((e) => f[e] || r(e))).then((e) => (a(...e), c))
  }
}
define(['./workbox-b777c91b'], function (e) {
  'use strict'
  importScripts('fallback-4EiIfymqAGOYmU9MIVxrz.js'),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/static/4EiIfymqAGOYmU9MIVxrz/_buildManifest.js',
          revision: '642657e93efdd4a80646a8212022b312',
        },
        {
          url: '/_next/static/4EiIfymqAGOYmU9MIVxrz/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933',
        },
        { url: '/_next/static/chunks/189.9894ca8468a46c56.js', revision: '9894ca8468a46c56' },
        {
          url: '/_next/static/chunks/18b16e15-391b462de693fcf5.js',
          revision: '4EiIfymqAGOYmU9MIVxrz',
        },
        { url: '/_next/static/chunks/209-c302ed4e3889137b.js', revision: '4EiIfymqAGOYmU9MIVxrz' },
        { url: '/_next/static/chunks/214.1cc1b8ddf5a5d703.js', revision: '1cc1b8ddf5a5d703' },
        { url: '/_next/static/chunks/268-71e80dfdbb069f71.js', revision: '4EiIfymqAGOYmU9MIVxrz' },
        { url: '/_next/static/chunks/325-ff617d1a79a9d358.js', revision: '4EiIfymqAGOYmU9MIVxrz' },
        { url: '/_next/static/chunks/327.630558623416a173.js', revision: '630558623416a173' },
        { url: '/_next/static/chunks/344-6b815a9ca8168d5e.js', revision: '4EiIfymqAGOYmU9MIVxrz' },
        { url: '/_next/static/chunks/4714d18d.5e6f64c7a15d83dc.js', revision: '5e6f64c7a15d83dc' },
        { url: '/_next/static/chunks/500-5a60fe7ffb873d77.js', revision: '4EiIfymqAGOYmU9MIVxrz' },
        { url: '/_next/static/chunks/570-22a34d3c4d4702cd.js', revision: '4EiIfymqAGOYmU9MIVxrz' },
        { url: '/_next/static/chunks/574-8e32e0b3584f081c.js', revision: '4EiIfymqAGOYmU9MIVxrz' },
        {
          url: '/_next/static/chunks/65ec897e-dd6a66c34c8114cd.js',
          revision: '4EiIfymqAGOYmU9MIVxrz',
        },
        { url: '/_next/static/chunks/668-39c51b3416941643.js', revision: '4EiIfymqAGOYmU9MIVxrz' },
        { url: '/_next/static/chunks/707-1b837188cb1c1b3e.js', revision: '4EiIfymqAGOYmU9MIVxrz' },
        { url: '/_next/static/chunks/721-a97aa534cc6e3b11.js', revision: '4EiIfymqAGOYmU9MIVxrz' },
        { url: '/_next/static/chunks/772-f73256d9d4db89f2.js', revision: '4EiIfymqAGOYmU9MIVxrz' },
        { url: '/_next/static/chunks/780.274f70aef0be5407.js', revision: '274f70aef0be5407' },
        { url: '/_next/static/chunks/790-274694381d40db34.js', revision: '4EiIfymqAGOYmU9MIVxrz' },
        { url: '/_next/static/chunks/862-4096206804d4cccf.js', revision: '4EiIfymqAGOYmU9MIVxrz' },
        { url: '/_next/static/chunks/927.6de47ae53fc9e196.js', revision: '6de47ae53fc9e196' },
        { url: '/_next/static/chunks/966.689feb1f9741bb52.js', revision: '689feb1f9741bb52' },
        {
          url: '/_next/static/chunks/app/(authentication)/login/page-87108cb7622502ea.js',
          revision: '4EiIfymqAGOYmU9MIVxrz',
        },
        {
          url: '/_next/static/chunks/app/(authentication)/register/page-5e65374dd4e80160.js',
          revision: '4EiIfymqAGOYmU9MIVxrz',
        },
        {
          url: '/_next/static/chunks/app/favorites/page-be6ea0f630b976ef.js',
          revision: '4EiIfymqAGOYmU9MIVxrz',
        },
        {
          url: '/_next/static/chunks/app/layout-a990e06f87313990.js',
          revision: '4EiIfymqAGOYmU9MIVxrz',
        },
        {
          url: '/_next/static/chunks/app/loading-fa3db6b5504aa17c.js',
          revision: '4EiIfymqAGOYmU9MIVxrz',
        },
        {
          url: '/_next/static/chunks/app/my-spots/create/page-2a19b5fc21f7239d.js',
          revision: '4EiIfymqAGOYmU9MIVxrz',
        },
        {
          url: '/_next/static/chunks/app/my-spots/edit/%5BspotId%5D/page-5a95732db63ded7b.js',
          revision: '4EiIfymqAGOYmU9MIVxrz',
        },
        {
          url: '/_next/static/chunks/app/my-spots/page-f53ceb6037b936b6.js',
          revision: '4EiIfymqAGOYmU9MIVxrz',
        },
        {
          url: '/_next/static/chunks/app/not-found-4a9ab826975bcec3.js',
          revision: '4EiIfymqAGOYmU9MIVxrz',
        },
        {
          url: '/_next/static/chunks/app/onboarding/1/page-edd1ad442995d5f5.js',
          revision: '4EiIfymqAGOYmU9MIVxrz',
        },
        {
          url: '/_next/static/chunks/app/onboarding/2/page-09395ae9143d6e3c.js',
          revision: '4EiIfymqAGOYmU9MIVxrz',
        },
        {
          url: '/_next/static/chunks/app/page-744b6a1083369c51.js',
          revision: '4EiIfymqAGOYmU9MIVxrz',
        },
        {
          url: '/_next/static/chunks/app/profile/page-7aee6914f2da1637.js',
          revision: '4EiIfymqAGOYmU9MIVxrz',
        },
        {
          url: '/_next/static/chunks/app/~offline/page-142162707310f056.js',
          revision: '4EiIfymqAGOYmU9MIVxrz',
        },
        {
          url: '/_next/static/chunks/c260e7fb-0ec17de9639c337c.js',
          revision: '4EiIfymqAGOYmU9MIVxrz',
        },
        {
          url: '/_next/static/chunks/f6bdd460-b6d8bf673e8c2782.js',
          revision: '4EiIfymqAGOYmU9MIVxrz',
        },
        {
          url: '/_next/static/chunks/framework-5914f800e5c1bf38.js',
          revision: '4EiIfymqAGOYmU9MIVxrz',
        },
        { url: '/_next/static/chunks/main-a97fd4c8400547f6.js', revision: '4EiIfymqAGOYmU9MIVxrz' },
        {
          url: '/_next/static/chunks/main-app-749746951f87fb5c.js',
          revision: '4EiIfymqAGOYmU9MIVxrz',
        },
        {
          url: '/_next/static/chunks/pages/_app-afdf1ca42a688b5f.js',
          revision: '4EiIfymqAGOYmU9MIVxrz',
        },
        {
          url: '/_next/static/chunks/pages/_error-6269405d6c922cb3.js',
          revision: '4EiIfymqAGOYmU9MIVxrz',
        },
        {
          url: '/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js',
          revision: '79330112775102f91e1010318bae2bd3',
        },
        {
          url: '/_next/static/chunks/webpack-8a85e33b7b522e0f.js',
          revision: '4EiIfymqAGOYmU9MIVxrz',
        },
        { url: '/_next/static/css/3b43d30c29f138ad.css', revision: '3b43d30c29f138ad' },
        { url: '/_next/static/css/7efee04624815c5c.css', revision: '7efee04624815c5c' },
        { url: '/_next/static/css/c1302d12e7da7810.css', revision: 'c1302d12e7da7810' },
        {
          url: '/_next/static/media/0596140cb8d9223a-s.woff2',
          revision: 'ddd5de66d4a7c56eeac6e0b10c5d8521',
        },
        {
          url: '/_next/static/media/10939feefdad71be-s.woff2',
          revision: '72b3ae37567ee5efdf2254b657c36ba9',
        },
        {
          url: '/_next/static/media/1a4dd1d7cd3232ea-s.woff2',
          revision: '91c6fe4b62b5ebda5ccee3c4aa1eb33d',
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
          url: '/_next/static/media/341baa6ce7a16e81-s.woff2',
          revision: '0c7b4bd9156673a090be9999002eaab1',
        },
        {
          url: '/_next/static/media/356abdd51b933898-s.woff2',
          revision: '4ed5a85b9b460c31a44ba541e277bcc0',
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
          url: '/_next/static/media/51051a7edfeea436-s.woff2',
          revision: 'f1b74fe764967ea8636858297f750d66',
        },
        {
          url: '/_next/static/media/591327bf3b62a611-s.woff2',
          revision: '0ed299a4bb5262e17e2145783b2c18f1',
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
          url: '/_next/static/media/c22ccc5eb58b83e1-s.p.woff2',
          revision: '8a051a2b61e4a766fff21bb106142860',
        },
        {
          url: '/_next/static/media/d70c23d6fe66d464-s.woff2',
          revision: '7abbd25026a8e3994d885bd8704b9588',
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
        { url: '/~offline', revision: '4EiIfymqAGOYmU9MIVxrz' },
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
      ({ request: e, url: { pathname: s }, sameOrigin: i }) =>
        '1' === e.headers.get('RSC') &&
        '1' === e.headers.get('Next-Router-Prefetch') &&
        i &&
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
      ({ request: e, url: { pathname: s }, sameOrigin: i }) =>
        '1' === e.headers.get('RSC') && i && !s.startsWith('/api/'),
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
