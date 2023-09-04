'use client'

import { useState } from 'react'

import { Spot } from '@prisma/client'

import { Box, useToast } from '@sportspot/ui'
import { api } from '~/helpers/trpc/api'
import SpotsMap from './spots-map'
import { SelectedSpotCard } from './selected-spot-card'
import { useGetUserLocation } from '~/hooks/useGetUserLocation'
import { DEFAULT_LATITUDE, DEFAULT_LONGITUDE } from '~/config/location'

const Main = () => {
  const [selectedSpot, setSelectedSpot] = useState<Spot | null>(null)

  const { data: spots, isError } = api.spot.getAll.useQuery()

  const { location } = useGetUserLocation({
    defaultLocation: {
      coords: { latitude: DEFAULT_LATITUDE, longitude: DEFAULT_LONGITUDE },
    },
  })
  const toast = useToast()

  const coords = [
    location?.coords.latitude || DEFAULT_LATITUDE,
    location?.coords.longitude || DEFAULT_LONGITUDE,
  ]

  const hasUserLocation = location?.coords.latitude && location?.coords.longitude

  const handleClickSpotMarker = (spot: Spot) => {
    setSelectedSpot(spot)
  }

  if (isError) toast({ status: 'error', title: 'Error loading Spots' })

  return (
    <Box
      css={{
        height: ['100vh', '100dvh'],
      }}
    >
      {hasUserLocation && (
        <SpotsMap
          spots={spots}
          onClickSpotMarker={handleClickSpotMarker}
          userLocation={[coords[0], coords[1]]}
        />
      )}

      {selectedSpot && (
        <SelectedSpotCard selectedSpot={selectedSpot} userLocation={[coords[0], coords[1]]} />
      )}
    </Box>
  )
}

export default Main
