import { forwardRef } from 'react'
import { TextareaProps as RootTextareaProps, Textarea as RootTextarea } from '@chakra-ui/react'

export type TextareaProps = RootTextareaProps

export const Textarea = forwardRef((props: TextareaProps, ref) => (
  <RootTextarea ref={ref} {...props} />
))

Textarea.displayName = 'Textarea'
