import { signIn } from 'next-auth/react'

import { HStack, Button, Icons } from '@sportspot/ui'

export const WrapperAuthProviders = () => {
  return (
    <HStack pos="absolute" top="667px" w="full" justify="center" spacing={8}>
      <Button
        variant="unstyled"
        onClick={() => signIn('google', { redirect: true, callbackUrl: '/' })}
      >
        <Icons.motionIcons.Google />
      </Button>

      <Button
        variant="unstyled"
        onClick={() => signIn('facebook', { redirect: true, callbackUrl: '/' })}
      >
        <Icons.motionIcons.Facebook />
      </Button>
    </HStack>
  )
}
