import { NextRequest, NextResponse } from "next/server";

interface AppleLoginRequest {
    state: string
    code: string
    id_token: string
}

export async function POST(request: NextRequest) {
    const json: AppleLoginRequest = await request.json()
    return NextResponse.redirect(`${request.nextUrl.origin}/apple/login?token=${json.id_token}`, 302)
}