'use client'
import { useState } from 'react'

interface IMediaType {
  media: string
  time: number
}
const Media = () => {
  const [media, setMedia] = useState<IMediaType[]>([])
  return (
    <div className="grid grid-cols-3 flex-y-1 overflow-y-auto gap-[2px]">
      {media.map(v => (
        <div className=" aspect-[9/16] bg-gray600 relative">
          <p className="absolute bottom-[6px] right-3 text-white text-bodyMedium">
            {Math.floor(v.time / 60)}:{v.time % 60}
          </p>
        </div>
      ))}
    </div>
  )
}

export default Media
