;(() => {
  'use strict'
  self.fallback = async (e) => {
    const { destination: n, url: o } = e,
      a = { document: '/~offline', image: !1, audio: !1, video: !1, font: !1 }[n]
    return a ? caches.match(a, { ignoreSearch: !0 }) : Response.error()
  }
})()
