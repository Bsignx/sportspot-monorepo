import { ReactNode } from 'react'
import { Metadata } from 'next'

import StylesProvider from '~/styles/styles-provider'
import TrpcProvider from '~/helpers/trpc/trpc-provider'
import BottomNavigation from '~/components/bottom-navigation'

import { ProtectedWrapper } from './components/protected-wrapper'
import { NextAuthProvider } from '~/app/components/next-auth-provider'

import '~/components/map/leaflet.css'

export const metadata: Metadata = {
  title: 'Sportspot',
  description:
    'You can enjoy and benefit from physical activity while feeling comfortable and motivated in your chosen environment.',
  manifest: '/manifest.json',
  themeColor: '#3DFFDC',
  colorScheme: 'light',
  applicationName: 'Sportspot App',
  appleWebApp: { capable: true, statusBarStyle: 'default', title: 'Sportspot App' },
  icons: [
    {
      rel: 'icon',
      url: 'icons/spot-192x192.png',
    },
    {
      rel: 'apple-touch-icon',
      url: 'icons/spot-512x512.png',
    },
  ],
}

function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <StylesProvider>
          <TrpcProvider>
            <NextAuthProvider>
              <ProtectedWrapper>
                {children}
                <BottomNavigation />
              </ProtectedWrapper>
            </NextAuthProvider>
          </TrpcProvider>
        </StylesProvider>
      </body>
    </html>
  )
}

export default RootLayout
