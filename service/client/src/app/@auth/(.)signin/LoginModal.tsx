import Image from 'next/image'
import { isLocal, setCookie } from '@/utils'
import { AppleLogo, GoogleLogo, KakaoLogo, WhiteLogo } from '@package/ui'
import { useRouter } from 'next/navigation'
import { useCallback, useEffect } from 'react'
import * as process from 'process'
import { kakaoCodeToToken, login, type loginCategory } from '@/apis'
import { toast } from '@/utils'

type TokenType = {
  token: string
  type: loginCategory
  source?: string
}

export const LoginModal = ({ nextStep, setData }: { nextStep: () => void; setData: (v: loginCategory) => void }) => {
  const origin = location.origin
  const router = useRouter()

  const loginWithToken = useCallback(async (e: MessageEvent<unknown>) => {
    const data = e.data as TokenType

    if (data.source || !(data.type && data.token)) return
    if (data.type === 'kakao') {
      const isSuccess = await kakaoCodeToToken(data.token)
      if (!isSuccess) {
        window.removeEventListener('message', loginWithToken)
        toast.error('카카오 로그인에 문제가 있어요. 관리자에게 문의해 주세요.')
        router.back()
        return
      }
    }

    await login(data.type, data.token)
      .then(token => {
        localStorage.setItem('access_token', token!)
        setCookie('access_token', token!)
        location.href = origin + '/main'
      })
      .catch(() => {
        if (data.type === 'kakao') {
          setCookie('OAUTH_TOKEN', data.token)
        }
        setData(data.type)
        nextStep()
      })
      .finally(() => window.removeEventListener('message', loginWithToken))
  }, [])

  const oauthParams = useCallback((oauth: 'google' | 'kakao' | 'apple') => {
    let config: { [key: string]: string } = {}
    switch (oauth) {
      case 'google':
        config = {
          client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || 'undefined',
          response_type: 'token',
          redirect_uri:
            (isLocal()
              ? process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI_LOCAL
              : process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI) || 'undefined',
          scope: process.env.NEXT_PUBLIC_GOOGLE_SCOPE || 'undefined',
        }
        break
      case 'kakao':
        config = {
          client_id: process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID || 'undefined',
          response_type: 'code',
          redirect_uri:
            (isLocal()
              ? process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI_LOCAL
              : process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI) || 'undefined',
        }
        break
      case 'apple':
        config = {
          client_id: process.env.NEXT_PUBLIC_APPLE_CLIENT_ID || 'undefined',
          redirect_uri: process.env.NEXT_PUBLIC_APPLE_REDIRECT_URI || 'undefined',
          response_type: 'code id_token',
          state: 'origin:web',
          response_mode: 'fragment',
        }
        break
    }
    return Object.entries(config)
      .map(([key, value]) => `${key}=${value}`)
      .join('&')
  }, [])

  useEffect(() => {
    localStorage.setItem('access_token', '')
    window.addEventListener('message', loginWithToken)
    return () => {
      window.removeEventListener('message', loginWithToken)
    }
  }, [])

  return (
    <>
      <div className="h-[240px] w-full flex justify-center items-center bg-blue500">
        <Image src={WhiteLogo} alt="마음가짐" width={240} height={240} />
      </div>
      <div className="w-full px-[52px] py-[64px] gap-[12px] flex flex-col">
        <h2 className="text-titleLarge">로그인</h2>
        <h4 className="text-bodyMedium text-gray600">로그인하여 서비스를 이용해보세요.</h4>
        <div className="flex gap-[24px] pt-[24px]">
          <div
            className="flex justify-center items-center h-[64px] w-[64px] bg-gray50 rounded-[100%] cursor-pointer"
            onClick={() => {
              window.open(
                `https://accounts.google.com/o/oauth2/v2/auth?${oauthParams('google')}`,
                '마음가짐 Google 로그인',
                `width=640, height=640, left=${(window.outerWidth - 320) / 2}, top=${(window.outerHeight - 640) / 2}`
              )
            }}
          >
            <GoogleLogo />
          </div>
          <div
            className="flex justify-center items-center h-[64px] w-[64px] bg-gray50 rounded-[100%] cursor-pointer"
            onClick={() => {
              window.open(
                `https://kauth.kakao.com/oauth/authorize?${oauthParams('kakao')}`,
                '마음가짐 Kakao 로그인',
                `width=640, height=640, left=${(window.outerWidth - 320) / 2}, top=${(window.outerHeight - 640) / 2}`
              )
            }}
          >
            <KakaoLogo />
          </div>
          <div
            className="flex justify-center items-center h-[64px] w-[64px] bg-gray50 rounded-[100%] cursor-pointer"
            onClick={() => {
              window.open(
                `https://appleid.apple.com/auth/authorize?${oauthParams('apple')}`,
                '마음가짐 apple 로그인',
                `width=640, height=640, left=${(window.outerWidth - 320) / 2}, top=${(window.outerHeight - 640) / 2}`
              )
            }}
          >
            <AppleLogo />
          </div>
        </div>
      </div>
    </>
  )
}
