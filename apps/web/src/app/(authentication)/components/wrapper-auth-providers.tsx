import { signIn } from 'next-auth/react'

import { HStack, Button, Icons } from '@sportspot/ui'

export const WrapperAuthProviders = () => {
  return (
    <HStack w="full" justify="center" spacing={8} mt="2" mb="7">
      <Button
        onClick={() => signIn('google', { redirect: true, callbackUrl: '/' })}
        h="auto"
        variant="unstyled"
      >
        <Icons.motionIcons.Google />
      </Button>

      <Button
        onClick={() => signIn('facebook', { redirect: true, callbackUrl: '/' })}
        h="auto"
        variant="unstyled"
      >
        <Icons.motionIcons.Facebook />
      </Button>
    </HStack>
  )
}
