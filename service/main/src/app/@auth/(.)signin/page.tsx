'use client'

import { Modal } from './Modal'
import { LoginModal } from './LoginModal'
import { useEffect, useState } from 'react'
import { TermsModal } from './TermsModal'
import { InfoModal } from './InfoModal'
import { useRouter } from 'next/navigation'
import { signup } from '@/apis/auth/signup'

interface registerProps {
  token: string
  terms: {
    marketing: boolean
  }
  info: {
    nickname: string
  }
}

export default function AuthModal() {
  const [registerData, setRegisterData] = useState<registerProps>({
    token: '',
    terms: { marketing: false },
    info: { nickname: '' },
  })
  const [step, setStep] = useState<'auth' | 'terms' | 'info' | 'final'>('auth')

  const router = useRouter()

  useEffect(() => {
    const doSignup = async () => {
      if (await signup(registerData.token, registerData.info.nickname)) {
        router.push(`/signin`)
      } else {
        router.refresh()
        setStep('auth')
      }
    }
    if (step === 'final') {
      console.log(`nickname : ${registerData.info.nickname}, token : ${registerData.token}`)
      doSignup()
    }
  }, [step])

  return (
    <Modal>
      {step === 'auth' && (
        <LoginModal
          nextStep={() => setStep('terms')}
          setData={(v: string) => setRegisterData({ ...registerData, token: v })}
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
