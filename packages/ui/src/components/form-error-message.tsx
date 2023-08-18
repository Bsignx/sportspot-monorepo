import {
  FormErrorMessage as RootFormErrorMessage,
  FormErrorMessageProps as RootFormErrorMessageProps,
} from '@chakra-ui/react'

export type FormErrorMessageProps = RootFormErrorMessageProps

export const FormErrorMessage = ({ children, ...props }: FormErrorMessageProps) => (
  <RootFormErrorMessage fontSize="xs" {...props}>
    {children}
  </RootFormErrorMessage>
)

FormErrorMessage.display = 'FormErrorMessage'
