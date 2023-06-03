import {
  SkeletonCircle as RootSkeletonCircle,
  SkeletonProps as RootSkeletonProps,
} from '@chakra-ui/react'

export type SkeletonCircleProps = RootSkeletonProps

export const SkeletonCircle = ({ children, ...props }: SkeletonCircleProps) => (
  <RootSkeletonCircle {...props}>{children}</RootSkeletonCircle>
)

SkeletonCircle.displayName = 'SkeletonCircle'
