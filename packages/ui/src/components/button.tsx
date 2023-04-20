import { Button as RootButton, ButtonProps as ButtonPropsRoot } from '@chakra-ui/react'

export type ButtonProps = ButtonPropsRoot & {
  isFullWidth?: boolean
  href?: string
}

export const Button = ({
  children,
  variant = 'primary',
  href,
  isFullWidth,
  ...props
}: ButtonProps) => {
  return (
    <RootButton variant={variant} href={href} w={isFullWidth ? '100%' : 'auto'} {...props}>
      {children}
    </RootButton>
  )
}

Button.displayName = 'Button'
