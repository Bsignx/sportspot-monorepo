'use client'

import { Flex, Heading, Chakra, Text, VStack, Icons, Button } from '@sportspot/ui'

import { signOut } from 'next-auth/react'
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

        <Button variant="unstyled" onClick={() => signOut({ callbackUrl: '/' })}>
          <Icons.Logout />
        </Button>
      </VStack>
    </Flex>
  )
}
