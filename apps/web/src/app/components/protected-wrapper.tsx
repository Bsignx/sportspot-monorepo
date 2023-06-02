'use client'

import { ProtectedPage } from './protected-page'
import { privateRoutes } from '~/config/private-routes'

import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'

export const ProtectedWrapper = ({ children }: Record<'children', ReactNode>) => {
  const pathname = usePathname()
  const isPrivatePage = privateRoutes.includes(pathname ?? '')

  return (
    <>
      {isPrivatePage && <ProtectedPage>{children}</ProtectedPage>}
      {!isPrivatePage && children}
    </>
  )
}
