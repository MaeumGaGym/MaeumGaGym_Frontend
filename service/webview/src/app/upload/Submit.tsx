'use client'
import { RootState } from '@/utils/store/store'
import { Button } from '@package/ui'
import { useSelector } from 'react-redux'

interface SubmitProps {
  type: 'loading' | 'submit'
}
const Submit = ({ type }: SubmitProps) => {
  const { title, content, file } = useSelector((state: RootState) => state.pickle)

  return (
    <div className="p-5 lg:w-[448px] md:w-[448px] sm:w-full fixed bottom-0">
      <Button className="w-full">{type === 'loading' ? '확인' : type === 'submit' && '피클 게시하기'}</Button>
    </div>
  )
}
export default Submit
