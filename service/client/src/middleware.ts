import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const BeforeLoginPath = ['/signin', '/login', '/privacy']

export function middleware(request: NextRequest) {
  const origin = new URL('/', request.url).href
  const pathCheck = BeforeLoginPath.every(path => !request.url.includes(path))
  if (cookies().get('access_token') === undefined && request.url !== origin && pathCheck) {
    return NextResponse.redirect(new URL('/', request.url))
  }
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'],
}
