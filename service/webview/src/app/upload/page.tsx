import Title from './Title'
import SelectMedia from './SelectMedia'
import ContentInput from './ContentInput'
import Tags from './Tag'
import Submit from './Submit'
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
