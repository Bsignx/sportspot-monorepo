import { Spot } from '@prisma/client'
import {
  Flex,
  Text,
  Icons,
  HStack,
  Heading,
  Divider,
  NextChakra,
  useDisclosure,
} from '@sportspot/ui'

import { MouseEvent } from 'react'

import { api } from '~/helpers/trpc/api'
import { getHowManyDaysAgo } from '~/utils/date'
import { ModalSpotCard } from './modal-spot-card'
import { getKmDistanceBetweenTwoPoints } from '~/utils/distance'

export type Props = {
  selectedSpot: Spot
  userLocation: [latitude: number, longitude: number]
}

export const SelectedSpotCard = ({ selectedSpot, userLocation }: Props) => {
  const { spot: sportRouter } = api.useContext()
  const { data: isFavorite } = api.spot.getFavorite.useQuery({ spotId: selectedSpot.id })
  const { data: ratingAverage } = api.spot.getRatingAverage.useQuery({ spotId: selectedSpot.id })

  const { isOpen, onOpen, onClose } = useDisclosure()

  const { mutate } = api.spot.favorite.useMutation({
    onSuccess: ({ spotId }) => {
      sportRouter.getFavorite.invalidate({ spotId })
    },
  })

  const handleClickFavoriteSpot = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    mutate({ spotId: selectedSpot.id })
  }

  const handleClickOpenModal = () => {
    onOpen()
  }

  return isOpen ? (
    <ModalSpotCard
      selectedSpot={selectedSpot}
      userLocation={userLocation}
      isFavorite={isFavorite}
      ratingAverage={ratingAverage}
      isOpen={isOpen}
      onClose={onClose}
      handleClickFavoriteSpot={handleClickFavoriteSpot}
    />
  ) : (
    <HStack
      tabIndex={0}
      role="button"
      cursor="pointer"
      zIndex="popover"
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
      onClick={handleClickOpenModal}
    >
      <NextChakra.Image
        width={112}
        height={120}
        borderRadius="14px 0px 0px 14px"
        css={{
          objectFit: 'cover',
        }}
        src={selectedSpot.images[0] || '/images/spot/spot-placeholder.jpg'}
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

      <Flex alignItems="flex-start" pt="3" pb="1" flexDir="column" flex="1" h="100%">
        <Heading size="sm">{selectedSpot.name}</Heading>
        <Text fontSize="2xs" color="gray.300" mt="1">
          {getHowManyDaysAgo(new Date(selectedSpot.createdAt))} days ago
        </Text>

        <HStack mt="1" spacing="1" alignItems="flex-start">
          <Icons.addressMarker aria-hidden="true" />
          <Text fontSize="2xs" color="gray.300">
            {selectedSpot.address}
          </Text>
        </HStack>

        <Divider w="calc(100% + 8px)" ml="-8px" mt="auto" />

        <Flex justifyContent="space-between" alignItems="center" w="100%" pr="4">
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
  )
}
