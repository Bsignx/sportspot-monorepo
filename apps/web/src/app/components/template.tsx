'use client'

import dynamic from 'next/dynamic'
import Leaflet from 'leaflet'

import { env } from '~/env'
import Map from '~/components/map'
import { api } from '~/helpers/trpc/api'
import { useGetUserLocation } from '~/hooks/useGetUserLocation'

const SearchField = dynamic(() => import('../../components/map/search-field'), {
  ssr: false,
})

const MAP_API_KEY = env.NEXT_PUBLIC_MAP_API_KEY
const DEFAULT_LATITUDE = -20.567620032412087
const DEFAULT_LONGITUDE = -48.5653164180221

const Template = () => {
  const { data: spots, isError } = api.spot.getAllSpots.useQuery()

  const { location } = useGetUserLocation()

  const coords = [
    location?.coords.latitude || DEFAULT_LATITUDE,
    location?.coords.longitude || DEFAULT_LONGITUDE,
  ]

  if (isError) return <div>Erro ao carregar os spots</div> // TODO: create error toast

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
          {spots?.map((spot) => (
            <Marker
              key={spot.id}
              position={[spot.latitude, spot.longitude]}
              icon={
                new Leaflet.Icon({
                  iconUrl: `/images/leaflet/tags/${spot.tagName}.png`,
                  shadowUrl: `/images/leaflet/marker-shadow.png`,
                  iconSize: [32, 38],
                  iconAnchor: [12, 41],
                  popupAnchor: [1, -34],
                  tooltipAnchor: [16, -28],
                  shadowSize: [41, 41],
                })
              }
            >
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          ))}
        </>
      )}
    </Map>
  )
}

export default Template
