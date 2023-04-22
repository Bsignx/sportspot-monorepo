import { StackProps as RootStackProps, Stack as RootStack } from '@chakra-ui/react'

export type StackProps = RootStackProps

export const Stack = ({ children, ...props }: StackProps) => (
  <RootStack {...props}>{children}</RootStack>
)

Stack.displayName = 'Stack'
