'use client'

import { ProtectedPage } from './protected-page'
import { privateRutes } from '~/config/private-routes'

import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'

export const ProtectedWrapper = ({ children }: Record<'children', ReactNode>) => {
  const pathname = usePathname()
  const isPrivatePage = privateRutes.includes(pathname ?? '')

  return (
    <>
      {isPrivatePage && <ProtectedPage>{children}</ProtectedPage>}
      {!isPrivatePage && children}
    </>
  )
}
