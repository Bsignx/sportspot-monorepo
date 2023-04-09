import { Button as RootButton } from '@chakra-ui/react'

export type ButtonProps = {
  children: string
  onClick: () => void
}

export const Button = ({ children = 'hiii', onClick }: ButtonProps) => {
  return (
    <RootButton bgColor="brand.200" onClick={onClick}>
      {children}
    </RootButton>
  )
}

Button.displayName = 'Button'
