import { useToast as rootUseToast, UseToastOptions as RootUseToastOptions } from '@chakra-ui/react'

export type UseToastOptions = RootUseToastOptions

export const useToast = () => {
  const toastChakra = rootUseToast()

  const teenSeconds = 10 * 1000

  const toast = ({
    duration = teenSeconds,
    isClosable = true,
    position = 'top',
    ...props
  }: UseToastOptions) => {
    toastChakra({ ...props, duration, isClosable, position })
  }

  return toast
}

useToast.display = 'useToast'
