import { forwardRef } from 'react'
import { SelectProps as RootSelectProps, Select as RootSelect } from '@chakra-ui/react'

export type SelectProps = RootSelectProps

export const Select = forwardRef((props: SelectProps, ref) => <RootSelect ref={ref} {...props} />)

Select.displayName = 'Select'
