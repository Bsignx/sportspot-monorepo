import { LeafletMouseEvent } from 'leaflet'
import { useState } from 'react'
import { Location } from '~/types/location'

type Props = {
  onCaptureLocation?: (location: Location) => void
  userLocation: Location
}

export const useCaptureLocation = ({ onCaptureLocation, userLocation }: Props) => {
  const [selectedLocation, setSelectedLocation] = useState<Location>(userLocation)

  const handleLocationFinder = (event: LeafletMouseEvent) => {
    const location = [event.latlng.lat, event.latlng.lng] as Location

    setSelectedLocation(location)

    onCaptureLocation && onCaptureLocation(location)
  }

  return {
    selectedLocation,
    handleLocationFinder,
  }
}
