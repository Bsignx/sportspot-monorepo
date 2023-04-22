import { GridProps as RootGridProps, Grid as RootGrid } from '@chakra-ui/react'

export type GridProps = RootGridProps

export const Grid = ({ children, ...props }: GridProps) => (
  <RootGrid {...props}>{children}</RootGrid>
)

Grid.displayName = 'Grid'
