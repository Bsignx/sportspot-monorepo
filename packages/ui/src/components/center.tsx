import { CenterProps as RootCenterProps, Center as RootCenter } from '@chakra-ui/react'

export type CenterProps = RootCenterProps

export const Center = ({ children, ...props }: CenterProps) => (
  <RootCenter {...props}>{children}</RootCenter>
)

Center.displayName = 'Center'
