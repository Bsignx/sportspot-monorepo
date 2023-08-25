'use client'

import { signOut } from 'next-auth/react'
import { Button, Icons } from '@sportspot/ui'

export const SignOutBtn = () => {
  return (
    <Button
      variant="solid"
      gap="1"
      w="full"
      h="55px"
      bg="black"
      color="white"
      fontSize="md"
      rounded="2xl"
      fontFamily="body"
      boxShadow="0px 10px 22px rgba(149, 173, 254, 0.30)"
      leftIcon={<Icons.Logout />}
      onClick={() => signOut()}
    >
      Sign out
    </Button>
  )
}
