import NextLink from 'next/link'
import { Text, NextChakra } from '@sportspot/ui'

export const RedirectLogin = () => {
  return (
    <Text w="full" fontFamily="altHeading" textAlign="center" fontSize="sm">
      Already have an account? &nbsp;
      <NextChakra.Link
        as={NextLink}
        href="/login"
        fontWeight="medium"
        color="primary"
        textDecoration="underline"
      >
        Login
      </NextChakra.Link>
    </Text>
  )
}
