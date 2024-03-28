import { Button } from '@package/ui'
import Image from 'next/image'
import React from 'react'
import PushUp from './PushUp.png'

interface PosesType {
  bodyPart?: string
}

const parts = [
  '양팔을 가슴 옆에 두고 바닥에 엎드립니다.',
  '복근과 둔근에 힘을 준 상태로 팔꿈치를 피며 올라옵니다.',
  '천천히 팔꿈치를 굽히며 시작 자세로 돌아갑니다.',
]

const warning = ['양팔을 가슴 옆에 두고 바닥에 엎드립니다.', '복근과 둔근에 힘을 준 상태로 팔꿈치를 피며 올라옵니다.']

function PoseExplain({ bodyPart }: PosesType) {
  return (
    <div className="flex w-full justify-center">
      <div className="flex flex-col items-center px-[32px] pt-[100px] pb-[240px] w-full max-w-[800px]">
        <div className="flex flex-col max-w-[800px] gap-[64px] items-center w-full">
          <div className="flex w-full items-center justify-between">
            <div className="flex text-titleMedium">
              <p>운동자세</p>
              <p className="text-gray400"> / 가슴</p>
            </div>
            <div className="flex px-[12px] py-[8px] rounded-lg text-labelSmall text-blue500 bg-blue50">루틴에 추가</div>
          </div>
          <div className="flex flex-col items-center gap-[40px] w-full">
            <div className="w-full h-[320px] rounded-xl flex justify-center items-center bg-gray25">
              <Image src={PushUp} alt="" width={248} height={248} />
            </div>
            <div className="flex flex-col gap-[16px] w-full">
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
              {parts.map((i, j) => (
                <div className="flex">
                  <p className="text-titleMedium text-gray200 w-[52px]">{String(j + 1).padStart(2, '0')}</p>
                  <div className="py-[6px] text-bodyMedium">{i}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-[24px] w-full">
            <p className="text-titleMedium">주의사항</p>
            <div className="flex flex-col gap-[16px]">
              {warning.map((i, j) => (
                <div className="flex">
                  <p className="text-titleMedium text-gray200 w-[52px]">{String(j + 1).padStart(2, '0')}</p>
                  <div className="py-[6px] text-bodyMedium">{i}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex w-full gap-[24px]">
            <p className="text-titleMedium">관련 피클</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PoseExplain
