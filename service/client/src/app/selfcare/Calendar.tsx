import { Button, Chevron } from '@package/ui'
import { useCalendar } from '@/hooks/useClandar'

const Calendar = () => {
  const { weekCalendarList, changeMonth, nowDate, isToday } = useCalendar()
  return (
    <div className="flex flex-col gap-8 flex-1">
      <div className="flex flex-col gap-3">
        <div className="flex gap-3 items-center">
          <span className="text-black text-titleMedium">
            {nowDate.getFullYear()}년 {nowDate.getMonth() + 1}월
          </span>
          <div className="flex gap-2">
            <Button
              kind="white"
              className="border border-gray200 px-1.5 py-1.5 w-fit h-fit"
              icon={<Chevron direction="left" size={16} />}
              onClick={() => changeMonth(-1)}
            />
            <Button
              kind="white"
              className="border border-gray200 px-1.5 py-1.5 w-fit h-fit"
              icon={<Chevron direction="right" size={16} />}
              onClick={() => changeMonth(1)}
            />
          </div>
        </div>
        <span className="text-gray500 text-bodyMedium">타임라인을 통해 일정을 관리해 보세요.</span>
      </div>
      <div className="flex flex-col flex-1 text-bodySmall [&>div]:border-t [&>div]:border-gray50">
        <div className="flex">
          <span className="flex flex-1 h-12 items-center px-3.5 text-gray600">일</span>
          <span className="flex flex-1 h-12 items-center px-3.5 text-gray600">월</span>
          <span className="flex flex-1 h-12 items-center px-3.5 text-gray600">화</span>
          <span className="flex flex-1 h-12 items-center px-3.5 text-gray600">수</span>
          <span className="flex flex-1 h-12 items-center px-3.5 text-gray600">목</span>
          <span className="flex flex-1 h-12 items-center px-3.5 text-gray600">금</span>
          <span className="flex flex-1 h-12 items-center px-3.5 text-gray600">토</span>
        </div>
        <div className="flex flex-col relative">
          {weekCalendarList.map((week: Date[], weekIdx: number) => (
            <div className="flex border-t border-gray50" key={`${week[0]}-${weekIdx}`}>
              {week.map((day: Date, dayIdx: number) => (
                <div className="pt-2 px-2 pb-0.5 flex flex-1" key={`${day.getMonth()}-${day.getDate()}`}>
                  <div
                    className={`w-6 h-6 flex justify-center items-center
                      text-${(weekIdx === 0 && day.getDate() > 7) || (weekIdx >= 4 && day.getDate() <= 7) ? (dayIdx === 0 ? 'red200' : 'gray200') : dayIdx === 0 ? 'red500' : 'black'}
                      ${isToday(day)}
                      `}
                  >
                    {day.getDate()}
                  </div>
                </div>
              ))}
            </div>
          ))}

          {/* <div className="absolute top-[34px] w-full grid grid-cols-[repeat(7,_1fr_16px)] grid-rows-3 px-2 h-[92px] gap-y-0.5 pointer-events-none">
            <div className="w-full px-2 py-1 text-blue500 bg-gray50 rounded">하체 운동</div>
            <div className="w-full px-2 py-1 text-blue500 bg-gray50 rounded truncate">하체 운동</div>
            <div className="w-full px-2 py-1 text-blue500 bg-gray50 rounded">하체 운동</div>
            <div className="w-full px-2 py-1 text-blue500 bg-gray50 rounded">하체 운동</div>
            <div className="w-full px-2 py-1 text-blue500 bg-gray50 rounded">하체 운동</div>
            <div className="w-full px-2 py-1 text-blue500 bg-gray50 rounded">하체 운동</div>
            <div className="w-full px-2 py-1 text-blue500 bg-gray50 rounded">하체 운동</div>
            <div className="w-full px-2 py-1 text-blue500 bg-gray50 rounded">하체 운동</div>
            <div className="w-full px-2 py-1 text-blue500 bg-gray50 rounded">하체 운동</div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Calendar
