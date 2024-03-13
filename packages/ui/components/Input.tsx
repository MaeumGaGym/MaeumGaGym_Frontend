'use client'

import { Eye } from '../assets'
import { useRef, useState } from 'react'

export const Input = ({
  leftIcon,
  label,
  name,
  placeholder,
  eye,
  value,
  change,
}: {
  leftIcon?: React.ReactNode
  label?: string
  name?: string
  placeholder: string
  eye?: boolean
  value?: string
  change?: (e: React.ChangeEvent<HTMLInputElement>) => void
}) => {
  const [focused, setFocsed] = useState<boolean>(false)
  const [eyeOn, setEyeOn] = useState<boolean>(true)
  const inputRef = useRef<HTMLInputElement>(null)

  const text = {
    value: value,
    onChange: change,
  }

  return (
    <div className="flex flex-col w-full gap-[8px]">
      {label && <p className={`text-bodyMedium ${focused && 'text-blue500'}`}>{label}</p>}
      <div
        className={`transition-all flex items-center cursor-text w-full rounded-[8px] p-[12px] border-[1px] gap-[8px] ${focused ? 'bg-blue50 border-blue100' : 'bg-gray25 border-gray50'}`}
        onClick={() => inputRef.current?.focus()}
      >
        {leftIcon}
        <input
          onFocus={() => setFocsed(true)}
          onBlur={() => setFocsed(false)}
          ref={inputRef}
          placeholder={placeholder}
          type={eyeOn ? 'text' : 'password'}
          name={name}
          className="w-full text-bodyMedium placeholder:text-gray400 bg-transparent border-none outline-none"
          {...text}
        />
        {eye &&
          (eyeOn ? (
            <Eye className="text-gray4" onClick={() => setEyeOn(false)} />
          ) : (
            <Eye className="text-gray4" isClose onClick={() => setEyeOn(true)} />
          ))}
      </div>
    </div>
  )
}
