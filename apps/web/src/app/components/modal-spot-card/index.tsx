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

import SpotsMap from '../spots-map'
import { BottomSheet } from '../bottom-sheet'
import { Props } from '../selected-spot-card'
import { CarrouselSpot } from '../carrousel-spot'
import { getRatingStars } from '~/utils/get-rating-stars'
import { getKmDistanceBetweenTwoPoints } from '~/utils/distance'

const starSize = 18
const favSize = 30

type ModalSpotCardProps = Props & {
  isFavorite?: Favorite | null
  ratingAverage?: string | null
  isOpen: boolean
  onClose(): void
  // eslint-disable-next-line no-unused-vars
  handleClickFavoriteSpot?: (e: MouseEvent<HTMLDivElement>) => void
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
  const mapHeighSize = useBreakpointValue({ base: '132px', md: '240px' }, { ssr: false })

  const ratingStars = getRatingStars(ratingAverage!)

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
        <ModalContent pos="absolute" bottom={0} bg="transparent" css={{ minHeight: '90dvh' }}>
          <BottomSheet onClose={onClose}>
            <CarrouselSpot selectedSpot={selectedSpot} />

            <ModalHeader p="1rem 1.25rem 1rem 0.875rem">
              <HStack w="full" justify="space-between">
                {selectedSpot.latitude && selectedSpot.longitude && (
                  <HStack spacing={1} align="end">
                    <Icons.distanceMarker aria-hidden="true" width={14} height={14} />
                    <Text
                      fontSize="0.6875rem"
                      lineHeight="shorter"
                      color="quaternary"
                      fontWeight="thin"
                    >
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

                {handleClickFavoriteSpot && (
                  <Box
                    as="button"
                    bgColor="quinary"
                    boxShadow="base"
                    borderRadius="lg"
                    boxSize={{ base: '40px', md: '46px' }}
                    aria-label="Favorite spot toggle"
                    onClick={handleClickFavoriteSpot}
                  >
                    <Center>
                      {isFavorite ? (
                        <Icons.favoriteFilled
                          aria-hidden
                          style={{ width: favSize, height: favSize }}
                        />
                      ) : (
                        <Icons.favorite aria-hidden style={{ width: favSize, height: favSize }} />
                      )}
                    </Center>
                  </Box>
                )}
              </HStack>

              <VStack align="start">
                <Heading fontSize="1.5rem" fontWeight="bold">
                  {selectedSpot.name}
                </Heading>

                {ratingAverage && (
                  <HStack spacing={1} align="start">
                    {ratingStars.map((isStar, key) =>
                      isStar ? (
                        <Icons.filledStar
                          key={key}
                          aria-hidden
                          style={{ width: starSize, height: starSize }}
                        />
                      ) : (
                        <Icons.outlineStar
                          key={key}
                          aria-hidden
                          style={{ width: starSize, height: starSize }}
                        />
                      ),
                    )}

                    <Text
                      pl="4px"
                      color="quaternary"
                      fontSize="14px"
                      lineHeight={6}
                      fontWeight="medium"
                    >
                      {ratingAverage}
                    </Text>
                  </HStack>
                )}
              </VStack>
            </ModalHeader>

            <ModalBody p="0px 14px">
              <SpotsMap
                zoom={16}
                spots={[selectedSpot]}
                activeSearchField={false}
                styles={{
                  width: '100%',
                  height: mapHeighSize,
                  borderRadius: '14px',
                }}
                userLocation={[selectedSpot.latitude!, selectedSpot.longitude!]}
              />
            </ModalBody>

            <ModalFooter gap={3} flexDir="column" alignItems="start" p="24px 14px">
              <HStack mt={1} spacing={1} alignItems="flex-start">
                <Icons.addressMarker width="14px" height="16px" aria-hidden="true" />
                <Text fontSize="0.75rem" fontWeight="medium" color="quaternary" lineHeight={4}>
                  {selectedSpot.address}
                </Text>
              </HStack>

              <Text fontSize="0.75rem" color="quaternary" lineHeight={5} noOfLines={4}>
                {selectedSpot.description}
              </Text>
            </ModalFooter>
          </BottomSheet>
        </ModalContent>
      </Modal>
    </>
  )
}
