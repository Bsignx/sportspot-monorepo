import NextLink from 'next/link'
import { Text, NextChakra } from '@sportspot/ui'

export const RedirectLogin = () => {
  return (
    <Text
      pos="absolute"
      w="full"
      fontFamily="altHeading"
      textAlign="center"
      color="grayscale300"
      top="753px"
    >
      Already have an account? &nbsp;
      <NextChakra.Link as={NextLink} href="/login" fontWeight="bold">
        Login
      </NextChakra.Link>
    </Text>
  )
}
