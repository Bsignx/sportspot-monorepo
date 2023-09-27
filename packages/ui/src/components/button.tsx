import { Button as RootButton, ButtonProps as RootButtonProps } from '@chakra-ui/react'

export type ButtonProps = RootButtonProps & {
  isFullWidth?: boolean
  href?: string
  target?: string
  rel?: string
}

export const Button = ({
  children,
  variant = 'primary',
  href,
  target,
  rel,
  isFullWidth,
  ...props
}: ButtonProps) => {
  return (
    <RootButton
      variant={variant}
      href={href}
      target={target}
      rel={rel}
      w={isFullWidth ? '100%' : 'auto'}
      {...props}
    >
      {children}
    </RootButton>
  )
}

Button.displayName = 'Button'
