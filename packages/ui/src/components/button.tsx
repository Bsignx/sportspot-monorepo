import {
  Button as RootButton,
  ButtonProps as ButtonPropsRoot,
} from '@chakra-ui/react'

export type ButtonProps = ButtonPropsRoot

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <RootButton
      width="100%"
      bgColor="black"
      borderRadius="100px"
      color="white"
      padding="24px"
      cursor="pointer"
      border="none"
      fontFamily="Poppins"
      _hover={{
        filter: 'brightness(0.9)',
      }}
      _active={{
        filter: 'brightness(0.8)',
      }}
      {...props}
    >
      {children}
    </RootButton>
  )
}

Button.displayName = 'Button'
