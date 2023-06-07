import { Spot } from '@prisma/client'
import { Divider, Flex, HStack, Heading, Icons, NextChakra, Text } from '@sportspot/ui'
import { api } from '~/helpers/trpc/api'
import { getHowManyDaysAgo } from '~/utils/date'
import { getKmDistanceBetweenTwoPoints } from '~/utils/distance'

type Props = {
  selectedSpot: Spot
  userLocation: [latitude: number, longitude: number]
}

export const SelectedSpotCard = ({ selectedSpot, userLocation }: Props) => {
  const { spot: sportRouter } = api.useContext()
  const { data: isFavorite } = api.spot.getFavoriteSpot.useQuery({ spotId: selectedSpot.id })
  const { mutate } = api.spot.favoriteSpot.useMutation({
    onSuccess: ({ spotId }) => {
      sportRouter.getFavoriteSpot.invalidate({ spotId })
    },
  })

  const handleClickFavoriteSpot = () => {
    mutate({ spotId: selectedSpot.id })
  }

  return (
    <HStack
      onClick={() => console.log('clicked')}
      tabIndex={0}
      role="button"
      cursor="pointer"
      zIndex="sticky"
      bgColor="white"
      borderRadius="2xl"
      w="80%"
      m="0 auto"
      pos="absolute"
      bottom="2.5rem"
      left="50%"
      h="120px"
      transform="translate(-50%, -50%)"
      boxShadow="base"
      alignItems="flex-start"
    >
      <NextChakra.Image
        width={112}
        height={120}
        borderRadius="14px 0px 0px 14px"
        css={{
          objectFit: 'cover',
        }}
        src={selectedSpot.image || '/images/spot/spot-placeholder.jpg'}
        alt={`Imagem from ${selectedSpot.name} spot`}
      />

      <Flex
        onClick={handleClickFavoriteSpot}
        aria-label="Favorite spot toggle"
        as="button"
        bgColor="white"
        position="absolute"
        boxShadow="base"
        borderRadius="lg"
        w="28px"
        h="28px"
        justifyContent="center"
        alignItems="center"
        top="8px"
        left="68px"
      >
        {isFavorite ? (
          <Icons.favoriteFilled aria-hidden="true" />
        ) : (
          <Icons.favorite aria-hidden="true" />
        )}
      </Flex>

      <Flex alignItems="flex-start" py="3" flexDir="column" flex="1" h="100%">
        <Heading size="sm">{selectedSpot.name}</Heading>
        <Text fontSize="2xs" color="gray.300" mt="1">
          {getHowManyDaysAgo(new Date(selectedSpot.createdAt))} days ago
        </Text>
        <HStack mt="1" spacing="1">
          <Icons.addressMarker aria-hidden="true" />
          <Text fontSize="2xs" color="gray.300">
            {selectedSpot.address}
          </Text>
        </HStack>

        <Divider w="calc(100% + 8px)" ml="-8px" mt="auto" />

        {selectedSpot.latitude && selectedSpot.longitude && (
          <HStack mt="1" spacing="1">
            <Icons.distanceMarker aria-hidden="true" />
            <Text fontSize="2xs" color="gray.300">
              {getKmDistanceBetweenTwoPoints(
                userLocation[0],
                userLocation[1],
                selectedSpot.latitude,
                selectedSpot.longitude,
              )}{' '}
              km
            </Text>
          </HStack>
        )}
      </Flex>
    </HStack>
  )
}
