import { useEffect, useState } from 'react'

type GeolocationPosition = {
  coords: {
    latitude: number
    longitude: number
    accuracy?: number
    altitude?: number | null
    altitudeAccuracy?: number | null
    heading?: number | null
    speed?: number | null
  }
  timestamp?: number
}

type Props = {
  defaultLocation?: GeolocationPosition
}

export const useGetUserLocation = ({ defaultLocation }: Props = {}) => {
  const [location, setLocation] = useState<GeolocationPosition>()
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation(position || defaultLocation)
      },
      (error) => {
        setError(error.message)
      },
    )
  }, [defaultLocation])

  return { location, error }
}
