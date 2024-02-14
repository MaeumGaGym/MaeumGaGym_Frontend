'use client'
import { Button, Chevron } from '@package/ui'

const Calendar = () => {
  return (
    <div className="flex flex-col gap-8 flex-1">
      <div className="flex flex-col gap-3">
        <div className="flex gap-3 items-center">
          <span className="text-black text-titleMedium">2024년 1월</span>
          <div className="flex gap-2">
            <Button
              kind="white"
              className="border border-gray200 px-1.5 py-1.5 w-fit h-fit"
              icon={<Chevron direction="left" size={16} />}
            />
            <Button
              kind="white"
              className="border border-gray200 px-1.5 py-1.5 w-fit h-fit"
              icon={<Chevron direction="right" size={16} />}
            />
          </div>
        </div>
        <span className="text-gray500 text-bodyMedium">타임라인을 통해 일정을 관리해 보세요.</span>
      </div>
      <div className="grid grid-cols-7 text-bodySmall">
        <div className="border-t border-gray50 h-12 px-3.5 flex items-center text-gray600">일</div>
        <div className="border-t border-gray50 h-12 px-3.5 flex items-center text-gray600">월</div>
        <div className="border-t border-gray50 h-12 px-3.5 flex items-center text-gray600">화</div>
        <div className="border-t border-gray50 h-12 px-3.5 flex items-center text-gray600">수</div>
        <div className="border-t border-gray50 h-12 px-3.5 flex items-center text-gray600">목</div>
        <div className="border-t border-gray50 h-12 px-3.5 flex items-center text-gray600">금</div>
        <div className="border-t border-gray50 h-12 px-3.5 flex items-center text-gray600">토</div>
        <div className="border-t border-gray50 h-[126px] p-2 flex flex-col gap-0.5">
          <div className="w-6 h-6 flex justify-center items-center text-red200">26</div>
          <div className="w-full px-2 py-1 text-blue500 bg-gray50 rounded">하체 운동</div>
          <div className="w-full px-2 py-1 text-gray700 bg-gray50 rounded">일기 쓰기</div>
          <div className="w-full px-2 py-1 text-gray500 bg-gray50 rounded">2+</div>
        </div>
        <div className="border-t border-gray50 h-[126px] p-2 flex flex-col gap-0.5">
          <div className="w-6 h-6 flex justify-center items-center text-gray200">27</div>
          <div className="w-full px-2 py-1 text-blue500 bg-gray50 rounded">하체 운동</div>
          <div className="w-full px-2 py-1 text-gray700 bg-gray50 rounded">일기 쓰기</div>
          <div className="w-full px-2 py-1 text-gray500 bg-gray50 rounded">2+</div>
        </div>
        <div className="border-t border-gray50 h-[126px] p-2 flex flex-col gap-0.5">
          <div className="w-6 h-6 flex justify-center items-center text-red500">1</div>
          <div className="w-full px-2 py-1 text-blue500 bg-gray50 rounded">하체 운동</div>
          <div className="w-full px-2 py-1 text-gray700 bg-gray50 rounded">일기 쓰기</div>
          <div className="w-full px-2 py-1 text-gray500 bg-gray50 rounded">2+</div>
        </div>
        <div className="border-t border-gray50 h-[126px] p-2 flex flex-col gap-0.5">
          <div className="w-6 h-6 flex justify-center items-center text-black">2</div>
          <div className="w-full px-2 py-1 text-blue500 bg-gray50 rounded">하체 운동</div>
          <div className="w-full px-2 py-1 text-gray700 bg-gray50 rounded">일기 쓰기</div>
          <div className="w-full px-2 py-1 text-gray500 bg-gray50 rounded">2+</div>
        </div>
        <div className="border-t border-gray50 h-[126px] p-2 flex flex-col gap-0.5">
          <div className="w-6 h-6 flex justify-center items-center text-white bg-blue500 rounded-full">3</div>
          <div className="w-full px-2 py-1 text-blue500 bg-gray50 rounded">하체 운동</div>
          <div className="w-full px-2 py-1 text-gray700 bg-gray50 rounded">일기 쓰기</div>
          <div className="w-full px-2 py-1 text-gray500 bg-gray50 rounded">2+</div>
        </div>
      </div>
    </div>
  )
}

export default Calendar
