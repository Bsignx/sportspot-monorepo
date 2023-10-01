import { Spot } from '@prisma/client'
import { TRPCError } from '@trpc/server'
import { z } from 'zod'

import { createTRPCRouter, publicProcedure, protectedProcedure } from '~/server/api/trpc'

const SpotInput = z.object({
  name: z.string().nonempty('Name required').max(80, 'Maximum 80 characters allowed'),
  description: z
    .string()
    .nonempty('Description required')
    .max(300, 'Maximum 300 characters allowed'),
  address: z.string().nonempty('Address required').max(80, 'Maximum 80 characters allowed'),
  state: z.string().nonempty('State required').max(80, 'Maximum 80 characters allowed'),
  city: z.string().nonempty('City required').max(80, 'Maximum 80 characters allowed'),
  country: z.string().nonempty('Country required').max(80, 'Maximum 80 characters allowed'),
  latLng: z.array(z.number()).nonempty('Latitude and Longitude required').length(2),
  category: z.string().nonempty('Category required').max(80, 'Maximum 80 characters allowed'),
  images: z.array(z.string()).max(3, 'Maximum 3 images allowed').min(1, 'Minimum 1 image required'),
})

export const spotRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.spot.findMany()
  }),
  getSpot: protectedProcedure
    .input(z.object({ spotId: z.string() }))
    .query(async ({ input, ctx }) => {
      const userId = ctx.session.user.id

      const spot = await ctx.prisma.spot.findFirst({
        where: {
          id: input.spotId,
          userId,
        },
      })

      return spot
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
  getFavoriteSpots: protectedProcedure.query(async ({ ctx }) => {
    const userId = ctx.session.user.id

    const favorites = await ctx.prisma.favorite.findMany({
      where: {
        userId,
      },
    })

    const favoriteSpots = await ctx.prisma.spot.findMany({
      where: {
        id: {
          in: favorites.map((favorite) => favorite.spotId),
        },
      },
    })

    return favoriteSpots
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
  addRating: protectedProcedure
    .input(z.object({ spotId: z.string(), rating: z.number() }))
    .mutation(async ({ input, ctx }) => {
      const userId = ctx.session.user.id

      const review = await ctx.prisma.rating.findFirst({
        where: {
          userId,
          spotId: input.spotId,
        },
      })

      if (review) {
        return ctx.prisma.rating.update({
          where: {
            id: review.id,
          },
          data: {
            rating: input.rating,
          },
        })
      }

      return ctx.prisma.rating.create({
        data: {
          userId,
          spotId: input.spotId,
          rating: input.rating,
        },
      })
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
  getUserSpots: protectedProcedure.query(async ({ ctx }) => {
    const userId = ctx.session.user.id

    const spots: Spot[] | [] = await ctx.prisma.spot.findMany({
      where: {
        userId,
      },
    })

    return spots
  }),
  createSpot: protectedProcedure.input(SpotInput).mutation(async ({ input, ctx }) => {
    const userId = ctx.session.user.id

    const spot = await ctx.prisma.spot.create({
      data: {
        name: input.name,
        description: input.description,
        address: input.address,
        state: input.state,
        city: input.city,
        country: input.country,
        tagName: input.category,
        images: input.images,
        userId,
        latitude: input.latLng[0],
        longitude: input.latLng[1],
      },
    })

    return spot
  }),
  editSpot: protectedProcedure
    .input(SpotInput.extend({ id: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const userId = ctx.session.user.id

      const spotToUpdate = await ctx.prisma.spot.findFirst({
        where: {
          id: input.id,
        },
      })

      if (spotToUpdate?.userId !== userId) {
        throw new TRPCError({
          code: 'UNAUTHORIZED',
          message: 'Unauthorized',
        })
      }

      const spot = await ctx.prisma.spot.update({
        where: {
          id: input.id,
        },
        data: {
          name: input.name,
          description: input.description,
          address: input.address,
          state: input.state,
          city: input.city,
          country: input.country,
          tagName: input.category,
          images: input.images,
          userId,
          latitude: input.latLng[0],
          longitude: input.latLng[1],
        },
      })

      return spot
    }),
  getTags: publicProcedure.query(async ({ ctx }) => {
    const tags = await ctx.prisma.tag.findMany()

    return tags
  }),
  deleteSpot: protectedProcedure
    .input(z.object({ spotId: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const userId = ctx.session.user.id

      const spotToDelete = await ctx.prisma.spot.findFirst({
        where: {
          id: input.spotId,
        },
      })

      if (spotToDelete?.userId !== userId) {
        throw new TRPCError({
          code: 'UNAUTHORIZED',
          message: 'Unauthorized',
        })
      }

      await ctx.prisma.spot.delete({
        where: {
          id: input.spotId,
        },
      })

      return { success: true }
    }),
})
