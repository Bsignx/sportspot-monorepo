'use client'

import { signIn } from 'next-auth/react'
import { Box } from '@sportspot/ui'

const Template = () => {
  return (
    <Box px="4" py="12">
      <div>
        <button onClick={() => signIn()}>Sign in with Google</button>
        <h1>Login</h1>
      </div>
    </Box>
  )
}

export default Template
