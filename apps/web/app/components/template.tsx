'use client'

import dynamic from 'next/dynamic'

import Map from '~/components/map'
import { env } from '~/env.mjs'

const SearchField = dynamic(() => import('../../components/map/search-field'), {
  ssr: false,
})

const mapApiKey = env.NEXT_PUBLIC_MAP_API_KEY

const Template = () => {
  return (
    <Map center={[-20.567620032412087, -48.5653164180221]} zoom={12}>
      {({ TileLayer, Marker, Popup }) => (
        <>
          <SearchField apiKey={mapApiKey} />
          <TileLayer
            url={`https://api.mapbox.com/styles/v1/bsignx/clhrifzo2017c01qsh2hpcu0y/tiles/256/{z}/{x}/{y}@2x?access_token=${mapApiKey}`}
            attribution='&copy; <a href="https://www.mapbox.com/">Mapbox</a>'
          />
          <Marker position={[-20.567620032412087, -48.5653164180221]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </>
      )}
    </Map>
  )
}

export default Template
