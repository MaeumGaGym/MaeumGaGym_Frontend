'use client'
import { MouseEvent, ReactNode } from 'react'

interface ChipProps {
  className?: string
  kind?: keyof typeof ChipColor
  icon?: ReactNode
  children?: ReactNode
  onClick?: (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void
}

const ChipColor = {
  normal: 'bg-blue50',
  dark: 'bg-blue900',
  transparent: 'bg-transparent',
}

export const Chip = ({ className, kind = 'normal', icon, children }: ChipProps) => {
  const color = ChipColor[kind]
  return (
    <div className={`select-none w-fit h-9 px-4 py-2 gap-2 flex items-center justify-center rounded-full ${color} text-blue500 ${className ?? ''}`}>
      {children && <span className='text-labelMedium'>{children}</span>}
      {icon}
    </div>
  )
}
