'use client'

import { OrAuth } from './or-auth'
import { RegisterForm } from './register-form'
import { RedirectLogin } from './redirect-login'
import { Authentication } from './authentication'
import { responsiveRegister } from 'helpers/responsives'

import { Heading, Text, Stack, VStack } from '@sportspot/ui'

const Template = () => {
  const {
    template: { rWidth, rMaxWidth, rPaddingY },
  } = responsiveRegister()

  return (
    <VStack
      w="full"
      h="100vh"
      direction="column"
      justify="center"
      overflowY="auto"
      sx={{
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      }}
    >
      <Stack
        pos="relative"
        h="full"
        justify="space-between"
        w={rWidth}
        spacing={20}
        py={rPaddingY}
        maxH={rMaxWidth}
      >
        <VStack spacing="36px">
          <Heading as="h1" textAlign="center" fontFamily="altHeading" size="lg" lineHeight="28px">
            <Text as="span" fontSize="xl" fontWeight="normal">
              Hey there,
            </Text>
            <br /> Create an Account
          </Heading>

          <RegisterForm />
        </VStack>

        <VStack spacing="32px" w="full">
          <OrAuth />

          <Authentication />
          <RedirectLogin />
        </VStack>
      </Stack>
    </VStack>
  )
}

export default Template
