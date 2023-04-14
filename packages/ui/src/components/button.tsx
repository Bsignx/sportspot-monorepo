import {
  Button as RootButton,
  ButtonProps as ButtonPropsRoot,
} from '@chakra-ui/react'

export type ButtonProps = ButtonPropsRoot & {
  isFullWidth?: boolean
}

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <RootButton variant="primary" {...props}>
      {children}
    </RootButton>
  )
}

Button.displayName = 'Button'
