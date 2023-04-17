import { CenterProps as CenterPropsRoot, Center as CenterRoot } from '@chakra-ui/react'

export type CenterProps = CenterPropsRoot

export const Center = ({ children, ...props }: CenterProps) => (
  <CenterRoot {...props}>{children}</CenterRoot>
)

Center.displayName = 'Center'
