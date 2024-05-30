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
      const currentScrollY = document.querySelector('#pickles')?.scrollTop
      console.log(currentScrollY)
      console.log(lastScrollPos)
      if (currentScrollY && currentScrollY >= lastScrollPos) {
        afterVideo.current?.scrollIntoView()
        setLastScrollPos(0)
      }
      if (currentScrollY && currentScrollY < lastScrollPos) {
        beforeVideo.current?.scrollIntoView()
        setLastScrollPos(220)
      }
    }
    document.querySelector('#pickles')?.addEventListener('scroll', handleScroll, { capture: true })
    return () => {
      document.querySelector('#pickles')?.removeEventListener('scroll', handleScroll, { capture: true })
    }
  }, [])

  return (
    <div
      id="pickles"
      className="flex lg:gap-[24px] md:gap-[24px] sm:gap-0 flex-wrap items-center lg:py-[24px] md:py-[24px] h-[100vh] overflow-y-scroll scrollbar-none"
    >
      <UploadFile />
      <VideoPlayer
        src="https://video-macos.pokabook.kr/9ecf46bb/index.m3u8?scale=1080p"
        videoId="9ecf46bb"
        ref={beforeVideo}
      />
      <VideoPlayer
        src="https://video-macos.pokabook.kr/9ecf46bb/index.m3u8?scale=1080p"
        videoId="9ecf46bb"
        ref={afterVideo}
      />
    </div>
  )
}

export default Pickle
