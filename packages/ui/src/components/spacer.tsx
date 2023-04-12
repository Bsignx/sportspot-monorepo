import {
  SpacerProps as SpacerPropsRoot,
  Spacer as SpacerRoot,
} from '@chakra-ui/react'

export type SpacerProps = SpacerPropsRoot

export const Spacer = ({ children, ...props }: SpacerProps) => (
  <SpacerRoot {...props}>{children}</SpacerRoot>
)

Spacer.displayName = 'Spacer'
