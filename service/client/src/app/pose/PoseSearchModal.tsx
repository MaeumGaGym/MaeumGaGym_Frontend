'use client'
import { Enter, Search, UpDownArrow } from '@package/ui'
import Image from 'next/image'
import { SetStateAction, useState } from 'react'

// interface propsType {
//   searchName?: string
// }

// function SearchHistory({ searchName }: propsType) {
//   return (
//     <div className="w-full flex justify-between px-[24px] py-[12px] items-center">
//       <p className="text-bodyMedium text-gray800">{searchName}</p>
//       <Close size={20} className="text-gray300" />
//     </div>
//   )
// }

function PoseSearchResult() {
  return (
    <div className="w-full flex gap-[18px] px-[24px] py-[12px] items-center">
      <div className="w-[64px] h-[64px] flex p-[3.56px] rounded-lg bg-gray25">
        <Image src="" alt="" width={56.89} height={56.89} />
      </div>
      <div className="flex flex-col gap-[4px] justify-center">
        <p className="text-bodyMedium text-gray800">맨몸 스플릿 스쿼트</p>
        <p className="text-bodySmall text-gray400">맨몸 스플릿 스쿼트</p>
      </div>
    </div>
  )
}

function PoseSearchModal({ onClick }: { onClick: () => void }) {
  const [searchValue, setSearchValue] = useState<string>('')
  const valueChange = (event: { target: { value: SetStateAction<string> } }) => {
    setSearchValue(event.target.value)
    console.log(event.target.value)
  }
  return (
    <div
      onClick={onClick}
      className="fixed w-screen h-screen top-0 left-0 z-30 bg-gray500 bg-opacity-25 flex justify-center items-center"
    >
      <div className="w-[640px] h-[540px] bg-white py-[12px] flex-col flex gap-2 rounded-2xl">
        <div className="h-[58px] w-full flex items-center gap-[12px] px-[24px]">
          <Search size={28} className="text-gray400" />
          <input
            className="w-full text-labelLarge placeholder:text-gray400 border-none outline-none"
            placeholder="검색할 자세 이름을 입력해주세요.."
            type="text"
            value={searchValue}
            onChange={valueChange}
          />
        </div>
        <div className="h-[1px] w-full bg-gray100" />
        {searchValue ? (
          <div className="w-full h-full flex-col flex overflow-y-scroll">
            <div className="w-full flex items-center gap-[8px] px-[24px] py-[8px]">
              <p className="text-labelSmall">검색 결과</p>
              <p className="text-labelSmall text-blue500">6</p>
            </div>
            <PoseSearchResult />
            <PoseSearchResult />
            <PoseSearchResult />
            <PoseSearchResult />
            <PoseSearchResult />
          </div>
        ) : (
          <div className="w-full h-full flex-col flex scroll">
            <div className="w-full flex items-center justify-between px-[24px] py-[8px]">
              <p className="text-labelSmall">최근 검색어</p>
              <p className="text-labelSmall text-gray600">검색기록 삭제</p>
            </div>
          </div>
        )}
        <div className="h-[1px] w-full bg-gray100" />
        <div className="px-[24px] w-full flex items-center gap-[18px]">
          <div className="flex items-center gap-[4px]">
            <UpDownArrow size={14} className="text-gray400" />
            <p className="text-bodySmall text-gray400">선택</p>
          </div>
          <div className="flex items-center gap-[4px]">
            <Enter />
            <p className="text-bodySmall text-gray400">검색</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PoseSearchModal
