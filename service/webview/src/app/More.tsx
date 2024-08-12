'use client'

import Modal from '@/components/modal'
import { Pencil, Trash, Flag } from '@package/ui'
import { useState } from 'react'
import Report from './Report'

interface PropsType {
  setIsClose: () => void
  owner: boolean
}

type ModalType = 'report' | 'delete' | 'edit' | null

const More = ({ setIsClose, owner }: PropsType) => {
  const [modal, setModal] = useState<ModalType>(null)

  const handleModalClose = () => {
    setIsClose()
    setModal(null)
  }

  const handleModalReport = () => {
    setModal('report')
  }

  const handleModalDelete = () => {
    setModal('delete')
  }

  const handleModalEdit = () => {
    setModal('edit')
  }

  return (
    <Modal setIsClose={setIsClose}>
      {owner ? (
        <>
          <div className="bg-gray900 h-[52px] w-full flex items-center px-5 py-3 gap-6" onTouchEnd={handleModalEdit}>
            <Pencil />
            <span className="text-white text-labelLarge">수정</span>
          </div>
          <div className="bg-gray900 h-[52px] w-full flex items-center px-5 py-3 gap-6" onTouchEnd={handleModalDelete}>
            <Trash />
            <span className="text-white text-labelLarge">삭제</span>
          </div>
        </>
      ) : (
        <>
          <div className="bg-gray900 h-[52px] w-full flex items-center px-5 py-3 gap-6" onTouchEnd={handleModalReport}>
            <Flag />
            <span className="text-white text-labelLarge">신고</span>
          </div>
          {modal === 'report' && <Report setIsClose={handleModalClose} reportType="post" />}
        </>
      )}
    </Modal>
  )
}

export default More
