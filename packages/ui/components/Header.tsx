import Image from 'next/image'
import { Button } from './Button'
import { HeaderLogo } from '../assets'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'

export const Header = () => {
  const router = useRouter()
  const pathName = usePathname()
  useEffect(() => {
    if (pathName.slice(1, 7) === 'pickle') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [pathName])

  return (
    <header className="transition-all flex w-full h-[60px] items-center justify-between lg:px-[170px] md:px-[64px] sm:px-[20px] bg-white dark:bg-gray900 border-b border-gray100 fixed z-50">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-[2px] cursor-pointer" onClick={() => router.push('/')}>
          <Image src={HeaderLogo} alt="logo image" width={42} height={42} priority />
          <span className="text-[20px] font-bold leading-[24px] text-gray800 dark:text-gray100">마음가짐</span>
        </div>
        <div className="flex items-center gap-3 sm:hidden">
          <Button kind="white" fontSize="small" className="h-[42px]" onClick={() => router.push('/selfcare')}>
            자기관리
          </Button>
          <Button kind="white" fontSize="small" className="h-[42px]" onClick={() => router.push('/poses')}>
            운동자세
          </Button>
          <Button kind="white" fontSize="small" className="h-[42px]" onClick={() => router.push('/pickle')}>
            피클
          </Button>
          <Button kind="white" fontSize="small" className="h-[42px]" onClick={() => router.push('/shop')}>
            마켓
          </Button>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Button kind="white" className="h-[42px]" fontSize="small">
          마이페이지
        </Button>
        <Button kind="primary" className="h-fit" fontSize="small">
          문의하기
        </Button>
      </div>
    </header>
  )
}
