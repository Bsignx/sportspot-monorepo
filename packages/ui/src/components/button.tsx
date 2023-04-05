import { Button as RootButton, ThemeProvider } from '@chakra-ui/react'
import theme from '../theme'

export type ButtonProps = {
  children: string
}

export const Button = ({ children = 'hiii' }: ButtonProps) => {
  return (
    <ThemeProvider theme={theme}>
      <RootButton bgColor="brand.200">{children}</RootButton>
    </ThemeProvider>
  )
}
