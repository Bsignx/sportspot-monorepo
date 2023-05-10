'use client'

import { OrAuth } from './or-auth'
import { LoginInputs } from './login-inputs'
import { Authentication } from './authentication'
import { RedirectRegister } from './redirect-register'

import { Box, Heading, Text, Stack, VStack } from '@sportspot/ui'

const Template = () => {
  return (
    <VStack w="100vw" h="100vh" direction="column" justify="center">
      <Box pos="relative" w={['338px', '395px']} h="844px">
        <Stack spacing={9} py={2}>
          <Heading as="h1" textAlign="center" fontFamily="altHeading" size="lg" lineHeight="28px">
            <Text as="span" fontSize="xl" fontWeight="normal">
              Hey there,
            </Text>
            <br /> Welcome back
          </Heading>
          <LoginInputs />
          <OrAuth />

          <Authentication />
          <RedirectRegister />
        </Stack>
      </Box>
    </VStack>
  )
}

export default Template
