import { Flag, Pencil, Trash } from '@package/ui'

const ChatMore = ({ setIsClose, isMine }: { setIsClose: () => void; isMine: boolean }) => {
  return (
    <div className="w-full h-full absolute top-0 flex flex-col z-40">
      <div
        className="bg-black grow opacity-40"
        onClick={() => {
          setIsClose()
        }}
      ></div>
      <div className="flex flex-col text-white bg-gray900 w-full absolute bottom-0 animate-[commentPullUp_80ms_linear_forwards] opacity-100 pb-[34px]">
        <div className="flex justify-center items-end h-[15px]">
          <div className="w-16 h-[5px] rounded-sm bg-gray700"></div>
        </div>
        <div className="flex px-5 py-[2px]">
          <span className="text-bodyMedium text-gray300">댓글</span>
        </div>
        <div>
          <div className="flex pl-5 items-center py-3 gap-6">
            {isMine ? (
              <>
                <Pencil />
                <span className="text-labelLarge">수정</span>
              </>
            ) : (
              <>
                <Flag />
                <span className="text-labelLarge">신고</span>
              </>
            )}
          </div>
          <div className="flex pl-5 items-center py-3 gap-6">
            <Trash />
            <span className="text-labelLarge">삭제</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatMore
