'use client'

import Image from 'next/image'
import { Button } from '@package/ui'
import { HeaderLogo } from '@package/ui'
import { useRouter } from 'next/navigation'

export const Header = () => {
  const router = useRouter()
  return (
    <header className="transition-all flex w-full h-[60px] items-center justify-between lg:px-[170px] md:px-[64px] sm:px-[20px] bg-white border-b border-gray100 fixed z-10">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-[2px] cursor-pointer" onClick={() => router.push('/')}>
          <Image src={HeaderLogo} alt="logo image" width={42} height={42} priority />
          <span className="text-[20px] font-bold leading-[24px] text-gray800 dark:text-gray100">마음가짐</span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Button kind="white" fontSize="small" onClick={() => router.push('/signin', { scroll: false })}>
          로그인
        </Button>
        <Button kind="primary" fontSize="small">
          문의하기
        </Button>
      </div>
    </header>
  )
}
