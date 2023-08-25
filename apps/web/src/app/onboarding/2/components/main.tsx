'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Heading, VStack, Text, FloatingButton, Icons } from '@sportspot/ui'
import { colors } from '@sportspot/tokens'

const Main = () => {
  return (
    <>
      <Image
        width={700}
        height={475}
        sizes="100vw"
        style={{
          maxWidth: '100%',
          height: '65vh',
          objectFit: 'cover',
        }}
        src="/images/onboarding/onboarding-1.png"
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

export default Main
