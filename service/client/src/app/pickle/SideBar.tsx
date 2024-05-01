import { Dots, Heart, Message, Share } from '@package/ui'

const SideBar = () => {
  return (
    <div className="w-[80px] h-fit py-[40px] gap-[24px] flex flex-col absolute bottom-0 right-0 items-center z-40">
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
  )
}

export default SideBar
