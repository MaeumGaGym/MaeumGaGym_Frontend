'use client'
import { addTagPickleUpload } from '@/utils/store/modules/pickleUpload'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'

const Result = () => {
  return (
    <div className="flex flex-col py-1">
      <Article title="바벨" />
      <Article title="바벨" />
      <Article title="바벨" />
      <Article title="바벨" />
      <Article title="바벨" />
      <Article title="바벨" />
    </div>
  )
}

interface ArticleProps {
  title: string
}
const Article = ({ title }: ArticleProps) => {
  const nav = useRouter()
  const dispatch = useDispatch()

  const onClickArticle = () => {
    nav.back()
    dispatch(addTagPickleUpload({ data: title }))
  }
  return (
    <div className="flex justify-between px-5 py-4 text-bodyMedium cursor-pointer" onClick={onClickArticle}>
      <p className="text-white">{title}</p>
      <p className="text-gray400">팔</p>
    </div>
  )
}

export default Result
