import { toast } from '@/utils/toast/toast'

interface PropsType {
  setModalClose: () => void
}

const DeleteModal = ({ setModalClose }: PropsType) => {
  const handleModalClose = () => {
    setModalClose()
  }

  return (
    <div className="absolute w-full h-full flex top-0 z-40 items-center justify-center">
      <div className="bg-black opacity-40 w-full h-full absolute"></div>
      <div className="mx-[55px] w-full flex gap-2 p-6 flex-col opacity-1 z-40 bg-gray800 rounded-lg">
        <p className="text-titleMedium text-white">댓글 삭제</p>
        <p className="text-labelMedium text-white">댓글을 완전히 삭제하실 건가요?</p>
        <div className="mt-3 flex gap-2 justify-between">
          <button
            className="rounded-lg px-2 py-3 flex justify-center items-center bg-red50 text-red500 grow text-labelLarge outline-none"
            onTouchEnd={handleModalClose}
          >
            취소
          </button>
          <button
            className="rounded-lg px-2 py-3 flex justify-center items-center bg-red500 text-red50 grow text-labelLarge outline-none"
            onTouchEnd={() => {
              handleModalClose()
              toast('success', '댓글을 삭제했습니다')
            }}
          >
            삭제
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeleteModal
