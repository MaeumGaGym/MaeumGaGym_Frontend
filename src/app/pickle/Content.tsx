'use client'

import Image from 'next/image'
import HeaderLogo from '@/assets/HeaderLogo.png'
import { useRef, useState } from 'react'

const Content = () => {
  const [more, setMore] = useState(false)
  const textRef = useRef<HTMLSpanElement>(null)
  const maxTextRef = useRef<HTMLSpanElement>(null)
  const content =
    '날씨가 정말 좋네요. 오늘은 정말 산책하기 좋을 것 같아요. 날씨가 정말 좋네요. 오늘은 정말 산책하기 좋을 것같아요. 날씨가 정말 좋네요. 오늘은 정말 산책하기 좋을 것 같아요.날씨가 정말 좋네요. 오늘은 정말 산책하기 좋을 것 같아요. 날씨가 정말 좋네요. 오늘은 정말 산책하기 좋을 것같아요. 날씨가 정말 좋네요. 오늘은 정말 산책하기 좋을 것 같아요.날씨가 정말 좋네요. 오늘은 정말 산책하기 좋을 것 같아요. 날씨가 정말 좋네요. 오늘은 정말 산책하기 좋을 것같아요. 날씨가 정말 좋네요. 오늘은 정말 산책하기 좋을 것 같아요.날씨가 정말 좋네요. 오늘은 정말 산책하기 좋을 것 같아요. 날씨가 정말 좋네요. 오늘은 정말 산책하기 좋을 것같아요. 날씨가 정말 좋네요. 오늘은 정말 산책하기 좋을 것 같아요.날씨가 정말 좋네요. 오늘은 정말 산책하기 좋을 것 같아요. 날씨가 정말 좋네요. 오늘은 정말 산책하기 좋을 것같아요. 날씨가 정말 좋네요. 오늘은 정말 산책하기 좋을 것 같아요.날씨가 정말 좋네요. 오늘은 정말 산책하기 좋을 것 같아요. 날씨가 정말 좋네요. 오늘은 정말 산책하기 좋을 것같아요. 날씨가 정말 좋네요. 오늘은 정말 산책하기 좋을 것 같아요.날씨가 정말 좋네요. 오늘은 정말 산책하기 좋을 것 같아요. 날씨가 정말 좋네요. 오늘은 정말 산책하기 좋을 것같아요. 날씨가 정말 좋네요. 오늘은 정말 산책하기 좋을 것 같아요.날씨가 정말 좋네요. 오늘은 정말 산책하기 좋을 것 같아요. 날씨가 정말 좋네요. 오늘은 정말 산책하기 좋을 것같아요. 날씨가 정말 좋네요. 오늘은 정말 산책하기 좋을 것 같아요.'
  const tag = ['tag1', 'tag2', 'tag3']

  const isEllipsisActive = (e: HTMLSpanElement) => {
    return e.offsetWidth < e.scrollWidth
  }

  const moreText = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    e.stopPropagation()
    if (textRef.current && (isEllipsisActive(textRef.current) || more)) {
      setMore(v => !v)
    }
  }

  const checkMaxHeight = () => {
    return maxTextRef.current && maxTextRef.current?.scrollHeight > 280
  }

  return (
    <div
      className={`transition-all w-full absolute bottom-0 pr-[80px] pl-[20px] pt-[24px] pb-[42px] flex flex-col gap-[18px] z-30`}
    >
      <div className="w-fit flex gap-[6px] items-center cursor-pointer z-10 relative">
        <Image src={HeaderLogo} width={40} height={40} alt="profile" priority />
        <span className="text-labelSmall text-white">maeumGaGym</span>
      </div>
      <div className="w-full flex flex-col gap-[8px] z-10 relative">
        <span className="text-titleMedium text-white">상쾌한 날씨의 오늘</span>
        <span
          className={`transition-all duration-300 cursor-pointer text-bodyMedium text-white text-ellipsis w-full ${
            !more ? 'whitespace-nowrap overflow-hidden' : 'overflow-scroll'
          }`}
          style={{
            height: more ? `${checkMaxHeight() ? 280 : maxTextRef.current?.scrollHeight}px` : '20px',
            maxHeight: '280px',
          }}
          onClick={e => moreText(e)}
          ref={textRef}
        >
          {content}
          {tag && (
            <div className="mt-[12px] pt-[16px] pb-[8px] flex w-full flex-wrap gap-[4px]">
              {tag.map((value, index) => (
                <span key={index} className="text-bodyMedium text-gray300">
                  #{value}
                </span>
              ))}
            </div>
          )}
        </span>
        <span className="absolute opacity-0 w-full -z-10 overflow-hidden h-1 text-bodyMedium" ref={maxTextRef}>
          {content}
          {tag && (
            <div className="mt-[12px] pt-[16px] pb-[8px] flex w-full flex-wrap gap-[4px]">
              {tag.map((value, index) => (
                <span key={index} className="text-bodyMedium text-gray300">
                  #{value}
                </span>
              ))}
            </div>
          )}
        </span>
      </div>
      <div
        className={`transition-all duration-300 bg-gradient-to-t from-[rgba(0,0,0,0.8)] ${
          more ? 'opacity-1' : 'opacity-[0.4]'
        } to-transparent absolute w-full h-full z-0 left-0 bottom-0`}
      />
    </div>
  )
}

export default Content
