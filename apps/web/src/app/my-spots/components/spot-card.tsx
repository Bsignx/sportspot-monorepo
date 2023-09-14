import { MouseEvent } from 'react'
import { Spot } from '@prisma/client'
import { Button, Flex, HStack, Heading, Icons, Text, useDisclosure } from '@sportspot/ui'

import { ModalSpotCard } from '~/app/components/modal-spot-card'
import { api } from '~/helpers/trpc/api'
import { getKmDistanceBetweenTwoPoints } from '~/utils/distance'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { SpotDeleteModal } from './spot-delete-modal'

type Props = {
  spot: Spot
  userLocation: [latitude: number, longitude: number]
}

export const SpotCard = ({ spot, userLocation }: Props) => {
  const { spot: sportRouter } = api.useContext()
  const { data: ratingAverage } = api.spot.getRatingAverage.useQuery({ spotId: spot.id })
  const { mutate: deleteSpot } = api.spot.deleteSpot.useMutation({
    onSuccess() {
      sportRouter.getUserSpots.invalidate()
    },
  })

  const {
    isOpen: isOpenSpotModal,
    onOpen: onOpenSpotModal,
    onClose: onCloseSpotModal,
  } = useDisclosure()

  const {
    isOpen: isOpenDeleteModal,
    onOpen: onOpenDeleteModal,
    onClose: onCloseDeleteModal,
  } = useDisclosure()

  const router = useRouter()

  const handleClickOpenModal = () => {
    onOpenSpotModal()
  }

  const handleEditSpot = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
    spotId: string,
  ) => {
    e.stopPropagation()

    router.push(`/my-spots/edit/${spotId}`)
  }

  const handleOpenDeleteModal = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    e.stopPropagation()

    onOpenDeleteModal()
  }

  const handleDeleteSpot = () => {
    deleteSpot({ spotId: spot.id })
    onCloseDeleteModal()
  }

  return (
    <>
      <ModalSpotCard
        selectedSpot={spot}
        userLocation={userLocation}
        ratingAverage={ratingAverage}
        isOpen={isOpenSpotModal}
        onClose={onCloseSpotModal}
      />

      <HStack
        tabIndex={0}
        position="relative"
        role="button"
        cursor="pointer"
        bgColor="white"
        borderRadius="2xl"
        w="full"
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
            flexShrink: 0,
          }}
          src={spot.images[0] || '/images/spot/spot-placeholder.jpg'}
          alt={`Imagem from ${spot.name} spot`}
        />

        <Flex overflow="hidden" flex="1" w="full" flexDirection="column" alignItems="flex-start">
          <Flex w="full" alignItems="flex-start" pt="3" flexDir="column" pr="24px">
            <Heading
              size="sm"
              w="full"
              textOverflow="ellipsis"
              overflow="hidden"
              whiteSpace="nowrap"
            >
              {spot.name}
            </Heading>

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
          <Flex justifyContent="flex-end" pr="2" w="full" mt="-0.5rem">
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
              onClick={handleOpenDeleteModal}
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

            <SpotDeleteModal
              onCloseDeleteModal={onCloseDeleteModal}
              isOpenDeleteModal={isOpenDeleteModal}
              handleDeleteSpot={handleDeleteSpot}
            />
          </Flex>
        </Flex>
      </HStack>
    </>
  )
}
