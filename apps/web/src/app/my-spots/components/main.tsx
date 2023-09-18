'use client'

import { colors } from '@sportspot/tokens'
import { FloatingButton, Icons, Text, VStack } from '@sportspot/ui'
import Link from 'next/link'

import { Header } from '~/components/header'
import { SpotCard } from './spot-card'
import { api } from '~/helpers/trpc/api'
import { useGetUserLocation } from '~/hooks/useGetUserLocation'
import { DEFAULT_LATITUDE, DEFAULT_LONGITUDE } from '~/config/location'
import { LoadingPage } from '~/components/loading-page'

const Main = () => {
  const { data: userSpots, isLoading } = api.spot.getUserSpots.useQuery()

  const { location } = useGetUserLocation({
    defaultLocation: {
      coords: { latitude: DEFAULT_LATITUDE, longitude: DEFAULT_LONGITUDE },
    },
  })

  const userLocation = [
    location?.coords.latitude || DEFAULT_LATITUDE,
    location?.coords.longitude || DEFAULT_LONGITUDE,
  ]
  const hasUserLocation = location?.coords.latitude && location?.coords.longitude

  if (isLoading || !userSpots) {
    return <LoadingPage />
  }

  return (
    <VStack p="6" pt="4" spacing="8">
      <Header title="my spots" />
      <VStack w="100%" spacing="4">
        {!userSpots?.length && <Text>no spots found</Text>}

        {hasUserLocation &&
          userSpots?.map((spot) => (
            <SpotCard key={spot.id} spot={spot} userLocation={[userLocation[0], userLocation[1]]} />
          ))}
      </VStack>

      <FloatingButton as={Link} href="my-spots/create" bottom="20">
        <Icons.plus size={20} color={colors.secondary} />
      </FloatingButton>
    </VStack>
  )
}

export default Main
