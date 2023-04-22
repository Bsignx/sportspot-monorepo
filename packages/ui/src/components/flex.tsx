import { FlexProps as RootFlexProps, Flex as RootFlex } from '@chakra-ui/react'

export type FlexProps = RootFlexProps

export const Flex = ({ children, ...props }: FlexProps) => (
  <RootFlex {...props}>{children}</RootFlex>
)

Flex.displayName = 'Flex'
