import Image from 'next/image'
import React from 'react'

export interface poseProps {
  exact_name: string
  simple_part: string
  exact_part: string
  thumbnail: string
  onClick?: () => void
}

export const PoseCard = ({ exact_name, simple_part, exact_part, thumbnail, onClick }: poseProps) => {
  return (
    <div onClick={onClick} className="gap-x-2 w-[162px] gap-[8px] flex flex-col">
      <div className="rounded-lg h-[162px] w-[162px] p-9px bg-gray25 flex items-center justify-center">
        <Image height={144} width={144} src={thumbnail} alt={exact_name} />
      </div>
      <div className="px-[4px] gap-[4px] flex w-full flex-col">
        <p className="text-gray900 text-labelMedium">{exact_name}</p>
        <p className="text-gray600 text-bodySmall">
          {simple_part} · {exact_part}
        </p>
      </div>
    </div>
  )
}
0
