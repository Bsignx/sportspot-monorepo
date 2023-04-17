import { Chakra, theme } from '@sportspot/ui'

export const ThemeDecorator = (Story) => (
  <Chakra.ThemeProvider theme={theme}>
    <Story />
  </Chakra.ThemeProvider>
)
