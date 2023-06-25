import {
  ModalFooter as RootModalFooter,
  ModalFooterProps as RootModalFooterProps,
} from '@chakra-ui/react'

export type ModalFooterProps = RootModalFooterProps

export const ModalFooter = ({ children, ...props }: ModalFooterProps) => (
  <RootModalFooter {...props}>{children}</RootModalFooter>
)

ModalFooter.displayName = 'ModalFooter'
