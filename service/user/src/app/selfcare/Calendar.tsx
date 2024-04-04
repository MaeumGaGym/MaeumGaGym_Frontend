import { Button, Chevron } from '@package/ui'
import { useCalendar } from '@/hooks/useClandar'
import { monthPurposes } from '@/apis/timeline/monthPurpose'
import { useEffect, useState } from 'react'
import { monthRoutineHistorys } from '@/apis/timeline/monthRoutineHistory'
import { monthRoutines } from '@/apis/timeline/monthRoutine'

interface T_Purpose {
  title: string
  content: string
  startDate: string
  endDate: string
}

interface T_RoutineHistory {
  id: number
  routine_name: string
  exercise_info_list: {
    pose: {
      id: number
      need_machine: boolean
      name: string
      simple_part: string[]
      exact_part: string[]
      thumbnail: string
    }
    repetitions: number
    sets: number
  }[]
  date: string
}

type DayOfWeeks = 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY'

type T_AllRoutine = {
  userInfo: {
    nickname: string
    profileImage: string
  }
  routineList: Array<T_Routine>
}

interface T_Routine {
  id: number
  routine_name: string
  exercise_info_response_list: {
    pose: {
      id: number
      need_machine: boolean
      name: string
      simple_part: string[]
      exact_part: string[]
      thumbnail: string
    }
    repetitions: number
    sets: number
  }[]
  day_of_weeks: DayOfWeeks[]
  routine_status: {
    is_archived: boolean
    is_shared: boolean
  }
}

const isSameDay = (today: number, routineDay: Array<DayOfWeeks>) => {
  const days: Array<DayOfWeeks> = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY']
  return routineDay.includes(days[today])
}

const isPast = (time: Date) => {
  const now = new Date()
  return new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0) > time
}

const changeUTCToKo = (date: Date) => {
  const offset = 1000 * 60 * 60 * 9
  return new Date(date.getTime() + offset)
}

const isIncludeTime = (startTime: Date, endTime: Date, today: Date) => {
  return startTime.getTime() <= today.getTime() && today.getTime() <= endTime.getTime()
}

const Calendar = () => {
  const { weekCalendarList, changeMonth, nowDate, isToday } = useCalendar()
  const [purposes, setPurposes] = useState<Array<T_Purpose>>()
  const [routineHistorys, setRoutineHistorys] = useState<Array<T_RoutineHistory>>()
  const [routines, setRoutines] = useState<T_AllRoutine>()

  const getData = async () => {
    monthPurposes(changeUTCToKo(nowDate).toISOString().slice(0, 10)).then(res => setPurposes(res))
    monthRoutineHistorys(changeUTCToKo(weekCalendarList[0][0]).toISOString().slice(0, 10)).then(res =>
      setRoutineHistorys(res)
    )
    monthRoutines().then(res => setRoutines(res))
  }

  const renderRoutineItem = (routine: T_Routine, day: Date) => {
    if (!isPast(day) && isSameDay(day.getDay(), routine.day_of_weeks)) {
      return <div className="w-full px-2 py-1 text-blue500 bg-gray50 rounded truncate">{routine.routine_name}</div>
    }
    return null
  }

  const renderHistoryItem = (routine: T_RoutineHistory, day: Date) => {
    if (routine.date === changeUTCToKo(day).toISOString().slice(0, 10)) {
      return <div className="w-full px-2 py-1 text-blue500 bg-gray50 rounded truncate">{routine.routine_name}</div>
    }
    return null
  }

  const renderPurposeItem = (purpose: T_Purpose, day: Date) => {
    if (isIncludeTime(new Date(purpose.startDate), new Date(purpose.endDate), changeUTCToKo(day))) {
      return <div className="w-full px-2 py-1 text-gray700 bg-gray50 rounded truncate">{purpose.title}</div>
    }
    return null
  }

  const renderItem = (day: Date) => {
    let items = []

    if (routines?.routineList?.length) {
      items.push(...routines.routineList.map(routine => renderRoutineItem(routine, day)))
    }

    if (routineHistorys?.length) {
      items.push(...routineHistorys.map(routine => renderHistoryItem(routine, day)))
    }

    if (purposes?.length) {
      items.push(...purposes.map(purpose => renderPurposeItem(purpose, day)))
    }

    items = items.filter(item => item)

    if (items.length > 3) {
      return [
        items[0],
        items[1],
        <div className="w-full px-2 py-1 text-gray700 bg-gray50 rounded truncate">{`+${items.length - 2}`}</div>,
      ]
    }

    return items
  }

  useEffect(() => {
    getData()
  }, [nowDate])

  return (
    <div className="flex flex-col gap-8 flex-1 w-[1200px]">
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
                <div
                  className="pt-2 px-2 pb-2 flex flex-1 flex-col gap-0.5 h-[126px]"
                  key={`${day.getMonth()}-${day.getDate()}`}
                >
                  <div
                    className={`w-6 h-6 flex justify-center items-center
                      text-${(weekIdx === 0 && day.getDate() > 7) || (weekIdx >= 4 && day.getDate() <= 7) ? (dayIdx === 0 ? 'red200' : 'gray200') : dayIdx === 0 ? 'red500' : 'black'}
                      ${isToday(day)}
                      `}
                  >
                    {day.getDate()}
                  </div>
                  {renderItem(day)}
                </div>
              ))}
            </div>
          ))}

          {/* <div className="absolute top-[34px] w-full grid grid-cols-[repeat(7,_1fr_16px)] grid-rows-3 px-2 h-[92px] gap-y-0.5 pointer-events-none">
            <div className="w-full px-2 py-1 text-blue500 bg-gray50 rounded">하체 운동</div>
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
