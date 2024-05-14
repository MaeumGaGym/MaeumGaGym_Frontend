'use client'
import { updateTextPickleUpload } from '@/utils/store/modules/pickleUpload'
import { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'

const ContentInput = () => {
  const textarea = useRef<HTMLTextAreaElement>(null)
  const [inputData, setInputData] = useState<{ title: string; content: string }>({ title: '', content: '' })
  const dispatch = useDispatch()

  const handleResizeHeight = () => {
    if (!textarea.current) return
    textarea.current.style.height = 'auto'
    textarea.current.style.height = textarea.current.scrollHeight + 'px'
    setInputData({ ...inputData, content: textarea.current.value })
  }
  useEffect(() => {
    dispatch(updateTextPickleUpload({ data: inputData.title, type: 'TITLE' }))
    dispatch(updateTextPickleUpload({ data: inputData.content, type: 'CONTENT' }))
  }, [inputData])

  return (
    <div className="flex flex-col mb-2">
      <input
        value={inputData.title}
        onChange={e => setInputData({ ...inputData, title: e.target.value })}
        type="text"
        className="w-full text-white placeholder:text-gray300 bg-transparent px-5 py-4 outline-none text-titleMedium"
        placeholder="제목을 입력하세요..."
      />
      <textarea
        ref={textarea}
        onChange={handleResizeHeight}
        value={inputData.content}
        className="w-full text-white placeholder:text-gray300 bg-transparent px-5 py-3 outline-none text-bodyMedium resize-none"
        placeholder="내용을 입력하세요..."
      />
    </div>
  )
}

export default ContentInput
