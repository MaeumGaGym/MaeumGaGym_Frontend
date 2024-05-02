'use client'
import { useRef, useState } from 'react'

const ContentInput = () => {
  const textarea = useRef<HTMLTextAreaElement>(null)

  const [titleInput, setTitleInput] = useState<string>('')
  const [contentInput, setContentInput] = useState<string>('')

  const handleResizeHeight = () => {
    if (!textarea.current) return
    textarea.current.style.height = 'auto'
    textarea.current.style.height = textarea.current.scrollHeight + 'px'
    setContentInput(textarea.current.value)
  }

  return (
    <div className="flex flex-col mb-2">
      <input
        value={titleInput}
        onChange={e => setTitleInput(e.target.value)}
        type="text"
        className="w-full text-white placeholder:text-gray300 bg-transparent px-5 py-4 outline-none text-titleMedium"
        placeholder="제목을 입력하세요..."
      />
      <textarea
        ref={textarea}
        onChange={handleResizeHeight}
        value={contentInput}
        className="w-full text-white placeholder:text-gray300 bg-transparent px-5 py-3 outline-none text-bodyMedium resize-none"
        placeholder="내용을 입력하세요..."
      />
    </div>
  )
}

export default ContentInput
