'use client'
import React, { useEffect, useRef } from 'react'
import { RootState, useAppDispatch } from '../store/store'
import { useSelector } from 'react-redux'
import { deleteToast } from '../store/modules/toast'

interface PropsType {
  text: string
}

const Toast = () => {
  const dispatch = useAppDispatch()
  const data = useSelector((state: RootState) => state.toast)

  useEffect(() => {
    data.map(item => {
      setTimeout(() => {
        dispatch(deleteToast({ id: item.id }))
      }, item.duration)
    })
  }, [data])

  return (
    <div className="fixed w-full h-full top-0 flex flex-col items-center pointer-events-none box-border">
      {data.map(item => {
        return (
          <div className="px-6 py-4 absolute top-6 bg-gray800 text-white text-labelMedium rounded-lg w-[95%] mx-[2.5%] max-w-[425px]">
            <span>{item.message}</span>
          </div>
        )
      })}
    </div>
  )
}

export default Toast
