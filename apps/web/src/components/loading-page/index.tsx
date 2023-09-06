'use client'

import { Box, Center, Text, VStack } from '@sportspot/ui'
import Lottie from 'lottie-react'

import sportspot from '~/animation/lottie/sportspot'

export const LoadingPage = () => (
  <Center
    css={{
      height: ['100vh', '100dvh'],
    }}
  >
    <VStack>
      <Box h="50vh">
        <Lottie aria-hidden animationData={sportspot} />
      </Box>

      <Text fontSize="xl" fontWeight="medium">
        Loading...
      </Text>
    </VStack>
  </Center>
)
