'use client'

import { Chakra, theme } from '@sportspot/ui'

const StylesProvider = ({ children }) => {
  return <Chakra.ChakraProvider theme={theme}>{children}</Chakra.ChakraProvider>
}

export default StylesProvider
