'use client'

import BorderBox from "@/components/BorderBox"
import { Run } from "@package/ui"

interface WalkSectionProps {
    count: number
    time: number
}

const WalkSection = ({ count, time }: WalkSectionProps) => {
  return (
    <BorderBox className="px-10 flex gap-20 py-2.5 sm:gap-x-10 sm:gap-y-2.5 items-center flex-1 flex-wrap">
      <div className="flex gap-2 items-center">
        <Run size={40} className="text-blue500" />
        <span className="text-gray800 text-titleSmall">오늘의 활동</span>
      </div>
      <div className="flex gap-10 sm:gap-5 items-center h-fit">
        <div className="flex flex-col gap-0.5">
          <span className="text-gray500 text-labelMedium sm:text-labelSmall transition-all">걸음수</span>
          <span className="text-blue500 text-titleMedium sm:text-titleSmall transition-all">{count}걸음</span>
        </div>
        <span className="text-gray200 text-headlineSmall">/</span>
        <div className="flex flex-col gap-0.5">
          <span className="text-gray500 text-labelMedium sm:text-labelSmall transition-all">운동시간</span>
          <span className="text-blue500 text-titleMedium sm:text-titleSmall transition-all">{time}분</span>
        </div>
      </div>
    </BorderBox>
  )
}

export default WalkSection
