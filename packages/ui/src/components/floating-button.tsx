import { Button as RootButton, ButtonProps as RootButtonProps } from '@chakra-ui/react'

export type FloatingButtonProps = RootButtonProps & {
  href?: string
}

export const FloatingButton = ({ children, ...props }: FloatingButtonProps) => {
  return (
    <RootButton
      position="fixed"
      bottom="6"
      right="6"
      borderRadius="100%"
      boxShadow="lg"
      h="54px"
      w="54px"
      padding="0"
      {...props}
    >
      {children}
    </RootButton>
  )
}

FloatingButton.displayName = 'FloatingButton'
