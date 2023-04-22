import { HeadingProps as RootHeadingProps, Heading as RootHeading } from '@chakra-ui/react'

export type HeadingProps = RootHeadingProps

export const Heading = ({ children, ...props }: HeadingProps) => (
  <RootHeading {...props}>{children}</RootHeading>
)

Heading.displayName = 'Heading'
