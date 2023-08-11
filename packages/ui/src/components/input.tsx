import { forwardRef } from 'react'
import { InputProps as RootInputProps, Input as RootInput } from '@chakra-ui/react'

export type InputProps = RootInputProps & {
  hasIcon?: boolean
}

export const Input = forwardRef(({ hasIcon, ...props }: InputProps, ref) => (
  <RootInput ref={ref} pl={hasIcon ? '12' : '4'} {...props} />
))

Input.displayName = 'Input'
