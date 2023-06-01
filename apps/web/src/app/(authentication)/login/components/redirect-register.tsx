import NextLink from 'next/link'
import { Text, NextChakra } from '@sportspot/ui'

export const RedirectRegister = () => {
  return (
    <Text
      pos="absolute"
      w="full"
      fontFamily="altHeading"
      textAlign="center"
      color="gray.300"
      top="753px"
    >
      Don’t have an account yet? &nbsp;
      <NextChakra.Link as={NextLink} href="/register" fontWeight="bold" color="gray.700">
        Register
      </NextChakra.Link>
    </Text>
  )
}
