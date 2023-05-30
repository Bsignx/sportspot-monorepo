import { forwardRef } from 'react'
import { InputProps as RootInputProps, Input as RootInput } from '@chakra-ui/react'

export type InputProps = RootInputProps

export const Input = forwardRef((props: InputProps, ref) => <RootInput ref={ref} {...props} />)

Input.displayName = 'Input'
