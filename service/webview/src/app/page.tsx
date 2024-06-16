'use client'
import VideoPlayer from './VideoPlayer'
import './animation.css'
import UploadFile from './UploadFile'
import { useEffect, useRef, useState } from 'react'

const Pickle = () => {
  const picklesRef = useRef<HTMLDivElement>(null)
  const beforeVideo = useRef<HTMLDivElement>(null)
  const afterVideo = useRef<HTMLDivElement>(null)
  const [videoPlayerHeight, setVideoPlayerHeight] = useState<number>(0)
  const [startY, setStartY] = useState<number>(0)
  const [pickleIndex, setPickleIndex] = useState<number>(0)
  const [isScrollingDisabled, setIsScrollingDisabled] = useState<boolean>(true)

  useEffect(() => {
    setVideoPlayerHeight(beforeVideo.current?.getBoundingClientRect().height as number)
  }, [beforeVideo.current])

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      setIsScrollingDisabled(false)
      setStartY(e.touches[0].clientY)
    }

    const handleTouchEnd = (e: TouchEvent) => {
      setIsScrollingDisabled(true)
      if (startY - e.changedTouches[0].clientY > 50 && pickleIndex < 5) {
        picklesRef.current?.scrollTo({ top: (pickleIndex + 1) * videoPlayerHeight, behavior: 'smooth' })
        setPickleIndex(pickleIndex + 1)
      } else if (startY - e.changedTouches[0].clientY < -50 && pickleIndex > 0) {
        picklesRef.current?.scrollTo({ top: (pickleIndex - 1) * videoPlayerHeight, behavior: 'smooth' })
        setPickleIndex(pickleIndex - 1)
      }
    }

    picklesRef.current?.addEventListener('touchstart', handleTouchStart)
    picklesRef.current?.addEventListener('touchend', handleTouchEnd)
    return () => {
      picklesRef.current?.removeEventListener('touchstart', handleTouchStart)
      picklesRef.current?.removeEventListener('touchend', handleTouchEnd)
    }
  }, [startY])

  return (
    <div
      id="pickles"
      className={`flex lg:gap-[24px] md:gap-[24px] sm:gap-0 flex-wrap items-center lg:py-[24px] md:py-[24px] h-[100vh] scrollbar-none transition-transform ${isScrollingDisabled ? 'overflow-hidden' : 'overflow-hidden'}`}
      ref={picklesRef}
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
      <VideoPlayer
        src="https://video-macos.pokabook.kr/8d5ec6cc/index.m3u8?scale=1080p"
        videoId="8d5ec6cc"
        ref={afterVideo}
      />
      <VideoPlayer
        src="https://video-macos.pokabook.kr/8d5ec6cc/index.m3u8?scale=1080p"
        videoId="8d5ec6cc"
        ref={afterVideo}
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
