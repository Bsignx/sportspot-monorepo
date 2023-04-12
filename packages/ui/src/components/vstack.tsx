import {
  StackProps as VStackPropsRoot,
  VStack as VStackRoot,
} from '@chakra-ui/react'

export type VStackProps = VStackPropsRoot

export const VStack = ({ children, ...props }: VStackProps) => (
  <VStackRoot {...props}>{children}</VStackRoot>
)

VStack.displayName = 'VStack'
