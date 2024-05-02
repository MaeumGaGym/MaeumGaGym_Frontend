import { Add } from '@package/ui'

const SelectMedia = () => {
  return (
    <div className="self-center w-[180px] h-80 bg-gray800 rounded-2xl relative cursor-pointer">
      <Add size={32} className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
    </div>
  )
}
export default SelectMedia
