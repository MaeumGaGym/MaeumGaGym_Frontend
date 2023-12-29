'use client'

import Image from 'next/image'
import HeaderLogo from '@/assets/HeaderLogo.png'

const Content = () => {
  return (
    <div className="w-full h-[180px] bg-gradient-to-t from-[rgba(0,0,0,0.4)] to-transparent absolute bottom-0 pr-[80px] pl-[20px] pt-[24px] flex flex-col gap-[18px]">
      <div className="w-fit flex gap-[6px] items-center cursor-pointer">
        <Image src={HeaderLogo} width={40} height={40} alt="profile" />
        <span className="text-labelSmall text-white">maeumGaGym</span>
      </div>
      <div className="w-full flex flex-col gap-[8px]">
        <span className="text-titleMedium text-white">상쾌한 날씨의 오늘</span>
        <span className="text-bodyMedium text-white text-ellipsis w-full overflow-hidden whitespace-nowrap">
          날씨가 정말 좋네요. 오늘은 정말 산책하기 좋을 것 같아요.
        </span>
      </div>
    </div>
  )
}

export default Content
