'use client'

import { ItemLayout, Banner } from '@/components'
import Slider from './Slider'
import { useState } from 'react'

const BannerDescription = {
  title: '마음샵',
  description: '나만의 루틴과 목표를 설정하여 자기관리에 도전해보세요.',
}
/** 더미데이터1 */
const smallitem = [
  {
    id: '1',
    price: '10,000',
    title: '마음샵',
    rating: '4.5',
    review: 100,
    image: 'https://gdimg.gmarket.co.kr/2702134841/still/400?ver=1671150539',
  },
  {
    id: '1',
    price: '10,000',
    title: '마음샵',
    rating: '4.5',
    review: 100,
    image: 'https://gdimg.gmarket.co.kr/2702134841/still/400?ver=1671150539',
  },
  {
    id: '1',
    price: '10,000',
    title: '마음샵',
    rating: '4.5',
    review: 100,
    image: 'https://gdimg.gmarket.co.kr/2702134841/still/400?ver=1671150539',
  },
  {
    id: '1',
    price: '10,000',
    title: '마음샵',
    rating: '4.5',
    review: 100,
    image: 'https://gdimg.gmarket.co.kr/2702134841/still/400?ver=1671150539',
  },
  {
    id: '1',
    price: '10,000',
    title: '마음샵',
    rating: '4.5',
    review: 100,
    image: 'https://gdimg.gmarket.co.kr/2702134841/still/400?ver=1671150539',
  },
  {
    id: '1',
    price: '10,000',
    title: '마음샵',
    rating: '4.5',
    review: 100,
    image: 'https://gdimg.gmarket.co.kr/2702134841/still/400?ver=1671150539',
  },
  {
    id: '1',
    price: '10,000',
    title: '마음샵',
    rating: '4.5',
    review: 100,
    image: 'https://gdimg.gmarket.co.kr/2702134841/still/400?ver=1671150539',
  },
]
/** 더미데이터2 */
const bigitem = [
  {
    image: 'https://gdimg.gmarket.co.kr/2702134841/still/400?ver=1671150539',

    id: '1',
    sale: '10',
    price: '10,000',
    title: '마음샵',
    rating: '0',
    review: 100,
    hits: 23,
  },
  {
    image: 'https://gdimg.gmarket.co.kr/2702134841/still/400?ver=1671150539',

    id: '1',
    sale: '10',
    price: '10,000',
    title: '마음샵',
    rating: '0.5',
    review: 100,
    hits: 23,
  },
  {
    image: 'https://gdimg.gmarket.co.kr/2702134841/still/400?ver=1671150539',

    id: '1',
    sale: '10',
    price: '10,000',
    title: '마음샵',
    rating: '1',
    review: 100,
    hits: 23,
  },
  {
    id: '1',
    image: 'https://gdimg.gmarket.co.kr/2702134841/still/400?ver=1671150539',
    price: '10,000',
    title: '마음샵',
    rating: '1.5',
    review: 100,
    hits: 23,
  },
  {
    image: 'https://gdimg.gmarket.co.kr/2702134841/still/400?ver=1671150539',

    id: '1',
    sale: '10',
    price: '10,000',
    title: '마음샵',
    rating: '2',
    review: 100,
    hits: 23,
  },
  {
    id: '1',
    image: 'https://gdimg.gmarket.co.kr/2702134841/still/400?ver=1671150539',
    price: '10,000',
    title: '마음샵',
    rating: '2.5',
    review: 100,
    hits: 23,
  },
  {
    image: 'https://gdimg.gmarket.co.kr/2702134841/still/400?ver=1671150539',

    id: '1',
    sale: '10',
    price: '10,000',
    title: '마음샵',
    rating: '3',
    review: 100,
    hits: 23,
  },
  {
    image: 'https://gdimg.gmarket.co.kr/2702134841/still/400?ver=1671150539',

    id: '1',
    sale: '10',
    price: '10,000',
    title: '마음샵',
    rating: '3.5',
    review: 100,
    hits: 23,
  },
  {
    image: 'https://gdimg.gmarket.co.kr/2702134841/still/400?ver=1671150539',

    id: '1',
    sale: '10',
    price: '10,000',
    title: '마음샵',
    rating: '4',
    review: 100,
    hits: 23,
  },
  {
    image: 'https://gdimg.gmarket.co.kr/2702134841/still/400?ver=1671150539',

    id: '1',
    sale: '10',
    price: '10,000',
    title: '마음샵',
    rating: '4.5',
    review: 100,
    hits: 23,
  },
  {
    image: 'https://gdimg.gmarket.co.kr/2702134841/still/400?ver=1671150539',

    id: '1',
    sale: '10',
    price: '10,000',
    title: '마음샵',
    rating: '5',
    review: 100,
    hits: 23,
  },
]
const Shop = () => {
  const [type, setType] = useState<string>('')

  return (
    <div>
      <Banner {...BannerDescription} />
      <div className="flex w-full px-8 pt-10 pb-60 justify-center">
        <div className="w-[1200px] flex flex-col gap-16">
          <Slider />
          <ItemLayout title="샵 주간랭킹" isRank items={smallitem} />
          <ItemLayout title="인기 기타 상품" items={smallitem} />
          <ItemLayout title="마음샵 상품 둘러보기" items={bigitem} isDetail type={type} setType={setType} />
        </div>
      </div>
    </div>
  )
}

export default Shop
