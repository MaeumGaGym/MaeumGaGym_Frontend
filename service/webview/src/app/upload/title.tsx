'use client'
import { Close } from '@package/ui'
import { useRouter } from 'next/navigation'

interface PropsType {
  title: string
  type: 'goBack'
}
const Title = ({ title, type }: PropsType) => {
  const nav = useRouter()

  const typeOnClick = () => {
    if (type === 'goBack') {
      nav.back()
    }
  }

  return (
    <div className="w-full py-2 px-5 flex gap-6 items-center">
      <Close className="text-white" onClick={typeOnClick} size={32} />
      <p className="text-white text-titleMedium">{title}</p>
    </div>
  )
}

export default Title
