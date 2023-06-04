import NextLink from 'next/link'
import { Text, NextChakra } from '@sportspot/ui'

export const RedirectLogin = () => {
  return (
    <Text w="full" fontFamily="altHeading" textAlign="center" color="gray.300">
      Already have an account? &nbsp;
      <NextChakra.Link as={NextLink} href="/login" fontWeight="bold" color="gray.700">
        Login
      </NextChakra.Link>
    </Text>
  )
}
