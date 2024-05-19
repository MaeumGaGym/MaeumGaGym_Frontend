import { Add, Button, Chevron, Earth, Pencil, Trash } from '@package/ui'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import PoseList from './PoseList'

function DetailPage() {
  const [isUse, setIsUse] = useState<boolean>(false)
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [clickDays, setClickDays] = useState([false, false, false, false, false, false, false])

  const router = useRouter()
  const days = ['일', '월', '화', '수', '목', '금', '토']
  const handleClick = (i: number) => {
    const newClickDays = [...clickDays]
    newClickDays[i] = !newClickDays[i]
    setClickDays(newClickDays)
  }
  return (
    <div className="w-full flex flex-col items-center gap-16 px-8 pt-[60px] pb-60">
      <div className="flex flex-col max-w-[1200px] w-full justify-center pt-[80px] gap-12">
        <div className="w-full flex flex-col justify-center gap-8">
          <div
            onClick={() => router.push('/selfcare')}
            className="w-10 h-10 flex rounded-xl justify-center items-center bg-white hover:bg-gray50 border border-gray200"
          >
            <Chevron direction="left" size={20} className="text-gray800" />
          </div>
          <div className="flex w-full items-center justify-between">
            <div className="flex flex-col gap-2">
              <p className="text-headlineSmall text-black">주말 루틴</p>
              <p className="text-titleSmall text-blue500">사용중 | 토, 일</p>
            </div>
            {isEdit ? (
              <div className="flex items-center gap-4">
                <p className={`${isUse ? 'text-blue500' : 'text-gray600'} text-titleSmall`}>
                  {isUse ? '사용중' : '보관중'}
                </p>
                <div
                  onClick={() => setIsUse(!isUse)}
                  className={`flex cursor-pointer w-14 h-7 rounded-full p-0.5 items-center ${isUse ? 'bg-blue500' : 'bg-gray200'}`}
                >
                  <div className={`h-6 w-6 rounded-full bg-white transition-all ${isUse && 'translate-x-7'}`} />
                </div>
              </div>
            ) : (
              <div className="flex rounded-full items-center gap-2 px-4 py-2 bg-blue50">
                <p className="text-labelMedium text-blue500">공유됨</p>
                <Earth size={16} className="text-blue500" />
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-10">
          {isEdit ? (
            <div className="w-full items-center justify-between flex">
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
              <div className="flex items-center gap-2">
                <Button onClick={() => {}} icon={<Add />} kind="silver" fontSize="small">
                  자세 추가
                </Button>
                <Button onClick={() => setIsEdit(false)} kind="primary" fontSize="small" className="w-[108px]">
                  완료
                </Button>
              </div>
            </div>
          ) : (
            <div className="w-full items-center flex">
              <div className="flex items-center gap-2">
                <Button onClick={() => setIsEdit(true)} icon={<Pencil />} kind="primary" fontSize="small">
                  루틴 수정
                </Button>
                <Button icon={<Trash />} kind="silver" fontSize="small">
                  루틴 삭제
                </Button>
              </div>
            </div>
          )}

          <div className="flex flex-col w-full gap-4">
            <PoseList isEdit={isEdit} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailPage
