import { CSSProperties } from 'react'
import dynamic from 'next/dynamic'
import { Spot } from '@prisma/client'
import * as ReactLeaflet from 'react-leaflet'

import Map from '~/components/map'
import { env } from '~/env'
import { useCaptureLocation } from './useCaptureLocation'
import { Location } from '~/types/location'
import { ClassNames } from '../../../components/map/search-field'

const LocationFinder = dynamic(() => import('./location-finder'), {
  ssr: false,
})

const SearchField = dynamic(() => import('../../../components/map/search-field'), {
  ssr: false,
})

const LazyMarker = dynamic(async () => await import('../../../components/map/marker'), {
  ssr: false,
})

const MAP_API_KEY = env.NEXT_PUBLIC_MAP_API_KEY

type SpotsMapProps = ReactLeaflet.MapContainerProps & {
  spots?: Spot[]
  styles?: CSSProperties
  activeSearchField?: boolean
  userLocation: Location
  // eslint-disable-next-line no-unused-vars
  onClickSpotMarker?: (spot: Spot) => void
  // eslint-disable-next-line no-unused-vars
  onCaptureLocation?: (location: Location) => void
  searchFieldClassNames?: ClassNames
}

const SpotsMap = ({
  spots,
  styles,
  userLocation,
  onClickSpotMarker,
  activeSearchField = true,
  onCaptureLocation,
  searchFieldClassNames,
  ...props
}: SpotsMapProps) => {
  const { handleLocationFinder, selectedLocation } = useCaptureLocation({
    onCaptureLocation,
    userLocation,
  })

  const handleMarkerClick = (spot: Spot) => {
    onClickSpotMarker && onClickSpotMarker(spot)
  }

  return (
    <Map
      zoom={16}
      center={userLocation}
      styles={{
        backgroundColor: '#2a2a2a',
        ...styles,
      }}
      {...props}
    >
      {({ TileLayer }) => (
        <>
          {activeSearchField && (
            <SearchField apiKey={MAP_API_KEY} classNames={searchFieldClassNames} />
          )}

          <TileLayer
            url={`https://api.mapbox.com/styles/v1/bsignx/clmnzk7fs04l201p9e2o23qdu/tiles/256/{z}/{x}/{y}@2x?access_token=${MAP_API_KEY}`}
            attribution='&copy; <a href="https://www.mapbox.com/">Mapbox</a>'
          />

          {onCaptureLocation && (
            <>
              <LocationFinder onClickMap={handleLocationFinder} />
              <LazyMarker position={selectedLocation} />
            </>
          )}

          {spots?.map((spot) => {
            return !!spot.latitude && !!spot.longitude ? (
              <LazyMarker
                key={spot.id}
                position={[spot.latitude, spot.longitude]}
                onClick={() => handleMarkerClick(spot)}
                iconConfig={{
                  iconUrl: `/images/leaflet/tags/${spot.tagName || 'default'}.svg`,
                  shadowUrl: `/images/leaflet/marker-shadow.png`,
                  iconSize: [32, 38],
                  iconAnchor: [12, 41],
                  popupAnchor: [1, -34],
                  tooltipAnchor: [16, -28],
                  shadowSize: [41, 41],
                }}
              />
            ) : null
          })}
        </>
      )}
    </Map>
  )
}

export default SpotsMap
