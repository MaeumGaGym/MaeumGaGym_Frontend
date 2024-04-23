'use client'

import { useState } from 'react'
import { Flag, Pencil, Trash } from '@package/ui'
import Modal from './modal'
import Report from '@/app/Report'

const ChatMore = ({ setIsClose, isMine }: { setIsClose: () => void; isMine: boolean }) => {
  const [openReport, setOpenReport] = useState<boolean>()

  const handleCloseReport = () => {
    setOpenReport(false)
    setIsClose()
  }

  const handleOpenReport = () => {
    setOpenReport(true)
  }

  return (
    <Modal setIsClose={setIsClose}>
      <>
        <div className="flex px-5 py-[2px]">
          <span className="text-bodyMedium text-gray300">댓글</span>
        </div>
        <div>
          {isMine ? (
            <div className="flex pl-5 items-center py-3 gap-6">
              <Pencil />
              <span className="text-labelLarge">수정</span>
            </div>
          ) : (
            <>
              <div className="flex pl-5 items-center py-3 gap-6" onClick={handleOpenReport}>
                <Flag />
                <span className="text-labelLarge">신고</span>
              </div>
              {openReport && <Report setIsClose={handleCloseReport} reportType="comment" />}
            </>
          )}
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
