import { authOptions } from '../config/auth'

import { getServerSession } from 'next-auth/next'

async function getSession() {
  return await getServerSession(authOptions)
}

export async function getCurrentUser() {
  const session = await getSession()

  return session?.user
}
