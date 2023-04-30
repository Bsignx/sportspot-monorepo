import {
  InputGroupProps as RootInputGroupProps,
  InputGroup as RootInputGroup,
} from '@chakra-ui/react'

export type InputGroupProps = RootInputGroupProps

export const InputGroup = (props: InputGroupProps) => (
  <RootInputGroup {...props}>{props.children}</RootInputGroup>
)

InputGroup.displayName = 'InputGroup'
