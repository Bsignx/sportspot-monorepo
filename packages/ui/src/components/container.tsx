import { ContainerProps as RootContainerProps, Container as RootContainer } from '@chakra-ui/react'

export type ContainerProps = RootContainerProps

export const Container = ({ children, ...props }: ContainerProps) => (
  <RootContainer {...props}>{children}</RootContainer>
)

Container.displayName = 'Container'
