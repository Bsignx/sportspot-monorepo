import { z } from 'zod'

import { createTRPCRouter, publicProcedure, protectedProcedure } from '~/server/api/trpc'

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure.input(z.object({ text: z.string().max(10) })).query(({ input }) => {
    return {
      greeting: `Hello ${input.text}`,
    }
  }),

  getAllSpots: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.spot.findMany()
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return 'you can now see this secret message!'
  }),
})
