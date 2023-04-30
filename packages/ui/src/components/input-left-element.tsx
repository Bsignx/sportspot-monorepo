import {
  InputLeftElementProps as RootInputLeftElementProps,
  InputLeftElement as RootInputLeftElement,
} from '@chakra-ui/react'

export type InputLeftElementProps = RootInputLeftElementProps

export const InputLeftElement = (props: InputLeftElementProps) => (
  <RootInputLeftElement {...props} />
)

InputLeftElement.displayName = 'InputLeftElement'
