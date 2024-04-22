import Banner1 from '@/assets/shopBanner/banner1.png'
import Image from 'next/image'
const BannerImage = [Banner1]

const Slider = () => {
  return (
    <div className="w-full relative">
      <Image src={BannerImage[0]} className="w-full overflow-hidden rounded-3xl" alt="shop banenr image" />
      <p className="text-white absolute  bottom-[4%] right-[10%] text-bodySmall">
        {1}/{BannerImage.length}
      </p>
    </div>
  )
}
export default Slider
