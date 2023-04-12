import {
  ContainerProps as ContainerPropsRoot,
  Container as ContainerRoot,
} from '@chakra-ui/react'

export type ContainerProps = ContainerPropsRoot

export const Container = ({ children, ...props }: ContainerProps) => (
  <ContainerRoot {...props}>{children}</ContainerRoot>
)

Container.displayName = 'Container'
