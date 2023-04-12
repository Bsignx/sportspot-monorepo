import { WrapProps as WrapPropsRoot, Wrap as WrapRoot } from '@chakra-ui/react'

export type WrapProps = WrapPropsRoot

export const Wrap = ({ children, ...props }: WrapProps) => (
  <WrapRoot {...props}>{children}</WrapRoot>
)

Wrap.displayName = 'Wrap'
