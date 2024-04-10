import { useInput } from '@/hooks/useInput'

interface PropsType {
  placeholder?: string
  buttonText: string
  profile_image: string
}

const CommentInput = ({ placeholder, buttonText, profile_image }: PropsType) => {
  const { state: newComment, onChange: onCommentChange, setState: setNewComment } = useInput<string>({})

  return (
    <div className="flex gap-[18px] px-3 py-5 items-center">
      <div className="w-10 h-10 bg-white rounded-full basis-10 shrink-0">
        {/* <Image src={profile_image} alt="profileImg" width={40} height={40} className="rounded-50%" /> */}
      </div>
      <input
        placeholder={placeholder}
        className="h-8 outline-none bg-transparent placeholder:text-gray400 py-[6px] w-full"
        onChange={onCommentChange}
        value={newComment}
      />
      {newComment.length !== 0 && (
        <button className="text-labelMedium text-blue400 shrink-0" onClick={() => setNewComment('')}>
          {buttonText}
        </button>
      )}
    </div>
  )
}

export default CommentInput
