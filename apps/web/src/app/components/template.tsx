'use client'

import { useState } from 'react'

import { Spot } from '@prisma/client'

import { useToast } from '@sportspot/ui'
import { api } from '~/helpers/trpc/api'
import { SpotsMap } from './spots-map'
import { SelectedSpotCard } from './selected-spot-card'
import { useGetUserLocation } from '~/hooks/useGetUserLocation'

const DEFAULT_LATITUDE = -20.567620032412087
const DEFAULT_LONGITUDE = -48.5653164180221

const Template = () => {
  const [selectedSpot, setSelectedSpot] = useState<Spot | null>(null)

  const { data: spots, isError } = api.spot.getAll.useQuery()

  const { location } = useGetUserLocation()
  const toast = useToast()

  const coords = [
    location?.coords.latitude || DEFAULT_LATITUDE,
    location?.coords.longitude || DEFAULT_LONGITUDE,
  ]

  const handleClickSpotMarker = (spot: Spot) => {
    setSelectedSpot(spot)
  }

  if (isError) toast({ status: 'error', title: 'Error loading Spots' })

  return (
    <>
      <SpotsMap
        spots={spots}
        onClickSpotMarker={handleClickSpotMarker}
        userLocation={[coords[0], coords[1]]}
      />
      {selectedSpot && (
        <SelectedSpotCard selectedSpot={selectedSpot} userLocation={[coords[0], coords[1]]} />
      )}
    </>
  )
}

export default Template
