'use client'

import Link from 'next/link'
import { NextChakra, Heading, VStack, Text, FloatingButton, Icons, Box } from '@sportspot/ui'
import { colors } from '@sportspot/tokens'

const Template = () => {
  return (
    <>
      <NextChakra.Image
        width={700}
        height={475}
        placeholder="blur"
        blurDataURL="/images/blur-onboarding-1.png"
        css={{
          width: '100%',
          height: 'auto',
        }}
        sizes="100vw"
        src="/images/onboarding-1.png"
        alt="Girl in fitness clothes waving"
      />

      <VStack paddingInline={6} paddingBlockStart={6} spacing="4">
        <Heading as="h1" fontSize="2xl" fontWeight="extrabold" color="black">
          Find the right sport spot for you
        </Heading>
        <Text fontSize="xs" color="gray.300">
          You can enjoy and benefit from physical activity while feeling comfortable and motivated
          in your chosen environment.
        </Text>
      </VStack>
      <FloatingButton as={Link} href="/login">
        <Icons.chevron.right size={24} color={colors.light} />
      </FloatingButton>
    </>
  )
}

export default Template
