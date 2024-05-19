'use client'
import React from 'react'

export interface BorderBoxProps {
  children?: React.ReactNode
  className?: string
  onClick?: () => void
}

export const BorderBox = ({ children, className, onClick }: BorderBoxProps) => {
  return (
    <div onClick={onClick} className={`border border-gray100 rounded-2xl ${className}`}>
      {children}
    </div>
  )
}
