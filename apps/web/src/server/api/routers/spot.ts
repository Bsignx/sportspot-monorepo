import { z } from 'zod'

import { createTRPCRouter, publicProcedure, protectedProcedure } from '~/server/api/trpc'

export const spotRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.spot.findMany()
  }),
  favorite: protectedProcedure
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
  getFavorite: protectedProcedure
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
  getRating: protectedProcedure
    .input(z.object({ spotId: z.string() }))
    .query(async ({ input, ctx }) => {
      const userId = ctx.session.user.id

      const review = await ctx.prisma.rating.findFirst({
        where: {
          userId,
          spotId: input.spotId,
        },
      })

      return review
    }),
  getRatingAverage: publicProcedure
    .input(z.object({ spotId: z.string() }))
    .query(async ({ input, ctx }) => {
      const spotId = input.spotId

      const reviews = await ctx.prisma.rating.findMany({
        where: {
          spotId,
        },
      })

      const total = reviews.reduce((acc, review) => {
        return acc + review.rating
      }, 0)

      const reviewCount = reviews.length

      const average = Number(total / reviewCount).toFixed(1)

      return reviewCount > 0 ? average : null
    }),
})
