import {
  StackProps as StackPropsRoot,
  Stack as StackRoot,
} from '@chakra-ui/react'

export type StackProps = StackPropsRoot

export const Stack = ({ children, ...props }: StackProps) => (
  <StackRoot {...props}>{children}</StackRoot>
)

Stack.displayName = 'Stack'
