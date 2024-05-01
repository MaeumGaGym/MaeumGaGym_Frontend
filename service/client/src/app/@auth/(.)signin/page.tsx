'use client'

import { Modal } from './Modal'
import { LoginModal } from './LoginModal'
import { useEffect, useState } from 'react'
import { TermsModal } from './TermsModal'
import { InfoModal } from './InfoModal'
import { useRouter } from 'next/navigation'
import { signup } from '@/apis/auth/signup'
import { loginCategory } from '@/apis'
import { toast } from '@/utils'

interface registerProps {
  category?: loginCategory
  terms: {
    marketing: boolean
  }
  info: {
    nickname: string
  }
}

export default function AuthModal() {
  const [registerData, setRegisterData] = useState<registerProps>({
    terms: { marketing: false },
    info: { nickname: '' },
  })
  const [step, setStep] = useState<'auth' | 'terms' | 'info' | 'final'>('auth')

  const router = useRouter()

  useEffect(() => {
    const doSignup = async () => {
      if (registerData?.category && await signup(registerData.category, registerData.info.nickname)) {
        toast.success('회원가입에 성공하셨습니다!')
        router.push(`/signin`)
      } else {
        router.refresh()
        setStep('auth')
      }
    }
    if (step === 'final') {
      // console.log(`nickname : ${registerData.info.nickname}, category : ${registerData.category}`)
      doSignup()
    }
  }, [step])

  return (
    <Modal>
      {step === 'auth' && (
        <LoginModal
          nextStep={() => setStep('terms')}
          setData={(v: loginCategory) => setRegisterData({ ...registerData, category: v })}
        />
      )}
      {step === 'terms' && (
        <TermsModal
          nextStep={() => setStep('info')}
          setData={(v: boolean) => setRegisterData({ ...registerData, terms: { marketing: v } })}
        />
      )}
      {step === 'info' && (
        <InfoModal
          nextStep={() => setStep('final')}
          setData={(v: string) => setRegisterData({ ...registerData, info: { nickname: v } })}
        />
      )}
    </Modal>
  )
}
