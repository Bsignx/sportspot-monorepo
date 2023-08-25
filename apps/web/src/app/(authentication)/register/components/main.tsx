'use client'

import { OrAuth } from '../../components/or-auth'
import { RegisterForm } from './register-form'
import { RedirectLogin } from './redirect-login'
import { WrapperAuthProviders } from '../../components/wrapper-auth-providers'

import { Box, Heading, Text, VStack } from '@sportspot/ui'

const Main = () => {
  return (
    <VStack
      w="100%"
      spacing="0"
      justifyContent="space-between"
      pt="9"
      pb="14"
      px="6"
      css={{
        height: ['100vh', '100dvh'],
      }}
    >
      <Heading
        as="h1"
        textAlign="center"
        fontFamily="altHeading"
        size="lg"
        lineHeight="28px"
        mb="8"
      >
        <Text as="span" fontSize="xl" fontWeight="normal">
          Hey there,
        </Text>
        <br /> Create an Account
      </Heading>

      <RegisterForm />

      <Box w="100%">
        <OrAuth />

        <WrapperAuthProviders />
        <RedirectLogin />
      </Box>
    </VStack>
  )
}

export default Main
