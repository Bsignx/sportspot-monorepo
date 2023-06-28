import Leaflet from 'leaflet'
import dynamic from 'next/dynamic'

import Map from '~/components/map'
import { Spot } from '@prisma/client'
import * as ReactLeaflet from 'react-leaflet'

import { CSSProperties } from 'react'

import { env } from '~/env'

const SearchField = dynamic(() => import('../../components/map/search-field'), {
  ssr: false,
})

const MAP_API_KEY = env.NEXT_PUBLIC_MAP_API_KEY

type SpotsMapProps = ReactLeaflet.MapContainerProps & {
  spots?: Spot[]
  styles?: CSSProperties
  activeSearchField?: boolean
  userLocation: [latitude: number, longitude: number]
  // eslint-disable-next-line no-unused-vars
  onClickSpotMarker?: (spot: Spot) => void
}

export const SpotsMap = ({
  spots,
  styles,
  userLocation,
  onClickSpotMarker,
  activeSearchField = true,
  ...props
}: SpotsMapProps) => {
  const handleMarkerClick = onClickSpotMarker
    ? (spot: Spot) => {
        onClickSpotMarker(spot)
      }
    : () => {
        console.log('not a function configurate')
      }

  return (
    <Map zoom={12} center={userLocation} styles={styles} {...props}>
      {({ TileLayer, Marker }) => (
        <>
          {activeSearchField && <SearchField apiKey={MAP_API_KEY} />}

          <TileLayer
            url={`https://api.mapbox.com/styles/v1/bsignx/clhrifzo2017c01qsh2hpcu0y/tiles/256/{z}/{x}/{y}@2x?access_token=${MAP_API_KEY}`}
            attribution='&copy; <a href="https://www.mapbox.com/">Mapbox</a>'
          />

          {spots?.map((spot) => (
            <Marker
              key={spot.id}
              position={[spot.latitude, spot.longitude]}
              eventHandlers={{
                click: () => handleMarkerClick(spot),
              }}
              icon={
                new Leaflet.Icon({
                  iconUrl: `/images/leaflet/tags/${spot.tagName}.svg`,
                  shadowUrl: `/images/leaflet/marker-shadow.png`,
                  iconSize: [32, 38],
                  iconAnchor: [12, 41],
                  popupAnchor: [1, -34],
                  tooltipAnchor: [16, -28],
                  shadowSize: [41, 41],
                })
              }
            />
          ))}
        </>
      )}
    </Map>
  )
}
