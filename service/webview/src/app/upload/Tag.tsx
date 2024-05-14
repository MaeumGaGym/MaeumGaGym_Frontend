'use client'
import { deleteTagPickleUpload } from '@/utils/store/modules/pickleUpload'
import { RootState } from '@/utils/store/store'
import { Button, Close, Tag } from '@package/ui'
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'

const Tags = () => {
  const { tag } = useSelector((state: RootState) => state.pickle)
  const nav = useRouter()

  return (
    <div className="px-5 py-3 gap-3 flex flex-wrap items-center">
      <Button kind="silverDark" icon={<Tag />} fontSize="small" onClick={() => nav.push('/upload/search')}>
        태그 추가
      </Button>
      {tag.map((v, idx) => (
        <TagArticle title={v} key={v + idx} />
      ))}
    </div>
  )
}

interface TagArticleProps {
  title: string
}

const TagArticle = ({ title }: TagArticleProps) => {
  const dispatch = useDispatch()

  return (
    <div className="h-min rounded-3xl bg-blue900 text-blue500 text-labelMedium flex gap-2 px-4 py-2 items-center justify-center">
      #{title}
      <Close size={16} onClick={() => dispatch(deleteTagPickleUpload({ data: title }))} />
    </div>
  )
}

export default Tags
