import {
  IconButton as RootIconButton,
  IconButtonProps as RootIconButtonProps,
} from '@chakra-ui/react'

export type IconButtonProps = RootIconButtonProps

export const IconButton = ({ children, variant = 'unstyled', ...props }: IconButtonProps) => {
  return (
    <RootIconButton variant={variant} {...props}>
      {children}
    </RootIconButton>
  )
}

IconButton.displayName = 'IconButton'
