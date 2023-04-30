import {
  InputRightElementProps as RootInputRightElementProps,
  InputRightElement as RootInputRightElement,
} from '@chakra-ui/react'

export type InputRightElementProps = RootInputRightElementProps

export const InputRightElement = (props: InputRightElementProps) => (
  <RootInputRightElement {...props} />
)

InputRightElement.displayName = 'InputRightElement'
