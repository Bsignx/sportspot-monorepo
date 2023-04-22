import { WrapProps as RootWrapProps, Wrap as RootWrap } from '@chakra-ui/react'

export type WrapProps = RootWrapProps

export const Wrap = ({ children, ...props }: WrapProps) => (
  <RootWrap {...props}>{children}</RootWrap>
)

Wrap.displayName = 'Wrap'
