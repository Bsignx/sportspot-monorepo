'use client'

import { Text, VStack } from '@sportspot/ui'

import { Header } from '~/components/header'
import { DEFAULT_LATITUDE, DEFAULT_LONGITUDE } from '~/config/location'
import { api } from '~/helpers/trpc/api'
import { useGetUserLocation } from '~/hooks/useGetUserLocation'
import { SpotCard } from './spot-card'

const Template = () => {
  const { spot: sportRouter } = api.useContext()
  const { data: favoriteSpots, isLoading } = api.spot.getFavoriteSpots.useQuery()
  const { mutate: mutateFavoriteSpot } = api.spot.favorite.useMutation({
    onSuccess: ({ spotId }) => {
      sportRouter.getFavorite.invalidate({ spotId })
      sportRouter.getFavoriteSpots.invalidate()
    },
  })

  const { location } = useGetUserLocation()

  const userLocation = [
    location?.coords.latitude || DEFAULT_LATITUDE,
    location?.coords.longitude || DEFAULT_LONGITUDE,
  ]

  const handleClickFavoriteSpot = (spotId) => {
    mutateFavoriteSpot({ spotId })
  }

  if (isLoading || !favoriteSpots) {
    // TODO: create loading component
    return <div>loading...</div>
  }

  return (
    <VStack p="6" pt="4" spacing="8">
      <Header title="favorites" />
      {favoriteSpots.length === 0 && <Text>no favorite spots</Text>}

      {favoriteSpots.length > 0 && (
        <VStack w="100%" spacing="4">
          {favoriteSpots.map((spot) => (
            <SpotCard
              key={spot.id}
              spot={spot}
              userLocation={[userLocation[0], userLocation[1]]}
              onClickFavorite={handleClickFavoriteSpot}
            />
          ))}
        </VStack>
      )}
    </VStack>
  )
}

export default Template
