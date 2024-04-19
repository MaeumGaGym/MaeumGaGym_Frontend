import { Flag, Pencil, Trash } from '@package/ui'
import Modal from './modal'

const ChatMore = ({ setIsClose, isMine }: { setIsClose: () => void; isMine: boolean }) => {
  return (
    <Modal setIsClose={setIsClose}>
      <>
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
      </>
    </Modal>
  )
}

export default ChatMore
