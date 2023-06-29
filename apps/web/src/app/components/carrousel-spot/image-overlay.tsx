import { Box } from '@sportspot/ui'

export const ImageOverlay = () => (
  <>
    <Box
      aria-hidden
      zIndex="overlay"
      pos="absolute"
      bottom={0}
      left={0}
      w="full"
      h="50%"
      bg="linear-gradient(180deg, rgba(33, 33, 33, 0.00) 17.71%, rgba(19, 19, 19, 0.51) 59.90%, rgba(9, 8, 8, 0.90) 100%);"
    />
    <Box
      aria-hidden
      zIndex="overlay"
      pos="absolute"
      top={0}
      left={0}
      transform="rotate(180deg)"
      w="full"
      h="40%"
      bg="linear-gradient(180deg, rgba(33, 33, 33, 0.00) 0%, rgba(9, 8, 8, 0.57) 100%);"
    />
  </>
)
