'use client'

import { Chevron } from '@package/ui'
import { useRouter } from 'next/navigation'
import SimpleItem, { SimpleItemType } from './SimpleItem'
import SelectItemType from './SelectItemType'
import DetailItem, { DetailItemType } from './DetailItem'

interface ItemLayoutProps {
  title: string
  items: SimpleItemType[] | DetailItemType[]
  isDetail?: boolean
  // isRank는 isDetail이 false일 때만 사용
  isRank?: boolean
  // type과 setType은 isDetail이 true일 때만 사용
  type?: string
  setType?: React.Dispatch<React.SetStateAction<string>>
}
const ItemLayout = ({ title, items, isRank = false, isDetail, type, setType }: ItemLayoutProps) => {
  const router = useRouter()

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between px-5">
        <p className="text-labelLarge">{title}</p>
        {isRank && (
          <button className="flex gap-1 text-gray500 items-center" onClick={() => router.push('/')}>
            <p>랭킹 전체보기</p>
            <Chevron size={20} direction="right" />
          </button>
        )}
      </div>
      {isDetail ? (
        <div className="flex gap-y-6 flex-col">
          {setType && <SelectItemType type={type || ''} setType={setType} />}
          <div className="flex gap-y-11 gap-x-[4px] px-5 flex-wrap">
            {items.map((v, idx) => (
              <DetailItem v={v} key={`${v.title}-${v.price}-${idx}`} />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex gap-2 px-5">
          {items.map((v: SimpleItemType, idx) => (
            <SimpleItem v={v} idx={idx} isRank={isRank} key={`${v.title}-${v.price}-${idx}`} />
          ))}
        </div>
      )}
    </div>
  )
}

export default ItemLayout
