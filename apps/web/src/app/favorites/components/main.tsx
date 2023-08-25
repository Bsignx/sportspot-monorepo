'use client'

import { Icons, Input, InputGroup, InputLeftElement, VStack } from '@sportspot/ui'

import { Header } from '~/components/header'
import { api } from '~/helpers/trpc/api'
import { ChangeEvent, useState } from 'react'
import { SpotList } from './spot-list'
import { LoadingPage } from '~/components/loading-page'

const MINIMUM_LENGTH_TO_SEARCH = 8

const Main = () => {
  const { data: favoriteSpots, isLoading } = api.spot.getFavoriteSpots.useQuery()

  const [search, setSearch] = useState('')

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  if (isLoading || !favoriteSpots) {
    return <LoadingPage />
  }

  return (
    <VStack p="6" pt="4" spacing="8">
      <Header title="favorites" />

      {favoriteSpots.length > MINIMUM_LENGTH_TO_SEARCH && (
        <InputGroup>
          <InputLeftElement color="gray.300">
            <Icons.searchBase size={19} aria-hidden />
          </InputLeftElement>

          <Input
            value={search}
            onChange={handleSearch}
            boxShadow="base"
            placeholder="search for a spot"
            hasIcon
          />
        </InputGroup>
      )}

      <SpotList favoriteSpots={favoriteSpots} search={search} />
    </VStack>
  )
}

export default Main
