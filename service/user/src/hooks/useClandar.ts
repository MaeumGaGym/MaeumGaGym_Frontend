const DAY_OF_WEEK = 7

import { useState } from 'react'

export const useCalendar = () => {
  const [nowDate, setNowDate] = useState<Date>(new Date())

  const changeMonth = (change: number) => {
    const date = new Date(nowDate.getTime())
    date.setMonth(date.getMonth() + change)
    setNowDate(date)
  }

  const nowYear = nowDate.getFullYear()
  const nowMonth = nowDate.getMonth()

  const dayOneWeek = new Date(nowYear, nowMonth, 1).getDay()
  const dayLastWeek = new Date(nowYear, nowMonth + 1, 0).getDay()

  const result: Date[] = []
  const prevMonthEnd = new Date(nowYear, nowMonth, 0).getDate()
  const nowMonthEnd = new Date(nowYear, nowMonth + 1, 0).getDate()

  for (let i = dayOneWeek - 1; i >= 0; i--) {
    result.push(new Date(nowYear, nowMonth - 1, prevMonthEnd - i))
  }

  for (let i = 1; i <= nowMonthEnd; i++) {
    result.push(new Date(nowYear, nowMonth, i))
  }

  for (let i = 1; i < 7 - dayLastWeek; i++) {
    result.push(new Date(nowYear, nowMonth + 1, i))
  }

  const weekCalendarList: Date[][] = result.reduce((acc: Date[][], cur, idx) => {
    const chunkIndex: number = Math.floor(idx / DAY_OF_WEEK)
    if (!acc[chunkIndex]) {
      acc[chunkIndex] = []
    }
    acc[chunkIndex].push(cur)
    return acc
  }, [])

  const isToday = (date: Date) => {
    const today = new Date()
    const isSameDay =
      date.getFullYear() === today.getFullYear() &&
      date.getMonth() === today.getMonth() &&
      date.getDate() === today.getDate()

    if (isSameDay) {
      if (date.getMonth() === nowDate.getMonth()) return 'text-white bg-blue500 rounded-full'
      else return 'text-white bg-blue200 rounded-full'
    }
    return ''
  }

  return {
    weekCalendarList,
    changeMonth,
    nowDate,
    isToday,
  }
}
