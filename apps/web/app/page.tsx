import dynamic from 'next/dynamic'

const Map = dynamic(() => import('./components/template'), {
  ssr: false,
})

export default function Web() {
  return <Map />
}
