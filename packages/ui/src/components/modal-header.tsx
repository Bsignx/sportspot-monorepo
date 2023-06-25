import {
  ModalHeader as RootModalHeader,
  ModalHeaderProps as RootModalHeaderProps,
} from '@chakra-ui/react'

export type ModalHeaderProps = RootModalHeaderProps

export const ModalHeader = ({ children, ...props }: ModalHeaderProps) => (
  <RootModalHeader {...props}>{children}</RootModalHeader>
)

ModalHeader.displayName = 'ModalHeader'
