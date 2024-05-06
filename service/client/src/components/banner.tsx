'use client'
import Image from 'next/image'
import tentativeBannerIcon from '@/assets/tentativeBannerIcon.png'

export interface BannerProps {
  title: string
  description: string
}

export const Banner = ({ title, description }: BannerProps) => {
  return (
    <div className="flex w-full h-60 px-8 pt-[60px] justify-center items-center bg-gray25 border-b border-gray100">
      <div className="flex w-[1200px] justify-between items-center">
        <div className="flex flex-col gap-2">
          <p className="text-black text-headlineSmall">{title}</p>
          <p className="text-gray600 text-bodyMedium">{description}</p>
        </div>
        <Image src={tentativeBannerIcon} alt="selfcare" />
      </div>
    </div>
  )
}
