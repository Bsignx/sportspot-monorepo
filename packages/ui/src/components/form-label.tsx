import { FormLabel as RootFormLabel, FormLabelProps as RootFormLabelProps } from '@chakra-ui/react'

export type FormLabelProps = RootFormLabelProps

export const FormLabel = ({ children, ...props }: FormLabelProps) => (
  <RootFormLabel {...props}>{children}</RootFormLabel>
)

FormLabel.display = 'FormLabel'
