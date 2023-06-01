import { createTRPCRouter, publicProcedure } from '~/server/api/trpc'

export const spotRouter = createTRPCRouter({
  getAllSpots: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.spot.findMany()
  }),
})
