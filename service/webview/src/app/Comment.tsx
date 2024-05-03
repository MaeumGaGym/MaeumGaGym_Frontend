'use client'

import CommentInput from '@/components/commentInput'
import ChatMore from '@/components/chatMore'
import { Close, Dots } from '@package/ui'
import { useEffect, useState } from 'react'
import Modal from '@/components/modal'

interface PropsType {
  setIsClose: () => void
}

interface CommentPropsType {
  id: number
  content: string
  user_response: {
    nickname: string
    profile_image?: string
  }
  created_at: string
}

interface ReplyPropsType extends CommentPropsType {
  parent_comment_id: number
}

const commentdummy: Array<CommentPropsType> = [
  {
    id: 1,
    content: '태곤아 조만간 찾아갈게',
    user_response: { nickname: 'GangJun' },
    created_at: '1시간',
  },
  {
    id: 2,
    content: '그쪽도 냥뇽녕냥을 아세요?',
    user_response: {
      nickname: 'TaeYoung',
    },
    created_at: '1일',
  },
]

const replydummy: Array<ReplyPropsType> = [
  {
    id: 12,
    parent_comment_id: 1,
    content: '아니야 사양할게',
    user_response: { nickname: 'Jotaegone' },
    created_at: '30분',
  },
  {
    id: 4,
    parent_comment_id: 1,
    content: '아니야 태곤아. 걱정마. 기대해도 좋아.',
    user_response: { nickname: 'GangJun' },
    created_at: '5분',
  },
]

interface OpenMoreType {
  open: boolean
  isMine: boolean
}

const Comments = ({ setIsClose }: PropsType) => {
  const [openMore, setOpenMore] = useState<OpenMoreType>({ open: false, isMine: false })

  const handleOpenMore = (isMine?: boolean) => {
    if (!isMine) {
      setOpenMore({ open: !openMore.open, isMine: false })
    } else {
      setOpenMore({ open: !openMore.open, isMine: isMine })
    }
  }

  return (
    <Modal setIsClose={setIsClose} modalType={'comment'}>
      <>
        <div className="flex items-center justify-center px-5 py-3 border-b-[1px] border-gray800">
          <div className="flex justify-between w-full">
            <div className="flex gap-[14px] items-center">
              <span className="text-titleMedium">댓글</span>
              <span className="text-gray300">3.4천</span>
            </div>
            <Close onClick={setIsClose} />
          </div>
        </div>
        <div className="pt-3 overflow-scroll scrollbar-none grow">
          <div className="flex px-5 flex-col ">
            {commentdummy.map(comment => (
              <Comment data={comment} key={comment.id} handleOpenMore={handleOpenMore} isMine={false} />
            ))}
          </div>
        </div>
        <CommentInput placeholder="댓글 추가..." buttonText="게시" profile_image={''} />
        {openMore.open && <ChatMore setIsClose={handleOpenMore} isMine={openMore.isMine} />}
      </>
    </Modal>
  )
}

export default Comments

const Comment = ({
  data: {
    id,
    content,
    user_response: { nickname, profile_image },
    created_at,
  },
  handleOpenMore,
  isMine,
}: {
  data: CommentPropsType
  isMine: boolean
  handleOpenMore: (b: boolean) => void
}) => {
  const [openReply, setOpenReply] = useState<boolean>(false)
  const replys = replydummy.filter((reply: ReplyPropsType) => reply.parent_comment_id === id)

  return (
    <>
      <div className="flex gap-3 pb-6 grow">
        <div className="w-10 h-10 bg-white rounded-full basis-10 shrink-0">
          {/* <Image src={profile_image} alt="profileImg" width={40} height={40} className="rounded-50%" /> */}
        </div>
        <div className="flex flex-col grow">
          <div className="flex gap-3 grow">
            <div className="flex gap-[2px] flex-col grow">
              <span className="text-gray200 text-labelSmall flex gap-1">
                <span>{nickname}</span>
                <span className="text-bodyTiny text-gray400">{created_at}</span>
              </span>
              <span className="text-bodyMedium">{content}</span>
              <span className="pt-1 text-gray600 text-bodySmall cursor-pointer">답글달기</span>
              {replys.length !== 0 && (
                <div className="pt-[6px]">
                  <div className="flex gap-2" onClick={() => setOpenReply(!openReply)}>
                    <div className="w-[22px] h-[1px] bg-blue500 relative top-[7px]" />
                    <span className="text-blue500 text-bodySmall">{`답글 ${replys.length}개 모두숨기기`}</span>
                  </div>
                </div>
              )}
            </div>
            <div
              className="cursor-pointer"
              onClick={() => {
                handleOpenMore(isMine)
              }}
            >
              <Dots />
            </div>
          </div>
          {openReply &&
            replys.map(reply => <Reply data={reply} key={reply.id} handleOpenMore={handleOpenMore} isMine={false} />)}
        </div>
      </div>
    </>
  )
}

const Reply = ({
  data: {
    id,
    user_response: { nickname, profile_image },
    content,
    created_at,
  },
  handleOpenMore,
  isMine,
}: {
  data: ReplyPropsType
  handleOpenMore: (b: boolean) => void
  isMine: boolean
}) => {
  return (
    <div className="pt-3 gap-3 flex">
      <div className="w-10 h-10 bg-white rounded-full basis-10 shrink-0">
        {/* <Image src={profile_image} alt="profileImg" width={40} height={40} className="rounded-50%" /> */}
      </div>
      <div className="flex flex-col gap-[2px] grow">
        <div>
          <span>{nickname}</span>
          <span>{created_at}</span>
        </div>
        <span>{content}</span>
      </div>
      <div
        className="cursor-pointer"
        onClick={() => {
          handleOpenMore(isMine)
        }}
      >
        <Dots />
      </div>
    </div>
  )
}
