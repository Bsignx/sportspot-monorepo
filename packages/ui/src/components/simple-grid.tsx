import {
  SimpleGridProps as SimpleGridPropsRoot,
  SimpleGrid as SimpleGridRoot,
} from '@chakra-ui/react'

export type SimpleGridProps = SimpleGridPropsRoot

export const SimpleGrid = ({ children, ...props }: SimpleGridProps) => (
  <SimpleGridRoot {...props}>{children}</SimpleGridRoot>
)

SimpleGrid.displayName = 'SimpleGrid'
