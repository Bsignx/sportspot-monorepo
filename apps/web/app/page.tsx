import dynamic from 'next/dynamic'

const Template = dynamic(() => import('./components/template'), {
  ssr: false,
})

export default function Web() {
  return <Template />
}
