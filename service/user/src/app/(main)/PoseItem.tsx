import { Chevron } from '@package/ui'

interface PoseItemProps {
  name: string
  reps: number
  sets: number
}

const PoseItem = ({ name, reps, sets }: PoseItemProps) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-[18px] items-center">
        <div className="w-16 h-16 flex justify-center items-center rounded-lg bg-gray25"></div>
        <div className="flex flex-col gap-1">
          <span className="text-gray800 text-bodyMedium">{name}</span>
          <span className="text-gray400 text-bodySmall">
            {reps}개 | {sets}세트
          </span>
        </div>
      </div>
      <Chevron direction="right" className="transition-all text-gray200 hover:text-gray700" />
    </div>
  )
}

export default PoseItem
