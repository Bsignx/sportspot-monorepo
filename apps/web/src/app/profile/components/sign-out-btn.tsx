'use client'

import { signOut } from 'next-auth/react'
import { Button, Icons } from '@sportspot/ui'

export const SignOutBtn = () => {
  return (
    <Button
      variant="primary"
      w="full"
      fontWeight="bold"
      color="secondary"
      leftIcon={<Icons.Logout />}
      onClick={() => signOut()}
    >
      Sign out
    </Button>
  )
}
