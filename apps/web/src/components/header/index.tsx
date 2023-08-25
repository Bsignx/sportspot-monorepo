'use client'

import { Button, HStack, Icons, Text } from '@sportspot/ui'
import { useRouter } from 'next/navigation'

type Props = {
  title: string
}

export const Header = ({ title }: Props) => {
  const router = useRouter()

  const handleClickBack = () => {
    router.back()
  }

  return (
    <HStack w="100%" as="header">
      <Button onClick={handleClickBack} variant="unstyled" aria-label="Go back">
        <Icons.leftArrow aria-hidden />
      </Button>

      <Text fontSize="medium" fontWeight="600" lineHeight="1.1875rem">
        {title}
      </Text>
    </HStack>
  )
}
