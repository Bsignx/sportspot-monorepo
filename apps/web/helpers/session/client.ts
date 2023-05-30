'use client'

import { useSession } from 'next-auth/react'

export const useGetSession = () => {
  const session = useSession()

  return session
}
