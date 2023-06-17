import {
  ModalOverlay as RootModalOverlay,
  ModalOverlayProps as RootModalOverlayProps,
} from '@chakra-ui/react'

export type ModalOverlayProps = RootModalOverlayProps

export const ModalOverlay = (props: ModalOverlayProps) => <RootModalOverlay {...props} />

ModalOverlay.displayName = 'ModalOverlay'
