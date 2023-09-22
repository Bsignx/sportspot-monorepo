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
  onError?: (error: string) => void
}

export const useGetUserLocation = ({ defaultLocation, onError }: Props = {}) => {
  const [location, setLocation] = useState<GeolocationPosition>()
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation(position || defaultLocation)
      },
      (error) => {
        setLocation(defaultLocation)
        setError(error.message)
        onError?.(error.message)
      },
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { location, error }
}
