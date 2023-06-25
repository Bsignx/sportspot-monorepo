import {
  UseDisclosureReturn,
  useDisclosure as RootuseDisclosure,
  UseDisclosureProps as RootUseDisclosureProps,
} from '@chakra-ui/react'

export type UseDisclosureProps = RootUseDisclosureProps

export const useDisclosure = (props?: UseDisclosureProps): UseDisclosureReturn =>
  RootuseDisclosure(props)

useDisclosure.displayName = 'useDisclosure'
