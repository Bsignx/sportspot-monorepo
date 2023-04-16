import {
  Button as RootButton,
  ButtonProps as ButtonPropsRoot,
} from '@chakra-ui/react'

export type ButtonProps = ButtonPropsRoot & {
  isFullWidth?: boolean
}

export const Button = ({
  children,
  variant = 'primary',
  ...props
}: ButtonProps) => {
  return (
    <RootButton variant={variant} {...props}>
      {children}
    </RootButton>
  )
}

Button.displayName = 'Button'
