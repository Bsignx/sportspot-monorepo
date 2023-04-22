import { HighlightProps as RootHighlightProps, Highlight as RootHighlight } from '@chakra-ui/react'

export type HighlightProps = RootHighlightProps

export const Highlight = ({ children, ...props }: HighlightProps) => (
  <RootHighlight {...props}>{children}</RootHighlight>
)

Highlight.displayName = 'Highlight'
