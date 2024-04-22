import { Button, Input } from '@package/ui'
import { useState } from 'react'

export const InfoModal = ({ nextStep, setData }: { nextStep: () => void; setData: (v: string) => void }) => {
  const [name, setName] = useState<string>('')

  return (
    <div className="flex flex-col w-[480px] rounded-[24px] p-[64px_52px] gap-[12px]">
      <h5 className="text-titleLarge">회원가입</h5>
      <p className="text-bodyMedium text-gray600">정보를 입력하여 회원가입을 완료해보세요.</p>
      <div className="py-[32px]">
        <Input
          label="이름"
          placeholder="이름을 입력해주세요.."
          value={name}
          change={e => setName(e.currentTarget.value)}
        />
      </div>
      <Button
        className="w-full"
        disabled={name.trim() === ''}
        onClick={() => {
          nextStep()
          setData(name.trim())
        }}
      >
        회원가입
      </Button>
    </div>
  )
}
