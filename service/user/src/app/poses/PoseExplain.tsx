import { Button } from '@package/ui'
import Image from 'next/image'
import React from 'react'

interface PosesType {
  bodyPart?: string
}

function PoseExplain({ bodyPart }: PosesType) {
  return (
    <div className="flex flex-col items-center px-[32px] pt-[100px] pb-[240px] w-full">
      <div className="flex flex-col max-w-[800px] gap-[64px] items-center">
        <div className="w-full items-center justify-between">
          <div className="flex text-titleMedium">
            <p>운동자세</p>
            <p className="text-gray400">/가슴</p>
          </div>
          <Button kind="primary2">루틴에 추가</Button>
        </div>
        <div className="flex flex-col items-center gap-[40px]">
          <div className="w-full h-[320px] rounded-xl flex justify-center items-center">
            <Image src={''} alt="" width={248} height={248} />
          </div>
          <div className="flex flex-col gap-[16px]">
            <div className="flex flex-col gap-[4px]">
              <p className="text-titleMedium text-gray500">푸시업</p>
              <p className="text-titleLarge text-gray900">팔굽혀펴기</p>
            </div>
            <p className="text-bodyLarge text-gray400">가슴 · 맨몸</p>
          </div>
        </div>
        <div className="flex flex-col gap-[24px] w-full">
          <p className="text-titleMedium">운동 방법</p>
          <div className="flex flex-col gap-[16px]">
            <div className="flex">
              <p className="text-titleMedium text-gray200 w-[52px]">01</p>
              <div className="py-[6px] text-bodyMedium">양팔을 가슴 옆에 두고 바닥에 엎드립니다.</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[24px] w-full">
          <p className="text-titleMedium">주의사항</p>
          <div className="flex flex-col gap-[16px]">
            <div className="flex">
              <p className="text-titleMedium text-gray200 w-[52px]">01</p>
              <div className="py-[6px] text-bodyMedium">양팔을 가슴 옆에 두고 바닥에 엎드립니다.</div>
            </div>
          </div>
        </div>
        <div className="flex w-full gap-[24px]">
          <p className="text-titleMedium">관련 피클</p>
        </div>
      </div>
    </div>
  )
}
