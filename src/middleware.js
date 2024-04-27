export { default }
from "next-auth/middleware"
import { NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'


export async function middleware(request) {
    const token = await getToken({ req: request })
    const url = request.nextUrl
    if (token && (
            url.pathname.startsWith("/login") ||
            url.pathname.startsWith("/signup")
        )) {
        return NextResponse.redirect(new URL('/', request.url))
    }else if(!token && (
    
        url.pathname.startsWith("/listing")
    
    )){
        return NextResponse.redirect(new URL('/login', request.url))
    }

}

export const config = {
    matcher: [
        "/profile",
        "/login",
        "/signup",
        "/listing",

    ]
}