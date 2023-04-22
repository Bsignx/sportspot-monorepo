import { WrapItemProps as RootWrapItemProps, WrapItem as RootWrapItem } from '@chakra-ui/react'

export type WrapItemProps = RootWrapItemProps

export const WrapItem = ({ children, ...props }: WrapItemProps) => (
  <RootWrapItem {...props}>{children}</RootWrapItem>
)

WrapItem.displayName = 'WrapItem'
