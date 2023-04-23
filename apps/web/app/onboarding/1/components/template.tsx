'use client'

import Link from 'next/link'
import { Box, Button, Flex, Icons } from '@sportspot/ui'

const Template = () => {
  return (
    <Flex
      w="100%"
      flexDir="column"
      justifyContent="flex-end"
      paddingBlockEnd="16"
      paddingInline="6"
      css={{
        height: ['100vh', '100dvh'],
      }}
    >
      <Box pos="absolute" top="50%" left="50%" transform="translate(-50%, -50%)">
        <Icons.logo.medium />
      </Box>

      <Button as={Link} href="/onboarding/2" isFullWidth>
        Get Started
      </Button>
    </Flex>
  )
}

export default Template
