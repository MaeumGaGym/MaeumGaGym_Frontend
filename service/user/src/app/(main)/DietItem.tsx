'use client'

interface DietItemProps {
  title: string
  subTitle: string
  dietInfoList: {
    name: string
    gram: number
    kcal: number
  }[]
}

const DietItem = ({ title, subTitle, dietInfoList }: DietItemProps) => {
  const kcalSum = dietInfoList.reduce((acc, v) => acc + v.kcal, 0)
  return (
    <div className="flex flex-col gap-[13px] pb-2">
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <span className="text-black text-titleSmall">{title}</span>
          <span className="text-gray600 text-labelSmall">{subTitle}</span>
        </div>
        <span className="text-blue500 text-bodyMedium">{kcalSum.toLocaleString('ko-KR')}Kcal</span>
      </div>
      <div className="w-full h-px rounded-[1px] bg-gray100" />
      {dietInfoList.map((v, i) => (
        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <span className="text-gray700 text-labelSmall">{v.name}</span>
            <span className="text-gray400 text-bodySmall">{v.gram}g</span>
          </div>
          <span className="text-gray600 text-bodySmall">{v.kcal.toLocaleString('ko-KR')}Kcal</span>
        </div>
      ))}
    </div>
  )
}

export default DietItem
