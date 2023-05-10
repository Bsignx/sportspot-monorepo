'use client'

import { Chakra, NextChakra } from '@sportspot/ui'

import { theme } from './theme'

const StylesProvider = ({ children }) => {
  return (
    <NextChakra.CacheProvider>
      <Chakra.ChakraProvider theme={theme}>{children}</Chakra.ChakraProvider>
    </NextChakra.CacheProvider>
  )
}

export default StylesProvider
