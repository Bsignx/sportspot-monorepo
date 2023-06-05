import { ReactNode } from 'react'
import { Metadata } from 'next'

import StylesProvider from '~/styles/styles-provider'
import TrpcProvider from '~/helpers/trpc/trpc-provider'
import BottomNavigation from '~/components/bottom-navigation'
// import RegisterPWA from './register-pwa'

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
  formatDetection: { telephone: false },
  viewport: { width: 'device-width', initialScale: 1 },
  icons: [
    { rel: 'shortcut icon', url: '/favicon.ico' },
    {
      rel: 'icon',
      url: 'icons/spot-192x192.png',
    },
    {
      rel: 'apple-touch-icon',
      url: 'icons/spot-192x192.png',
      sizes: '192x192',
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
