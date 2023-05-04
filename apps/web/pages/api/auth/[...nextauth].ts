import NextAuth from 'next-auth'

import { authOptions } from '@/app/config/auth'

export default NextAuth(authOptions)
