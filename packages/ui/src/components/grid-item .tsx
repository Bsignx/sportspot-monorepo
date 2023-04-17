import { GridItemProps as GridItemPropsRoot, GridItem as GridItemRoot } from '@chakra-ui/react'

export type GridItemProps = GridItemPropsRoot

export const GridItem = ({ children, ...props }: GridItemProps) => (
  <GridItemRoot {...props}>{children}</GridItemRoot>
)

GridItem.displayName = 'GridItem'
