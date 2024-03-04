import { Star } from '@package/ui'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export interface SimpleItemType {
  id: string
  price: string
  title: string
  rating: string
  review: number
  image: string
}
interface SimpleItemProps {
  v: SimpleItemType
  idx: number
  isRank: boolean
}

const SimpleItem = ({ v: item, idx, isRank }: SimpleItemProps) => {
  const router = useRouter()

  return (
    <div className="flex flex-col gap-1.5 cursor-pointer" onClick={() => router.push(`/shop/${item.id}`)}>
      <div className={`${isRank && 'relative'}`}>
        {isRank && (
          <div className="absolute bg-blue400 w-[16%] h-[16%] text-white flex justify-center items-center rounded-tl-lg rounded-br-lg">
            <p className="text-labelSmall">{idx + 1}</p>
          </div>
        )}
        <Image src={item.image} width={148} height={148} alt={`${item.title}-${item.price}`} className="rounded-lg" />
      </div>
      <div className="flex flex-col gap-0.5">
        <p className="text-labelMedium">{item.price} 원</p>
        <p className="text-bodySmall">{item.title}</p>
      </div>
      <div className="flex gap-1">
        <Star size={16} className="text-yellow500" />
        <p className="text-bodyTiny text-gray600">{item.rating}</p>
        <p className="text-bodyTiny text-gray400">({item.review})</p>
      </div>
    </div>
  )
}
export default SimpleItem
