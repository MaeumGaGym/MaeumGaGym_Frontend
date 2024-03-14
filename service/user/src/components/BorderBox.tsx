'use client'
import React from 'react'

interface PropsType {
  children?: React.ReactNode
  className?: string
}

const BorderBox = ({ children, className }: PropsType) => {
  return <div className={`border border-gray100 rounded-2xl ${className}`}>{children}</div>
}

export default BorderBox
