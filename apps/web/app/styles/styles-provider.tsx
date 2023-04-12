'use client'

import { Chakra, theme, NextChakra } from '@sportspot/ui'

const StylesProvider = ({ children }) => {
  return (
    <NextChakra.CacheProvider>
      <Chakra.ChakraProvider theme={theme}>{children}</Chakra.ChakraProvider>
    </NextChakra.CacheProvider>
  )
}

export default StylesProvider
