import {
  SimpleGridProps as RootSimpleGridProps,
  SimpleGrid as RootSimpleGrid,
} from '@chakra-ui/react'

export type SimpleGridProps = RootSimpleGridProps

export const SimpleGrid = ({ children, ...props }: SimpleGridProps) => (
  <RootSimpleGrid {...props}>{children}</RootSimpleGrid>
)

SimpleGrid.displayName = 'SimpleGrid'
