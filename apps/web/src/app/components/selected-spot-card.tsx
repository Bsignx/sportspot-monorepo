import { Spot } from '@prisma/client'
import { Flex, Text, Icons, HStack, Heading, Divider, useDisclosure } from '@sportspot/ui'

import { MouseEvent } from 'react'
import Image from 'next/image'

import { api } from '~/helpers/trpc/api'
import { getHowManyDaysAgo } from '~/utils/date'
import { ModalSpotCard } from './modal-spot-card'
import { getKmDistanceBetweenTwoPoints } from '~/utils/distance'

export type Props = {
  selectedSpot: Spot
  userLocation: [latitude: number, longitude: number]
}

export const SelectedSpotCard = ({ selectedSpot, userLocation }: Props) => {
  const { spot: spotRouter } = api.useContext()
  const { data: isFavorite } = api.spot.getFavorite.useQuery({ spotId: selectedSpot.id })
  const { data: ratingAverage } = api.spot.getRatingAverage.useQuery({ spotId: selectedSpot.id })

  const { isOpen, onOpen, onClose } = useDisclosure()

  const { mutate: mutateFavoriteSpot } = api.spot.favorite.useMutation({
    onSuccess: ({ spotId }) => {
      spotRouter.getFavorite.invalidate({ spotId })
    },
  })

  const handleClickFavoriteSpot = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    mutateFavoriteSpot({ spotId: selectedSpot.id })
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
      bgColor="quinary"
      borderRadius="2xl"
      w="min(90%, 360px)"
      m="0 auto"
      pos="absolute"
      bottom="2.5rem"
      left="50%"
      h="120px"
      transform="translate(-50%, -50%)"
      boxShadow="base"
      alignItems="flex-start"
      onClick={handleClickOpenModal}
      spacing={0}
    >
      <Image
        width={112}
        height={120}
        sizes="100vw"
        style={{
          objectFit: 'cover',
          borderRadius: '14px 0px 0px 14px',
          maxWidth: '100%',
          height: '100%',
        }}
        src={selectedSpot.images[0] || '/images/spot/spot-placeholder.jpg'}
        alt={`Imagem from ${selectedSpot.name} spot`}
      />

      <Flex
        onClick={handleClickFavoriteSpot}
        aria-label="Favorite spot toggle"
        as="button"
        bgColor="quinary"
        position="absolute"
        boxShadow="base"
        borderRadius="lg"
        w="28px"
        h="28px"
        justifyContent="center"
        alignItems="center"
        top="8px"
        left="76px"
      >
        {isFavorite ? <Icons.favoriteFilled aria-hidden /> : <Icons.favorite aria-hidden />}
      </Flex>

      <Flex
        alignItems="flex-start"
        overflow="hidden"
        w="full"
        pt="3"
        pb="1"
        flexDir="column"
        flex="1"
        h="100%"
      >
        <Heading
          size="sm"
          overflow="hidden"
          w="full"
          textOverflow="ellipsis"
          whiteSpace="nowrap"
          pr="2"
          ml="2"
        >
          {selectedSpot.name}
        </Heading>

        <Text ml="2" fontSize="2xs" color="quaternary" mt="1">
          {getHowManyDaysAgo(new Date(selectedSpot.createdAt))} days ago
        </Text>

        <HStack ml="2" mt="1" spacing="1" alignItems="flex-start">
          <Icons.addressMarker aria-hidden />
          <Text fontSize="2xs" color="tertiary">
            {selectedSpot.address}
          </Text>
        </HStack>

        <Divider w="100%" mt="auto" borderColor="septenary" />

        <Flex ml="2" justifyContent="space-between" alignItems="center" w="100%" pr="4">
          {selectedSpot.latitude && selectedSpot.longitude && (
            <HStack mt="1" spacing="1">
              <Icons.distanceMarker aria-hidden />
              <Text fontSize="2xs" color="quaternary">
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
              <Icons.ratingStar aria-hidden />
              <Text fontSize="2xs" color="tertiary" fontWeight="normal" h="4">
                {ratingAverage}
              </Text>
            </HStack>
          )}
        </Flex>
      </Flex>
    </HStack>
  )
}
