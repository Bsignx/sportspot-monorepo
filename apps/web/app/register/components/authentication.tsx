import { GoogleAuth } from './google-auth'
import { FacebookAuth } from './facebook-auth'

import { signIn } from 'next-auth/react'

import { HStack, Button } from '@sportspot/ui'

export const Authentication = () => {
  return (
    <HStack pos="absolute" top="667px" w="full" justify="center" spacing={8}>
      <Button
        variant="unstyled"
        onClick={() => signIn('google', { redirect: true, callbackUrl: '/' })}
      >
        <GoogleAuth />
      </Button>

      <Button
        variant="unstyled"
        onClick={() => signIn('facebook', { redirect: true, callbackUrl: '/' })}
      >
        <FacebookAuth />
      </Button>
    </HStack>
  )
}
