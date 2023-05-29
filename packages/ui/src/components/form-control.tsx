import {
  FormControl as RootFormControl,
  FormControlProps as RootFormControlProps,
} from '@chakra-ui/react'

export type FormControlProps = RootFormControlProps

export const FormControl = ({ children, ...props }: FormControlProps) => (
  <RootFormControl {...props}>{children}</RootFormControl>
)

FormControl.display = 'FormControl '
