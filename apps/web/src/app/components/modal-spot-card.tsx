'use client'

import { Favorite } from '@prisma/client'
import {
  Box,
  Text,
  Modal,
  Icons,
  Center,
  VStack,
  HStack,
  Heading,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalContent,
  ModalOverlay,
  useBreakpointValue,
} from '@sportspot/ui'

import { MouseEvent } from 'react'

import { SpotsMap } from './spots-map'
import { Props } from './selected-spot-card'
import { ModalDraggable } from './modal-draggable'
import { isRatingStars } from '~/utils/rating-stars'
import { ModalCarrouselSpot } from './modal-carrousel-spot'
import { getKmDistanceBetweenTwoPoints } from '~/utils/distance'

type ModalSpotCardProps = Props & {
  isFavorite?: Favorite | null
  ratingAverage?: string | null
  isOpen: boolean
  onClose(): void
  // eslint-disable-next-line no-unused-vars
  handleClickFavoriteSpot(e: MouseEvent<HTMLDivElement>): void
}

export const ModalSpotCard = ({
  isOpen,
  onClose,
  userLocation,
  selectedSpot,
  isFavorite,
  ratingAverage,
  handleClickFavoriteSpot,
}: ModalSpotCardProps) => {
  const starSize = useBreakpointValue({ base: 18, md: 22 }, { ssr: false })
  const mapHeighSize = useBreakpointValue({ base: '100px', md: '240px' }, { ssr: false })

  const ratingStars = isRatingStars(ratingAverage!)

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="full"
        closeOnOverlayClick
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent pos="absolute" bottom={0} minH="90dvh" bg="transparent">
          <ModalDraggable onClose={onClose}>
            <ModalCarrouselSpot selectedSpot={selectedSpot} />

            <ModalHeader py={4} px={{ base: 3, md: 6 }} pr={5}>
              <HStack w="full" justify="space-between">
                {selectedSpot.latitude && selectedSpot.longitude && (
                  <HStack mt={1} spacing={1}>
                    <Icons.distanceMarker aria-hidden="true" />
                    <Text fontSize={{ base: '2xs', md: 'xs' }} color="gray.300">
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
                <Box
                  as="button"
                  bgColor="white"
                  boxShadow="base"
                  borderRadius="lg"
                  boxSize={{ base: '40px', md: '46px' }}
                  aria-label="Favorite spot toggle"
                  onClick={handleClickFavoriteSpot}
                >
                  <Center>
                    {isFavorite ? (
                      <Icons.favoriteFilled aria-hidden="true" width={30} height={29} />
                    ) : (
                      <Icons.favorite aria-hidden="true" width={30} height={29} />
                    )}
                  </Center>
                </Box>
              </HStack>

              <VStack align="start">
                <Heading fontSize={{ base: '24px', md: '28px' }} fontWeight="extrabold">
                  {selectedSpot.name}
                </Heading>

                {ratingAverage && (
                  <HStack spacing={2}>
                    {ratingStars.map((isStar, key) =>
                      isStar ? (
                        <Icons.filledStar
                          key={key}
                          width={starSize}
                          height={starSize}
                          aria-hidden="true"
                        />
                      ) : (
                        <Icons.star
                          key={key}
                          width={starSize}
                          height={starSize}
                          aria-hidden="true"
                        />
                      ),
                    )}

                    <Text
                      pl={1}
                      h={4}
                      color="black"
                      fontWeight="semibold"
                      fontSize={{ base: 'sm', md: 'md' }}
                    >
                      {ratingAverage}
                    </Text>
                  </HStack>
                )}
              </VStack>
            </ModalHeader>

            <ModalBody py={0} px={{ base: 3, md: 6 }}>
              <SpotsMap
                mapWidth="100%"
                mapHeight={mapHeighSize}
                spots={[selectedSpot]}
                activeSearchField={false}
                userLocation={[selectedSpot.latitude!, selectedSpot.longitude!]}
              />
            </ModalBody>
            <ModalFooter
              flexDir="column"
              alignItems="start"
              gap={2}
              pb={{ base: 6, md: 14 }}
              px={{ base: 3, md: 6 }}
            >
              <HStack mt={1} spacing={1} alignItems="flex-start">
                <Icons.addressMarker aria-hidden="true" />
                <Text fontSize="2xs" color="gray.300">
                  {selectedSpot.address}
                </Text>
              </HStack>

              <Text fontSize={{ base: 12, md: 14 }} color="gray.300" noOfLines={4}>
                {selectedSpot.description}
              </Text>
            </ModalFooter>
          </ModalDraggable>
        </ModalContent>
      </Modal>
    </>
  )
}
