import { GridProps as GridPropsRoot, Grid as GridRoot } from '@chakra-ui/react'

export type GridProps = GridPropsRoot

export const Grid = ({ children, ...props }: GridProps) => (
  <GridRoot {...props}>{children}</GridRoot>
)

Grid.displayName = 'Grid'
