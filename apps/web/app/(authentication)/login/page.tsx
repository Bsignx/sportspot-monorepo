'use client'

import { useRouter } from 'next/navigation'
import { useEffect, Fragment } from 'react'

import Template from './components/template'
import { useGetSession } from '~/helpers/session/client'

const LoginPage = () => {
  const router = useRouter()

  const { status } = useGetSession()

  useEffect(() => {
    if (status === 'authenticated') router.push('/')
  }, [router, status])

  return status === 'unauthenticated' ? <Template /> : <Fragment />
}

export default LoginPage
