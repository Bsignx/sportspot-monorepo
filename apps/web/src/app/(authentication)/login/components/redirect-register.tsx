import NextLink from 'next/link'
import { Text, NextChakra } from '@sportspot/ui'

export const RedirectRegister = () => {
  return (
    <Text w="full" fontFamily="altHeading" textAlign="center" color="gray.300">
      Don’t have an account yet? &nbsp;
      <NextChakra.Link as={NextLink} href="/register" fontWeight="bold" color="gray.700">
        Register
      </NextChakra.Link>
    </Text>
  )
}
