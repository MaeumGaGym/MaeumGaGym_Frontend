'use client'

import { Heart, Pause, Play } from '@package/ui'
import Hls from 'hls.js'
import { forwardRef, useEffect, useRef, useState } from 'react'
import Content from './Content'
import SideBar from './SideBar'
import Comments from './Comment'
import ShareContainer from './Share'
import More from './More'

type ModalType = null | 'comment' | 'share' | 'more'

interface PropsType {
  src: string
  videoId: string
}

const VideoPlayer = forwardRef<HTMLDivElement, PropsType>(({ src, videoId }: PropsType, ref) => {
  const [pause, setPause] = useState<boolean>(false)
  const [like, setLike] = useState<boolean>(false)
  const [nowModalOpen, setNowModalOpen] = useState<ModalType>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  const onPause = () => {
    if (videoRef.current) {
      !pause ? videoRef.current.pause() : videoRef.current.play()
      setPause(v => !v)
    }
  }

  const handleCommentOpen = () => {
    setNowModalOpen('comment')
  }

  const handleShareOpen = () => {
    setNowModalOpen('share')
  }

  const handleMoreOpen = () => {
    setNowModalOpen('more')
  }

  const handleModalClose = () => {
    setNowModalOpen(null)
  }

  const handleLike = () => {
    setLike(!like)
  }

  useEffect(() => {
    const handleCanPlayThrough = () => {
      if (videoRef.current) {
        videoRef.current.play()
        videoRef.current.muted = true
        setPause(false)
        videoRef.current.removeEventListener('canplaythrough', handleCanPlayThrough)
      }
    }

    if (Hls.isSupported() && videoRef.current) {
      const hls = new Hls()
      hls.loadSource(src)
      hls.attachMedia(videoRef.current)
      videoRef.current.muted = true
      videoRef.current.addEventListener('canplaythrough', handleCanPlayThrough)
    }

    return () => {
      videoRef.current?.removeEventListener('canplaythrough', handleCanPlayThrough)
    }
  }, [src])

  return (
    <div
      className={`bg-cover rounded-[8px] lg:aspect-[9/16] md:aspect-[9/16] w-full sm:h-full relative`}
      style={{ backgroundImage: `url('https://storage.pokabook.kr/maeumgagym/${videoId}/thumbnail.png')` }}
      ref={ref}
    >
      <div className="loader" />
      <video
        ref={videoRef}
        className={`w-full ${nowModalOpen !== 'comment' ? 'h-full' : 'h-1/3'} object-cover lg:rounded-[8px] md:rounded-[8px] z-10 absolute`}
        loop
        onClick={onPause}
      />
      {like ? (
        <div className="absolute w-[80px] h-[80px] bg-transparent top-[calc(50%-40px)] left-[calc(50%-40px)] rounded-full flex justify-center items-center animate-[likeShowUp_0.5s_ease-out_forwards] z-20">
          <Heart size={164} className="text-red500" isFill />
        </div>
      ) : undefined}
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
      {!nowModalOpen && (
        <>
          <Content />
          <SideBar
            setCommentOpen={handleCommentOpen}
            setLike={handleLike}
            like={like}
            setShareOpen={handleShareOpen}
            setMoreOpen={handleMoreOpen}
          />
        </>
      )}
      {nowModalOpen === 'comment' && <Comments setIsClose={handleModalClose} />}
      {nowModalOpen === 'share' && <ShareContainer setIsClose={handleModalClose} />}
      {nowModalOpen === 'more' && <More setIsClose={handleModalClose} owner={false} />}
    </div>
  )
})

export default VideoPlayer
