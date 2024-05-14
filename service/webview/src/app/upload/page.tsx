import Title from './title'
import SelectMedia from './selectMidea'
import ContentInput from './contentInput'
import Tags from './tag'
import Submit from './submit'
import Loading from './Loading'

const Upload = () => {
  const loading = false

  return (
    <div className="bg-black w-full overflow-y-scroll flex flex-col gap-4 pb-[88px]">
      {loading ? (
        <Loading />
      ) : (
        <>
          <Title title="새로운 피클" type="goBack" />
          <div className="flex flex-col mt-12 ">
            <SelectMedia />
            <ContentInput />
            <Tags />
          </div>
        </>
      )}
      <Submit type={loading ? 'loading' : 'submit'} />
    </div>
  )
}

export default Upload
