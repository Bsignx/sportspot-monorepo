'use client'

import { OrAuth } from '../../components/or-auth'
import { LoginForm } from './login-form'
import { RedirectRegister } from './redirect-register'
import { WrapperAuthProviders } from '../../components/wrapper-auth-providers'

import { Heading, Text, Stack, Box } from '@sportspot/ui'

const Main = () => {
  return (
    <Stack
      spacing="0"
      pt="14"
      pb="14"
      px="6"
      w="100%"
      justifyContent="space-between"
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
        color="tertiary"
      >
        <Text as="span" fontSize="xl" fontWeight="normal" color="inherit">
          Hey there,
        </Text>
        <br /> Welcome back
      </Heading>

      <LoginForm />

      <Box>
        <OrAuth />

        <WrapperAuthProviders />
        <RedirectRegister />
      </Box>
    </Stack>
  )
}

export default Main
