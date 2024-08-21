'use client'
import VideoPlayer from './VideoPlayer'
import './animation.css'
import UploadFile from './UploadFile'
import { useEffect, useRef, useState } from 'react'

const Pickle = () => {
  const picklesRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLDivElement>(null)
  const [pickleIndex, setPickleIndex] = useState<number>(0)
  const [startY, setStartY] = useState<number>(0)
  const [videoPlayerHeight, setVideoPlayerHeight] = useState<number>(0)
  const [videoIds, setVideoIds] = useState<Array<string>>(['8d5ec6cc', '8d5ec6cc', '8d5ec6cc', '8d5ec6cc', '8d5ec6cc'])
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const handleModalOpen = (b: boolean) => {
    setIsModalOpen(b)
  }

  useEffect(() => {
    setVideoPlayerHeight(videoRef.current?.getBoundingClientRect().height as number)
    console.log(videoPlayerHeight)
  }, [videoRef.current])

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      setStartY(e.touches[0].clientY)
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (isModalOpen) return
      picklesRef.current?.scrollTo({ top: videoPlayerHeight * pickleIndex + startY - e.changedTouches[0].clientY })
    }

    const handleTouchEnd = (e: TouchEvent) => {
      if (isModalOpen) return
      if (startY - e.changedTouches[0].clientY > 50 && pickleIndex < videoIds.length - 1) {
        picklesRef.current?.scrollTo({ top: (pickleIndex + 1) * videoPlayerHeight, behavior: 'smooth' })
        setPickleIndex(pickleIndex + 1)
      } else if (startY - e.changedTouches[0].clientY < -50 && pickleIndex > 0) {
        picklesRef.current?.scrollTo({ top: (pickleIndex - 1) * videoPlayerHeight, behavior: 'smooth' })
        setPickleIndex(pickleIndex - 1)
      } else {
        picklesRef.current?.scrollTo({ top: pickleIndex * videoPlayerHeight, behavior: 'smooth' })
      }
    }

    picklesRef.current?.addEventListener('touchstart', handleTouchStart)
    picklesRef.current?.addEventListener('touchmove', handleTouchMove, { passive: false })
    picklesRef.current?.addEventListener('touchend', handleTouchEnd)
    return () => {
      picklesRef.current?.removeEventListener('touchstart', handleTouchStart)
      picklesRef.current?.removeEventListener('touchmove', handleTouchMove)
      picklesRef.current?.removeEventListener('touchend', handleTouchEnd)
    }
  }, [startY])

  return (
    <div
      id="pickles"
      className={`lg:gap-[24px] md:gap-[24px] sm:gap-0 lg:py-[24px] md:py-[24px] h-[100vh] scrollbar-none transition-transform overflow-hidden`}
      ref={picklesRef}
    >
      <UploadFile />
      {videoIds.map((id, idx) => {
        return (
          <VideoPlayer
            src={`https://video-macos.pokabook.kr/${id}/index.m3u8?scale=1080p`}
            videoId={id}
            ref={videoRef}
            isPlay={idx === pickleIndex ? true : false}
            setIsModalOpen={handleModalOpen}
            key={idx}
          ></VideoPlayer>
        )
      })}
    </div>
  )
}

export default Pickle
