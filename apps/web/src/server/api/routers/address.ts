import { z } from 'zod'
import axios from 'axios'
import { TRPCError } from '@trpc/server'

import { createTRPCRouter, protectedProcedure } from '~/server/api/trpc'
import { env } from '~/env'

const api = axios.create({
  baseURL: 'https://www.universal-tutorial.com/',
})

export const addressRouter = createTRPCRouter({
  getAddressAuthToken: protectedProcedure.query(async () => {
    try {
      const { data } = await api.get('api/getaccesstoken/', {
        headers: {
          Accept: 'application/json',
          'api-token': env.COUNTRY_STATE_CITY_API_TOKEN,
          'user-email': env.COUNTRY_STATE_CITY_API_EMAIL,
        },
      })

      const token = data.auth_token

      if (!token) {
        throw new TRPCError({
          code: 'UNAUTHORIZED',
          message: 'Unauthorized',
        })
      }

      return token
    } catch (error) {
      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Something went wrong',
      })
    }
  }),
  getCountries: protectedProcedure.query(async ({ ctx }) => {
    try {
      const addressAuthToken = ctx.req.headers['x-address-auth-token']

      if (!addressAuthToken) {
        throw new TRPCError({
          code: 'UNAUTHORIZED',
          message: 'Unauthorized',
        })
      }

      type CountriesResponse = {
        country_name: string
        country_short_name: string
        country_phone_code: string
      }

      const { data: countries } = await api.get<CountriesResponse[]>('api/countries/', {
        headers: {
          Authorization: `Bearer ${addressAuthToken}`,
          Accept: 'application/json',
        },
      })

      return countries
    } catch (error) {
      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Something went wrong',
      })
    }
  }),
  getStates: protectedProcedure
    .input(z.object({ country: z.string() }))
    .query(async ({ input, ctx }) => {
      try {
        const addressAuthToken = ctx.req.headers['x-address-auth-token']

        if (!addressAuthToken) {
          throw new TRPCError({
            code: 'UNAUTHORIZED',
            message: 'Unauthorized',
          })
        }

        type StatesResponse = {
          state_name: string
        }

        const { data: states } = await api.get<StatesResponse[]>(`api/states/${input.country}`, {
          headers: {
            Authorization: `Bearer ${addressAuthToken}`,
            Accept: 'application/json',
          },
        })

        return states
      } catch (error) {
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Something went wrong',
        })
      }
    }),
  getCities: protectedProcedure
    .input(z.object({ state: z.string() }))
    .query(async ({ input, ctx }) => {
      try {
        const addressAuthToken = ctx.req.headers['x-address-auth-token']

        if (!addressAuthToken) {
          throw new TRPCError({
            code: 'UNAUTHORIZED',
            message: 'Unauthorized',
          })
        }

        type CitiesResponse = {
          city_name: string
        }

        const { data: cities } = await api.get<CitiesResponse[]>(`api/cities/${input.state}`, {
          headers: {
            Authorization: `Bearer ${addressAuthToken}`,
            Accept: 'application/json',
          },
        })

        return cities
      } catch (error) {
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Something went wrong',
        })
      }
    }),
})
