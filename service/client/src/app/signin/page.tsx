'use client'
import { useRouter } from 'next/navigation'
import { useLayoutEffect } from 'react'

export default function LoginPage() {
  const router = useRouter()
  useLayoutEffect(() => {
    router.push('/')
  }, [])
  return <div></div>
}
