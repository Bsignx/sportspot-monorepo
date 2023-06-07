import { z } from 'zod'

import { createTRPCRouter, publicProcedure, protectedProcedure } from '~/server/api/trpc'

export const spotRouter = createTRPCRouter({
  getAllSpots: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.spot.findMany()
  }),
  favoriteSpot: protectedProcedure
    .input(z.object({ spotId: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const userId = ctx.session.user.id

      const favoriteSpot = await ctx.prisma.favorite.findFirst({
        where: {
          userId,
          spotId: input.spotId,
        },
      })

      if (favoriteSpot) {
        return ctx.prisma.favorite.delete({
          where: {
            id: favoriteSpot.id,
          },
        })
      }

      return ctx.prisma.favorite.create({
        data: {
          userId,
          spotId: input.spotId,
        },
      })
    }),
  getFavoriteSpot: protectedProcedure
    .input(z.object({ spotId: z.string() }))
    .query(async ({ input, ctx }) => {
      const userId = ctx.session.user.id

      const favoriteSpot = await ctx.prisma.favorite.findFirst({
        where: {
          userId,
          spotId: input.spotId,
        },
      })

      return favoriteSpot
    }),
})
