import { theme as rootTheme, Chakra } from '@sportspot/ui'
import { Poppins, Rubik } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800', '900'] })
const rubik = Rubik({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800', '900'] })

type ThemeTypes = Chakra.Theme & {
  fonts: {
    altHeading: string
  }
}

export const theme = {
  ...rootTheme,
  fonts: {
    body: poppins.style.fontFamily,
    heading: poppins.style.fontFamily,
    altHeading: rubik.style.fontFamily,
  },
  styles: {
    ...rootTheme.styles,
    global: {
      ...rootTheme.styles.global,
      'html, body': {
        bg: 'secondary',
      },

      'h1, h2, h3, h4, h5, h6': {
        color: 'tertiary',
      },

      'p, span, a, button': {
        color: 'quaternary',
      },
      '#chakra-toast-manager-top': {
        top: '3rem !important',
      },
    },
  },
} as ThemeTypes
