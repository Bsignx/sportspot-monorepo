'use client'

import Link from 'next/link'
import { Box, Button, Flex } from '@sportspot/ui'

import { MediumSizeLogo as Logo } from '../../../components/logo/medium-size-logo'

const Content = () => {
  return (
    <Flex
      h="100vh"
      w="100%"
      flexDir="column"
      justifyContent="flex-end"
      paddingBlockEnd="16"
      paddingInline="6"
    >
      <Box pos="absolute" top="50%" left="50%" transform="translate(-50%, -50%)">
        <Logo />
      </Box>

      <Button as={Link} href="/onboarding/second" isFullWidth>
        Get Started
      </Button>
    </Flex>
  )
}

export default Content
