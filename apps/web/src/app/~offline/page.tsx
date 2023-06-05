import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'next-pwa example',
}

function Offline() {
  return (
    <>
      <h1>This is offline fallback page</h1>
      <h2>When offline, any page route will fallback to this page</h2>
    </>
  )
}

export default Offline
