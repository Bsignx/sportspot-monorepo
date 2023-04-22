import { SpacerProps as RootSpacerProps, Spacer as RootSpacer } from '@chakra-ui/react'

export type SpacerProps = RootSpacerProps

export const Spacer = ({ children, ...props }: SpacerProps) => (
  <RootSpacer {...props}>{children}</RootSpacer>
)

Spacer.displayName = 'Spacer'
