import { TextProps as RootTextProps, Text as RootText } from '@chakra-ui/react'

export type TextProps = RootTextProps

export const Text = ({ children, ...props }: TextProps) => (
  <RootText {...props}>{children}</RootText>
)

Text.displayName = 'Text'
