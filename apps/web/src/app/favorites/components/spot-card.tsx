import { MouseEvent } from 'react'
import { Spot } from '@prisma/client'
import {
  Divider,
  Flex,
  HStack,
  Heading,
  Icons,
  NextChakra,
  Text,
  useDisclosure,
} from '@sportspot/ui'

import { ModalSpotCard } from '~/app/components/modal-spot-card'
import { api } from '~/helpers/trpc/api'
import { getKmDistanceBetweenTwoPoints } from '~/utils/distance'

type Props = {
  spot: Spot
  userLocation: [latitude: number, longitude: number]
  // eslint-disable-next-line no-unused-vars
  onClickFavorite: (spotId: string) => void
}

export const SpotCard = ({ spot, userLocation, onClickFavorite }: Props) => {
  const { data: isFavorite } = api.spot.getFavorite.useQuery({ spotId: spot.id })
  const { data: ratingAverage } = api.spot.getRatingAverage.useQuery({ spotId: spot.id })

  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleClickFavoriteSpot = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    onClickFavorite(spot.id)
  }

  const handleClickOpenModal = () => {
    onOpen()
  }

  return (
    <>
      <ModalSpotCard
        selectedSpot={spot}
        userLocation={userLocation}
        isFavorite={isFavorite}
        ratingAverage={ratingAverage}
        isOpen={isOpen}
        onClose={onClose}
        handleClickFavoriteSpot={handleClickFavoriteSpot}
      />

      <HStack
        tabIndex={0}
        position="relative"
        role="button"
        cursor="pointer"
        bgColor="white"
        borderRadius="2xl"
        w="100%"
        h="100px"
        boxShadow="base"
        alignItems="flex-start"
        onClick={handleClickOpenModal}
      >
        <NextChakra.Image
          width={112}
          height={100}
          borderRadius="14px 0px 0px 14px"
          css={{
            objectFit: 'cover',
          }}
          src={spot.images[0] || '/images/spot/spot-placeholder.jpg'}
          alt={`Imagem from ${spot.name} spot`}
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

        <Flex alignItems="flex-start" pt="3" pb="1" flexDir="column" flex="1" h="100%">
          <Heading size="sm">{spot.name}</Heading>

          <HStack mt="1" spacing="1" alignItems="flex-start">
            <Icons.addressMarker aria-hidden="true" />
            <Text fontSize="2xs" color="gray.300">
              {spot.address}
            </Text>
          </HStack>

          <Divider w="calc(100% + 8px)" ml="-8px" mt="auto" />

          <Flex justifyContent="space-between" alignItems="center" w="100%" pr="4">
            {spot.latitude && spot.longitude && (
              <HStack mt="1" spacing="1">
                <Icons.distanceMarker aria-hidden="true" />
                <Text fontSize="2xs" color="gray.300">
                  {getKmDistanceBetweenTwoPoints(
                    userLocation[0],
                    userLocation[1],
                    spot.latitude,
                    spot.longitude,
                  )}{' '}
                  km
                </Text>
              </HStack>
            )}

            {ratingAverage && (
              <HStack mt="1" spacing="1" alignItems="center" h="100%">
                <Icons.filledStar aria-hidden="true" />
                <Text fontSize="xs" color="black" fontWeight="medium" h="4">
                  {ratingAverage}
                </Text>
              </HStack>
            )}
          </Flex>
        </Flex>
      </HStack>
    </>
  )
}
