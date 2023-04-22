import { StackProps as RootVStackProps, VStack as RootVStack } from '@chakra-ui/react'

export type VStackProps = RootVStackProps

export const VStack = ({ children, ...props }: VStackProps) => (
  <RootVStack {...props}>{children}</RootVStack>
)

VStack.displayName = 'VStack'
