import BorderBox from '@/components/BorderBox'
import { Button } from '@package/ui'
import { MouseEvent } from 'react'

interface TodaySectionProps {
  title: string
  subTitle: string
  children: React.ReactNode
  onClick?: (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void
}

const TodaySection = ({ title, subTitle, children, onClick }: TodaySectionProps) => {
  return (
    <BorderBox className="pt-8 px-6 pb-10 flex flex-col gap-8 flex-1 break-keep">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <span className="text-black text-titleMedium sm:text-labelLarge transition-all">오늘의 {title}</span>
          <span className="text-black text-bodyMedium sm:text-bodySmall transition-all">{subTitle}</span>
        </div>
        <Button kind="primary2" fontSize="small" className="h-fit" onClick={onClick}>
          {title}으로 이동
        </Button>
      </div>
      {children}
    </BorderBox>
  )
}

export default TodaySection
