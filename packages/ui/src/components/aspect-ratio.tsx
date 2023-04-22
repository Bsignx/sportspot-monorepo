import {
  AspectRatioProps as RootAspectRatioProps,
  AspectRatio as RootAspectRatio,
} from '@chakra-ui/react'

export type AspectRatioProps = RootAspectRatioProps

export const AspectRatio = ({ children, ...props }: AspectRatioProps) => (
  <RootAspectRatio {...props}>{children}</RootAspectRatio>
)

AspectRatio.displayName = 'AspectRatio'
