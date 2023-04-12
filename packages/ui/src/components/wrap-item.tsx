import {
  WrapItemProps as WrapItemPropsRoot,
  WrapItem as WrapItemRoot,
} from '@chakra-ui/react'

export type WrapItemProps = WrapItemPropsRoot

export const WrapItem = ({ children, ...props }: WrapItemProps) => (
  <WrapItemRoot {...props}>{children}</WrapItemRoot>
)

WrapItem.displayName = 'WrapItem'
