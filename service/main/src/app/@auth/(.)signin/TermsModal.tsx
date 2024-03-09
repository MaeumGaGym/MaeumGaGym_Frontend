import { Button, CheckCircle } from '@package/ui'
import { useState } from 'react'

type termsType = 'info' | 'terms' | 'fourteen' | 'marketing'

export const TermsModal = ({ nextStep, setData }: { nextStep: () => void; setData: (v: boolean) => void }) => {
  const [terms, setTerms] = useState<Set<termsType>>(new Set())

  const addSet = (item?: termsType) => {
    setTerms(v => {
      if (!item) {
        v.add('info')
        v.add('terms')
        v.add('fourteen')
        v.add('marketing')
      } else v.add(item)
      return new Set<termsType>(v)
    })
  }

  const removeSet = (item?: termsType) => {
    setTerms(v => {
      if (!item) {
        v.delete('info')
        v.delete('terms')
        v.delete('fourteen')
        v.delete('marketing')
      } else v.delete(item)
      return new Set<termsType>(v)
    })
  }

  const Check = ({ item }: { item: termsType }) => (
    <>
      {terms.has(item) ? (
        <CheckCircle onClick={() => removeSet(item)} isFill className="text-blue500" size={28} />
      ) : (
        <CheckCircle onClick={() => addSet(item)} className="text-gray200" size={28} />
      )}
    </>
  )

  const allHas = () => terms.has('info') && terms.has('terms') && terms.has('fourteen')

  return (
    <div className="flex flex-col w-[480px] rounded-[24px] p-[64px_52px] gap-[12px]">
      <h5 className="text-titleLarge">약관동의</h5>
      <p className="text-bodyMedium text-gray600">서비스 이용을 위해 필수 약관동의가 필요해요.</p>
      <div className="flex flex-col py-[24px] gap-[12px]">
        <div className="w-full h-[2px] rounded-[1px] bg-gray50" />
        <div className="flex items-center py-[8px] gap-[12px]">
          {allHas() ? (
            <CheckCircle onClick={() => removeSet()} isFill className="text-blue500" size={28} />
          ) : (
            <CheckCircle onClick={() => addSet()} className="text-gray200" size={28} />
          )}
          <p className="text-labelLarge">모두 동의해요.</p>
        </div>
        <div className="w-full h-[2px] rounded-[1px] bg-gray50" />
        <div className="flex flex-col gap-[8px]">
          <div className="flex items-center py-[8px] gap-[12px]">
            <Check item="info" />
            <p className="text-bodyMedium">개인정보 수집 이용 동의</p>
          </div>
          <div className="flex items-center py-[8px] gap-[12px]">
            <Check item="terms" />
            <p className="text-bodyMedium">이용 약관 동의</p>
          </div>
          <div className="flex items-center py-[8px] gap-[12px]">
            <Check item="fourteen" />
            <p className="text-bodyMedium">만 14세 이상</p>
          </div>
          <div className="flex items-center py-[8px] gap-[12px]">
            <Check item="marketing" />
            <p className="text-bodyMedium">
              마케팅 정보 수신 동의 <span className="text-gray400">(선택)</span>
            </p>
          </div>
        </div>
      </div>
      <Button
        className="w-full"
        disabled={!allHas()}
        onClick={() => {
          nextStep()
          setData(terms.has('marketing'))
        }}
      >
        동의하기
      </Button>
    </div>
  )
}
