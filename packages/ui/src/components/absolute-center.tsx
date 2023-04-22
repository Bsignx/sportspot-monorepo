import {
  AbsoluteCenterProps as RootAbsoluteCenterProps,
  AbsoluteCenter as RootAbsoluteCenter,
} from '@chakra-ui/react'

export type AbsoluteCenterProps = RootAbsoluteCenterProps

export const AbsoluteCenter = ({ children, ...props }: AbsoluteCenterProps) => (
  <RootAbsoluteCenter {...props}>{children}</RootAbsoluteCenter>
)

AbsoluteCenter.displayName = 'AbsoluteCenter'
