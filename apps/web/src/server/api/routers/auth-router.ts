import bcrypt from 'bcrypt'

import { TRPCError } from '@trpc/server'

import { registerForm } from '~/utils/login-schema'
import { createTRPCRouter, publicProcedure, protectedProcedure } from '~/server/api/trpc'

export const userAccountRouter = createTRPCRouter({
  register: publicProcedure
    .input(registerForm.omit({ terms: true }))
    .mutation(async ({ input, ctx }) => {
      const userExists = await ctx.prisma.user.findUnique({
        where: { email: input.email },
        select: { id: true },
      })

      if (userExists) throw new TRPCError({ code: 'CONFLICT', message: 'User already registered' })

      const saltRounds = 10
      const hashedPassword = await bcrypt.hash(input.password, saltRounds)

      const createUser = await ctx.prisma.user.create({
        data: {
          name: `${input.firstName} ${input.lastName}`,
          email: input.email,
          password: hashedPassword,
        },
        select: {
          id: true,
        },
      })

      if (!createUser) throw new TRPCError({ code: 'NOT_FOUND', message: 'Error creating user' })
    }),

  update: protectedProcedure
    .input(registerForm.omit({ terms: true }))
    .query(async ({ input, ctx }) => {
      if (ctx.session?.user) throw new TRPCError({ code: 'UNAUTHORIZED' })

      const updateUser = await ctx.prisma.user.update({
        where: { id: ctx.session?.user.id, email: ctx.session?.user.email! },
        data: {
          email: input.email,
          name: `${input.firstName} ${input.lastName}`,
        },
        select: {
          image: true,
          name: true,
        },
      })

      return updateUser
    }),
})
