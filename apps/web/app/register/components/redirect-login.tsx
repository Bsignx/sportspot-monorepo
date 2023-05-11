import NextLink from 'next/link'
import { Text, NextChakra } from '@sportspot/ui'

export const RedirectLogin = () => {
  return (
    <Text
      w="full"
      fontFamily="altHeading"
      textAlign="center"
      color="grayscale300"
      opacity=".7"
      pb={{ base: 12, sm: 0 }}
    >
      Already have an account? &nbsp;
      <NextChakra.Link as={NextLink} href="/login" fontWeight="bold">
        Login
      </NextChakra.Link>
    </Text>
  )
}
