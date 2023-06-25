import { ModalBody as RootModalBody, ModalBodyProps as RootModalBodyProps } from '@chakra-ui/react'

export type ModalBodyProps = RootModalBodyProps

export const ModalBody = ({ children, ...props }: ModalBodyProps) => (
  <RootModalBody {...props}>{children}</RootModalBody>
)

ModalBody.displayName = 'ModalBody'
