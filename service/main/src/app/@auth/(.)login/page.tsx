'use client'

import { Modal } from './Modal'
import { LoginModal } from './LoginModal'
import { useState } from 'react'

interface registerProps {}

export default function AuthModal() {
  const [registerData, setRegisterData] = useState()
  const [step, setStep] = useState<'auth' | 'terms' | 'info'>('auth')
  return (
    <Modal>
      {step === 'auth' && <LoginModal />}
      {step === 'terms' && <LoginModal />}
      {step === 'info' && <LoginModal />}
    </Modal>
  )
}
