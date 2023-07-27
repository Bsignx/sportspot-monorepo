'use client'

import dynamic from 'next/dynamic'

const Main = dynamic(() => import('./components/main'), { ssr: false })

export default function Favorites() {
  return <Main />
}
