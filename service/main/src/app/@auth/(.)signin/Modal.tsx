'use client'

import { Close } from '@package/ui'
import { useRouter } from 'next/navigation'

export const Modal = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()
  return (
    <div className="fixed z-20 top-0 left-0 w-full h-[100dvh] flex justify-center items-center bg-[rgba(0,0,0,0.24)]">
      <div className="rounded-[24px] w-[480px] bg-white flex flex-col overflow-hidden relative">
        <Close className="absolute top-[40px] right-[40px]" onClick={() => router.back()} />
        {children}
      </div>
    </div>
  )
}
