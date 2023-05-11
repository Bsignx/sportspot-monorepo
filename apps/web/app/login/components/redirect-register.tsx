import { Text, NextChakra } from '@sportspot/ui'

export const RedirectRegister = () => {
  return (
    <Text w="full" fontFamily="altHeading" textAlign="center" color="grayscale300" opacity=".7">
      Don’t have an account yet? &nbsp;
      <NextChakra.Link as={NextChakra.Link} href="/register" fontWeight="bold">
        Register
      </NextChakra.Link>
    </Text>
  )
}
