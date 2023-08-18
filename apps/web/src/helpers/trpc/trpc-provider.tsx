'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { httpBatchLink, loggerLink } from '@trpc/client'
import { ReactNode, useState } from 'react'
import superjson from 'superjson'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { getBaseUrl, api } from './api'

let addressAuthToken: string | null = null

export const setAddressAuthToken = (token: string | null) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  addressAuthToken = token
}

const TrpcProvider = ({ children }: { children: ReactNode }) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: { queries: { staleTime: 5000 } },
      }),
  )

  const [trpcClient] = useState(() =>
    api.createClient({
      links: [
        loggerLink({
          enabled: (opts) =>
            process.env.NODE_ENV === 'development' ||
            (opts.direction === 'down' && opts.result instanceof Error),
        }),
        httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`,
          headers() {
            return {
              'x-address-auth-token': addressAuthToken || '',
            }
          },
        }),
      ],
      transformer: superjson,
    }),
  )
  return (
    <api.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools />
      </QueryClientProvider>
    </api.Provider>
  )
}

export default TrpcProvider
