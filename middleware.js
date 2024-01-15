import { NextResponse } from 'next/server'
 
export function middleware(request) {
  if (request.nextUrl.pathname.startsWith('/')) {

    console.log(request.nextUrl.pathname,"12345")
    return NextResponse.redirect(new URL(`/1/${request.nextUrl.pathname}`, request.url))
  }
 
}

export const config = {
    matcher: [
        '/',
        '/'
    ]
}