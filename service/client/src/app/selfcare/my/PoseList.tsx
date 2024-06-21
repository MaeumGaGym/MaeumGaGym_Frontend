'use client'
import React, { useState } from 'react'
import { Add, Chevron, Close, RemoveMinus } from '@package/ui'

interface PropsType {
  isEdit?: boolean
}

function PoseList({ isEdit }: PropsType) {
  const [times, setTimes] = useState<number>(0)
  const [set, setSet] = useState<number>(0)

  return (
    <div className="flex w-full justify-between items-center group">
      <div className="flex items-center gap-[18px]">
        <div className="w-16 h-16 rounded-lg bg-gray25"></div>
        <div className="flex flex-col gap-1">
          <p className=" text-gray800 text-bodyMedium">맨몸 스플릿 스쿼트</p>
          <p className="text-gray400 text-bodySmall">10개 | 2세트</p>
        </div>
      </div>
      {isEdit && (
        <div className="flex flex-wrap gap-9">
          <div className="flex items-center gap-1">
            <p className="w-16 text-bodyMedium">횟수</p>
            <div className="flex rounded-[4px] border border-gray100 items-center">
              <div
                onClick={() => setTimes(times - 1)}
                className="cursor-pointer p-1.5 bg-gray25 border-r border-gray100"
              >
                <RemoveMinus />
              </div>
              <div className="w-[100px] px-5 flex justify-center items-center">{times}</div>
              <div
                onClick={() => setTimes(times + 1)}
                className="cursor-pointer p-1.5 bg-gray25 border-l border-gray100"
              >
                <Add />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <p className="w-16 text-bodyMedium">세트</p>
            <div className="flex rounded-[4px] border border-gray100 items-center">
              <div onClick={() => setSet(set - 1)} className="cursor-pointer p-1.5 bg-gray25 border-r border-gray100">
                <RemoveMinus />
              </div>
              <div className="w-[100px] px-5 flex justify-center items-center">{set}</div>
              <div onClick={() => setSet(set + 1)} className="cursor-pointer p-1.5 bg-gray25 border-l border-gray100">
                <Add />
              </div>
            </div>
          </div>
        </div>
      )}
      {isEdit ? (
        <Close onClick={() => {}} className="text-gray700" />
      ) : (
        <Chevron direction="right" className="text-gray200 group-hover:translate-x-2 transition-all" />
      )}
    </div>
  )
}

export default PoseList
