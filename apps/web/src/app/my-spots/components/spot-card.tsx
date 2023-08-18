import { MouseEvent } from 'react'
import { Spot } from '@prisma/client'
import { Button, Flex, HStack, Heading, Icons, Text, useDisclosure } from '@sportspot/ui'

import { ModalSpotCard } from '~/app/components/modal-spot-card'
import { api } from '~/helpers/trpc/api'
import { getKmDistanceBetweenTwoPoints } from '~/utils/distance'
import Image from 'next/image'

type Props = {
  spot: Spot
  userLocation: [latitude: number, longitude: number]
}

export const SpotCard = ({ spot, userLocation }: Props) => {
  const { data: ratingAverage } = api.spot.getRatingAverage.useQuery({ spotId: spot.id })

  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleClickOpenModal = () => {
    onOpen()
  }

  const handleEditSpot = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
    spotId: string,
  ) => {
    e.stopPropagation()

    console.log('edit spot', spotId)
  }

  const handleDeleteSpot = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
    spotId: string,
  ) => {
    e.stopPropagation()

    console.log('delete spot', spotId)
  }

  return (
    <>
      <ModalSpotCard
        selectedSpot={spot}
        userLocation={userLocation}
        ratingAverage={ratingAverage}
        isOpen={isOpen}
        onClose={onClose}
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
        <Image
          width="112"
          height="100"
          sizes="100vw"
          style={{
            objectFit: 'cover',
            height: '100%',
            maxWidth: '100%',
            borderRadius: '14px 0px 0px 14px',
          }}
          src={spot.images[0] || '/images/spot/spot-placeholder.jpg'}
          alt={`Imagem from ${spot.name} spot`}
        />

        <Flex alignItems="flex-start" pt="3" pb="1" flexDir="column" flex="1" h="100%">
          <Heading size="sm">{spot.name}</Heading>

          <HStack mt="1" spacing="1" alignItems="flex-start">
            <Icons.addressMarker aria-hidden />
            <Text fontSize="2xs" color="gray.300">
              {spot.address}
            </Text>
          </HStack>

          <Flex justifyContent="space-between" alignItems="center" w="100%" pr="4" minW="4.4rem">
            {spot.latitude && spot.longitude && (
              <HStack mt="1" spacing="1">
                <Icons.distanceMarker aria-hidden />
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
          </Flex>
        </Flex>
        <Flex h="100%" alignItems="flex-end" pr="2" flexWrap="wrap">
          <Button
            onClick={(e) => handleEditSpot(e, spot.id)}
            aria-label="edit spot"
            variant="unstyled"
            display="flex"
            alignItems="center"
            justifyContent="center"
            w="36px"
            h="36px"
          >
            <Icons.mySpots.edit aria-hidden />
          </Button>
          <Button
            onClick={(e) => handleDeleteSpot(e, spot.id)}
            aria-label="delete spot"
            variant="unstyled"
            display="flex"
            alignItems="center"
            justifyContent="center"
            pt="1px"
            w="36px"
            h="36px"
          >
            <Icons.mySpots.delete aria-hidden />
          </Button>
        </Flex>
      </HStack>
    </>
  )
}
