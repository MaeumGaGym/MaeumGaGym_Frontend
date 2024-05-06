'use client'
import Image from 'next/image'
import { Button, HeaderLogo } from '@package/ui'
import { usePathname, useRouter } from 'next/navigation'
import { useLayoutEffect, useState } from 'react'
import { getCookie } from '@/utils'

export const Header = () => {
  const [hasToken, setHasToken] = useState<boolean>(false)
  const router = useRouter()
  const pathName = usePathname()
  useLayoutEffect(() => {
    console.log(pathName)
    if (pathName.split('/')[1] === 'pickle') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    setHasToken(!!getCookie('access_token'))
  }, [pathName])

  return (
    <header className="transition-all flex w-full h-[60px] items-center justify-between lg:px-[170px] md:px-[64px] sm:px-[20px] bg-white dark:bg-gray900 border-b border-gray100 fixed z-50">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-[2px] cursor-pointer" onClick={() => router.push(hasToken ? '/main' : '/')}>
          <Image src={HeaderLogo} alt="logo image" width={42} height={42} priority />
          <span className="text-[20px] font-bold leading-[24px] text-gray800 dark:text-gray100">마음가짐</span>
        </div>
        {hasToken && (
          <div className="flex items-center gap-3 sm:hidden">
            <Button kind="white" fontSize="small" className="h-[42px]" onClick={() => router.push('/selfcare')}>
              자기관리
            </Button>
            <Button kind="white" fontSize="small" className="h-[42px]" onClick={() => router.push('/pose')}>
              운동자세
            </Button>
            <Button kind="white" fontSize="small" className="h-[42px]" onClick={() => router.push('/pickle')}>
              피클
            </Button>
            <Button kind="white" fontSize="small" className="h-[42px]" onClick={() => router.push('/shop')}>
              마켓
            </Button>
          </div>
        )}
      </div>
      <div className="flex items-center gap-3">
        {hasToken ? (
          <Button kind="white" className="h-[42px]" fontSize="small">
            마이페이지
          </Button>
        ) : (
          <Button kind="white" fontSize="small" onClick={() => router.push('/signin', { scroll: false })}>
            로그인
          </Button>
        )}
        <Button kind="primary" className="h-fit" fontSize="small">
          문의하기
        </Button>
      </div>
    </header>
  )
}
