'use client'
import { Add, Arrow, Button, Chevron, Earth, Routine } from '@package/ui'
import React, { useState, useEffect } from 'react'
import { getMyRoutine } from '@/apis'
import { getCookie } from '@/utils'
import { useRouter } from 'next/navigation'
import DetailPage from './DetailPage'

interface GetMyRoutineResponse {
  id: number
  routineName: string
  exerciseInfoList: {
    exerciseName: string
    repetitions: number
    sets: number
  }[]
  dayOfWeeks: string[]
  routineStatus: {
    archived: boolean
    shared: boolean
  }
}

function My() {
  const router = useRouter()
  const [routineList, setRoutineList] = useState<GetMyRoutineResponse[]>([])
  const [clickDays, setClickDays] = useState([false, false, false, false, false, false, false])

  const getMyRoutineList = async () => {
    const RF_TOKEN = getCookie('RF-TOKEN') || 'undefined'
    const ACCESS_TOKEN = getCookie('access_token') || 'undefined'
    setRoutineList(await getMyRoutine(ACCESS_TOKEN, RF_TOKEN))
  }

  useEffect(() => {
    getMyRoutineList()
  }, [])

  const handleClick = (i: number) => {
    const newClickDays = [...clickDays]
    newClickDays[i] = !newClickDays[i]
    setClickDays(newClickDays)
  }

  const days = ['일', '월', '화', '수', '목', '금', '토']

  return (
    <div className="w-full flex px-8 pt-[60px] pb-60 justify-center gap-16">
      <div className="w-full max-w-[1200px] flex flex-col gap-12 pt-20">
        <div className="flex flex-col gap-8">
          <div className="flex justify-center items-center rounded-xl border border-gray200 w-10 h-10 hover:bg-gray50">
            <Chevron direction="left" size={20} className="text-gray800" />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-black text-headlineSmall">내 루틴</p>
            <p className="text-gray600 text-bodyMedium">나만의 루틴을 구성하여 규칙적인 운동을 해보세요.</p>
          </div>
        </div>
        <div className="flex w-full gap-10">
          <div className="flex flex-col w-full gap-4">
            <div className="flex w-full items-center justify-between">
              <div className="flex gap-1 p-1 rounded-xl border border-gray100 bg-gray25">
                {days.map((i, j) => (
                  <div
                    key={j}
                    onClick={() => handleClick(j)}
                    className={`flex transition-all px-4 py-3 ${clickDays[j] ? 'bg-blue400 text-white hover:bg-blue500' : 'bg-gray25 text-black hover:bg-gray50'} text-bodyMedium rounded-lg cursor-pointer`}
                  >
                    {i}
                  </div>
                ))}
              </div>
              <Button icon={<Add />} kind="silver" fontSize="small" className="text-gray800">
                루틴 추가하기
              </Button>
            </div>
            <div className="flex flex-col w-full gap-3">
              <div
                onClick={() => router.push('/selfcare/my/page')}
                className="w-full transition-all flex items-center px-5 py-[18px] rounded-2xl border border-gray50 bg-gray25 justify-between hover:bg-gray50"
              >
                <div className="flex flex-col gap-1">
                  <p className="text-black text-labelLarge">주말 루틴</p>
                  <p className="text-gray500 text-bodySmall">토, 일</p>
                </div>
                <div className="flex gap-2 px-4 py-2 items-center rounded-full bg-white border border-blue100">
                  <p className="text-blue500 text-labelMedium">공유됨</p>
                  <Earth size={16} className="text-blue500" />
                </div>
              </div>
              {/* {routineList &&
                routineList.map((i, j) => (
                  <div
                    key={j}
                    className="w-full transition-all flex items-center px-5 py-[18px] rounded-2xl border border-gray50 bg-gray25 justify-between"
                  >
                    <div className="flex flex-col gap-1">
                      <p className="text-black text-labelLarge">주말 루틴</p>
                      <p className="text-gray500 text-bodySmall">토, 일</p>
                    </div>
                    <div className="flex gap-2 px-4 py-2 items-center rounded-full bg-white border border-blue100">
                      <p className="text-blue500 text-labelMedium">공유됨</p>
                      <Earth size={16} className="text-blue500" />
                    </div>
                  </div>
                ))} */}
            </div>
          </div>
          <div className="flex flex-col gap-4 px-3 py-6 rounded-xl border border-gray50 bg-gray25">
            <div className="flex flex-col gap-3 px-3">
              <div className="flex w-10 h-10 rounded-lg justify-center items-center bg-gray50 border border-gray100">
                <Routine />
              </div>
              <p className="text-black text-titleMedium">오늘의 루틴</p>
            </div>
            <div className="flex flex-col gap-1">
              <div
                className={`flex w-[360px] rounded-2xl justify-between items-center px-4 py-[18px] bg-gray25 transition-all cursor-pointer`}
              >
                <p className={`text-black text-labelMedium`}>주말 루틴</p>
                <Chevron size={20} direction="right" className="text-gray300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default My
