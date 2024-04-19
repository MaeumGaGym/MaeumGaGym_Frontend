'use client'

import Modal from '@/components/modal'
import { Pencil, Trash, Flag } from '@package/ui'
import { useState } from 'react'

interface PropsType {
  setIsClose: () => void
  owner: boolean
}

type ModalType = 'report' | 'delete' | 'edit' | null

const More = ({ setIsClose, owner }: PropsType) => {
  const [modal, setModal] = useState<ModalType>(null)

  const handleModalClose = () => {
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
          <div className="bg-gray900 h-[52px] w-full flex items-center px-5 py-3 gap-6" onClick={handleModalEdit}>
            <Pencil />
            <span className="text-white text-labelLarge">수정</span>
          </div>
          <div className="bg-gray900 h-[52px] w-full flex items-center px-5 py-3 gap-6" onClick={handleModalDelete}>
            <Trash />
            <span className="text-white text-labelLarge">삭제</span>
          </div>
        </>
      ) : (
        <>
          <div className="bg-gray900 h-[52px] w-full flex items-center px-5 py-3 gap-6" onClick={handleModalReport}>
            <Flag />
            <span className="text-white text-labelLarge">신고</span>
          </div>
        </>
      )}
    </Modal>
  )
}

export default More
