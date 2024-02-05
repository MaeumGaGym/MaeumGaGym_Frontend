'use client'

import { useRouter } from 'next/navigation'

export const Modal = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()
  return (
    <div
      className="fixed z-20 top-0 left-0 w-full h-[100dvh] flex justify-center items-center bg-[rgba(0,0,0,0.24)]"
      onClick={() => router.back()}
    >
      <div>{children}</div>
    </div>
  )
}
