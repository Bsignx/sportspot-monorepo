'use client'

import { Flex, VStack, Skeleton } from '@sportspot/ui'

export const SkeletonPage = () => {
  return (
    <Flex h="100vh" bg="gray.200" p={8} gap={6}>
      <VStack flex={1} spacing={4}>
        <Skeleton w="full" h="33%" startColor="gray.100" endColor="gray.400" />
        <Skeleton w="full" h="33%" startColor="gray.100" endColor="gray.400" />
        <Skeleton w="full" h="33%" startColor="gray.100" endColor="gray.400" />
      </VStack>

      <VStack flex={1} spacing={4}>
        <Skeleton w="full" h="50%" startColor="gray.100" endColor="gray.400" />
        <Skeleton w="full" h="50%" startColor="gray.100" endColor="gray.400" />
      </VStack>
    </Flex>
  )
}
