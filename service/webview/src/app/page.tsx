'use client'
import VideoPlayer from './VideoPlayer'
import './animation.css'
import UploadFile from './UploadFile'
import { useEffect, useRef, useState } from 'react'

const Pickle = () => {
  const beforeVideo = useRef<HTMLDivElement>(null)
  const afterVideo = useRef<HTMLDivElement>(null)
  const [lastScrollPos, setLastScrollPos] = useState<number>(0)

  useEffect(() => {
    const handleScroll = () => {
      console.log(beforeVideo.current?.getBoundingClientRect().bottom)
      console.log(lastScrollPos)
      if (lastScrollPos > (beforeVideo.current?.getBoundingClientRect().bottom as number)) {
        afterVideo.current?.scrollIntoView({ behavior: 'smooth' })
      }
      if (lastScrollPos < (beforeVideo.current?.getBoundingClientRect().bottom as number)) {
        beforeVideo.current?.scrollIntoView({ behavior: 'smooth' })
      }
      setLastScrollPos(beforeVideo.current?.getBoundingClientRect().bottom as number)
    }
    document.querySelector('#pickles')?.addEventListener('touchend', handleScroll, { capture: true })
    return () => {
      document.querySelector('#pickles')?.removeEventListener('touchend', handleScroll, { capture: true })
    }
  }, [])

  return (
    <div
      id="pickles"
      className="flex lg:gap-[24px] md:gap-[24px] sm:gap-0 flex-wrap items-center lg:py-[24px] md:py-[24px] h-[100vh] overflow-y-visible scrollbar-none"
    >
      <UploadFile />
      <VideoPlayer
        src="https://video-macos.pokabook.kr/8d5ec6cc/index.m3u8?scale=1080p"
        videoId="8d5ec6cc"
        ref={beforeVideo}
      />
      <VideoPlayer
        src="https://video-macos.pokabook.kr/8d5ec6cc/index.m3u8?scale=1080p"
        videoId="8d5ec6cc"
        ref={afterVideo}
      />
    </div>
  )
}

export default Pickle
