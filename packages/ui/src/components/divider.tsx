import { DividerProps as RootDividerProps, Divider as RootDivider } from '@chakra-ui/react'

export type DividerProps = RootDividerProps

export const Divider = ({ children, ...props }: DividerProps) => (
  <RootDivider {...props}>{children}</RootDivider>
)

Divider.displayName = 'Divider'
