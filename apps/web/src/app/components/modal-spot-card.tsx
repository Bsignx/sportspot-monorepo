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
import { BottomSheet } from './bottom-sheet'
import { Props } from './selected-spot-card'
import { CarrouselSpot } from './carrousel-spot'
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

            <ModalHeader p="16px 20px 16px 14px">
              <HStack w="full" justify="space-between">
                {selectedSpot.latitude && selectedSpot.longitude && (
                  <HStack spacing={1} align="end">
                    <Icons.distanceMarker aria-hidden="true" width={14} height={14} />
                    <Text fontSize="11px" lineHeight="shorter" color="gray.300" fontWeight="thin">
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
                      <Icons.favoriteFilled
                        aria-hidden="true"
                        style={{ width: favSize, height: favSize }}
                      />
                    ) : (
                      <Icons.favorite
                        aria-hidden="true"
                        style={{ width: favSize, height: favSize }}
                      />
                    )}
                  </Center>
                </Box>
              </HStack>

              <VStack align="start">
                <Heading fontSize="24px" fontWeight="extrabold">
                  {selectedSpot.name}
                </Heading>

                {ratingAverage && (
                  <HStack spacing={1} align="start">
                    {ratingStars.map((isStar, key) =>
                      isStar ? (
                        <Icons.filledStar
                          key={key}
                          aria-hidden="true"
                          style={{ width: starSize, height: starSize }}
                        />
                      ) : (
                        <Icons.outlineStar
                          key={key}
                          aria-hidden="true"
                          style={{ width: starSize, height: starSize }}
                        />
                      ),
                    )}

                    <Text
                      pl="4px"
                      color="dark"
                      fontSize="15px"
                      lineHeight={6}
                      fontWeight="semibold"
                    >
                      {ratingAverage}
                    </Text>
                  </HStack>
                )}
              </VStack>
            </ModalHeader>

            <ModalBody p="0px 14px">
              <SpotsMap
                zoom={14}
                spots={[selectedSpot]}
                activeSearchField={false}
                styles={{
                  width: '100%',
                  height: mapHeighSize,
                  borderRadius: '14px',
                  boxShadow: '0px 0px 1px rgba(0, 0, 0, 0.25)',
                }}
                userLocation={[selectedSpot.latitude!, selectedSpot.longitude!]}
              />
            </ModalBody>
            <ModalFooter gap={3} flexDir="column" alignItems="start" p="24px 14px">
              <HStack mt={1} spacing={1} alignItems="flex-start">
                <Icons.addressMarker width="14px" height="16px" aria-hidden="true" />
                <Text fontSize="12.8px" fontWeight="light" color="gray.300" lineHeight={4}>
                  {selectedSpot.address}
                </Text>
              </HStack>

              <Text fontSize="12.2px" color="gray.300" lineHeight={5} noOfLines={4}>
                {selectedSpot.description}
              </Text>
            </ModalFooter>
          </BottomSheet>
        </ModalContent>
      </Modal>
    </>
  )
}
