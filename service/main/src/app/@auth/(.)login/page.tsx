'use client'

import { Modal } from './Modal'
import { LoginModal } from './LoginModal'
import { useEffect, useState } from 'react'
import { TermsModal } from './TermsModal'
import { InfoModal } from './InfoModal'

interface registerProps {
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
  const [step, setStep] = useState<'auth' | 'terms' | 'info' | 'final'>('terms')

  useEffect(() => {}, [step])

  return (
    <Modal>
      {step === 'auth' && <LoginModal nextStep={() => setStep('terms')} />}
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
