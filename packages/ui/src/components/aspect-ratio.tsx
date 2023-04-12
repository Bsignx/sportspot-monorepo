import {
  AspectRatioProps as AspectRatioPropsRoot,
  AspectRatio as AspectRatioRoot,
} from '@chakra-ui/react'

export type AspectRatioProps = AspectRatioPropsRoot

export const AspectRatio = ({ children, ...props }: AspectRatioProps) => (
  <AspectRatioRoot {...props}>{children}</AspectRatioRoot>
)

AspectRatio.displayName = 'AspectRatio'
