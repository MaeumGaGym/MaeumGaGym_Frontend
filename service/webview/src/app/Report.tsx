'use client'

import Modal from '@/components/modal'
import { TouchEvent, useEffect, useRef, useState } from 'react'
import { CheckCircle, Button } from '@package/ui'

interface PropsType {
  setIsClose: () => void
  reportType: 'post' | 'comment'
}

type ReportReason =
  | '스팸'
  | '성적인 콘텐츠'
  | '혐오 발언 또는 상징'
  | '폭력 또는 위험한 단체'
  | '거짓 정보'
  | '따돌림 또는 괴롭힘'
  | '유해하거나 위험한 행위'
  | '지식재산권 침해'
  | '아동 학대'
  | '자살 또는 자해'
  | '법적 문제'
  | '테러 조장'
  | '불법 또는 규제 상품 판매'
  | '기타 문제'

interface ReportReasonsType {
  post: Array<ReportReason>
  comment: Array<ReportReason>
}

const Report = ({ setIsClose, reportType }: PropsType) => {
  const reportReasons: ReportReasonsType = {
    post: [
      '스팸',
      '성적인 콘텐츠',
      '혐오 발언 또는 상징',
      '폭력 또는 위험한 단체',
      '거짓 정보',
      '따돌림 또는 괴롭힘',
      '유해하거나 위험한 행위',
      '지식재산권 침해',
      '아동 학대',
      '자살 또는 자해',
      '법적 문제',
      '테러 조장',
      '불법 또는 규제 상품 판매',
      '기타 문제',
    ],
    comment: [
      '스팸',
      '성적인 콘텐츠',
      '혐오 발언 또는 상징',
      '폭력 또는 위험한 단체',
      '거짓 정보',
      '따돌림 또는 괴롭힘',
      '지식재산권 침해',
      '아동 학대',
      '자살 또는 자해',
      '테러 조장',
      '기타 문제',
    ],
  }

  const reportsRef = useRef<HTMLDivElement>(null)
  const [reportReason, setReportReason] = useState<ReportReason | null>(null)
  const renderReasonBox = reportReasons[reportType].map((reason, idx) => (
    <div
      className="px-5 py-[14px]"
      onTouchEnd={e => {
        const finalScrollTop = reportsRef.current?.scrollTop as number
        const finalTouchY = e.changedTouches[0].clientY
        !(initScrollTop !== finalScrollTop || initTouchY !== finalTouchY) && setReportReason(reason)
      }}
      key={idx}
    >
      {reason}
    </div>
  ))
  const [initScrollTop, setInitScrollTop] = useState(0)
  const [initTouchY, setInitTouchY] = useState(0)

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    setInitScrollTop(reportsRef.current?.scrollTop as number)
    setInitTouchY(e.touches[0].clientY)
  }

  return (
    <Modal setIsClose={setIsClose}>
      <>
        <div className="h-[75vh] relative flex flex-col">
          <div className="w-full px-5 py-3 text-titleMedium text-white">신고</div>
          <div
            className="overflow-y-scroll grow scrollbar-none"
            ref={reportsRef}
            onTouchStart={e => handleTouchStart(e)}
          >
            <div className="flex flex-col px-5 py-6 gap-4 ">
              <span className="text-labelLarge">이 {reportType === 'comment' ? '댓글' : '게시물'}을 신고하는 이유</span>
              <span className="text-bodyMedium text-gray400">
                누군가 위급한 상황에 있다고 생각된다면 즉시 현지 응급 서비스 기관에 연락하시기 바랍니다.
              </span>
            </div>
            {renderReasonBox}
          </div>
        </div>
        {reportReason && (
          <Modal setIsClose={setIsClose}>
            <ThanksReport setIsClose={setIsClose} />
          </Modal>
        )}
      </>
    </Modal>
  )
}

const ThanksReport = ({ setIsClose }: { setIsClose: () => void }) => {
  return (
    <Modal setIsClose={setIsClose}>
      <div className="h-[75vh] flex justify-center items-center flex-col">
        <div className="flex flex-col items-center">
          <CheckCircle size={100} className="text-blue500 mb-8" />
          <div className="flex flex-col gap-2 items-center">
            <span className="text-titleMedium">알려주셔서 고마워요</span>
            <span className="text-bodyMedium text-gray400 text-center">
              회원님의 소중한 의견은 마음가짐 커뮤니티를
              <br /> 안전하게 유지하는 데 도움이 됩니다.
            </span>
          </div>
        </div>
        <div className="absolute bottom-[54px] w-full px-5">
          <Button className="px-3 py-2 w-full" onTouchEnd={setIsClose}>
            확인
          </Button>
        </div>
      </div>
    </Modal>
  )
}

export default Report
