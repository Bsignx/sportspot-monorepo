import { forwardRef } from 'react'
import { Checkbox as RootCheckbox, CheckboxProps as RootCheckboxProps } from '@chakra-ui/react'

export type CheckboxProps = RootCheckboxProps

export const Checkbox = forwardRef((props: CheckboxProps, ref) => (
  <RootCheckbox ref={ref} {...props} />
))

Checkbox.displayName = 'Checkbox'
