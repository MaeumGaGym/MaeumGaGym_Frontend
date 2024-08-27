import { Dots, Heart, Message, Share } from '@package/ui'
import { useEffect } from 'react'

interface propsType {
  setCommentOpen: () => void
  like: boolean
  setLike: () => void
  setShareOpen: () => void
  setMoreOpen: () => void
}

const SideBar = ({ setCommentOpen, like, setLike, setShareOpen, setMoreOpen }: propsType) => {
  const sendMessageToFlutter = (message: string) => {
    if (window.heart && window.heart.postMessage) {
      window.heart.postMessage(message)
    } else {
      console.log('Flutter app interface is not available')
    }
  }

  const handleClick = () => {
    setLike()
    sendMessageToFlutter('heart')
  }

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
