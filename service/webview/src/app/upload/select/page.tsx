import Title from '../title'
import Media from './Media'

const Select = () => {
  return (
    <div className="bg-black w-full overflow-y-scroll flex flex-col gap-4">
      <Title title="미디어 선택" type="goBack" />
      <div className="flex flex-col mt-12">
        <Media />
      </div>
    </div>
  )
}

export default Select
