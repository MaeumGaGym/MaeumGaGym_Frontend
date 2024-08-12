'use client'

import { useState, useRef, useEffect } from 'react'

interface PropsType {
  setIsClose: () => void
  children: React.JSX.Element
  modalType?: 'comment'
}

const Modal = ({ setIsClose, children, modalType }: PropsType) => {
  const modalEl = useRef<HTMLDivElement>(null)
  const scrollEl = useRef<HTMLDivElement>(null)
  const backgroundEl = useRef<HTMLDivElement>(null)

  const [startY, setStartY] = useState(0)
  const [modalHeight, setModalHeight] = useState<string>('')
  const [initHeight, setInitHeight] = useState<number | undefined>(undefined)
  const [defaultModalPx, setDefaultModalPx] = useState<number | undefined>(0)

  useEffect(() => {
    setModalHeight(modalType ? '67%' : '')
  }, [])

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      if (modalType === 'comment') {
        setStartY(e.touches[0].clientY)
      }
    }

    const handleTouchMove = (e: TouchEvent) => {
      // e.stopPropagation()
      if (modalType === 'comment') {
        // if (e.cancelable) e.preventDefault()
        const deltaY = startY - ~~e.changedTouches[0].clientY
        setModalHeight(initHeight ? `${initHeight + deltaY}px` : '')
      }
    }

    const handleTouchEnd = (e: TouchEvent) => {
      // e.stopPropagation()
      if (modalType === 'comment') {
        if (initHeight && defaultModalPx) {
          if (startY - e.changedTouches[0].clientY > 50) {
            const changeHeight =
              initHeight < defaultModalPx
                ? defaultModalPx
                : initHeight === defaultModalPx
                  ? defaultModalPx + defaultModalPx / 3
                  : initHeight
            setInitHeight(changeHeight)
            setModalHeight(`${changeHeight}px`)
          } else if (startY - e.changedTouches[0].clientY < -50) {
            const changeHeight =
              initHeight > defaultModalPx
                ? defaultModalPx
                : initHeight === defaultModalPx
                  ? defaultModalPx - defaultModalPx / 3
                  : initHeight
            setInitHeight(changeHeight)
            setModalHeight(`${changeHeight}px`)
          } else {
            setModalHeight(`${initHeight}px`)
          }
        }
      }
    }

    scrollEl.current?.addEventListener('touchstart', handleTouchStart)
    scrollEl.current?.addEventListener('touchmove', handleTouchMove, { passive: false })
    scrollEl.current?.addEventListener('touchend', handleTouchEnd)
    return () => {
      scrollEl.current?.removeEventListener('touchstart', handleTouchStart)
      scrollEl.current?.removeEventListener('touchmove', handleTouchMove)
      scrollEl.current?.removeEventListener('touchend', handleTouchEnd)
    }
  }, [modalEl.current?.offsetHeight])

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      // e.preventDefault()
    }

    const handleTouchEnd = (e: TouchEvent, isBackground: boolean) => {
      e.preventDefault()
      isBackground && setIsClose()
    }
    backgroundEl.current?.addEventListener('touchstart', handleTouchStart)
    backgroundEl.current?.addEventListener('touchend', e => handleTouchEnd(e, true))
    modalEl.current?.addEventListener('touchstart', handleTouchStart)
    modalEl.current?.addEventListener('touchend', e => handleTouchEnd(e, false))
    return () => {
      backgroundEl.current?.removeEventListener('touchstart', handleTouchStart)
      backgroundEl.current?.removeEventListener('touchend', e => handleTouchEnd(e, true))
      modalEl.current?.removeEventListener('touchstart', handleTouchStart)
      modalEl.current?.removeEventListener('touchend', e => handleTouchEnd(e, false))
    }
  }, [])

  return (
    <div className="w-full h-full absolute top-0 flex flex-col z-30">
      <div className="bg-black grow opacity-40 overflow-hidden" ref={backgroundEl}></div>
      <div
        className={`flex flex-col text-white bg-gray900 w-full absolute bottom-0 animate-[commentPullUp_80ms_linear_forwards] pb-[34px] opacity-100 rounded-t-[10px] will-change-[height]`}
        ref={modalEl}
        style={{ height: modalHeight }}
        onAnimationEnd={e => {
          setInitHeight(e.currentTarget.clientHeight)
          setDefaultModalPx(e.currentTarget.clientHeight)
        }}
      >
        <div className="flex items-end justify-center h-[15px] min-h-[15px]" ref={scrollEl}>
          <div className="w-16 h-[5px] rounded-sm bg-gray700"></div>
        </div>
        {children}
      </div>
    </div>
  )
}

export default Modal
