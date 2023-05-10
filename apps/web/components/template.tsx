'use client'

import { Box, Input, InputGroup, InputLeftElement, InputRightElement, Icons } from '@sportspot/ui'

const Template = () => {
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
