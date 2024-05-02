import Title from './title'
import SelectMedia from './selectMidea'
import ContentInput from './contentInput'
import Tags from './tag'
import Submit from './submit'

const Upload = () => {
  return (
    <div className="bg-black w-full overflow-y-scroll flex flex-col gap-4 pb-[88px]">
      <Title title="새로운 피클" type="goBack" />
      <SelectMedia />
      <ContentInput />
      <Tags />
      <Submit />
    </div>
  )
}

export default Upload
