import { InputProps as RootInputProps, Input as RootInput } from '@chakra-ui/react'

export type InputProps = RootInputProps

export const Input = (props: InputProps) => <RootInput {...props} />

Input.displayName = 'Input'
