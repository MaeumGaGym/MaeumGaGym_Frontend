'use client'

import { AppleLogo, Close, GoogleLogo, KakaoLogo, WhiteLogo } from '@package/ui'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export const LoginModal = () => {
  const router = useRouter()
  return (
    <div className="rounded-[24px] w-[480px] bg-white flex flex-col overflow-hidden" onClick={e => e.stopPropagation()}>
      <div className="h-[240px] w-full flex justify-center items-center bg-blue500 relative">
        <Image src={WhiteLogo} alt="마음가짐" width={240} height={240} />
        <Close className="absolute top-[40px] right-[40px]" onClick={() => router.back()} />
      </div>
      <div className="w-full px-[52px] py-[64px] gap-[12px] flex flex-col">
        <h2 className="text-titleLarge">로그인</h2>
        <h4 className="text-bodyMedium text-gray600">로그인하여 서비스를 이용해보세요.</h4>
        <div className="flex gap-[24px] pt-[24px]">
          <div className="flex justify-center items-center h-[64px] w-[64px] bg-gray50 rounded-[100%]">
            <GoogleLogo />
          </div>
          <div className="flex justify-center items-center h-[64px] w-[64px] bg-gray50 rounded-[100%]">
            <KakaoLogo />
          </div>
          <div className="flex justify-center items-center h-[64px] w-[64px] bg-gray50 rounded-[100%]">
            <AppleLogo />
          </div>
        </div>
      </div>
    </div>
  )
}
