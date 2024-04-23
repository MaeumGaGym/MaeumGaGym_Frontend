import Image from 'next/image'
import tentativeBannerIcon from '@/assets/tentativeBannerIcon.png'

const Banner = () => {
  return (
    <div className="flex w-full h-60 px-8 pt-[60px] justify-center items-center bg-gray25 border-b border-gray100">
      <div className="flex w-[1200px] justify-between items-center">
        <div className="flex flex-col gap-2">
          <p className="text-black text-headlineSmall">자기관리</p>
          <p className="text-gray600 text-bodyMedium">나만의 루틴과 목표를 설정하여 자기관리에 도전해보세요.</p>
        </div>
        <Image src={tentativeBannerIcon} alt="selfcare" />
      </div>
    </div>
  )
}

export default Banner
