import { BoxProps as RootBoxProps, Box as RootBox } from '@chakra-ui/react'

export type BoxProps = RootBoxProps

export const Box = ({ children, ...props }: BoxProps) => <RootBox {...props}>{children}</RootBox>

Box.displayName = 'Box'
