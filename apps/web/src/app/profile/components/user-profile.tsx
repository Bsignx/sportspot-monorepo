'use client'

import { Chakra, Text, VStack, Box } from '@sportspot/ui'

type UserProfileProps = {
  name: string
  avatar: string
  email: string
}

export const UserProfile = ({ avatar, email, name }: UserProfileProps) => {
  return (
    <VStack spacing="6" textAlign="center">
      <Chakra.Avatar
        name={name}
        src={avatar}
        boxSize="104px"
        shadow="md"
        border="1px solid"
        borderColor="gray.100"
      />

      <Box>
        <Text
          fontSize="xl"
          color="black"
          fontWeight="700"
          lineHeight="24px"
          fontFamily="altHeading"
          wordBreak="break-word"
        >
          {name}
        </Text>
        <Text
          fontSize="xs"
          color="gray.500"
          fontFamily="body"
          fontWeight="600"
          lineHeight="21px"
          wordBreak="break-word"
        >
          {email}
        </Text>
      </Box>
    </VStack>
  )
}
