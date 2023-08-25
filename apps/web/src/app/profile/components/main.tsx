'use client'

import { Flex, VStack } from '@sportspot/ui'

import { api } from '~/helpers/trpc/api'
import { UserStats } from './user-stats'
import { SignOutBtn } from './sign-out-btn'
import { UserProfile } from './user-profile'
import { LoadingPage } from '~/components/loading-page'
import { useGetSession } from '~/helpers/session/client'
import { Header } from '~/components/header'

export const Main = () => {
  const { data: session } = useGetSession()

  const { data: userSpots, isLoading: isLoadingSpot } = api.spot.getUserSpots.useQuery()
  const { data: favoriteSpots, isLoading: isLoadingFav } = api.spot.getFavoriteSpots.useQuery()

  if (isLoadingFav || isLoadingSpot) {
    return <LoadingPage />
  }

  const totalUserSpots = userSpots?.length!
  const totalUserFavorites = favoriteSpots?.length!

  const user = session?.user

  return (
    <>
      <VStack p="6" pt="4" spacing="8" w="100%">
        <Header title="profile" />
      </VStack>
      <Flex as="main" direction="column" align="center" p="12" gap="6">
        <VStack w="full" spacing="8">
          <UserProfile
            avatar={user?.image ?? ''}
            name={user?.name ?? ''}
            email={user?.email ?? ''}
          />

          <UserStats addedSpots={totalUserSpots} favorites={totalUserFavorites} />
        </VStack>

        <SignOutBtn />
      </Flex>
    </>
  )
}
