import { redirect } from "next/navigation";
import {NextRequest, NextResponse} from "next/server";

interface AppleLoginRequest {
    state: string
    code: string
    id_token: string
}

export async function POST (request: NextRequest){
    const json:AppleLoginRequest = await request.json()
    redirect(`/apple/login?token=${json.id_token}`)
}