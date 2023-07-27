'use client'

import { HStack, Icons, Button, Text } from '@sportspot/ui'
import { usePathname, useRouter } from 'next/navigation'

import { formatPathTitle } from '~/utils/format-path-title'
import { publicRoutes } from '~/config/public-routes'

export const PreviousPage = () => {
  const router = useRouter()

  const path = usePathname()
  const formattedTitle = formatPathTitle(path!)

  const notApplyRoutes = [...publicRoutes, '/']

  const handleClickBack = () => {
    router.back()
  }

  if (notApplyRoutes.includes(path!)) return null

  return (
    <HStack w="full" py="4" px="6" spacing="2">
      <Button onClick={handleClickBack} variant="unstyled" aria-label="Go back">
        <Icons.leftArrow aria-hidden />
      </Button>

      <Text fontSize="medium" fontWeight="600" lineHeight="1.1875rem">
        {formattedTitle}
      </Text>
    </HStack>
  )
}
