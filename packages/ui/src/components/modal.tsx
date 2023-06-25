import { Modal as RootModal, ModalProps as RootModalProps } from '@chakra-ui/react'

export type ModalProps = RootModalProps

export const Modal = ({ children, ...props }: ModalProps) => (
  <RootModal {...props}> {children}</RootModal>
)

Modal.displayName = 'Modal'
