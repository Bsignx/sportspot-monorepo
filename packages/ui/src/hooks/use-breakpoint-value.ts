import {
  useBreakpointValue as RootUseBreakpointValue,
  UseBreakpointOptions as RootUseBreakpointOptions,
} from '@chakra-ui/react'

export type UseBreakpointOptions = RootUseBreakpointOptions

export const useBreakpointValue = (
  responsive: any | any[] | Partial<Record<string, any>>,
  options: UseBreakpointOptions,
) => RootUseBreakpointValue(responsive, options)

useBreakpointValue.displayName = 'useBreakpointValue'
