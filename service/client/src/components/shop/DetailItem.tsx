import Image from 'next/image'
import { useRouter } from 'next/navigation'
import ShowStar from './ShowStar'

export interface DetailItemType {
  id: string
  image: string
  sale?: string
  price: string
  title: string
  rating: string
  review: number
  hits?: number
}
interface DetailItemProps {
  v: DetailItemType
}

const DetailItem = ({ v: item }: DetailItemProps) => {
  const router = useRouter()
  return (
    <div className="flex flex-col gap-2 cursor-pointer" onClick={() => router.push(`/shop/${item.id}`)}>
      <Image src={item.image} width={192} height={192} className="rounded-lg" alt={`${item.title}-${item.price}`} />
      <div className="flex flex-col gap-1">
        <div className="flex gap-1">
          {item.sale && <p className="text-bodyLarge text-red500">{item.sale}%</p>}
          <p className="text-labelLarge">{item.price} 원</p>
        </div>
        <p className="text-bodyMedium text-gray800">{item.title}</p>
        <div className="flex gap-1">
          <ShowStar rating={item.rating} />
          <p className="text-bodyTiny text-gray600">{item.rating}</p>
          <p className="text-bodyTiny text-gray400">({item.review})</p>
        </div>
        <p className="text-bodyTiny text-gray400">{item.hits}명 구경함</p>
      </div>
    </div>
  )
}

export default DetailItem
