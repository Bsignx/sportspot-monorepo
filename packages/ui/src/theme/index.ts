import { ThemeConfig, extendTheme } from '@chakra-ui/react'

import { components } from './components'
import { foundations } from './foundations'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

export const theme = extendTheme({
  config,
  components,
  ...foundations,
})
