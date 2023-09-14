import { defineStyleConfig } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import { defineStyle } from '@chakra-ui/styled-system'

const baseStyle = defineStyle({
  lineHeight: '1.2',
  borderRadius: '2xl',
  fontWeight: 'semibold',
  transitionProperty: 'common',
  transitionDuration: 'normal',
  _focusVisible: {
    boxShadow: 'outline',
  },
  _disabled: {
    opacity: 0.4,
    cursor: 'not-allowed',
    boxShadow: 'none',
  },
  _hover: {
    _disabled: {
      bg: 'initial',
    },
  },
})

type AccessibleColor = {
  bg?: string
  color?: string
  hoverBg?: string
  activeBg?: string
}

/** Accessible color overrides for less accessible colors. */
const accessibleColorMap: { [key: string]: AccessibleColor } = {
  yellow: {
    bg: 'yellow.400',
    color: 'black',
    hoverBg: 'yellow.500',
    activeBg: 'yellow.600',
  },
  cyan: {
    bg: 'cyan.400',
    color: 'black',
    hoverBg: 'cyan.500',
    activeBg: 'cyan.600',
  },
}

const variantSolid = defineStyle((props) => {
  const { colorScheme: c } = props

  if (c === 'gray') {
    const bg = mode(`gray.100`, `whiteAlpha.200`)(props)

    return {
      bg,
      _hover: {
        bg: mode(`gray.200`, `whiteAlpha.300`)(props),
        _disabled: {
          bg,
        },
      },
      _active: { bg: mode(`gray.300`, `whiteAlpha.400`)(props) },
    }
  }

  const {
    bg = `${c}.500`,
    color = 'white',
    hoverBg = `${c}.600`,
    activeBg = `${c}.700`,
  } = accessibleColorMap[c] ?? {}

  const background = mode(bg, `${c}.200`)(props)

  return {
    bg: background,
    color: mode(color, `gray.800`)(props),
    _hover: {
      bg: mode(hoverBg, `${c}.300`)(props),
      _disabled: {
        bg: background,
      },
    },
    _active: { bg: mode(activeBg, `${c}.400`)(props) },
  }
})

const variantPrimary = defineStyle(() => {
  return {
    bg: 'black',
    color: 'white',
    borderRadius: '2xl',
    padding: '24px',
    cursor: 'pointer',
    _hover: {
      filter: 'brightness(0.9)',
    },
    _active: {
      filter: 'brightness(0.8)',
    },
  }
})

const variants = {
  solid: variantSolid,
  primary: variantPrimary,
}

const sizes = {
  lg: defineStyle({
    h: '12',
    minW: '12',
    fontSize: 'lg',
    px: '6',
  }),
  md: defineStyle({
    h: '10',
    minW: '10',
    fontSize: 'md',
    px: '4',
  }),
  sm: defineStyle({
    h: '8',
    minW: '8',
    fontSize: 'sm',
    px: '3',
  }),
  xs: defineStyle({
    h: '6',
    minW: '6',
    fontSize: 'xs',
    px: '2',
  }),
}

export const buttonTheme = defineStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    variant: 'primary',
    size: 'md',
    colorScheme: 'gray',
  },
})
