import { Button as RootButton } from '@chakra-ui/react'

export type ButtonProps = {
  children: string
}

export const Button = ({ children = 'hiii' }: ButtonProps) => {
  return <RootButton bgColor="brand.200">{children}</RootButton>
}

Button.displayName = 'Button'
