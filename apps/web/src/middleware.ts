import { getToken } from 'next-auth/jwt'
import { NextRequest, NextResponse } from 'next/server'

import { env } from '~/env'
import { publicRoutes } from '~/config/public-routes'

export async function middleware(request: NextRequest) {
  const hasVisitedCookie = request.cookies.get('hasVisited')
  const hasVisited = hasVisitedCookie?.value === 'true'

  if (!hasVisited) {
    const response = NextResponse.redirect(new URL('/onboarding/1', request.url))

    response.cookies.set({
      name: 'hasVisited',
      value: 'true',
      path: '/',
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365), // 1 year
    })

    return response
  }

  const token = await getToken({ req: request, secret: env.NEXTAUTH_SECRET })
  const path = request.nextUrl.pathname

  const routeIsNotPublic = !publicRoutes.includes(path)

  if (!token && routeIsNotPublic) return NextResponse.redirect(new URL('/login', request.url))

  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/profile', '/favorites', '/my-spots', '/my-spots/create'],
}
