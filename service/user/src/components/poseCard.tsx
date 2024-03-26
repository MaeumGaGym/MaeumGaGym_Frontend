import Image from 'next/image'
import { title } from 'process'
import React from 'react'
interface poseProps {
  exerciseName: string
  category: string
  src: string[]
  onClick?: () => void
}
export const PoseCard = ({ exerciseName, category, src, onClick }: poseProps) => {
  return (
    <div onClick={onClick} className="gap-x-2 w-[162px] gap-[8px] flex flex-col">
      <div className="rounded-lg h-[162px] w-[162px] p-9px bg-gray25 flex items-center justify-center">
        <Image height={144} width={144} src={src.join('')} alt={exerciseName} />
      </div>
      <div className="px-[4px] gap-[4px] flex w-full flex-col">
        <p className="text-gray900 text-labelMedium">{exerciseName}</p>
        <p className="text-gray600 text-bodySmall">{category}</p>
      </div>
    </div>
  )
}
