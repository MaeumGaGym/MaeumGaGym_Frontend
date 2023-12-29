'use client'

import { Dots, Heart, Message, Pause, Play, Share } from '@/assets'
import Hls from 'hls.js'
import { useEffect, useRef, useState } from 'react'
import './animation.css'
import Content from './Content'

const VideoPlayer = ({ src }: { src: string }) => {
  const [pause, setPause] = useState<boolean>(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  document.onkeydown = e => {
    if (e.key === ' ') {
      onPause()
    }
  }

  const onPause = () => {
    if (videoRef.current) {
      !pause ? videoRef.current.pause() : videoRef.current.play()
      setPause(v => !v)
    }
  }

  useEffect(() => {
    if (Hls.isSupported() && videoRef.current) {
      const hls = new Hls()
      hls.loadSource(src)
      hls.attachMedia(videoRef.current)
    }
  }, [src])

  return (
    <div
      onClick={onPause}
      className="bg-[url('https://storage.pokabook.kr/maeumgagym/771d5ba1/thumbnail.png')] bg-cover rounded-[8px] aspect-[9/16] w-full relative"
    >
      <video ref={videoRef} className="w-full h-full object-cover rounded-[8px]" autoPlay loop />
      {pause ? (
        <div className="absolute w-[80px] h-[80px] bg-[rgba(0,0,0,0.4)] top-[calc(50%-40px)] left-[calc(50%-40px)] rounded-full flex justify-center items-center animate-[showUp_0.5s_ease-out_forwards]">
          <Pause className="text-white" />
        </div>
      ) : undefined}
      {!pause ? (
        <div className="absolute w-[80px] h-[80px] bg-[rgba(0,0,0,0.4)] top-[calc(50%-40px)] left-[calc(50%-40px)] rounded-full flex justify-center items-center animate-[showUp_0.5s_ease-out_forwards]">
          <Play isFill className="text-white" />
        </div>
      ) : undefined}
      <Content />
      <div className="w-[80px] h-fit py-[40px] gap-[24px] flex flex-col absolute bottom-0 right-0 items-center">
        <div className="flex flex-col items-center cursor-pointer">
          <div className="flex justify-center items-center w-[48px] h-[48px]">
            <Heart isFill className="text-white" size={32} />
          </div>
          <span className="text-bodySmall text-white">36.1만</span>
        </div>
        <div className="flex flex-col items-center cursor-pointer">
          <div className="flex justify-center items-center w-[48px] h-[48px]">
            <Message className="text-white" size={32} />
          </div>
          <span className="text-bodySmall text-white">339</span>
        </div>
        <div className="flex flex-col items-center cursor-pointer">
          <div className="flex justify-center items-center w-[48px] h-[48px]">
            <Share className="text-white" size={32} />
          </div>
          <span className="text-bodySmall text-white">공유</span>
        </div>
        <div className="flex justify-center items-center w-[48px] h-[48px] cursor-pointer">
          <Dots className="text-white" size={32} />
        </div>
      </div>
    </div>
  )
}

export default VideoPlayer
