import { GridItemProps as RootGridItemProps, GridItem as RootGridItem } from '@chakra-ui/react'

export type GridItemProps = RootGridItemProps

export const GridItem = ({ children, ...props }: GridItemProps) => (
  <RootGridItem {...props}>{children}</RootGridItem>
)

GridItem.displayName = 'GridItem'
