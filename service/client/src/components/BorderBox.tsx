'use client'
import React from 'react'

export interface BorderBoxProps {
  children?: React.ReactNode
  className?: string
  onClick?: () => void
}

export const BorderBox = ({ children, className }: BorderBoxProps) => {
  return <div className={`border border-gray100 rounded-2xl ${className}`}>{children}</div>
}
