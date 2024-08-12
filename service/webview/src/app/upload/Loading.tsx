'use client'
import { useState } from 'react'

const Loading = () => {
  const [loadingState, setLoadingState] = useState(0)

  const arcSize = Math.PI * 306
  const arc = arcSize * ((100 - loadingState) / 100)

  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-88px)] gap-8 ">
      <div>
        <div className="border-gray800 border-[15px] rounded-full w-80 h-80 relative">
          <svg
            width="310"
            height="310"
            className="block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-[-90deg]"
          >
            <circle r="152.5" cx="155" cy="155" className="stroke-gray700 stroke-[4px] fill-none z-10"></circle>
            <circle
              r="152.5"
              cx="155"
              cy="155"
              className="stroke-blue500 stroke-[4px] fill-none z-10"
              strokeDasharray={arcSize}
              strokeDashoffset={arc}
            />
          </svg>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[124px] h-[220px] bg-gray400 rounded-2xl z-10"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full bg-[radial-gradient(45.78%_45.78%_at_50%_50%,_#0A7FF5_0%,_rgba(10,_127,_245,_0.00)_100%)]"></div>
        </div>
      </div>
      <div className="text-center flex flex-col gap-2">
        <p className="text-titleMedium text-white">피클 게시중</p>
        <p className="text-bodyMedium text-gray400">피클을 게시하는데 시간이 조금 걸릴 수 있어요.</p>
      </div>
    </div>
  )
}

export default Loading
