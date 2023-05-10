'use client'

import { Box, Input, InputGroup, InputLeftElement, InputRightElement, Icons } from '@sportspot/ui'
import { useSession } from 'next-auth/react'

const Template = () => {
  const { data, status } = useSession()

  console.log(data, status)

  return (
    <Box px="4" py="12">
      <h1>hello</h1>
      <InputGroup>
        <InputLeftElement pointerEvents="none" color="gray.300">
          <Icons.chevron.right />
        </InputLeftElement>
        <Input placeholder="First Name" paddingInline={10} />
        <InputRightElement pointerEvents="none" color="gray.300">
          <Icons.chevron.right />
        </InputRightElement>
      </InputGroup>
    </Box>
  )
}

export default Template
