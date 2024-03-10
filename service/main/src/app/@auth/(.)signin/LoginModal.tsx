import { login } from '@/apis/auth/login'
import { getCookie } from '@/utils'
import { AppleLogo, GoogleLogo, KakaoLogo, WhiteLogo } from '@package/ui'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const client_id = '9435200486-cqvufkdfa44kuv50i0c52bco46o2big1.apps.googleusercontent.com'
const response_type = 'token'
const redirect_uri = 'http://localhost:3000/google/login'
const scope = 'https://www.googleapis.com/auth/userinfo.email+https://www.googleapis.com/auth/userinfo.profile'

export const LoginModal = ({ nextStep, setData }: { nextStep: () => void; setData: (v: string) => void }) => {
  const router = useRouter()
  useEffect(() => {
    localStorage.setItem('access_token', '')
    const loginWithToken = async (e: { origin: string; data: string }) => {
      if (e.origin === 'http://localhost:3000' && typeof e.data === 'string') {
        console.log(e.data)
        localStorage.setItem('access_token', e.data)
        if (await login(e.data)) {
          const RF_TOKEN = getCookie('RF-TOKEN') || undefined
          router.push(`https://maeumgagym-user-stag.xquare.app/?refresh=${RF_TOKEN}&token=${e.data}`)
          console.log('success!')
        } else {
          setData(e.data)
          nextStep()
        }
        window.removeEventListener('message', e => loginWithToken(e))
      }
    }
    window.addEventListener('message', e => loginWithToken(e))
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
                `https://accounts.google.com/o/oauth2/v2/auth?client_id=${client_id}&response_type=${response_type}&redirect_uri=${redirect_uri}&scope=${scope}`,
                '마음가짐 Google 로그인',
                `width=640, height=640, left=${(window.outerWidth - 320) / 2}, top=${(window.outerHeight - 640) / 2}`
              )
            }}
          >
            <GoogleLogo />
          </div>
          <div className="flex justify-center items-center h-[64px] w-[64px] bg-gray50 rounded-[100%] cursor-pointer">
            <KakaoLogo />
          </div>
          <div className="flex justify-center items-center h-[64px] w-[64px] bg-gray50 rounded-[100%] cursor-pointer">
            <AppleLogo />
          </div>
        </div>
      </div>
    </>
  )
}
