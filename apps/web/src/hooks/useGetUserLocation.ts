import { useEffect, useState } from 'react'

type GeolocationPosition = {
  coords: {
    latitude: number
    longitude: number
    accuracy: number
    altitude: number | null
    altitudeAccuracy: number | null
    heading: number | null
    speed: number | null
  }
  timestamp: number
}

export const useGetUserLocation = () => {
  const [location, setLocation] = useState<GeolocationPosition | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation(position)
      },
      (error) => {
        setError(error.message)
      },
    )
  }, [])

  return { location, error }
}
