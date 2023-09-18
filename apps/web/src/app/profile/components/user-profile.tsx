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
        sx={{
          border: '2px solid',
          borderColor: 'quaternary',
        }}
      />

      <Box>
        <Text
          fontSize="xl"
          color="tertiary"
          fontWeight="700"
          lineHeight="24px"
          fontFamily="altHeading"
          wordBreak="break-word"
        >
          {name}
        </Text>
        <Text
          fontSize="xs"
          color="quaternary"
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
