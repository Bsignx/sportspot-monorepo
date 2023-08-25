'use client'

import { HStack, Center, Text } from '@sportspot/ui'

type UserStatsProps = {
  addedSpots: number
  favorites: number
}

export const UserStats = ({ addedSpots, favorites }: UserStatsProps) => {
  return (
    <HStack w="full">
      <Center p="4" flex="1" gap="3" flexDir="column" bg="white" rounded="lg">
        <Text
          fontSize="sm"
          color="gray.300"
          fontWeight="500"
          lineHeight="16px"
          fontFamily="body"
          wordBreak="break-word"
        >
          added spots
        </Text>

        <Text
          color="black"
          fontWeight="700"
          fontSize="md"
          lineHeight="24px"
          fontFamily="altHeading"
        >
          {addedSpots}
        </Text>
      </Center>

      <Center p="4" flex="1" gap="3" flexDir="column" bg="white" rounded="lg">
        <Text
          color="gray.300"
          fontSize="sm"
          fontWeight="500"
          lineHeight="16px"
          fontFamily="body"
          wordBreak="break-word"
        >
          favorites
        </Text>

        <Text
          color="black"
          fontWeight="700"
          fontFamily="altHeading"
          fontSize="md"
          lineHeight="24px"
        >
          {favorites}
        </Text>
      </Center>
    </HStack>
  )
}
