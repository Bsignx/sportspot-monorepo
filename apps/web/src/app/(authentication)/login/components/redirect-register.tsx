import NextLink from 'next/link'
import { Text, NextChakra } from '@sportspot/ui'

export const RedirectRegister = () => {
  return (
    <Text w="full" fontFamily="altHeading" textAlign="center" fontSize="sm">
      Don’t have an account yet? &nbsp;
      <NextChakra.Link
        as={NextLink}
        href="/register"
        fontWeight="medium"
        color="primary"
        textDecoration="underline"
      >
        Register
      </NextChakra.Link>
    </Text>
  )
}
