'use client'

import dynamic from 'next/dynamic'

import Map from '~/components/map'
import { env } from '~/env.mjs'
import { useGetUserLocation } from '~/hooks/useGetUserLocation'

const SearchField = dynamic(() => import('../../components/map/search-field'), {
  ssr: false,
})

const MAP_API_KEY = env.NEXT_PUBLIC_MAP_API_KEY
const DEFAULT_LATITUDE = -20.567620032412087
const DEFAULT_LONGITUDE = -48.5653164180221

const Template = () => {
  const { location, error } = useGetUserLocation()

  if (error) {
    return <p>{error}</p>
  }

  const coords = [
    location?.coords.latitude || DEFAULT_LATITUDE,
    location?.coords.longitude || DEFAULT_LONGITUDE,
  ]

  return (
    <Map center={coords} zoom={12}>
      {({ TileLayer, Marker, Popup }) => (
        <>
          <SearchField apiKey={MAP_API_KEY} />
          <TileLayer
            url={`https://api.mapbox.com/styles/v1/bsignx/clhrifzo2017c01qsh2hpcu0y/tiles/256/{z}/{x}/{y}@2x?access_token=${MAP_API_KEY}`}
            attribution='&copy; <a href="https://www.mapbox.com/">Mapbox</a>'
          />
          <Marker position={coords}>
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
