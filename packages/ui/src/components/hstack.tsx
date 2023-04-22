import { StackProps as RootHStackProps, HStack as RootHStack } from '@chakra-ui/react'

export type HStackProps = RootHStackProps

export const HStack = ({ children, ...props }: HStackProps) => (
  <RootHStack {...props}>{children}</RootHStack>
)

HStack.displayName = 'HStack'
