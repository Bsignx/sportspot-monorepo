import {
  ModalCloseButton as RootModalCloseButton,
  ModalCloseButtonProps as RootModalCloseButtonProps,
} from '@chakra-ui/react'

export type ModalCloseButtonProps = RootModalCloseButtonProps

export const ModalCloseButton = (props: ModalCloseButtonProps) => (
  <RootModalCloseButton {...props} />
)

ModalCloseButton.displayName = 'ModalCloseButton'
