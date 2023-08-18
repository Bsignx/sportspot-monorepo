import { createTRPCRouter } from '~/server/api/trpc'
import { spotRouter } from '~/server/api/routers/spot'
import { exampleRouter } from '~/server/api/routers/example'
import { userAccountRouter } from '~/server/api/routers/auth-router'
import { addressRouter } from './routers/address'

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  userAcc: userAccountRouter,
  spot: spotRouter,
  address: addressRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter
