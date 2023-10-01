import { MouseEvent } from 'react'
import { Spot } from '@prisma/client'
import Image from 'next/image'
import { Divider, Flex, HStack, Heading, Icons, Text, useDisclosure } from '@sportspot/ui'

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
        bgColor="senary"
        borderRadius="2xl"
        w="100%"
        h="100px"
        alignItems="flex-start"
        onClick={handleClickOpenModal}
        spacing={0}
      >
        <Image
          width={112}
          height={100}
          sizes="100vw"
          style={{
            objectFit: 'cover',
            maxWidth: '100%',
            height: '100%',
            borderRadius: '14px 0px 0px 14px',
          }}
          src={spot.images[0] || '/images/spot/spot-placeholder.jpg'}
          alt={`Imagem from ${spot.name} spot`}
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
          overflow="hidden"
          w="full"
          alignItems="flex-start"
          pt="3"
          pb="1"
          flexDir="column"
          flex="1"
          h="100%"
        >
          <Heading
            size="sm"
            w="full"
            textOverflow="ellipsis"
            overflow="hidden"
            whiteSpace="nowrap"
            pr="3"
            ml="2"
          >
            {spot.name}
          </Heading>

          <HStack mt="1" spacing="1" alignItems="flex-start" ml="2">
            <Icons.addressMarker aria-hidden />
            <Text fontSize="2xs" color="quaternary">
              {spot.address}
            </Text>
          </HStack>

          <Divider w="100%" mt="auto" borderColor="septenary" />

          <Flex ml="2" justifyContent="space-between" alignItems="center" w="100%" pr="4">
            {spot.latitude && spot.longitude && (
              <HStack mt="1" spacing="1">
                <Icons.distanceMarker aria-hidden />
                <Text fontSize="2xs" color="quaternary">
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
                <Icons.ratingStar aria-hidden />
                <Text fontSize="xs" color="tertiary" fontWeight="normal" h="4">
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
