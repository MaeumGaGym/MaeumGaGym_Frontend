'use client'

import { Pause, Play } from '@/assets'
import Hls from 'hls.js'
import { useEffect, useRef, useState } from 'react'
import './animation.css'
import Content from './Content'
import SideBar from './SideBar'

const VideoPlayer = ({ src, videoId }: { src: string; videoId: string }) => {
  const [pause, setPause] = useState<boolean>(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const onPause = () => {
    if (videoRef.current) {
      !pause ? videoRef.current.pause() : videoRef.current.play()
      setPause(v => !v)
    }
  }

  const keyDownHandler = (e: KeyboardEvent) => {
    if (e.key === ' ') {
      onPause()
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', keyDownHandler)
    return () => document.removeEventListener('keydown', keyDownHandler)
  }, [pause])

  useEffect(() => {
    if (Hls.isSupported() && videoRef.current) {
      const hls = new Hls()
      hls.loadSource(src)
      hls.attachMedia(videoRef.current)
    }
  }, [src])

  useEffect(() => {
    if (videoRef.current && videoRef.current.paused) {
      videoRef.current.pause()
      setPause(false)
      videoRef.current.play()
    }
  }, [videoRef])

  return (
    <div
      onClick={onPause}
      className={`bg-cover rounded-[8px] aspect-[9/16] w-full relative`}
      style={{ backgroundImage: `url('https://storage.pokabook.kr/maeumgagym/${videoId}/thumbnail.png')` }}
    >
      <div className="loader" />
      <video ref={videoRef} className="w-full h-full object-cover rounded-[8px] z-10 absolute" loop />
      {pause ? (
        <div className="absolute w-[80px] h-[80px] bg-[rgba(0,0,0,0.4)] top-[calc(50%-40px)] left-[calc(50%-40px)] rounded-full flex justify-center items-center animate-[showUp_0.5s_ease-out_forwards] z-20">
          <Pause className="text-white" />
        </div>
      ) : undefined}
      {!pause ? (
        <div className="absolute w-[80px] h-[80px] bg-[rgba(0,0,0,0.4)] top-[calc(50%-40px)] left-[calc(50%-40px)] rounded-full flex justify-center items-center animate-[showUp_0.5s_ease-out_forwards] z-20">
          <Play isFill className="text-white" />
        </div>
      ) : undefined}
      <Content />
      <SideBar />
    </div>
  )
}

export default VideoPlayer
