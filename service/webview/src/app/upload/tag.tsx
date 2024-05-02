import { Button, Close, Tag } from '@package/ui'

const Tags = () => {
  return (
    <div className="px-5 py-3 gap-3 flex flex-wrap items-center">
      <Button kind="silverDark" icon={<Tag />} fontSize="small">
        태그 추가
      </Button>
      <TagArticle title="태그1" />
    </div>
  )
}

interface TagArticleProps {
  title: string
}

const TagArticle = ({ title }: TagArticleProps) => {
  return (
    <button className="h-min rounded-3xl bg-blue900 text-blue500 text-labelMedium flex gap-2 px-4 py-2 items-center justify-center">
      #{title}
      <Close size={16} />
    </button>
  )
}

export default Tags
