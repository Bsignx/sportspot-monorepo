import {
  ModalContent as RootModalContent,
  ModalContentProps as RootModalContentProps,
} from '@chakra-ui/react'

export type ModalContentProps = RootModalContentProps

export const ModalContent = ({ children, ...props }: ModalContentProps) => (
  <RootModalContent {...props}>{children}</RootModalContent>
)

ModalContent.displayName = 'ModalContent'
