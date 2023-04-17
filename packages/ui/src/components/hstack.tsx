import { StackProps as HStackPropsRoot, HStack as HStackRoot } from '@chakra-ui/react'

export type HStackProps = HStackPropsRoot

export const HStack = ({ children, ...props }: HStackProps) => (
  <HStackRoot {...props}>{children}</HStackRoot>
)

HStack.displayName = 'HStack'
