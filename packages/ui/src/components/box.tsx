import { BoxProps as BoxPropsRoot, Box as BoxRoot } from '@chakra-ui/react'

export type BoxProps = BoxPropsRoot

export const Box = ({ children, ...props }: BoxProps) => <BoxRoot {...props}>{children}</BoxRoot>

Box.displayName = 'Box'
