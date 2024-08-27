import { Dots, Heart, Message, Share } from '@package/ui'
import { useEffect } from 'react'

export interface Heart {
  postMessage(message: string): void
}

declare global {
  interface Window {
    Heart?: Heart
  }
}

interface propsType {
  setCommentOpen: () => void
  like: boolean
  setLike: () => void
  setShareOpen: () => void
  setMoreOpen: () => void
}

const SideBar = ({ setCommentOpen, like, setLike, setShareOpen, setMoreOpen }: propsType) => {
  const sendMessageToFlutter = (message: string) => {
    console.log('Attempting to send message:', message) // 디버깅용 로그
    if (window.Heart && window.Heart.postMessage) {
      window.Heart.postMessage(message)
      console.log('Message sent successfully') // 성공 로그
    } else {
      console.log('Flutter app interface is not available')
    }
  }

  const handleClick = () => {
    setLike()
    sendMessageToFlutter('heart')
  }

  useEffect(() => {
    // 컴포넌트 마운트 시 window.Heart 객체 확인
    if (window.Heart) {
      console.log('Heart interface is available')
    } else {
      console.log('Heart interface is not available')
    }
  }, [])

  return (
    <div className="w-[80px] h-fit py-[40px] gap-[24px] flex flex-col absolute bottom-0 right-0 items-center z-40">
      <div className="flex flex-col items-center cursor-pointer" onTouchEnd={handleClick}>
        <div className="flex justify-center items-center w-[48px] h-[48px]">
          <Heart isFill className={`${like ? 'text-red600' : 'text-white'}`} size={32} />
        </div>
        <span className={`text-white text-bodySmall`}>36.1만</span>
      </div>
      <div className="flex flex-col items-center cursor-pointer" onTouchEnd={setCommentOpen}>
        <div className="flex justify-center items-center w-[48px] h-[48px]">
          <Message className="text-white" size={32} />
        </div>
        <span className="text-bodySmall text-white">339</span>
      </div>
      <div className="flex flex-col items-center cursor-pointer" onTouchEnd={setShareOpen}>
        <div className="flex justify-center items-center w-[48px] h-[48px]">
          <Share className="text-white" size={32} />
        </div>
        <span className="text-bodySmall text-white">공유</span>
      </div>
      <div className="flex justify-center items-center w-[48px] h-[48px] cursor-pointer" onTouchEnd={setMoreOpen}>
        <Dots className="text-white" size={32} />
      </div>
    </div>
  )
}

export default SideBar
