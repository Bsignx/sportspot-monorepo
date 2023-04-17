import { AbsoluteCenterProps as AbsoluteCenterPropsRoot, AbsoluteCenter as AbsoluteCenterRoot } from '@chakra-ui/react'

export type AbsoluteCenterProps = AbsoluteCenterPropsRoot

export const AbsoluteCenter = ({ children, ...props }: AbsoluteCenterProps) => (
  <AbsoluteCenterRoot {...props}>{children}</AbsoluteCenterRoot>
)

AbsoluteCenter.displayName = 'AbsoluteCenter'
