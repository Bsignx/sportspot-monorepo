import { theme as rootTheme, Chakra } from '@sportspot/ui'
import { Poppins, Rubik } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800', '900'] })
const rubik = Rubik({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800', '900'] })

type ThemeTypes = Chakra.Theme & {
  fonts: {
    altHeading: string
  }
}

const breakpoints = {
  sm: '23.438em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
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
        bg: 'gradient.200',
      },
    },
  },

  breakpoints,
} as ThemeTypes
