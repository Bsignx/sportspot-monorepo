'use client'

import { ReactNode, useEffect } from 'react'
import { redirect } from 'next/navigation'

import { useGetSession } from '~/helpers/session/client'

export const ProtectedPage = ({ children }: Record<'children', ReactNode>) => {
  const { status } = useGetSession()

  const isAuthenticated = status === 'authenticated'

  useEffect(() => {
    if (!isAuthenticated) redirect('/login')
  }, [isAuthenticated, status])

  return (
    <>
      {!isAuthenticated && null}
      {isAuthenticated && children}
    </>
  )
}
