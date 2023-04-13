'use client'

import { Box } from '@sportspot/ui'

import { MediumSizeLogo as Logo } from '../../../components/logo/medium-size-logo'

const Content = () => {
  return (
    <Box h="100vh" w="100%" bg="gradient.200">
      <Box
        pos="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
      >
        <Logo />
      </Box>
    </Box>
  )
}

export default Content
