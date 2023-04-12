import { FlexProps as FlexPropsRoot, Flex as FlexRoot } from '@chakra-ui/react'

export type FlexProps = FlexPropsRoot

export const Flex = ({ children, ...props }: FlexProps) => (
  <FlexRoot {...props}>{children}</FlexRoot>
)

Flex.displayName = 'Flex'
