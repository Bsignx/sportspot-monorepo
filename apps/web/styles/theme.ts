import { theme as rootTheme, Chakra } from '@sportspot/ui'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800', '900'] })

export const theme = {
  ...rootTheme,
  fonts: {
    body: poppins.style.fontFamily,
    heading: poppins.style.fontFamily,
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
} as Chakra.Theme
