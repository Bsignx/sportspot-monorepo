import { Skeleton as RootSkeleton, SkeletonProps as RootSkeletonProps } from '@chakra-ui/react'

export type SkeletonProps = RootSkeletonProps

export const Skeleton = ({ children, ...props }: SkeletonProps) => (
  <RootSkeleton {...props}>{children}</RootSkeleton>
)

Skeleton.displayName = 'Skeleton'
