import {
  SkeletonText as RootSkeletonText,
  SkeletonTextProps as RootSkeletonTextProps,
} from '@chakra-ui/react'

export type SkeletonTextProps = RootSkeletonTextProps

export const SkeletonText = ({ children, ...props }: SkeletonTextProps) => (
  <RootSkeletonText {...props}>{children}</RootSkeletonText>
)

SkeletonText.displayName = 'SkeletonText'
