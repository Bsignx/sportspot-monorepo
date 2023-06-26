import { Spot } from '@prisma/client'
import { Text, VStack } from '@sportspot/ui'

import { SpotCard } from './spot-card'
import { DEFAULT_LATITUDE, DEFAULT_LONGITUDE } from '~/config/location'
import { useGetUserLocation } from '~/hooks/useGetUserLocation'
import { api } from '~/helpers/trpc/api'

type Props = {
  favoriteSpots: Spot[]
  search: string
}

export const SpotList = ({ favoriteSpots, search }: Props) => {
  const { spot: sportRouter } = api.useContext()
  const { mutate: mutateFavoriteSpot } = api.spot.favorite.useMutation({
    onSuccess: ({ spotId }) => {
      sportRouter.getFavorite.invalidate({ spotId })
      sportRouter.getFavoriteSpots.invalidate()
    },
  })

  const filteredFavoriteSpots =
    favoriteSpots?.filter((spot) => spot.name.toLowerCase().includes(search.toLowerCase())) || []

  const { location } = useGetUserLocation()

  const userLocation = [
    location?.coords.latitude || DEFAULT_LATITUDE,
    location?.coords.longitude || DEFAULT_LONGITUDE,
  ]

  const handleClickFavoriteSpot = (spotId) => {
    mutateFavoriteSpot({ spotId })
  }

  if (!favoriteSpots || favoriteSpots.length === 0) {
    return <Text>no favorite spots yet</Text>
  }

  return (
    <>
      {filteredFavoriteSpots.length > 0 ? (
        <>
          <VStack w="100%" spacing="4">
            {filteredFavoriteSpots.map((spot) => (
              <SpotCard
                key={spot.id}
                spot={spot}
                userLocation={[userLocation[0], userLocation[1]]}
                onClickFavorite={handleClickFavoriteSpot}
              />
            ))}
          </VStack>
        </>
      ) : (
        <Text>no spots found</Text>
      )}
    </>
  )
}
