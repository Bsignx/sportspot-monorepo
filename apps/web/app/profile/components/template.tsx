'use client'

import { Flex, Heading, Chakra, Text, VStack } from '@sportspot/ui'

import { SignOut } from './sign-out'
import { useGetSession } from '~/helpers/session/client'

export const Template = () => {
  const { data: session } = useGetSession()

  const user = session?.user

  return (
    <Flex as="main" h="100vh" direction="column" align="center" p={12} gap={20}>
      <Heading>Profile Page</Heading>

      <VStack>
        <Chakra.Avatar name={user?.name ?? ''} src={user?.image ?? ''} />

        <Text>
          Hello, <Text as="strong">{user?.name}</Text>
        </Text>

        <SignOut />
      </VStack>
    </Flex>
  )
}
