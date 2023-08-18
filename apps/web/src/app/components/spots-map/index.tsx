import { CSSProperties } from 'react'
import dynamic from 'next/dynamic'
import { Spot } from '@prisma/client'
import * as ReactLeaflet from 'react-leaflet'

import Map from '~/components/map'
import { env } from '~/env'
import { useCaptureLocation } from './useCaptureLocation'
import { Location } from '~/types/location'

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
}

const SpotsMap = ({
  spots,
  styles,
  userLocation,
  onClickSpotMarker,
  activeSearchField = true,
  onCaptureLocation,
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
    <Map zoom={12} center={userLocation} styles={styles} {...props}>
      {({ TileLayer }) => (
        <>
          {activeSearchField && <SearchField apiKey={MAP_API_KEY} />}

          <TileLayer
            url={`https://api.mapbox.com/styles/v1/bsignx/clhrifzo2017c01qsh2hpcu0y/tiles/256/{z}/{x}/{y}@2x?access_token=${MAP_API_KEY}`}
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
              />
            ) : null
          })}
        </>
      )}
    </Map>
  )
}

export default SpotsMap